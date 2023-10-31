<template>
  <div class="text-sm breadcrumbs">
    <ul>
      <li><a @click="goto('/')">Home</a></li> 
      <li>{{ currentPage }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { useRouter, useRoute } from 'vue-router'

/**
 * A really simple breadcrumb. basic format and 1-level nested breadcrumb. :D
 * 
 * @displayName BreadcrumbUI
 */
export default {
  name: "BreadcrumbUI",
  setup() {
    const router = useRouter()
    const route = useRoute()

    return {
      router,
      route,
    }
  },

  data() {
    return {
      currentPage: '' as string
    }
  },

  mounted() {
    this.currentPage = (this.route.name as string).replace('_', ' ')
  },

  methods: {
    goto(val: string) {
      this.router.push({
        path: val
      })
    },
  },
}
</script>

<style lang="postcss">
.breadcrumbs li {
  text-transform: capitalize;
}
</style>
