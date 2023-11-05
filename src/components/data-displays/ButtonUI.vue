<template>
  <button class="btn rounded-none">
    <span :class="'icon '+ iconStart" />
    <span class="text">{{ label }}</span>
    <span :class="'icon '+ iconEnd" />
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
    iconStart: {
      type: String,
      default: '',
    },
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


<docs lang="md">
  ##### Basic usage
  ```js
    <ButtonUI
      label="label name"
    />
  ```

  ##### Set Icon before label

  ##### Set Icon after label
</docs>
