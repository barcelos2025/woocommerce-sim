const { products } = require("../data/mockData");

const getAllProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === parseInt(id));

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({
      code: "woocommerce_rest_product_invalid_id",
      message: "ID de produto inválido.",
      data: { status: 404 }
    });
  }
};

module.exports = {
  getAllProducts,
  getProductById
};
