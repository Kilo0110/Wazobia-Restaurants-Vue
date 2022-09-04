<template>
  <div>
    <NavSection />
    <main class="main">
      <HeroSection />
      <ShowcaseSection />
      <StorySection />
      <TeamSection />
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

export default {
  name: "HomeView",
  components: {
    HeroSection,
    NavSection,
    ShowcaseSection,
    StorySection,
    TeamSection,
  },
};
</script>
