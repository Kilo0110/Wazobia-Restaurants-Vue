<template>
  <section class="testimonial-section" id="testimonial-section">
    <TestimonialSlide />
  </section>
</template>

<script>
import TestimonialSlide from "@/components/HomeView/TestimonialSlide.vue";

export default {
  name: "TestimonialSection",
  components: {
    TestimonialSlide,
  },
};
</script>

<style lang="scss" scoped>
.testimonial-section {
  height: 60vh;
}
</style>
