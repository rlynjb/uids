/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@vue/compiler-sfc/dist sync recursive":
/*!***************************************************!*\
  !*** ./node_modules/@vue/compiler-sfc/dist/ sync ***!
  \***************************************************/
/***/ (function(module) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nwebpackEmptyContext.id = \"./node_modules/@vue/compiler-sfc/dist sync recursive\";\nmodule.exports = webpackEmptyContext;\n\n//# sourceURL=webpack://uids/./node_modules/@vue/compiler-sfc/dist/_sync?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppButton.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppButton.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sizeMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sizeMixin */ \"./src/components/sizeMixin.js\");\n/* harmony import */ var _sizeMixin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sizeMixin__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'app-button',\n  mixins: [(_sizeMixin__WEBPACK_IMPORTED_MODULE_0___default())],\n  props: {\n    /**\n     * Sets the button font color\n     */\n    color: {\n      type: String,\n      default: 'black'\n    },\n    /** Sets background color of the button\n     * @since 1.2.0\n     */\n    background: {\n      type: String,\n      default: 'white'\n    },\n    /** @deprecated Use color instead */\n    oldColor: String\n  },\n  computed: {\n    styles() {\n      return {\n        'font-size': this.size,\n        color: this.color,\n        background: this.background\n      };\n    }\n  },\n  methods: {\n    handleClick(e) {\n      /** Triggered when button is clicked\n       * @event click\n       * @type {Event}\n       */\n      this.$emit('click', e);\n\n      /** Event for Alligator's example\n       * @event gator\n       * @type {Event}\n       */\n      this.$emit('gator', e);\n    }\n  }\n});\n\n//# sourceURL=webpack://uids/./src/components/AppButton.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/data-displays/TableUI.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/data-displays/TableUI.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//import type { PropType } from 'vue';\n/*\ninterface IColumn {\n  name: string;\n  field: string;\n  align?: string;\n  sortable?: boolean;\n  link?: string; // field name of row.data we want to be as link value\n  button?: any[];\n}\n*/\n/**\n * Table UI component built with 2Dimensional Array\n * @displayName TableUI\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    /**\n     * The column available settings for table.\n     * @example\n     * columns: [\n     *  {\n     *    name: '', // readable label of object property from API respond object\n     *    field: '', // name of object property from API respond object\n     *    align: 'text-center' || 'text-right',\n     *    sortable: true || false,\n     *    link: '',\n     *    button: [\n     *      {\n     *        label: '',\n     *        emit: ''\n     *      }\n     *    ]\n     *  }\n     * ]\n     */\n    columns: {\n      type: Array,\n      default: () => {\n        return [{\n          name: 'Column 1',\n          field: 'Column1'\n        }];\n      }\n    },\n    /**\n     * The content from API response object that will match field in each column.\n     */\n    rows: {\n      type: Array,\n      default: () => {\n        return [{\n          Column1: 'col1 valuasdasde'\n        }];\n      }\n    },\n    /**\n     * The initial column that is sortable.\n     * @values column field property value\n     */\n    sortField: {\n      type: String,\n      default: ''\n    },\n    /**\n     * The initial sorting order for column.\n     * @values asc, desc\n     */\n    sortOrder: {\n      type: String,\n      default: 'asc'\n    }\n  },\n  data() {\n    return {\n      l_rows: [],\n      reverse: false,\n      sortOrderTracker: {}\n    };\n  },\n  watch: {\n    rows() {\n      this.matchRowDataByColumnField();\n    }\n  },\n  mounted() {\n    this.matchRowDataByColumnField();\n    this.sortOrderTracker = {\n      [this.sortField]: this.sortOrder\n    };\n  },\n  methods: {\n    goto(val) {\n      /**\n       * Triggers when the link field is clicked.\n       * \n       * @property {object} val returns a raw/complete data object of row item.\n       */\n      this.$emit('goto', val);\n    },\n    matchRowDataByColumnField() {\n      this.l_rows = this.rows.map(row => {\n        const rowdata = {\n          display: {},\n          raw: {\n            ...row\n          },\n          settings_link: {},\n          // field_name/column: row_value (object || string)\n          settings_button: {},\n          // field_name/column: row_value (object || string)\n          settings_align: {} // field_name/column: row_value (object || string)\n        };\n\n        this.columns.forEach(col => {\n          rowdata.display[col.field] = row[col.field];\n\n          // if a link is set, add to settings field as key and\n          // which property value it will be set as a link\n          if (col.link) {\n            rowdata.settings_link[col.field] = row[col.link];\n          }\n          if (col.button) {\n            rowdata.settings_button[col.field] = col.button;\n          }\n          if (col.align) {\n            rowdata.settings_align[col.field] = col.align;\n          }\n        });\n        return rowdata;\n      });\n    },\n    sortColumn(fieldName, sortOrder) {\n      this.sortOrderTracker = {};\n      if (sortOrder === 'asc') {\n        this.sortOrderTracker[fieldName] = 'desc';\n      } else {\n        this.sortOrderTracker[fieldName] = 'asc';\n      }\n\n      /**\n       * Triggers when column label is clicked.\n       * \n       * @property {string} fieldName returns name of field.\n       * @property {string} sortOrder returns order of sort.\n       */\n      this.$emit('sortColumn', {\n        fieldName,\n        sortOrder\n      });\n    },\n    formatDate(dateString) {\n      const date = new Date(dateString);\n      return new Intl.DateTimeFormat('default', {\n        dateStyle: 'long'\n      }).format(date);\n    }\n  }\n});\n\n//# sourceURL=webpack://uids/./src/components/data-displays/TableUI.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppButton.vue?vue&type=template&id=266e9536":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppButton.vue?vue&type=template&id=266e9536 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"button\", {\n    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.styles),\n    onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" @slot Use this slot to place the button content \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, \"default\")], 4 /* STYLE */);\n}\n\n//# sourceURL=webpack://uids/./src/components/AppButton.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/data-displays/TableUI.vue?vue&type=template&id=5550c621":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/data-displays/TableUI.vue?vue&type=template&id=5550c621 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"table-widget w-full overflow-x-scroll grid-cols-6\"\n};\nconst _hoisted_2 = {\n  class: \"cols-span-6 mb-4\"\n};\nconst _hoisted_3 = {\n  class: \"cols-span-6\"\n};\nconst _hoisted_4 = {\n  key: 0,\n  class: \"table-auto table-zebra table-normal shadow\"\n};\nconst _hoisted_5 = {\n  class: \"bg-secondary text-white text-left\"\n};\nconst _hoisted_6 = [\"onClick\"];\nconst _hoisted_7 = {\n  key: 1\n};\nconst _hoisted_8 = [\"onClick\"];\nconst _hoisted_9 = {\n  key: 1\n};\nconst _hoisted_10 = {\n  key: 2\n};\nconst _hoisted_11 = [\"onClick\"];\nconst _hoisted_12 = {\n  key: 3\n};\nconst _hoisted_13 = {\n  key: 1,\n  class: \"m-14 text-center text-zinc-400\"\n};\nconst _hoisted_14 = {\n  class: \"col-span-6\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" @slot Use this to display table filters, buttons, title, etc \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, \"filters\")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [$props.rows.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"table\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"thead\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.columns, (col, colIndex) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"th\", {\n      key: 'col' + colIndex,\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(col.align ? col.align : '')\n    }, [col.sortable ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n      key: 0,\n      class: \"cursor-pointer sortable\",\n      onClick: $event => $options.sortColumn(col.field, $data.sortOrderTracker[col.field])\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(col.name) + \" \", 1 /* TEXT */), $data.sortOrderTracker[col.field] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"span\", {\n      key: 0,\n      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)('icon ' + ($data.sortOrderTracker[col.field] === 'asc' ? 'pg-arrow_up' : 'pg-arrow_down'))\n    }, null, 2 /* CLASS */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)], 8 /* PROPS */, _hoisted_6)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(col.name), 1 /* TEXT */))], 2 /* CLASS */);\n  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tbody\", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.l_rows, (row, rowIndex) => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"tr\", {\n      key: 'row' + rowIndex\n    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(row.display, (rowVal, rowKey) => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"td\", {\n        key: 'rowkey' + rowKey,\n        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(row.settings_align[rowKey] ? row.settings_align[rowKey] : '')\n      }, [row.settings_link[rowKey] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"span\", {\n        key: 0,\n        class: \"row-link\",\n        onClick: $event => $options.goto(row.settings_link[rowKey])\n      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rowVal), 9 /* TEXT, PROPS */, _hoisted_8)) : String(rowKey) === 'created' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"span\", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatDate(rowVal)), 1 /* TEXT */)) : row.settings_button[rowKey] ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_10, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(row.settings_button[rowKey], (btn, btnIndex) => {\n        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"button\", {\n          key: 'btn-' + btnIndex,\n          class: \"btn-link mr-2\",\n          onClick: () => _ctx.$emit(btn.emit, row.raw)\n        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(btn.label), 9 /* TEXT, PROPS */, _hoisted_11);\n      }), 128 /* KEYED_FRAGMENT */))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"span\", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(rowVal), 1 /* TEXT */))], 2 /* CLASS */);\n    }), 128 /* KEYED_FRAGMENT */))]);\n  }), 128 /* KEYED_FRAGMENT */))])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"h6\", _hoisted_13, \" No data available. \"))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" @slot Use this slot to display pagination, footer, etc \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, \"pagination\")])]);\n}\n\n//# sourceURL=webpack://uids/./src/components/data-displays/TableUI.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/components/sizeMixin.js":
/*!*************************************!*\
  !*** ./src/components/sizeMixin.js ***!
  \*************************************/
/***/ (function(module) {

eval("/**\n * @mixin\n */\nmodule.exports = {\n  props: {\n    /**\n     * Set size of the element\n     */\n    size: {\n      type: String,\n      default: '14px'\n    }\n  }\n};\n\n//# sourceURL=webpack://uids/./src/components/sizeMixin.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/data-displays/TableUI.vue?vue&type=style&index=0&id=5550c621&scope=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/data-displays/TableUI.vue?vue&type=style&index=0&id=5550c621&scope=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.table-widget table {\\n  width: 100%;\\n}\\n.table-widget th .sortable {\\n  color: #bcbcbc;\\n}\\n.table-widget td,\\n.table-widget th {\\n  @apply pt-3 pb-3 pl-4 pr-4;\\n  font-size: 0.875rem;\\n  line-height: 1.2rem;\\n  vertical-align: text-top;\\n}\\n\\n.table-widget table tbody tr {\\n  background-color: #fefefe;\\n}\\n.table-widget table tbody tr:nth-child(even) {\\n  background-color: #f9f9f9;\\n}\\n\\n.table-widget .row-link {\\n  @apply text-primary;\\n\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://uids/./src/components/data-displays/TableUI.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/components/AppButton.vue":
/*!**************************************!*\
  !*** ./src/components/AppButton.vue ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AppButton_vue_vue_type_template_id_266e9536__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppButton.vue?vue&type=template&id=266e9536 */ \"./src/components/AppButton.vue?vue&type=template&id=266e9536\");\n/* harmony import */ var _AppButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppButton.vue?vue&type=script&lang=js */ \"./src/components/AppButton.vue?vue&type=script&lang=js\");\n/* harmony import */ var _AppButton_vue_vue_type_custom_index_0_blockType_docs_lang_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppButton.vue?vue&type=custom&index=0&blockType=docs&lang=md */ \"./src/components/AppButton.vue?vue&type=custom&index=0&blockType=docs&lang=md\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n/* custom blocks */\n;\nif (typeof _AppButton_vue_vue_type_custom_index_0_blockType_docs_lang_md__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') (0,_AppButton_vue_vue_type_custom_index_0_blockType_docs_lang_md__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_AppButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_AppButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_AppButton_vue_vue_type_template_id_266e9536__WEBPACK_IMPORTED_MODULE_0__.render]])\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://uids/./src/components/AppButton.vue?");

/***/ }),

/***/ "./src/components/data-displays/TableUI.vue":
/*!**************************************************!*\
  !*** ./src/components/data-displays/TableUI.vue ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TableUI_vue_vue_type_template_id_5550c621__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableUI.vue?vue&type=template&id=5550c621 */ \"./src/components/data-displays/TableUI.vue?vue&type=template&id=5550c621\");\n/* harmony import */ var _TableUI_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableUI.vue?vue&type=script&lang=js */ \"./src/components/data-displays/TableUI.vue?vue&type=script&lang=js\");\n/* harmony import */ var _TableUI_vue_vue_type_style_index_0_id_5550c621_scope_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableUI.vue?vue&type=style&index=0&id=5550c621&scope=true&lang=css */ \"./src/components/data-displays/TableUI.vue?vue&type=style&index=0&id=5550c621&scope=true&lang=css\");\n/* harmony import */ var _TableUI_vue_vue_type_custom_index_0_blockType_docs_lang_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TableUI.vue?vue&type=custom&index=0&blockType=docs&lang=md */ \"./src/components/data-displays/TableUI.vue?vue&type=custom&index=0&blockType=docs&lang=md\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n/* custom blocks */\n\nif (typeof _TableUI_vue_vue_type_custom_index_0_blockType_docs_lang_md__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') (0,_TableUI_vue_vue_type_custom_index_0_blockType_docs_lang_md__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_TableUI_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_TableUI_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_TableUI_vue_vue_type_template_id_5550c621__WEBPACK_IMPORTED_MODULE_0__.render]])\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://uids/./src/components/data-displays/TableUI.vue?");

