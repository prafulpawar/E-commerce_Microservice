const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const PORT = 5000;

// User Service Proxy
app.use(
  "/api/user",
  createProxyMiddleware({
    target: "http://localhost:5001", // User Service
    changeOrigin: true,
    pathRewrite: { "^/api/user": "" },
  })
);

// Admin Service Proxy
app.use(
  "/api/admin",
  createProxyMiddleware({
    target: "http://localhost:5002", // Admin Service
    changeOrigin: true,
    pathRewrite: { "^/api/admin": "" }, // Ensure correct pathRewrite
  })
);

app.get("/", (req, res) => {
  res.send("API Gateway is running...");
});

app.listen(PORT, () => {
  console.log(`API Gateway running on http://localhost:${PORT}`);
});
