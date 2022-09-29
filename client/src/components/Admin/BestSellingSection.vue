<template>
  <section class="best-selling-section d-flex place-center">
    <img src="" alt="" class="img best-selling-img" />
    <div class="best-selling-item">
      <h1 class="best-selling-item__name">Lorem, ipsum.</h1>
      <h2 class="best-selling-item__price">N7000</h2>
      <h3 class="best-selling-item__total-sales-amount">200 units sold</h3>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.best-selling-section {
  grid-area: bs;
  position: relative;
  margin: 2em auto;
  margin-top: 6em;
  min-height: 50vh;
  aspect-ratio: 1;
  max-width: 400px;
  border-radius: 2em;
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

  .best-selling-img {
    position: absolute;
    top: -4em;
    width: 8em;
    aspect-ratio: 1 / 1;
    left: 50%;
    transform: translateX(-50%);
    border: 2px solid black;
  }

  .best-selling-item {
    &__name {
      text-align: center;
      font-family: "montserratsemibold";
      font-size: clamp(var(--fs-300), var(--fs-300) + 1vw, var(--fs-700));
    }

    &__price {
      text-align: center;
      font-family: "cormorantgaramond";
      font-size: clamp(var(--fs-100), var(--fs-200) + 1vw, var(--fs-500));
    }

    &__total-sales-amount {
      text-align: center;
      font-family: "cormorantgaramond";
      font-size: clamp(var(--fs-100), var(--fs-200) + 1vw, var(--fs-500));
    }
  }
}
</style>
