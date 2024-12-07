const express = require("express");
const {
  generateEngagementReport,
  generateFinancialReport,
  generateActivityLogReport,
  viewReports,
} = require("../controllers/reportController");

const router = express.Router();

// Route to generate an engagement report
router.post("/engagement", generateEngagementReport);

// Route to generate a financial report
router.post("/financial", generateFinancialReport);

// Route to generate an activity log report
router.post("/activity-log", generateActivityLogReport);

// Route to view all reports
router.get("/", viewReports);

module.exports = router;
