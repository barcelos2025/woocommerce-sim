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

const getWebhooks = (req, res) => {
  try {
    const { search } = req.query;
    const protocolo = req.headers["x-forwarded-proto"] || req.protocol;
    const host = req.get("host");
    const baseUrl = `${protocolo}://${host}`;

    // Acesso seguro aos dados mockados com fallback para array vazio
    const allWebhooks = require("../data/mockData").webhooks || [];
    let filteredWebhooks = [...allWebhooks];

    // Lógica de busca insensível a maiúsculas/minúsculas
    if (search && typeof search === "string") {
      const searchLower = search.toLowerCase();
      filteredWebhooks = filteredWebhooks.filter(w => 
        (w.name && w.name.toLowerCase().includes(searchLower)) || 
        (w.topic && w.topic.toLowerCase().includes(searchLower))
      );
    }

    // Engine recursivo para injetar Base URL em links relativos
    const injectBaseUrl = (obj) => {
      if (Array.isArray(obj)) return obj.map(item => injectBaseUrl(item));
      if (obj !== null && typeof obj === "object") {
        const newObj = {};
        for (const key in obj) {
          const val = obj[key];
          if (["href", "permalink", "src"].includes(key) && typeof val === "string" && val.startsWith("/")) {
            newObj[key] = baseUrl + val;
          } else {
            newObj[key] = injectBaseUrl(val);
          }
        }
        return newObj;
      }
      return obj;
    };

    const finalWebhooks = injectBaseUrl(filteredWebhooks);

    // Headers Padrão WooCommerce REST API para Listagens
    res.setHeader("X-WP-Total", finalWebhooks.length);
    res.setHeader("X-WP-TotalPages", 1);
    
    console.log(`[STABILITY v5.2] Webhooks search: "${search || 'none'}" | Found: ${finalWebhooks.length}`);

    return res.status(200).json(finalWebhooks);
  } catch (error) {
    console.error("[CRITICAL BUG] Error in getWebhooks controller:", error);
    // Retorno JSON seguro para evitar que o client (Wiio) receba um erro 500 sem corpo
    return res.status(500).json({
      code: "internal_server_error",
      message: "Erro interno ao processar webhooks.",
      error: error.message
    });
  }
};

const getStoreData = (req, res) => {
  const startTime = Date.now();
  try {
    const protocolo = req.headers["x-forwarded-proto"] || req.protocol;
    const host = req.get("host");
    const baseUrl = `${protocolo}://${host}`;

    // Engine recursivo de injeção de link absoluto
    const injectBaseUrl = (obj) => {
      if (Array.isArray(obj)) return obj.map(item => injectBaseUrl(item));
      if (obj !== null && typeof obj === "object") {
        const newObj = {};
        for (const key in obj) {
          const val = obj[key];
          if (["href", "permalink", "src"].includes(key) && typeof val === "string" && val.startsWith("/")) {
            newObj[key] = baseUrl + val;
          } else {
            newObj[key] = injectBaseUrl(val);
          }
        }
        return newObj;
      }
      return obj;
    };

    // Dados Mockados de Alta Fidelidade (v6.0)
    const storeInfo = {
      name: "Zygora Store",
      description: "Minimalist European Fashion",
      url: baseUrl,
      home: baseUrl,
      admin_email: "admin@zygora.com",
      timezone: "Europe/Berlin",
      currency: "EUR",
      currency_symbol: "€",
      country: "DE",
      language: "de_DE",
      wordpress_version: "6.4.3",
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

const getPaymentGateways = (req, res) => {
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
  const data = require("../data/mockData").paymentGateways;
  res.setHeader("X-WP-Total", data.length);
  res.setHeader("X-WP-TotalPages", 1);
  res.json(inject(data));
};

const getTaxClasses = (req, res) => {
  const data = [
    { slug: "standard", name: "Padrão" },
    { slug: "reduced-rate", name: "Taxa Reduzida" },
    { slug: "zero-rate", name: "Isento" }
  ];
  res.setHeader("X-WP-Total", data.length);
  res.setHeader("X-WP-TotalPages", 1);
  res.json(data);
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
  getTaxClasses,
  getPaymentGateways,
  createWebhook: (req, res) => {
    const d = req.body;
    const n = { id: Math.floor(Math.random()*1000)+1, ...d, status: "active", date_created: new Date().toISOString() };
    require("../data/mockData").webhooks.push(n);
    res.status(201).json(n);
  },
  getWebhooks,
  getStoreData
};
