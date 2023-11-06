<template>
  <div
    class="text-field s-field-container"
  >
    <div class="form-control w-full">
      <label
        v-if="label"
        class="label s-field-label"
      >
        {{ label }}
      </label>
      <input
        :value="modelValue"
        type="text"
        class="input input-bordered w-full rounded-none"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      >
      <p
        v-if="errorStatus"
        class="text-primary text-sm"
      >
        Required
      </p>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * A text field using Vue3 Form Input Bindings.
 *  
 * @displayName TextFieldUI
 * @see https://vuejs.org/guide/essentials/forms.html
 */
export default {
  name: "TextField",
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Type here..'
    },
    modelValue: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    errorStatus: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scope>
@import "../../assets/tailwind.css";

.s-field-container .s-field-label {
  padding-left: 0;
}
.input[type="text"] {
  font-size: 0.875rem;
}
.input[type="text"]:focus {
  outline: none;
}
</style>


<docs lang="md">
  ##### Basic usage
  ```js
  <TextFieldUI
    label="sample label"
    placeholder="sample placeholder"
  />
  ```

  ##### Set field to disable
  ```js
  <TextFieldUI
    label="sample label"
    :disabled="true"
  />
  ```

  ##### Set error
  ```js
  <TextFieldUI
    label="sample label"
    :error-status="true"
  />
  ```
</docs>
