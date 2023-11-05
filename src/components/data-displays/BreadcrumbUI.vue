<template>
  <div class="text-sm breadcrumbs">
    <ul
      v-if="parentPaths.length"
    >
      <li>
        <a @click="goto('/')">Home</a>
      </li> 
      <li
        v-for="(bc, bcIndex) in parentPaths"
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
  name: "BreadcrumbUI",
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
      currentPage.value = route && route.name
        ? (route.name as string).replace('_', ' ')
        : 'sample current page name'
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

<style scope>
@import "../../assets/tailwind.css";

.breadcrumbs li {
  text-transform: capitalize;
}
</style>



<docs lang="md">
##### Basic usage
```js
<BreadcrumbUI />
```

##### Set Parent Page
```js
/*
  NOTE:
  id can be retrieved in store, vue-router, localStorage, whichever you prefer to store routes.
*/
const id = 123123
const paths = [
  {
    name: 'Parent Page',
    path: '/parent-path/{id}/subpage'
  }
]

<BreadcrumbUI
  :parent-paths="paths"
/>
```
</docs>