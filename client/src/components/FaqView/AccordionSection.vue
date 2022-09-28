<template>
  <div class="faq-container d-flex flex-column">
    <div class="faq accordion d-flex flex-column">
      <button
        class="accordion__label d-flex jfy-between align-center"
        id="accordion1"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Consectetur, ad!
      </button>
      <p class="accordion__details faq__answer">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quis
        provident qui voluptas alias, ipsum harum exercitationem eligendi
        temporibus officiis?
      </p>
    </div>
    <div class="faq accordion d-flex flex-column">
      <button
        class="accordion__label d-flex jfy-between align-center"
        id="accordion2"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Consectetur, ad!
      </button>
      <p class="accordion__details faq__answer">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quis
        provident qui voluptas alias, ipsum harum exercitationem eligendi
        temporibus officiis?
      </p>
    </div>
    <div class="faq accordion d-flex flex-column">
      <button
        class="accordion__label d-flex jfy-between align-center"
        id="accordion3"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Consectetur, ad!
      </button>
      <p class="accordion__details faq__answer">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quis
        provident qui voluptas alias, ipsum harum exercitationem eligendi
        temporibus officiis?
      </p>
    </div>
    <div class="faq accordion d-flex flex-column">
      <button
        class="accordion__label d-flex jfy-between align-center"
        id="accordion4"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Consectetur, ad!
      </button>
      <p class="accordion__details faq__answer">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quis
        provident qui voluptas alias, ipsum harum exercitationem eligendi
        temporibus officiis?
      </p>
    </div>
    <div class="faq accordion d-flex flex-column">
      <button
        class="accordion__label d-flex jfy-between align-center"
        id="accordion5"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Consectetur, ad!
      </button>
      <p class="accordion__details faq__answer">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quis
        provident qui voluptas alias, ipsum harum exercitationem eligendi
        temporibus officiis?
      </p>
    </div>
    <div class="faq accordion d-flex flex-column">
      <button
        class="accordion__label d-flex jfy-between align-center"
        id="accordion6"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Consectetur, ad!
      </button>
      <p class="accordion__details faq__answer">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quis
        provident qui voluptas alias, ipsum harum exercitationem eligendi
        temporibus officiis?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionSection",
};
</script>

<style lang="scss" scoped>
@use "@/styles/abstracts" as a;

body {
  gap: 3em;
}

.main {
  .faq-container {
    padding: 2em 3em;
    gap: 1em;

    @media screen and (min-width: 768px) {
      padding: 2em 5em;
    }

    @media screen and (min-width: 900px) {
      padding: 2em 6em;
    }
  }
}

.accordion {
  position: relative;
  border-radius: 0.5em;
  overflow: hidden;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);

  input[type="radio"] {
    display: none;
  }

  &__label {
    background-color: var(--sec-txt-clr-inv);
    padding: 0.5em 1em;
    color: var(--accent-clr);
    font-weight: bold;
    outline: 0;
    border: 0;
    transition: all 0.3s ease;

    &::after {
      content: "\25BE";
      color: var(--accent-clr);
      font-size: clamp(var(--fs-300), var(--fs-300) + 1vw, var(--fs-700));
    }

    &:focus {
      background-color: var(--accent-clr);
      color: var(--sec-txt-clr-inv);

      &::after {
        color: var(--sec-txt-clr-inv);
      }
    }
  }

  &__details {
    position: relative;
    background-color: lighten(map-get(a.$colors, pry-txt-clr), 85%);
    max-height: 0;
    transition: all 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      background-color: var(--accent-clr);
      width: 0.35em;
      height: 80%;
      top: 50%;
      left: 1em;
      transform: translateY(-50%);
    }
  }

  &__details.show {
    padding: 1em 1em 1em 2em;
    max-height: 200px;
  }
}
</style>
