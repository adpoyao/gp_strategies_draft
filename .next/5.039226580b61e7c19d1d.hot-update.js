webpackHotUpdate(5,{

/***/ "./actions/actionType.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return TOGGLE_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CLEAR_FILTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return TOGGLE_SAVED_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return TOGGLE_FAVORITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return TOGGLE_SHOW_FAVORITES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return UPDATE_SEARCH_TERM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_STATUS_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_CONTENT_TYPE_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_TOPIC_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return REMOVE_STATUS_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REMOVE_CONTENT_TYPE_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REMOVE_TOPIC_FILTER; });
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// SEARCH
var TOGGLE_FILTER = 'TOGGLE_FILTER';
var CLEAR_FILTERS = 'CLEAR_FILTERS';
var TOGGLE_SAVED_SEARCH = 'TOGGLE_SAVED_SEARCH';
var TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
var TOGGLE_SHOW_FAVORITES = 'TOGGLE_SHOW_FAVORITES';
var UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
var ADD_STATUS_FILTER = 'ADD_STATUS_FILTER';
var ADD_CONTENT_TYPE_FILTER = 'ADD_CONTENT_TYPE_FILTER';
var ADD_TOPIC_FILTER = 'ADD_TOPIC_FILTER';
var REMOVE_STATUS_FILTER = 'REMOVE_STATUS_FILTER';
var REMOVE_CONTENT_TYPE_FILTER = 'REMOVE_CONTENT_TYPE_FILTER';
var REMOVE_TOPIC_FILTER = 'REMOVE_TOPIC_FILTER';
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TOGGLE_FILTER, 'TOGGLE_FILTER', '/Users/eddieyao/Desktop/gp_draft/actions/actionType.js');
  reactHotLoader.register(CLEAR_FILTERS, 'CLEAR_FILTERS', '/Users/eddieyao/Desktop/gp_draft/actions/actionType.js');
  reactHotLoader.register(TOGGLE_SAVED_SEARCH, 'TOGGLE_SAVED_SEARCH', '/Users/eddieyao/Desktop/gp_draft/actions/actionType.js');
  reactHotLoader.register(TOGGLE_FAVORITE, 'TOGGLE_FAVORITE', '/Users/eddieyao/Desktop/gp_draft/actions/actionType.js');
  reactHotLoader.register(TOGGLE_SHOW_FAVORITES, 'TOGGLE_SHOW_FAVORITES', '/Users/eddieyao/Desktop/gp_draft/actions/actionType.js');
  reactHotLoader.register(UPDATE_SEARCH_TERM, 'UPDATE_SEARCH_TERM', '/Users/eddieyao/Desktop/gp_draft/actions/actionType.js');
  reactHotLoader.register(ADD_STATUS_FILTER, 'ADD_STATUS_FILTER', '/Users/eddieyao/Desktop/gp_draft/actions/actionType.js');
  reactHotLoader.register(ADD_CONTENT_TYPE_FILTER, 'ADD_CONTENT_TYPE_FILTER', '/Users/eddieyao/Desktop/gp_draft/actions/actionType.js');
  reactHotLoader.register(ADD_TOPIC_FILTER, 'ADD_TOPIC_FILTER', '/Users/eddieyao/Desktop/gp_draft/actions/actionType.js');
  reactHotLoader.register(REMOVE_STATUS_FILTER, 'REMOVE_STATUS_FILTER', '/Users/eddieyao/Desktop/gp_draft/actions/actionType.js');
  reactHotLoader.register(REMOVE_CONTENT_TYPE_FILTER, 'REMOVE_CONTENT_TYPE_FILTER', '/Users/eddieyao/Desktop/gp_draft/actions/actionType.js');
  reactHotLoader.register(REMOVE_TOPIC_FILTER, 'REMOVE_TOPIC_FILTER', '/Users/eddieyao/Desktop/gp_draft/actions/actionType.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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
/* unused harmony export toggleFavorite */
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

var toggleFavorite = function toggleFavorite(boolean) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionType__["h" /* TOGGLE_FAVORITE */],
    boolean: boolean
  };
};

var toggleShowFavorites = function toggleShowFavorites(boolean) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionType__["k" /* TOGGLE_SHOW_FAVORITES */],
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
  reactHotLoader.register(toggleFavorite, 'toggleFavorite', '/Users/eddieyao/Desktop/gp_draft/actions/search.js');
  reactHotLoader.register(toggleShowFavorites, 'toggleShowFavorites', '/Users/eddieyao/Desktop/gp_draft/actions/search.js');
  reactHotLoader.register(toggleFilter, 'toggleFilter', '/Users/eddieyao/Desktop/gp_draft/actions/search.js');
  reactHotLoader.register(clearFilters, 'clearFilters', '/Users/eddieyao/Desktop/gp_draft/actions/search.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./reducers/search.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_actionType__ = __webpack_require__("./actions/actionType.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



var initialState = {
  searchTerm: '',
  filteredStatus: [],
  filteredContentType: [],
  filteredTopic: [],
  savedSearchToggle: false,
  favoritedSearchToggle: false,
  activeFilterId: undefined
};

var searchReducer = function searchReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionType__["l" /* UPDATE_SEARCH_TERM */]:
      return Object.assign({}, state, {
        searchTerm: action.data
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionType__["b" /* ADD_STATUS_FILTER */]:
      return Object.assign({}, state, {
        filteredStatus: [].concat(_toConsumableArray(state.filteredStatus), [action.data])
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionType__["a" /* ADD_CONTENT_TYPE_FILTER */]:
      return Object.assign({}, state, {
        filteredContentType: [].concat(_toConsumableArray(state.filteredContentType), [action.data])
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionType__["c" /* ADD_TOPIC_FILTER */]:
      return Object.assign({}, state, {
        filteredTopic: [].concat(_toConsumableArray(state.filteredTopic), [action.data])
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionType__["f" /* REMOVE_STATUS_FILTER */]:
      return Object.assign({}, state, {
        filteredStatus: state.filteredStatus.filter(function (status) {
          return status != action.data;
        })
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionType__["e" /* REMOVE_CONTENT_TYPE_FILTER */]:
      return Object.assign({}, state, {
        filteredContentType: state.filteredContentType.filter(function (contentType) {
          return contentType != action.data;
        })
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionType__["g" /* REMOVE_TOPIC_FILTER */]:
      return Object.assign({}, state, {
        filteredTopic: state.filteredTopic.filter(function (topic) {
          return topic != action.data;
        })
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionType__["j" /* TOGGLE_SAVED_SEARCH */]:
      return Object.assign({}, state, {
        savedSearchToggle: action.boolean
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionType__["k" /* TOGGLE_SHOW_FAVORITES */]:
      return Object.assign({}, state, {
        favoritedSearchToggle: action.boolean
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionType__["i" /* TOGGLE_FILTER */]:
      return Object.assign({}, state, {
        activeFilterId: action.id
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionType__["d" /* CLEAR_FILTERS */]:
      return Object.assign({}, state, {
        filteredTopic: [],
        filteredContentType: [],
        filteredStatus: []
      });
    default:
      break;
  }
  return state;
};

var _default = searchReducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, 'initialState', '/Users/eddieyao/Desktop/gp_draft/reducers/search.js');
  reactHotLoader.register(searchReducer, 'searchReducer', '/Users/eddieyao/Desktop/gp_draft/reducers/search.js');
  reactHotLoader.register(_default, 'default', '/Users/eddieyao/Desktop/gp_draft/reducers/search.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.039226580b61e7c19d1d.hot-update.js.map