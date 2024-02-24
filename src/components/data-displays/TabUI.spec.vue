<template>
  <div class="tab-component border">
    <div class="tabs border-b bg-neutral-100 py-0 px-4">
      <a
        v-for="(tab, tabIndex) in (tabs as string[])"
        :key="'tab-'+tabIndex"
        class="tab min-h-14 text-sm text-black"
        :class="tab === currentTab ? 'border-b-2 border-b-primary font-bold' : ''"
        @click="gotoTab(tab)"
      >
        {{ tab }}
      </a> 
    </div>
    
    <div class="p-8">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

/**
 * A simple Tab UI using Array to store state.
 * 
 * @displayName TabUI
 */
export default {
  name: "Tab",
  props: {
    /**
     * A list of tab labels.
     * @value ['Tab1', 'Tab2']
     */
    tabs: {
      type: Array,
      default: () => [] as string[],
    },
    /**
     * The default active tab.
     * @value tab label
     */
    defaultTab: {
      type: String,
      default: () => '' as string
    },
  },

  setup(props: any) {
    const currentTab = ref(props.defaultTab)

    /**
     * Go to a tab.
     * 
     * @param newTab tab name
     * @public
     */
    const gotoTab = (newTab: string) => {
      currentTab.value = newTab
    }

    /**
     * Triggers when tab is active.
     * 
     * @param {string} tabName tab name.
     * @property {boolean} currentTab returns if tab is active.
     * @public
     */
    const showTab = (tabName: string) => {
      return currentTab.value === tabName ? true : false
    }

    return {
      currentTab,
      gotoTab,
      showTab,
    }
  },
}
</script>

<style lang="postcss">

</style>
