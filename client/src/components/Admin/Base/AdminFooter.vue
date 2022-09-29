<template>
  <footer class="admin-footer d-flex align-center">
    <div class="terms-and-conditions-container d-flex">
      <a href="" class="privacy-policy-link">Privacy Policy</a>
      <a href="" class="terms-of-use">Terms of use</a>
    </div>
    <div class="copyright-container">
      <span
        >Made with <i class="fa-solid fa-heart"></i> by
        <a href="https://github.com/Kilo0110" class="author-link"
          >KamCy Ahaka</a
        ></span
      >
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.admin-footer {
  background-color: var(--accent-clr);
  color: var(--sec-txt-clr-inv);
  flex-direction: column;
  justify-content: center;
  padding: 1em 0;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 2em 0;
  }

  .terms-and-conditions-container {
    gap: 1em;

    a {
      font-weight: bold;
      transition: letter-spacing 0.3s ease;

      &:hover,
      &:focus {
        letter-spacing: 0.1em;
      }
    }
  }

  a {
    color: var(--sec-txt-clr-inv);
    text-decoration: none;
  }
}
</style>
