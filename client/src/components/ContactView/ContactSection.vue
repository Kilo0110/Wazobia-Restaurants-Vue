<template>
  <div class="contact d-grid">
    <form action="" class="contact__form d-flex flex-column">
      <div class="contact__input-container">
        <input
          type="text"
          class="input-field contact__input-field"
          id="firstName"
          required
        />
        <label for="firstName" class="contact__input-label">First Name</label>
      </div>
      <div class="contact__input-container">
        <input
          type="text"
          class="input-field contact__input-field"
          id="lastName"
          required
        />
        <label for="lastName" class="contact__input-label">Last Name</label>
      </div>
      <div class="contact__input-container">
        <input
          type="email"
          class="input-field contact__input-field"
          id="emailAddress"
          required
        />
        <label for="emailAddress" class="contact__input-label">Email</label>
      </div>
      <div class="contact__input-container">
        <input
          type="number"
          class="input-field input-field--tel-no contact__input-field"
          id="mobileNumber"
        />
        <label for="mobileNumber" class="contact__input-label">Mobile No</label>
      </div>
      <div class="contact__input-container">
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Type your message..."
        ></textarea>
      </div>
    </form>
    <section class="contact__card contact__card--socials">
      <h1 class="contact__card__header">We are social</h1>
      <ul class="contact__info-container">
        <li class="contact__social-media">
          <a href="" class="contact__link contact__social-media-link d-flex">
            <i class="fa-brands fa-facebook"></i>
            Facebook
          </a>
        </li>
        <li class="contact__social-media">
          <a href="" class="contact__link contact__social-media-link d-flex">
            <i class="fa-brands fa-instagram"></i>
            Instagram
          </a>
        </li>
        <li class="contact__social-media">
          <a href="" class="contact__link contact__social-media-link d-flex">
            <i class="fa-brands fa-whatsapp"></i>
            WhatsApp
          </a>
        </li>
        <li class="contact__social-media">
          <a href="" class="contact__link contact__social-media-link d-flex">
            <i class="fa-brands fa-twitter"></i>
            Twitter
          </a>
        </li>
        <li class="contact__social-media">
          <a href="" class="contact__link contact__social-media-link d-flex">
            <i class="fa-brands fa-youtube"></i>
            YouTube
          </a>
        </li>
      </ul>
    </section>

    <section class="contact__card contact__card--mobile">
      <h1 class="contact__card__header">You can call us</h1>
      <ul class="contact__info-container">
        <li class="contact__mobile d-flex">
          <i></i>
          0801113334
        </li>
        <li class="contact__mobile d-flex">
          <i></i>
          0811223334
        </li>
        <li class="contact__mobile d-flex">
          <i></i>
          011223334
        </li>
      </ul>
    </section>

    <section class="contact__card contact__card--address">
      <h1 class="contact__card__header">Or visit us today</h1>
      <div class="map"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactSection",
};
</script>

<style lang="scss" scoped>
.contact {
  display: block;
  padding: 2em 3em;
  width: 100vw;

  @media screen and (min-width: 768px) {
    padding: 2em 5em;
  }

  @media screen and (min-width: 900px) {
    padding: 2em 6em;
  }

  &__form {
    gap: 2em;
    padding: 2em 1em;
    width: 100%;
    box-shadow: 0 0 5px 3px rgba(#121212, 0.1);
    background-color: #fff;
    border-radius: 0.75em;
  }

  &__input-container {
    position: relative;
  }

  input {
    padding: 0.5em 0.75em;
    outline: none;
    width: 100%;
    border: 1px solid var(--accent-clr);
    border-radius: 2em;

    &:focus,
    &.active,
    &:valid {
      & + .contact__input-label {
        top: -50%;
        transform: translateY(0);
        font-size: clamp(var(--fs-200), var(--fs-200) + 1vw, var(--fs-400));
      }
    }
  }

  textarea {
    padding: 0.5em 0.75em;
    outline: none;
    width: 100%;
    border: 1px solid var(--accent-clr);
    border-radius: 0.5em;
  }

  &__input-label {
    position: absolute;
    background-color: #fff;
    padding: 0.15em 0.35em;
    top: 50%;
    left: 1em;
    transform: translateY(-50%);
    transition: all 0.3s ease;
    font-size: clamp(var(--fs-200), var(--fs-200) + 2vw, var(--fs-400));
  }
}
</style>
