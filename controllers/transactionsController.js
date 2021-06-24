const transactions = require("express").Router();
const transactionsArray = require("../models/transactions");

// index - list all transactions
transactions.get("/", (req, res) => res.json(transactionsArray));

// create a single transaction
transactions.post("/", (req, res) => {
  const { body } = req;
  transactionsArray.push(body);
  const newTrans = transactionsArray.length - 1;
  res.json(transactionsArray[newTrans]);
});

// show a single transaction
transactions.get("/:idx", (req, res) => {
  const { idx } = req.params;
  return transactionsArray[idx]
    ? res.json(transactionsArray[idx])
    : res.redirect("/*");
});

// update a single transaction
transactions.put("/:idx", (req, res) => {
  const { idx } = req.params;
  const { body } = req;
  if (transactionsArray[idx]) {
    transactionsArray[idx] = body;
    res.json(transactionsArray[idx]);
  } else {
    res.redirect("/*");
  }
});

// delete a single transaction
transactions.delete("/:idx", (req, res) => {
  const { idx } = req.params;
  const deletedTransactions = transactionsArray.splice(idx, 1);
  return transactionsArray[idx]
    ? res.json(deletedTransactions[0])
    : res.redirect("/*");
});

module.exports = transactions;
