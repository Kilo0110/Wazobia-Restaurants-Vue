const mongoose = require("mongoose");
const colors = require("colors");
const dbURI = process.env.MONGO_URI

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dbURI);

    console.log(`MongoDB Connected succesfully`.yellow.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
