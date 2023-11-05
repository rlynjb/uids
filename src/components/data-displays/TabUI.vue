<template>
  <div class="tabs">
    <a
      v-for="(tab, tabIndex) in (tabs as string[])"
      :key="'tab-'+tabIndex"
      class="tab tab-lg tab-lifted"
      :class="tab === currentTab ? 'tab-active' : ''"
      @click="gotoTab(tab)"
    >
      {{ tab }}
    </a> 
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
  name: "TabUI",
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

<style>

</style>


<docs lang="md">
##### Basic usage
```js
  // vue3 implementation
  // import { ref } from "vue"
  // const tab_ref = ref<InstanceType<typeof Tab>>()

  <TabUI
    ref="tab_tref"
    :tabs="['Tab1', 'Tab2', 'Tab3']"
    default-tab="Tab1"
  />
  <div v-show="tab_tref?.showTab('Tab1')">
    Tab1
  </div>
  <div v-show="tab_tref?.showTab('Tab2')">
    Tab2
  </div>
  <div v-show="tab_tref?.showTab('Tab3')">
    Tab3
  </div>
```
</docs>
