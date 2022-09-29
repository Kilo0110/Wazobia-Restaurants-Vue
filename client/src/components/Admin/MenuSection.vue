<template>
  <section class="menu-section d-flex flex-column">
    <header class="d-flex jfy-between">
      <h1 class="heading">Our Menu</h1>
      <button>
        View all
        <i class="fa-regular fa-arrow-circle-right"></i>
      </button>
    </header>
    <swiper
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slidesChange="onSlideChange"
      class="d-flex jfy-center"
    >
      <swiper-slide class="meal-slide d-flex align-center jfy-around">
        <div
          class="meal d-flex flex-column align-center"
          v-for="meal in data.meals"
          :key="meal._id"
        >
          <img
            src="@/assets/img/team/male-chef-1.jpg"
            alt=""
            class="meal-image"
          />

          <div class="meal__content-container">
            <i class="fa-solid fa-quote-left"></i>
            <i class="fa-solid fa-quote-right"></i>
            <div class="meal__content text-center">
              <h2 class="meal__name">{{ meal.name }}</h2>
              <p class="meal__price">{{ meal.price }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="meal-slide d-flex align-center jfy-around">
        <div
          class="meal d-flex flex-column align-center"
          v-for="meal in data.meals"
          :key="meal._id"
        >
          <img
            src="@/assets/img/team/male-chef-1.jpg"
            alt=""
            class="meal-image"
          />

          <div class="meal__content-container">
            <i class="fa-solid fa-quote-left"></i>
            <i class="fa-solid fa-quote-right"></i>
            <div class="meal__content text-center">
              <h2 class="meal__name">{{ meal.name }}</h2>
              <p class="meal__price">{{ meal.price }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="meal-slide d-flex align-center jfy-around">
        <div
          class="meal d-flex flex-column align-center"
          v-for="meal in data.meals"
          :key="meal._id"
        >
          <img
            src="@/assets/img/team/male-chef-1.jpg"
            alt=""
            class="meal-image"
          />

          <div class="meal__content-container">
            <i class="fa-solid fa-quote-left"></i>
            <i class="fa-solid fa-quote-right"></i>
            <div class="meal__content text-center">
              <h2 class="meal__name">{{ meal.name }}</h2>
              <p class="meal__price">{{ meal.price }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/vue";
// import { A11y, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

// const data = reactive({})

const data = reactive({
  meals: [],
});

console.log(data.meals);

(async () => {
  const url = process.env.VUE_APP_MEAL_API;
  data.meals = await (await axios.get(`${url}?amount=5`)).data;
})();

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("Slide change");
};
</script>

<style lang="scss" scoped>
.menu-section {
  grid-area: ms;
  position: relative;
  gap: 1em;
  border-radius: 1em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 1px;
  padding: 1.25em 0;
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.5)
  );
  border: 1px solid rgb(255, 255, 255);

  @supports (backdrop-filter: blur) {
    & {
      backdrop-filter: blur(50px);
    }
  }

  header {
    padding: 0 1.5em;
  }

  .heading {
    font-family: "sacramentoregular";
    font-size: clamp(var(--fs-200), var(--fs-600) + 1vw, var(--fs-900));
    letter-spacing: 0.1em;
  }

  button {
    background: none;
    border: 0;
    outline: 0;
  }

  .swiper {
    margin: 0;
    align-self: center;
    width: 100%;
  }

  .meal {
    img {
      width: 50%;
      border-radius: 50%;
      aspect-ratio: 1;
      object-fit: cover;
      display: inline-block;
    }

    &__name {
      font-family: "montserratsemibold", sans-serif;
      font-size: clamp(var(--fs-200), var(--fs-200) + 1vw, var(--fs-400));
    }

    @media screen and (max-width: 680px) {
      &:nth-of-type(4),
      &:nth-of-type(5) {
        display: none;
      }
    }

    @media screen and (min-width: 1000px) {
      &:nth-of-type(5) {
        display: none;
      }
    }
  }
}
</style>
