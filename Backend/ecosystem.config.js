module.exports = {
    apps: [
      {
        name: "user-service",
        script: "users/app.js",
      },
      {
        name: "admin-service",
        script: "admin/app.js",
      },
      {
        name: "api-gateway",
        script: "api-gateway/index.js",
      }
    ]
  };
  