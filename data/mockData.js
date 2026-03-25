/** 
 * Mock Data for WooCommerce Simulator v5.1 - Zygora Store Edition
 * High-fidelity European Minimalist Fashion theme.
 */

// 1. PRODUTOS (Zygora Theme - Exhaustive)
const products = [
  {
    id: 101,
    name: "Minimalist Cotton T-Shirt",
    slug: "minimalist-cotton-tshirt",
    permalink: "/product/minimalist-cotton-tshirt",
    date_created: "2024-01-01T10:00:00",
    date_created_gmt: "2024-01-01T09:00:00",
    date_modified: "2024-01-01T10:00:00",
    date_modified_gmt: "2024-01-01T09:00:00",
    type: "simple",
    status: "publish",
    featured: false,
    catalog_visibility: "visible",
    description: "Premium minimalist cotton t-shirt.",
    short_description: "Minimalist premium tee.",
    sku: "TSHIRT-001",
    price: "39.90",
    regular_price: "49.90",
    sale_price: "",
    date_on_sale_from: null,
    date_on_sale_from_gmt: null,
    date_on_sale_to: null,
    date_on_sale_to_gmt: null,
    on_sale: false,
    purchasable: true,
    total_sales: 12,
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
    stock_quantity: 50,
    backorders: "no",
    backorders_allowed: false,
    backordered: false,
    low_stock_amount: 5,
    sold_individually: false,
    weight: "0.2",
    dimensions: { length: "10", width: "10", height: "2" },
    shipping_required: true,
    shipping_taxable: true,
    shipping_class: "",
    shipping_class_id: 0,
    reviews_allowed: true,
    average_rating: "4.8",
    rating_count: 10,
    upsell_ids: [],
    cross_sell_ids: [],
    parent_id: 0,
    purchase_note: "",
    categories: [{ id: 1, name: "Clothing", slug: "clothing" }],
    tags: [],
    images: [
      {
        id: 1,
        date_created: "2024-01-01T10:00:00",
        date_created_gmt: "2024-01-01T09:00:00",
        date_modified: "2024-01-01T10:00:00",
        date_modified_gmt: "2024-01-01T09:00:00",
        src: "https://via.placeholder.com/600x600",
        name: "Minimalist Cotton T-Shirt",
        alt: "Minimalist Cotton T-Shirt"
      }
    ],
    attributes: [],
    default_attributes: [],
    variations: [],
    grouped_products: [],
    menu_order: 0,
    price_html: "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">€</span>39,90</bdi></span>",
    related_ids: [],
    meta_data: [],
    stock_status: "instock",
    has_options: false,
    post_password: "",
    _links: {
      self: [{ href: "/wp-json/wc/v3/products/101" }],
      collection: [{ href: "/wp-json/wc/v3/products" }]
    }
  }
];

// 2. PEDIDOS (Zygora Theme - Exhaustive)
const orders = [
  {
    id: 5001,
    parent_id: 0,
    number: "5001",
    order_key: "wc_order_zyg5001",
    created_via: "checkout",
    version: "8.5.1",
    status: "processing",
    currency: "EUR",
    date_created: "2024-01-01T11:00:00",
    date_created_gmt: "2024-01-01T10:00:00",
    date_modified: "2024-01-01T11:05:00",
    date_modified_gmt: "2024-01-01T10:05:00",
    discount_total: "0.00",
    discount_tax: "0.00",
    shipping_total: "0.00",
    shipping_tax: "0.00",
    cart_tax: "0.00",
    total: "39.90",
    total_tax: "0.00",
    prices_include_tax: true,
    customer_id: 1,
    customer_ip_address: "127.0.0.1",
    customer_user_agent: "Mozilla/5.0",
    customer_note: "",
    billing: {
      first_name: "João",
      last_name: "Silva",
      company: "",
      address_1: "Rua Teste",
      address_2: "",
      city: "Berlin",
      state: "",
      postcode: "10115",
      country: "DE",
      email: "cliente@teste.com",
      phone: "+491234567"
    },
    shipping: {
      first_name: "João",
      last_name: "Silva",
      company: "",
      address_1: "Rua Teste",
      address_2: "",
      city: "Berlin",
      state: "",
      postcode: "10115",
      country: "DE"
    },
    payment_method: "bacs",
    payment_method_title: "Direct Bank Transfer",
    transaction_id: "",
    date_paid: "2024-01-01T11:02:00",
    date_paid_gmt: "2024-01-01T10:02:00",
    date_completed: null,
    date_completed_gmt: null,
    cart_hash: "hash_zygora_1",
    meta_data: [],
    line_items: [
      {
        id: 1,
        name: "Minimalist Cotton T-Shirt",
        product_id: 101,
        variation_id: 0,
        quantity: 1,
        tax_class: "",
        subtotal: "39.90",
        subtotal_tax: "0.00",
        total: "39.90",
        total_tax: "0.00",
        taxes: [],
        meta_data: [],
        sku: "TSHIRT-001",
        price: 39.90,
        parent_name: null
      }
    ],
    tax_lines: [],
    shipping_lines: [],
    fee_lines: [],
    coupon_lines: [],
    refunds: [],
    payment_url: "/checkout/order-pay/5001/?pay_for_order=true&key=wc_order_zyg5001",
    is_editable: true,
    needs_payment: false,
    needs_processing: true,
    _links: {
      self: [{ href: "/wp-json/wc/v3/orders/5001" }],
      collection: [{ href: "/wp-json/wc/v3/orders" }],
      customer: [{ href: "/wp-json/wc/v3/customers/1" }]
    }
  }
];

