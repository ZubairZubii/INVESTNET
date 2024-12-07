const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    generatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",  // Reference to the User model (typically admin)
      required: true,
    },
    reportType: {
      type: String,
      enum: ["Engagement", "Financial", "Activity Logs"],
      required: true,
    },
    content: {
      type: Object,  // The content will vary based on the report type
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
