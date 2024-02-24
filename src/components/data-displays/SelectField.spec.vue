<template>
  <div class="select-field s-field-container">
    <div class="form-control w-full">
      <label class="label s-field-label">
        {{ label }}
      </label>
      <select
        v-model="l_value"
        class="select select-bordered rounded-none"
        :disabled="disabled"
        @change="update"
      >
        <option
          v-for="(option, optionIndex) in (options as any)"
          :key="'opt' + optionIndex"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: 'Sample Label'
  },
  options: {
    type: Array,
    default: () => [ { label: 'Opt1', value: 'opt1' }, { label: 'Opt2', value: 'opt2' } ]
  },
  disabled: {
    type: Boolean,
    default: false
  },
  value: {
    type: String,
    default: 'Sample Value'
  }
})
const emit = defineEmits(['selected'])


const l_value = ref(props.value) as any


const update = (val: any) => {
  emit('selected', val.target.value)
}
</script>

<style>
.select-field select {
  font-weight: 500;
}
.select-field select:focus {
  outline: none;
}
</style>
