const transactions = require("expres").Router();
const transactionsArray = require("../models/transactions");

// index - list all transactions
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

// create a single transaction
transactions.post("/", (req, res) => {
  res.json(transactionsArray);
});

// show a single transaction
transactions.get("/id", (req, res) => {
  const { id } = req.params;
  if (transactionsArray[id]) {
    console.log(transactionsArray[id]);
    res.json(logsArray[id]);
  } else {
    res.redirect("/*");
  }
});

// update a single transaction
transactions.put("/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;
  if (transactions[id]) {
    transactions[id] = body;
    res.json(logsArray[id]);
    console.log(body);
  } else {
    res.direct("/*");
  }
});

// delete a single transaction
transactions.delete("/:id", (req, res) => {
  const { id } = req.params;
  const deletedTransactions = transactionsArray.splice(id, 1);
  res.json(deletedTransactions[0]);
});

module.exports = logs;
