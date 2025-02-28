const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const PORT = 5000;

// User Service Proxy (Forward requests to User Service)
app.use(
  "/user",
  createProxyMiddleware({
    target: "http://localhost:5001", // User Service
    changeOrigin: true,
  })
);

// Admin Service Proxy (Forward requests to Admin Service)
app.use(
  "/admin",
  createProxyMiddleware({
    target: "http://localhost:5002", // Admin Service
    changeOrigin: true,
  })
);

app.get("/", (req, res) => {
  res.send("API Gateway is running...");
});

app.listen(PORT, () => {
  console.log(`API Gateway running on http://localhost:${PORT}`);
});
