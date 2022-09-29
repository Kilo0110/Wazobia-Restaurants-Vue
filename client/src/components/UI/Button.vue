<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button
    class="disabled:cursor-not-allowed"
    :disabled="props.disabled"
    @click="handleClick"
  >
    {{ props.text }}
  </button>
</template>

<style lang="scss" scoped>
@use "@/styles/abstracts" as a;

button[disabled] {
  cursor: not-allowed;
  // background: darken(map-get(a.$colors, accent-clr), 5%);
}

button {
  cursor: pointer;
  border: 0;
  outline: 0;
  background: var(--accent-clr);
  color: var(--sec-txt-clr-inv);
  padding: 0.5em 0.75em;
  border-radius: 2em;
  font-family: "montserratsemibold";
  letter-spacing: 0.1em;
  min-width: 25%;
}
</style>

<script setup>
import defineEmits from "@/composables/useEmitter";
import { defineProps } from "vue";

const emits = defineEmits(["onClick"]);

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: "Button",
  },
});

function handleClick(event) {
  emits("onClick", event);
}
</script>
