const express = require("express");
const dotenv = require('dotenv');
dotenv.config()

const app = express();
const PORT = 5002;
const connectDB = require('./services/db')
connectDB();

// app.get("/", (req, res) => {
//   res.send("Admin Service is Running...");
// });

app.listen(PORT, () => {
  console.log(`Admin Service running on http://localhost:${PORT}`);
});
