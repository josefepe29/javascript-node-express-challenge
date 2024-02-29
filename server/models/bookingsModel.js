const mongoose = require("mongoose");
const { model, Schema } = mongoose;

//Booking Schema and Model

const bookingSchema = new Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    email: {
      type: String,
      required: [true, "Email is required (Example: username@example.co)"],
      match: [/.+\@.+\..+/, "Please enter a valid email"],
    },
    origin: { type: String, required: [true, "Origin is required"] },
    destination: { type: String, required: [true, "Destination is required"] },
    departureDateTime: {
      type: String,
      required: [true, "Departure date and time are required"],
      match: [
        /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/,
        "Please enter a valid date and time (Example: DD-MM-YYYY HH:mm:ss)",
      ],
    },
    duration: {
      type: Number,
      required: [true, "Duration is required"],
      min: [1, "Must be at least 1 min of duration"],
    },
  },
  { versionKey: false }
);

//Modelo para la coleccion tasks
const BookingModel = model("bookings", bookingSchema);

module.exports = BookingModel;
