const axios = require("axios").default;

const getMeals = async () => {
  try {
    const response = await axios.get('/api/meals');
    let data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getMeals;
