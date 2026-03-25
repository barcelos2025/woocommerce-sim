const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const { apiLogs } = require("./data/mockData");

const app = express();
const PORT = process.env.PORT || 8080;

// 1. LOGGING MIDDLEWARE (Deve ser o primeiro para capturar tudo!)
app.use((req, res, next) => {
  const now = new Date().toLocaleString();
  const logEntry = {
    time: now,
    method: req.method,
    url: req.originalUrl,
    headers: req.headers,
    body: req.body
  };

  // Salva no buffer (mantém os últimos 50 logs)
  apiLogs.unshift(logEntry);
  if (apiLogs.length > 50) apiLogs.pop();

  // Log no Console
  console.log(`[${now}] ${req.method} ${req.originalUrl}`);
  console.log("Headers:", JSON.stringify(req.headers, null, 2));
  
  // Note: O body pode estar vazio aqui se o express.json() ainda não rodou.
  // Vamos imprimir o body depois de uma pequena espera ou no final da req?
  // Melhor: vamos mover o express.json para DEPOIS do log básico, mas o log de body 
  // precisa ocorrer depois do parser.
  next();
});

// 2. Ativar confiança em proxy
app.set("trust proxy", true);

// 3. Garantir Content-Type JSON
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

// 4. Middleware para transformar body em JSON
app.use(express.json());

// 5. Middleware adicional para logar o Body após o parser
app.use((req, res, next) => {
  if (Object.keys(req.body).length > 0) {
    console.log("Body:", JSON.stringify(req.body, null, 2));
    // Atualiza o último log com o body populado
    if (apiLogs.length > 0 && apiLogs[0].url === req.originalUrl) {
      apiLogs[0].body = req.body;
    }
  }
  console.log("------------------------------------------");
  next();
});

// AUTH SIMULATION MIDDLEWARE
// Aceita via Query Params ou Header
app.use((req, res, next) => {
  const ck_query = req.query.consumer_key;
  const cs_query = req.query.consumer_secret;
  const auth_header = req.headers.authorization;

  // WooCommerce usa Basic Auth (Base64 de key:secret) no Header
  // Aqui apenas verificamos se há algum sinal de tentativa de auth
  if (ck_query || cs_query || auth_header) {
    // Permitir qualquer valor conforme solicitado
    return next();
  }

  // Opcional: Se quiser ser mais rigoroso e exigir auth:
  // res.status(401).json({ code: "woocommerce_rest_cannot_view", message: "Sem autorização." });
  
  // Como a regra diz "não validar de verdade, apenas aceitar qualquer valor", 
  // vamos seguir em frente mesmo sem nada, ou assumir que o usuário pode querer testar sem auth também.
  next();
});

// ROTAS
app.use("/", apiRoutes);

// INICIALIZAÇÃO
app.listen(PORT, "0.0.0.0", () => {
  console.log(`==========================================`);
  console.log(`🚀 WooCommerce Simulator running at:`);
  console.log(`   http://0.0.0.0:${PORT}`);
  console.log(`   (Accessible via localhost:${PORT})`);
  console.log(`==========================================`);
});
