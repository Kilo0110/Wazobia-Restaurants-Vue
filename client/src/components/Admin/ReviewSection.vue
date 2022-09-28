<template>
  <section class="review-section">
    <h1>Reviews</h1>
    <div class="reviews-container d-flex flex-column">
      <div class="review">
        <div class="review__header d-flex jfy-between align-center">
          <h2 class="reviewer-name">Jane Doe</h2>
          <img src="" alt="" class="reviewer-img" />
        </div>
        <p class="review__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          voluptates!
        </p>
        <div class="review__btn-container d-flex align-center jfy-end">
          <button class="expand-review-btn">
            <i class="fa-solid fa-eye"></i>
          </button>
          <button class="delete-review-btn">
            <i class="fa-solid fa-trash-alt"></i>
          </button>
        </div>
      </div>
      <div class="review">
        <div class="review__header d-flex jfy-between align-center">
          <h2 class="reviewer-name">Jane Doe</h2>
          <img src="" alt="" class="reviewer-img" />
        </div>
        <p class="review__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          voluptates!
        </p>
        <div class="review__btn-container d-flex align-center jfy-end">
          <button class="expand-review-btn">
            <i class="fa-solid fa-eye"></i>
          </button>
          <button class="delete-review-btn">
            <i class="fa-solid fa-trash-alt"></i>
          </button>
        </div>
      </div>
      <div class="review">
        <div class="review__header d-flex jfy-between align-center">
          <h2 class="reviewer-name">Jane Doe</h2>
          <img src="" alt="" class="reviewer-img" />
        </div>
        <p class="review__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          voluptates!
        </p>
        <div class="review__btn-container d-flex align-center jfy-end">
          <button class="expand-review-btn">
            <i class="fa-solid fa-eye"></i>
          </button>
          <button class="delete-review-btn">
            <i class="fa-solid fa-trash-alt"></i>
          </button>
        </div>
      </div>
      <div class="review">
        <div class="review__header d-flex jfy-between align-center">
          <h2 class="reviewer-name">Jane Doe</h2>
          <img src="" alt="" class="reviewer-img" />
        </div>
        <p class="review__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          voluptates!
        </p>
        <div class="review__btn-container d-flex align-center jfy-end">
          <button class="expand-review-btn">
            <i class="fa-solid fa-eye"></i>
          </button>
          <button class="delete-review-btn">
            <i class="fa-solid fa-trash-alt"></i>
          </button>
        </div>
      </div>
      <div class="review">
        <div class="review__header d-flex jfy-between align-center">
          <h2 class="reviewer-name">Jane Doe</h2>
          <img src="" alt="" class="reviewer-img" />
        </div>
        <p class="review__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          voluptates!
        </p>
        <div class="review__btn-container d-flex align-center jfy-end">
          <button class="expand-review-btn">
            <i class="fa-solid fa-eye"></i>
          </button>
          <button class="delete-review-btn">
            <i class="fa-solid fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.review-section {
  grid-area: rs;

  h1 {
    font-family: "sacramentoregular";
    font-size: clamp(var(--fs-200), var(--fs-600) + 1vw, var(--fs-900));
    letter-spacing: 0.1em;
  }

  .reviews-container {
    gap: 1em;
  }

  .review {
    background-image: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.75)
    );
    border-radius: 1em;
    overflow: hidden;

    &__header {
      background-image: linear-gradient(
        to bottom right,
        rgba(255, 255, 255, 0.15),
        rgba(255, 255, 255, 0.75)
      );
      padding: 0.5em 1em;

      .reviewer-name {
        font-size: clamp(var(--fs-200), var(--fs-200) + 1vw, var(--fs-500));
      }

      .reviewer-img {
        width: clamp(var(--fs-200), var(--fs-400) + 1vw, var(--fs-600));
        aspect-ratio: 1;
        border: 1px solid black;
        border-radius: 50%;
      }
    }

    &__content {
      padding: 0.5em 1em;
    }

    &__btn-container {
      padding-right: 1em;
      gap: 1em;

      button {
        background: none;
        border: none;
        cursor: pointer;

        &.delete-review-btn {
          i {
            color: red;
          }
        }
      }
    }

    @supports (backdrop: blur(50px)) {
      & {
        backdrop-filter: blur(50px);
      }
    }
  }
}
</style>
