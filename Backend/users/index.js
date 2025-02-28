const express = require("express");

const app = express();
const PORT = 5001;

app.get("/", (req, res) => {
  res.send("User Service is Running...");
});

app.listen(PORT, () => {
  console.log(`User Service running on http://localhost:${PORT}`);
});
