const { systemStatus, settings, customers, shippingZones, taxRates, webhooks } = require("../data/mockData");

const getSystemStatus = (req, res) => {
  res.json(systemStatus);
};

const getSettings = (req, res) => {
  res.json(settings);
};

const getCustomers = (req, res) => {
  res.json(customers);
};

const getShippingZones = (req, res) => {
  res.json(shippingZones);
};

const getTaxes = (req, res) => {
  res.json(taxRates);
};

const createWebhook = (req, res) => {
  const data = req.body;
  const newWebhook = {
    id: Math.floor(Math.random() * 1000) + 1,
    ...data,
    status: "active",
    date_created: new Date().toISOString()
  };
  webhooks.push(newWebhook);
  res.status(201).json(newWebhook);
};

const getStoreData = (req, res) => {
  const { products, orders, customers, settings, systemStatus, shippingZones, taxRates } = require("../data/mockData");
  
  res.json({
    store: {
      name: "WooCommerce Simulator",
      description: "Simulador de API para integração",
      url: `${req.headers["x-forwarded-proto"] || req.protocol}://${req.get("host")}`
    },
    products,
    orders,
    customers,
    settings,
    system_status: systemStatus,
    taxes: taxRates,
    shipping_zones: shippingZones
  });
};

module.exports = {
  getSystemStatus,
  getSettings,
  getCustomers,
  getShippingZones,
  getTaxes,
  createWebhook,
  getStoreData
};