// 3. CLIENTES (Zygora Theme - Exhaustive)
const customers = [
  {
    id: 1,
    date_created: "2024-01-01T10:00:00",
    date_created_gmt: "2024-01-01T09:00:00",
    date_modified: "2024-01-01T10:00:00",
    date_modified_gmt: "2024-01-01T09:00:00",
    email: "cliente@teste.com",
    first_name: "João",
    last_name: "Silva",
    role: "customer",
    username: "joao",
    billing: {
      first_name: "João",
      last_name: "Silva",
      company: "",
      address_1: "Rua Teste",
      address_2: "",
      city: "Berlin",
      state: "",
      postcode: "10115",
      country: "DE",
      email: "cliente@teste.com",
      phone: "+491234567"
    },
    shipping: {
      first_name: "João",
      last_name: "Silva",
      company: "",
      address_1: "Rua Teste",
      address_2: "",
      city: "Berlin",
      state: "",
      postcode: "10115",
      country: "DE"
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

// 4. CONFIGURAÇÕES
const settings = {
  general: [
    { id: "woocommerce_store_address", value: "Berlin Street", label: "Store Address" },
    { id: "woocommerce_default_country", value: "DE", label: "Country" },
    { id: "woocommerce_currency", value: "EUR", label: "Currency" }
  ]
};

// 5. STATUS DO SISTEMA
const systemStatus = {
  environment: {
    home_url: "/",
    site_url: "/",
    version: "8.5.1",
    wp_version: "6.4.3",
    language: "de_DE",
    default_timezone: "Europe/Berlin"
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

// 6. ZONEAMENTO DE FRETE
const shippingZones = [
  { 
    id: 1, 
    name: "Europe", 
    order: 1, 
    locations: [{ code: "EU", type: "continent" }],
    methods: [],
    _links: { self: [{ href: "/wp-json/wc/v3/shipping/zones/1" }] } 
  }
];

// 7. TAXAS
const taxRates = [
  { 
    id: 1, 
    country: "DE", 
    rate: "19.00", 
    name: "VAT", 
    priority: 1, 
    compound: false, 
    shipping: true, 
    class: "standard",
    _links: { self: [{ href: "/wp-json/wc/v3/taxes/1" }] }
  }
];

// 8. GATEWAYS DE PAGAMENTO
const paymentGateways = [
  { 
    id: "bacs", 
    title: "Direct Bank Transfer", 
    enabled: true, 
    method_title: "BACS", 
    _links: { self: [{ href: "/wp-json/wc/v3/payment_gateways/bacs" }] }
  }
];

const countries = [{ code: "DE", name: "Germany" }];
const currencies = [{ code: "EUR", name: "Euro", symbol: "€" }];
const reports = [];
const webhooks = [
  {
    id: 1,
    name: "Order Create Webhook (Wiio Sync)",
    status: "active",
    topic: "order.created",
    resource: "order",
    event: "created",
    hooks: ["woocommerce_new_order"],
    delivery_url: "/webhook-receiver-endpoint-wiio",
    date_created: "2024-01-01T10:00:00",
    date_created_gmt: "2024-01-01T09:00:00",
    date_modified: "2026-03-25T14:45:00",
    date_modified_gmt: "2026-03-25T17:45:00",
    secret: "sec_abc123789xyz",
    _links: {
      self: [{ href: "/wp-json/wc/v3/webhooks/1" }],
      collection: [{ href: "/wp-json/wc/v3/webhooks" }]
    }
  }
];
const stats = {
  total_products: 1,
  total_orders: 1,
  total_customers: 1
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
