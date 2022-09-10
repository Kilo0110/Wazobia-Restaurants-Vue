const asyncHandler = require("express-async-handler");
const path = require("path");

const Meal = require("../models/mealModel");

// @desc Get meals
// @route Get /api/meals
// @access Private
const getRandomMeals = asyncHandler(async (req, res) => {
  const meals = await Meal.aggregate([
    { $sample: { size: 9 } },
  ]);

  res.status(200).json(meals)
});

// @desc Set meal
// @route Post /api/meals
// @access Private
const setMeal = asyncHandler(async (req, res, next) => {
  // console.log(req.body);
  let meal = new Meal({
    name: req.body.mealName,
    price: req.body.mealPrice,
    description: req.body.mealDescription,
    tags: req.body.mealCategory,
  });
  if (req.files) {
    let imagesPath = [];
    req.files.forEach((file) => {
      imagesPath.push(path.join("uploads", file.filename));
    });
    meal.mealPictures = imagesPath;
  }

  meal
    .save()
    .then((response) => {
      res.json({
        message: "Meal saved succesfully",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured",
        error: error,
      });
    });
});

// @desc Update meals
// @route Put /api/meals/:id
// @access Private
const updateMeal = asyncHandler(async (req, res) => {
  const meal = await Meal.findById(req.params.id);

  if (!meal) {
    res.status(400);
    throw new Error("Meal not found");
  }

  const updatedMeal = await Meal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedMeal);
});

// @desc Delete meals
// @route Delete /api/meals/:id
// @access Private
const deleteMeal = asyncHandler(async (req, res) => {
  const meal = await Meal.findById(req.params.id);

  if (!meal) {
    res.status(400);
    throw new Error("Meal not found");
  }

  meal.remove();

  res.status(200).json(`Meal with the ID of ${req.params.id} was deleted`);
});

module.exports = {
  getRandomMeals,
  setMeal,
  updateMeal,
  deleteMeal,
};
