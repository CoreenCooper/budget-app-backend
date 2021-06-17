const express = require("express");
const cors = require('cors');
const transactionsController = require("./controllers/transactionsController.js");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/transactions", transactionsController);



// app.use((req, res, next) => {
//   console.log("Use as debugger");
//   next();
// })

// ROOT
app.get("/", (req, res) => {
  res.send(`<h1>Coreen's in the house.<br>
  I said Coreen's in the house.</h1>`);
});

// 
app.get("/*", (req, res) => {
  res.status(404).send("Page Not Found!!!");
});

module.exports = app;
