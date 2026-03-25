const { products } = require("../data/mockData");

const getAllProducts = (req, res) => {
  let { page = 1, per_page = 10, offset, search, status } = req.query;
  page = parseInt(page);
  per_page = parseInt(per_page);

  let filteredProducts = [...products];

  // Filtros
  if (search) {
    filteredProducts = filteredProducts.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) || 
      p.sku.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (status) {
    filteredProducts = filteredProducts.filter((p) => p.status === status);
  }

  // Paginação
  const total = filteredProducts.length;
  const totalPages = Math.ceil(total / per_page);
  
  let start = (page - 1) * per_page;
  if (offset) {
    start = parseInt(offset);
  }
  
  const paginatedProducts = filteredProducts.slice(start, start + per_page);

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

  res.json(paginatedProducts);
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
