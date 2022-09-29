<template>
  <section class="section team-section" id="team-section">
    <h1 class="text-center">Meet the team</h1>
    <p class="text-center team-section__intro">
      "Too many cooks spoil the broth...except you're on our team". Meet the
      magicians behind every meal.
    </p>
    <div class="team-info-container d-grid">
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember isActive="true" />
    </div>
  </section>
</template>

<script>
import TeamMember from "@/components/HomeView/TeamMember.vue";

export default {
  name: "TeamSection",
  components: {
    TeamMember,
  },
};
</script>

<style lang="scss" scoped>
.team-section {
  padding: 2em 1em;

  h1 {
    font-size: clamp(var(--fs-400), calc(var(--fs-600) + 1vw), var(--fs-800));
    text-transform: capitalize;
  }

  &__intro {
    margin: 1em;
  }

  .team-info-container {
    grid-template-columns: repeat(4, minmax(auto, 1fr));
    grid-template-rows: repeat(3, minmax(auto, 1fr));
    gap: 0.5em;
    row-gap: 1em;
    padding: 0 1.75em;
    width: 100%;

    @media screen and (min-width: 768px) {
      width: 90%;
      margin: 0 auto;
      grid-template-rows: repeat(3, minmax(50px, 250px));
    }
  }

  .team-member {
    min-height: 150px;
    text-decoration: none;
    color: var(--pry-txt-clr);
    position: relative;
    overflow: hidden;

    &__bio {
      position: absolute;
      bottom: -50%;
      left: 0;
      width: 100%;
      z-index: 2;
      background: rgba(0, 0, 0, 0.76);
      color: var(--sec-txt-clr-inv);
      font-size: 1ch;
      padding: 0.75em 0.5em;
      opacity: 0;
      transition: bottom 0.3s ease, opacity 0.7s ease;
    }

    &__name,
    &__role {
      font-size: clamp(var(--fs-100), calc(var(--fs-100) + 1vw), 1.75rem);
    }

    &__name {
      font-family: "montserratregular";
      margin-top: 0.5em;
    }

    &__role {
      font-family: "montserratextralight";
    }

    &__img-container {
      overflow: hidden;
      height: 75%;
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(70%);
      transition: all 0.3s ease;
    }

    &:hover,
    &:focus-within {
      .team-member__img {
        transform: scale(1.2);
        filter: brightness(100%);
      }

      .team-member__bio {
        bottom: 25%;
        opacity: 1;
      }
    }
  }

  .team-member:nth-of-type(1) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }

  .team-member:nth-of-type(2) {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
  }

  .team-member:nth-of-type(3) {
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
  }

  .team-member:nth-of-type(4) {
    grid-column: 4 / span 1;
    grid-row: 1 / span 1;
  }

  .team-member:nth-of-type(5) {
    grid-column: 4 / span 1;
    grid-row: 2 / span 1;
  }

  .team-member:nth-of-type(6) {
    grid-column: 4 / span 1;
    grid-row: 3 / span 1;
  }

  .team-member:nth-of-type(7) {
    grid-column: 3 / span 1;
    grid-row: 3 / span 1;
  }

  .team-member:nth-of-type(8) {
    grid-column: 2 / span 1;
    grid-row: 3 / span 1;
  }

  .team-member:nth-of-type(9) {
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
  }

  .team-member:nth-of-type(10) {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
  }

  .team-member--active {
    grid-column: 2 / span 2;
    grid-row: 2 / span 1;
  }
}
</style>
