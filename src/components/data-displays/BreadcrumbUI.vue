<template>
  <div class="text-sm breadcrumbs">
    <ul>
      <li><a @click="goto('/')">Home</a></li> 
      <li>{{ currentPage }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

/**
 * A really simple breadcrumb. 1-level nested breadcrumb using Vue-router
 * 
 * @displayName BreadcrumbUI
 */
export default {
  name: "BreadcrumbUI",
  setup() {
    const router = useRouter()
    const route = useRoute()
    const currentPage = ref('')

    onMounted(() => {
      currentPage.value = (route.name as string).replace('_', ' ')
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
