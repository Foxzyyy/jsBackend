require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello world,Hello");
});

app.listen(port, () => {
  console.log(`Excample app listening at http://localhost:${port}`);
});
