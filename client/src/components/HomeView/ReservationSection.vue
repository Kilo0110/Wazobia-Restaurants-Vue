<template>
  <section
    class="section reservation-section d-flex flex-column"
    id="reservation-section"
  >
    <h1 class="text-center">Make A Reservation</h1>
    <form action="" class="reservation-form d-grid">
      <p class="reservation-form__instruction text-center grid-span-2">
        Please fill out EVERY field appropriately.
      </p>
      <div class="input-container grid-span-1">
        <input
          type="text"
          class="input-field input-field--firstname"
          id="input-field--firstname"
          required
        />
        <label
          for="input-field__label input-field--firstname"
          class="input-label"
          >First name<span>*</span></label
        >
        <div class="input-underline"></div>
      </div>
      <div class="input-container grid-span-1">
        <input
          type="text"
          class="input-field input-field--lastname"
          id="input-field--lastname"
          required
        />
        <label
          for="input-field__label input-field--lastname"
          class="input-label"
          >Last name<span>*</span></label
        >
        <div class="input-underline"></div>
      </div>
      <div class="input-container grid-span-2">
        <input
          type="email"
          class="input-field input-field--email"
          id="input-field--email"
          required
        />
        <label
          for="
          input-field__label input-field--email"
          class="input-label"
          >Email Address<span>*</span></label
        >
        <div class="input-underline"></div>
      </div>
      <div class="input-container grid-span-1">
        <input
          type="number"
          class="input-field input-field--tel-no"
          id="input-field--tel-no"
          required
        />
        <label
          for="
          input-field__label input-field--tel-no"
          class="input-label"
          >Tel No.<span>*</span></label
        >
        <div class="input-underline"></div>
      </div>
      <div class="input-container grid-span-1">
        <input
          type="number"
          class="input-field input-field--number-of-patrons"
          id="input-field--number-of-patrons"
          required
        />
        <label
          for="input-field__label input-field--number-of-patrons"
          class="input-label"
          >No. of customers<span>*</span></label
        >
        <div class="input-underline"></div>
      </div>
      <div class="input-container grid-span-1">
        <input
          type="date"
          class="input-field input-field--date"
          id="input-field--date"
          required
        />
        <label
          for="
          input-field__label input-field--date"
          class="input-label"
          >Date<span>*</span></label
        >
        <div class="input-underline"></div>
      </div>
      <div class="input-container grid-span-1">
        <input
          type="time"
          class="input-field input-field--time"
          id="input-field--time"
          required
        />
        <label
          for="
          input-field__label input-field--time"
          class="input-label"
          >Time<span>*</span></label
        >
        <div class="input-underline"></div>
      </div>
      <button type="submit" class="btn reservation-btn grid-span-2">
        Book Reservation
      </button>
    </form>
  </section>
</template>

<script>
export default {
  name: "ReservationSection",
};
</script>

<style lang="scss">
@use "@/styles/abstracts" as a;

.reservation-section {
  gap: 1em;
  padding: 1em 3em;

  .reservation-form {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    width: 100%;

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(5, auto);
    }

    &__instruction {
      font-weight: bold;
      color: red;
      font-style: italic;
    }

    .input-container {
      position: relative;
      width: 100%;
    }

    .input-label {
      position: absolute;
      bottom: 2px;
      left: 0;
      font-size: clamp(
        var(--fs-200),
        calc(var(--fs-300) + 0.35vw),
        var(--fs-400)
      );
      transition: all 0.3s ease;

      span {
        color: red;
        margin: 0 0.15em;
      }
    }

    .input-underline {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: lighten(map-get(a.$colors, accent-clr), 10%);
      transform: scale(0);
      transform-origin: center;
      z-index: 2;
      transition: transform 0.2s ease;
    }

    .input-field {
      width: 100%;
      padding: 0 0.75em;
      outline: 0;
      border: 0;
      background: none;
      border-bottom: 2px solid black;

      &:focus,
      &.active {
        & + .input-label {
          font-size: clamp(
            var(--fs-200),
            calc(var(--fs-200) + 1vw),
            var(--fs-400)
          );
          bottom: 80%;
        }

        & ~ .input-underline {
          transform: scale(1);
        }
      }
    }

    .reservation-btn {
      justify-self: center;
    }
  }
}
</style>
