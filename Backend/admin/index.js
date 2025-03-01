const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = 5002;
const connectDB = require("./services/db");
connectDB();

// Middleware for JSON parsing
app.use(express.json());

// Import Routes
const userRouter = require("./routes/user.routes");

// Base Route
app.get("/", (req, res) => {
  res.send("Admin Service is Running...");
});

// Fix: Correct Route Prefix (Keep Consistent)
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Admin Service running on http://localhost:${PORT}`);
});
