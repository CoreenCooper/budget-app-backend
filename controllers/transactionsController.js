const transactions = require("express").Router();
const transactionsArray = require("../models/transactions");

// list all transactions
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

// create a single transaction
transactions.post("/", (req, res) => {
  const { body } = req;
  transactionsArray.push(body);
  const newTrans = transactionsArray.length - 1;
  res.json(transactionsArray[newTrans]);
});

// show a single transaction
transactions.get("/:index", (req, res) => {
  const { index } = req.params;
  console.log(index);
  if (transactionsArray[index]) {
    res.json(transactionsArray[index]);
  } else {
    console.log("pudding")
    // res.redirect("/*");
  }
});

// update a single transaction
transactions.put("/:index", (req, res) => {
  const { index } = req.params;
  const { body } = req;
  if (transactions[index]) {
    transactions[index] = body;
    res.json(transactionsArray[index]);
  } else {
    res.direct("/*");
  }
});

// delete a single transaction
transactions.delete("/:index", (req, res) => {
  const { index } = req.params;
  const deletedTransactions = transactionsArray.splice(index, 1);
  res.json(deletedTransactions[0]);
});

module.exports = transactions;