/***/ }),

/***/ "./src/components/AppButton.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./src/components/AppButton.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_41_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_41_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppButton.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppButton.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://uids/./src/components/AppButton.vue?");

/***/ }),

/***/ "./src/components/data-displays/TableUI.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./src/components/data-displays/TableUI.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_41_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableUI_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_41_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableUI_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TableUI.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/data-displays/TableUI.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://uids/./src/components/data-displays/TableUI.vue?");

/***/ }),

/***/ "./src/components/AppButton.vue?vue&type=template&id=266e9536":
/*!********************************************************************!*\
  !*** ./src/components/AppButton.vue?vue&type=template&id=266e9536 ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_41_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppButton_vue_vue_type_template_id_266e9536__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_41_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppButton_vue_vue_type_template_id_266e9536__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppButton.vue?vue&type=template&id=266e9536 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppButton.vue?vue&type=template&id=266e9536\");\n\n\n//# sourceURL=webpack://uids/./src/components/AppButton.vue?");

/***/ }),

/***/ "./src/components/data-displays/TableUI.vue?vue&type=template&id=5550c621":
/*!********************************************************************************!*\
  !*** ./src/components/data-displays/TableUI.vue?vue&type=template&id=5550c621 ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_41_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableUI_vue_vue_type_template_id_5550c621__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_41_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableUI_vue_vue_type_template_id_5550c621__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TableUI.vue?vue&type=template&id=5550c621 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/data-displays/TableUI.vue?vue&type=template&id=5550c621\");\n\n\n//# sourceURL=webpack://uids/./src/components/data-displays/TableUI.vue?");

/***/ }),

