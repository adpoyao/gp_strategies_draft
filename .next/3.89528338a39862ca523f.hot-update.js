webpackHotUpdate(3,{

/***/ "./actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search__ = __webpack_require__("./actions/search.js");
/* unused harmony reexport namespace */


/***/ }),

/***/ "./actions/search.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return updateSearchTerm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addStatusFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addContentTypeFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addTopicFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return removeStatusFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeContentTypeFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return removeTopicFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return toggleSavedSearch; });
/* unused harmony export toggleShowFavorites */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return toggleFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return clearFilters; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actionType__ = __webpack_require__("./actions/actionType.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



var updateSearchTerm = function updateSearchTerm(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionType__["l" /* UPDATE_SEARCH_TERM */],
    data: data
  };
};

var addStatusFilter = function addStatusFilter(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionType__["b" /* ADD_STATUS_FILTER */],
    data: data
  };
};

var addContentTypeFilter = function addContentTypeFilter(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionType__["a" /* ADD_CONTENT_TYPE_FILTER */],
    data: data
  };
};

var addTopicFilter = function addTopicFilter(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionType__["c" /* ADD_TOPIC_FILTER */],
    data: data
  };
};

var removeStatusFilter = function removeStatusFilter(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionType__["f" /* REMOVE_STATUS_FILTER */],
    data: data
  };
};

var removeContentTypeFilter = function removeContentTypeFilter(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionType__["e" /* REMOVE_CONTENT_TYPE_FILTER */],
    data: data
  };
};

var removeTopicFilter = function removeTopicFilter(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionType__["g" /* REMOVE_TOPIC_FILTER */],
    data: data
  };
};

var toggleSavedSearch = function toggleSavedSearch(boolean) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionType__["j" /* TOGGLE_SAVED_SEARCH */],
    boolean: boolean
  };
};

var toggleShowFavorites = function toggleShowFavorites(boolean) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionType__["SHOW_FAVORITES"],
    boolean: boolean
  };
};

var toggleFilter = function toggleFilter(id) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionType__["i" /* TOGGLE_FILTER */],
    id: id
  };
};

var clearFilters = function clearFilters() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionType__["d" /* CLEAR_FILTERS */]
  };
};
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(updateSearchTerm, 'updateSearchTerm', '/Users/eddieyao/Desktop/gp_draft/actions/search.js');
  reactHotLoader.register(addStatusFilter, 'addStatusFilter', '/Users/eddieyao/Desktop/gp_draft/actions/search.js');
  reactHotLoader.register(addContentTypeFilter, 'addContentTypeFilter', '/Users/eddieyao/Desktop/gp_draft/actions/search.js');
  reactHotLoader.register(addTopicFilter, 'addTopicFilter', '/Users/eddieyao/Desktop/gp_draft/actions/search.js');
  reactHotLoader.register(removeStatusFilter, 'removeStatusFilter', '/Users/eddieyao/Desktop/gp_draft/actions/search.js');
  reactHotLoader.register(removeContentTypeFilter, 'removeContentTypeFilter', '/Users/eddieyao/Desktop/gp_draft/actions/search.js');
  reactHotLoader.register(removeTopicFilter, 'removeTopicFilter', '/Users/eddieyao/Desktop/gp_draft/actions/search.js');
  reactHotLoader.register(toggleSavedSearch, 'toggleSavedSearch', '/Users/eddieyao/Desktop/gp_draft/actions/search.js');
  reactHotLoader.register(toggleShowFavorites, 'toggleShowFavorites', '/Users/eddieyao/Desktop/gp_draft/actions/search.js');
  reactHotLoader.register(toggleFilter, 'toggleFilter', '/Users/eddieyao/Desktop/gp_draft/actions/search.js');
  reactHotLoader.register(clearFilters, 'clearFilters', '/Users/eddieyao/Desktop/gp_draft/actions/search.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.89528338a39862ca523f.hot-update.js.map