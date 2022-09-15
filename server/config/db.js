const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require('dotenv').config();
let dbURI = "mongodb://localhost:27017/WazobiaRestaurant"

if (process.env.NODE_ENV === "production") {
  dbURI = process.env.MONGO_URI
}

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dbURI);

    console.log(`MongoDB Connected succesfully to ${dbURI}`.yellow.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
