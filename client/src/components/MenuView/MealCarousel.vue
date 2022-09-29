<template>
  <div class="meal-carousel-container">
    <button class="meal-carousel__btn meal-carousel__btn--prev">&lArr;</button>
    <button class="meal-carousel__btn meal-carousel__btn--next">&rArr;</button>
    <div class="meal-carousel">
      <div class="meal-carousel__slide" id="last-clone">
        <MealItems />
      </div>
      <div class="meal-carousel__slide">
        <MealItems />
      </div>
      <div class="meal-carousel__slide" id="first-clone">
        <MealItems />
      </div>
    </div>
  </div>
</template>

<script>
import MealItems from "@/components/MenuView/MealItems.vue";

export default {
  name: "MealCarousel",
  components: { MealItems },
  data() {
    return {
      carouselSlideID: "last-clone",
    };
  },
};
</script>

<style lang="scss" scoped>
.meal-carousel-container {
  width: 100%;
  margin: auto;
  position: relative;
  overflow: hidden;
  padding: 0;

  .meal-carousel__btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    z-index: 5;
    font-size: clamp(var(--fs-200), var(--fs-300) + 1vw, var(--fs-400));
    color: rgba(#000, 0.45);
    transition: color 0.3s ease;

    &:hover,
    &:focus {
      color: rgba(#000, 0.95);
    }

    @media screen and (min-width: 650px) {
      font-size: clamp(var(--fs-300), var(--fs-400) + 1vw, var(--fs-700));
    }

    &--prev {
      left: 0;
    }

    &--next {
      right: 0;
    }
  }
}
.meal-carousel {
  display: flex;
  width: 100%;

  &__slide {
    display: flex;
    justify-content: space-evenly;
    flex-basis: 100%;
    flex-shrink: 0;
  }
}
</style>
