<template lang="">
  <section class="section showcase-section d-flex flex-wrap">
    <div class="showcase d-flex flex-column jfy-between text-center">
      <h2>Made for <span class="heading-span">HEALTH</span></h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
        accusantium in delectus non itaque nam?
      </p>
    </div>
    <div
      class="showcase d-flex flex-column jfy-between align-center text-center"
    >
      <h2>Made for <span class="heading-span">LOVE</span></h2>
      <p>
        Enim neque iure adipisci laudantium iusto quas eius aliquid commodi
        tempore similique. Eaque, numquam cupiditate!
      </p>
    </div>
    <div
      class="showcase d-flex flex-column jfy-between align-center text-center"
    >
      <h2>Made for <span class="heading-span">YOU</span></h2>
      <p>
        Inventore velit beatae aperiam, sed cupiditate at. Fugit consectetur
        velit voluptatum tenetur doloribus. Nostrum, suscipit?
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "ShowcaseSection",
};
</script>

<style lang="scss" scoped>
.showcase-section {
  gap: 1.5em;
  padding: 3.5em 3.5em;

  .showcase {
    flex-basis: calc(calc(800px - 100%) * 999);
    flex-grow: 1;
    gap: 0.5em;
    position: relative;
    isolation: isolation;

    h2 {
      font-size: clamp(var(--fs-200), calc(var(--fs-200) + 1vw), var(--fs-500));
    }

    &:nth-of-type(1)::after {
      content: "H";
    }

    &:nth-of-type(2)::after {
      content: "L";
    }

    &:nth-of-type(3)::after {
      content: "Y";
    }

    &::after {
      position: absolute;
      top: 0;
      left: 40%;
      transform: translateX(-50%);
      width: 100%;
      height: 100%;
      background: transparent;
      font-size: clamp(100px, calc(100px + 1vw), 150px);
      z-index: -1;
      color: rgba(#000000, 0.2);
      font-family: "sacramentoregular";
    }
  }
}
</style>
