<template>
  <aside class="aside side-dashboard d-flex flex-column">
    <button class="btn close-aside-btn">
      <i class="fa-solid fa-arrow-left"></i>
    </button>
    <a href="" class="side-dashboard__logo">Wazobia</a>
    <div class="side-dashboard__main d-flex flex-column">
      <a href="/" class="btn side-dashboard__link d-grid align-center"
        ><i class="fa-solid fa-arrow-rotate-back"></i>
        <span>Back To Site</span>
        <i class="fa-solid fa-arrow-right"></i>
      </a>
      <a href="/admin/" class="btn side-dashboard__link d-grid align-center"
        ><i class="fa-solid fa-dashboard"></i>
        <span>Back To Dashboard</span>
        <i class="fa-solid fa-arrow-right"></i>
      </a>
      <a
        href="/admin/meals"
        class="btn side-dashboard__link d-grid align-center"
        ><i class="fa-solid fa-bowl-food"></i> <span>Meals</span>
        <i class="fa-solid fa-arrow-right"></i>
      </a>
      <a
        href="/admin/users"
        class="btn side-dashboard__link d-grid align-center"
        ><i class="fa-solid fa-users-cog"></i> <span>Staff</span>
        <i class="fa-solid fa-arrow-right"></i>
      </a>
      <a
        href="/admin/members"
        class="btn side-dashboard__link d-grid align-center"
        ><i class="fa-solid fa-users-between-lines"></i>
        <span>Members</span>
        <i class="fa-solid fa-arrow-right"></i>
      </a>
      <a
        href="/admin/members"
        class="btn side-dashboard__link d-grid align-center"
        ><i class="fa-solid fa-ticket"></i> <span>Reservations</span>
        <i class="fa-solid fa-arrow-right"></i>
      </a>
      <a
        href="/admin/members"
        class="btn side-dashboard__link d-grid align-center"
        ><i class="fa-solid fa-message"></i> <span>Reviews</span>
        <i class="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  </aside>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "@/styles/abstracts" as a;

.side-dashboard {
  padding: 2em 1em;
  gap: 1em;
  background: var(--sec-txt-clr-inv);
  position: sticky;
  top: 0;

  @media screen and (max-width: 1000px) {
    position: fixed;
    min-height: 100vh;
    top: 0;
    left: -100%;
    transition: left 0.3s ease;

    &.show {
      left: 0;
    }
  }

  .close-aside-btn {
    position: absolute;
    top: 0.75em;
    right: 1em;
    background: none;
    border: none;
    font-size: clamp(var(--fs-100), var(--fs-100) + 1vw, var(--fs-300));
    transition: transform 0.3s ease;

    .fa-solid {
      color: var(--accent-clr);
    }

    &:hover,
    &:focus {
      box-shadow: none;
      transform: scale(2);
    }

    @media screen and (min-width: 1000px) {
      display: none;
    }
  }

  &__logo {
    font-family: "sacramentoregular";
    color: var(--accent-clr);
    font-size: clamp(var(--fs-300), var(--fs-500) + 1vw, var(--fs-800));
    font-family: "sacramentoregular";
    text-align: center;
    text-decoration: none;
    padding-bottom: 0.35em;
    margin: 0 1em;
    transition: letter-spacing 0.3s ease;
    border-bottom: 1px solid rgba(#333, 0.35);

    &:hover,
    &:focus {
      letter-spacing: 0.1em;
    }
  }

  &__main {
    gap: 1em;
  }

  &__link {
    font-size: clamp(var(--fs-100), var(--fs-100) + 1vw, var(--fs-300));
    column-gap: 0.5em;
    width: 100%;
    text-decoration: none;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 1fr;

    &:hover,
    &:focus {
      .fa-arrow-right {
        color: var(--sec-txt-clr-inv);
      }
    }

    .fa-arrow-right {
      color: transparentize(map-get(a.$colors, accent-clr), 0.2);
      transition: color 0.3s ease;
    }
  }
}
</style>
