webpackHotUpdate(5,{

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

/***/ }),

/***/ "./components/Filter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FilterDropdown__ = __webpack_require__("./components/FilterDropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_search__ = __webpack_require__("./actions/search.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/Filter.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Filter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Filter.__proto__ || Object.getPrototypeOf(Filter)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (id) {
      if (id === _this.props.activeFilterId) {
        id = undefined;
      }
      _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions_search__["h" /* toggleFilter */])(id));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Filter, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions_search__["h" /* toggleFilter */])(undefined));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          activeFilterId = _props.activeFilterId,
          toggleVisibility = void 0;

      if (id === activeFilterId) {
        toggleVisibility = "flex";
      } else {
        toggleVisibility = "none";
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2695826206', [toggleVisibility]]]) + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            onClick: function onClick() {
              return _this2.handleClick(_this2.props.id);
            }, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2695826206', [toggleVisibility]]]) + ' ' + 'filter-title',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          },
          this.props.label
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'span',
          {
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2695826206', [toggleVisibility]]]) + ' ' + 'drop-down',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__FilterDropdown__["a" /* default */], _extends({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }))
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2695826206',
          css: '.container.__jsx-style-dynamic-selector{font:400 1em system-ui;color:rgb(64 101 149);}.filter-title.__jsx-style-dynamic-selector{padding:20px 0 8px;border-bottom:2px solid rgb(64 101 149);}.drop-down.__jsx-style-dynamic-selector{position:relative;width:100%;margin-top:20px;display:' + toggleVisibility + ';}@media all and (min-width:376px){.container.__jsx-style-dynamic-selector{margin:0 20px;}.drop-down.__jsx-style-dynamic-selector{position:absolute;}.filter-title.__jsx-style-dynamic-selector{padding:0;width:-webkit-max-content;width:-moz-max-content;width:max-content;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmlsdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDb0IsQUFHb0MsQUFJSixBQUtELEFBT0YsQUFHSSxBQUdSLFVBQ1EsSUFOcEIsSUFQVyxBQVVYLENBZndDLElBSDNDLE1BU21CLGdCQVRsQixBQVdELGNBUEMsa0JBa0JFLEtBWEYiLCJmaWxlIjoiY29tcG9uZW50cy9GaWx0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBGaWx0ZXJEcm9wZG93biBmcm9tICcuL0ZpbHRlckRyb3Bkb3duJztcblxuaW1wb3J0IHsgdG9nZ2xlRmlsdGVyIH0gZnJvbSAnLi4vYWN0aW9ucy9zZWFyY2gnO1xuXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHRvZ2dsZUZpbHRlcih1bmRlZmluZWQpKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKGlkKSA9PiB7XG4gICAgaWYoaWQgPT09IHRoaXMucHJvcHMuYWN0aXZlRmlsdGVySWQpeyBpZCA9IHVuZGVmaW5lZDt9XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh0b2dnbGVGaWx0ZXIoaWQpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBpZCwgYWN0aXZlRmlsdGVySWR9ID0gdGhpcy5wcm9wcywgdG9nZ2xlVmlzaWJpbGl0eTtcbiAgICBpZihpZCA9PT0gYWN0aXZlRmlsdGVySWQpe1xuICAgICAgdG9nZ2xlVmlzaWJpbGl0eSA9IFwiZmxleFwiXG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZ2dsZVZpc2liaWxpdHkgPSBcIm5vbmVcIlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXG4gICAgICAgIDxkaXYgXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyLXRpdGxlXCIgXG4gICAgICAgICAgb25DbGljaz17KCk9PnRoaXMuaGFuZGxlQ2xpY2sodGhpcy5wcm9wcy5pZCl9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmxhYmVsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRyb3AtZG93blwiPjxGaWx0ZXJEcm9wZG93biB7Li4udGhpcy5wcm9wc30vPjwvc3Bhbj5cbiAgICAgICAgXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZvbnQ6IDQwMCAxZW0gc3lzdGVtLXVpO1xuICAgICAgICAgICAgY29sb3I6IHJnYig2NCAxMDEgMTQ5KVxuICAgICAgICAgIH1cbiAgICAgICAgICAuZmlsdGVyLXRpdGxlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMCA4cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDY0IDEwMSAxNDkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZHJvcC1kb3duIHtcbiAgICAgICAgICAgIC8vIFhYOiBPdGhlciBvcGlvbjogYWJzb2x1dGVcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6ICR7dG9nZ2xlVmlzaWJpbGl0eX1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kcm9wLWRvd24ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmlsdGVyLXRpdGxlIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRmlsdGVyRHJvcGRvd24ucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvcHRpb25zOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xpY2tBY3Rpb246IFByb3BUeXBlcy5mdW5jLFxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBhY3RpdmVGaWx0ZXJJZDogc3RhdGUuc2VhcmNoLmFjdGl2ZUZpbHRlcklkLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShGaWx0ZXIpOyJdfQ== */\n/*@ sourceURL=components/Filter.js */',
          dynamic: [toggleVisibility]
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Filter;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_4__FilterDropdown__["a" /* default */].propTypes = {
  id: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired,
  label: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired,
  options: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  clickAction: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    activeFilterId: state.search.activeFilterId
  };
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps)(Filter);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Filter, 'Filter', '/Users/eddieyao/Desktop/gp_draft/components/Filter.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/eddieyao/Desktop/gp_draft/components/Filter.js');
  reactHotLoader.register(_default, 'default', '/Users/eddieyao/Desktop/gp_draft/components/Filter.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/search-results.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_shortid__ = __webpack_require__("./node_modules/shortid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_shortid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_shortid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_withRedux__ = __webpack_require__("./lib/withRedux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Banner__ = __webpack_require__("./components/Banner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_SearchSecondary__ = __webpack_require__("./components/SearchSecondary.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Checkbox__ = __webpack_require__("./components/Checkbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Filter__ = __webpack_require__("./components/Filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_PageSection__ = __webpack_require__("./components/PageSection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_ProductThumbnail__ = __webpack_require__("./components/ProductThumbnail.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_ResultItemSmall__ = __webpack_require__("./components/ResultItemSmall.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_ListBox__ = __webpack_require__("./components/ListBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_Pagination__ = __webpack_require__("./components/Pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__actions_search__ = __webpack_require__("./actions/search.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__actions_actionType__ = __webpack_require__("./actions/actionType.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/pages/search-results.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




















var SearchResults = function (_Component) {
  _inherits(SearchResults, _Component);

  function SearchResults(props) {
    _classCallCheck(this, SearchResults);

    var _this = _possibleConstructorReturn(this, (SearchResults.__proto__ || Object.getPrototypeOf(SearchResults)).call(this, props));

    _this.filterStatus = function (input, data) {
      if (input !== undefined) {
        input ? _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_15__actions_search__["b" /* addStatusFilter */])(data)) : _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_15__actions_search__["f" /* removeStatusFilter */])(data));
      };
    };

    _this.filterContentType = function (input, data) {
      if (input !== undefined) {
        input ? _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_15__actions_search__["a" /* addContentTypeFilter */])(data)) : _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_15__actions_search__["e" /* removeContentTypeFilter */])(data));
      };
    };

    _this.filterTopic = function (input, data) {
      if (input !== undefined) {
        input ? _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_15__actions_search__["c" /* addTopicFilter */])(data)) : _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_15__actions_search__["g" /* removeTopicFilter */])(data));
      };
    };

    _this.toggleFavoritedSearch = function (input) {
      if (!!input) {
        _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_15__actions_search__["i" /* toggleSavedSearch */])(input));
      };
    };

    _this.state = {
      activeFilter: undefined
    };
    return _this;
  }

  _createClass(SearchResults, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_15__actions_search__["d" /* clearFilters */])());
    }
  }, {
    key: 'render',
    value: function render() {

      // Sample Filter Data
      var sampleData = [{
        id: "a",
        label: "Status",
        options: ["current", "archived"],
        clickAction: this.filterStatus
      }, {
        id: "b",
        label: "Content Type",
        options: ["Product", "Article", "Document", "Video", "Image"],
        clickAction: this.filterContentType
      }, {
        id: "c",
        label: "Topic",
        options: ["Technology", "Bluetooth"],
        clickAction: this.filterTopic
      }];

      // Checkbox Props
      var favoritesDesktop = {
        id: "e",
        label: "Show only favorites",
        fontColor: "rgb(64 101 149)",
        checked: false,
        clickAction: this.toggleFavoritedSearch
      };
      var favoritesMobile = {
        id: "f",
        label: "Show Favorites",
        fontColor: "rgb(64 101 149)",
        checked: false,
        clickAction: this.toggleFavoritedSearch
      };

      var filters = sampleData.map(function (data, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Filter__["a" /* default */], _extends({ key: __WEBPACK_IMPORTED_MODULE_4_shortid___default.a.generate() }, data, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }));
      });

      var productThumbnails = void 0,
          resultItems = void 0,
          queryItems = void 0,
          manageSavedSearches = void 0,
          savedSearchListBox = void 0,
          popularSearchListBox = void 0;
      var _props$sampleData = this.props.sampleData,
          products = _props$sampleData.products,
          favorited = _props$sampleData.favorited,
          savedSearches = _props$sampleData.savedSearches,
          contents = _props$sampleData.contents;

      if (products) {
        productThumbnails = products.map(function (vehicle) {
          var id = vehicle.id,
              modelName = vehicle.modelName;

          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { key: id, className: 'jsx-1289796989' + ' ' + 'products-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_ProductThumbnail__["a" /* default */], _extends({}, vehicle, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              }
            })),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
              styleId: '1289796989',
              css: '.products-wrapper.jsx-1289796989{font-size:16px;margin-bottom:32px;}@media all and (min-width:376px){.products-wrapper.jsx-1289796989{width:220px;font-size:17px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC1yZXN1bHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtId0IsQUFHZ0MsQUFNRCxZQUNHLEdBTkUsWUFPbkIsT0FMRiIsImZpbGUiOiJwYWdlcy9zZWFyY2gtcmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc2hvcnRpZCBmcm9tICdzaG9ydGlkJztcblxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICcuLi9saWIvd2l0aFJlZHV4JztcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9CYW5uZXInO1xuaW1wb3J0IFNlYXJjaFNlY29uZGFyeSBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaFNlY29uZGFyeSc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi4vY29tcG9uZW50cy9DaGVja2JveCc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRmlsdGVyJztcbmltcG9ydCBQYWdlU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VTZWN0aW9uJztcbmltcG9ydCBQcm9kdWN0VGh1bWJuYWlsIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdFRodW1ibmFpbCc7XG5pbXBvcnQgUmVzdWx0SXRlbVNtYWxsIGZyb20gJy4uL2NvbXBvbmVudHMvUmVzdWx0SXRlbVNtYWxsJztcbmltcG9ydCBMaXN0Qm94IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdEJveCc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xuXG5pbXBvcnQgeyBhZGRTdGF0dXNGaWx0ZXIsIGFkZENvbnRlbnRUeXBlRmlsdGVyLCBhZGRUb3BpY0ZpbHRlciwgcmVtb3ZlQ29udGVudFR5cGVGaWx0ZXIsIHJlbW92ZVRvcGljRmlsdGVyLCByZW1vdmVTdGF0dXNGaWx0ZXIsIHRvZ2dsZVNhdmVkU2VhcmNoLCBjbGVhckZpbHRlcnMgfSBmcm9tICcuLi9hY3Rpb25zL3NlYXJjaCc7XG5pbXBvcnQgeyBDTEVBUl9GSUxURVJTIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlJztcblxuY2xhc3MgU2VhcmNoUmVzdWx0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlRmlsdGVyOiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGNsZWFyRmlsdGVycygpKTtcbiAgfVxuXG4gIGZpbHRlclN0YXR1cyA9IChpbnB1dCwgZGF0YSkgPT4ge1xuICAgIGlmKGlucHV0ICE9PSB1bmRlZmluZWQpe1xuICAgICAgaW5wdXQgP1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhZGRTdGF0dXNGaWx0ZXIoZGF0YSkpIDpcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocmVtb3ZlU3RhdHVzRmlsdGVyKGRhdGEpKTtcbiAgICB9O1xuICB9O1xuXG4gIGZpbHRlckNvbnRlbnRUeXBlID0gKGlucHV0LGRhdGEpID0+IHtcbiAgICBpZihpbnB1dCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIGlucHV0ID9cbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWRkQ29udGVudFR5cGVGaWx0ZXIoZGF0YSkpIDpcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocmVtb3ZlQ29udGVudFR5cGVGaWx0ZXIoZGF0YSkpO1xuICAgIH07XG4gIH07XG5cbiAgZmlsdGVyVG9waWMgPSAoaW5wdXQsIGRhdGEpID0+IHtcbiAgICBpZihpbnB1dCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIGlucHV0ID9cbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWRkVG9waWNGaWx0ZXIoZGF0YSkpIDpcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocmVtb3ZlVG9waWNGaWx0ZXIoZGF0YSkpO1xuICAgIH07XG4gIH07XG5cbiAgdG9nZ2xlRmF2b3JpdGVkU2VhcmNoID0gKGlucHV0KSA9PiB7XG4gICAgaWYoISFpbnB1dCl7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHRvZ2dsZVNhdmVkU2VhcmNoKGlucHV0KSk7XG4gICAgfTtcbiAgfTtcblxuICByZW5kZXIoKSB7ICBcblxuICAgIC8vIFNhbXBsZSBGaWx0ZXIgRGF0YVxuICAgIGNvbnN0IHNhbXBsZURhdGEgPSBbXG4gICAgICB7XG4gICAgICAgIGlkOiBcImFcIixcbiAgICAgICAgbGFiZWw6IFwiU3RhdHVzXCIsXG4gICAgICAgIG9wdGlvbnM6W1wiY3VycmVudFwiLCBcImFyY2hpdmVkXCJdLFxuICAgICAgICBjbGlja0FjdGlvbjogdGhpcy5maWx0ZXJTdGF0dXNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcImJcIixcbiAgICAgICAgbGFiZWw6IFwiQ29udGVudCBUeXBlXCIsXG4gICAgICAgIG9wdGlvbnM6IFtcIlByb2R1Y3RcIiwgXCJBcnRpY2xlXCIsIFwiRG9jdW1lbnRcIiwgXCJWaWRlb1wiLCBcIkltYWdlXCJdLCBcbiAgICAgICAgY2xpY2tBY3Rpb246IHRoaXMuZmlsdGVyQ29udGVudFR5cGVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcImNcIixcbiAgICAgICAgbGFiZWw6IFwiVG9waWNcIixcbiAgICAgICAgb3B0aW9uczogW1wiVGVjaG5vbG9neVwiLCBcIkJsdWV0b290aFwiXSxcbiAgICAgICAgY2xpY2tBY3Rpb246IHRoaXMuZmlsdGVyVG9waWNcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgLy8gQ2hlY2tib3ggUHJvcHNcbiAgICBjb25zdCBmYXZvcml0ZXNEZXNrdG9wID0ge1xuICAgICAgaWQ6IFwiZVwiLFxuICAgICAgbGFiZWw6IFwiU2hvdyBvbmx5IGZhdm9yaXRlc1wiLFxuICAgICAgZm9udENvbG9yOiBcInJnYig2NCAxMDEgMTQ5KVwiLFxuICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICBjbGlja0FjdGlvbjogdGhpcy50b2dnbGVGYXZvcml0ZWRTZWFyY2gsXG4gICAgfVxuICAgIGNvbnN0IGZhdm9yaXRlc01vYmlsZSA9IHtcbiAgICAgIGlkOiBcImZcIixcbiAgICAgIGxhYmVsOiBcIlNob3cgRmF2b3JpdGVzXCIsXG4gICAgICBmb250Q29sb3I6IFwicmdiKDY0IDEwMSAxNDkpXCIsXG4gICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgIGNsaWNrQWN0aW9uOiB0aGlzLnRvZ2dsZUZhdm9yaXRlZFNlYXJjaCxcbiAgICB9XG5cbiAgICBsZXQgZmlsdGVycyA9IHNhbXBsZURhdGEubWFwKChkYXRhLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIDxGaWx0ZXIga2V5PXtzaG9ydGlkLmdlbmVyYXRlKCl9IHsuLi5kYXRhfS8+XG4gICAgfSlcblxuICAgIGxldCBwcm9kdWN0VGh1bWJuYWlscywgcmVzdWx0SXRlbXMsIHF1ZXJ5SXRlbXMsIG1hbmFnZVNhdmVkU2VhcmNoZXMsIHNhdmVkU2VhcmNoTGlzdEJveCwgcG9wdWxhclNlYXJjaExpc3RCb3g7IFxuICAgIGNvbnN0IHsgcHJvZHVjdHMsIGZhdm9yaXRlZCwgc2F2ZWRTZWFyY2hlcywgY29udGVudHN9ID0gdGhpcy5wcm9wcy5zYW1wbGVEYXRhO1xuICAgIGlmKHByb2R1Y3RzKXtcbiAgICAgIHByb2R1Y3RUaHVtYm5haWxzID0gcHJvZHVjdHMubWFwKHZlaGljbGUgPT4ge1xuICAgICAgICBsZXQge2lkLCBtb2RlbE5hbWV9ID0gdmVoaWNsZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aWR9IGNsYXNzTmFtZT1cInByb2R1Y3RzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxQcm9kdWN0VGh1bWJuYWlsIHsuLi52ZWhpY2xlfSAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAucHJvZHVjdHMtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgICAgICAgICAgICAgLy9YWCBPbmUgY2FyIGRpc3BsYXkgaGVyZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDM3NnB4KSB7XG4gICAgICAgICAgICAgICAgLnByb2R1Y3RzLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYoY29udGVudHMpe1xuICAgICAgcmVzdWx0SXRlbXMgPSBjb250ZW50cy5tYXAoY29udGVudCA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2NvbnRlbnQuaWR9IGNsYXNzTmFtZT1cImNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPFJlc3VsdEl0ZW1TbWFsbCBrZXk9e2NvbnRlbnQuaWR9IHsuLi5jb250ZW50fSAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAuY29udGVudC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbnRlbnQtd3JhcHBlcjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgXG4gICAgLy9YWDogQ2hhbmdlIGNvbnRlbnRzIGlucHV0IHRvIFVzZXIncyBTYXZlZCBTZWFyY2hlc1xuICAgIGlmKGNvbnRlbnRzKSB7XG4gICAgICBsZXQgc2F2ZWRTZWFyY2hQcm9wcyA9IHtcbiAgICAgICAgaWQ6ICd4JyxcbiAgICAgICAgdGl0bGU6ICdTYXZlZCBTZWFyY2hlcycsXG4gICAgICAgIGNvbGxlY3Rpb246IGNvbnRlbnRzXG4gICAgICB9XG4gICAgICBzYXZlZFNlYXJjaExpc3RCb3ggPSAoXG4gICAgICAgIDxMaXN0Qm94IGtleT17Y29udGVudHMuaWR9IHsuLi5zYXZlZFNlYXJjaFByb3BzfS8+XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vWFg6IENoYW5nZSBjb250ZW50cyBpbnB1dCBQb3B1bGFyIFNlYXJjaGVzXG4gICAgaWYoY29udGVudHMpIHtcbiAgICAgIGxldCBwb3B1bGFyU2VhcmNoUHJvcHMgPSB7XG4gICAgICAgIGlkOiAneScsXG4gICAgICAgIHRpdGxlOiAnUGVvcGxlIGFsc28gc2VhcmNoIGZvci4uLicsXG4gICAgICAgIGNvbGxlY3Rpb246IGNvbnRlbnRzXG4gICAgICB9XG4gICAgICBwb3B1bGFyU2VhcmNoTGlzdEJveCA9IChcbiAgICAgICAgPExpc3RCb3gga2V5PXtjb250ZW50cy5pZH0gey4uLnBvcHVsYXJTZWFyY2hQcm9wc30vPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL25vcm1hbGl6ZS83LjAuMC9ub3JtYWxpemUuY3NzXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8aDM+KFNFQVJDSCBSRVNVTFQgUEFHRSk8L2gzPlxuICAgICAgICA8QmFubmVyPlxuICAgICAgICAgIDxTZWFyY2hTZWNvbmRhcnkvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNrdG9wLXZpZXdcIj48Q2hlY2tib3ggey4uLmZhdm9yaXRlc0Rlc2t0b3B9Lz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLXZpZXdcIj48Q2hlY2tib3ggey4uLmZhdm9yaXRlc01vYmlsZX0vPjwvZGl2PlxuXG4gICAgICAgICAgICB7ZmlsdGVyc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9CYW5uZXI+XG4gICAgICAgIFxuICAgICAgICA8UGFnZVNlY3Rpb24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIHsvKiBQcm9kdWN0cyBTZWN0aW9uICovfVxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2Utc2VjdGlvbi1oZWFkZXJcIj5Qcm9kdWN0czwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlaGljbGUtdGh1bWJuYWlscy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIHtwcm9kdWN0VGh1bWJuYWlsc31cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQ29udGVudCBTZWN0aW9uICovfVxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2Utc2VjdGlvbi1oZWFkZXJcIj5Db250ZW50PC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudHMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdC1pdGVtcy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAge3Jlc3VsdEl0ZW1zfVxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ib3gtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ib3hcIj57c2F2ZWRTZWFyY2hMaXN0Qm94fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ib3hcIj57cG9wdWxhclNlYXJjaExpc3RCb3h9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgIDwvUGFnZVNlY3Rpb24+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5kZXNrdG9wLXZpZXcge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vYmlsZS12aWV3IHtcbiAgICAgICAgICAgIG1hcmdpbjogMzJweCAwIC00cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wYWdlLXNlY3Rpb24taGVhZGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogOHB4Oy8vXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiKDIzMSwgMjMxLCAyMzEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLy9cbiAgICAgICAgICAuc2VhcmNoLXJlc3VsdC13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC52ZWhpY2xlLXRodW1ibmFpbHMtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVzdWx0LWl0ZW1zLXdyYXBwZXIgeyAvL1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAgICAgIGZsZXg6IDEgMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpc3QtYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgZmxleDogMSAzMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0LWJveCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAzMnB4IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgIC5kZXNrdG9wLXZpZXcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vYmlsZS12aWV3IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWx0ZXItd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWx0ZXItd3JhcHBlciA+ICoge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWdlLXNlY3Rpb24taGVhZGVyIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCA2cHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDZweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDZweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGVudHMtd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZXN1bHQtaXRlbXMtd3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAzMnB4IDE2cHggMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgc2FtcGxlRGF0YTogc3RhdGUuc2FtcGxlRGF0YVxufSlcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTZWFyY2hSZXN1bHRzKSk7Il19 */\n/*@ sourceURL=pages/search-results.js */'
            })
          );
        });
      };

      if (contents) {
        resultItems = contents.map(function (content) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { key: content.id, className: 'jsx-1327913020' + ' ' + 'content-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 137
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_ResultItemSmall__["a" /* default */], _extends({ key: content.id }, content, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 138
              }
            })),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
              styleId: '1327913020',
              css: '.content-wrapper.jsx-1327913020{border:1px solid lightgrey;border-radius:4px;margin-bottom:16px;padding:0 16px;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;}.content-wrapper.jsx-1327913020:hover{cursor:pointer;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;-webkit-box-shadow:0px 10px 10px -6px rgba(0,0,0,0.15);-moz-box-shadow:0px 10px 10px -6px rgba(0,0,0,0.15);box-shadow:0px 10px 10px -6px rgba(0,0,0,0.15);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC1yZXN1bHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBJd0IsQUFHNEMsQUFPWixlQUNVLFlBUFAsa0JBQ0MsbUJBQ0osU0FNd0MsTUFMOUIsaURBTTJCLFNBTHRELDJDQU1pRCwrQ0FDakQiLCJmaWxlIjoicGFnZXMvc2VhcmNoLXJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHNob3J0aWQgZnJvbSAnc2hvcnRpZCc7XG5cbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnLi4vbGliL3dpdGhSZWR1eCc7XG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQmFubmVyJztcbmltcG9ydCBTZWFyY2hTZWNvbmRhcnkgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hTZWNvbmRhcnknO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hlY2tib3gnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi9jb21wb25lbnRzL0ZpbHRlcic7XG5pbXBvcnQgUGFnZVNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlU2VjdGlvbic7XG5pbXBvcnQgUHJvZHVjdFRodW1ibmFpbCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RUaHVtYm5haWwnO1xuaW1wb3J0IFJlc3VsdEl0ZW1TbWFsbCBmcm9tICcuLi9jb21wb25lbnRzL1Jlc3VsdEl0ZW1TbWFsbCc7XG5pbXBvcnQgTGlzdEJveCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RCb3gnO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcblxuaW1wb3J0IHsgYWRkU3RhdHVzRmlsdGVyLCBhZGRDb250ZW50VHlwZUZpbHRlciwgYWRkVG9waWNGaWx0ZXIsIHJlbW92ZUNvbnRlbnRUeXBlRmlsdGVyLCByZW1vdmVUb3BpY0ZpbHRlciwgcmVtb3ZlU3RhdHVzRmlsdGVyLCB0b2dnbGVTYXZlZFNlYXJjaCwgY2xlYXJGaWx0ZXJzIH0gZnJvbSAnLi4vYWN0aW9ucy9zZWFyY2gnO1xuaW1wb3J0IHsgQ0xFQVJfRklMVEVSUyB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZSc7XG5cbmNsYXNzIFNlYXJjaFJlc3VsdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZUZpbHRlcjogdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjbGVhckZpbHRlcnMoKSk7XG4gIH1cblxuICBmaWx0ZXJTdGF0dXMgPSAoaW5wdXQsIGRhdGEpID0+IHtcbiAgICBpZihpbnB1dCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIGlucHV0ID9cbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWRkU3RhdHVzRmlsdGVyKGRhdGEpKSA6XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlbW92ZVN0YXR1c0ZpbHRlcihkYXRhKSk7XG4gICAgfTtcbiAgfTtcblxuICBmaWx0ZXJDb250ZW50VHlwZSA9IChpbnB1dCxkYXRhKSA9PiB7XG4gICAgaWYoaW5wdXQgIT09IHVuZGVmaW5lZCl7XG4gICAgICBpbnB1dCA/XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFkZENvbnRlbnRUeXBlRmlsdGVyKGRhdGEpKSA6XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlbW92ZUNvbnRlbnRUeXBlRmlsdGVyKGRhdGEpKTtcbiAgICB9O1xuICB9O1xuXG4gIGZpbHRlclRvcGljID0gKGlucHV0LCBkYXRhKSA9PiB7XG4gICAgaWYoaW5wdXQgIT09IHVuZGVmaW5lZCl7XG4gICAgICBpbnB1dCA/XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFkZFRvcGljRmlsdGVyKGRhdGEpKSA6XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlbW92ZVRvcGljRmlsdGVyKGRhdGEpKTtcbiAgICB9O1xuICB9O1xuXG4gIHRvZ2dsZUZhdm9yaXRlZFNlYXJjaCA9IChpbnB1dCkgPT4ge1xuICAgIGlmKCEhaW5wdXQpe1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh0b2dnbGVTYXZlZFNlYXJjaChpbnB1dCkpO1xuICAgIH07XG4gIH07XG5cbiAgcmVuZGVyKCkgeyAgXG5cbiAgICAvLyBTYW1wbGUgRmlsdGVyIERhdGFcbiAgICBjb25zdCBzYW1wbGVEYXRhID0gW1xuICAgICAge1xuICAgICAgICBpZDogXCJhXCIsXG4gICAgICAgIGxhYmVsOiBcIlN0YXR1c1wiLFxuICAgICAgICBvcHRpb25zOltcImN1cnJlbnRcIiwgXCJhcmNoaXZlZFwiXSxcbiAgICAgICAgY2xpY2tBY3Rpb246IHRoaXMuZmlsdGVyU3RhdHVzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJiXCIsXG4gICAgICAgIGxhYmVsOiBcIkNvbnRlbnQgVHlwZVwiLFxuICAgICAgICBvcHRpb25zOiBbXCJQcm9kdWN0XCIsIFwiQXJ0aWNsZVwiLCBcIkRvY3VtZW50XCIsIFwiVmlkZW9cIiwgXCJJbWFnZVwiXSwgXG4gICAgICAgIGNsaWNrQWN0aW9uOiB0aGlzLmZpbHRlckNvbnRlbnRUeXBlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJjXCIsXG4gICAgICAgIGxhYmVsOiBcIlRvcGljXCIsXG4gICAgICAgIG9wdGlvbnM6IFtcIlRlY2hub2xvZ3lcIiwgXCJCbHVldG9vdGhcIl0sXG4gICAgICAgIGNsaWNrQWN0aW9uOiB0aGlzLmZpbHRlclRvcGljXG4gICAgICB9XG4gICAgXTtcblxuICAgIC8vIENoZWNrYm94IFByb3BzXG4gICAgY29uc3QgZmF2b3JpdGVzRGVza3RvcCA9IHtcbiAgICAgIGlkOiBcImVcIixcbiAgICAgIGxhYmVsOiBcIlNob3cgb25seSBmYXZvcml0ZXNcIixcbiAgICAgIGZvbnRDb2xvcjogXCJyZ2IoNjQgMTAxIDE0OSlcIixcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgY2xpY2tBY3Rpb246IHRoaXMudG9nZ2xlRmF2b3JpdGVkU2VhcmNoLFxuICAgIH1cbiAgICBjb25zdCBmYXZvcml0ZXNNb2JpbGUgPSB7XG4gICAgICBpZDogXCJmXCIsXG4gICAgICBsYWJlbDogXCJTaG93IEZhdm9yaXRlc1wiLFxuICAgICAgZm9udENvbG9yOiBcInJnYig2NCAxMDEgMTQ5KVwiLFxuICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICBjbGlja0FjdGlvbjogdGhpcy50b2dnbGVGYXZvcml0ZWRTZWFyY2gsXG4gICAgfVxuXG4gICAgbGV0IGZpbHRlcnMgPSBzYW1wbGVEYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiA8RmlsdGVyIGtleT17c2hvcnRpZC5nZW5lcmF0ZSgpfSB7Li4uZGF0YX0vPlxuICAgIH0pXG5cbiAgICBsZXQgcHJvZHVjdFRodW1ibmFpbHMsIHJlc3VsdEl0ZW1zLCBxdWVyeUl0ZW1zLCBtYW5hZ2VTYXZlZFNlYXJjaGVzLCBzYXZlZFNlYXJjaExpc3RCb3gsIHBvcHVsYXJTZWFyY2hMaXN0Qm94OyBcbiAgICBjb25zdCB7IHByb2R1Y3RzLCBmYXZvcml0ZWQsIHNhdmVkU2VhcmNoZXMsIGNvbnRlbnRzfSA9IHRoaXMucHJvcHMuc2FtcGxlRGF0YTtcbiAgICBpZihwcm9kdWN0cyl7XG4gICAgICBwcm9kdWN0VGh1bWJuYWlscyA9IHByb2R1Y3RzLm1hcCh2ZWhpY2xlID0+IHtcbiAgICAgICAgbGV0IHtpZCwgbW9kZWxOYW1lfSA9IHZlaGljbGU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2lkfSBjbGFzc05hbWU9XCJwcm9kdWN0cy13cmFwcGVyXCI+XG4gICAgICAgICAgICA8UHJvZHVjdFRodW1ibmFpbCB7Li4udmVoaWNsZX0gLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLnByb2R1Y3RzLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICAgICAgICAgIC8vWFggT25lIGNhciBkaXNwbGF5IGhlcmVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgICAgIC5wcm9kdWN0cy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmKGNvbnRlbnRzKXtcbiAgICAgIHJlc3VsdEl0ZW1zID0gY29udGVudHMubWFwKGNvbnRlbnQgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtjb250ZW50LmlkfSBjbGFzc05hbWU9XCJjb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxSZXN1bHRJdGVtU21hbGwga2V5PXtjb250ZW50LmlkfSB7Li4uY29udGVudH0gLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb250ZW50LXdyYXBwZXI6aG92ZXIge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIFxuICAgIC8vWFg6IENoYW5nZSBjb250ZW50cyBpbnB1dCB0byBVc2VyJ3MgU2F2ZWQgU2VhcmNoZXNcbiAgICBpZihjb250ZW50cykge1xuICAgICAgbGV0IHNhdmVkU2VhcmNoUHJvcHMgPSB7XG4gICAgICAgIGlkOiAneCcsXG4gICAgICAgIHRpdGxlOiAnU2F2ZWQgU2VhcmNoZXMnLFxuICAgICAgICBjb2xsZWN0aW9uOiBjb250ZW50c1xuICAgICAgfVxuICAgICAgc2F2ZWRTZWFyY2hMaXN0Qm94ID0gKFxuICAgICAgICA8TGlzdEJveCBrZXk9e2NvbnRlbnRzLmlkfSB7Li4uc2F2ZWRTZWFyY2hQcm9wc30vPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvL1hYOiBDaGFuZ2UgY29udGVudHMgaW5wdXQgUG9wdWxhciBTZWFyY2hlc1xuICAgIGlmKGNvbnRlbnRzKSB7XG4gICAgICBsZXQgcG9wdWxhclNlYXJjaFByb3BzID0ge1xuICAgICAgICBpZDogJ3knLFxuICAgICAgICB0aXRsZTogJ1Blb3BsZSBhbHNvIHNlYXJjaCBmb3IuLi4nLFxuICAgICAgICBjb2xsZWN0aW9uOiBjb250ZW50c1xuICAgICAgfVxuICAgICAgcG9wdWxhclNlYXJjaExpc3RCb3ggPSAoXG4gICAgICAgIDxMaXN0Qm94IGtleT17Y29udGVudHMuaWR9IHsuLi5wb3B1bGFyU2VhcmNoUHJvcHN9Lz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9ub3JtYWxpemUvNy4wLjAvbm9ybWFsaXplLmNzc1wiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPGgzPihTRUFSQ0ggUkVTVUxUIFBBR0UpPC9oMz5cbiAgICAgICAgPEJhbm5lcj5cbiAgICAgICAgICA8U2VhcmNoU2Vjb25kYXJ5Lz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci13cmFwcGVyXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVza3RvcC12aWV3XCI+PENoZWNrYm94IHsuLi5mYXZvcml0ZXNEZXNrdG9wfS8+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS12aWV3XCI+PENoZWNrYm94IHsuLi5mYXZvcml0ZXNNb2JpbGV9Lz48L2Rpdj5cblxuICAgICAgICAgICAge2ZpbHRlcnN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQmFubmVyPlxuICAgICAgICBcbiAgICAgICAgPFBhZ2VTZWN0aW9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdC13cmFwcGVyXCI+XG4gICAgICAgICAgICB7LyogUHJvZHVjdHMgU2VjdGlvbiAqL31cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXNlY3Rpb24taGVhZGVyXCI+UHJvZHVjdHM8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZWhpY2xlLXRodW1ibmFpbHMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICB7cHJvZHVjdFRodW1ibmFpbHN9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIENvbnRlbnQgU2VjdGlvbiAqL31cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXNlY3Rpb24taGVhZGVyXCI+Q29udGVudDwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtaXRlbXMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIHtyZXN1bHRJdGVtc31cbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbi8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtYm94LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtYm94XCI+e3NhdmVkU2VhcmNoTGlzdEJveH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtYm94XCI+e3BvcHVsYXJTZWFyY2hMaXN0Qm94fTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICA8L1BhZ2VTZWN0aW9uPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZGVza3RvcC12aWV3IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2JpbGUtdmlldyB7XG4gICAgICAgICAgICBtYXJnaW46IDMycHggMCAtNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGFnZS1zZWN0aW9uLWhlYWRlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDhweDsvL1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYigyMzEsIDIzMSwgMjMxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8vXG4gICAgICAgICAgLnNlYXJjaC1yZXN1bHQtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudmVoaWNsZS10aHVtYm5haWxzLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlc3VsdC1pdGVtcy13cmFwcGVyIHsgLy9cbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgICAgICAgICBmbGV4OiAxIDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaXN0LWJveC13cmFwcGVyIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMzAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlzdC1ib3gge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMzJweCAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDM3NnB4KSB7XG4gICAgICAgICAgICAuZGVza3RvcC12aWV3IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb2JpbGUtdmlldyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmlsdGVyLXdyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmlsdGVyLXdyYXBwZXIgPiAqIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFnZS1zZWN0aW9uLWhlYWRlciB7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggNnB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMTBweCA2cHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCA2cHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnRzLXdyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmVzdWx0LWl0ZW1zLXdyYXBwZXIge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMzJweCAxNnB4IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIHNhbXBsZURhdGE6IHN0YXRlLnNhbXBsZURhdGFcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2VhcmNoUmVzdWx0cykpOyJdfQ== */\n/*@ sourceURL=pages/search-results.js */'
            })
          );
        });
      };

      //XX: Change contents input to User's Saved Searches
      if (contents) {
        var savedSearchProps = {
          id: 'x',
          title: 'Saved Searches',
          collection: contents
        };
        savedSearchListBox = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_ListBox__["a" /* default */], _extends({ key: contents.id }, savedSearchProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          }
        }));
      }

      //XX: Change contents input Popular Searches
      if (contents) {
        var popularSearchProps = {
          id: 'y',
          title: 'People also search for...',
          collection: contents
        };
        popularSearchListBox = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_ListBox__["a" /* default */], _extends({ key: contents.id }, popularSearchProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          }
        }));
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-2995113546' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 187
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css', className: 'jsx-2995113546',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 188
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', className: 'jsx-2995113546',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 189
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h3',
          {
            className: 'jsx-2995113546',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 192
            }
          },
          '(SEARCH RESULT PAGE)'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6__components_Banner__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 193
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_SearchSecondary__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2995113546' + ' ' + 'filter-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 195
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-2995113546' + ' ' + 'desktop-view',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 197
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Checkbox__["a" /* default */], _extends({}, favoritesDesktop, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 197
                }
              }))
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-2995113546' + ' ' + 'mobile-view',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 198
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Checkbox__["a" /* default */], _extends({}, favoritesMobile, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 198
                }
              }))
            ),
            filters
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_10__components_PageSection__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 204
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2995113546' + ' ' + 'search-result-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 205
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'h3',
              {
                className: 'jsx-2995113546' + ' ' + 'page-section-header',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 207
                }
              },
              'Products'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-2995113546' + ' ' + 'vehicle-thumbnails-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 208
                }
              },
              productThumbnails
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'h3',
              {
                className: 'jsx-2995113546' + ' ' + 'page-section-header',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 213
                }
              },
              'Content'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-2995113546' + ' ' + 'contents-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 214
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-2995113546' + ' ' + 'result-items-wrapper',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 215
                  }
                },
                resultItems,
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_Pagination__["a" /* default */], {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 217
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-2995113546' + ' ' + 'list-box-wrapper',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 219
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-2995113546' + ' ' + 'list-box',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 220
                    }
                  },
                  savedSearchListBox
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-2995113546' + ' ' + 'list-box',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 221
                    }
                  },
                  popularSearchListBox
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2995113546',
          css: '.desktop-view.jsx-2995113546{display:none;}.mobile-view.jsx-2995113546{margin:32px 0 -4px;}.page-section-header.jsx-2995113546{font-size:1.5em;padding-bottom:32px;border-bottom:2px dashed rgb(231,231,231);}.search-result-wrapper.jsx-2995113546{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;}.vehicle-thumbnails-wrapper.jsx-2995113546{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.result-items-wrapper.jsx-2995113546{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-flex:1 100%;-ms-flex:1 100%;flex:1 100%;margin-bottom:16px;}list-box-wrapper.jsx-2995113546{-webkit-flex:1 30%;-ms-flex:1 30%;flex:1 30%;}.list-box.jsx-2995113546{margin:0 0 32px 0;}@media all and (min-width:376px){.desktop-view.jsx-2995113546{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.mobile-view.jsx-2995113546{display:none;}.filter-wrapper.jsx-2995113546{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:100%;min-width:400px;margin-left:40px;}.filter-wrapper.jsx-2995113546>*.jsx-2995113546{margin:0 20px;}.page-section-header.jsx-2995113546{border-bottom:none;padding-bottom:8px;-webkit-box-shadow:0px 10px 6px -6px rgba(0,0,0,0.15);-moz-box-shadow:0px 10px 6px -6px rgba(0,0,0,0.15);box-shadow:0px 10px 6px -6px rgba(0,0,0,0.15);}.contents-wrapper.jsx-2995113546{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;}.result-items-wrapper.jsx-2995113546{margin:0 32px 16px 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC1yZXN1bHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNPb0IsQUFHMEIsQUFHTSxBQUdILEFBT0gsQUFJQSxBQUdBLEFBTUYsQUFHTyxBQUtILEFBR0EsQUFHQSxBQVFDLEFBR0ssQUFPTixBQUtoQixhQTlERCxBQXFDRSxDQVdBLEVBekNvQixFQXNCdEIsQ0ExQkEsQUFnRHVCLEVBV3JCLGVBdEQ0QyxFQTRDWSxPQTFCMUQsNkJBYjBCLEFBSTFCLEFBRzBCLEFBY3hCLEFBTXFCLEFBa0JFLElBakR6QixjQTRDdUQsbURBQ0wsTUFLaEQsU0E3Q0YsQUFPYyxTQW9CZSxzQkFjM0IsaUJBakNtQixtQkFDckIsdUNBbUJlLFdBQ0ssZ0JBQ0MsaUJBQ25CIiwiZmlsZSI6InBhZ2VzL3NlYXJjaC1yZXN1bHRzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lZGRpZXlhby9EZXNrdG9wL2dwX2RyYWZ0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzaG9ydGlkIGZyb20gJ3Nob3J0aWQnO1xuXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJy4uL2xpYi93aXRoUmVkdXgnO1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0Jhbm5lcic7XG5pbXBvcnQgU2VhcmNoU2Vjb25kYXJ5IGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoU2Vjb25kYXJ5JztcbmltcG9ydCBDaGVja2JveCBmcm9tICcuLi9jb21wb25lbnRzL0NoZWNrYm94JztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9GaWx0ZXInO1xuaW1wb3J0IFBhZ2VTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZVNlY3Rpb24nO1xuaW1wb3J0IFByb2R1Y3RUaHVtYm5haWwgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0VGh1bWJuYWlsJztcbmltcG9ydCBSZXN1bHRJdGVtU21hbGwgZnJvbSAnLi4vY29tcG9uZW50cy9SZXN1bHRJdGVtU21hbGwnO1xuaW1wb3J0IExpc3RCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0Qm94JztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XG5cbmltcG9ydCB7IGFkZFN0YXR1c0ZpbHRlciwgYWRkQ29udGVudFR5cGVGaWx0ZXIsIGFkZFRvcGljRmlsdGVyLCByZW1vdmVDb250ZW50VHlwZUZpbHRlciwgcmVtb3ZlVG9waWNGaWx0ZXIsIHJlbW92ZVN0YXR1c0ZpbHRlciwgdG9nZ2xlU2F2ZWRTZWFyY2gsIGNsZWFyRmlsdGVycyB9IGZyb20gJy4uL2FjdGlvbnMvc2VhcmNoJztcbmltcG9ydCB7IENMRUFSX0ZJTFRFUlMgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGUnO1xuXG5jbGFzcyBTZWFyY2hSZXN1bHRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVGaWx0ZXI6IHVuZGVmaW5lZFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goY2xlYXJGaWx0ZXJzKCkpO1xuICB9XG5cbiAgZmlsdGVyU3RhdHVzID0gKGlucHV0LCBkYXRhKSA9PiB7XG4gICAgaWYoaW5wdXQgIT09IHVuZGVmaW5lZCl7XG4gICAgICBpbnB1dCA/XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFkZFN0YXR1c0ZpbHRlcihkYXRhKSkgOlxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChyZW1vdmVTdGF0dXNGaWx0ZXIoZGF0YSkpO1xuICAgIH07XG4gIH07XG5cbiAgZmlsdGVyQ29udGVudFR5cGUgPSAoaW5wdXQsZGF0YSkgPT4ge1xuICAgIGlmKGlucHV0ICE9PSB1bmRlZmluZWQpe1xuICAgICAgaW5wdXQgP1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhZGRDb250ZW50VHlwZUZpbHRlcihkYXRhKSkgOlxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChyZW1vdmVDb250ZW50VHlwZUZpbHRlcihkYXRhKSk7XG4gICAgfTtcbiAgfTtcblxuICBmaWx0ZXJUb3BpYyA9IChpbnB1dCwgZGF0YSkgPT4ge1xuICAgIGlmKGlucHV0ICE9PSB1bmRlZmluZWQpe1xuICAgICAgaW5wdXQgP1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhZGRUb3BpY0ZpbHRlcihkYXRhKSkgOlxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChyZW1vdmVUb3BpY0ZpbHRlcihkYXRhKSk7XG4gICAgfTtcbiAgfTtcblxuICB0b2dnbGVGYXZvcml0ZWRTZWFyY2ggPSAoaW5wdXQpID0+IHtcbiAgICBpZighIWlucHV0KXtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godG9nZ2xlU2F2ZWRTZWFyY2goaW5wdXQpKTtcbiAgICB9O1xuICB9O1xuXG4gIHJlbmRlcigpIHsgIFxuXG4gICAgLy8gU2FtcGxlIEZpbHRlciBEYXRhXG4gICAgY29uc3Qgc2FtcGxlRGF0YSA9IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiYVwiLFxuICAgICAgICBsYWJlbDogXCJTdGF0dXNcIixcbiAgICAgICAgb3B0aW9uczpbXCJjdXJyZW50XCIsIFwiYXJjaGl2ZWRcIl0sXG4gICAgICAgIGNsaWNrQWN0aW9uOiB0aGlzLmZpbHRlclN0YXR1c1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiYlwiLFxuICAgICAgICBsYWJlbDogXCJDb250ZW50IFR5cGVcIixcbiAgICAgICAgb3B0aW9uczogW1wiUHJvZHVjdFwiLCBcIkFydGljbGVcIiwgXCJEb2N1bWVudFwiLCBcIlZpZGVvXCIsIFwiSW1hZ2VcIl0sIFxuICAgICAgICBjbGlja0FjdGlvbjogdGhpcy5maWx0ZXJDb250ZW50VHlwZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiY1wiLFxuICAgICAgICBsYWJlbDogXCJUb3BpY1wiLFxuICAgICAgICBvcHRpb25zOiBbXCJUZWNobm9sb2d5XCIsIFwiQmx1ZXRvb3RoXCJdLFxuICAgICAgICBjbGlja0FjdGlvbjogdGhpcy5maWx0ZXJUb3BpY1xuICAgICAgfVxuICAgIF07XG5cbiAgICAvLyBDaGVja2JveCBQcm9wc1xuICAgIGNvbnN0IGZhdm9yaXRlc0Rlc2t0b3AgPSB7XG4gICAgICBpZDogXCJlXCIsXG4gICAgICBsYWJlbDogXCJTaG93IG9ubHkgZmF2b3JpdGVzXCIsXG4gICAgICBmb250Q29sb3I6IFwicmdiKDY0IDEwMSAxNDkpXCIsXG4gICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgIGNsaWNrQWN0aW9uOiB0aGlzLnRvZ2dsZUZhdm9yaXRlZFNlYXJjaCxcbiAgICB9XG4gICAgY29uc3QgZmF2b3JpdGVzTW9iaWxlID0ge1xuICAgICAgaWQ6IFwiZlwiLFxuICAgICAgbGFiZWw6IFwiU2hvdyBGYXZvcml0ZXNcIixcbiAgICAgIGZvbnRDb2xvcjogXCJyZ2IoNjQgMTAxIDE0OSlcIixcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgY2xpY2tBY3Rpb246IHRoaXMudG9nZ2xlRmF2b3JpdGVkU2VhcmNoLFxuICAgIH1cblxuICAgIGxldCBmaWx0ZXJzID0gc2FtcGxlRGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gPEZpbHRlciBrZXk9e3Nob3J0aWQuZ2VuZXJhdGUoKX0gey4uLmRhdGF9Lz5cbiAgICB9KVxuXG4gICAgbGV0IHByb2R1Y3RUaHVtYm5haWxzLCByZXN1bHRJdGVtcywgcXVlcnlJdGVtcywgbWFuYWdlU2F2ZWRTZWFyY2hlcywgc2F2ZWRTZWFyY2hMaXN0Qm94LCBwb3B1bGFyU2VhcmNoTGlzdEJveDsgXG4gICAgY29uc3QgeyBwcm9kdWN0cywgZmF2b3JpdGVkLCBzYXZlZFNlYXJjaGVzLCBjb250ZW50c30gPSB0aGlzLnByb3BzLnNhbXBsZURhdGE7XG4gICAgaWYocHJvZHVjdHMpe1xuICAgICAgcHJvZHVjdFRodW1ibmFpbHMgPSBwcm9kdWN0cy5tYXAodmVoaWNsZSA9PiB7XG4gICAgICAgIGxldCB7aWQsIG1vZGVsTmFtZX0gPSB2ZWhpY2xlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpZH0gY2xhc3NOYW1lPVwicHJvZHVjdHMtd3JhcHBlclwiPlxuICAgICAgICAgICAgPFByb2R1Y3RUaHVtYm5haWwgey4uLnZlaGljbGV9IC8+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5wcm9kdWN0cy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICAgICAgICAgICAgICAvL1hYIE9uZSBjYXIgZGlzcGxheSBoZXJlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgICAgICAucHJvZHVjdHMtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZihjb250ZW50cyl7XG4gICAgICByZXN1bHRJdGVtcyA9IGNvbnRlbnRzLm1hcChjb250ZW50ID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17Y29udGVudC5pZH0gY2xhc3NOYW1lPVwiY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8UmVzdWx0SXRlbVNtYWxsIGtleT17Y29udGVudC5pZH0gey4uLmNvbnRlbnR9IC8+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5jb250ZW50LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY29udGVudC13cmFwcGVyOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBcbiAgICAvL1hYOiBDaGFuZ2UgY29udGVudHMgaW5wdXQgdG8gVXNlcidzIFNhdmVkIFNlYXJjaGVzXG4gICAgaWYoY29udGVudHMpIHtcbiAgICAgIGxldCBzYXZlZFNlYXJjaFByb3BzID0ge1xuICAgICAgICBpZDogJ3gnLFxuICAgICAgICB0aXRsZTogJ1NhdmVkIFNlYXJjaGVzJyxcbiAgICAgICAgY29sbGVjdGlvbjogY29udGVudHNcbiAgICAgIH1cbiAgICAgIHNhdmVkU2VhcmNoTGlzdEJveCA9IChcbiAgICAgICAgPExpc3RCb3gga2V5PXtjb250ZW50cy5pZH0gey4uLnNhdmVkU2VhcmNoUHJvcHN9Lz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy9YWDogQ2hhbmdlIGNvbnRlbnRzIGlucHV0IFBvcHVsYXIgU2VhcmNoZXNcbiAgICBpZihjb250ZW50cykge1xuICAgICAgbGV0IHBvcHVsYXJTZWFyY2hQcm9wcyA9IHtcbiAgICAgICAgaWQ6ICd5JyxcbiAgICAgICAgdGl0bGU6ICdQZW9wbGUgYWxzbyBzZWFyY2ggZm9yLi4uJyxcbiAgICAgICAgY29sbGVjdGlvbjogY29udGVudHNcbiAgICAgIH1cbiAgICAgIHBvcHVsYXJTZWFyY2hMaXN0Qm94ID0gKFxuICAgICAgICA8TGlzdEJveCBrZXk9e2NvbnRlbnRzLmlkfSB7Li4ucG9wdWxhclNlYXJjaFByb3BzfS8+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbm9ybWFsaXplLzcuMC4wL25vcm1hbGl6ZS5jc3NcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxoMz4oU0VBUkNIIFJFU1VMVCBQQUdFKTwvaDM+XG4gICAgICAgIDxCYW5uZXI+XG4gICAgICAgICAgPFNlYXJjaFNlY29uZGFyeS8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItd3JhcHBlclwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2t0b3Atdmlld1wiPjxDaGVja2JveCB7Li4uZmF2b3JpdGVzRGVza3RvcH0vPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtdmlld1wiPjxDaGVja2JveCB7Li4uZmF2b3JpdGVzTW9iaWxlfS8+PC9kaXY+XG5cbiAgICAgICAgICAgIHtmaWx0ZXJzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Jhbm5lcj5cbiAgICAgICAgXG4gICAgICAgIDxQYWdlU2VjdGlvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtd3JhcHBlclwiPlxuICAgICAgICAgICAgey8qIFByb2R1Y3RzIFNlY3Rpb24gKi99XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1zZWN0aW9uLWhlYWRlclwiPlByb2R1Y3RzPC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVoaWNsZS10aHVtYm5haWxzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAge3Byb2R1Y3RUaHVtYm5haWxzfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBDb250ZW50IFNlY3Rpb24gKi99XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1zZWN0aW9uLWhlYWRlclwiPkNvbnRlbnQ8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50cy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LWl0ZW1zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICB7cmVzdWx0SXRlbXN9XG4gICAgICAgICAgICAgICAgPFBhZ2luYXRpb24vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWJveC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWJveFwiPntzYXZlZFNlYXJjaExpc3RCb3h9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWJveFwiPntwb3B1bGFyU2VhcmNoTGlzdEJveH08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgPC9QYWdlU2VjdGlvbj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmRlc2t0b3AtdmlldyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9iaWxlLXZpZXcge1xuICAgICAgICAgICAgbWFyZ2luOiAzMnB4IDAgLTRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhZ2Utc2VjdGlvbi1oZWFkZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiA4cHg7Ly9cbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2IoMjMxLCAyMzEsIDIzMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vL1xuICAgICAgICAgIC5zZWFyY2gtcmVzdWx0LXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnZlaGljbGUtdGh1bWJuYWlscy13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZXN1bHQtaXRlbXMtd3JhcHBlciB7IC8vXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgICAgICAgZmxleDogMSAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGlzdC1ib3gtd3JhcHBlciB7XG4gICAgICAgICAgICBmbGV4OiAxIDMwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3QtYm94IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDMycHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgLmRlc2t0b3AtdmlldyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9iaWxlLXZpZXcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpbHRlci13cmFwcGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpbHRlci13cmFwcGVyID4gKiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZ2Utc2VjdGlvbi1oZWFkZXIge1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDZweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDEwcHggNnB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggNnB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250ZW50cy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlc3VsdC1pdGVtcy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDMycHggMTZweCAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBzYW1wbGVEYXRhOiBzdGF0ZS5zYW1wbGVEYXRhXG59KVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNlYXJjaFJlc3VsdHMpKTsiXX0= */\n/*@ sourceURL=pages/search-results.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return SearchResults;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    sampleData: state.sampleData
  };
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_5__lib_withRedux__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps)(SearchResults));

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SearchResults, 'SearchResults', '/Users/eddieyao/Desktop/gp_draft/pages/search-results.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/eddieyao/Desktop/gp_draft/pages/search-results.js');
  reactHotLoader.register(_default, 'default', '/Users/eddieyao/Desktop/gp_draft/pages/search-results.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/search-results")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.1b2722fe8d3094f136c1.hot-update.js.map