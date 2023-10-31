<template>
  <div class="toast toast-center">
    <div
      v-if="Object.keys(l_config).length != 0"
      class="alert rounded-none"
      :class="l_config.type"
    >
      <span>{{ l_config.message }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch } from 'vue'

/**
 * A simple toast using JavaScripts' setTimeout.
 * 
 * @displayName ToastUI
 */
export default {
  name: "ToastUI",
  props: {
    /**
     * Settings for time, message, and color of toast.
     * 
     * @example
     * {
     *  type: 'alert-success',
     *  message: 'Sample success msg',
     *  timeout: 1000,
     * }
     */
    config: {
      type: Object,
      default: () => { return {} }
    },
  },

  setup(props: any) {
    const l_config = ref({}) as any

    watch(
      () => props.config,
      (val: any) => {
        l_config.value = val

        if (val) {
          setTimeout(() => {
            l_config.value = {}
          }, l_config.value.timeout)
        }
      },
      {
        deep: true
      }
    )

    return {
      l_config,
    }
  },
}
</script>

<style scoped lang="postcss">

</style>
