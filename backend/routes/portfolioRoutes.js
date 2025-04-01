const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware for authentication
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Add stock to portfolio
router.post("/add", authMiddleware, async (req, res) => {
  const { symbol } = req.body;
  const user = await User.findById(req.user.userId);

  if (!user.portfolio.includes(symbol)) {
    user.portfolio.push(symbol);
    await user.save();
  }
  res.json({ portfolio: user.portfolio });
});

// Get user portfolio
router.get("/", authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.userId);
  res.json({ portfolio: user.portfolio });
});

module.exports = router;
