<template>
  <section
    class="section hero-section d-flex flex-column place-center text-center full-viewport-width"
  >
    <p class="accent-fface hero-section__welcome-text">Welcome to</p>
    <h1 class="secondary-fface hero-section__name-text">Wazobia Restaurant</h1>
    <p class="hero-section__additional-text">
      The beauty of <span>Nigeria</span> in every meal served.
    </p>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      logoImage: `../../assets/logo.png`,
    };
  },
};
</script>

<style lang="scss">
.hero-section {
  min-height: 90vh;
  background: url("@/assets/img/catalogue/nigerian-food-party-jollof-rice-260nw-1053746810.jpg")
      top center / cover,
    #1f1919;
  background-blend-mode: soft-light;
  background-attachment: fixed;
  padding: 0 2.5em;
  color: var(--sec-txt-clr-inv);

  &__welcome-text {
    font-size: clamp(var(--fs-300), calc(var(--fs-700) + 1vw), var(--fs-900));
  }

  &__name-text {
    font-size: clamp(var(--fs-300), calc(var(--fs-600) + 1vw), var(--fs-900));
  }

  &__additional-text {
    font-size: clamp(var(--fs-100), calc(var(--fs-200) + 1vw), 1.75rem);
    padding: 0 1em;

    span {
      background: var(--accent-clr);
      color: var(--sec-txt-clr-inv);
      color: black;
      padding: 0.35em 0.4em;
      margin: 0 0.35em;
      font-weight: bold;
      position: relative;
      isolation: isolate;
      letter-spacing: 0.1em;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 40%;
        height: 100%;
        background: var(--sec-txt-clr-inv);
        z-index: -1;
      }
    }
  }
}
</style>
