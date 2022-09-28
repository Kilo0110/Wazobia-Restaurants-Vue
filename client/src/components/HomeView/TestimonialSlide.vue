<template :data-active="activeTestimonial">
  <swiper
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slidesChange="onSlideChange"
  >
    <swiper-slide
      class="testimonial testimonial-slide d-flex flex-column align-center jfy-around"
      v-for="testimonial in testimonials"
      :key="testimonial._id"
    >
      <img
        src="@/assets/img/team/male-chef-1.jpg"
        alt=""
        class="testifier-image"
      />

      <div class="testimonial__content-container">
        <i class="fa-solid fa-quote-left"></i>
        <i class="fa-solid fa-quote-right"></i>
        <div class="testimonial__content text-center">
          <h2 class="testifier-name">{{ testimonial.testifierName }}</h2>
          <p class="testimony">{{ testimonial.testimony }}</p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/vue";
import { A11y, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export default {
  name: "TestimonialSlide",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      testimonials: [],
      description: "",
      name: "",
    };
  },
  async mounted() {
    const url = process.env.VUE_APP_TESTIMONIAL_API;

    try {
      const testimonials = await (await axios.get(url)).data;
      this.testimonials = testimonials;
    } catch (error) {
      console.log(error);
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("Slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Scrollbar, A11y],
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  width: 90%;
  max-width: 900px;
  height: 100%;
}

.testimonial {
  & {
    width: 95%;
    height: 100%;
  }

  &[data-active] {
    opacity: 1;
    transition-delay: 0ms;
    z-index: 1;
  }

  .testifier-image {
    width: clamp(75px, calc(75px + 5vw), 150px);
    // height: var(--testimonial-image-height, 75px);
    aspect-ratio: 1;
    border-radius: 50%;
    object-fit: cover;

    @media screen and (min-width: 768px) {
      width: clamp(80px, calc(80px + 7vw), 250px);
    }
  }

  .testimonial__content-container {
    color: var(--pry-txt-clr);
    position: relative;

    .fa-solid {
      font-size: 4rem;
      position: absolute;
      transform: translateX(-50%);
      color: rgba(#000, 0.1);
    }

    .fa-quote-left {
      top: -1em;
      left: 50%;
    }

    .fa-quote-right {
      bottom: -1em;
      left: 50%;
    }
  }
}
</style>
