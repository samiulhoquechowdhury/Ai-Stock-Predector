const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoutes = require("./routes/authRoutes");
const stockRoutes = require("./routes/stockRoutes");
const portfolioRoutes = require("./routes/portfolioRoutes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/stocks", stockRoutes);
app.use("/api/portfolio", portfolioRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"));

app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
