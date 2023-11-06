<template>
  <div class="modal-widget">
    <div
      v-if="l_show"
      class="modal"
    >
      <div class="modal-box rounded-none relative">
        <button
          class="btn btn-ghost modal-close"
          @click="closeModal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- @slot Display content -->
        <slot />
      </div>
      <div
        class="modal-bg"
        @click="closeModal"
      />
    </div>
  </div><!-- /modal-widget -->
</template>


<script setup lang="ts">
import {
  ref,
  watch,
  defineProps,
  toRefs,
  //defineEmits
} from 'vue'

/**
 * A simple modal ui
 * @displayName ModalUI
 */
const props = defineProps({
  /**
   * Open or close modal
   * 
   * @values true, false
   */
  show: {
    type: Boolean,
    default: false,
  },
})
const { show } = toRefs(props)
//const emit = defineEmits(['modalStatus'])

const l_show = ref(false)

watch(
  () => show,
  () => {
    l_show.value = true
    //emit('modalStatus', l_show.value)
  }
)


/**
 * Gets called to close modal.
 * 
 * @public
 */
const closeModal = () => {
  l_show.value = false
  //emit('modalStatus', l_show.value)
}
</script>


<style scope>
@import "../../assets/tailwind.css";

.modal-widget .modal {
  visibility: visible;
  opacity: 1;
  background: rgba(0,0,0,0.8);
  pointer-events: auto;
}
.modal-widget .modal-box {
  max-width: 85rem;
}
.modal-widget .modal-close {
  position: absolute;
  right: 1em;
  top: 0.6em;
  font-size: 1.5em;
  line-height: 1;
}
</style>


<docs lang="md">
  ##### Basic usage
  ```js
  <template>
    <button
      @click="() => showModal.value = showModal.value ? false : true"
    >
      open modal
    </button>

    <Modal
      :show="showModal"
    >
      Test content
    </Modal>
  </template>
  
  <script setup>
    import { ref } from "vue"
    const showModal = ref(false)
  </script>
  ```

  ##### Trigger close modal method
  ```ts
  <template>
    <button
      @click="() => modal_tref?.closeModal()"
    >
      close modal
    </button>

    <Modal
      ref="modal_tref"
      :show="showModal"
    >
      Test content
    </Modal>
  </template>

  <script setup>
    import { ref } from "vue"
    const modal_tref = ref<InstanceType<typeof Modal>>()
    const showModal = false
  </script>
  ```
</docs>
