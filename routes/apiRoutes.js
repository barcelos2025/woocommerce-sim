const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
const orderController = require("../controllers/orderController");
const systemController = require("../controllers/systemController");
const { apiLogs } = require("../data/mockData");

// Helper para Base URL Dinâmica
const getBaseUrl = (req) => {
  const protocolo = req.headers["x-forwarded-proto"] || req.protocol;
  const host = req.get("host");
  return `${protocolo}://${host}`;
};

// Middleware para Headers de Paginação (Expor para o browser/CORS)
router.use((req, res, next) => {
  res.setHeader("Access-Control-Expose-Headers", "X-WP-Total, X-WP-TotalPages, Link");
  next();
});

// 1. Discovery Routes
router.get("/wp-json", (req, res) => {
  const baseUrl = getBaseUrl(req);
  res.json({
    name: "WooCommerce Simulator",
    description: "Simulador de API WooCommerce para integração",
    url: baseUrl,
    namespaces: ["wc/v1", "wc/v2", "wc/v3"],
    authentication: [],
    _links: { help: [{ href: "https://woocommerce.github.io/woocommerce-rest-api-docs/" }] }
  });
});

router.get("/wp-json/wc", (req, res) => {
  res.json({
    namespace: "wc",
    routes: { "/wc/v1": {}, "/wc/v2": {}, "/wc/v3": {} }
  });
});

// 2. WC v3 Root & System
router.get("/wp-json/wc/v3", (req, res) => {
  const baseUrl = getBaseUrl(req);
  res.json({
    namespace: "wc/v3",
    methods: ["GET", "POST", "PUT", "DELETE"],
    _links: {
      self: { href: `${baseUrl}/wp-json/wc/v3` },
      logs: { href: `${baseUrl}/wp-json/wc/v3/logs` },
      products: { href: `${baseUrl}/wp-json/wc/v3/products` },
      orders: { href: `${baseUrl}/wp-json/wc/v3/orders` },
      customers: { href: `${baseUrl}/wp-json/wc/v3/customers` },
      system_status: { href: `${baseUrl}/wp-json/wc/v3/system_status` },
      taxes: { href: `${baseUrl}/wp-json/wc/v3/taxes` },
      shipping_zones: { href: `${baseUrl}/wp-json/wc/v3/shipping/zones` }
    }
  });
});

router.get("/wp-json/wc/v3/system_status", systemController.getSystemStatus);
router.get("/wp-json/wc/v3/settings", systemController.getSettings);
router.get("/wp-json/wc/v3/customers", systemController.getCustomers);
router.get("/wp-json/wc/v3/taxes", systemController.getTaxes);
router.get("/wp-json/wc/v3/shipping/zones", systemController.getShippingZones);
router.post("/wp-json/wc/v3/webhooks", systemController.createWebhook);

// 3. Produtos
router.get("/wp-json/wc/v3/products", productController.getAllProducts);
router.get("/wp-json/wc/v3/products/:id", productController.getProductById);

// 4. Pedidos
router.get("/wp-json/wc/v3/orders", orderController.getAllOrders);
router.get("/wp-json/wc/v3/orders/:id", orderController.getOrderById);
router.post("/wp-json/wc/v3/orders", orderController.createOrder);

// 5. Endpoint de Logs
router.get("/wp-json/wc/v3/logs", (req, res) => {
  res.json(apiLogs);
});

router.delete("/wp-json/wc/v3/logs", (req, res) => {
  apiLogs.length = 0;
  res.json({ message: "Logs limpos com sucesso" });
});

// 6. Status da API (Root Principal)
router.get("/", (req, res) => {
  res.json({ status: "online", simulator: "WooCommerce v3", version: "4.0 (Wiio Ready)" });
});

// Suporte a HEAD e OPTIONS para rotas principais
const mainRoutes = [
  "/",
  "/wp-json",
  "/wp-json/wc",
  "/wp-json/wc/v3",
  "/wp-json/wc/v3/products",
  "/wp-json/wc/v3/orders",
  "/wp-json/wc/v3/system_status",
  "/wp-json/wc/v3/customers",
  "/wp-json/wc/v3/webhooks"
];

mainRoutes.forEach((path) => {
  router.options(path, (req, res) => res.status(200).end());
  router.head(path, (req, res) => res.status(200).end());
});

module.exports = router;
