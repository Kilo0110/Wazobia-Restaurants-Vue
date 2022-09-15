<template>
  <div>
    <NavSection />
    <main>
      <HeroSection />
      <ContactSection />
      <FooterSection />
    </main>
  </div>
</template>

<script>
import NavSection from "@/components/Base/NavSection.vue";
import HeroSection from "@/components/ContactView/HeroSection.vue";
import ContactSection from "@/components/ContactView/ContactSection.vue";
import FooterSection from "@/components/Base/FooterSection.vue";

export default {
  name: "ContactView",
  components: {
    NavSection,
    HeroSection,
    ContactSection,
    FooterSection,
  },
};
</script>
