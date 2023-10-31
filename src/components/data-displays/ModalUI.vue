<template>
  <div class="modal-widget">
    <div
      v-if="showModal"
      class="modal"
    >
      <div class="modal-box rounded-none relative">
        <button
          class="btn btn-ghost modal-close"
          @click="closeModal"
        >
          <span class="icon pg-close" />
        </button>

        <IconButton
          class="btn btn-ghost modal-close"
          icon-name="pg-close"
          @click="closeModal"
        />

        <slot />
      </div>
      <div
        class="modal-bg"
        @click="closeModal"
      />
    </div>
  </div><!-- /modal-widget -->
</template>

<script lang="ts">
// ui
import IconButton from "@/components/ui/actions/IconButton.vue"

/**
 * A simple modal ui
 * @displayName ModalUI
 */
export default {
  name: "Modal",
  components: {
    IconButton
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      showModal: false,
    }
  },

  watch: {
    show() {
      this.showModal = true
      this.$emit('modalStatus', this.showModal)
    },
  },

  methods: {
    /**
     * Triggers to close modal.
     */
    closeModal() {
      this.showModal = false
      this.$emit('modalStatus', this.showModal)
    },
  },
}
</script>

<style lang="postcss" scope>
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
