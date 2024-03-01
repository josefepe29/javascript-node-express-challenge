const env = require("dotenv");
const mongoose = require("mongoose");
env.config();

//Connection to the database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection to the database completed");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
