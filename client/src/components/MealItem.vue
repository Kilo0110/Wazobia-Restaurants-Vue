<template>
  <ul class="menu__content d-flex flex-wrap">
    <li
      class="menu__item d-flex flex-column"
      v-for="meal in meals"
      :key="meal._id"
    >
      <h3 class="menu__item-name">{{ meal.name }}</h3>
      <p class="menu__item-description">{{ meal.description }}</p>
      <span class="menu__item-price">{{ meal.price }}</span>
      <button class="link menu__item-order-btn d-flex align-center">
        Add to cart
        <i class="fa-solid fa-cart-plus"></i>
      </button>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "MealItem",
  data() {
    return {
      meals: [],
      description: "",
      name: "",
    };
  },
  async mounted() {
    const url = process.env.VUE_APP_API_URL;

    try {
      const meals = await (await axios.get(url)).data;
      this.meals = meals;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss">
.menu__content {
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 3em;
}

.menu__item {
  position: relative;
  gap: 0.35em;
  flex: 1 0 clamp(180px, calc(10em + 1vw), 50em);
  box-shadow: 0 0 5px 3px rgba(#000, 0.2);
  background: var(--pry-txt-clr-inv);
  padding: 1em 0.5em;

  @media screen and (min-width: 490px) {
    & {
      flex-basis: clamp(225px, calc(10em + 1vw), 50em);
    }
  }

  @media screen and (min-width: 900px) {
    & {
      flex-basis: clamp(360px, calc(10em + 1vw), 50em);
    }
  }

  &-name {
    font-family: "montserratregular";
  }

  &-description {
    padding-left: 0.5em;
    color: var(--sec-txt-clr);
    font-family: "montserratlight";
  }

  &-price {
    position: absolute;
    top: 1em;
    right: 1em;
    font-family: "montserratsemibold";
  }

  &-order-btn {
    align-self: flex-end;
    outline: none;
    border: none;
  }
}
</style>
