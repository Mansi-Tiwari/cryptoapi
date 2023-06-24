const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
const port = process.env.PORT || 8000;

const { readdirSync } = require("fs");

readdirSync("./routes").map((file) =>
app.use("/", require("./routes/" + file))
);

app.get("/crypto", (req, res) => {
  res.send("Welcome to Crypto Currency Api!🎉");
});

app.use((req, res, next) => {
  const error = new Error('Invalid endpoint');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal server error',
    },
  });
});


app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});

