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
  
  // Injectar Base URL nos links internos de cada produto (Recursivo)
  const injectBaseUrl = (obj) => {
    if (Array.isArray(obj)) return obj.map(item => injectBaseUrl(item));
    if (obj !== null && typeof obj === "object") {
      const newObj = {};
      for (const key in obj) {
        if (["href", "permalink", "src", "avatar_url"].includes(key) && typeof obj[key] === "string" && obj[key].startsWith("/")) {
          newObj[key] = `${protocolo}://${host}` + obj[key];
        } else {
          newObj[key] = injectBaseUrl(obj[key]);
        }
      }
      return newObj;
    }
    return obj;
  };

  res.json(injectBaseUrl(paginatedProducts));
};

const getProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === parseInt(id));

  if (product) {
    const protocolo = req.headers["x-forwarded-proto"] || req.protocol;
    const host = req.get("host");
    
    const injectBaseUrl = (obj) => {
      if (Array.isArray(obj)) return obj.map(item => injectBaseUrl(item));
      if (obj !== null && typeof obj === "object") {
        const newObj = {};
        for (const key in obj) {
          if (["href", "permalink", "src", "avatar_url"].includes(key) && typeof obj[key] === "string" && obj[key].startsWith("/")) {
            newObj[key] = `${protocolo}://${host}` + obj[key];
          } else {
            newObj[key] = injectBaseUrl(obj[key]);
          }
        }
        return newObj;
      }
      return obj;
    };

    res.json(injectBaseUrl(product));
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
