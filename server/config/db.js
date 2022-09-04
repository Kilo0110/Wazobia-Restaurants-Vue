const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://localhost:27017/WazobiaRestaurant"
    );

    console.log(`MongoDB Connected succesfully`.yellow.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
