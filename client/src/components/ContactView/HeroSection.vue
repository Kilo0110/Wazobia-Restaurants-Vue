<template>
  <section
    class="hero-section hero-section--inner-page d-flex flex-column place-center"
  >
    <h1 class="hero-section--inner-page__header">Contact Us</h1>
    <p class="hero-section__intro">
      Do you have questions? Suggestions? We'd love to hear from you. Fill out
      the form below and let us know what you would like to share or use one of
      our other contact services.
    </p>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style lang="scss" scoped>
.hero-section--inner-page {
  background: url("@/assets/img/catalogue/african-national-food-dish-grilled-260nw-1467817790.jpg"),
    rgb(2, 20, 15);
  background-position: top;
  background-size: cover;
  background-blend-mode: overlay;
  background-attachment: fixed;
  min-height: 60vh;
  width: 100%;
  color: var(--sec-txt-clr-inv);
  padding: 0 clamp(15px, 3em, 50px);
  text-align: center;

  &__header {
    font-family: "montserratsemibold";
    font-size: clamp(var(--fs-400), var(--fs-400) + 1vw, var(--fs-700));
  }
}
</style>
