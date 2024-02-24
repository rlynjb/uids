<template>
  <div class="toast toast-center">
    <div
      v-if="Object.keys(l_config).length != 0"
      class="alert rounded-none"
      :class="l_config.type"
    >
      <span v-if="l_config.type === 'alert-success'">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </span>
      <span v-if="l_config.type === 'alert-error'">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </span>
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
     *  icon: '',
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
