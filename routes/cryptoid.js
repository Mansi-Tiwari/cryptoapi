const express = require("express");
const router = express.Router();
const fs = require('fs');

const jsonData = fs.readFileSync('./data/cryptocurrencyData.json', 'utf8');
const data = JSON.parse(jsonData);

router.get("/crypto/api/id/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const crypto = data.find(c => c.id === id);
  if (crypto) {
    res.send(crypto);
  } else {
    res.status(404).send("Crypto id not found");
  }
});

module.exports = router;