/***/ "./src/components/data-displays/TableUI.vue?vue&type=style&index=0&id=5550c621&scope=true&lang=css":
/*!*********************************************************************************************************!*\
  !*** ./src/components/data-displays/TableUI.vue?vue&type=style&index=0&id=5550c621&scope=true&lang=css ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_13_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableUI_vue_vue_type_style_index_0_id_5550c621_scope_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js??clonedRuleSet-13.use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TableUI.vue?vue&type=style&index=0&id=5550c621&scope=true&lang=css */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/data-displays/TableUI.vue?vue&type=style&index=0&id=5550c621&scope=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_13_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableUI_vue_vue_type_style_index_0_id_5550c621_scope_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_13_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableUI_vue_vue_type_style_index_0_id_5550c621_scope_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_13_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableUI_vue_vue_type_style_index_0_id_5550c621_scope_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_13_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_13_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_13_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableUI_vue_vue_type_style_index_0_id_5550c621_scope_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://uids/./src/components/data-displays/TableUI.vue?");

/***/ }),

/***/ "./src/components/AppButton.vue?vue&type=custom&index=0&blockType=docs&lang=md":
/*!*************************************************************************************!*\
  !*** ./src/components/AppButton.vue?vue&type=custom&index=0&blockType=docs&lang=md ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_vue_styleguidist_lib_loaders_docs_loader_js_node_modules_vue_cli_plugin_styleguidist_empty_object_loader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppButton_vue_vue_type_custom_index_0_blockType_docs_lang_md__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_styleguidist_lib_loaders_docs_loader_js_node_modules_vue_cli_plugin_styleguidist_empty_object_loader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AppButton_vue_vue_type_custom_index_0_blockType_docs_lang_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-styleguidist/lib/loaders/docs-loader.js!../../node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AppButton.vue?vue&type=custom&index=0&blockType=docs&lang=md */ \"./node_modules/vue-styleguidist/lib/loaders/docs-loader.js!./node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppButton.vue?vue&type=custom&index=0&blockType=docs&lang=md\");\n \n\n//# sourceURL=webpack://uids/./src/components/AppButton.vue?");

