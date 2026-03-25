/** 
 * Mock Data for WooCommerce Simulator v5.0 - Ultimate Parity Edition
 * Exhaustive data set with every standard field for highest validation fidelity.
 */

// 1. PRODUTOS (Exaustivos - 66+ campos por item)
const products = [
  {
    id: 101,
    name: "Smartphone Galaxy S24 Ultra",
    slug: "smartphone-galaxy-s24-ultra",
    permalink: "/produto/smartphone-galaxy-s24-ultra/",
    date_created: "2026-01-15T10:00:00",
    date_created_gmt: "2026-01-15T13:00:00",
    date_modified: "2026-03-25T14:00:00",
    date_modified_gmt: "2026-03-25T17:00:00",
    type: "simple",
    status: "publish",
    featured: true,
    catalog_visibility: "visible",
    description: "<p>O smartphone mais avançado com IA integrada.</p>",
    short_description: "<p>IA de ponta e câmera de 200MP.</p>",
    sku: "SAMS-S24U",
    price: "8499.00",
    regular_price: "9999.00",
    sale_price: "8499.00",
    date_on_sale_from: "2026-03-01T00:00:00",
    date_on_sale_from_gmt: "2026-03-01T03:00:00",
    date_on_sale_to: null,
    date_on_sale_to_gmt: null,
    on_sale: true,
    purchasable: true,
    total_sales: 124,
    virtual: false,
    downloadable: false,
    downloads: [],
    download_limit: -1,
    download_expiry: -1,
    external_url: "",
    button_text: "",
    tax_status: "taxable",
    tax_class: "",
    manage_stock: true,
    stock_quantity: 45,
    backorders: "no",
    backorders_allowed: false,
    backordered: false,
    low_stock_amount: 5,
    sold_individually: false,
    weight: "0.232",
    dimensions: { length: "16.2", width: "7.9", height: "0.86" },
    shipping_required: true,
    shipping_taxable: true,
    shipping_class: "",
    shipping_class_id: 0,
    reviews_allowed: true,
    average_rating: "4.80",
    rating_count: 56,
    upsell_ids: [],
    cross_sell_ids: [],
    parent_id: 0,
    purchase_note: "",
    categories: [
      { id: 15, name: "Eletrônicos", slug: "eletronicos" },
      { id: 22, name: "Smartphones", slug: "smartphones" }
    ],
    tags: [
      { id: 5, name: "Premium", slug: "premium" },
      { id: 8, name: "Android", slug: "android" }
    ],
    images: [
      {
        id: 301,
        date_created: "2026-01-15T10:00:00",
        date_created_gmt: "2026-01-15T13:00:00",
        date_modified: "2026-01-15T10:00:00",
        date_modified_gmt: "2026-01-15T13:00:00",
        src: "/wp-content/uploads/2026/01/s24-ultra.jpg",
        name: "Galaxy S24 Ultra",
        alt: "Galaxy S24 Ultra"
      }
    ],
    attributes: [
      { id: 1, name: "Cor", position: 0, visible: true, variation: false, options: ["Titanio Preto", "Titanio Cinza"] }
    ],
    default_attributes: [],
    variations: [],
    grouped_products: [],
    menu_order: 0,
    price_html: "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">R$</span>8.499,00</bdi></span>",
    related_ids: [102],
    meta_data: [],
    stock_status: "instock",
    has_options: false,
    post_password: "",
    _links: {
      self: [{ href: "/wp-json/wc/v3/products/101" }],
      collection: [{ href: "/wp-json/wc/v3/products" }]
    }
  },
  {
    id: 102,
    name: "Fone de Ouvido Noise Cancelling",
    slug: "fone-de-ouvido-noise-cancelling",
    permalink: "/produto/fone-de-ouvido-noise-cancelling/",
    date_created: "2026-02-10T09:00:00",
    date_created_gmt: "2026-02-10T12:00:00",
    date_modified: "2026-03-25T10:00:00",
    date_modified_gmt: "2026-03-25T13:00:00",
    type: "simple",
    status: "publish",
    featured: false,
    catalog_visibility: "visible",
    description: "<p>Fones de ouvido com cancelamento de ruído ativo de última geração.</p>",
    short_description: "<p>Som puro, sem distrações.</p>",
    sku: "HEAD-PRO-1",
    price: "1250.00",
    regular_price: "1500.00",
    sale_price: "1250.00",
    date_on_sale_from: null,
    date_on_sale_from_gmt: null,
    date_on_sale_to: null,
    date_on_sale_to_gmt: null,
    on_sale: true,
    purchasable: true,
    total_sales: 89,
    virtual: false,
    downloadable: false,
    downloads: [],
    download_limit: -1,
    download_expiry: -1,
    external_url: "",
    button_text: "",
    tax_status: "taxable",
    tax_class: "",
    manage_stock: true,
    stock_quantity: 20,
    backorders: "no",
    backorders_allowed: false,
    backordered: false,
    low_stock_amount: 2,
    sold_individually: false,
    weight: "0.250",
    dimensions: { length: "18", width: "15", height: "8" },
    shipping_required: true,
    shipping_taxable: true,
    shipping_class: "",
    shipping_class_id: 0,
    reviews_allowed: true,
    average_rating: "4.90",
    rating_count: 32,
    upsell_ids: [],
    cross_sell_ids: [],
    parent_id: 0,
    purchase_note: "",
    categories: [{ id: 15, name: "Eletrônicos", slug: "eletronicos" }],
    tags: [{ id: 5, name: "Premium", slug: "premium" }],
    images: [
      {
        id: 302,
        date_created: "2026-02-10T09:00:00",
        date_created_gmt: "2026-02-10T12:00:00",
        date_modified: "2026-02-10T09:00:00",
        date_modified_gmt: "2026-02-10T12:00:00",
        src: "/wp-content/uploads/2026/02/noise-cancelling.jpg",
        name: "Fone noise",
        alt: "Fone noise"
      }
    ],
    attributes: [],
    default_attributes: [],
    variations: [],
    grouped_products: [],
    menu_order: 1,
    price_html: "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">R$</span>1.250,00</bdi></span>",
    related_ids: [101],
    meta_data: [],
    stock_status: "instock",
    has_options: false,
    post_password: "",
    _links: {
      self: [{ href: "/wp-json/wc/v3/products/102" }],
      collection: [{ href: "/wp-json/wc/v3/products" }]
    }
  }
];

