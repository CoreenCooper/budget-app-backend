const express = require("express");
const cors = require('cors');
const transactionsController = require("./controllers/transactionsController.js");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/transactions", transactionsController);

// ROOT
app.get("/", (req, res) => {
  res.send(`<h1>Budget API</h1>`);
});

// catch all
app.get("/*", (req, res) => {
  res.status(404).send("Page Not Found!!!");
});

module.exports = app;
