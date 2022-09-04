const axios = require("axios").default;

const getMeals = async (amountOfMealsToGet) => {
  try {
    const response = await axios.get(`/api/meals?amount=${amountOfMealsToGet}`);
    let data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getMeals;
