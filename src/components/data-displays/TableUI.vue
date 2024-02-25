<template>
  <div class="table-widget w-full overflow-x-scroll grid-cols-6">
    <div class="cols-span-6 mb-4">
      <!-- @slot Use this to display table filters, buttons, title, etc -->
      <slot name="filters" />
    </div>

    <div class="max-w-screen-sm overflow-x-scroll md:max-w-screen-md lg:max-w-full lg:overflow-x-auto lg:cols-span-6">
      <table
        v-if="rows.length"
        class="table table-zebra table-normal shadow"
      >
        <thead class="bg-secondary text-white text-left">
          <tr>
            <th
              v-for="(col, colIndex) in columns"
              :key="'col' + colIndex"
              class="w-max pt-2 pb-2 pl-4 pr-4 font-light"
              :class="(col.align ? col.align : '') + ' ' + (col.selectAll ? 'selectBox' : '')"
            >
              <!----- if Sortable is enabled ----->
              <div
                v-if="col.sortable"
                class="flex items-center gap-2 cursor-pointer sortable"
                @click="l_sortColumn(col.field, getSortOrder(col.field))"
              >
                {{ col.name }}
                <span
                  v-if="getSortOrder(col.field)"
                  :class="
                    'icon ' +
                      (getSortOrder(col.field) === 'asc'
                        ? 'pg-arrow_up'
                        : 'pg-arrow_down')
                  "
                />
              </div>
              <!----- end ----->

              <!----- if column as Select Checkbox is enabled ----->
              <div v-else-if="col.selectAll">
                {{ col.name }}
                <input
                  v-model="selectAll_value"
                  type="checkbox"
                  :disabled="disable_selectAll"
                  @change="selectAll"
                >
              </div>
              <!----- end ----->

              <div 
                v-else
              >
                {{ col.name }}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, rowIndex) in l_rows"
            :key="'row' + rowIndex"
          >
            <td
              v-for="(fieldValue, fieldName) in row.display"
              :key="'fieldName' + fieldName"
              class="pt-2 pb-2 pl-4 pr-4"
              :class="
                (row.settings_align[fieldName] ? row.settings_align[fieldName] : '') + ' ' + (row.settings_selectAll[fieldName] ? 'selectBox' : '')
              "
            >
              <!----- Value as Link ----->
              <span
                v-if="row.settings_asLink[fieldName] && fieldValue"
                class="inline-block w-max row-link text-primary"
                @click="goto(row.raw)"
              >
                <b v-if="(l_settings_selectAll_dictionary[row.raw.guid])">
                  {{ fieldValue }}
                </b>
                <p
                  v-else
                  class="mb-0"
                >
                  {{ fieldValue }}
                </p>
              </span>
              <!----- end ----->

              <!----- Value as Button ----->
              <button
                v-else-if="row.settings_asButton[fieldName]"
                class="btn w-max"
                :class="row.settings_asButton[fieldName]"
                @click="goto(row.raw)"
              >
                <b v-if="(l_settings_selectAll_dictionary[row.raw.guid])">
                  {{ fieldValue }}
                </b>
                <p
                  v-else
                  class="mb-0"
                >
                  {{ fieldValue }}
                </p>
              </button>
              <!----- end ----->

              <!----- Value as Select Checkbox ----->
              <span v-else-if="row.settings_selectAll[fieldName]">
                <input
                  v-model="row.settings_selectAll[fieldName].value"
                  type="checkbox"
                  :disabled="disable_selectAll"
                  @input="
                    () =>
                      $emit(row.settings_selectAll[fieldName].emit, row.raw)
                  "
                  @change="l_update_selectAll_dictionary(row)"
                >
              </span>

              <!----- end ----->

              <!----- Value as Multiple Buttons ----->
              <div 
                v-else-if="row.settings_asMultipleButtons[fieldName]"
                class="w-full flex gap-2 justify-center"
              >
                <button
                  v-for="(btnVal, btnIndex) in fieldValue"
                  :key="'multipleButton-' + btnIndex"
                  class="btn"
                  :class="btnVal.class"
                  @click="() => $emit(btnVal.emit, row.raw)"
                >
                  {{ btnVal.label }}
                </button>
              </div>
              <!----- end ----->

              <!----- Custom Buttons ----->
              <div 
                v-else-if="row.settings_customButtons[fieldName]"
                class="w-max"
              >
                <span v-if="fieldValue === ''" />
                <button
                  v-for="(btn, btnIndex) in row.settings_customButtons[fieldName]"
                  v-else
                  v-show="!btn.hide"
                  :key="'btn-' + btnIndex"
                  class="btn-link mr-2 w-max"
                  :disabled="btn.disable"
                  @click="() => $emit(btn.emit, row.raw)"
                >
                  <span
                    v-if="btn.iconSvg"
                    class="ml-2 mr-2 text-lg inline-block align-middle w-4 h-4"
                  >
                    <img :src="btn.iconSvg">
                  </span>

                  <span
                    v-if="btn.iconClass"
                    class="ml-2 mr-2 text-lg inline-block align-middle"
                    :class="btn.iconClass"
                  />
                  <span 
                    v-if="btn.label" 
                    class="inline-block w-max"
                  >
                    {{ btn.label }}
                  </span>
                  <span 
                    v-if="btn.data == true" 
                    class="inline-block w-max"
                  >
                    <b v-if="(l_settings_selectAll_dictionary[row.raw.guid])">
                      {{ fieldValue }}
                    </b>
                    <p
                      v-else
                      class="mb-0"
                    >
                      {{ fieldValue }}
                    </p>
                  </span>
                </button>
              </div>
              <!----- end ----->

              <!----- Default Value ----->
              <span 
                v-else 
                class="inline-block w-max"
              >
                <span
                  v-if="(l_settings_selectAll_dictionary[row.raw.guid])"
                >
                  <b>{{ fieldValue }}</b>
                </span>
                <span
                  v-else
                >
                  {{ fieldValue }}
                </span>
              </span>
              <!----- end ----->
            </td>
          </tr>
        </tbody>
      </table>

      <h6
        v-else
        class="m-14 text-center text-zinc-400"
      >
        No data available.
      </h6>
    </div>

    <div class="col-span-6">
      <!-- @slot Use this slot to display pagination, footer, etc -->
      <slot name="pagination" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { onMounted, ref, watch, toRefs } from 'vue';
