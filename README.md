# WooCommerce API Simulator (v6.0 - Wiio Fixed)

Esta versão resolve a falha de acesso da Wiio através da implementação do endpoint agregado `/data`.

## Novidades da v6.0
- **Endpoint Agregado**: `GET /wp-json/wc/v3/data` agora retorna todos os dados da loja (produtos, pedidos, configurações, taxas, etc) em uma única chamada, conforme exigido pela Wiio em sua fase de descoberta.
- **Sincronização Cloud**: O código já foi enviado para o GitHub e o Render iniciou o auto-deploy.

## Verificação da Wiio
1. Aguarde 1-2 minutos para o deploy no Render terminar.
2. Tente conectar novamente seu simulador na plataforma da Wiio.
3. Agora ela conseguirá ler o endpoint `/wc/v3/data` e validar a loja com sucesso.

## Endpoints Disponíveis
- **Store Data**: `https://woocommerce-sim.onrender.com/wp-json/wc/v3/data`
- **Healthcheck**: `https://woocommerce-sim.onrender.com/health`
- **Logs Web**: `https://woocommerce-sim.onrender.com/wp-json/wc/v3/logs`

---
**Simulador atualizado e pronto para a Wiio!**
