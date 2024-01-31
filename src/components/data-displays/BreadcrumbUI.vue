<template>
  <div class="text-sm s-breadcrumbs">
    <ul
      v-if="parentPaths.length"
    >
      <li class="home">
        <a @click="goto('/')">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 inline-block">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          Home
        </a>
      </li> 
      <li
        v-for="(bc, bcIndex) in parentPaths as any[]"
        :key="'bc-'+bcIndex"
      >
        <a @click="goto(bc.path)">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 inline-block">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          {{ bc.name }}
        </a>
      </li>
      <li class="current">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 inline-block">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        {{ currentPage }}
      </li>
    </ul>

    <ul
      v-else
    >
      <li class="home">
        <a @click="goto('/')">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.6 h-3.5 inline-block">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          Home
        </a>
      </li>
      <li class="current">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 inline-block">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
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
.s-breadcrumbs li {
  text-transform: capitalize;
  background: #333;
  color: #fff;
  margin-right: 1em;
  padding: 4px 5px 4px 10px;
  position: relative;
  font-size: 0.85em;
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.s-breadcrumbs li svg {
  margin-top: -4px;
  margin-right: 4px;
}
.s-breadcrumbs li.home:before {
  border: none;
}
.s-breadcrumbs li:before {
  content: "";
  border-width: 14px 10px;
  border-right-color: #333!important;
  border-top-color: #333!important;
  border-bottom-color: #333!important;
  border-left-color: transparent;
  position: absolute;
  left: -15px;
  top: 0;
}
.s-breadcrumbs li:after {
  position: absolute;
  top: 0px;
  right: -20px;
  content: "";
  border: 0 solid transparent;
  border-width: 14px 10px;
  border-left-color: #333;
}
.s-breadcrumbs li.current {
  @apply bg-primary;
  cursor: default;
}
.s-breadcrumbs li.current:before {
  border-right-color: #d71921!important;
  border-top-color: #d71921!important;
  border-bottom-color: #d71921!important;
}
.s-breadcrumbs li.current:after {
  @apply border-l-primary;
}
</style>
