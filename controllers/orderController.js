const { orders } = require("../data/mockData");

const getAllOrders = (req, res) => {
  res.json(orders);
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
    date_created: new Date().toISOString()
  };

  orders.push(newOrder);
  res.status(201).json(newOrder);
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder
};
