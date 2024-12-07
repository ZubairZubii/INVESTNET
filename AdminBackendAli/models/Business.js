const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true,  // Make sure each business has a unique registration number
  },
  documents: [
    {
      documentName: String,
      documentURL: String,  // URL or path to the document
    },
  ],
  registrationStatus: {
    type: String,
    enum: ["Waiting", "Approved", "Rejected"],
    default: "Waiting",
  },
  verificationResponse: {
    type: String,  // Message sent back to business after verification (optional)
    default: null,
  },
  verificationDate: {
    type: Date,
    default: null,
  },
  responseTime: {
    type: Date,  // Date when the response was sent back to the business
    default: null,
  },
}, { timestamps: true });

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
