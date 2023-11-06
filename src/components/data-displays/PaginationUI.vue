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
      <button
        class="btn-ghost p-1"
        :disabled="disablePrev"
        @click="update('currentPage', (l_currentPage--) - 1)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
    </span>

    <span>
      {{ l_currentPage }} of {{ totalPages }}
    </span>

    <span>
      <button
        class="btn-ghost p-1"
        :disabled="disableNext"
        @click="update('currentPage', (l_currentPage++) + 1)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </span>
  </div>
</template>

<script lang="ts">
import { computed, ref, watch } from 'vue'

/*
import {
  IconButton
} from '@/components'
*/

/**
 * A simple pagination that calculates total pages base on total items and items per page.
 * @displayName PaginationUI
 */
export default {
  name: "PaginationUI",
  components: {
    //IconButton,
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

  setup(props: any, context: any) {
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

    /**
     * Triggers when itemsPerPage and currentPage values changed.
     * 
     * @param {string} key @value itemsPerPage, currentPage
     * @param {number} val itemsPerPage or currentPage values.
     * @property {object} payload returns an object.
     * @public
     */
    const update = (key: string, val: number) => {
      const payload = {
        itemsPerPage: key === 'itemsPerPage' ? Number(val) : Number(l_itemsPerPage.value),
        totalItems: key === 'totalItems' ? val : l_totalItems.value,
        currentPage: key === 'currentPage' ? val : l_currentPage.value
      }

      context.emit('update', payload)
    }

    return {
      l_itemsPerPage,
      l_totalItems,
      l_currentPage,
      totalPages,
      disablePrev,
      disableNext,
      update,
    }
  }
}
</script>

<style scope>
@import "../../assets/tailwind.css";

.pagination {
  font-size: 12px;
}
.pagination span {
  display: inline-block;
  margin-left: 10px;
}
.pagination select {
  border-radius: 0;
}
</style>


<docs lang="md">
  ##### Basic usage
  ```js
  const params_pagination = {

  }
  <PaginationUI />
  ```
</docs>
