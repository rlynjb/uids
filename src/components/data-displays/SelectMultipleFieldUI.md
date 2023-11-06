  ##### Basic usage
  ```js
  import { ref } from "vue"

  const fruits = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Lychee", value: "lychee" },
    { label: "Dragon Fruit", value: "dragon_fruit" }
  ]
  const selected = ref([])
  const updateBasket = (fruits) => {
    selected.value = fruits
  }


  <SelectMultipleFieldUI
    label="Fruit Basket"
    placeholder="add fruit(s)"
    :options="fruits"
    @update="updateBasket"
    :selected="selected"
  />
  ```

  ##### Layout options in 1 or more columns


  ##### Disable field


  ##### Disable some options


  ##### Display error status
