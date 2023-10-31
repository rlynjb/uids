<template>
  <div class="form-control checkbox-field">
    <label
      class="label cursor-pointer"
    >
      <input
        ref="inputCheckbox"
        v-model="l_checked"
        type="checkbox"
        class="checkbox rounded-none"
        :disabled="disabled"
        @input="update"
      >
      <span class="label-text">
        {{ label }}
      </span> 
    </label>
  </div>
</template>

<script lang="ts">
/**
 * A simple checkbox field that returns check status and additional object value of checked item.
 * 
 * @displayName CheckboxFieldUI
 */
export default {
  name: "CheckboxField",
  props: {
    label: {
      type: String,
      default: 'Sample Label'
    },
    checked: {
      type: Boolean,
      default: () => false
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
  },

  data() {
    return {
      l_checked: false
    }
  },

  mounted() {
    this.l_checked = this.checked
  },

  methods: {
    update() {
      this.$emit('update', { label: this.label, checked: (this.$refs.inputCheckbox as HTMLFormElement).checked } )
    }
  },
}
</script>

<style>
.checkbox-field label {
  width: fit-content;
}
.checkbox-field input[type="checkbox"] {
  margin-right: 0.5em;
  width: 1em;
  height: 1em;
}
</style>
