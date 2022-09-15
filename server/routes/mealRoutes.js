const router = require("express").Router();
const upload = require("../middleware/upload");

const {
  getMeals,
  setMeal,
  updateMeal,
  deleteMeal,
} = require("../controllers/mealController");

router.route("/").get(getMeals);
router.post("/", upload.array("mealPictures", 3), setMeal);
router.route("/:id").put(updateMeal).delete(deleteMeal);

module.exports = router;
