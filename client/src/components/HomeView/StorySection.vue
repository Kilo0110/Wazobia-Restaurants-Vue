<template>
  <section class="section story-section d-flex flex-column" id="story-section">
    <div class="story d-grid text-center">
      <h2><span class="heading-span">Who</span> we are</h2>
      <img
        class="story__img"
        src="@/assets/img/catalogue/african-fish-dish-nigerian-food-260nw-1219952545.jpg"
        alt=""
      />
      <div class="story__text-container d-flex flex-column">
        <p class="story__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi enim
          asperiores ad laborum, laudantium nihil consectetur quam officiis,
          amet consequatur assumenda voluptatum hic tenetur cumque fuga esse
          debitis suscipit necessitatibus.
        </p>
        <a class="link story__text-link" href=""
          >Meet our team <i>&#8674;</i></a
        >
      </div>
    </div>
    <div class="story d-grid text-center">
      <h2><span class="heading-span">Why</span> we are</h2>
      <img
        class="story__img"
        src="@/assets/img/catalogue/african-fish-dish-nigerian-food-260nw-1219952545.jpg"
        alt=""
      />
      <div class="story__text-container d-flex flex-column">
        <p class="story__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi enim
          asperiores ad laborum, laudantium nihil consectetur quam officiis,
          amet consequatur assumenda voluptatum hic tenetur cumquefuga esse
          debitis suscipit necessitatibus.
        </p>
        <a class="link story__text-link" href="">See our menu <i>&#8674;</i></a>
      </div>
    </div>
    <div class="story d-grid text-center">
      <h2><span class="heading-span">Where</span> we are</h2>
      <img
        class="story__img"
        src="@/assets/img/catalogue/african-fish-dish-nigerian-food-260nw-1219952545.jpg"
        alt=""
      />
      <div class="story__text-container d-flex flex-column">
        <p class="story__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi enim
          asperiores ad laborum, laudantium nihil consectetur quam officiis,
          amet consequatur assumenda voluptatum hic tenetur cumque fuga esse
          debitis suscipit necessitatibus.
        </p>
        <a class="link story__text-link" href="">
          Make a reservation <i>&#8674;</i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "StorySection",
};
</script>

<style lang="scss" scoped>
.story-section {
  background: var(--sec-txt-clr-inv);
  box-shadow: 0 0 5px 5px rgba(#000000, 0.2);
  padding: 1em 0;

  h1 {
    font-size: clamp(var(--fs-400), calc(var(--fs-600) + 1vw), var(--fs-800));
  }

  .story {
    max-width: 100vw;
    gap: 0.5em;
    padding: 0 3em;

    h2 {
      text-transform: capitalize;
    }

    img {
      justify-self: center;
      object-fit: cover;
    }

    p {
      font-size: clamp(var(--fs-100), calc(var(--fs-200) + 1vw), 1.75rem);
    }

    &:not(:nth-of-type(1)) {
      margin-top: 2em;
    }

    &__text-container {
      gap: 0.5em;
      align-items: center;
    }

    @media screen and (min-width: 768px) {
      padding: 0;
      margin-top: 1.5em;
      min-height: 90vh;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: minmax(25px, 35px) 1fr;
      grid-template-areas:
        "img h2"
        "img text"
        "img text";

      img {
        grid-area: img;
        height: 100%;
        width: 100%;
      }

      h2 {
        grid-area: h2;
      }

      &__text-container {
        grid-area: text;
        text-align: left;
        padding: 0 7em 0 1em;
        align-self: center;

        .story__text-link {
          align-self: flex-start;
        }
      }

      &:nth-of-type(2) {
        grid-template-areas:
          "h2 img"
          "text img"
          "text img";

        .story__text-container {
          text-align: right;
          padding: 0 1em 0 7em;
        }

        .story__text-link {
          align-self: flex-end;
        }
      }
    }
  }
}
</style>
