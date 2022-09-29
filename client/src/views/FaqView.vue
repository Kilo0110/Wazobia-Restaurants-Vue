<template>
  <div>
    <NavSection />
    <main class="main">
      <HeroSection />
      <AccordionSection />
    </main>
    <FooterSection />
  </div>
</template>

<script>
import NavSection from "@/components/Base/NavSection.vue";
import HeroSection from "@/components/FaqView/HeroSection.vue";
import AccordionSection from "@/components/FaqView/AccordionSection.vue";
import FooterSection from "@/components/Base/FooterSection.vue";

export default {
  name: "FaqView",
  components: {
    NavSection,
    HeroSection,
    AccordionSection,
    FooterSection,
  },
};
</script>

<style lang="scss" scoped></style>
