<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="input-container d-flex flex-column">
    <label
      for=""
      v-if="props.label"
      class="block pl-3 ml-px text-sm font-medium text-gray-700"
    >
      {{ props.label }}
    </label>
    <input
      :value="props.modelValue"
      @input="(event) => emits('update:modelValue', event.target.value)"
      :type="props.type"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<style lang="scss" scoped>
.input-container {
  width: 100%;
}

label {
  font-family: "montserratsemibold";
  // font-weight: bold;
  font-size: clamp(var(--fs-200), var(--fs-200) + 1vw, var(--fs-400));
}

input {
  background: #ddd;
  border: 0;
  border-radius: 2em;
  padding: 0.5em 0.75em;
  transition: background 0.3s ease;
  outline-color: var(--accent-clr);
}

input:focus {
  background: #eee;
}
</style>

<script setup>
import defineEmits from "@/composables/useEmitter";
import { defineProps } from "vue";

const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
    default: null,
  },
});
</script>
