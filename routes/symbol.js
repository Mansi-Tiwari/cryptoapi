const express = require("express");
const router = express.Router();
const fs = require("fs");
const jsonData = fs.readFileSync("./data/cryptocurrencyData.json", "utf8");
const data = JSON.parse(jsonData);


router.get("/crypto/api/symbol/:symbol", (req, res) => {
  const symbol = req.params.symbol.toLowerCase();
  const filteredCrypto = data.filter((c) => c.symbol.toLowerCase() === symbol);

  const result = {
    result: filteredCrypto.length,
    data: filteredCrypto.map((crypto) => ({
      id: crypto.id,
      name: crypto.name,
      symbol: crypto.symbol,
    })),
  };

  res.send(result);
});

module.exports = router;
