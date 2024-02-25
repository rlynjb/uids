let private_rows = [] as any[]
let private_columns = [] as any[]

let private_sortOrderTracker = {} as any
let private_settings_selectAll_dictionary = {} as any


export const getSortOrder = (field: string) => {
  return private_sortOrderTracker[field]
}

export const setSortOrder = (field: string, order: string) => {
  private_sortOrderTracker = {
    [field]: order,
  }
}

export const getSortOrderTracker = () => {
  return private_sortOrderTracker
}

export const getRows = () => {
  return private_rows
}

export const getToggleSelectAllDictionary = () => {
  return private_settings_selectAll_dictionary
}


/*
  @param rows [object] An array of objects containing row data
  @param columns [object] An array of objects containing column data

  @return private_rows [object] An array of mapped objects
*/
export const matchRowDataByColumnField = (
  rows: any[],
  columns: any[],
  private_lookup?: any
) => {
  private_columns = columns

  private_rows = rows.map((row: any) => {
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

    private_columns.forEach((col: any) => {
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
          value: check_selectAll_dictionary(row.guid, private_lookup)
        }
      }
    })
    return rowdata
  })

  return private_rows
}


/*
  Gets called when user clicks on column header to sort data

  @param fieldName string Field or Column that is sortable
  @param sortOrder string Sort order value to be set on a column
*/
export const sortColumn = (fieldName: string, sortOrder: string) => {
  private_sortOrderTracker = {}

  if (sortOrder === 'asc') {
    private_sortOrderTracker[fieldName] = 'desc'
  } else {
    private_sortOrderTracker[fieldName] = 'asc'
  }
}


/*
  @param guidKey string A unique ID used as key
  @param private_lookup object An object temporarily storing selected items used inside component only

  return true | false boolean Indicates if object exist in dictionary look up
*/
const check_selectAll_dictionary = (guidKey: any, private_lookup?: any) => {
  return private_lookup[guidKey] !== undefined
    ? true
    : false
}


/*
  Get called when we want to un/selected item and update dictionary

  @param item object Containing item data
*/
export const update_selectAll_dictionary = (itemObj: any) => {
  // update emitted public data and local/private data used within component
  if (
    private_settings_selectAll_dictionary[itemObj.raw.guid] !== undefined
  ) {
    delete private_settings_selectAll_dictionary[itemObj.raw.guid]

    return
  }
  private_settings_selectAll_dictionary[itemObj.raw.guid] = itemObj
}


/*
  Called when we want to toggle data/records as select all or unselect all

  @param selectAll_value boolean Triggers toggle
  @param private_rows [object] An array of objects containing records/data
  @param private_columns [object] An array of objects of columns containing fields and settings

  @return l_rows [object] An array of objects with new Select All value
*/
export const toggleSelectAll = (selectAll?: boolean) => {
  if (selectAll) {
    // set all checkboxes to TRUE to visually signify all items are selected
    private_rows.forEach((row: any) => {
      private_columns.forEach((col: any) => {
        if (col.selectAll) {
          row.settings_selectAll[col.field] = {
            emit: col.emit,
            value: true
          }
        }
      })
      // add all current items to private_settings_selectAll_dictionary
      private_settings_selectAll_dictionary[row.raw.guid] = row;
    })
  }

  if (!selectAll) {
    // set all checkboxes to FALSE to visually signify all items are selected
    private_rows.forEach((row: any) => {
      private_columns.forEach((col: any) => {
        if (col.selectAll) {
          row.settings_selectAll[col.field] = {
            emit: col.emit,
            value: false
          }
        }
      })
      // clear all current items to private_settings_selectAll_dictionary
      if (private_settings_selectAll_dictionary[row.raw.guid] !== undefined) {
        delete private_settings_selectAll_dictionary[row.raw.guid]
      }
    })
  }
}