/***/ }),

/***/ "./src/components/data-displays/TableUI.vue?vue&type=custom&index=0&blockType=docs&lang=md":
/*!*************************************************************************************************!*\
  !*** ./src/components/data-displays/TableUI.vue?vue&type=custom&index=0&blockType=docs&lang=md ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_vue_styleguidist_lib_loaders_docs_loader_js_node_modules_vue_cli_plugin_styleguidist_empty_object_loader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableUI_vue_vue_type_custom_index_0_blockType_docs_lang_md__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_styleguidist_lib_loaders_docs_loader_js_node_modules_vue_cli_plugin_styleguidist_empty_object_loader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TableUI_vue_vue_type_custom_index_0_blockType_docs_lang_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-styleguidist/lib/loaders/docs-loader.js!../../../node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TableUI.vue?vue&type=custom&index=0&blockType=docs&lang=md */ \"./node_modules/vue-styleguidist/lib/loaders/docs-loader.js!./node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/data-displays/TableUI.vue?vue&type=custom&index=0&blockType=docs&lang=md\");\n \n\n//# sourceURL=webpack://uids/./src/components/data-displays/TableUI.vue?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/data-displays/TableUI.vue?vue&type=style&index=0&id=5550c621&scope=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-13.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/data-displays/TableUI.vue?vue&type=style&index=0&id=5550c621&scope=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TableUI.vue?vue&type=style&index=0&id=5550c621&scope=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/data-displays/TableUI.vue?vue&type=style&index=0&id=5550c621&scope=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"1807b304\", content, true, {\"sourceMap\":false,\"shadowMode\":false});\n\n//# sourceURL=webpack://uids/./src/components/data-displays/TableUI.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-13.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-13.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-13.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-styleguidist/lib/loaders/docs-loader.js!./node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppButton.vue?vue&type=custom&index=0&blockType=docs&lang=md":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-styleguidist/lib/loaders/docs-loader.js!./node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/AppButton.vue?vue&type=custom&index=0&blockType=docs&lang=md ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(Component) {\n        Component.options = Component.options || {}\n        Component.options.__docs = \"module.exports = {}\"\n      }\n\n//# sourceURL=webpack://uids/./src/components/AppButton.vue?./node_modules/vue-styleguidist/lib/loaders/docs-loader.js!./node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-styleguidist/lib/loaders/docs-loader.js!./node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/data-displays/TableUI.vue?vue&type=custom&index=0&blockType=docs&lang=md":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-styleguidist/lib/loaders/docs-loader.js!./node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/data-displays/TableUI.vue?vue&type=custom&index=0&blockType=docs&lang=md ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(Component) {\n        Component.options = Component.options || {}\n        Component.options.__docs = \"module.exports = {}\"\n      }\n\n//# sourceURL=webpack://uids/./src/components/data-displays/TableUI.vue?./node_modules/vue-styleguidist/lib/loaders/docs-loader.js!./node_modules/vue-cli-plugin-styleguidist/empty-object-loader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue|js|jsx!./src/components/AppButton.vue":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue|js|jsx!./src/components/AppButton.vue ***!
  \****************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\nif (false) {}\nvar requireMap = { 'vue': __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\") };\nvar requireInRuntimeBase = __webpack_require__(/*! ./node_modules/vue-styleguidist/lib/loaders/utils/client/requireInRuntime */ \"./node_modules/vue-styleguidist/lib/loaders/utils/client/requireInRuntime.js\");\nvar requireInRuntime = requireInRuntimeBase.bind(null, requireMap);\nvar evalInContextBase = __webpack_require__(/*! ./node_modules/vue-styleguidist/lib/loaders/utils/client/evalInContext */ \"./node_modules/vue-styleguidist/lib/loaders/utils/client/evalInContext.js\");\nvar evalInContext = evalInContextBase.bind(null, \n\t\"\", \n\tnull, null)\nmodule.exports = [\n    {\n        'type': 'markdown',\n        'content': 'This button is amazing, use it responsibly.\\n\\n## Examples\\n\\nOrange button:'\n    },\n    {\n        'type': 'code',\n        'content': '<app-button color=\"orange\">Push Me</app-button>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': '\\nconst Vue = require(\"vue\");const {pushScopeId: _pushScopeId, popScopeId: _popScopeId} = Vue\\nconst __sfc__ = (function() {;return {data:function(){return {};}}})()\\n  __sfc__.render = function() {const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue\\n\\nreturn function render(_ctx, _cache, $props, $setup, $data, $options) {\\n  const _component_app_button = _resolveComponent(\"app-button\")\\n\\n  return (_openBlock(), _createBlock(_component_app_button, { color: \"orange\" }, {\\n    default: _withCtx(() => [\\n      _createTextVNode(\"Push Me\")\\n    ]),\\n    _: 1 /* STABLE */\\n  }))\\n}}\\n\\n\\n__sfc__.render = __sfc__.render()\\n\\nreturn __sfc__',\n            'style': void 0,\n            'setup': false,\n            'scopeId': void 0,\n            'raw': {\n                'script': ';return {data:function(){return {};}}',\n                'style': void 0,\n                'template': '<app-button color=\"orange\">Push Me</app-button>',\n                'setup': false\n            }\n        }\n    },\n    {\n        'type': 'markdown',\n        'content': 'Ugly button with pink font and blue background:'\n    },\n    {\n        'type': 'code',\n        'content': '<app-button color=\"pink\" background=\"blue\">\\n\\tUgly button\\n</app-button>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': '\\nconst Vue = require(\"vue\");const {pushScopeId: _pushScopeId, popScopeId: _popScopeId} = Vue\\nconst __sfc__ = (function() {;return {data:function(){return {};}}})()\\n  __sfc__.render = function() {const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue\\n\\nreturn function render(_ctx, _cache, $props, $setup, $data, $options) {\\n  const _component_app_button = _resolveComponent(\"app-button\")\\n\\n  return (_openBlock(), _createBlock(_component_app_button, {\\n    color: \"pink\",\\n    background: \"blue\"\\n  }, {\\n    default: _withCtx(() => [\\n      _createTextVNode(\" Ugly button \")\\n    ]),\\n    _: 1 /* STABLE */\\n  }))\\n}}\\n\\n\\n__sfc__.render = __sfc__.render()\\n\\nreturn __sfc__',\n            'style': void 0,\n            'setup': false,\n            'scopeId': void 0,\n            'raw': {\n                'script': ';return {data:function(){return {};}}',\n                'style': void 0,\n                'template': '<app-button color=\"pink\" background=\"blue\">\\n\\tUgly button\\n</app-button>',\n                'setup': false\n            }\n        }\n    },\n    {\n        'type': 'markdown',\n        'content': 'Button containing custom tags:'\n    },\n    {\n        'type': 'code',\n        'content': '<app-button>\\n\\tText with <b>bold</b>\\n</app-button>',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': '\\nconst Vue = require(\"vue\");const {pushScopeId: _pushScopeId, popScopeId: _popScopeId} = Vue\\nconst __sfc__ = (function() {;return {data:function(){return {};}}})()\\n  __sfc__.render = function() {const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue\\n\\nconst _hoisted_1 = /*#__PURE__*/_createElementVNode(\"b\", null, \"bold\", -1 /* HOISTED */)\\n\\nreturn function render(_ctx, _cache, $props, $setup, $data, $options) {\\n  const _component_app_button = _resolveComponent(\"app-button\")\\n\\n  return (_openBlock(), _createBlock(_component_app_button, null, {\\n    default: _withCtx(() => [\\n      _createTextVNode(\" Text with \"),\\n      _hoisted_1\\n    ]),\\n    _: 1 /* STABLE */\\n  }))\\n}}\\n\\n\\n__sfc__.render = __sfc__.render()\\n\\nreturn __sfc__',\n            'style': void 0,\n            'setup': false,\n            'scopeId': void 0,\n            'raw': {\n                'script': ';return {data:function(){return {};}}',\n                'style': void 0,\n                'template': '<app-button>\\n\\tText with <b>bold</b>\\n</app-button>',\n                'setup': false\n            }\n        }\n    }\n]\n\n//# sourceURL=webpack://uids/./src/components/AppButton.vue?./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue%7Cjs%7Cjsx");

/***/ }),

