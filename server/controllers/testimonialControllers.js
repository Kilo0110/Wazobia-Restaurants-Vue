const asyncHandler = require("express-async-handler");
const path = require("path");

const Testimonial = require("../models/testimonialModel");

// @desc Get testimonials
// @route Get /api/testimonials
// @access Private
const getTestimonials = asyncHandler(async (req, res) => {
  let testimonials
  testimonials = await Testimonial.find({}).limit(5)

  if (Object.keys(req.query).length !== 0) {
    let amountToGet = req.query.amount
    testimonials = await Testimonial.aggregate([
      { $sample: { size: parseInt(amountToGet) } },
    ]);
  }
  res.status(200).json(testimonials)
});

module.exports = {
  getTestimonials,
  // setMeal,
  // updateMeal,
  // deleteMeal,
};