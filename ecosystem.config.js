// module.exports = {
//   apps: [
//     {
//       name: "user-service",
//       script: "users/index.js",
//     },
//     {
//       name: "admin-service",
//       script: "admin/index.js",
//     },
//     {
//       name: "api-gateway",
//       script: "api-gateway/index.js",
//     }
//   ]
// };

module.exports = {
  apps: [
    {
      name: "api-gateway",
      script: "./api-gateway/index.js",
      watch: false, // Disable auto-restart on file changes
      env: {
        NODE_ENV: "development",
        PORT: 5000
      }
    },
    {
      name: "user-service",
      script: "./user-service/index.js",
      watch: false, // Disable watch mode
      env: {
        NODE_ENV: "development",
        PORT: 5001
      }
    },
    {
      name: "admin-service",
      script: "./admin-service/index.js",
      watch: false, // Disable watch mode
      env: {
        NODE_ENV: "development",
        PORT: 5002
      }
    }
  ]
};

