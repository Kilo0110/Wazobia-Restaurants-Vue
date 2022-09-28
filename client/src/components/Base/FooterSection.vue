<template>
  <footer class="footer">
    <ul class="footer__containers footer__social-media-links-container">
      <li class="footer__social-media">
        <a href="" class="footer__link footer__social-media-link d-flex">
          <i class="fa-brands fa-facebook"></i>
          Facebook
        </a>
      </li>
      <li class="footer__social-media">
        <a href="" class="footer__link footer__social-media-link d-flex">
          <i class="fa-brands fa-instagram"></i>
          Instagram
        </a>
      </li>
      <li class="footer__social-media">
        <a href="" class="footer__link footer__social-media-link d-flex">
          <i class="fa-brands fa-whatsapp"></i>
          WhatsApp
        </a>
      </li>
      <li class="footer__social-media">
        <a href="" class="footer__link footer__social-media-link d-flex">
          <i class="fa-brands fa-twitter"></i>
          Twitter
        </a>
      </li>
      <li class="footer__social-media">
        <a href="" class="footer__link footer__social-media-link d-flex">
          <i class="fa-brands fa-youtube"></i>
          YouTube
        </a>
      </li>
    </ul>

    <ul class="footer__containers footer__help-links-container">
      <li class="footer__help">
        <a href="./help.html" class="footer__link footer__help-links d-flex">
          <i class="fa-solid fa-headset"></i>
          Help Desk
        </a>
      </li>
      <li class="footer__help">
        <a href="./faq.html" class="footer__link footer__help-links d-flex">
          <i class="fa-solid fa-circle-question"></i>
          FAQs
        </a>
      </li>
      <li class="footer__help">
        <a
          href="./terms-of-service.html"
          class="footer__link footer__help-links d-flex"
        >
          <i class="fa-solid fa-file-signature"></i>
          Terms of service
        </a>
      </li>
      <li class="footer__help">
        <a href="./privacy.html" class="footer__link footer__help-links d-flex">
          <i class="fa-solid fa-user-shield"></i>
          Privacy Policy
        </a>
      </li>
    </ul>

    <ul class="footer__containers footer__specials-container">
      <li class="footer__specials">
        <a href="" class="footer__link footer__special d-flex">
          <i class="fa-solid fa-calendar-day"></i>
          Weekly special
        </a>
      </li>
      <li class="footer__specials">
        <a href="" class="footer__link footer__special d-flex">
          <i class="fa-brands fa-pied-piper-hat"></i>
          Chef's choice
        </a>
      </li>
      <li class="footer__specials">
        <a href="" class="footer__link footer__special d-flex">
          <i class="fa-solid fa-people-group"></i>
          Customers choice
        </a>
      </li>
    </ul>

    <p class="footer__copyright text-center">
      &copy; 2022 by
      <a href="" class="footer-org-link">Bridge Technologies</a> . All Rights
      Reserved
    </p>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  max-width: 100vw;
  padding: 1em 3em;
  background: var(--accent-clr);
  display: block;

  p,
  a {
    color: var(--sec-txt-clr-inv);
    text-decoration: none;
    font-size: clamp(var(--fs-200), var(--fs-200) + 1.5vw, var(--fs-400));
  }

  &__containers {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin: 2em 0;
  }

  &__link {
    gap: 0.5em;
    text-transform: capitalize;
    transition: letter-spacing 0.3s ease;
    font-weight: bold;

    &:hover,
    &:focus-visible {
      letter-spacing: 0.1em;
    }
  }

  &-org-link {
    font-family: "montserratsemibold";
  }

  &__copyright {
    display: block;
  }

  @media screen and (min-width: 500px) {
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
      "sm hl"
      "sc sc"
      "cp cp";

    &__containers {
      margin: 0;
    }

    &__social-media-links-container {
      grid-area: sm;
    }

    &__help-links-container {
      grid-area: hl;
    }

    &__specials-container,
    &__copyright {
      margin: 1em 0;
    }

    &__specials-container {
      grid-area: sc;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
      max-width: 100%;
    }

    &__copyright {
      grid-area: cp;
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(3, minmax(150px, 1fr));
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      "sm hl sc"
      "cp cp cp";

    &__specials-container {
      flex-direction: column;
      justify-content: space-between;
      margin: 0;
    }
  }
}
</style>
