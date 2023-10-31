<template>
  <div class="pagination">
    <span>Items per page:</span>
    <span>
      <select
        :value="l_itemsPerPage"
        @input="update('itemsPerPage', parseInt(($event.target as HTMLSelectElement).value))"
      >
        <option>10</option>
        <option>25</option>
        <option>50</option>
        <option>100</option>
      </select>
    </span>

    <span>
      1-{{ l_itemsPerPage }} of {{ l_totalItems }} items
    </span>
    <span>
      <IconButton
        icon-name="pg-arrow_left"
        class="btn-ghost p-1"
        :disabled="disablePrev"
        @click="update('currentPage', (l_currentPage--) - 1)"
      />
    </span>

    <span>
      {{ l_currentPage }} of {{ totalPages }}
    </span>

    <span>
      <IconButton
        icon-name="pg-arrow_right"
        class="btn-ghost p-1"
        :disabled="disableNext"
        @click="update('currentPage', (l_currentPage++) + 1)"
      />
    </span>
  </div>
</template>

<script lang="ts">
import { computed, ref, watch } from 'vue'

import {
  IconButton
} from '@/components'

/**
 * A simple pagination that calculates total pages base on total items and items per page.
 * @displayName PaginationUI
 */
export default {
  name: "PaginationNavigation",
  components: {
    IconButton,
  },
  props: {
    itemsPerPage: {
      type: Number,
      default: 10,
    },
    totalItems: {
      type: Number,
      default: 200,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },

  setup(props) {
    const l_itemsPerPage = ref(props.itemsPerPage)
    const l_totalItems = ref(props.totalItems)
    const l_currentPage = ref(props.currentPage)
    const totalPages = computed(() => Math.ceil(l_totalItems.value / l_itemsPerPage.value))
    const disablePrev = computed(() => l_currentPage.value === 1)
    const disableNext = computed(() => l_currentPage.value === totalPages.value || !totalPages.value)

    watch(() => props.itemsPerPage, (val) => {
      l_itemsPerPage.value = val
    })
    watch(() => props.totalItems, (val) => {
      l_totalItems.value = val
    })
    watch(() => props.currentPage, (val) => {
      l_currentPage.value = val
    })

    return {
      l_itemsPerPage,
      l_totalItems,
      l_currentPage,
      totalPages,
      disablePrev,
      disableNext,
    }
  },

  methods: {
    /**
     * Triggers when itemsPerPage and currentPage values changed.
     * 
     * @param {string} key @value itemsPerPage, currentPage
     * @param {number} val itemsPerPage or currentPage values.
     * @property {object} payload returns an object.
     * @public
     */
    update(key: string, val: number) {
      const payload = {
        itemsPerPage: key === 'itemsPerPage' ? Number(val) : Number(this.l_itemsPerPage),
        totalItems: key === 'totalItems' ? val : this.l_totalItems,
        currentPage: key === 'currentPage' ? val : this.l_currentPage
      }

      this.$emit('update', payload)
    }
  }
}
</script>

<style scope lang="postcss">
.pagination {
  @apply text-right;
  font-size: 12px;
}
.pagination span {
  @apply inline-block ml-2;
}
.pagination select {
  @apply border-0;
}
</style>