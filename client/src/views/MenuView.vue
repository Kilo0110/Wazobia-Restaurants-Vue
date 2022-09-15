<template>
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <NavSection />
  <main>
    <HeroSection />
    <MenuSection />
  </main>
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <FooterSection />
</template>

<script>
import NavSection from "@/components/Base/NavSection.vue";
import HeroSection from "@/components/MenuView/HeroSection.vue";
import MenuSection from "@/components/MenuView/MenuSection.vue";
import FooterSection from "@/components/Base/FooterSection.vue";

export default {
  name: "MenuView",
  components: {
    NavSection,
    HeroSection,
    MenuSection,
    FooterSection,
  },
};
</script>

<style lang="scss">
@use "@/styles/abstracts" as a;

.main {
  min-height: 100vh;
  padding: 0;
  padding-bottom: 3em;
  gap: 2em;

  .back-to-top-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    right: 2em;
    bottom: 5em;
    width: clamp(var(--fs-400), var(--fs-600) + 1vw, var(--fs-900));
    font-size: clamp(var(--fs-200), var(--fs-200) + 1vw, var(--fs-500));
    border-radius: 50%;
    border: none;
    aspect-ratio: 1 / 1;
    background: lighten(map-get(a.$colors, accent-clr), 15%);
    color: var(--sec-txt-clr-inv);
    box-shadow: 0px 0px 5px 3px rgba(#000, 0.45);
    z-index: 15;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover,
    &:focus {
      background: lighten(map-get(a.$colors, accent-clr), 0%);
    }
  }
}
</style>
