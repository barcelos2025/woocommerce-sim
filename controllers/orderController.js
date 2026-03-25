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

  const paginatedOrders = filteredOrders.slice(start, start + per_page);

  // Headers WC
  res.setHeader("X-WP-Total", total);
  res.setHeader("X-WP-TotalPages", totalPages);

  // Link Header (Padrão Oficial WC)
  const protocolo = req.headers["x-forwarded-proto"] || req.protocol;
  const host = req.get("host");
  const baseUrl = `${protocolo}://${host}${req.path}`;
  
  let links = [];
  if (page < totalPages) {
    links.push(`<${baseUrl}?page=${page + 1}&per_page=${per_page}>; rel="next"`);
  }
  if (page > 1) {
    links.push(`<${baseUrl}?page=${page - 1}&per_page=${per_page}>; rel="prev"`);
  }
  links.push(`<${baseUrl}?page=${totalPages}&per_page=${per_page}>; rel="last"`);
  links.push(`<${baseUrl}?page=1&per_page=${per_page}>; rel="first"`);
  
  res.setHeader("Link", links.join(", "));

  res.json(paginatedOrders);
};

const getOrderById = (req, res) => {
  const { id } = req.params;
  const order = orders.find((o) => o.id === parseInt(id));

  if (order) {
    res.json(order);
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
