const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const { apiLogs } = require("./data/mockData");

const app = express();
const PORT = process.env.PORT || 8081;

// 1. LOGGING MIDDLEWARE (Topo Absoluto)
app.use((req, res, next) => {
  const now = new Date().toLocaleString();
  const logEntry = {
    time: now,
    method: req.method,
    url: req.originalUrl,
    headers: req.headers,
    body: req.body,
    authType: "none"
  };

  // Salva no buffer (mantém os últimos 50 logs)
  apiLogs.unshift(logEntry);
  if (apiLogs.length > 50) apiLogs.pop();

  console.log(`[${now}] ${req.method} ${req.originalUrl}`);
  next();
});

// 2. CONFIGURAÇÕES EXPRESS & CORS
app.set("trust proxy", true);

// Middleware de CORS manual (Ultra Realism)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With, X-WP-Nonce");
  res.setHeader("Content-Type", "application/json");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

app.use(express.json());

// 3. HEALTHCHECK (Novo para Render)
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    service: "woo-simulator",
    port: PORT
  });
});

// 4. MELHORIA AUTENTICAÇÃO SIMULADA
app.use((req, res, next) => {
  let authType = "none";
  let consumerKey = "unknown";

  if (req.query.consumer_key) {
    authType = "Query Params";
    consumerKey = req.query.consumer_key;
  } else if (req.headers.authorization && req.headers.authorization.startsWith("Basic ")) {
    authType = "Basic Auth";
    try {
      const base64 = req.headers.authorization.split(" ")[1];
      const decoded = Buffer.from(base64, "base64").toString("utf-8");
      consumerKey = decoded.split(":")[0];
    } catch (e) {
      consumerKey = "invalid_base64";
    }
  }

  if (apiLogs.length > 0 && apiLogs[0].url === req.originalUrl) {
    apiLogs[0].authType = authType;
    apiLogs[0].consumerKey = consumerKey;
  }

  console.log(`Auth: ${authType} | Key: ${consumerKey}`);
  next();
});

// 5. LOG DE BODY PÓS-PARSER
app.use((req, res, next) => {
  if (Object.keys(req.body).length > 0) {
    if (apiLogs.length > 0 && apiLogs[0].url === req.originalUrl) {
      apiLogs[0].body = req.body;
    }
    console.log("Body:", JSON.stringify(req.body, null, 2));
  }
  console.log("------------------------------------------");
  next();
});

// 6. ROTAS PRINCIPAIS
app.use("/", apiRoutes);

// 7. TRATAMENTO DE ERROS GLOBAL (Novo)
app.use((err, req, res, next) => {
  console.error("Critical Error Detected:", err);
  res.status(500).json({
    code: "internal_server_error",
    message: "Ocorreu um erro interno no simulador.",
    error: err.message
  });
});

// 8. INICIALIZAÇÃO
app.listen(PORT, "0.0.0.0", () => {
  console.log(`==========================================`);
  console.log(`🚀 WooCommerce Simulator v5.0 (Render Ready)`);
  console.log(`   Internal Port: ${PORT}`);
  console.log(`==========================================`);
});
