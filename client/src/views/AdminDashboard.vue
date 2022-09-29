<template>
  <div class="body">
    <AsideSection />
    <NavSection />
    <main class="main d-grid">
      <HeroSection />
      <BestSellingSection />
      <MenuSection />
      <TeamSection />
      <ReviewSection />
      <TrendingSection />
      <TagSection />
    </main>
    <AdminFooter />
  </div>
</template>

<script setup>
import AsideSection from "@/components/Admin/Base/AsideSection.vue";
import NavSection from "@/components/Admin/Base/NavSection.vue";
import HeroSection from "@/components/Admin/HeroSection.vue";
import BestSellingSection from "@/components/Admin/BestSellingSection.vue";
import MenuSection from "@/components/Admin/MenuSection.vue";
import TeamSection from "@/components/Admin/TeamSection.vue";
import ReviewSection from "@/components/Admin/ReviewSection.vue";
import TrendingSection from "@/components/Admin/TrendingSection.vue";
import TagSection from "@/components/Admin/TagSection.vue";
import AdminFooter from "@/components/Admin/Base/AdminFooter.vue";
</script>

<style lang="scss" scoped>
.body {
  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: 20vw 80vw;
    grid-template-rows: auto auto 10vh;
    grid-template-areas:
      "a h"
      "a m"
      "a f";
  }
}

.admin-header {
  grid-area: h;
}

aside {
  grid-area: a;
}

main {
  grid-area: m;
}

footer {
  grid-area: f;
}

.main {
  overflow-x: hidden;
  background-image: linear-gradient(
    to bottom right,
    rgba(213, 243, 213, 0.459),
    rgb(243, 237, 179)
  );
}

.main {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1em;
  padding: 1.5em 1.5em;

  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: 65% 35%;
    grid-template-rows: auto auto auto 2fr;
    grid-template-areas:
      "hs bs"
      "ms rs"
      "ts rs"
      "trs tgs";
    gap: 1em;
  }
}
</style>
