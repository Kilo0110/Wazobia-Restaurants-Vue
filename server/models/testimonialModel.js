const mongoose = require('mongoose');

const Testimonial = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please add a testifier name"],
    },
    testimony: {
      type: String,
      required: [true, "Please add a testifier name"],
    },
    testifierPicture: {
      type: [String],
      required: [true, "Please select an image"],
    },
  },
  {
    timestamps: true,
  },
  { collection: "testimonials" }
);

module.exports = mongoose.model("Testimonial", Testimonial);