const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');
const colors = require('colors');
const mongoose = require("mongoose");
const cors = require("cors");
const Meal = require("./models/mealModel");

const PORT = process.env.PORT || 3000

require("dotenv").config();

app.use(cors()); // to allow cross origin requests
app.use(bodyParser.json()); // to convert the request into JSON

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB database Connected..."))
  .catch((err) => console.log(err));


app.get("/api/meals", async (req, res) => {
  let amountOfMealsToGet = req.query.amount;
  const meals = await Meal.aggregate([
    { $sample: { size: 2 } },
  ]);

  res.status(200).json(meals);
});

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`.cyan);
});