// 2. PEDIDOS (Exaustivos - 40+ campos por item)
const orders = [
  {
    id: 9001,
    parent_id: 0,
    number: "9001",
    order_key: "wc_order_xyz789",
    created_via: "checkout",
    version: "8.5.1",
    status: "processing",
    currency: "BRL",
    date_created: "2026-03-25T12:00:00",
    date_created_gmt: "2026-03-25T15:00:00",
    date_modified: "2026-03-25T12:05:00",
    date_modified_gmt: "2026-03-25T15:05:00",
    discount_total: "0.00",
    discount_tax: "0.00",
    shipping_total: "25.00",
    shipping_tax: "0.00",
    cart_tax: "0.00",
    total: "8524.00",
    total_tax: "0.00",
    prices_include_tax: false,
    customer_id: 1,
    customer_ip_address: "172.16.0.1",
    customer_user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    customer_note: "Entregar na recepção.",
    billing: {
      first_name: "Alexandre",
      last_name: "Barcelos",
      company: "Code AI",
      address_1: "Av. Paulista, 1000",
      address_2: "Apto 50",
      city: "São Paulo",
      state: "SP",
      postcode: "01310-100",
      country: "BR",
      email: "alexandre@exemplo.com",
      phone: "+5511988887777"
    },
    shipping: {
      first_name: "Alexandre",
      last_name: "Barcelos",
      company: "Code AI",
      address_1: "Av. Paulista, 1000",
      address_2: "Apto 50",
      city: "São Paulo",
      state: "SP",
      postcode: "01310-100",
      country: "BR"
    },
    payment_method: "stripe",
    payment_method_title: "Cartão de Crédito (Stripe)",
    transaction_id: "txn_stripe_123456789",
    date_paid: "2026-03-25T12:02:00",
    date_paid_gmt: "2026-03-25T15:02:00",
    date_completed: null,
    date_completed_gmt: null,
    cart_hash: "a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9",
    meta_data: [],
    line_items: [
      {
        id: 10,
        name: "Smartphone Galaxy S24 Ultra",
        product_id: 101,
        variation_id: 0,
        quantity: 1,
        tax_class: "",
        subtotal: "8499.00",
        subtotal_tax: "0.00",
        total: "8499.00",
        total_tax: "0.00",
        taxes: [],
        meta_data: [],
        sku: "SAMS-S24U",
        price: 8499.00,
        parent_name: null
      }
    ],
    tax_lines: [],
    shipping_lines: [
      {
        id: 11,
        method_title: "Entrega Expressa",
        method_id: "flat_rate",
        instance_id: "1",
        total: "25.00",
        total_tax: "0.00",
        taxes: [],
        meta_data: []
      }
    ],
    fee_lines: [],
    coupon_lines: [],
    refunds: [],
    payment_url: "/checkout/order-pay/9001/?pay_for_order=true&key=wc_order_xyz789",
    is_editable: true,
    needs_payment: false,
    needs_processing: true,
    _links: {
      self: [{ href: "/wp-json/wc/v3/orders/9001" }],
      collection: [{ href: "/wp-json/wc/v3/orders" }],
      customer: [{ href: "/wp-json/wc/v3/customers/1" }]
    }
  }
];

