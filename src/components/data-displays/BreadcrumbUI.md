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