/***/ "./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue|js|jsx!./src/components/data-displays/TableUI.vue":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue|js|jsx!./src/components/data-displays/TableUI.vue ***!
  \****************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\nif (false) {}\nvar requireMap = { 'vue': __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\") };\nvar requireInRuntimeBase = __webpack_require__(/*! ./node_modules/vue-styleguidist/lib/loaders/utils/client/requireInRuntime */ \"./node_modules/vue-styleguidist/lib/loaders/utils/client/requireInRuntime.js\");\nvar requireInRuntime = requireInRuntimeBase.bind(null, requireMap);\nvar evalInContextBase = __webpack_require__(/*! ./node_modules/vue-styleguidist/lib/loaders/utils/client/evalInContext */ \"./node_modules/vue-styleguidist/lib/loaders/utils/client/evalInContext.js\");\nvar evalInContext = evalInContextBase.bind(null, \n\t\"\", \n\tnull, null)\nmodule.exports = [\n    {\n        'type': 'markdown',\n        'content': '### How to use component.\\n\\nHow to set basic column settings. name and field properties.'\n    },\n    {\n        'type': 'code',\n        'content': '<TableUI />',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': '\\nconst Vue = require(\"vue\");const {pushScopeId: _pushScopeId, popScopeId: _popScopeId} = Vue\\nconst __sfc__ = (function() {;return {data:function(){return {};}}})()\\n  __sfc__.render = function() {const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue\\n\\nreturn function render(_ctx, _cache, $props, $setup, $data, $options) {\\n  const _component_TableUI = _resolveComponent(\"TableUI\")\\n\\n  return (_openBlock(), _createBlock(_component_TableUI))\\n}}\\n\\n\\n__sfc__.render = __sfc__.render()\\n\\nreturn __sfc__',\n            'style': void 0,\n            'setup': false,\n            'scopeId': void 0,\n            'raw': {\n                'script': ';return {data:function(){return {};}}',\n                'style': void 0,\n                'template': '<TableUI />',\n                'setup': false\n            }\n        }\n    },\n    {\n        'type': 'markdown',\n        'content': 'How to make a data record a link.\\nHow to add a button.\\nHow to text align a data record.\\nHow to make a column sortable.'\n    },\n    {\n        'type': 'code',\n        'content': '<TableUI />',\n        'settings': {},\n        'evalInContext': evalInContext.bind(null, requireInRuntime.bind(null, null)),\n        'compiled': {\n            'script': '\\nconst Vue = require(\"vue\");const {pushScopeId: _pushScopeId, popScopeId: _popScopeId} = Vue\\nconst __sfc__ = (function() {;return {data:function(){return {};}}})()\\n  __sfc__.render = function() {const { resolveComponent: _resolveComponent, openBlock: _openBlock, createBlock: _createBlock } = Vue\\n\\nreturn function render(_ctx, _cache, $props, $setup, $data, $options) {\\n  const _component_TableUI = _resolveComponent(\"TableUI\")\\n\\n  return (_openBlock(), _createBlock(_component_TableUI))\\n}}\\n\\n\\n__sfc__.render = __sfc__.render()\\n\\nreturn __sfc__',\n            'style': void 0,\n            'setup': false,\n            'scopeId': void 0,\n            'raw': {\n                'script': ';return {data:function(){return {};}}',\n                'style': void 0,\n                'template': '<TableUI />',\n                'setup': false\n            }\n        }\n    }\n]\n\n//# sourceURL=webpack://uids/./src/components/data-displays/TableUI.vue?./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue%7Cjs%7Cjsx");

