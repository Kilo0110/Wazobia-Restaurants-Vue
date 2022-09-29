<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <main class="main fv-width d-flex flex-column">
    <aside
      class="aside position-rel d-flex flex-column place-center text-center"
    >
      <h1
        v-text="
          LoginView
            ? 'Don\'t have an account? Create one now'
            : 'Already have an account? Log in now'
        "
      ></h1>
      <button
        class="btn change-component-btn"
        @click="handleComponentChange"
        v-text="LoginView ? 'Create Account' : 'Login'"
      ></button>
    </aside>
    <component :is="LoginView ? LoginPage : RegisterPage" />
  </main>
</template>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
  padding-bottom: 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;

    .aside {
      height: 100vh;
      width: 50%;
    }
  }
}
.aside {
  min-height: 40vh;
  background: url("@/assets/img/catalogue/african-national-food-dish-grilled-260nw-1467817790.jpg")
      top center / cover,
    #333;
  background-blend-mode: overlay;
  gap: 0.5em;

  h1 {
    color: var(--sec-txt-clr-inv);
    font-family: "montserratsemibold", sans-serif;
    font-size: clamp(var(--fs-200), var(--fs-300) + 0.5vw, var(--fs-500));
    width: 25ch;
  }

  .btn {
    background: var(--sec-txt-clr-inv);
    color: var(--accent-clr);
    border-color: var(--sec-txt-clr-inv);
    transition: transform 0.3s ease;

    &.active {
      transform: scale(0.9);
    }
  }
}

.form-container {
  min-height: 60vh;
}
</style>

<script setup>
import { ref } from "vue";
import LoginPage from "./LoginPage.vue";
import RegisterPage from "./RegisterPage.vue";
let header = document.querySelector("h1");

console.log(header);

let LoginView = ref(true);

const handleComponentChange = () => {
  LoginView.value = !LoginView.value;
  console.log(LoginView.value);
};
</script>
