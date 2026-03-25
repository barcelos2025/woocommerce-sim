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

const systemStatus = {
  environment: {
    home_url: "http://localhost:8081",
    site_url: "http://localhost:8081",
    version: "8.5.1",
    log_directory: "/var/www/html/wp-content/uploads/wc-logs/",
    wp_version: "6.4.3",
    wp_multisite: false,
    wp_memory_limit: "256M",
    wp_debug_mode: false,
    wp_cron: true,
    language: "pt_BR",
    server_info: "nginx/1.18.0",
    php_version: "8.1.18",
    php_post_max_size: "64M",
    php_max_execution_time: "300",
    mysql_version: "8.0.32",
    max_upload_size: "64M",
    default_timezone: "UTC"
  },
  database: {
    wc_database_version: "8.5.1",
    database_prefix: "wp_",
    total_size: "15MB"
  },
  active_plugins: [
    { plugin: "woocommerce/woocommerce.php", name: "WooCommerce", version: "8.5.1", network_activated: false },
    { plugin: "wiio/wiio.php", name: "Wiio for WooCommerce", version: "1.2.0", network_activated: false },
    { plugin: "elementor/elementor.php", name: "Elementor", version: "3.19.0", network_activated: false }
  ],
  theme: { name: "Storefront", version: "4.5.3", author_url: "https://woocommerce.com" }
};

const shippingZones = [
  { id: 1, name: "Brasil", order: 1 }
];

const taxRates = [
  { id: 1, country: "BR", state: "*", rate: "0.0000", name: "Isento", priority: 1, compound: false, shipping: true, order: 1, class: "standard" }
];

const webhooks = [];

const settings = [
  {
    id: "general",
    label: "Geral",
    description: "Configurações gerais da loja.",
    parent_id: ""
  },
  {
    id: "products",
    label: "Produtos",
    description: "Configurações de produtos.",
    parent_id: ""
  }
];

const customers = [
  {
    id: 1,
    date_created: "2026-01-01T12:00:00",
    email: "cliente1@exemplo.com",
    first_name: "Cliente",
    last_name: "Um",
    role: "customer",
    username: "cliente1",
    billing: {
      first_name: "Cliente",
      last_name: "Um",
      company: "",
      address_1: "Rua Teste, 123",
      city: "São Paulo",
      state: "SP",
      postcode: "01000-000",
      country: "BR",
      email: "cliente1@exemplo.com",
      phone: "11999999999"
    }
  }
];

const apiLogs = [];

module.exports = {
  products,
  orders,
  apiLogs,
  systemStatus,
  settings,
  customers,
  shippingZones,
  taxRates,
  webhooks
};
