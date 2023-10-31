<template>
  <div class="form-control checkbox-field">
    <label
      class="label cursor-pointer"
    >
      <input
        ref="tref_inputCheckbox"
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
import { ref, onMounted } from 'vue'
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

  setup(props: any, context: any) {
    const l_checked = ref(false)
    //const tref_inputCheckbox = ref<InstanceType<typeof HTMLFormElement>>()
    const tref_inputCheckbox = ref() as any

    onMounted(() => {
      l_checked.value = props.checked
    })

    const update = () => {
      context.emit('update', { label: props.label, checked: (tref_inputCheckbox as HTMLFormElement).checked } )
    }

    return {
      l_checked,
      tref_inputCheckbox,
      update,
    }
  }
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
