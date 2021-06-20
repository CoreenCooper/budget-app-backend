const transactions = require("express").Router();
const transactionsArray = require("../models/transactions");

// index - list all transactions
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

// create and display a single transaction
transactions.post("/", (req, res) => {
  const { body } = req;
  transactionsArray.push(body);
  const newTrans = transactionsArray.length - 1;
  res.json(transactionsArray[newTrans]);
});

// show a single transaction
transactions.get("/:idx", (req, res) => {
  const { idx } = req.params;
  if (transactionsArray[idx]) {
    console.log(transactionsArray[idx]);
    res.json(transactionsArray[idx]);
  } else {
    res.redirect("/*");
  }
});

// update a single transaction
transactions.put("/:idx", (req, res) => {
  const { idx } = req.params;
  const { body } = req;
  if (transactions[idx]) {
    transactions[idx] = body;
    res.json(transactionsArray[idx]);
    console.log(body);
  } else {
    res.direct("/*");
  }
});

// should there be sometype of validation
// if the user enters an idx that is not available?

// delete a single transaction
transactions.delete("/:idx", (req, res) => {
  const { idx } = req.params;
  const deletedTransactions = transactionsArray.splice(idx, 1);
  res.json(deletedTransactions[0]);
});

module.exports = transactions;