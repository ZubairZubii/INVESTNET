const express = require("express");
const {
  createNotification,
  getUserNotifications,
  markNotificationAsRead,
} = require("../controllers/notificationController");

const router = express.Router();

// Route to send a notification
router.post("/", createNotification);

// Route to get all notifications for a user
router.get("/:userId", getUserNotifications);

// Route to mark a notification as read
router.put("/:id/read", markNotificationAsRead);

module.exports = router;
