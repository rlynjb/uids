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
              <span
                v-if="row.settings_link[rowKey]"
                class="row-link text-primary"
                @click="goto(row.raw)"
              >
                {{ rowVal }}
              </span>

              <span v-else-if="String(rowKey) === 'created'">
                {{ formatDate(rowVal) }}
              </span>

              <div
                v-else-if="row.settings_button[rowKey]"
              >
                <button
                  v-for="(btn, btnIndex) in row.settings_button[rowKey]"
                  :key="'btn-'+btnIndex"
                  class="btn-link mr-2"
                  @click="() => $emit(btn.emit, row.raw)"
                >
                  <span
                    v-if="btn.icon"
                    class="ml-2 text-lg"
                    :class="btn.icon"
                  />
                  <span
                    v-if="btn.label"
                  >
                    {{ btn.label }}
                  </span>
                </button>
              </div>

              <span v-else>
                {{ rowVal }}
              </span>
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
  defineProps,
  defineEmits,
  defineExpose,
} from 'vue'

interface IColumn {
  name: string;
  field: string;
  align?: string;
  sortable?: boolean;
  link?: string; // field name of row.data we want to be as link value
  button?: any[];
}

/**
 * A lightweight Table UI component built with 2Dimensional Array and Hash Object.
 * TODO:
 * - format column data
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
   *    link: true || false,
   *    button: [
   *      {
   *        label: '',
   *        icon: '',
   *        emit: ''
   *      }
   *    ]
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
      settings_link: {}, // field_name/column: row_value (object || string)
      settings_button: {}, // field_name/column: row_value (object || string)
      settings_align: {}, // field_name/column: row_value (object || string)
    };

    props.columns.forEach((col: any) => {
      rowdata.display[col.field] = row[col.field]

      // if a link is set, add to settings field as key and
      // which property value it will be set as a link
      if (col.link) {
        rowdata.settings_link[col.field] = row[col.link]
      }

      if (col.button) {
        rowdata.settings_button[col.field] = col.button
      }

      if (col.align) {
        rowdata.settings_align[col.field] = col.align
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

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('default', { dateStyle: 'long' }).format(date)
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
</style>


<docs lang="md">
  ##### Set basic column settings
  ```js
  const columns = [
    {
      name: "Title",
      field: "title"
    },
    {
      name: "Date",
      field: "date"
    }
  ]
  const data = [
    {
      title: "sample title text",
      date: "00/00/00"
    }
  ]

  <TableUI
    :columns="columns"
    :rows="data"
  />
  ```

  ##### Make a data record a link
  ```js
  const columns = [
    {
      name: "Title",
      field: "title",
      link: "id"
    },
    {
      name: "Date",
      field: "date"
    }
  ]
  const data = [
    {
      id: "asd123",
      title: "clickable title text",
      date: "00/00/00"
    }
  ]
  /**
   *  @returns {string} id - The id of data pass to component
   */
  const gotoLink = (id) => {
    // do stuff here
  }

  <TableUI
    :columns="columns"
    :rows="data"
    @goto="gotoLink"
  />
  ```

  ##### Add buttons


  ##### Text align a data record
  ```js
  const columns = [
    {
      name: "Title",
      field: "title"
    },
    {
      name: "Date",
      field: "date"
    },
    {
      name: "Complete",
      field: "complete",
      align: "text-center"
    }
  ]
  const data = [
    {
      title: "sample title text",
      date: "00/00/00",
      complete: "90%"
    }
  ]

  <TableUI
    :columns="columns"
    :rows="data"
  />
  ```


  ##### Make a column sortable.


</docs>
