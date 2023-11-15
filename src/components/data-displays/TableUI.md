##### Basic Usage
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

##### Display SVG Icon button
```js
const columns = [
  {
    name: "Title",
    field: "title",
  },
  {
    name: "Date",
    field: "date"
  },
  {
    name: "Actions",
    field: "actions",
    align: "text-center",
    button: [
      {
        emit: "delete-item",
        iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>`,
      }
    ],
  }
]
const data = [
  {
    id: "asd123",
    title: "title text",
    date: "00/00/00"
  }
]
/**
 *  @returns {object} objVal - The raw data of item
 */
const deleteItem = (objVal) => {
  // do stuff here
}

<TableUI
  :columns="columns"
  :rows="data"
  @delete-item="deleteItem"
/>
```


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
```js
const columns = [
  {
    name: "Title",
    field: "title",
    sortable: true,
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

/**
 *  @returns {object} { fieldName, sortOrder }
 *    fieldName - name of field that need to be sorted
 *    sortOrder - order of sort: asc, desc
 */
const sortColumn = ({ fieldName, sortOrder}) => {
  // do stuff here
}

<TableUI
  :columns="columns"
  :rows="data"
  @sort-column="sortColumn"
/>
```
