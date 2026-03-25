const { orders } = require("../data/mockData");

const getAllOrders = (req, res) => {
  let { page = 1, per_page = 10, offset, search, status } = req.query;
  page = parseInt(page);
  per_page = parseInt(per_page);

  let filteredOrders = [...orders];

  // Filtros
  if (search) {
    filteredOrders = filteredOrders.filter((o) =>
      o.billing.first_name.toLowerCase().includes(search.toLowerCase()) ||
      o.id.toString().includes(search)
    );
  }

  if (status) {
    filteredOrders = filteredOrders.filter((o) => o.status === status);
  }

  // Paginação
  const total = filteredOrders.length;
  const totalPages = Math.ceil(total / per_page);
  
  let start = (page - 1) * per_page;
  if (offset) {
    start = parseInt(offset);
  }

  // Injectar Base URL nos links internos de cada pedido (Recursivo)
  const injectBaseUrl = (obj) => {
    if (Array.isArray(obj)) return obj.map(item => injectBaseUrl(item));
    if (obj !== null && typeof obj === "object") {
      const newObj = {};
      for (const key in obj) {
        if (["href", "permalink", "src", "payment_url", "avatar_url"].includes(key) && typeof obj[key] === "string" && obj[key].startsWith("/")) {
          newObj[key] = `${protocolo}://${host}` + obj[key];
        } else {
          newObj[key] = injectBaseUrl(obj[key]);
        }
      }
      return newObj;
    }
    return obj;
  };

  res.json(injectBaseUrl(paginatedOrders));
};

const getOrderById = (req, res) => {
  const { id } = req.params;
  const order = orders.find((o) => o.id === parseInt(id));

  if (order) {
    const protocolo = req.headers["x-forwarded-proto"] || req.protocol;
    const host = req.get("host");

    const injectBaseUrl = (obj) => {
      if (Array.isArray(obj)) return obj.map(item => injectBaseUrl(item));
      if (obj !== null && typeof obj === "object") {
        const newObj = {};
        for (const key in obj) {
          if (["href", "permalink", "src", "payment_url", "avatar_url"].includes(key) && typeof obj[key] === "string" && obj[key].startsWith("/")) {
            newObj[key] = `${protocolo}://${host}` + obj[key];
          } else {
            newObj[key] = injectBaseUrl(obj[key]);
          }
        }
        return newObj;
      }
      return obj;
    };

    res.json(injectBaseUrl(order));
  } else {
    res.status(404).json({
      code: "woocommerce_rest_order_invalid_id",
      message: "ID de pedido inválido.",
      data: { status: 404 }
    });
  }
};

const createOrder = (req, res) => {
  const orderData = req.body;
  const newOrder = {
    id: Math.floor(Math.random() * 10000) + 1000,
    ...orderData,
    status: orderData.status || "processing",
    date_created: new Date().toISOString(),
    total: orderData.total || "0.00",
    billing: orderData.billing || {},
    line_items: orderData.line_items || []
  };

  orders.push(newOrder);
  res.status(201).json(newOrder);
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder
};
