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
import { ref } from 'vue'

/**
 * A simple toast using JavaScripts' setTimeout.
 * 
 * @displayName ToastUI
 */
export default {
  name: "Toast",
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

  setup() {
    const l_config = ref({}) as any

    return {
      l_config,
    }
  },

  watch: {
    config: {
      handler(val) {
        this.l_config = val
  
        if (val) {
          setTimeout(() => {
            this.l_config = {}
          }, this.l_config.timeout)
        }
      },
      deep: true,
    }
  },
}
</script>

<style scoped lang="postcss">

</style>
