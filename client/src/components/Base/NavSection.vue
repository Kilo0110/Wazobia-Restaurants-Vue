<template>
  <header class="header d-flex jfy-center fv-width" id="header">
    <nav class="nav d-flex jfy-between align-center f-height f-width" id="nav">
      <router-link to="/" class="nav__logo" id="nav__logo">
        Wazobia
      </router-link>
      <div
        class="nav__extra-btn-container d-flex align-center"
        id="nav__extra-btn-container"
      >
        <router-link
          to="/checkout"
          class="nav__extra-btn shop-btn"
          id="shop-btn"
        >
          <i class="fa-solid fa-cart-shopping"></i>
        </router-link>
        <router-link
          to="./user-profile.html"
          class="nav__extra-btn log-in-btn"
          id="log-in-btn"
        >
          <i class="fa-solid fa-circle-user"></i>
        </router-link>
      </div>
      <menu
        class="nav__menu-container d-flex flex-column jfy-evenly"
        id="nav__menu-container"
      >
        <li class="nav__menu__items">
          <router-link to="/" class="nav__menu__link d-flex jfy-end">
            <span class="nav__menu__link-name">Home</span>
            <i class="nav__menu__link-icon fa-solid fa-house-chimney"></i>
          </router-link>
        </li>
        <li class="nav__menu__items">
          <router-link
            to="/#story-section"
            class="nav__menu__link d-flex jfy-end"
          >
            <span class="nav__menu__link-name">Our Story</span>
            <i class="nav__menu__link-icon fa-solid fa-history"></i>
          </router-link>
        </li>
        <li class="nav__menu__items">
          <router-link
            to="/#team-section"
            class="nav__menu__link d-flex jfy-end"
          >
            <span class="nav__menu__link-name">Our Team</span>
            <i class="nav__menu__link-icon fa-solid fa-users"></i>
          </router-link>
        </li>
        <li class="nav__menu__items">
          <router-link
            to="/#menu-section"
            class="nav__menu__link d-flex jfy-end"
          >
            <span class="nav__menu__link-name">our menu</span>
            <i class="nav__menu__link-icon fa-solid fa-scroll"></i
          ></router-link>
        </li>
        <li class="nav__menu__items">
          <router-link
            to="/#reservation-section"
            class="nav__menu__link d-flex jfy-end"
          >
            <span class="nav__menu__link-name">Make A Reservation</span>
            <i class="nav__menu__link-icon fa-solid fa-ticket"></i>
          </router-link>
        </li>
        <li class="nav__menu__items">
          <router-link to="/faq" class="nav__menu__link d-flex jfy-end">
            <span class="nav__menu__link-name">FAQs</span>
            <i class="nav__menu__link-icon fa-solid fa-circle-question"></i
          ></router-link>
        </li>
        <li class="nav__menu__items">
          <router-link to="/contact" class="nav__menu__link d-flex jfy-end">
            <span class="nav__menu__link-name">contact us</span>
            <i class="nav__menu__link-icon fa-solid fa-phone"></i
          ></router-link>
        </li>
      </menu>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavSection",
};
</script>

<style lang="scss" scoped>
@use "@/styles/abstracts" as a;

.header {
  --header-bg-clr: var(--sec-txt-clr-inv);
  --txt-clr: var(--accent-clr);
  --menu-item-clr: var(--sec-txt-clr);
  --menu-link-bg: var(--pry-txt-clr-inv);

  overflow: hidden;
  height: 10vh;
  min-height: 10vh;
  max-width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: var(--header-bg-clr);
  transition: background 0.3s ease;
  box-shadow: 0 3px 3px 3px rgba(#000, 0.25);

  &.is-overlapping-heroSection {
    --header-bg-clr: transparent;
    --txt-clr: var(--sec-txt-clr-inv);
    --menu-item-clr: var(--sec-txt-clr-inv);
    --menu-link-bg: var(--pry-txt-clr);

    box-shadow: none;
  }
}

.nav {
  padding: 0 2em 0 1em;

  &__logo {
    outline: none;
    font-family: "sacramentoregular";
    font-size: clamp(var(--fs-300), calc(var(--fs-400) + 1vw), var(--fs-700));
    color: var(--txt-clr);
    transition: letter-spacing 0.3s ease, color 0.3s ease;
    text-decoration: none;

    &:focus,
    &:hover {
      letter-spacing: 0.1em;
    }
  }

  &__extra-btn-container {
    gap: 1em;
  }

  &__extra-btn {
    transition: transform 0.3s ease;

    .fa-solid {
      color: var(--txt-clr);
      font-size: clamp(15px, calc(1vw + 1rem), 30px);
      transition: color 0.3s ease;
    }
  }

  &__extra-btn:focus,
  &__extra-btn:hover {
    transform: scale(1.3);
  }

  &__menu-container {
    position: fixed;
    margin: 0;
    padding: 0;
    height: 60vh;
    min-height: 60vh;
    top: 15vh;
    right: clamp(5px, calc(5px + 1vw), 10vw);
    gap: 1em;
    list-style: none;
    border-radius: 0.25em;
    pointer-events: none;
  }

  &__menu__link {
    --menu-link-bg: var(--pry-txt-clr-inv);
    --txt-clr: var(--accent-clr);
    --icon-clr: var(--accent-clr);

    text-decoration: none;
    text-transform: capitalize;
    width: auto;
    align-items: center;
    gap: 0.5em;
    transform: scale(0.8);
    transform-origin: right;
    transition: all 0.3s ease;
    isolation: isolate;

    &-name {
      color: var(--txt-clr);
      background-color: var(--menu-link-bg);
      position: relative;
      isolation: isolate;
      padding: 0.35em 0.5em;
      font-family: "montserratsemibold";
      transform: translateX(50%);
      opacity: 0;
      z-index: 1;
      transition: opacity 0.8s ease, transform 0.5s ease, color 0.3s ease;
      pointer-events: none;
      box-shadow: 0 3px 5px 1px rgba(11, 11, 11, 0.2);
    }

    &-icon {
      height: var(--menu-icon-width);
      width: var(--menu-icon-height);
      border-radius: 50%;
      border: 2px solid var(--icon-clr);
      color: var(--icon-clr);
      z-index: 2;
      transition: color 0.3s ease, border-color 0.3s ease;
      line-height: var(--menu-icon-width);
      text-align: center;
      vertical-align: middle;
      font-size: clamp(var(--fs-200), var(--fs-200) + 2vw, var(--fs-500));
      pointer-events: auto;
    }

    &:hover,
    &:focus,
    &.is-overlapping-heroSection {
      transform: scale(0.95);

      .nav__menu__link-name {
        transform: translateX(0);
        opacity: 1;
        pointer-events: auto;
      }
    }
  }

  &__menu__link.is-overlapping-heroSection {
    --menu-link-bg: transparent;
    --txt-clr: var(--sec-txt-clr-inv);
    --icon-clr: var(--sec-txt-clr-inv);

    .nav__menu__link-name {
      background-color: rgba(#000, 0.75);
      box-shadow: none;

      @media screen and (min-width: 1020px) {
        background-color: unset;
      }
    }

    &:hover,
    &:focus {
      transform: scale(1.2);
    }
  }

  &__menu__link.is-overlapping-footerSection {
    --menu-link-bg: var(--pry-txt-clr-inv);
    --txt-clr: var(--accent-clr);
    --icon-clr: var(--sec-txt-clr-inv);
  }
}
</style>
