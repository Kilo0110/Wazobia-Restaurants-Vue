<template>
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <NavSection />
  <main class="main">
    <HeroSection />
    <ShowcaseSection />
    <StorySection />
    <TeamSection />
    <MenuSection />
    <ReservationSection />
    <TestimonialSection />
  </main>
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <FooterSection />
</template>

<script>
// @ is an alias to /src
import NavSection from "@/components/Base/NavSection.vue";
import HeroSection from "@/components/HomeView/HeroSection.vue";
import ShowcaseSection from "@/components/HomeView/ShowcaseSection.vue";
import StorySection from "@/components/HomeView/StorySection.vue";
import TeamSection from "@/components/HomeView/TeamSection.vue";
import MenuSection from "@/components/HomeView/MenuSection.vue";
import ReservationSection from "@/components/HomeView/ReservationSection.vue";
import TestimonialSection from "@/components/HomeView/TestimonialSection.vue";
import FooterSection from "@/components/Base/FooterSection.vue";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    NavSection,
    ShowcaseSection,
    StorySection,
    TeamSection,
    MenuSection,
    ReservationSection,
    TestimonialSection,
    FooterSection,
  },
};
</script>

<style lang="scss">
@use "@/styles/abstracts";
</style>