/***/ }),

/***/ "./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js!./src/components/AppButton.vue":
/*!***************************************************************************************************!*\
  !*** ./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js!./src/components/AppButton.vue ***!
  \***************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n\t\tif (false) {}\n\n\t\tmodule.exports = {\n    'description': '',\n    'tags': {\n        'mixin': [{\n                'description': true,\n                'title': 'mixin'\n            }]\n    },\n    'exportName': 'default',\n    'displayName': 'app-button',\n    'docsBlocks': ['This button is amazing, use it responsibly.\\n\\n## Examples\\n\\nOrange button:\\n\\n```jsx\\n<app-button color=\"orange\">Push Me</app-button>\\n```\\n\\nUgly button with pink font and blue background:\\n\\n```jsx\\n<app-button color=\"pink\" background=\"blue\">\\n\\tUgly button\\n</app-button>\\n```\\n\\nButton containing custom tags:\\n\\n```jsx\\n<app-button>\\n\\tText with <b>bold</b>\\n</app-button>\\n```'],\n    'expose': void 0,\n    'props': [\n        {\n            'name': 'background',\n            'description': 'Sets background color of the button',\n            'tags': {\n                'since': [{\n                        'description': '1.2.0',\n                        'title': 'since'\n                    }]\n            },\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': '\\'white\\''\n            }\n        },\n        {\n            'name': 'color',\n            'description': 'Sets the button font color',\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': '\\'black\\''\n            }\n        },\n        {\n            'name': 'oldColor',\n            'tags': {\n                'deprecated': [{\n                        'description': 'Use color instead',\n                        'title': 'deprecated'\n                    }]\n            },\n            'type': { 'name': 'string' }\n        },\n        {\n            'name': 'size',\n            'description': 'Set size of the element',\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': '\\'14px\\''\n            }\n        }\n    ],\n    'events': {\n        'click': {\n            'name': 'click',\n            'description': 'Triggered when button is clicked',\n            'type': { 'names': ['Event'] }\n        },\n        'gator': {\n            'name': 'gator',\n            'description': 'Event for Alligator\\'s example',\n            'type': { 'names': ['Event'] }\n        }\n    },\n    'methods': void 0,\n    'slots': {\n        'default': {\n            'name': 'default',\n            'description': 'Use this slot to place the button content'\n        }\n    },\n    'sourceFiles': [\n        '/Users/rlyn/Public/uids/src/components/AppButton.vue',\n        '/Users/rlyn/Public/uids/src/components/sizeMixin.js'\n    ],\n    'example': __webpack_require__(/*! !!./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue|js|jsx!./src/components/AppButton.vue */ \"./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue|js|jsx!./src/components/AppButton.vue\"),\n    'examples': null\n}\n\t\n\n//# sourceURL=webpack://uids/./src/components/AppButton.vue?./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js");