// 3. CLIENTES (Exaustivos - 15+ campos por item)
const customers = [
  {
    id: 1,
    date_created: "2026-01-01T00:00:00",
    date_created_gmt: "2026-01-01T03:00:00",
    date_modified: "2026-03-25T00:00:00",
    date_modified_gmt: "2026-03-25T03:00:00",
    email: "alexandre@exemplo.com",
    first_name: "Alexandre",
    last_name: "Barcelos",
    role: "customer",
    username: "alexandre.barcelos",
    billing: {
      first_name: "Alexandre",
      last_name: "Barcelos",
      company: "Code AI",
      address_1: "Av. Paulista, 1000",
      address_2: "Apto 50",
      city: "São Paulo",
      state: "SP",
      postcode: "01310-100",
      country: "BR",
      email: "alexandre@exemplo.com",
      phone: "+5511988887777"
    },
    shipping: {
      first_name: "Alexandre",
      last_name: "Barcelos",
      company: "Code AI",
      address_1: "Av. Paulista, 1000",
      address_2: "Apto 50",
      city: "São Paulo",
      state: "SP",
      postcode: "01310-100",
      country: "BR"
    },
    is_paying_customer: true,
    avatar_url: "https://secure.gravatar.com/avatar/966465cf0f314bacb6cb38406d00e40a",
    meta_data: [],
    _links: {
      self: [{ href: "/wp-json/wc/v3/customers/1" }],
      collection: [{ href: "/wp-json/wc/v3/customers" }]
    }
  }
];

// 4. CONFIGURAÇÕES (Sincronizado)
const settings = {
  general: [
    { id: "woocommerce_store_address", value: "Av. Paulista, 1000", label: "Endereço da loja", description: "Endereço físico da loja.", type: "text", default: "", group_id: "general" },
    { id: "woocommerce_default_country", value: "BR:SP", label: "País/Estado", description: "Localização base da loja.", type: "select", default: "BR", group_id: "general" },
    { id: "woocommerce_currency", value: "BRL", label: "Moeda", description: "Moeda principal.", type: "select", default: "USD", group_id: "general" }
  ],
  products: [
    { id: "woocommerce_weight_unit", value: "kg", label: "Unidade de peso", description: "Unidade usada para pesos.", type: "select", default: "kg", group_id: "products" },
    { id: "woocommerce_enable_reviews", value: "yes", label: "Habilitar avaliações", description: "Permitir avaliações de clientes.", type: "checkbox", default: "yes", group_id: "products" }
  ],
  tax: [
    { id: "woocommerce_calc_taxes", value: "yes", label: "Habilitar impostos", description: "Calcular taxas no checkout.", type: "checkbox", default: "no", group_id: "tax" }
  ],
  shipping: [],
  checkout: [],
  accounts: [],
  emails: [],
  advanced: []
};

