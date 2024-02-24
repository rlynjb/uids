<template>
  <div
    class="text-multiple-field s-field-container"
  >
    <div class="form-control w-full">
      <label
        v-if="props.label"
        class="label s-field-label"
      >
        {{ label }}
      </label>

      <div
        v-if="l_value.length"
        class="chip-values"
      >
        <span
          v-for="(chip, chipIndex) in l_value"
          :key="'chip' + chipIndex"
          class="badge px-3 py-2 mt-2 mb-1 ml-2 mr-1"
        >
          {{ chip }}
          <span
            class="deleteChip ml-2"
            @click="() => l_value.splice(chipIndex, 1)"
          >
            x
          </span>
        </span>
      </div>

      <input
        :value="entered_value"
        type="text"
        class="input input-bordered w-full rounded-none"
        :class="l_value.length ? 'border-t-[0px]' : ''"
        :placeholder="placeholder"
        :disabled="disabled"
        @keyup.enter="add"
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

<script setup lang="ts">
/**
 * A text field that accepts multiple values in Chip format.
 *  
 * @displayName TextMultipleFieldUI
 * @see https://vuejs.org/guide/essentials/forms.html
 */
import { ref, watch } from "vue"



const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  placeholder: {
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
})
const emit = defineEmits(['update'])
const l_value = ref([])
const entered_value = ref('')



watch(
  l_value.value,
  (val) => {
    emit('update', val)
  }
)



const add = (val: any) => {
  l_value.value.push(val.target.value)
  entered_value.value = ''
}
</script>

<style scope>
.s-field-container .s-field-label {
  padding-left: 0;
}
.input[type="text"] {
  font-size: 0.875rem;
}
.input[type="text"]:focus {
  outline: none;
}
.chip-values {
  border: 1px solid #dadada;
  padding: 2px;
  border-bottom: none;
}
.deleteChip {
  cursor: pointer;
}
</style>
