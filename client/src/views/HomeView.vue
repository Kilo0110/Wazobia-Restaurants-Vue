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
  </div>
</template>

<script>
// @ is an alias to /src
import NavSection from "@/components/NavSection.vue";
import HeroSection from "@/components/HeroSection.vue";
import ShowcaseSection from "@/components/ShowcaseSection.vue";
import StorySection from "@/components/StorySection.vue";
import TeamSection from "@/components/TeamSection.vue";
import MenuSection from "@/components/MenuSection.vue";
import ReservationSection from "@/components/ReservationSection.vue";
import TestimonialSection from "@/components/TestimonialSection.vue";

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
  },
};
</script>