// 5. STATUS DO SISTEMA (Ultra-Realista)
const systemStatus = {
  environment: {
    home_url: "/",
    site_url: "/",
    version: "8.5.1",
    log_directory: "/var/www/html/wp-content/uploads/wc-logs/",
    log_directory_writable: true,
    wp_version: "6.4.3",
    wp_multisite: false,
    wp_memory_limit: "512M",
    wp_debug_mode: false,
    wp_cron: true,
    language: "pt_BR",
    server_info: "nginx/1.24.0",
    php_version: "8.2.10",
    php_post_max_size: "128M",
    php_max_execution_time: "600",
    mysql_version: "8.0.35",
    max_upload_size: "128M",
    default_timezone: "America/Sao_Paulo",
    fsockopen_or_curl_enabled: true,
    soapclient_enabled: true,
    domdocument_enabled: true,
    gzip_enabled: true,
    multibyte_string_enabled: true,
    remote_post_successful: true,
    remote_get_successful: true,
    post_max_size: "128M",
    max_input_vars: 3000,
    curl_version: "7.81.0, OpenSSL/3.0.2",
    suhosin_installed: false
  },
  database: {
    wc_database_version: "8.5.1",
    database_prefix: "wp_",
    total_size: "25MB",
    data_size: "18MB",
    index_size: "7MB"
  },
  active_plugins: [
    { plugin: "woocommerce/woocommerce.php", name: "WooCommerce", version: "8.5.1", author_url: "https://woocommerce.com", network_activated: false },
    { plugin: "wiio/wiio.php", name: "Wiio for WooCommerce", version: "1.2.5", author_url: "https://wiio.io", network_activated: false }
  ],
  theme: { 
    name: "Storefront", 
    version: "4.5.4", 
    author_url: "https://woocommerce.com", 
    is_child_theme: false,
    has_woocommerce_support: true 
  },
  settings: {
    api_enabled: true,
    force_ssl: true,
    currency: "BRL",
    currency_symbol: "R$",
    currency_position: "left",
    thousand_separator: ".",
    decimal_separator: ",",
    number_of_decimals: 2,
    geolocation_enabled: true,
    tax_enabled: true,
    tax_total_display: "itemized"
  },
  security: {
    connection_over_https: true,
    wp_debug_mode: false,
    dot_php_files_writable: false
  },
  pages: [
    { page_name: "Loja", page_id: 10, page_set: true },
    { page_name: "Carrinho", page_id: 11, page_set: true },
    { page_name: "Finalizar Compra", page_id: 12, page_set: true },
    { page_name: "Minha Conta", page_id: 13, page_set: true }
  ]
};

// 6. ZONEAMENTO DE FRETE
const shippingZones = [
  { 
    id: 1, 
    name: "Brasil", 
    order: 1, 
    locations: [{ code: "BR", type: "country" }],
    methods: [
      { id: 1, title: "Frete Fixo", enabled: true, method_id: "flat_rate", method_title: "Frete Fixo", settings: { cost: "25.00" } }
    ],
    _links: { 
      self: [{ href: "/wp-json/wc/v3/shipping/zones/1" }],
      collection: [{ href: "/wp-json/wc/v3/shipping/zones" }]
    } 
  }
];

// 7. TAXAS
const taxRates = [
  { 
    id: 1, 
    country: "BR", 
    state: "*", 
    rate: "0.0000", 
    name: "Isento", 
    priority: 1, 
    compound: false, 
    shipping: true, 
    order: 1, 
    class: "standard",
    _links: {
      self: [{ href: "/wp-json/wc/v3/taxes/1" }],
      collection: [{ href: "/wp-json/wc/v3/taxes" }]
    }
  }
];

// 8. GATEWAYS DE PAGAMENTO
const paymentGateways = [
  { 
    id: "stripe", 
    title: "Stripe", 
    enabled: true, 
    method_title: "Stripe", 
    method_description: "Stripe Payment Gateway", 
    _links: { self: [{ href: "/wp-json/wc/v3/payment_gateways/stripe" }] }
  },
  { 
    id: "bacs", 
    title: "Transferência Bancária", 
    enabled: true, 
    method_title: "BACS", 
    method_description: "Bank Transfer", 
    _links: { self: [{ href: "/wp-json/wc/v3/payment_gateways/bacs" }] }
  }
];

// 9. PAÍSES E MOEDAS
const countries = [
  { code: "BR", name: "Brasil", states: [{ code: "SP", name: "São Paulo" }] }
];

const currencies = [
  { code: "BRL", name: "Real brasileiro", symbol: "R$" }
];

// 10. WEBHOOKS
const webhooks = [];

// 11. RELATÓRIOS E STATS
const reports = [
  { slug: "sales", title: "Vendas", description: "Relatório de vendas totais.", _links: { self: [{ href: "/wp-json/wc/v3/reports/sales" }] } }
];

const stats = {
  total_products: products.length,
  total_orders: orders.length,
  total_customers: customers.length,
  total_webhooks: 0,
  total_shipping_zones: 1
};

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
  webhooks,
  paymentGateways,
  countries,
  currencies,
  reports,
  stats
};
