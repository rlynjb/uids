##### Basic usage
```js
import { ref } from "vue"

let showModal = ref(false)
const open = () => {
  showModal.value = showModal.value ? false : true
}

<div>
  <ModalUI
    ref="trefModal"
    :show="showModal"
  >
    Test content
  </ModalUI>

  <button
    @click="open"
  >
    Open
  </button>
</div>
```
