const express = require("express");

const app = express();
const PORT = 5002;

// app.get("/", (req, res) => {
//   res.send("Admin Service is Running...");
// });

app.listen(PORT, () => {
  console.log(`Admin Service running on http://localhost:${PORT}`);
});
