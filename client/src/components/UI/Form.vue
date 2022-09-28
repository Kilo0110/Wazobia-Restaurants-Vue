<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="form-container d-flex flex-column jfy-center align-center">
    <h2>
      <slot name="form-header" class="text-center"></slot>
    </h2>
    <slot name="form-fields" class="form-container d-flex flex-column"></slot>
    <slot name="button"></slot>
  </div>
</template>
<script setup></script>

<style lang="scss" scoped>
.form-container {
  @media screen and (min-width: 768px) {
    padding-right: 2em;
    width: 50%;
  }
  h2 {
    font-size: clamp(var(--fs-200), var(--fs-400) + 1vw, var(--fs-500));
    font-family: "cormorant_garamondmedium";
  }

  width: 80%;
  padding-bottom: 2em;
  margin: 0 auto;
  gap: 1em;

  @media screen and (min-width: 800px) {
    width: 70%;
  }

  @media screen and (min-width: 1000px) {
    width: 60%;
  }
}
</style>
