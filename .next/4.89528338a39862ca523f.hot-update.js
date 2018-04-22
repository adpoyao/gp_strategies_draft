webpackHotUpdate(4,{

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

/***/ "./components/SearchPrimary.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SearchDropdown__ = __webpack_require__("./components/SearchDropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_search__ = __webpack_require__("./actions/search.js");
var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/SearchPrimary.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var SearchPrimary = function (_Component) {
  _inherits(SearchPrimary, _Component);

  function SearchPrimary(props) {
    _classCallCheck(this, SearchPrimary);

    var _this = _possibleConstructorReturn(this, (SearchPrimary.__proto__ || Object.getPrototypeOf(SearchPrimary)).call(this, props));

    _this.onSavedSearchClick = function () {
      _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__actions_search__["i" /* toggleSavedSearch */])(!_this.props.savedSearch));
    };

    _this.onSubmit = function (e) {
      e.preventDefault();
      _this.props.handleSubmit();
    };

    _this.state = {
      predictiveInput: '',
      debouncedSearch: ''
    };
    return _this;
  }

  _createClass(SearchPrimary, [{
    key: 'onHandleInputChange',
    value: function onHandleInputChange(event) {
      var _this2 = this;

      event.persist();
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__actions_search__["j" /* updateSearchTerm */])(event.target.value));
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__actions_search__["i" /* toggleSavedSearch */])(false));

      // Predictive Search
      // XX: Insert predictive search output based on queried results ~
      var predictiveOutput = "Elantra";
      if (event.target.value === "") {
        this.setState({ predictiveInput: "" });
      } else if (predictiveOutput.toLowerCase().indexOf(event.target.value.toLowerCase()) === 0) {
        var currentLength = event.target.value.length;
        this.setState({ predictiveInput: event.target.value.toString() + predictiveOutput.substring(currentLength) });
      } else {
        // XX: Invoke another call for new query data here.
        this.setState({ predictiveInput: "" });
      }

      // Debounces every 0.5 second to prevent flooding of API request
      _.debounce(function (event) {
        _this2.setState({ debouncedSearch: _this2.props.searchTerm });
      }, 500)(event);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var searchDropdown = void 0;
      // Search Dropdown is visible when either:
      // (1) Saved Search option is toggled on, or
      // (2) There is sufficient data from both regular and debounced search inputs.
      // XX: May need additional logics here to render search results ~
      if (this.props.savedSearch || this.state.debouncedSearch && this.state.debouncedSearch.length > 1 && this.props.searchTerm.length > 0) {
        searchDropdown = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__SearchDropdown__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        });
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-902442318' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'form',
          {
            onSubmit: function onSubmit(e) {
              return _this3.onSubmit(e);
            }, htmlFor: 'search',
            className: 'jsx-902442318',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-902442318' + ' ' + 'input-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-902442318' + ' ' + 'input-inner-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863',
                className: 'jsx-902442318' + ' ' + 'search-icon magnifying-glass',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 73
                }
              }),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { id: 'search-div', className: 'jsx-902442318',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
                  type: 'text',
                  id: 'background-input',
                  value: this.state.predictiveInput,
                  className: 'jsx-902442318',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                  }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
                  type: 'text',
                  id: 'search',
                  placeholder: 'Search by vehicle, topic, keyword or content title...',
                  onChange: function onChange(event) {
                    return _this3.onHandleInputChange(event);
                  },
                  value: this.props.searchTerm,
                  className: 'jsx-902442318',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                  }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
                  type: 'submit',
                  value: this.props.searchTerm,
                  hidden: true,
                  className: 'jsx-902442318',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-902442318' + ' ' + 'mobile-search-btn-wrapper',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863',
                  className: 'jsx-902442318' + ' ' + 'mobile-search-button magnifying-glass',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                  }
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'p',
              { onClick: function onClick() {
                  return _this3.onSavedSearchClick();
                }, className: 'jsx-902442318' + ' ' + 'saved-searches',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 106
                }
              },
              'Saved Searches'
            )
          )
        ),
        searchDropdown,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '902442318',
          css: '.container.jsx-902442318{max-width:606px;width:100%;}.magnifying-glass.jsx-902442318{max-width:24px;max-height:14px;width:auto;height:auto;margin:0 16px;display:none;}form.jsx-902442318{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.input-wrapper.jsx-902442318{-webkit-flex:1 80%;-ms-flex:1 80%;flex:1 80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:64px;max-width:600px;background:white;border-radius:4px;}.input-inner-wrapper.jsx-902442318{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#search-div.jsx-902442318{position:relative;width:100%;}#background-input.jsx-902442318{position:absolute;width:100%;color:rgb(171,171,171);}#search.jsx-902442318{position:relative;background:transparent;width:100%;}input.jsx-902442318{-webkit-flex:1;-ms-flex:1;flex:1;border:none;outline:none;font-size:1em;color:black;padding:0 0 0 16px;}.jsx-902442318::-webkit-input-placeholder{color:rgb(171,171,171);opacity:1;}.jsx-902442318::-moz-placeholder{color:rgb(171,171,171);opacity:1;}.jsx-902442318:-ms-input-placeholder{color:rgb(171,171,171);opacity:1;}.jsx-902442318::placeholder{color:rgb(171,171,171);opacity:1;}.jsx-902442318:-ms-input-placeholder{color:rgb(171,171,171);}.jsx-902442318::-ms-input-placeholder{color:rgb(171,171,171);}.saved-searches.jsx-902442318{display:none;position:relative;}.mobile-search-button.jsx-902442318{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:8px;}.mobile-search-btn-wrapper.jsx-902442318{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:40px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);-moz-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);}@media all and (min-width:376px){.search-icon.jsx-902442318{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 12px;}input.jsx-902442318{padding:0;}.mobile-search-button.jsx-902442318{display:none;}.saved-searches.jsx-902442318{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:rgb(64 102 149);margin-right:24px;padding:5px;min-width:61px;border-bottom:1px solid rgb(64 102 149);font:600 0.938em system-ui;-webkit-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);-moz-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);cursor:pointer;}.input-wrapper.jsx-902442318{margin-right:32px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoUHJpbWFyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSG9CLEFBRzZCLEFBSUQsQUFRRixBQUdGLEFBV0UsQUFNSyxBQUlBLEFBTUEsQUFNWCxBQVNrQixBQUlFLEFBR0EsQUFHZCxBQUlBLEFBS0EsQUFTRSxBQUlILEFBR0csQUFHQSxBQWFLLFVBbEJwQixHQXRCa0IsQUF5QmxCLEVBeEZnQixDQUpMLEVBZ0NBLEFBSUEsQUFNWSxBQWtFdkIsS0FuRFUsQUFJWixBQUdBLElBL0RBLEVBZ0NBLEFBSTJCLEVBaENkLEFBK0RiLEVBcEJjLEFBVWQsUUFmYSxDQXJDQyxHQVNDLEFBa0NBLE9BVmYsQUFLQSxFQXJDZ0IsSUEyQ0EsVUExQ0QsSUEyQ0QsRUF2Q2QsQUFjUyxBQTZDVSxBQUtMLEFBU0ksQUFVUSxPQXRGMUIsR0E0Q3FCLEVBd0JBLEVBU25CLEdBYkYsS0F1QnNCLE9BMUN0QixJQTNCcUIsT0FzRUwsS0FqRk8sT0FrRkosZUFDeUIsc0NBckJpQixFQXNCOUIsYUFuRlYsTUFXckIsUUF5RStELDhCQXRCTCw2QkF1QkUsb0JBcEY1QixPQThEcUIsNkJBdUJFLHNCQXRCdkQsNkJBdUJtQixlQUNqQixhQXRGWSxZQUNJLGdCQUNDLGlCQUNDLGtCQUNwQiIsImZpbGUiOiJjb21wb25lbnRzL1NlYXJjaFByaW1hcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCBTZWFyY2hEcm9wZG93biBmcm9tICcuL1NlYXJjaERyb3Bkb3duJztcbiBcbmltcG9ydCB7IHVwZGF0ZVNlYXJjaFRlcm0sIHRvZ2dsZVNhdmVkU2VhcmNoIH0gZnJvbSAnLi4vYWN0aW9ucy9zZWFyY2gnO1xuXG5jbGFzcyBTZWFyY2hQcmltYXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIHByZWRpY3RpdmVJbnB1dDogJycsXG4gICAgICBkZWJvdW5jZWRTZWFyY2g6ICcnLFxuICAgIH07XG4gIH1cblxuICBvbkhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KXtcbiAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godG9nZ2xlU2F2ZWRTZWFyY2goZmFsc2UpKTtcblxuICAgIC8vIFByZWRpY3RpdmUgU2VhcmNoXG4gICAgLy8gWFg6IEluc2VydCBwcmVkaWN0aXZlIHNlYXJjaCBvdXRwdXQgYmFzZWQgb24gcXVlcmllZCByZXN1bHRzIH5cbiAgICBsZXQgcHJlZGljdGl2ZU91dHB1dCA9IFwiRWxhbnRyYVwiO1xuICAgIGlmKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJlZGljdGl2ZUlucHV0OiBcIlwifSk7XG4gICAgfSBlbHNlIGlmIChwcmVkaWN0aXZlT3V0cHV0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSkgPT09IDApe1xuICAgICAgbGV0IGN1cnJlbnRMZW5ndGggPSBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJlZGljdGl2ZUlucHV0OiBldmVudC50YXJnZXQudmFsdWUudG9TdHJpbmcoKSArIHByZWRpY3RpdmVPdXRwdXQuc3Vic3RyaW5nKGN1cnJlbnRMZW5ndGgpfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFhYOiBJbnZva2UgYW5vdGhlciBjYWxsIGZvciBuZXcgcXVlcnkgZGF0YSBoZXJlLlxuICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJlZGljdGl2ZUlucHV0OiBcIlwifSk7XG4gICAgfVxuXG4gICAgLy8gRGVib3VuY2VzIGV2ZXJ5IDAuNSBzZWNvbmQgdG8gcHJldmVudCBmbG9vZGluZyBvZiBBUEkgcmVxdWVzdFxuICAgIF8uZGVib3VuY2UoKGV2ZW50KT0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2RlYm91bmNlZFNlYXJjaDogdGhpcy5wcm9wcy5zZWFyY2hUZXJtfSk7XG4gICAgfSwgNTAwKShldmVudCk7XG4gIH07XG5cbiAgb25TYXZlZFNlYXJjaENsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godG9nZ2xlU2F2ZWRTZWFyY2goIXRoaXMucHJvcHMuc2F2ZWRTZWFyY2gpKTtcbiAgfVxuXG4gIG9uU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc2VhcmNoRHJvcGRvd247XG4gICAgLy8gU2VhcmNoIERyb3Bkb3duIGlzIHZpc2libGUgd2hlbiBlaXRoZXI6XG4gICAgLy8gKDEpIFNhdmVkIFNlYXJjaCBvcHRpb24gaXMgdG9nZ2xlZCBvbiwgb3JcbiAgICAvLyAoMikgVGhlcmUgaXMgc3VmZmljaWVudCBkYXRhIGZyb20gYm90aCByZWd1bGFyIGFuZCBkZWJvdW5jZWQgc2VhcmNoIGlucHV0cy5cbiAgICAvLyBYWDogTWF5IG5lZWQgYWRkaXRpb25hbCBsb2dpY3MgaGVyZSB0byByZW5kZXIgc2VhcmNoIHJlc3VsdHMgflxuICAgIGlmKHRoaXMucHJvcHMuc2F2ZWRTZWFyY2ggfHwgdGhpcy5zdGF0ZS5kZWJvdW5jZWRTZWFyY2ggJiYgdGhpcy5zdGF0ZS5kZWJvdW5jZWRTZWFyY2gubGVuZ3RoID4gMSAmJiB0aGlzLnByb3BzLnNlYXJjaFRlcm0ubGVuZ3RoID4gMCkge1xuICAgICAgc2VhcmNoRHJvcGRvd24gPSA8U2VhcmNoRHJvcGRvd24gLz5cbiAgICB9O1xuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGZvcm0gXG4gICAgICAgICAgb25TdWJtaXQ9eyhlKT0+dGhpcy5vblN1Ym1pdChlKX0gaHRtbEZvcj1cInNlYXJjaFwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1pbm5lci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIHsvKiBYWDogVGVtcG9yYXJ5IHVzZSBvZiBTZWFyY2ggSWNvbiB+Ki99XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cucGljcG5nLmNvbS9pbWFnZXMvc21hbGwvbWFnbmlmeWluZy1nbGFzcy1zZWFyY2gtbG91cGUtaW1hZ2UtZG93bmxvYWQtNDk4NjNcIiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtaWNvbiBtYWduaWZ5aW5nLWdsYXNzXCIvPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaC1kaXZcIj5cbiAgICAgICAgICAgICAgICB7LyogRmlyc3QgSW5wdXQgaXMgdG8gcmVuZGVyIGdyZXksIHByZWRpY3RpdmUgdGV4dHMgKi99XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJiYWNrZ3JvdW5kLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByZWRpY3RpdmVJbnB1dH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHsvKiBTZWNvbmQgSW5wdXQgaXMgdGhlIHN0YW5kYXJkIHRleHQgdGhhdCB1c2VycyBjb3VsZCByZWFkIGFuZCB0eXBlIGluICovfVxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IHZlaGljbGUsIHRvcGljLCBrZXl3b3JkIG9yIGNvbnRlbnQgdGl0bGUuLi5cIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCk9PnRoaXMub25IYW5kbGVJbnB1dENoYW5nZShldmVudCl9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5zZWFyY2hUZXJtfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgey8qIFRoaXJkIElucHV0IChoaWRkZW4pIGlzIHRvIGFsbG93IGZvcm0gc3VibWl0dGFsIHdpdGggRW50ZXIga2V5ZG93biAgKi99XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnNlYXJjaFRlcm19XG4gICAgICAgICAgICAgICAgICBoaWRkZW5cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7LyogWFg6IFRlbXBvcmFyeSBtYWduaWZ5aW5nIGdsYXNzIGljb24gKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLXNlYXJjaC1idG4td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cucGljcG5nLmNvbS9pbWFnZXMvc21hbGwvbWFnbmlmeWluZy1nbGFzcy1zZWFyY2gtbG91cGUtaW1hZ2UtZG93bmxvYWQtNDk4NjNcIiBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vYmlsZS1zZWFyY2gtYnV0dG9uIG1hZ25pZnlpbmctZ2xhc3NcIi8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxwIG9uQ2xpY2s9eygpPT50aGlzLm9uU2F2ZWRTZWFyY2hDbGljaygpfSBjbGFzc05hbWU9XCJzYXZlZC1zZWFyY2hlc1wiPlNhdmVkIFNlYXJjaGVzPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICB7c2VhcmNoRHJvcGRvd259XG5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwNnB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tYWduaWZ5aW5nLWdsYXNzIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjRweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgICBmbGV4OiAxIDgwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQtaW5uZXItd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI3NlYXJjaC1kaXYge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgICNiYWNrZ3JvdW5kLWlucHV0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgY29sb3I6IHJnYigxNzEsIDE3MSwgMTcxKTtcblxuICAgICAgICAgIH1cbiAgICAgICAgICAjc2VhcmNoIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIC8vWFg6IHRvdGFsIG9mIDQ4cHggZm9yIGxlZnQtcGFkZGluZ1xuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICAgICAgICAgICAgY29sb3I6IHJnYigxNzEsIDE3MSwgMTcxKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cbiAgICAgICAgICB9XG4gICAgICAgICAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTcxLCAxNzEsIDE3MSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cbiAgICAgICAgICAgICAgY29sb3I6IHJnYigxNzEsIDE3MSwgMTcxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNhdmVkLXNlYXJjaGVzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2JpbGUtc2VhcmNoLWJ1dHRvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vYmlsZS1zZWFyY2gtYnRuLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xNnB4IDBweCAxNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogLTE2cHggMHB4IDE1cHggLTNweCByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogLTE2cHggMHB4IDE1cHggLTNweCByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgLnNlYXJjaC1pY29uIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9iaWxlLXNlYXJjaC1idXR0b24ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNhdmVkLXNlYXJjaGVzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYig2NCAxMDIgMTQ5KTtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogNjFweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig2NCAxMDIgMTQ5KTtcbiAgICAgICAgICAgICAgZm9udDogNjAwIDAuOTM4ZW0gc3lzdGVtLXVpO1xuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xNnB4IDBweCAxNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAtMTZweCAwcHggMTVweCAtM3B4IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xNnB4IDBweCAxNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmlucHV0LXdyYXBwZXIge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+ICAgICAgXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBzZWFyY2hUZXJtOiBzdGF0ZS5zZWFyY2guc2VhcmNoVGVybSxcbiAgc2F2ZWRTZWFyY2g6IHN0YXRlLnNlYXJjaC5zYXZlZFNlYXJjaFRvZ2dsZSxcbn0pXG5cblNlYXJjaFByaW1hcnkucHJvcFR5cGVzID0ge1xuICBoYW5kbGVTdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIC8vIEZ1bmN0aW9uIHRvIGludm9rZSBFbnRlciBrZXlkb3duIChzaG91bGQgYmUgc2FtZSBhcyBQcmltYXJ5IEJ1dHRvbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2VhcmNoUHJpbWFyeSk7Il19 */\n/*@ sourceURL=components/SearchPrimary.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return SearchPrimary;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    searchTerm: state.search.searchTerm,
    savedSearch: state.search.savedSearchToggle
  };
};

