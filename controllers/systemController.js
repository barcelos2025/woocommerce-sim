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

    // Engine recursivo de injeção de link absoluto (v6.0 Enhanced)
    const injectBaseUrl = (obj) => {
      if (Array.isArray(obj)) return obj.map(item => injectBaseUrl(item));
      if (obj !== null && typeof obj === "object") {
        const newObj = {};
        for (const key in obj) {
          const val = obj[key];
          // Injeta baseUrl em links relativos e campos críticos para Wiio (delivery_url, src, href)
          if (["href", "permalink", "src", "delivery_url", "avatar_url"].includes(key) && typeof val === "string" && val.startsWith("/")) {
            newObj[key] = baseUrl + val;
          } else {
            newObj[key] = injectBaseUrl(val);
          }
        }
        return newObj;
      }
      return obj;
    };

    // 1. STORE INFO (URL Absoluta Conforme Requisitado)
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
      woocommerce_version: "8.5.1"
    };

    // 2. CONFIGURAÇÕES EXPANDIDAS (General, Products, Tax, Shipping, Checkout)
    const enrichedSettings = {
      general: [
        { id: "woocommerce_store_address", value: "Berlin Street", label: "Store Address" },
        { id: "woocommerce_default_country", value: "DE", label: "Country" },
        { id: "woocommerce_currency", value: "EUR", label: "Currency" }
      ],
      products: [
        { id: "woocommerce_weight_unit", value: "kg" },
        { id: "woocommerce_dimension_unit", value: "cm" },
        { id: "woocommerce_enable_reviews", value: "yes" }
      ],
      tax: [
        { id: "woocommerce_calc_taxes", value: "yes" },
        { id: "woocommerce_prices_include_tax", value: "yes" }
      ],
      shipping: [
        { id: "woocommerce_ship_to_countries", value: "all" },
        { id: "woocommerce_shipping_debug_mode", value: "no" }
      ],
      checkout: [
        { id: "woocommerce_enable_guest_checkout", value: "yes" },
        { id: "woocommerce_enable_checkout_login_reminder", value: "yes" }
      ]
    };

    // 3. ENRICHED SYSTEM STATUS (PHP, MySQL, Limits)
    const enrichedSystemStatus = {
      environment: {
        home_url: baseUrl,
        site_url: baseUrl,
        version: "8.5.1",
        wp_version: "6.4.3",
        language: "de_DE",
        default_timezone: "Europe/Berlin",
        php_version: "8.1.27",
        mysql_version: "8.0.36",
        memory_limit: "512M",
        post_max_size: "64M",
        max_execution_time: "300",
        max_upload_size: "64M",
        fsockopen_or_curl_enabled: true,
        soapclient_enabled: true,
        domdocument_enabled: true,
        gzip_enabled: true,
        remote_post_successful: true,
        remote_get_successful: true
      },
      database: {
        wc_database_version: "8.5.1",
        database_prefix: "wp_"
      },
      active_plugins: [
        { plugin: "woocommerce/woocommerce.php", name: "WooCommerce", version: "8.5.1" }
      ],
      theme: { name: "Storefront", version: "4.5.4" }
    };

    // 4. REPORTS MOCK
    const enrichedReports = [
      {
        slug: "sales",
        description: "Relatório de vendas globais.",
        _links: { self: [{ href: "/wp-json/wc/v3/reports/sales" }] }
      }
    ];

    const finalData = {
      store: storeInfo,
      products: injectBaseUrl(require("../data/mockData").products),
      orders: injectBaseUrl(require("../data/mockData").orders),
      customers: injectBaseUrl(require("../data/mockData").customers),
      settings: enrichedSettings,
      system_status: enrichedSystemStatus,
      payment_gateways: injectBaseUrl(require("../data/mockData").paymentGateways),
      shipping_zones: injectBaseUrl(require("../data/mockData").shippingZones),
      taxes: injectBaseUrl(require("../data/mockData").taxRates),
      reports: injectBaseUrl(enrichedReports),
      stats: require("../data/mockData").stats,
      _links: {
        self: [{ href: baseUrl + "/wp-json/wc/v3/data" }],
        help: [{ href: "https://woocommerce.github.io/woocommerce-rest-api-docs/" }]
      }
    };

    const payload = JSON.stringify(finalData);
    const endTime = Date.now();
    
    console.log(`[INTEGRITY v6.0] GET /data executed in ${endTime - startTime}ms | Payload: ${(Buffer.byteLength(payload) / 1024).toFixed(2)} KB`);

    res.setHeader("Content-Type", "application/json");
    return res.status(200).send(payload);

  } catch (error) {
    console.error("[CRITICAL BUG] Error in getStoreData aggregator:", error);
    return res.status(500).json({
      code: "internal_server_error",
      message: "Erro ao agregar dados da loja.",
      error: error.message
    });
  }
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
