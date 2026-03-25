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
    name: "WooCommerce Simulator v5.0",
    description: "Plataforma de Simulação de Alta Fidelidade para Integração Wiio",
    url: baseUrl,
    home: baseUrl,
    namespaces: [
      "wc/v1",
      "wc/v2",
      "wc/v3",
      "wc-telemetry"
    ],
    authentication: {
      "oauth1.0a": { "description": "WooCommerce REST API uses OAuth 1.0a to authenticate requests." },
      "application-passwords": { "description": "WordPress Application Passwords are also supported." }
    },
    _links: {
      help: [{ href: "https://woocommerce.github.io/woocommerce-rest-api-docs/" }],
      self: [{ href: `${baseUrl}/wp-json` }]
    }
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
router.get("/wp-json/wc/v3/tax_classes", systemController.getTaxClasses);
router.get("/wp-json/wc/v3/shipping/zones", systemController.getShippingZones);
router.get("/wp-json/wc/v3/payment_gateways", systemController.getPaymentGateways);
router.get("/wp-json/wc/v3/webhooks", systemController.getWebhooks);
router.post("/wp-json/wc/v3/webhooks", systemController.createWebhook);
router.get("/wp-json/wc/v3/data", systemController.getStoreData);

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
  const baseUrl = getBaseUrl(req);
  res.json({ 
    status: "online", 
    simulator: "Zygora Store", 
    api_version: "wc/v3",
    environment: "production",
    discovery_url: `${baseUrl}/wp-json/wc/v3/data`,
    _links: {
      help: [{ href: "https://woocommerce.github.io/woocommerce-rest-api-docs/" }]
    }
  });
});

// Suporte a HEAD e OPTIONS para rotas principais (Fidelidade Total WC)
const mainRoutes = [
  "/",
  "/wp-json",
  "/wp-json/wc",
  "/wp-json/wc/v1",
  "/wp-json/wc/v2",
  "/wp-json/wc/v3",
  "/wp-json/wc/v3/products",
  "/wp-json/wc/v3/orders",
  "/wp-json/wc/v3/customers",
  "/wp-json/wc/v3/system_status",
  "/wp-json/wc/v3/settings",
  "/wp-json/wc/v3/taxes",
  "/wp-json/wc/v3/shipping/zones",
  "/wp-json/wc/v3/payment_gateways",
  "/wp-json/wc/v3/webhooks",
  "/wp-json/wc/v3/data",
  "/wp-json/wc/v3/reports",
  "/wp-json/wc/v3/logs"
];

mainRoutes.forEach((path) => {
  router.options(path, (req, res) => {
    res.setHeader("Allow", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
    res.status(200).end();
  });
  // HEAD retorna os mesmos headers que o GET
  router.head(path, (req, res) => {
    res.setHeader("X-Robots-Tag", "noindex");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Content-Type", "application/json; charset=UTF-8");
    res.setHeader("X-WP-Total", "0"); // Placeholder se necessário
    res.status(200).end();
  });
});

module.exports = router;
