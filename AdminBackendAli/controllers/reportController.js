const Report = require("../models/Report");
const User = require("../models/User");
const Transaction = require("../models/Transaction");  // Assuming a Transaction model for financial data

// Generate an engagement report
const generateEngagementReport = async (req, res) => {
  try {
    const { generatedBy } = req.body; // Admin user who is generating the report
    const users = await User.find({});  // Get all users for engagement analysis
    let totalProfileViews = 0;
    let totalPostEngagement = 0;

    // Calculate engagement metrics
    users.forEach(user => {
      totalProfileViews += user.profile.metrics.profileViews;
      totalPostEngagement += user.profile.metrics.postEngagement;
    });

    const content = {
      totalProfileViews,
      totalPostEngagement,
    };

    const newReport = new Report({
      generatedBy,
      reportType: "Engagement",
      content,
    });

    await newReport.save();
    res.status(201).json({ message: "Engagement report generated successfully", report: newReport });
  } catch (err) {
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

// Generate a financial report
const generateFinancialReport = async (req, res) => {
  try {
    const { generatedBy } = req.body;
    const transactions = await Transaction.find({});  // Assuming financial transactions are stored in a Transaction model
    let totalRevenue = 0;
    
    // Calculate total revenue
    transactions.forEach(transaction => {
      totalRevenue += transaction.amount;
    });

    const content = {
      totalRevenue,
      transactions: transactions.length,
    };

    const newReport = new Report({
      generatedBy,
      reportType: "Financial",
      content,
    });

    await newReport.save();
    res.status(201).json({ message: "Financial report generated successfully", report: newReport });
  } catch (err) {
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

// Generate an activity log report
const generateActivityLogReport = async (req, res) => {
  try {
    const { generatedBy } = req.body;
    const users = await User.find({});
    const activities = [];

    // Collect activity logs for users
    users.forEach(user => {
      user.chats.forEach(chat => {
        activities.push({
          user: user.name,
          chatId: chat.chatId,
          lastMessage: chat.lastMessage.content,
          timestamp: chat.lastMessage.timestamp,
        });
      });
    });

    const content = {
      totalActivities: activities.length,
      activities,
    };

    const newReport = new Report({
      generatedBy,
      reportType: "Activity Logs",
      content,
    });

    await newReport.save();
    res.status(201).json({ message: "Activity Log report generated successfully", report: newReport });
  } catch (err) {
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

// View all reports
const viewReports = async (req, res) => {
  try {
    const reports = await Report.find({}).populate("generatedBy", "name email");
    res.status(200).json(reports);
  } catch (err) {
    res.status(500).json({ error: "Error fetching reports", message: err.message });
  }
};

module.exports = {
  generateEngagementReport,
  generateFinancialReport,
  generateActivityLogReport,
  viewReports,
};