import {
  matchRowDataByColumnField,
  sortColumn,
  getSortOrderTracker,
  setSortOrder,
  getSortOrder,
  toggleSelectAll,
  getRows,
  getToggleSelectAllDictionary,
  update_selectAll_dictionary,
} from '../../utils/TableUI'


/**
 * A lightweight Table UI component built with 2Dimensional Array and Hash Object.
 * TODO:
 * - visible columns
 *
 * @displayName TableUI
 */
const props = defineProps({
  /**
   * The column available settings for table.
   * @example
   * columns: [
   *  {
   *    name: '', // readable label of object property from API respond object
   *    field: '', // name of object property from API respond object
   *    align: 'text-center' || 'text-right',
   *    sortable: true || false,
   *    customButtons: [
   *      {
   *        label: '',
   *        iconClass: '', // class name of icon
   *        iconSvg: ``, // tempalte literal value, ref heroicons.com
   *        emit: ''
   *      }
   *    ],
   *    asLink: true || false, // field name of row.data we want to be as link value
   *    asButton: '', // class name style of button
   *    selectAll: true || false,
   *    asMultipleButtons: true || false,
   *    // accepts Array as value (row[{property_name}]) with object format of...
   *    // [
   *    //  {
   *    //    label: '',
   *    //    class: '', // usually style associated with button
   *    //    emit: ''
   *    //   }
   *    // ]
   *  }
   * ]
   */
  columns: {
    type: Array as PropType<any[]>,
    default: () => {
      return [
        {
          name: 'Column 1',
          field: 'Column1',
        },
      ];
    },
  },
  /**
   * The content from API response object that will match field in each column.
   */
  rows: {
    type: Array,
    default: () => {
      return [
        {
          Column1: 'col1 valuasdasde',
        },
      ];
    },
  },
  /**
   * The initial column that is sortable.
   * @values column field property value
   */
  sortField: {
    type: String,
    default: '',
  },
  /**
   * The initial sorting order for column.
   * @values asc, desc
   */
  sortOrder: {
    type: String,
    default: 'asc',
  },
});
const { columns, rows } = toRefs(props);
const emit = defineEmits([
  'goto',
  'sortColumn',
  'selectCheckboxUpdate',
  'selectCheckboxSelectAll',
]);


