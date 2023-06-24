const express = require("express");
const router = express.Router();
const fs = require("fs");
const jsonData = fs.readFileSync("./data/cryptocurrencyData.json", "utf8");

const data = JSON.parse(jsonData);

router.get("/crypto/api/name/:name", (req, res) => {
  const searchName = req.params.name.toLowerCase();
  const filteredCrypto = data.filter((c) =>
    c.name.toLowerCase().includes(searchName)
  );

  if (filteredCrypto.length > 0) {
    const result = {
      result: filteredCrypto.length,
      data: filteredCrypto.map((crypto) => ({
        id: crypto.id,
        name: crypto.name,
        symbol: crypto.symbol,
        label: crypto.label,
      })),
    };

    res.send(result);
  } else {
    res
      .status(404)
      .send({ error: "Invalid name parameter. Please provide a valid name." });
  }
});

module.exports = router;
