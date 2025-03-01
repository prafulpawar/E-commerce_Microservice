ecommerce-app/
│── backend/                           ✅ (Main Backend Directory)
│   │── .env                           ✅ (Global Environment Variables)
│   │── package.json
│   │── package-lock.json
│   │── README.md

│   │── api-gateway/                    ✅ (API Gateway - Main Entry Point)
│   │   │── config/                     ✅ (Centralized Configs - API Gateway)
│   │   │── middlewares/                ✅ (Auth, Rate Limiting, Logging)
│   │   │── routes/                     ✅ (Route Handlers)
│   │   │── services/                   ✅ (Service Communication Logic)
│   │   │── ecosystem.config.js         ✅ (PM2 Process Management)
│   │   │── index.js
│   │   │── package.json
│   │   │── package-lock.json

│   │── admin/                          ✅ (Admin Microservice)
│   │   │── config/                     ✅ (DB Config, API Keys, etc.)
│   │   │── controllers/                ✅ (Business Logic)
│   │   │── middlewares/                ✅ (Auth, Validation)
│   │   │── models/                     ✅ (Database Models)
│   │   │── node_modules/
│   │   │── routes/                     ✅ (Express Routes)
│   │   │── services/                   ✅ (External API Calls, Helpers)
│   │   │── index.js
│   │   │── package.json
│   │   │── package-lock.json

│   │── users/                          ✅ (Users Microservice)
│   │   │── config/
│   │   │── controllers/
│   │   │── middlewares/
│   │   │── models/
│   │   │── node_modules/
│   │   │── routes/
│   │   │── services/
│   │   │── index.js
│   │   │── package.json
│   │   │── package-lock.json
│
│── ecosystem.config.js                 ✅ (PM2 Config - Centralized)
│── docker-compose.yml                   ✅ (Docker Setup for All Services)
│── nginx.conf                            ✅ (Load Balancing with Nginx)
