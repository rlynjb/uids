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
                @click="sortColumn(col.field, sortOrderTracker[col.field])"
              >
                {{ col.name }}
                <span
                  v-if="sortOrderTracker[col.field]"
                  :class="
                    'icon ' +
                      (sortOrderTracker[col.field] === 'asc'
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
                  @change="update_selectAll_dictionary(row)"
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

interface IColumn {
  name: string;
  field: string;
  align?: string;
  sortable?: boolean;
  customButtons?: any[];
  asLink?: string; // field name of row.data we want to be as link value
  asButton?: string;
}

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
const sortOrderTracker = ref({}) as any;
const l_settings_selectAll_dictionary = ref({}) as any;
const g_settings_selectAll_dictionary = ref({}) as any;
const selectAll_value = ref(false);
const disable_selectAll = ref(false)


watch(
  () => props.rows,
  () => {
    matchRowDataByColumnField();

    selectAll_value.value = false

    // check if l_rows items exist in selectAll_dictionary
    // if exist.. do no reset_selectAll
    // if no rows do not exist.. run reset_selectAll
  },
);
watch(
  () => g_settings_selectAll_dictionary.value,
  (newval) => {
    emit('selectCheckboxUpdate', Object.values(newval));
  },
  {
    deep: true,
  },
);

onMounted(() => {
  matchRowDataByColumnField();

  sortOrderTracker.value = {
    [props.sortField]: props.sortOrder,
  };
});

const goto = (val: any) => {
  /**
   * Triggers when the link field is clicked.
   *
   * @property {object} val returns a raw/complete data object of row item.
   */
  emit('goto', val);
};

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
  if (selectAll_value.value) {
    // set all checkboxes to TRUE to visually signify all items are selected
    l_rows.value.forEach((row: any) => {
      props.columns.forEach((col: any) => {
        if (col.selectAll) {
          row.settings_selectAll[col.field] = {
            emit: col.emit,
            value: true
          };
        }
      })
      // add all current items to l_settings_selectAll_dictionary and g_settings_selectAll_dictionary
      l_settings_selectAll_dictionary.value[row.raw.guid] = row;
      g_settings_selectAll_dictionary.value[row.raw.guid] = row.raw;
    })
  }

  if (!selectAll_value.value) {
    // set all checkboxes to FALSE to visually signify all items are selected
    l_rows.value.forEach((row: any) => {
      props.columns.forEach((col: any) => {
        if (col.selectAll) {
          row.settings_selectAll[col.field] = {
            emit: col.emit,
            value: false
          };
        }
      })
      // clear all current items to l_settings_selectAll_dictionary and g_settings_selectAll_dictionary
      if (
        l_settings_selectAll_dictionary.value[row.raw.guid] !== undefined &&
        g_settings_selectAll_dictionary.value[row.raw.guid] !== undefined
      ) {
        delete l_settings_selectAll_dictionary.value[row.raw.guid];
        delete g_settings_selectAll_dictionary.value[row.raw.guid];
      }
    })
  }

  // emit for parent ux stuff
  emit('selectCheckboxSelectAll', selectAll_value.value);
};

const check_selectAll_dictionary = (guidKey: any) => {
  return l_settings_selectAll_dictionary.value[guidKey] !== undefined &&
    g_settings_selectAll_dictionary.value[guidKey] !== undefined
    ? true
    : false;
};

const clear_selectAll_distionary = () => {
  l_settings_selectAll_dictionary.value = {}
  g_settings_selectAll_dictionary.value = {}
}

const update_selectAll_dictionary = (rowObj: any) => {
  // update emitted public data and local/private data used within component
  if (
    l_settings_selectAll_dictionary.value[rowObj.raw.guid] !== undefined &&
    g_settings_selectAll_dictionary.value[rowObj.raw.guid] !== undefined
  ) {
    delete l_settings_selectAll_dictionary.value[rowObj.raw.guid];
    delete g_settings_selectAll_dictionary.value[rowObj.raw.guid];

    return;
  }
  l_settings_selectAll_dictionary.value[rowObj.raw.guid] = rowObj;
  g_settings_selectAll_dictionary.value[rowObj.raw.guid] = rowObj.raw;
};

const matchRowDataByColumnField = () => {
  l_rows.value = props.rows.map((row: any) => {
    const rowdata: any = {
      display: {},
      raw: { ...row },
      settings_align: {}, // field_name/column: row_value (object || string)
      settings_customButtons: {}, // field_name/column: row_value (object || string)
      settings_asLink: {}, // field_name/column: row_value (object || string)
      settings_asButton: {},
      settings_asMultipleButtons: {},
      settings_selectAll: {},
    };

    props.columns.forEach((col: any) => {
      rowdata.display[col.field] = row[col.field];

      if (col.align) {
        rowdata.settings_align[col.field] = col.align;
      }

      if (col.customButtons) {
        rowdata.settings_customButtons[col.field] = col.customButtons;
      }

      // if a link is set, add to settings field as key and
      // which property value it will be set as a link
      if (col.asLink) {
        rowdata.settings_asLink[col.field] = true;
      }

      if (col.asButton) {
        rowdata.settings_asButton[col.field] = true;
      }

      if (col.asMultipleButtons) {
        rowdata.settings_asMultipleButtons[col.field] = true;
      }

      if (col.selectAll) {
        rowdata.settings_selectAll[col.field] = {
          emit: col.emit,
          value: check_selectAll_dictionary(row.guid)
        };
      }
    });
    return rowdata;
  })
};


const sortColumn = (fieldName: string, sortOrder: string) => {
  sortOrderTracker.value = {};

  if (sortOrder === 'asc') {
    sortOrderTracker.value[fieldName] = 'desc';
  } else {
    sortOrderTracker.value[fieldName] = 'asc';
  }

  /**
   * Triggers when column label is clicked.
   *
   * @property {string} fieldName returns name of field.
   * @property {string} sortOrder returns order of sort.
   */
  emit('sortColumn', { fieldName, sortOrder });
};

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
