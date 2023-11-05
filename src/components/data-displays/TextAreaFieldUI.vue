<template>
  <div class="textarea-field s-field-container form-control">
    <label class="label s-field-label">
      {{ label }}
    </label>
    <textarea
      :value="modelValue"
      class="textarea textarea-bordered rounded-none"
      :disabled="disabled"
      :placeholder="placeholder"
      rows="6"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <p
      v-if="errorStatus"
      class="text-primary text-sm"
    >
      Required
    </p>
  </div>
</template>

<script lang="ts">
/**
 * A textarea field using Vue3 Form Input Bindings.
 *  
 * @displayName TextAreaFieldUI
 */
export default {
  name: "TextAreaField",
  props: {
    label: {
      type: String,
      default: 'Sample Label'
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
    }
  },
}
</script>

<style scope>
@import "../../assets/tailwind.css";

.s-field-container .s-field-label {
  padding-left: 0;
}
.textarea-field .textarea {
  line-height: 1.25rem !important;
}
textarea.textarea:focus {
  outline: none;
}
</style>


<docs lang="md">
  ##### Basic usage
  ```js
  <TextAreaFieldUI
    label="sample label"
    placeholder="type here"
  />
  ```

  ##### Disable textarea
  ```js
  <TextAreaFieldUI
    label="sample label"
    placeholder="type here"
    :disabled="true"
  />
  ```
  ##### Set error message
  ```js
  <TextAreaFieldUI
    label="sample label"
    placeholder="type here"
    :error-status="true"
  />
  ```
</docs>
