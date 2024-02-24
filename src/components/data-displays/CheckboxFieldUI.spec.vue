<template>
  <div class="form-control checkbox-field">
    <label
      class="label cursor-pointer"
    >
      <input
        ref="checkbox_tref"
        v-model="l_checked"
        type="checkbox"
        class="checkbox rounded-none"
        :disabled="disabled"
        :value="l_value"
        @input="update"
      >
      <span class="label-text">
        {{ label }}
      </span> 
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
/**
 * A simple checkbox field that returns check status and additional object value of checked item.
 * 
 * @displayName CheckboxFieldUI
 */


const props = defineProps({
  label: {
      type: String,
      default: 'Sample Label'
    },
  checked: {
    type: Boolean,
    default: () => false
  },
  value: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: () => false
  }
})
const emit = defineEmits(['update'])


const l_checked = ref(props.checked)
const l_value = ref(props.value)
const checkbox_tref = ref<InstanceType<typeof HTMLFormElement>>()


const update = (val: any) => {
  emit('update',
    {
      label: props.label,
      checked: checkbox_tref.value?.checked,
      value: val.target.value
    }
  )
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
