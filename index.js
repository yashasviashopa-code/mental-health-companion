const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/auth");
const connectDB = require("./config/db");



const app = express();
connectDB();


// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);


// Test Route
app.get("/", (req, res) => {
  res.send("Mental Health Companion Backend Running ✅");
});

// Server Start
const PORT = 5000;

app.listen(PORT, () => {
  console.log("✅ Server running on port " + PORT);
});