const l_rows = ref<any[]>([]);
const l_settings_selectAll_dictionary = ref({}) as any;

const selectAll_value = ref(false);
const disable_selectAll = ref(false)


watch(
  () => props.rows,
  () => {
    l_rows.value = matchRowDataByColumnField(
      props.rows,
      props.columns,
      l_settings_selectAll_dictionary
    )

    selectAll_value.value = false
  },
)

onMounted(() => {
  l_rows.value = matchRowDataByColumnField(
    props.rows,
    props.columns,
    l_settings_selectAll_dictionary
  )

  // Set initial column to be sorted
  setSortOrder(props.sortField, props.sortOrder)
});


const goto = (val: any) => {
  /**
   * Triggers when the link field is clicked.
   *
   * @property {object} val returns a raw/complete data object of row item.
   */
  emit('goto', val);
};

const l_sortColumn = (fieldName: string, sortOrder: string) => {
  sortColumn(fieldName, sortOrder)
  getSortOrderTracker()
  emit('sortColumn', { fieldName, sortOrder });
}

const enable_selectAll = () => {
  disable_selectAll.value = false
}
const set_disable_selectAll = () => {
  disable_selectAll.value = true
}

const reset_selectAll = () => {
  selectAll_value.value = false
  selectAll()
}

const selectAll = () => {
  toggleSelectAll(selectAll_value.value)
  l_rows.value = getRows()
  l_settings_selectAll_dictionary.value = getToggleSelectAllDictionary()

  const cleanSelectAllDictionary = l_settings_selectAll_dictionary.value.map((v: any) => {
    return v.raw
  })
  emit('selectCheckboxUpdate', Object.values(cleanSelectAllDictionary));
  emit('selectCheckboxSelectAll', selectAll_value.value);
};


const clear_selectAll_distionary = () => {
  l_settings_selectAll_dictionary.value = {}
}

/*
  Get called when we want to un/selected item and update dictionary

  @param item object Containing item data
*/
const l_update_selectAll_dictionary = (rowObj: any) => {
  update_selectAll_dictionary(rowObj)
  l_settings_selectAll_dictionary.value = getToggleSelectAllDictionary()
}


defineExpose({
  goto,
  selectAll,
  clear_selectAll_distionary,
  reset_selectAll,
  set_disable_selectAll,
  enable_selectAll,
});
</script>

<style scope>
.table-widget table {
  width: 100%;
}
.table-widget th .sortable {
  color: #bcbcbc;
}
.table-widget td,
.table-widget th {
  font-size: 0.8rem;
  line-height: 1.2rem;
  vertical-align: text-top;
}

.table-widget td.selectBox,
.table-widget th.selectBox {
  display: revert;
  width: 1em;
}

.table-widget table tbody tr {
  background-color: #fefefe;
}
.table-widget table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.table-widget .row-link {
  cursor: pointer;
}

.table-widget button[disabled] {
  color: lightgrey;
}
</style>
