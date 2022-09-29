<template>
  <section class="section">
    <header class="d-flex jfy-between">
      <h1>
        <slot name="section-header" />
      </h1>
      <button>
        <i class="fa-solid fa-circle-arrow-right"></i>
        View all
      </button>
    </header>
    <swiper
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slidesChange="onSlideChange"
    >
      <swiper-slide class="d-flex align-center jfy-around">
        <slot name="slide1" />
      </swiper-slide>
      <swiper-slide class="d-flex align-center jfy-around">
        <slot name="slide2" />
      </swiper-slide>
      <swiper-slide class="d-flex align-center jfy-around">
        <slot name="slide3" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("Slide change");
};
</script>

<style lang="scss" scoped>
.section {
  grid-area: ts;
  position: relative;

  h1 {
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

  .slide {
    img {
      width: 50px;
      border-radius: 50%;
      aspect-ratio: 1;
      object-fit: cover;
    }

    &__name {
      font-family: "montserratsemibold", sans-serif;
    }
  }
}
</style>
