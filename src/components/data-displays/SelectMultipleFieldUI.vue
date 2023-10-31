<template>
  <div
    ref="selectMultipleField"
    class="select-multiple-field s-field-container"
  >
    <div class="form-control w-full">
      <label
        v-if="label"
        class="label s-field-label"
      >
        {{ label }}
      </label>

      <div
        :id="'selectMultipleInputField' + uid"
        class="grid grid-flow-col justify-start content-center select input-bordered w-full rounded-none"
        :class="disabled ? 'disabled' : ''"
      >
        <span
          v-if="!selected.length"
          :class="'select-multiple-placeholder sm-placeholder-' + uid"
        >
          {{ placeholder }}
        </span>
        <span
          v-for="(v, vIndex) in selected as any[]"
          :key="'v-'+vIndex"
          class="badge px-3 py-3 mr-1"
        >
          {{ v.label }}
          <span
            class="deleteChip ml-2"
            @click="remove(v)"
          >
            x
          </span>
        </span>
      </div>

      <p
        v-if="errorStatus"
        class="text-primary text-sm"
      >
        Required
      </p>

      <ul
        v-show="showOptions"
        class="options p-2 shadow bg-base-100 w-max grid"
        :class="('sm-listOption-' + uid) + (' grid-cols-' + columns)"
      >
        <li
          v-for="(item, itemIndex) in (options as any)"
          :key="'item-'+itemIndex"
          :class="('sm-option-' + uid) + ' selectMultiple-option ' + (findActive(item) && 'active') + ' ' + (checkIfDisableOption(item) && 'disable')"
          @click="add(item)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { v4 as uuidv4 } from 'uuid';

/**
 * A fancy select field that allows multiple values. Custom options layout. Detects selected value state.
 * 
 * @displayName SelectMultipleFieldUI
 */
export default {
  name: "SelectMultipleField",
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Type here..'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    errorStatus: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [ { label: 'test label ', value: 'test value' } ],
    },
    columns: {
      type: String,
      default: '1',
    },
    selected: {
      type: Array,
      default: () => []
    },
    disableOptions: {
      type: Array,
      default: () => []
    },
  },

  data() {
    return {
      showOptions: false,
      uid: uuidv4(),
      l_selected: [] as any[],
    }
  },

  watch: {
    selected(val) {
      this.l_selected = val
    },
  },

  mounted() {
    window.addEventListener('click', this.clickEvent)
  },

  unmounted() {
    window.removeEventListener('click', this.clickEvent)
  },

  methods: {
    checkIfDisableOption(itemObj: any) {
      const findObjInDisable = this.disableOptions.find((d: any) => itemObj.value === d.value)
      return findObjInDisable ? true : false
    },
    clickEvent(event: any) {
      if (this.disabled) return

      const clickEvent = event.target as HTMLButtonElement

      this.showOptions = (
        clickEvent.className === 'sm-option-' + this.uid ||
        clickEvent.className === 'sm-listOption-' + this.uid ||
        clickEvent.className === 'sm-placeholder-' + this.uid ||
        clickEvent.id === 'selectMultipleInputField' + this.uid
      )
        ? true
        : false
    },
    add(itemObj: any) {
      // if there is disable items, check if option should be disabled and return click
      if (this.disableOptions.length) {
        if (this.checkIfDisableOption(itemObj)) return
      }

      // update and emit latest selected items
      const dupIndex = this.l_selected.findIndex((s: any) => s.value === itemObj.value)
      if (dupIndex != -1) { // remove from list
        this.l_selected.splice(dupIndex, 1)
        this.$emit('update', this.l_selected)
        this.$emit('input', this.l_selected)
        return
      }
      this.l_selected.push(itemObj)
      this.$emit('update', this.l_selected)
      this.$emit('input', this.l_selected)

      // also emit individual object
      this.$emit('add', itemObj)
    },
    remove(itemObj: any) {
      if (this.disabled) return

      // update and emit latest selected items
      const findIndex = this.l_selected.findIndex((s: any) => s.value === itemObj.value)
      this.l_selected.splice(findIndex, 1)
      this.$emit('update', this.l_selected)
      this.$emit('input', this.l_selected)

      // also emit individual object
      const findObj = this.options.find((o: any) => o.value === itemObj.value)
      this.$emit('remove', findObj)
    },
    /*
      NOTE:
      This last implementation caused the Options pane to hidden
      when user selects an unselected option
    */
    findActive(obj: any) {
      const findActive = this.selected.find((a: any) => a.value === obj.value)
      return findActive ? true : false
    },
  },
};
</script>

<style scope lang="postcss">
.s-field-container .s-field-label {
  padding-left: 0;
}
.select-multiple-field {
  position: relative;
  min-width: 10em;
  cursor: pointer;
}
.select-multiple-field .select-multiple-placeholder {
  color: #9ca3af;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
}
.select-multiple-field .select {
  font-weight: 500;
  display: block;
  height: auto;
  padding-top: 0.6em;
  padding-bottom: 0.6em;
}
.select-multiple-field .select.disabled {
  background: #ededed;
  border-color: #ededed;
  cursor: not-allowed;
}
.select-multiple-field .select.disabled .badge {
  opacity: 0.4;
}
.select-multiple-field .select.disabled .badge .deleteChip {
  cursor: not-allowed;
}
.select-multiple-field .selectMultiple-option {
  padding: 0.7em 1.2em;
  cursor: pointer;
}
.select-multiple-field .selectMultiple-option:hover {
  background: #f9f9f9;
}
.select-multiple-field .selectMultiple-option.active {
  background: #f0eded;
}
.select-multiple-field .selectMultiple-option.disable {
  background: #f9f9f9;
  cursor: default;
}
.select-multiple-field ul.options {
  position: absolute;
  top: 5.8em;
  font-size: 0.9em;
  min-width: -webkit-fill-available;
  z-index: 9;
}
</style>