SearchPrimary.propTypes = {
  handleSubmit: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func.isRequired // Function to invoke Enter keydown (should be same as Primary Button);
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps)(SearchPrimary);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SearchPrimary, 'SearchPrimary', '/Users/eddieyao/Desktop/gp_draft/components/SearchPrimary.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/eddieyao/Desktop/gp_draft/components/SearchPrimary.js');
  reactHotLoader.register(_default, 'default', '/Users/eddieyao/Desktop/gp_draft/components/SearchPrimary.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/link.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/link.js")


/***/ }),

/***/ "./pages/dashboard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_withRedux__ = __webpack_require__("./lib/withRedux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_SearchPrimary__ = __webpack_require__("./components/SearchPrimary.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_PrimaryButton__ = __webpack_require__("./components/PrimaryButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_search__ = __webpack_require__("./actions/search.js");
var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/pages/dashboard.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var Dashboard = function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: 'handleSearchClick',
    value: function handleSearchClick() {
      // XX: Insert GraphQL search query here ~
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__actions_search__["i" /* toggleSavedSearch */])(false));
      __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push("/search-results");
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-797992003',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css', className: 'jsx-797992003',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', className: 'jsx-797992003',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-797992003' + ' ' + 'container',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_SearchPrimary__["a" /* default */], {
            handleSubmit: function handleSubmit() {
              _this2.handleSearchClick();
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-797992003' + ' ' + 'primary-search-button',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_PrimaryButton__["a" /* default */], {
              name: 'Submit',
              handleSubmit: function handleSubmit() {
                _this2.handleSearchClick();
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '797992003',
          css: '.container.jsx-797992003{background:lightgrey;padding:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;height:100vw;}.primary-search-button.jsx-797992003{display:none;}@media all and (min-width:376px){.primary-search-button.jsx-797992003{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:64px;width:183px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q29CLEFBR2tDLEFBUVIsQUFJRSxhQUhqQixRQVJlLGFBQ0Esd0NBV0MsWUFDQSxZQUNkLFVBWnFCLDJFQUNNLHlHQUNkLGFBQ2YiLCJmaWxlIjoicGFnZXMvZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lZGRpZXlhby9EZXNrdG9wL2dwX2RyYWZ0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJy4uL2xpYi93aXRoUmVkdXgnO1xuaW1wb3J0IFNlYXJjaFByaW1hcnkgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hQcmltYXJ5JztcbmltcG9ydCBQcmltYXJ5QnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvUHJpbWFyeUJ1dHRvbic7XG5cbmltcG9ydCB7IHVwZGF0ZVNlYXJjaFRlcm0sIHRvZ2dsZVNhdmVkU2VhcmNoIH0gZnJvbSAnLi4vYWN0aW9ucy9zZWFyY2gnO1xuXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGhhbmRsZVNlYXJjaENsaWNrKCkge1xuICAgIC8vIFhYOiBJbnNlcnQgR3JhcGhRTCBzZWFyY2ggcXVlcnkgaGVyZSB+XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh0b2dnbGVTYXZlZFNlYXJjaChmYWxzZSkpO1xuICAgIFJvdXRlci5wdXNoKFwiL3NlYXJjaC1yZXN1bHRzXCIpO1xuICB9O1xuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbm9ybWFsaXplLzcuMC4wL25vcm1hbGl6ZS5jc3NcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8U2VhcmNoUHJpbWFyeSBcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17KCk9Pnt0aGlzLmhhbmRsZVNlYXJjaENsaWNrKCl9fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaW1hcnktc2VhcmNoLWJ1dHRvblwiPlxuICAgICAgICAgICAgPFByaW1hcnlCdXR0b24gXG4gICAgICAgICAgICAgIG5hbWU9XCJTdWJtaXRcIlxuICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQ9eygpPT57dGhpcy5oYW5kbGVTZWFyY2hDbGljaygpfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2dztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByaW1hcnktc2VhcmNoLWJ1dHRvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgLnByaW1hcnktc2VhcmNoLWJ1dHRvbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDE4M3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgc2VhcmNoVGVybTogc3RhdGUuc2VhcmNoLnNlYXJjaFRlcm0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShEYXNoYm9hcmQpKTsiXX0= */\n/*@ sourceURL=pages/dashboard.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Dashboard;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    searchTerm: state.search.searchTerm
  };
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_5__lib_withRedux__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps)(Dashboard));

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Dashboard, 'Dashboard', '/Users/eddieyao/Desktop/gp_draft/pages/dashboard.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/eddieyao/Desktop/gp_draft/pages/dashboard.js');
  reactHotLoader.register(_default, 'default', '/Users/eddieyao/Desktop/gp_draft/pages/dashboard.js');
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/dashboard")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.89528338a39862ca523f.hot-update.js.map