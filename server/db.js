const env = require("dotenv");
const mongoose = require("mongoose");
env.config();

//Connection to the database
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://josefepe29:josefepe2890@cluster0.dtni1nd.mongodb.net/BusCompany?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connection to the database completed");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