/***/ }),

/***/ "./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js!./src/components/data-displays/TableUI.vue":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js!./src/components/data-displays/TableUI.vue ***!
  \***************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n\t\tif (false) {}\n\n\t\tmodule.exports = {\n    'description': 'Table UI component built with 2Dimensional Array',\n    'displayName': 'TableUI',\n    'tags': {},\n    'exportName': 'default',\n    'docsBlocks': ['### How to use component.\\n\\n  How to set basic column settings. name and field properties.\\n  \\n  ```js\\n  <TableUI />\\n  ```\\n\\n  How to make a data record a link.\\n  How to add a button.\\n  How to text align a data record.\\n  How to make a column sortable.\\n\\n  ```js\\n  <TableUI />\\n  ```'],\n    'expose': void 0,\n    'props': [\n        {\n            'name': 'columns',\n            'description': 'The column available settings for table.',\n            'tags': {\n                'example': [{\n                        'description': 'columns: [\\n {\\n   name: \\'\\', // readable label of object property from API respond object\\n   field: \\'\\', // name of object property from API respond object\\n   align: \\'text-center\\' || \\'text-right\\',\\n   sortable: true || false,\\n   link: \\'\\',\\n   button: [\\n     {\\n       label: \\'\\',\\n       emit: \\'\\'\\n     }\\n   ]\\n }\\n]',\n                        'title': 'example'\n                    }]\n            },\n            'type': { 'name': 'array' },\n            'defaultValue': {\n                'func': false,\n                'value': '[\\n  {\\n    name: \\'Column 1\\',\\n    field: \\'Column1\\',\\n  }\\n]'\n            }\n        },\n        {\n            'name': 'rows',\n            'description': 'The content from API response object that will match field in each column.',\n            'type': { 'name': 'array' },\n            'defaultValue': {\n                'func': false,\n                'value': '[\\n  {\\n    Column1: \\'col1 valuasdasde\\',\\n  }\\n]'\n            }\n        },\n        {\n            'name': 'sortField',\n            'description': 'The initial column that is sortable.',\n            'tags': {},\n            'values': ['column field property value'],\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': '\\'\\''\n            }\n        },\n        {\n            'name': 'sortOrder',\n            'description': 'The initial sorting order for column.',\n            'tags': {},\n            'values': [\n                'asc',\n                'desc'\n            ],\n            'type': { 'name': 'string' },\n            'defaultValue': {\n                'func': false,\n                'value': '\\'asc\\''\n            }\n        }\n    ],\n    'events': {\n        '<undefined>': { 'name': '<undefined>' },\n        'goto': {\n            'name': 'goto',\n            'description': 'Triggers when the link field is clicked.',\n            'type': { 'names': ['undefined'] },\n            'properties': [{\n                    'type': { 'names': ['object'] },\n                    'name': 'val',\n                    'description': 'returns a raw/complete data object of row item.'\n                }]\n        },\n        'sortColumn': {\n            'name': 'sortColumn',\n            'description': 'Triggers when column label is clicked.',\n            'type': { 'names': ['undefined'] },\n            'properties': [\n                {\n                    'type': { 'names': ['string'] },\n                    'name': 'fieldName',\n                    'description': 'returns name of field.'\n                },\n                {\n                    'type': { 'names': ['string'] },\n                    'name': 'sortOrder',\n                    'description': 'returns order of sort.'\n                }\n            ]\n        }\n    },\n    'methods': void 0,\n    'slots': {\n        'filters': {\n            'name': 'filters',\n            'description': 'Use this to display table filters, buttons, title, etc'\n        },\n        'pagination': {\n            'name': 'pagination',\n            'description': 'Use this slot to display pagination, footer, etc'\n        }\n    },\n    'sourceFiles': ['/Users/rlyn/Public/uids/src/components/data-displays/TableUI.vue'],\n    'example': __webpack_require__(/*! !!./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue|js|jsx!./src/components/data-displays/TableUI.vue */ \"./node_modules/vue-styleguidist/lib/loaders/examples-loader.js?customLangs=vue|js|jsx!./src/components/data-displays/TableUI.vue\"),\n    'examples': null\n}\n\t\n\n//# sourceURL=webpack://uids/./src/components/data-displays/TableUI.vue?./node_modules/vue-styleguidist/lib/loaders/vuedoc-loader.js");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "build/" + chunkId + "." + "25a9c96e" + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "uids:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkuids"] = self["webpackChunkuids"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["chunk-vendors"], function() { return __webpack_require__("./node_modules/vue-styleguidist/lib/client/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;