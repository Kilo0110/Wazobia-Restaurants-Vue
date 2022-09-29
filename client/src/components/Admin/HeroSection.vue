<template>
  <section class="hero-section d-flex flex-column jfy-center">
    <h1 class="hero-section__welcome-text">Hello</h1>
    <h2 class="hero-section__admin-name">John Doe</h2>
    <div class="hero-section__stats-container d-flex">
      <span class="hero-section__stat">547 meals served</span>
      <span class="hero-section__stat">1000+ patrons served</span>
      <span class="hero-section__stat">57 meals available</span>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.hero-section {
  grid-area: hs;
  min-height: 50vh;
  max-width: 100%;
  margin: 0 auto;
  background: url("@/assets/img/catalogue/jollof-rice-chicken-fried-plantain-260nw-585882515.jpg")
    top center / cover;
  position: relative;
  isolation: isolate;
  padding-left: 2em;
  border-radius: 1.5em;

  @media screen and (min-width: 1000px) {
    margin: unset;
  }

  & > * {
    z-index: 5;
    position: relative;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
      90deg,
      #ebfaeb 0%,
      rgba(255, 255, 255, 0.5) 65%,
      rgba(83, 100, 141, 0) 100%
    );
    opacity: 0.9;
    z-index: 1;
  }

  &__welcome-text,
  &__stats-container {
    font-size: clamp(var(--fs-100), var(--fs-100) + 1vw, var(--fs-300));
  }

  &__welcome-text {
    font-family: "cormorantgaramond";
    color: red;

    @media screen and (min-width: 768px) {
      font-size: clamp(var(--fs-100), var(--fs-200) + 1vw, var(--fs-500));
    }
  }

  &__stats-container {
    gap: 1em;
    font-family: "montserratsemibold";
  }

  &__stat {
    text-align: center;
    color: var(--sec-txt-clr);
  }

  &__stat:nth-of-type(2) {
    padding: 0 1em;
    border: 1px solid red;
    border-top: 0;
    border-bottom: 0;
  }
}
</style>
