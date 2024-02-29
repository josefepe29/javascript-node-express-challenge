const express = require("express");
const router = express.Router();
const {
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookings.controller.js");

router.get("/:id", getBookingById);

router.post("/", createBooking);

router.put("/:id", updateBooking);

router.delete("/:id", deleteBooking);

module.exports = router;
