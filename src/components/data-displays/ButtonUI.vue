<template>
  <button class="btn rounded-none">
    <span :class="'icon '+ iconStart" />
    <!-- @slot Inject svg icon BEFORE label -->
    <slot name="iconStart"/>
    <span class="text">{{ label }}</span>
    <span :class="'icon '+ iconEnd" />
    <!-- @slot Inject svg icon AFTER label -->
    <slot name="iconEnd"/>
  </button>
</template>

<script lang="ts">
export default {
  name: "ButtonUI",
  props: {
    label: {
      type: String,
      default: "Button Name",
    },
    /**
     * Inject font base icon BEFORE label
     * @values icon-checkmark
     */
    iconStart: {
      type: String,
      default: '',
    },
    /**
     * Inject font base icon AFTER label
     * @values icon-checkmark
     */
    iconEnd: {
      type: String,
      default: '',
    }
  },
};
</script>

<style scoped>
@import "../../assets/tailwind.css";

.btn.btn-link,
.btn.btn-link:hover {
  text-decoration-line: none;
}
.btn .text {
  margin: 0 -5px;
}
</style>
