const asyncHandler = require("express-async-handler");
const path = require("path");

const Testimonial = require("../models/testimonialModel");

// @desc Get testimonials
// @route Get /api/testimonials
// @access Private
const getTestimonials = asyncHandler(async (req, res) => {
  let testimonials
  testimonials = await Testimonial.find({ user: req.user.id }).limit(5)

  if (Object.keys(req.query).length !== 0) {
    let amountToGet = req.query.amount
    testimonials = await Testimonial.aggregate([
      { $sample: { size: parseInt(amountToGet) } },
    ]);
  }
  res.status(200).json(testimonials)
});

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setTestimonial = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const testimonial = await Testimonial.create({
    text: req.body.text,
    user: req.user.id,
  })

  res.status(200).json(testimonial)
})

// @desc    Update testimonial
// @route   PUT /api/testimonials/:id
// @access  Private
const updateTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await Testimonial.findById(req.params.id)

  if (!testimonial) {
    res.status(400)
    throw new Error('Testimonial not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the testimonial user
  if (testimonial.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedTestimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedTestimonial)
})

// @desc    Delete testimonial
// @route   DELETE /api/testimonials/:id
// @access  Private
const deleteTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await Testimonial.findById(req.params.id)

  if (!testimonial) {
    res.status(400)
    throw new Error('Testimonial not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the testimonial user
  if (testimonial.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await testimonial.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getTestimonials,
  setTestimonial,
  updateTestimonial,
  deleteTestimonial,
};