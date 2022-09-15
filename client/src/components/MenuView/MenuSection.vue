<template>
  <section class="meal-type-section d-flex flex-column">
    <MealTypeSection
      mealTypeHeader="Breakfast Meals"
      mealTypeDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
      mollitia beatae consequatur hic culpa unde corrupti perspiciatis
      laudantium quod sapiente!"
    />
    <MealTypeSection
      mealTypeHeader="Lunch Meals"
      mealTypeDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
      mollitia beatae consequatur hic culpa unde corrupti perspiciatis
      laudantium quod sapiente!"
    />
  </section>
</template>

<script>
import MealTypeSection from "@/components/MenuView/MealTypeSection.vue";

export default {
  name: "MenuSection",
  components: {
    MealTypeSection,
  },
};
</script>

<style lang="scss"></style>
