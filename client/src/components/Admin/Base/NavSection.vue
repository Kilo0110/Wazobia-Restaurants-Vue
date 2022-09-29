<template>
  <header class="admin-header d-flex align-center">
    <nav class="admin-nav full-width full-height d-flex jfy-evenly">
      <button class="btn open-aside-btn d-flex place-center">
        <i class="fa-solid fa-bars"></i>
      </button>
      <form action="" class="admin-nav__search-container d-flex align-center">
        <i class="fa-solid fa-search"></i>
        <input
          type="search"
          name="nav__search-input"
          id=""
          placeholder="Search..."
        />
      </form>
      <div class="admin-quicktools-container d-flex place-center">
        <button class="btn admin-notification-btn">
          <i class="fa-solid fa-bell"></i>
        </button>
        <button class="btn admin-message-btn">
          <i class="fa-solid fa-envelope"></i>
        </button>
      </div>
      <div class="admin-profile-container d-grid">
        <img src="" alt="" class="admin-img" />
        <h2 class="admin-name">John Doe</h2>
        <h3 class="admin-role">Owner</h3>
      </div>
    </nav>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.admin-header {
  min-height: 10vh;
}

.admin-nav {
  overflow-x: hidden;
  align-items: center;
  padding: 0.5em 0;

  @media screen and (min-width: 1000px) {
    justify-content: space-around;
  }

  .open-aside-btn {
    aspect-ratio: 1;

    @media screen and (min-width: 1000px) {
      & {
        display: none;
      }
    }
  }

  &__search-container {
    padding-left: 0.75em;
    width: auto;

    input {
      outline: none;
      width: 100%;
      padding: 0.5em 0.75em;
      border: 1px solid var(--accent-clr);
      border-left-width: 0;
      border-top-right-radius: 2em;
      border-bottom-right-radius: 2em;
      transition: width 0.3s ease;

      @media screen and (min-width: 1000px) {
        width: 50%;
      }

      &:focus {
        width: 100%;
      }
    }

    i {
      padding: 0.75em;
      padding-left: 0.75em;
      border: 1px solid var(--accent-clr);
      border-right-width: 0;
      border-top-left-radius: 2em;
      border-bottom-left-radius: 2em;
      position: relative;

      &::after {
        position: absolute;
        content: "";
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 70%;
        background-color: rgba(#333, 0.2);
      }
    }
  }

  .admin-quicktools-container {
    gap: 0.5em;

    @media screen and (max-width: 400px) {
      & {
        position: fixed;
        bottom: 1em;
        left: 2em;
        left: -100%;
        z-index: 15;
      }
    }
  }

  .admin-profile-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .admin-img {
      width: clamp(var(--fs-300), var(--fs-600) + 1vw, var(--fs-900));
      border: 2px solid black;
      border-radius: 50%;
      aspect-ratio: 1 / 1;
    }

    .admin-name,
    .admin-role {
      display: none;
    }

    @media screen and (min-width: 768px) {
      & {
        display: grid;
        grid-template-rows: auto auto;
        column-gap: 1em;

        .admin-img {
          grid-column: 1 / span 1;
          grid-row: 1 / span 2;
        }

        .admin-name,
        .admin-role {
          display: block;
          font-size: clamp(var(--fs-100), var(--fs-100) + 1vw, var(--fs-400));
        }

        .admin-name {
          grid-column: 2 / span 1;
          grid-row: 1 / span 1;
        }

        .admin-role {
          grid-column: 2 / span 1;
          grid-row: 2 / span 1;
        }
      }
    }
  }
}
</style>
