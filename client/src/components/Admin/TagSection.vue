<template>
  <section class="tags-section">
    <h1 class="d-flex jfy-between align-center">
      Manage Tags <i class="fa-solid fa-pen"></i>
    </h1>
    <div class="tags-container d-flex">
      <span class="tag">Breakfast</span>
      <span class="tag">Lunch</span>
      <span class="tag">Dinner</span>
      <span class="tag">Rice</span>
      <span class="tag">Drinks</span>
      <span class="tag">Beverages</span>
      <span class="tag">Beans</span>
      <span class="tag">Soup</span>
      <span class="tag">Egusi</span>
      <span class="tag">Ogbono</span>
      <span class="tag">Ewedu</span>
      <span class="tag">Tuwo</span>
      <span class="tag">Oha</span>
      <span class="tag">Amala</span>
      <span class="tag">Eforiro</span>
      <span class="tag">Zobo</span>
      <span class="tag">Kunu</span>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.tags-section {
  grid-area: tgs;
  width: 100%;
  background: white;
  padding: 0.5em 1em;

  h1 {
    font-family: "sacramentoregular";
    font-size: clamp(var(--fs-200), var(--fs-400) + 1vw, var(--fs-900));
    letter-spacing: 0.1em;

    .fa-pen {
      font-size: clamp(var(--fs-200), var(--fs-200) + 1vw, var(--fs-500));
    }
  }

  .tags-container {
    flex-wrap: wrap;
    gap: 1em;
    margin: 1em 0;
  }

  .tag {
    padding: 0.15em 0.5em;
    border: 1px solid var(--accent-clr);
    border-radius: 2em;
    color: var(--accent-clr);
    transition: 0.3s ease;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background: var(--accent-clr);
      color: var(--sec-txt-clr-inv);
    }
  }
}
</style>
