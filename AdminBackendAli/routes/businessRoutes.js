const express = require("express");
const {
  createBusiness,
  getAllBusinesses,
  getBusinessById,
  updateBusinessStatus,
  getBusinessesByStatus,
} = require("../controllers/businessController");

const router = express.Router();

// Route for registering a new business
router.post("/", createBusiness);

// Route to get all businesses
router.get("/", getAllBusinesses);

// Route to get a specific business by ID
router.get("/:id", getBusinessById);

// Route to update the registration status of a business (approve/reject)
router.put("/:id/status", updateBusinessStatus);

// Route to get businesses by registration status
router.get("/status", getBusinessesByStatus);

module.exports = router;
