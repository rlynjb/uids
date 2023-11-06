##### Basic usage
```js
import { ref } from "vue"

let showModal = ref(false)
const modal_tref = ref(null)

const open = () => {
  showModal.value = showModal.value ? false : true
  console.log(modal_tref.value) // returning undefined
}



<div>
  <ModalUI
    ref="modal_tref"
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
