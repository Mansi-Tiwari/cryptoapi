const express = require("express");
const router = express.Router();
const fs = require("fs");

const jsonData = fs.readFileSync("./data/cryptocurrencyData.json", "utf8");

const data = JSON.parse(jsonData);
const paginate = (req, res, next) => {
  const query = req.query || {}; 
  const page = parseInt(query.page) || 1; // Current page number
  const limit = parseInt(query.limit);
  // Items per page
  const startIndex = (page - 1) * limit; 
  const endIndex = page * limit; 
  
  req.pagination = {
    page,
    limit,
    startIndex,
    endIndex,
    totalPages: Math.ceil(data.length / limit),
  };

  next();
};


router.get("/crypto/api", paginate, (req, res) => {
  const { startIndex, endIndex } = req.pagination;
  const result = data.slice(startIndex, endIndex);

  const response = {
    result,
    meta: {
      totalItems: result.length,
      currentPage: req.pagination.page,
      pageSize: req.pagination.limit,
      totalPages: req.pagination.totalPages,
    },
  };

  if (req.pagination.limit >= 4 && req.pagination.limit <= 30 ) {
    res.json(response);
  }

  else if(isNaN(req.pagination.limit)){
    res.status(400).json({
      error: "Add limit parameter",
    });
  }

  else{
    res.status(400).json({
      error: "Invalid limit",
    });
  }
  
});

module.exports = router;
