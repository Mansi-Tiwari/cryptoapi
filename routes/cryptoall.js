const express = require("express");
const router = express.Router();
const fs = require("fs");
const rateLimit = require("express-rate-limit");

const jsonData = fs.readFileSync("./data/cryptocurrencyData.json", "utf8");

const data = JSON.parse(jsonData);
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
router.get("/crypto/all", limiter, (req, res) => {
  if (req.query.id !== undefined) {
    return res.status(400).json({ error: "Invalid endpoint" });
  }

  res.json(data);
});

module.exports = router;
