const router = require("express").Router();
const upload = require("../middleware/upload");

const {
  getTestimonials,
  setTestimonial,
  updateTestimonial,
  deleteTestimonial,
} = require("../controllers/testimonialControllers");

const { protect } = require('../middleware/authMiddleware')

router.route("/").get(protect, getTestimonials);
router.post("/", protect, upload.array("mealPictures", 3), setTestimonial);
router.route("/:id").put(protect, updateTestimonial,).delete(protect, deleteTestimonial);

module.exports = router;
