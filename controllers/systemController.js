const { 
  systemStatus, 
  settings, 
  customers, 
  shippingZones, 
  taxRates, 
  webhooks, 
  paymentGateways, 
  countries, 
  currencies, 
  reports, 
  stats 
} = require("../data/mockData");

const getStoreData = (req, res) => {
  const protocolo = req.headers["x-forwarded-proto"] || req.protocol;
  const host = req.get("host");
  const baseUrl = `${protocolo}://${host}`;

  // Engine recursivo robusto para injetar a base URL em todos os links e referências
  const injectBaseUrl = (obj) => {
    if (Array.isArray(obj)) {
      return obj.map(item => injectBaseUrl(item));
    } else if (obj !== null && typeof obj === "object") {
      const newObj = {};
      for (const key in obj) {
        const val = obj[key];
        // Campos que tradicionalmente contêm caminhos relativos na API WC
        if (["href", "permalink", "src", "home_url", "site_url", "payment_url", "avatar_url"].includes(key) && typeof val === "string" && val.startsWith("/")) {
          newObj[key] = baseUrl + val;
        } else {
          newObj[key] = injectBaseUrl(val);
        }
      }
      return newObj;
    }
    return obj;
  };

  const response = {
    store: injectBaseUrl({
      name: "WooCommerce Simulator v5.0",
      description: "Ambiente de Simulação de Paridade Total para Integração Wiio",
      url: "/",
      home_url: "/",
      site_title: "WooCommerce Simulator",
      admin_email: "admin@woocommerce-simulator.local",
      timezone: "America/Sao_Paulo",
      currency: "BRL",
      currency_symbol: "R$",
      country: "BR",
      language: "pt_BR",
      wordpress_version: "6.4.3",
      woocommerce_version: "8.5.1",
      meta_data: []
    }),
    products: injectBaseUrl(require("../data/mockData").products),
    orders: injectBaseUrl(require("../data/mockData").orders),
    customers: injectBaseUrl(require("../data/mockData").customers),
    settings: require("../data/mockData").settings,
    system_status: injectBaseUrl(require("../data/mockData").systemStatus),
    taxes: injectBaseUrl(require("../data/mockData").taxRates),
    shipping_zones: injectBaseUrl(require("../data/mockData").shippingZones),
    payment_gateways: injectBaseUrl(require("../data/mockData").paymentGateways),
    webhooks: injectBaseUrl(require("../data/mockData").webhooks),
    reports: injectBaseUrl(require("../data/mockData").reports),
    countries: require("../data/mockData").countries,
    currencies: require("../data/mockData").currencies,
    stats: require("../data/mockData").stats,
    _links: {
      self: [{ href: `${baseUrl}/wp-json/wc/v3/data` }],
      help: [{ href: "https://woocommerce.github.io/woocommerce-rest-api-docs/" }],
      up: [{ href: `${baseUrl}/wp-json/wc/v3` }]
    }
  };

  console.log(`[ULTIMATE PARITY] /data discovery accessed by ${req.ip} | Host: ${host}`);

  res.status(200).json(response);
};

const getSystemStatus = (req, res) => {
  const protocolo = req.headers["x-forwarded-proto"] || req.protocol;
  const host = req.get("host");
  const baseUrl = `${protocolo}://${host}`;

  const injectBaseUrl = (obj) => {
    if (Array.isArray(obj)) return obj.map(item => injectBaseUrl(item));
    if (obj !== null && typeof obj === "object") {
      const newObj = {};
      for (const key in obj) {
        if (["href", "permalink", "src", "home_url", "site_url", "avatar_url"].includes(key) && typeof obj[key] === "string" && obj[key].startsWith("/")) {
          newObj[key] = baseUrl + obj[key];
        } else {
          newObj[key] = injectBaseUrl(obj[key]);
        }
      }
      return newObj;
    }
    return obj;
  };

  res.json(injectBaseUrl(systemStatus));
};

const getCustomers = (req, res) => {
  const protocolo = req.headers["x-forwarded-proto"] || req.protocol;
  const host = req.get("host");
  const baseUrl = `${protocolo}://${host}`;

  const injectBaseUrl = (obj) => {
    if (Array.isArray(obj)) return obj.map(item => injectBaseUrl(item));
    if (obj !== null && typeof obj === "object") {
      const newObj = {};
      for (const key in obj) {
        if (["href", "permalink", "src", "avatar_url"].includes(key) && typeof obj[key] === "string" && obj[key].startsWith("/")) {
          newObj[key] = baseUrl + obj[key];
        } else {
          newObj[key] = injectBaseUrl(obj[key]);
        }
      }
      return newObj;
    }
    return obj;
  };

  res.json(injectBaseUrl(customers));
};

module.exports = {
  getSystemStatus,
  getSettings: (req, res) => res.json(settings),
  getCustomers,
  getShippingZones: (req, res) => {
    const protocolo = req.headers["x-forwarded-proto"] || req.protocol;
    const host = req.get("host");
    const baseUrl = `${protocolo}://${host}`;
    const inject = (obj) => {
      if (Array.isArray(obj)) return obj.map(item => inject(item));
      if (obj !== null && typeof obj === "object") {
        const n = {};
        for(let k in obj) n[k] = (["href", "permalink"].includes(k) && typeof obj[k] === "string" && obj[k].startsWith("/")) ? baseUrl + obj[k] : inject(obj[k]);
        return n;
      }
      return obj;
    };
    res.json(inject(shippingZones));
  },
  getTaxes: (req, res) => {
    const protocolo = req.headers["x-forwarded-proto"] || req.protocol;
    const host = req.get("host");
    const baseUrl = `${protocolo}://${host}`;
    const inject = (obj) => {
      if (Array.isArray(obj)) return obj.map(item => inject(item));
      if (obj !== null && typeof obj === "object") {
        const n = {};
        for(let k in obj) n[k] = (["href", "permalink"].includes(k) && typeof obj[k] === "string" && obj[k].startsWith("/")) ? baseUrl + obj[k] : inject(obj[k]);
        return n;
      }
      return obj;
    };
    res.json(inject(taxRates));
  },
  createWebhook: (req, res) => {
    const d = req.body;
    const n = { id: Math.floor(Math.random()*1000)+1, ...d, status: "active", date_created: new Date().toISOString() };
    require("../data/mockData").webhooks.push(n);
    res.status(201).json(n);
  },
  getStoreData
};
