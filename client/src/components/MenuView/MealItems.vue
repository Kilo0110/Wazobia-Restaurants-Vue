<template>
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <div class="meal" v-for="meal in meals" :key="meal.id">
    <img
      src="@/assets/img/catalogue/african-national-food-dish-grilled-260nw-1467817790.jpg"
      alt=""
      class="meal__img"
    />
    <h3 class="meal__name">{{ meal.name }}</h3>
    <span class="meal__price">{{ meal.price }}</span>
  </div>
</template>

<script>
import { HTTP } from "@/helpers/http-common.js";

export default {
  name: "MealItems",
  data() {
    return {
      meals: [],
      description: "",
      name: "",
    };
  },
  async mounted() {
    const url = process.env.VUE_APP_MEAL_API;

    try {
      console.log(url);
      const meals = await (await HTTP.get(`meals?amount=5`)).data;
      this.meals = meals;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss">
.meal {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35em;
  text-align: center;

  @media screen and (max-width: 365px) {
    &:nth-of-type(3),
    &:nth-of-type(4) {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    &:nth-of-type(3) {
      display: none;
    }
  }

  &__img {
    width: 5em;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
  }

  &__name {
    font-size: clamp(0.5rem, calc(var(--fs-100) + 1vw), 1.75rem);
    font-weight: bold;
  }

  &__price {
    font-size: clamp(0.5rem, calc(var(--fs-100) + 0.5vw), 1.5rem);
    font-weight: normal;
  }
}
</style>
