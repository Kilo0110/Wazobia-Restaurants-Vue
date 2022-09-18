const router = require("express").Router();
const upload = require("../middleware/upload");

const {
  getTestimonials,
  // setMeal,
  // updateMeal,
  // deleteMeal,
} = require("../controllers/testimonialControllers");

router.route("/").get(getTestimonials);
// router.post("/", upload.array("mealPictures", 3), setMeal);
// router.route("/:id").put(updateMeal).delete(deleteMeal);

module.exports = router;
