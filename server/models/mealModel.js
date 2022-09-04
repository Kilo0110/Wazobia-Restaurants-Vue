const mongoose = require("mongoose");

const Meal = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a meal name"],
    },
    price: {
      type: Number,
      required: [true, "Please add a meal price"],
    },
    description: {
      type: String,
      required: [true, "Please add a meal description"],
    },
    tags: {
      type: [String],
      required: [true, "Please select at least one tag"],
    },
    mealPictures: {
      type: [String],
      required: [true, "Please select 3 images"],
    },
  },
  {
    timestamps: true,
  },
  { collection: "meals" }
);

module.exports = mongoose.model("Meal", Meal);
