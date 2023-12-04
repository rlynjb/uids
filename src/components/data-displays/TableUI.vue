<template>
  <div class="table-widget w-full overflow-x-scroll grid-cols-6">
    <div class="cols-span-6 mb-4">
      <!-- @slot Use this to display table filters, buttons, title, etc -->
      <slot name="filters" />
    </div>
    
    <div class="cols-span-6">
      <table
        v-if="rows.length"
        class="table-auto table-zebra table-normal shadow"
      >
        <thead
          class="bg-secondary text-white text-left"
        >
          <tr>
            <th
              v-for="(col, colIndex) in columns"
              :key="'col' + colIndex"
              class="pt-3 pb-3 pl-4 pr-4"
              :class="(col.align) ? col.align : ''"
            >
              <div 
                v-if="col.sortable"
                class="cursor-pointer sortable"
                @click="sortColumn(col.field, sortOrderTracker[col.field])"
              >
                {{ col.name }}
                <span
                  v-if="sortOrderTracker[col.field]"
                  :class="'icon ' + (sortOrderTracker[col.field] === 'asc' ? 'pg-arrow_up' : 'pg-arrow_down')"
                />
              </div>

              <div v-else>
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
              v-for="(rowVal, rowKey) in row.display"
              :key="'rowkey' + rowKey"
              class="pt-3 pb-3 pl-4 pr-4"
              :class="(row.settings_align[rowKey]) ? row.settings_align[rowKey] : ''"
            >
              <!----- Value as Link ----->
              <span
                v-if="row.settings_asLink[rowKey]"
                class="row-link text-primary"
                @click="goto(row.raw)"
              >
                {{ rowVal }}
              </span>
              <!----- end ----->


              <!----- Value as Button ----->
              <button
                v-else-if="row.settings_asButton[rowKey]"
                class="btn"
                :class="row.settings_asButton[rowKey]"
                @click="goto(row.raw)"
              >
                {{ rowVal }}
              </button>
              <!----- end ----->


              <!----- Value as Multiple Buttons ----->
              <div v-else-if="row.settings_asMultipleButtons[rowKey]">
                <button
                  v-for="(btnVal, btnIndex) in rowVal"
                  :key="'multipleButton-'+btnIndex"
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
                v-else-if="row.settings_customButtons[rowKey]"
              >
                <button
                  v-for="(btn, btnIndex) in row.settings_customButtons[rowKey]"
                  :key="'btn-'+btnIndex"
                  class="btn-link mr-2"
                  :disabled="btn.disable"
                  @click="() => $emit(btn.emit, row.raw)"
                >
                  <span
                    v-if="btn.iconSvg"
                    class="ml-2 mr-2 text-lg inline-block align-middle"
                    v-html="btn.iconSvg"
                  />
                  <span
                    v-if="btn.iconClass"
                    class="ml-2 mr-2 text-lg inline-block align-middle"
                    :class="btn.iconClass"
                  />
                  <span
                    v-if="btn.label"
                  >
                    {{ btn.label }}
                  </span>
                </button>
              </div>
              <!----- end ----->


              <!----- Default Value ----->
              <span v-else>
                {{ rowVal }}
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
import {
  onMounted,
  ref,
  watch,
  toRefs,
} from 'vue'

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
    type: Array as PropType<IColumn[]>,
    default: () => {
      return [
        {
          name: 'Column 1',
          field: 'Column1',
        }
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
        }
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
})
const {
  columns,
  rows,
} = toRefs(props)
const emit = defineEmits(['goto', 'sortColumn', ''])

const l_rows = ref<any[]>([])
const sortOrderTracker = ref({}) as any

watch(
  () => props.rows,
  () => {
    matchRowDataByColumnField()
  }
)

onMounted(() => {
  matchRowDataByColumnField()

  sortOrderTracker.value = {
    [props.sortField]: props.sortOrder
  }
})

const goto = (val: any) => {
  /**
   * Triggers when the link field is clicked.
   * 
   * @property {object} val returns a raw/complete data object of row item.
   */
  emit('goto', val)
}

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
    };

    props.columns.forEach((col: any) => {
      rowdata.display[col.field] = row[col.field]

      if (col.align) {
        rowdata.settings_align[col.field] = col.align
      }

      if (col.customButtons) {
        rowdata.settings_customButtons[col.field] = col.customButtons
      }

      // if a link is set, add to settings field as key and
      // which property value it will be set as a link
      if (col.asLink) {
        rowdata.settings_asLink[col.field] = true
      }

      if (col.asButton) {
        rowdata.settings_asButton[col.field] = true
      }

      if (col.asMultipleButtons) {
        rowdata.settings_asMultipleButtons[col.field] = true
      }
    })
    return rowdata
  })
}

const sortColumn = (fieldName: string, sortOrder: string) => {
  sortOrderTracker.value = {}

  if (sortOrder === 'asc') {
    sortOrderTracker.value[fieldName] = 'desc'
  } else {
    sortOrderTracker.value[fieldName] = 'asc'
  }

  /**
   * Triggers when column label is clicked.
   * 
   * @property {string} fieldName returns name of field.
   * @property {string} sortOrder returns order of sort.
   */
  emit('sortColumn', { fieldName, sortOrder });
}

defineExpose({
  goto,
})
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
  font-size: 0.875rem;
  line-height: 1.2rem;
  vertical-align: text-top;
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
