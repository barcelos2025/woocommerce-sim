const products = [
  {
    id: 101,
    name: "Camiseta Minimalista",
    slug: "camiseta-minimalista",
    permalink: "https://exemplo.com/produto/camiseta-minimalista/",
    type: "simple",
    status: "publish",
    featured: false,
    description: "<p>Uma camiseta de algodão premium.</p>",
    short_description: "<p>Conforto e estilo.</p>",
    sku: "TSHIRT-001",
    price: "89.90",
    regular_price: "99.90",
    sale_price: "89.90",
    on_sale: true,
    purchasable: true,
    total_sales: 15,
    virtual: false,
    downloadable: false,
    stock_status: "instock",
    backorders: "no",
    manage_stock: false,
    weight: "",
    dimensions: { length: "", width: "", height: "" },
    categories: [{ id: 9, name: "Roupas", slug: "roupas" }],
    images: [
      {
        id: 1,
        src: "https://picsum.photos/600/600?random=1",
        name: "Camiseta",
        alt: "Camiseta"
      }
    ],
    attributes: [],
    default_attributes: [],
    variations: [],
    grouped_products: [],
    meta_data: []
  },
  {
    id: 102,
    name: "Caneca Tech",
    slug: "caneca-tech",
    permalink: "https://exemplo.com/produto/caneca-tech/",
    type: "simple",
    status: "publish",
    featured: true,
    description: "<p>Caneca de cerâmica com estampa tecnológica.</p>",
    short_description: "<p>Sua bebida com estilo.</p>",
    sku: "MUG-002",
    price: "45.00",
    regular_price: "45.00",
    sale_price: "",
    on_sale: false,
    purchasable: true,
    total_sales: 42,
    virtual: false,
    downloadable: false,
    stock_status: "instock",
    backorders: "no",
    manage_stock: false,
    weight: "0.4",
    dimensions: { length: "10", width: "10", height: "12" },
    categories: [{ id: 10, name: "Acessórios", slug: "acessorios" }],
    images: [
      {
        id: 2,
        src: "https://picsum.photos/600/600?random=2",
        name: "Caneca",
        alt: "Caneca"
      }
    ],
    attributes: [],
    default_attributes: [],
    variations: [],
    grouped_products: [],
    meta_data: []
  }
];

const orders = [
  {
    id: 5001,
    status: "processing",
    currency: "BRL",
    date_created: "2026-03-25T10:00:00",
    discount_total: "0.00",
    discount_tax: "0.00",
    shipping_total: "15.00",
    shipping_tax: "0.00",
    cart_tax: "0.00",
    total: "104.90",
    total_tax: "0.00",
    customer_id: 0,
    billing: {
      first_name: "João",
      last_name: "Silva",
      company: "",
      address_1: "Rua das Flores, 123",
      address_2: "",
      city: "São Paulo",
      state: "SP",
      postcode: "01234-567",
      country: "BR",
      email: "joao@exemplo.com",
      phone: "(11) 99999-9999"
    },
    shipping: {
      first_name: "João",
      last_name: "Silva",
      company: "",
      address_1: "Rua das Flores, 123",
      address_2: "",
      city: "São Paulo",
      state: "SP",
      postcode: "01234-567",
      country: "BR"
    },
    payment_method: "bacs",
    payment_method_title: "Direct Bank Transfer",
    transaction_id: "",
    line_items: [
      {
        id: 1,
        name: "Camiseta Minimalista",
        product_id: 101,
        variation_id: 0,
        quantity: 1,
        tax_class: "",
        subtotal: "89.90",
        subtotal_tax: "0.00",
        total: "89.90",
        total_tax: "0.00",
        sku: "TSHIRT-001",
        price: 89.9,
        meta_data: []
      }
    ],
    tax_lines: [],
    shipping_lines: [
      {
        id: 2,
        method_title: "Flat Rate",
        method_id: "flat_rate",
        instance_id: "1",
        total: "15.00",
        total_tax: "0.00",
        taxes: [],
        meta_data: []
      }
    ],
    fee_lines: [],
    coupon_lines: [],
    refunds: [],
    meta_data: []
  }
];

const apiLogs = [];

module.exports = {
  products,
  orders,
  apiLogs
};
