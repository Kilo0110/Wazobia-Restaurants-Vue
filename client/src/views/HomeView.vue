<template>
  <div>
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
    <FooterSection />
  </div>
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
