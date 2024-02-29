const BookingModel = require("../models/bookingsModel.js");
const moment = require("moment");

//Find a booking using its ID

const getBookingById = async (req, res) => {
  const bookingID = req.params.id;
  if (
    bookingID === undefined ||
    bookingID === null ||
    bookingID.trim() === "" ||
    bookingID < 0
  ) {
    res.status(400).json("Invalid ID");
    return;
  }
  try {
    const booking = await BookingModel.findById(bookingID);
    if (!booking) {
      res.status(404).json({ error: "Booking not found" });
    }
    res.json(booking);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

//Create a new booking

const createBooking = async (req, res) => {
  const { name, email, origin, destination, departureDateTime, duration } =
    req.body;
  const date = moment(departureDateTime, "DD-MM-YYYY HH:mm:ss").toDate();
  try {
    const result = new BookingModel({
      name,
      email,
      origin,
      destination,
      departureDateTime: date,
      duration,
    });
    const booking = await result.save();

    res.json(booking);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

//Update an existing booking

const updateBooking = async (req, res) => {
  const bookingID = req.params.id;
  const body = req.body;
  if (
    bookingID === undefined ||
    bookingID === null ||
    bookingID.trim() === "" ||
    bookingID < 0
  ) {
    return res.status(400).json("Invalid ID");
  }
  if (body.departureDateTime) {
    console.log(body.departureDateTime);
    const date = moment(body.departureDateTime, "DD-MM-YYYY HH:mm:ss").toDate();
    try {
      const booking = await BookingModel.findByIdAndUpdate(
        { _id: bookingID },
        { ...body, departureDateTime: date },
        { departureDateTime: date },
        {
          new: true,
        }
      );
      if (!booking) {
        return res.status(404).json({ error: "Booking not found" });
      }
      res.json(booking);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  } else {
    try {
      const booking = await BookingModel.findByIdAndUpdate(
        { _id: bookingID },
        body,
        {
          new: true,
        }
      );
      if (!booking) {
        return res.status(404).json({ error: "Booking not found" });
      }
      res.json(booking);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
};

//Delete an existing booking.

const deleteBooking = async (req, res) => {
  const bookingID = req.params.id;

  if (bookingID === undefined || bookingID === null || bookingID < 0) {
    return res.status(400).json("Invalid ID");
  }

  try {
    const booking = await BookingModel.findByIdAndDelete({ _id: bookingID });

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.json(booking);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = {
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
};
