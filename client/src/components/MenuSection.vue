<template>
  <section
    class="section menu-section d-flex flex-column jfy-center"
    id="menu-section"
  >
    <h1 class="text-center">What we serve</h1>
    <ul class="menu__type-list d-flex flex-wrap">
      <li class="menu__type menu__type--active"><a href="">All</a></li>
      <li class="menu__type"><a href="">Starter</a></li>
      <li class="menu__type"><a href="">Breakfast</a></li>
      <li class="menu__type"><a href="">Lunch</a></li>
      <li class="menu__type"><a href="">Dinner</a></li>
      <li class="menu__type"><a href="">Desserts</a></li>
    </ul>

    <div class="menu">
      <div class="menu__type menu__type--breakfast full-width">
        <MealItem />
      </div>
    </div>
    <a href="./menu.html" class="link menu__see-more-btn"
      >View Full Menu <i>&#8674;</i></a
    >
  </section>
</template>

<script>
import MealItem from "@/components/MealItem.vue";

export default {
  name: "MenuSection",
  components: { MealItem },
  /* methods: {
    async addTodo(e) {
      e.preventDefault();

      this.name = "";
      this.description = "";
    },
    async removeTodo(item, i) {
      await axios.delete("/api/meals" + item._id);
      this.meals.splice(i, 1);
    },
  }, */
};
</script>

<style lang="scss">
.menu-section {
  background: var(--sec-txt-clr-inv);
  box-shadow: 0 0 5px 5px rgba(#000000, 0.2);
  padding: 1em 3em;
  overflow-x: hidden;

  h1 {
    font-size: clamp(var(--fs-400), calc(var(--fs-600) + 1vw), var(--fs-800));
    text-transform: capitalize;
  }

  .menu__type-list {
    list-style: none;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2em 0;
    margin: 0;
    gap: 1em;
    width: 100%;
  }

  .menu__type {
    flex: 1 1 clamp(4em, calc(4em + 1vw), 8em);
    vertical-align: center;

    a {
      text-decoration: none;
      color: var(--pry-txt-clr);
      font-family: "montserratsemibold";
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--accent-clr);
        transform: scale(0);
        transform-origin: center;
        transition: transform 0.3s ease;
      }
    }
  }

  .menu__type a:hover,
  .menu__type a:focus,
  .menu__type--active a {
    &::after {
      transform: scale(1);
    }
  }

  .menu__content {
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 3em;
  }

  .menu__item {
    position: relative;
    gap: 0.35em;
    flex: 1 0 clamp(180px, calc(10em + 1vw), 50em);
    box-shadow: 0 0 5px 3px rgba(#000, 0.2);
    background: var(--pry-txt-clr-inv);
    padding: 1em 0.5em;

    @media screen and (min-width: 490px) {
      & {
        flex-basis: clamp(225px, calc(10em + 1vw), 50em);
      }
    }

    @media screen and (min-width: 900px) {
      & {
        flex-basis: clamp(360px, calc(10em + 1vw), 50em);
      }
    }

    &-name {
      font-family: "montserratregular";
    }

    &-description {
      padding-left: 0.5em;
      color: var(--sec-txt-clr);
      font-family: "montserratlight";
    }

    &-price {
      position: absolute;
      top: 1em;
      right: 1em;
      font-family: "montserratsemibold";
    }

    &-order-btn {
      align-self: flex-end;
      outline: none;
      border: none;
    }
  }

  .menu__see-more-btn {
    display: block;
    margin-top: 1.5em;
    align-self: center;
  }
}
</style>
