const express = require("express");
const app = express();
const bookings = require("./Routes/bookings.routes.js");
require("dotenv").config();
const connectDB = require("./db.js");
const { validateHTTPMethods } = require("./auth/authentication.js");

//Connection to the database
connectDB();

//Environment Variables
const PORT = process.env.PORT;

app.use(express.json());

//Middleware to validate HTTP methods
app.use(validateHTTPMethods);

app.use("/bookings", bookings);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
