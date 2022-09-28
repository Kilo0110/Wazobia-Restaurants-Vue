<template>
  <a href="" :class="[isActive ? 'team-member--active' : '', 'team-member']">
    <div class="team-member__img-container">
      <img
        src="@/assets/img/team/male-chef-1.jpg"
        alt=""
        class="team-member__img"
      />
    </div>
    <div class="team-member__info text-center">
      <h2 class="team-member__name">John Doe</h2>
      <h3 class="team-member__role">Chef</h3>
      <p class="team-member__bio">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsum
        nam laudantium doloribus nisi tenetur.
      </p>
    </div>
  </a>
</template>

<script>
export default {
  name: "TeamMember",
  props: { isActive: String },
};
</script>

<style lang="scss" scoped>
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
</style>
