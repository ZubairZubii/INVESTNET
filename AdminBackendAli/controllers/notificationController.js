const Notification = require("../models/Notification");

// Send a notification to a user
const createNotification = async (req, res) => {
  try {
    const { user, message, type } = req.body;

    // Validate the notification type
    const validTypes = ["Registration", "Policy", "ContentFlag"];
    if (!validTypes.includes(type)) {
      return res.status(400).json({ error: "Invalid notification type" });
    }

    // Create a new notification
    const notification = new Notification({
      user,
      message,
      type,
    });

    // Save the notification to the database
    await notification.save();

    res.status(201).json({
      message: "Notification created successfully",
      notification,
    });
  } catch (err) {
    res.status(500).json({ error: "Server error", message: err.message });
  }
};

// Get all notifications for a user
const getUserNotifications = async (req, res) => {
  try {
    const userId = req.params.userId;
    const notifications = await Notification.find({ user: userId }).sort({ timestamp: -1 });

    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ error: "Error fetching notifications", message: err.message });
  }
};

// Mark notification as read
const markNotificationAsRead = async (req, res) => {
  try {
    const notificationId = req.params.id;
    const notification = await Notification.findById(notificationId);

    if (!notification) {
      return res.status(404).json({ error: "Notification not found" });
    }

    notification.isRead = true;
    await notification.save();

    res.status(200).json({ message: "Notification marked as read", notification });
  } catch (err) {
    res.status(500).json({ error: "Error updating notification", message: err.message });
  }
};

module.exports = {
  createNotification,
  getUserNotifications,
  markNotificationAsRead,
};
    