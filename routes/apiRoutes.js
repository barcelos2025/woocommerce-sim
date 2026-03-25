const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
const orderController = require("../controllers/orderController");
const { apiLogs } = require("../data/mockData");

// Status da API
router.get("/", (req, res) => {
  res.json({
    status: "online",
    message: "Woocommerce Simulator API is running",
    version: "v3"
  });
});

// Status Woo Fake
router.get("/wp-json/wc/v3", (req, res) => {
  const protocolo = req.headers["x-forwarded-proto"] || req.protocol;
  const host = req.get("host"); // req.get('host') já lida bem com proxy se trust proxy estiver ligado
  const baseUrl = `${protocolo}://${host}`;

  res.json({
    namespace: "wc/v3",
    methods: ["GET", "POST", "PUT", "DELETE"],
    _links: {
      self: {
        href: `${baseUrl}/wp-json/wc/v3`
      },
      logs: {
        href: `${baseUrl}/wp-json/wc/v3/logs`
      }
    }
  });
});

// Endpoint de Logs (Links dos Logs)
router.get("/wp-json/wc/v3/logs", (req, res) => {
  res.json(apiLogs);
});

// Produtos
router.get("/wp-json/wc/v3/products", productController.getAllProducts);
router.get("/wp-json/wc/v3/products/:id", productController.getProductById);

// Pedidos
router.get("/wp-json/wc/v3/orders", orderController.getAllOrders);
router.get("/wp-json/wc/v3/orders/:id", orderController.getOrderById);
router.post("/wp-json/wc/v3/orders", orderController.createOrder);

module.exports = router;
