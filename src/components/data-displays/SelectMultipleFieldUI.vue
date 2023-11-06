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
          v-if="selected && !selected.length"
          :class="'select-multiple-placeholder sm-placeholder-' + uid"
        >
          {{ placeholder }}
        </span>
        <span
          v-for="(v, vIndex) in selected"
          :key="'v-' + vIndex"
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
          v-for="(item, itemIndex) in options"
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
import { v4 as uuidv4 } from 'uuid'
import {
  ref,
  watch,
  onMounted,
  onUnmounted
} from 'vue'

/**
 * A fancy select field that allows multiple values. Custom options layout. Detects selected value state.
 * 
 * @displayName SelectMultipleFieldUI
 */
export default {
  name: "SelectMultipleFieldUI",
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
      default: () => [ { label: 'test label ', value: 'test value' } ] as any[],
    },
    columns: {
      type: String,
      default: '1',
    },
    selected: {
      type: Array,
      default: () => [{ label: 'test label ', value: 'test value' }] as any
    },
    disableOptions: {
      type: Array,
      default: () => []
    },
  },

  setup(props: any, context: any) {
    const showOptions = ref(false)
    const uid = uuidv4()
    const l_selected = ref<any[]>([])

    watch(
      () => props.selected,
      (val: any) => {
        l_selected.value = val
      },
      {
        deep: true
      }
    )

    onMounted(() => {
      window.addEventListener('click', clickEvent)
    })
    onUnmounted(() => {
      window.removeEventListener('click', clickEvent)
    })

    const clickEvent = (event: any) => {
      if (props.disabled) return

      const clickEvent = event.target as HTMLButtonElement

      showOptions.value = (
        clickEvent.className === 'sm-option-' + uid ||
        clickEvent.className === 'sm-listOption-' + uid ||
        clickEvent.className === 'sm-placeholder-' + uid ||
        clickEvent.id === 'selectMultipleInputField' + uid
      )
        ? true
        : false
    }

    const checkIfDisableOption = (itemObj: any) => {
      const findObjInDisable = props.disableOptions.find((d: any) => itemObj.value === d.value)
      return findObjInDisable ? true : false
    }

    const add = (itemObj: any) => {
      // if there is disable items, check if option should be disabled and return click
      if (props.disableOptions.length) {
        if (checkIfDisableOption(itemObj)) return
      }

      // update and emit latest selected items
      const dupIndex = l_selected.value.findIndex((s: any) => s.value === itemObj.value)
      if (dupIndex != -1) { // remove from list
        l_selected.value.splice(dupIndex, 1)
        context.emit('update', l_selected.value)
        context.emit('input', l_selected.value)
        return
      }
      l_selected.value.push(itemObj)
      context.emit('update', l_selected.value)
      context.emit('input', l_selected.value)

      // also emit individual object
      context.emit('add', itemObj)
    }

    const remove = (itemObj: any) => {
      if (props.disabled) return

      // update and emit latest selected items
      const findIndex = l_selected.value.findIndex((s: any) => s.value === itemObj.value)
      l_selected.value.splice(findIndex, 1)
      context.emit('update', l_selected.value)
      context.emit('input', l_selected.value)

      // also emit individual object
      const findObj = props.options.find((o: any) => o.value === itemObj.value)
      context.emit('remove', findObj)
    }

    /*
      NOTE:
      This last implementation caused the Options pane to hidden
      when user selects an unselected option
    */
    const findActive = (obj: any) => {
      const findActive = props.selected.find((a: any) => a.value === obj.value)
      return findActive ? true : false
    }

    return {
      showOptions,
      uid,
      l_selected,
      findActive,
      checkIfDisableOption,
      add,
      remove,
    }
  }
};
</script>

<style scope>
@import "../../assets/tailwind.css";

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
