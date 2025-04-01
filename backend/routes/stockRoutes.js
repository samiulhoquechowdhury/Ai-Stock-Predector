const express = require("express");
const axios = require("axios");
const Stock = require("../models/Stock");

const router = express.Router();
const API_KEY = process.env.STOCK_API_KEY;
const API_URL = "https://www.alphavantage.co/query";

// Fetch and Save Stock Data
router.get("/fetch/:symbol", async (req, res) => {
  try {
    const symbol = req.params.symbol;
    const response = await axios.get(`${API_URL}`, {
      params: {
        function: "TIME_SERIES_DAILY",
        symbol,
        apikey: API_KEY,
      },
    });

    const stockData = response.data["Time Series (Daily)"];
    if (!stockData)
      return res.status(400).json({ message: "Invalid Stock Symbol" });

    // Convert and save to MongoDB
    const records = Object.keys(stockData).map((date) => ({
      symbol,
      date,
      open: parseFloat(stockData[date]["1. open"]),
      high: parseFloat(stockData[date]["2. high"]),
      low: parseFloat(stockData[date]["3. low"]),
      close: parseFloat(stockData[date]["4. close"]),
      volume: parseInt(stockData[date]["5. volume"]),
    }));

    await Stock.insertMany(records, { ordered: false }).catch(() => {});

    res.json({ message: "Stock data updated!", records: records.slice(0, 5) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get stored stock data
router.get("/history/:symbol", async (req, res) => {
  try {
    const symbol = req.params.symbol;
    const stockHistory = await Stock.find({ symbol })
      .sort({ date: -1 })
      .limit(50);
    res.json(stockHistory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
