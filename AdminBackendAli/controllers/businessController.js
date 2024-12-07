const Business = require("../models/Business");

// Create a business registration (business submits their documents)
const createBusiness = async (req, res) => {
  try {
    const { name, registrationNumber, documents } = req.body;

    // Check if business with the same registration number exists
    const businessExists = await Business.findOne({ registrationNumber });
    if (businessExists) {
      return res.status(400).json({ error: "Business already registered" });
    }

    // Create new business
    const newBusiness = new Business({
      name,
      registrationNumber,
      documents,
    });

    // Save the business registration
    await newBusiness.save();
    res.status(201).json({ message: "Business registered successfully", business: newBusiness });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get all businesses
const getAllBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find();
    res.status(200).json(businesses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching businesses", error: err.message });
  }
};

// Get a single business by ID
const getBusinessById = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) return res.status(404).json({ message: "Business not found" });
    res.status(200).json(business);
  } catch (err) {
    res.status(500).json({ message: "Error fetching business", error: err.message });
  }
};

// Update business registration status (approve/reject)
const updateBusinessStatus = async (req, res) => {
  try {
    const { status, responseMessage } = req.body;  // `status` should be "Approved" or "Rejected"
    
    if (!["Approved", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const updatedBusiness = await Business.findByIdAndUpdate(
      req.params.id,
      { registrationStatus: status, verificationResponse: responseMessage, responseTime: new Date() },
      { new: true }
    );

    if (!updatedBusiness) return res.status(404).json({ message: "Business not found" });

    res.status(200).json(updatedBusiness);
  } catch (err) {
    res.status(500).json({ message: "Error updating status", error: err.message });
  }
};

// Get businesses filtered by status (Approved/Rejected/Waiting)
const getBusinessesByStatus = async (req, res) => {
  try {
    const { status } = req.query;

    if (!["Approved", "Rejected", "Waiting"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const businesses = await Business.find({ registrationStatus: status });
    res.status(200).json(businesses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching businesses by status", error: err.message });
  }
};

module.exports = {
  createBusiness,
  getAllBusinesses,
  getBusinessById,
  updateBusinessStatus,
  getBusinessesByStatus,
};
