module.exports = {
  apps: [
    {
      name: "user-service",
      script: "users/index.js",
    },
    {
      name: "admin-service",
      script: "admin/index.js",
    },
    {
      name: "api-gateway",
      script: "api-gateway/index.js",
    }
  ]
};
