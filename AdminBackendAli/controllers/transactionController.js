const Transaction = require("../models/Transaction");

// Create a new transaction
const createTransaction = async (req, res) => {
  try {
    const { user, amount, transactionType, description } = req.body;

    // Validate amount (it should be positive)
    if (amount <= 0) {
      return res.status(400).json({ error: "Amount should be greater than zero" });
    }

    const newTransaction = new Transaction({
      user,
      amount,
      transactionType,
      description,
    });

    await newTransaction.save();
    res.status(201).json({ message: "Transaction created successfully", transaction: newTransaction });
  } catch (err) {
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

// Get all transactions of a user
const getUserTransactions = async (req, res) => {
  try {
    const userId = req.params.userId;
    const transactions = await Transaction.find({ user: userId });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

// Get all transactions (admin view)
const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({}).populate("user", "name email");
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ error: "Error fetching transactions", message: err.message });
  }
};

module.exports = {
  createTransaction,
  getUserTransactions,
  getAllTransactions,
};
