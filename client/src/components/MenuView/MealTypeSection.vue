<template>
  <section class="meal-type-section d-flex flex-column">
    <h1 class="meal-type-header">{{ mealTypeHeader }}</h1>
    <MealCarousel />
    <p class="meal-type-description">{{ mealTypeDescription }}</p>
    <button class="btn meal-type-btn">See More</button>
  </section>
</template>

<script>
import MealCarousel from "@/components/MenuView/MealCarousel.vue";

export default {
  name: "MealTypeSection",
  props: {
    mealTypeHeader: String,
    mealTypeDescription: String,
  },
  components: {
    MealCarousel,
  },
};
</script>

<style lang="scss" scoped>
.meal-type-section {
  gap: 1em;
  width: 90%;
  margin: 0 auto;

  @media screen and (min-width: 1000px) {
    padding: 1em 0;
  }

  .meal-type-header {
    text-align: left;
    font-family: "montserratregular", sans-serif;
    font-size: clamp(var(--fs-200), var(--fs-200) + 1vw, var(--fs-500));
    color: var(--accent-clr);
  }
}

.meal-type-description {
  // text-align: center;
  font-size: clamp(var(--fs-100), var(--fs-100) + 1vw, var(--fs-300));
  font-family: "montserratextralight";

  @media screen and (min-width: 400px) {
    width: 40ch;
  }

  @media screen and (min-width: 550px) {
    width: 50ch;
    font-weight: bold;
  }

  @media screen and (min-width: 650px) {
    width: 60ch;
  }

  @media screen and (min-width: 900px) {
    font-size: clamp(var(--fs-100), var(--fs-100) + 0.8vw, var(--fs-400));
    width: 70ch;
  }
}

.meal-type-btn {
  align-self: flex-start;
}
</style>
