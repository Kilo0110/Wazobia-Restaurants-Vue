<template>
  <section class="section testimonial-section d-flex flex-column align-center">
    <h1 class="text-center">What People Are Saying About Us</h1>
    <div class="carousel" data-carousel>
      <button class="carousel__btn carousel__btn--prev">&lArr;</button>
      <button class="carousel__btn carousel__btn--next">&rArr;</button>
      <ul class="testimonial-container">
        <li
          class="testimonial testimonial-slide d-flex flex-column align-center jfy-around"
          data-active
        >
          <img
            src="@/assets/img/team/male-chef-1.jpg"
            alt=""
            class="testifier-image"
          />

          <div class="testimonial__content-container">
            <i class="fa-solid fa-quote-left"></i>
            <i class="fa-solid fa-quote-right"></i>
            <div class="testimonial__content text-center">
              <h2 class="testifier-name">Lorem, ipsum.</h2>
              <p class="testimony">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                minus perspiciatis excepturi. Esse, pariatur libero quod nihil
                recusandae blanditiis optio!
              </p>
            </div>
          </div>
        </li>
        <li
          class="testimonial testimonial-slide d-flex flex-column align-center jfy-around"
        >
          <img
            src="@/assets/img/team/female-chef-1.jpeg"
            alt=""
            class="testifier-image"
          />

          <div class="testimonial__content-container">
            <i class="fa-solid fa-quote-left"></i>
            <i class="fa-solid fa-quote-right"></i>
            <div class="testimonial__content text-center">
              <h2 class="testifier-name">Lorem, ipsum.</h2>
              <p class="testimony">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                minus perspiciatis excepturi. Esse, pariatur libero quod nihil
                recusandae blanditiis optio!
              </p>
            </div>
          </div>
        </li>
        <li
          class="testimonial testimonial-slide d-flex flex-column align-center jfy-around"
        >
          <img
            src="@/assets/img/team/manager-1.jpg"
            alt=""
            class="testifier-image"
          />

          <div class="testimonial__content-container">
            <i class="fa-solid fa-quote-left"></i>
            <i class="fa-solid fa-quote-right"></i>
            <div class="testimonial__content text-center">
              <h2 class="testifier-name">Lorem, ipsum.</h2>
              <p class="testimony">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                minus perspiciatis excepturi. Esse, pariatur libero quod nihil
                recusandae blanditiis optio!
              </p>
            </div>
          </div>
        </li>
        <li
          class="testimonial testimonial-slide d-flex flex-column align-center jfy-around"
        >
          <img
            src="@/assets/img/team/owner.jpeg"
            alt=""
            class="testifier-image"
          />

          <div class="testimonial__content-container">
            <i class="fa-solid fa-quote-left"></i>
            <i class="fa-solid fa-quote-right"></i>
            <div class="testimonial__content text-center">
              <h2 class="testifier-name">Lorem, ipsum.</h2>
              <p class="testimony">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                minus perspiciatis excepturi. Esse, pariatur libero quod nihil
                recusandae blanditiis optio!
              </p>
            </div>
          </div>
        </li>
        <li
          class="testimonial testimonial-slide d-flex flex-column align-center jfy-around"
        >
          <img
            src="@/assets/img/team/delivery-man-1.jpg"
            alt=""
            class="testifier-image"
          />

          <div class="testimonial__content-container">
            <i class="fa-solid fa-quote-left"></i>
            <i class="fa-solid fa-quote-right"></i>
            <div class="testimonial__content text-center">
              <h2 class="testifier-name">Lorem, ipsum.</h2>
              <p class="testimony">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                minus perspiciatis excepturi. Esse, pariatur libero quod nihil
                recusandae blanditiis optio!
              </p>
            </div>
          </div>
        </li>
        <li
          class="testimonial testimonial-slide d-flex flex-column align-center jfy-around"
        >
          <img
            src="@/assets/img/team/waiter-1.jpeg"
            alt=""
            class="testifier-image"
          />

          <div class="testimonial__content-container">
            <i class="fa-solid fa-quote-left"></i>
            <i class="fa-solid fa-quote-right"></i>
            <div class="testimonial__content text-center">
              <h2 class="testifier-name">Lorem, ipsum.</h2>
              <p class="testimony">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                minus perspiciatis excepturi. Esse, pariatur libero quod nihil
                recusandae blanditiis optio!
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "TestimonialSection",
};
</script>

<style lang="scss">
.testimonial-section {
  background: var(--sec-txt-clr-inv);
  box-shadow: 0 0 5px 5px rgba(#000000, 0.2);
  padding: 1em 3em;
  gap: 1em;

  @media screen and (min-width: 768px) {
    padding: 1em 7.5em;
  }

  .carousel {
    width: 100%;
    max-width: 100vw;
    position: relative;

    &__btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 3.5rem;
      border: none;
      background: none;
      color: rgba(#000, 0.3);
      cursor: pointer;
      transition: color 0.3s ease;
      z-index: 8;

      &:hover,
      &:focus {
        color: rgba(#000, 0.8);
      }

      &--next {
        right: 0;
      }

      &--prev {
        left: 0;
      }
    }
  }

  .testimonial-container {
    list-style-type: none;
    padding: 0;
    margin: 0;
    position: relative;
    min-height: 70vh;
  }

  .testimonial {
    & {
      overflow: hidden;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 95%;
      height: 100%;
      opacity: 0;
      transition: 200ms opacity ease-in-out;
      transition-delay: 200ms;
    }

    &[data-active] {
      opacity: 1;
      transition-delay: 0ms;
      z-index: 1;
    }

    .testifier-image {
      width: clamp(75px, calc(75px + 5vw), 150px);
      // height: var(--testimonial-image-height, 75px);
      aspect-ratio: 1;
      border-radius: 50%;
      object-fit: cover;

      @media screen and (min-width: 768px) {
        width: clamp(80px, calc(80px + 7vw), 250px);
      }
    }

    .testimonial__content-container {
      color: var(--pry-txt-clr);
      position: relative;

      .fa-solid {
        font-size: 4rem;
        position: absolute;
        transform: translateX(-50%);
        color: rgba(#000, 0.1);
      }

      .fa-quote-left {
        top: -1em;
        left: 50%;
      }

      .fa-quote-right {
        bottom: -1em;
        left: 50%;
      }
    }
  }
}
</style>
