const express = require("express");
const {
  createTransaction,
  getUserTransactions,
  getAllTransactions,
} = require("../controllers/transactionController");

const router = express.Router();

// Route to create a new transaction
router.post("/", createTransaction);

// Route to get all transactions for a user
router.get("/:userId", getUserTransactions);

// Route to get all transactions (admin view)
router.get("/", getAllTransactions);

module.exports = router;
