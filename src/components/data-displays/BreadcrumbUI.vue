<template>
  <div class="text-sm breadcrumbs">
    <ul
      v-if="parentPaths.length"
    >
      <li>
        <a @click="goto('/')">Home</a>
      </li> 
      <li
        v-for="(bc, bcIndex) in parentPaths as any[]"
        :key="'bc-'+bcIndex"
      >
        <a @click="goto(bc.path)">{{ bc.name }}</a>
      </li>
      <li>
        {{ currentPage }}
      </li>
    </ul>

    <ul
      v-else
    >
      <li>
        <a @click="goto('/')">Home</a>
      </li>
      <li>
        {{ currentPage }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

/**
 * A breadcrumb using vue-router with default path of
 * Home and Current page.
 * 
 * @displayName BreadcrumbUI
 */
export default {
  name: "Breadcrumb",
  props: {
    parentPaths: {
      type: Array,
      default: () => []
    },
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const currentPage = ref('')

    onMounted(() => {
      currentPage.value = (route.name as string).replaceAll('_', ' ')
    })


    const goto = (val: string) => {
      router.push({
        path: val
      })
    }

    return {
      router,
      route,
      currentPage,
      goto,
    }
  }
}
</script>

<style lang="postcss">
.breadcrumbs li {
  text-transform: capitalize;
}
</style>
