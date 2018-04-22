module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/actionType.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return TOGGLE_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CLEAR_FILTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return TOGGLE_SAVED_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return TOGGLE_SHOW_FAVORITES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return UPDATE_SEARCH_TERM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_STATUS_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_CONTENT_TYPE_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_TOPIC_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return REMOVE_STATUS_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REMOVE_CONTENT_TYPE_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REMOVE_TOPIC_FILTER; });
// SEARCH
var TOGGLE_FILTER = 'TOGGLE_FILTER';
var CLEAR_FILTERS = 'CLEAR_FILTERS';
var TOGGLE_SAVED_SEARCH = 'TOGGLE_SAVED_SEARCH';
var TOGGLE_SHOW_FAVORITES = 'TOGGLE_SHOW_FAVORITES';
var UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
var ADD_STATUS_FILTER = 'ADD_STATUS_FILTER';
var ADD_CONTENT_TYPE_FILTER = 'ADD_CONTENT_TYPE_FILTER';
var ADD_TOPIC_FILTER = 'ADD_TOPIC_FILTER';
var REMOVE_STATUS_FILTER = 'REMOVE_STATUS_FILTER';
var REMOVE_CONTENT_TYPE_FILTER = 'REMOVE_CONTENT_TYPE_FILTER';
var REMOVE_TOPIC_FILTER = 'REMOVE_TOPIC_FILTER';

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return updateSearchTerm; });
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


var updateSearchTerm = function updateSearchTerm(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionType__["k" /* UPDATE_SEARCH_TERM */],
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
    type: __WEBPACK_IMPORTED_MODULE_0__actionType__["i" /* TOGGLE_SAVED_SEARCH */],
    boolean: boolean
  };
};

var toggleShowFavorites = function toggleShowFavorites(boolean) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionType__["j" /* TOGGLE_SHOW_FAVORITES */],
    boolean: boolean
  };
};

var toggleFilter = function toggleFilter(id) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionType__["h" /* TOGGLE_FILTER */],
    id: id
  };
};

var clearFilters = function clearFilters() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__actionType__["d" /* CLEAR_FILTERS */]
  };
};

/***/ }),

/***/ "./components/Banner.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/Banner.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Banner = function (_Component) {
  _inherits(Banner, _Component);

  function Banner() {
    _classCallCheck(this, Banner);

    return _possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).apply(this, arguments));
  }

  _createClass(Banner, [{
    key: 'render',
    value: function render() {

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-1904684097' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-1904684097' + ' ' + 'children-wrapper',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          this.props.children
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1904684097',
          css: '.container.jsx-1904684097{background:linear-gradient(297.24deg,#EBEDEE 0%,#FBFBFB 100%);padding:5%;}@media all and (min-width:376px){.container.jsx-1904684097{height:200px;}.children-wrapper.jsx-1904684097{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQmFubmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFvQixBQUc2RSxBQUtqRCxBQUdBLGFBRmYsaURBTFcsV0FDYixDQU80QixvRkFDTSxtSEFDaEMiLCJmaWxlIjoiY29tcG9uZW50cy9CYW5uZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY2xhc3MgQmFubmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZHJlbi13cmFwcGVyXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyOTcuMjRkZWcsICNFQkVERUUgMCUsICNGQkZCRkIgMTAwJSk7XG4gICAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoaWxkcmVuLXdyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShCYW5uZXIpOyJdfQ== */\n/*@ sourceURL=components/Banner.js */'
        })
      );
    }
  }]);

  return Banner;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])()(Banner));

/***/ }),

/***/ "./components/BreadCrumbs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/BreadCrumbs.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var BreadCrumbs = function (_Component) {
  _inherits(BreadCrumbs, _Component);

  function BreadCrumbs() {
    _classCallCheck(this, BreadCrumbs);

    return _possibleConstructorReturn(this, (BreadCrumbs.__proto__ || Object.getPrototypeOf(BreadCrumbs)).apply(this, arguments));
  }

  _createClass(BreadCrumbs, [{
    key: 'render',
    value: function render() {

      var display = this.props.paths.map(function (path, index) {
        if (path.route) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { key: index, className: 'jsx-90375880' + ' ' + 'path-section',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'p',
              {
                className: 'jsx-90375880',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                { href: path.route, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'span',
                  {
                    className: 'jsx-90375880' + ' ' + 'route',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 14
                    }
                  },
                  path.title
                )
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'span',
                {
                  className: 'jsx-90375880',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                  }
                },
                path.arrow
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
              styleId: '90375880',
              css: '.path-section.jsx-90375880{font:400 0.875em system-ui;}.route.jsx-90375880{-webkit-text-decoration:underline;text-decoration:underline;color:rgb(64 102 149);cursor:pointer;}span.jsx-90375880{padding:4px;color:#939393;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnJlYWRDcnVtYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0J3QixBQUc0QyxBQUdELEFBS2QsWUFFZixjQUFDLENBVEEsaUNBR3dCLHNCQUNQLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvQnJlYWRDcnVtYnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIEJyZWFkQ3J1bWJzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IGRpc3BsYXkgPSB0aGlzLnByb3BzLnBhdGhzLm1hcCgocGF0aCwgaW5kZXgpID0+IHtcbiAgICAgIGlmKHBhdGgucm91dGUpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicGF0aC1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cGF0aC5yb3V0ZX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm91dGVcIj57cGF0aC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvTGluaz4gIFxuICAgICAgICAgICAgICA8c3Bhbj57cGF0aC5hcnJvd308L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLnBhdGgtc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgZm9udDogNDAwIDAuODc1ZW0gc3lzdGVtLXVpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5yb3V0ZSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYig2NCAxMDIgMTQ5KTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTM5MzkzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJwYXRoLXNlY3Rpb24gZW5kXCI+XG4gICAgICAgICAgICA8cD57cGF0aC50aXRsZX08L3A+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLnBhdGgtc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgZm9udDogNDAwIDAuODc1ZW0gc3lzdGVtLXVpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5lbmQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDU0NTQ1O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICB7ZGlzcGxheX1cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleDogMSAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDU5cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5CcmVhZENydW1icy5wcm9wVHlwZXMgPSB7XG4gIHBhdGg6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICByb3V0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhcnJvdzogUHJvcFR5cGVzLnN0cmluZywgLy8gKFwiPlwiLCBcIjxcIiwgb3IgdW5kZWZpbmVkKVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBCcmVhZENydW1iczsiXX0= */\n/*@ sourceURL=components/BreadCrumbs.js */'
            })
          );
        } else {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { key: index, className: 'jsx-2194895305' + ' ' + 'path-section end',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'p',
              {
                className: 'jsx-2194895305',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              },
              path.title
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
              styleId: '2194895305',
              css: '.path-section.jsx-2194895305{font:400 0.875em system-ui;}.end.jsx-2194895305{color:#454545;font-weight:500;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnJlYWRDcnVtYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUN3QixBQUc0QyxBQUdiLGNBQ0UsYUFIbEIsR0FJQSIsImZpbGUiOiJjb21wb25lbnRzL0JyZWFkQ3J1bWJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lZGRpZXlhby9EZXNrdG9wL2dwX2RyYWZ0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBCcmVhZENydW1icyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBkaXNwbGF5ID0gdGhpcy5wcm9wcy5wYXRocy5tYXAoKHBhdGgsIGluZGV4KSA9PiB7XG4gICAgICBpZihwYXRoLnJvdXRlKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInBhdGgtc2VjdGlvblwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3BhdGgucm91dGV9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdXRlXCI+e3BhdGgudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L0xpbms+ICBcbiAgICAgICAgICAgICAgPHNwYW4+e3BhdGguYXJyb3d9PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5wYXRoLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQ6IDQwMCAwLjg3NWVtIHN5c3RlbS11aTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucm91dGUge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoNjQgMTAyIDE0OSk7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzkzOTM5M1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj4pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicGF0aC1zZWN0aW9uIGVuZFwiPlxuICAgICAgICAgICAgPHA+e3BhdGgudGl0bGV9PC9wPlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5wYXRoLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQ6IDQwMCAwLjg3NWVtIHN5c3RlbS11aTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZW5kIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ1NDU0NTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAge2Rpc3BsYXl9XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXg6IDEgMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1OXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQnJlYWRDcnVtYnMucHJvcFR5cGVzID0ge1xuICBwYXRoOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcm91dGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYXJyb3c6IFByb3BUeXBlcy5zdHJpbmcsIC8vIChcIj5cIiwgXCI8XCIsIG9yIHVuZGVmaW5lZClcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJlYWRDcnVtYnM7Il19 */\n/*@ sourceURL=components/BreadCrumbs.js */'
            })
          );
        }
      });

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-2736302887' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        },
        display,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2736302887',
          css: '.container.jsx-2736302887{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 100%;-ms-flex:1 100%;flex:1 100%;}@media all and (min-width:376px){.container.jsx-2736302887{margin-top:59px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnJlYWRDcnVtYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERvQixBQUcwQixBQUtLLGdCQUNsQiwwREFMWSxnREFDZCIsImZpbGUiOiJjb21wb25lbnRzL0JyZWFkQ3J1bWJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lZGRpZXlhby9EZXNrdG9wL2dwX2RyYWZ0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBCcmVhZENydW1icyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBkaXNwbGF5ID0gdGhpcy5wcm9wcy5wYXRocy5tYXAoKHBhdGgsIGluZGV4KSA9PiB7XG4gICAgICBpZihwYXRoLnJvdXRlKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInBhdGgtc2VjdGlvblwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3BhdGgucm91dGV9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdXRlXCI+e3BhdGgudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L0xpbms+ICBcbiAgICAgICAgICAgICAgPHNwYW4+e3BhdGguYXJyb3d9PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5wYXRoLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQ6IDQwMCAwLjg3NWVtIHN5c3RlbS11aTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucm91dGUge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoNjQgMTAyIDE0OSk7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzkzOTM5M1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj4pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicGF0aC1zZWN0aW9uIGVuZFwiPlxuICAgICAgICAgICAgPHA+e3BhdGgudGl0bGV9PC9wPlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5wYXRoLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQ6IDQwMCAwLjg3NWVtIHN5c3RlbS11aTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZW5kIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ1NDU0NTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAge2Rpc3BsYXl9XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXg6IDEgMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1OXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQnJlYWRDcnVtYnMucHJvcFR5cGVzID0ge1xuICBwYXRoOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcm91dGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYXJyb3c6IFByb3BUeXBlcy5zdHJpbmcsIC8vIChcIj5cIiwgXCI8XCIsIG9yIHVuZGVmaW5lZClcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJlYWRDcnVtYnM7Il19 */\n/*@ sourceURL=components/BreadCrumbs.js */'
        })
      );
    }
  }]);

  return BreadCrumbs;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

BreadCrumbs.propTypes = {
  path: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
    title: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired,
    route: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    arrow: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string // (">", "<", or undefined)
  })
};

/* harmony default export */ __webpack_exports__["a"] = (BreadCrumbs);

/***/ }),

/***/ "./components/Checkbox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/Checkbox.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this.handleClick = function (e) {
      _this.setState({ checked: !_this.state.checked });
      if (_this.props.clickAction) {
        _this.props.clickAction(_this.props.clickAction(e.target.checked, _this.props.label));
      };
    };

    _this.state = {
      checked: false
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.checked) {
        this.setState({ checked: true });
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var labelColor = void 0,
          checkMark = void 0;

      if (this.props.fontColor) {
        labelColor = this.props.fontColor;
      } else {
        labelColor = this.state.checked ? "black" : "rgb(69 69 69)";
      };

      if (this.state.checked) {
        // XX: Temporary use of check mark image ~
        checkMark = '\n        background-size: 100%;\n        background-image: url(\'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Check_mark_23x20_04.svg/1178px-Check_mark_23x20_04.svg.png\');\n        background-repeat: no-repeat;\n        background-position: center;';
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['3236848365', [labelColor, checkMark]]]) + ' ' + 'control__group container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'label',
          { htmlFor: this.props.id, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['3236848365', [labelColor, checkMark]]]) + ' ' + 'control control__checkbox',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
            type: 'checkbox',
            id: this.props.id,
            onClick: function onClick(e) {
              return _this2.handleClick(e);
            },
            checked: this.state.checked,
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['3236848365', [labelColor, checkMark]]]),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['3236848365', [labelColor, checkMark]]]) + ' ' + 'control__indicator',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          }),
          this.props.label
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3236848365',
          css: '.container.__jsx-style-dynamic-selector{font:400 1em system-ui;color:rgb(64 101 149);}.control__group.__jsx-style-dynamic-selector{margin-bottom:32px;}.control__group.__jsx-style-dynamic-selector:last-child{margin-bottom:0;}.control.__jsx-style-dynamic-selector{display:block;font-size:1em;color:' + labelColor + ';}.control.__jsx-style-dynamic-selector:hover{cursor:pointer;}input.__jsx-style-dynamic-selector{position:absolute;visibility:hidden;}.control__indicator.__jsx-style-dynamic-selector{width:20px;height:20px;display:inline-block;margin-right:8px;position:relative;border:1px solid black;border-radius:2px;box-sizing:border-box;vertical-align:middle;' + checkMark + ';}.control__checkbox.__jsx-style-dynamic-selector{margin:8px 0;}@media all and (min-width:376px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hlY2tib3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RvQixBQUdvQyxBQUlKLEFBR0gsQUFHRixBQUtBLEFBR0csQUFJUCxBQVlHLFdBWEYsRUFZYixDQXhCZ0IsQ0FLaEIsQ0FSQSxFQVdvQixDQWRwQixJQUhELEFBc0J1QixLQVplLFFBUXJDLFFBS2tCLENBdkJsQixnQkF3Qm1CLEVBYm5CLGdCQWN3Qix1QkFDTCxrQkFDSyxzQkFDQSxzQkFFekIsNkJBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9DaGVja2JveC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICB9O1xuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5jaGVja2VkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtjaGVja2VkOiB0cnVlfSlcbiAgICB9O1xuICB9O1xuXG4gIGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtjaGVja2VkOiAhdGhpcy5zdGF0ZS5jaGVja2VkfSlcbiAgICBpZiAodGhpcy5wcm9wcy5jbGlja0FjdGlvbikge1xuICAgICAgdGhpcy5wcm9wcy5jbGlja0FjdGlvbih0aGlzLnByb3BzLmNsaWNrQWN0aW9uKGUudGFyZ2V0LmNoZWNrZWQsIHRoaXMucHJvcHMubGFiZWwpKTtcbiAgICB9O1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbGFiZWxDb2xvciwgY2hlY2tNYXJrO1xuICAgIFxuICAgIGlmKHRoaXMucHJvcHMuZm9udENvbG9yKXtcbiAgICAgIGxhYmVsQ29sb3IgPSB0aGlzLnByb3BzLmZvbnRDb2xvclxuICAgIH0gZWxzZSB7XG4gICAgICBsYWJlbENvbG9yID0gdGhpcy5zdGF0ZS5jaGVja2VkID8gXCJibGFja1wiIDogXCJyZ2IoNjkgNjkgNjkpXCI7XG4gICAgfTtcblxuICAgIGlmKHRoaXMuc3RhdGUuY2hlY2tlZCkge1xuICAgICAgLy8gWFg6IFRlbXBvcmFyeSB1c2Ugb2YgY2hlY2sgbWFyayBpbWFnZSB+XG4gICAgICBjaGVja01hcmsgPSBgXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzgvODYvQ2hlY2tfbWFya18yM3gyMF8wNC5zdmcvMTE3OHB4LUNoZWNrX21hcmtfMjN4MjBfMDQuc3ZnLnBuZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7YFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sX19ncm91cCBjb250YWluZXJcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wgY29udHJvbF9fY2hlY2tib3hcIiBodG1sRm9yPXt0aGlzLnByb3BzLmlkfT5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIiBcbiAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfSBcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKT0+dGhpcy5oYW5kbGVDbGljayhlKX0gXG4gICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbF9faW5kaWNhdG9yXCI+PC9kaXY+XG4gICAgICAgICAge3RoaXMucHJvcHMubGFiZWx9XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZm9udDogNDAwIDFlbSBzeXN0ZW0tdWk7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDY0IDEwMSAxNDkpICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250cm9sX19ncm91cCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udHJvbF9fZ3JvdXA6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udHJvbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgY29sb3I6ICR7bGFiZWxDb2xvcn07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250cm9sOmhvdmVye1xuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0e1xuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250cm9sX19pbmRpY2F0b3J7XG4gICAgICAgICAgICB3aWR0aDoyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OjIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDo4cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjJweDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgJHtjaGVja01hcmt9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250cm9sX19jaGVja2JveCB7XG4gICAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn1cblxuQ2hlY2tib3gucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGlja0FjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGZvbnRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7Il19 */\n/*@ sourceURL=components/Checkbox.js */',
          dynamic: [labelColor, checkMark]
        })
      );
    }
  }]);

  return Checkbox;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Checkbox.propTypes = {
  id: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  clickAction: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
  label: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  checked: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  fontColor: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};

/* harmony default export */ __webpack_exports__["a"] = (Checkbox);

/***/ }),

/***/ "./components/Filter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FilterDropdown__ = __webpack_require__("./components/FilterDropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_search__ = __webpack_require__("./actions/search.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/Filter.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



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
      };

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
          this.props.title
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
          css: '.container.__jsx-style-dynamic-selector{font:400 1em system-ui;color:rgb(64 101 149);}.filter-title.__jsx-style-dynamic-selector{padding:20px 0 8px;border-bottom:2px solid rgb(64 101 149);}.drop-down.__jsx-style-dynamic-selector{position:relative;width:100%;margin-top:20px;display:' + toggleVisibility + ';}@media all and (min-width:376px){.container.__jsx-style-dynamic-selector{margin:0 20px;}.drop-down.__jsx-style-dynamic-selector{position:absolute;}.filter-title.__jsx-style-dynamic-selector{padding:0;width:-webkit-max-content;width:-moz-max-content;width:max-content;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmlsdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDb0IsQUFHb0MsQUFJSixBQUtELEFBT0YsQUFHSSxBQUdSLFVBQ1EsSUFOcEIsSUFQVyxBQVVYLENBZndDLElBSDNDLE1BU21CLGdCQVRsQixBQVdELGNBUEMsa0JBa0JFLEtBWEYiLCJmaWxlIjoiY29tcG9uZW50cy9GaWx0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBGaWx0ZXJEcm9wZG93biBmcm9tICcuL0ZpbHRlckRyb3Bkb3duJztcblxuaW1wb3J0IHsgdG9nZ2xlRmlsdGVyIH0gZnJvbSAnLi4vYWN0aW9ucy9zZWFyY2gnO1xuXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHRvZ2dsZUZpbHRlcih1bmRlZmluZWQpKTtcbiAgfTtcblxuICBoYW5kbGVDbGljayA9IChpZCkgPT4ge1xuICAgIGlmKGlkID09PSB0aGlzLnByb3BzLmFjdGl2ZUZpbHRlcklkKXsgaWQgPSB1bmRlZmluZWQ7fVxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godG9nZ2xlRmlsdGVyKGlkKSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGlkLCBhY3RpdmVGaWx0ZXJJZH0gPSB0aGlzLnByb3BzLCB0b2dnbGVWaXNpYmlsaXR5O1xuICAgIGlmKGlkID09PSBhY3RpdmVGaWx0ZXJJZCl7XG4gICAgICB0b2dnbGVWaXNpYmlsaXR5ID0gXCJmbGV4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZ2dsZVZpc2liaWxpdHkgPSBcIm5vbmVcIjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgICAgPGRpdiBcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXItdGl0bGVcIiBcbiAgICAgICAgICBvbkNsaWNrPXsoKT0+dGhpcy5oYW5kbGVDbGljayh0aGlzLnByb3BzLmlkKX0+XG4gICAgICAgICAge3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHJvcC1kb3duXCI+PEZpbHRlckRyb3Bkb3duIHsuLi50aGlzLnByb3BzfS8+PC9zcGFuPlxuICAgICAgICBcbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZm9udDogNDAwIDFlbSBzeXN0ZW0tdWk7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDY0IDEwMSAxNDkpXG4gICAgICAgICAgfVxuICAgICAgICAgIC5maWx0ZXItdGl0bGUge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwIDhweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoNjQgMTAxIDE0OSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kcm9wLWRvd24ge1xuICAgICAgICAgICAgLy8gWFg6IE90aGVyIG9waW9uOiBhYnNvbHV0ZVxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogJHt0b2dnbGVWaXNpYmlsaXR5fVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRyb3AtZG93biB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWx0ZXItdGl0bGUge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBhY3RpdmVGaWx0ZXJJZDogc3RhdGUuc2VhcmNoLmFjdGl2ZUZpbHRlcklkLFxufSk7XG5cbkZpbHRlckRyb3Bkb3duLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xpY2tBY3Rpb246IFByb3BUeXBlcy5mdW5jLFxuICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZm9udENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pKS5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShGaWx0ZXIpOyJdfQ== */\n/*@ sourceURL=components/Filter.js */',
          dynamic: [toggleVisibility]
        })
      );
    }
  }]);

  return Filter;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    activeFilterId: state.search.activeFilterId
  };
};

__WEBPACK_IMPORTED_MODULE_4__FilterDropdown__["a" /* default */].propTypes = {
  id: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired,
  title: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired,
  clickAction: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  options: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
    label: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired,
    checked: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    fontColor: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string
  })).isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(Filter));

/***/ }),

/***/ "./components/FilterDropdown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shortid__ = __webpack_require__("shortid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shortid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_shortid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Checkbox__ = __webpack_require__("./components/Checkbox.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/FilterDropdown.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var FilterDropdown = function (_Component) {
  _inherits(FilterDropdown, _Component);

  function FilterDropdown() {
    _classCallCheck(this, FilterDropdown);

    return _possibleConstructorReturn(this, (FilterDropdown.__proto__ || Object.getPrototypeOf(FilterDropdown)).apply(this, arguments));
  }

  _createClass(FilterDropdown, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var array = this.props.options.map(function (data) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'li',
          { key: __WEBPACK_IMPORTED_MODULE_3_shortid___default.a.generate(), __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Checkbox__["a" /* default */], _extends({ id: data.label }, data, { clickAction: _this2.props.clickAction, __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          }))
        );
      });
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-2893973039' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'ul',
          {
            className: 'jsx-2893973039' + ' ' + 'array-wrapper',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          array
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2893973039',
          css: '.container.jsx-2893973039{background:white;width:100%;-webkit-box-shadow:0px 10px 24px 0px rgba(0,0,0,0.15);-moz-box-shadow:0px 10px 24px 0px rgba(0,0,0,0.15);box-shadow:0px 10px 24px 0px rgba(0,0,0,0.15);}.container.jsx-2893973039:after{content:\'\';position:absolute;top:0;right:40px;width:0;height:0;border:1em solid transparent;border-bottom-color:#ffffff;border-top:0;margin-left:-1em;margin-top:-1em;}.array-wrapper.jsx-2893973039{margin:0;list-style-type:none;padding:16px 20px;}@media all and (min-width:376px){.container.jsx-2893973039{width:-webkit-max-content;width:-moz-max-content;width:max-content;position:relative;right:40px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmlsdGVyRHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JvQixBQUc4QixBQVFOLEFBYUYsQUFNVyxTQUxDLEVBYkgsTUFSUCxXQUUyQyxDQU9oRCxDQWFZLEtBWlAsV0FDSCxFQVlWLE1BWFcsU0FDb0IsSUFnQlQsZUExQitCLEdBMkJ0QyxPQWhCZSxJQWtCNUIsd0JBakJhLGFBWGlDLEFBWTdCLGlCQUNELGdCQUNsQixhQWJBIiwiZmlsZSI6ImNvbXBvbmVudHMvRmlsdGVyRHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzaG9ydGlkIGZyb20gJ3Nob3J0aWQnO1xuXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi9DaGVja2JveCc7XG5cbmNsYXNzIEZpbHRlckRyb3Bkb3duIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYXJyYXkgPSB0aGlzLnByb3BzLm9wdGlvbnMubWFwKGRhdGEgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgIDxsaSBrZXk9e3Nob3J0aWQuZ2VuZXJhdGUoKX0+XG4gICAgICAgIDxDaGVja2JveCBpZD17ZGF0YS5sYWJlbH0gey4uLmRhdGF9IGNsaWNrQWN0aW9uPXt0aGlzLnByb3BzLmNsaWNrQWN0aW9ufS8+XG4gICAgICA8L2xpPilcbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYXJyYXktd3JhcHBlclwiPlxuICAgICAgICAgIHthcnJheX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggMjRweCAwcHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDEwcHggMjRweCAwcHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDI0cHggMHB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWluZXI6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICByaWdodDogNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAxZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMWVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTFlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFycmF5LXdyYXBwZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vVGVtcG9yYXJ5IFN0eWxpbmdcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICByaWdodDogNDBweDtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkZpbHRlckRyb3Bkb3duLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xpY2tBY3Rpb246IFByb3BUeXBlcy5mdW5jLFxuICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZm9udENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pKS5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckRyb3Bkb3duOyJdfQ== */\n/*@ sourceURL=components/FilterDropdown.js */'
        })
      );
    }
  }]);

  return FilterDropdown;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

FilterDropdown.propTypes = {
  id: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  clickAction: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  options: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    label: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
    checked: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
    fontColor: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
  })).isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (FilterDropdown);

/***/ }),

/***/ "./components/ListBox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/ListBox.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ListBox = function (_Component) {
  _inherits(ListBox, _Component);

  function ListBox() {
    _classCallCheck(this, ListBox);

    return _possibleConstructorReturn(this, (ListBox.__proto__ || Object.getPrototypeOf(ListBox)).apply(this, arguments));
  }

  _createClass(ListBox, [{
    key: 'render',
    value: function render() {
      var list = this.props.collection.map(function (content) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'li',
          { key: content.id, className: 'jsx-725161863' + ' ' + 'list-item',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
            { href: content.url, __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'a',
              {
                className: 'jsx-725161863',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                }
              },
              content.title
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '725161863',
            css: '.list-item.jsx-725161863{padding:8px 0;line-height:28px;cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline;color:rgb(64 102 149);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdEJveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlc0IsQUFHNkIsY0FDRyxpQkFDRixlQUNXLDREQUNKLHNCQUN4QiIsImZpbGUiOiJjb21wb25lbnRzL0xpc3RCb3guanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIExpc3RCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBcbiAgcmVuZGVyKCkge1xuICAgIGxldCBsaXN0ID0gdGhpcy5wcm9wcy5jb2xsZWN0aW9uLm1hcChjb250ZW50ID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBrZXk9e2NvbnRlbnQuaWR9IGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgIFxuICAgICAgICAgIDxMaW5rIGhyZWY9e2NvbnRlbnQudXJsfT5cbiAgICAgICAgICAgIDxhPntjb250ZW50LnRpdGxlfTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmxpc3QtaXRlbSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYig2NCAxMDIgMTQ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIFxuICAgICAgICA8aDM+e3RoaXMucHJvcHMudGl0bGV9PC9oMz5cblxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC13cmFwcGVyXCI+XG4gICAgICAgICAge2xpc3R9XG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggbGlnaHRncmV5IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTZweCAyNHB4IDE2cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0LXdyYXBwZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkxpc3RCb3gucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjb2xsZWN0aW9uOiBQcm9wVHlwZXMuYXJyYXlcbiAgLy8gWFg6IGNvbGxlY3Rpb24ncyBhcnJheSBkYXRhIHR5cGUgVEJELiBGb3Igbm93OlxuICAvLyAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8vICB0aXRsZTogUHJvcFR5cGVzLmFycmF5LFxuICAvLyAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0Qm94OyJdfQ== */\n/*@ sourceURL=components/ListBox.js */'
          })
        );
      });

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-3263443367' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h3',
          {
            className: 'jsx-3263443367',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          },
          this.props.title
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'ul',
          {
            className: 'jsx-3263443367' + ' ' + 'list-wrapper',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          },
          list
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3263443367',
          css: '.container.jsx-3263443367{border:1px lightgrey solid;border-radius:4px;padding:16px 24px 16px;font-size:14px;}h3.jsx-3263443367{font-size:14px;font-weight:800;}.list-wrapper.jsx-3263443367{padding:0;list-style-type:none;}@media all and (min-width:376px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdEJveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ29CLEFBR3dDLEFBTVosQUFJTCxVQUNXLEtBSkwsWUFORSxJQU9wQixBQUlBLGNBVnlCLHVCQUNSLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvTGlzdEJveC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgTGlzdEJveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIFxuICByZW5kZXIoKSB7XG4gICAgbGV0IGxpc3QgPSB0aGlzLnByb3BzLmNvbGxlY3Rpb24ubWFwKGNvbnRlbnQgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGtleT17Y29udGVudC5pZH0gY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgXG4gICAgICAgICAgPExpbmsgaHJlZj17Y29udGVudC51cmx9PlxuICAgICAgICAgICAgPGE+e2NvbnRlbnQudGl0bGV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICBcbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAubGlzdC1pdGVtIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDY0IDEwMiAxNDkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgXG4gICAgICAgIDxoMz57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxuXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXdyYXBwZXJcIj5cbiAgICAgICAgICB7bGlzdH1cbiAgICAgICAgPC91bD5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBsaWdodGdyZXkgc29saWQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDI0cHggMTZweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3Qtd3JhcHBlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTGlzdEJveC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNvbGxlY3Rpb246IFByb3BUeXBlcy5hcnJheVxuICAvLyBYWDogY29sbGVjdGlvbidzIGFycmF5IGRhdGEgdHlwZSBUQkQuIEZvciBub3c6XG4gIC8vICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLy8gIHRpdGxlOiBQcm9wVHlwZXMuYXJyYXksXG4gIC8vICB1cmw6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RCb3g7Il19 */\n/*@ sourceURL=components/ListBox.js */'
        })
      );
    }
  }]);

  return ListBox;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ListBox.propTypes = {
  id: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired,
  title: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired,
  collection: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array
  // XX: collection's array data type TBD. For now:
  //  id: PropTypes.string,
  //  title: PropTypes.array,
  //  url: PropTypes.string
};

/* harmony default export */ __webpack_exports__["a"] = (ListBox);

/***/ }),

/***/ "./components/PageSection.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/eddieyao/Desktop/gp_draft/components/PageSection.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var PageSection = function (_Component) {
  _inherits(PageSection, _Component);

  function PageSection() {
    _classCallCheck(this, PageSection);

    return _possibleConstructorReturn(this, (PageSection.__proto__ || Object.getPrototypeOf(PageSection)).apply(this, arguments));
  }

  _createClass(PageSection, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-3264042371" + " " + "container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        this.props.children,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "3264042371",
          css: ".container.jsx-3264042371{padding:5%;font:400 1em system-ui;color:#454545;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFnZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUW9CLEFBR3dCLFdBQ1ksdUJBQ1QsY0FDaEIiLCJmaWxlIjoiY29tcG9uZW50cy9QYWdlU2VjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFBhZ2VTZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICAgICAgZm9udDogNDAwIDFlbSBzeXN0ZW0tdWk7XG4gICAgICAgICAgICBjb2xvcjogIzQ1NDU0NTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VTZWN0aW9uOyJdfQ== */\n/*@ sourceURL=components/PageSection.js */"
        })
      );
    }
  }]);

  return PageSection;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (PageSection);

/***/ }),

/***/ "./components/Pagination.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/eddieyao/Desktop/gp_draft/components/Pagination.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Pagination = function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {

      // XX: Placeholder data for pagination. Change to dynamic once connect to GraphQL ~
      var pages = "< 1 2 3 4 5 ... 10 >";
      var numbersPerPage = "Showing 10 of 127";

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-1369333886" + " " + "container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-1369333886" + " " + "pages",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          },
          pages
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-1369333886" + " " + "numbers-per-page",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          numbersPerPage
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "1369333886",
          css: ".container.jsx-1369333886{width:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:0 auto;}.numbers-per-page.jsx-1369333886{display:none;}@media all and (min-width:376px){.container.jsx-1369333886{width:100%;}.numbers-per-page.jsx-1369333886{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFnaW5hdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlcUIsQUFHMEIsQUFPRSxBQUlBLEFBR0UsV0FiRixBQVdiLEVBSkYsNkRBT0UsV0FicUIsMkVBQ1MsbUhBQ2hCLGNBQ2hCIiwiZmlsZSI6ImNvbXBvbmVudHMvUGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFBhZ2luYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG5cbiAgICAvLyBYWDogUGxhY2Vob2xkZXIgZGF0YSBmb3IgcGFnaW5hdGlvbi4gQ2hhbmdlIHRvIGR5bmFtaWMgb25jZSBjb25uZWN0IHRvIEdyYXBoUUwgflxuICAgIGxldCBwYWdlcyA9IFwiPCAxIDIgMyA0IDUgLi4uIDEwID5cIlxuICAgIGxldCBudW1iZXJzUGVyUGFnZSA9IFwiU2hvd2luZyAxMCBvZiAxMjdcIlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZXNcIj57cGFnZXN9PC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlcnMtcGVyLXBhZ2VcIj57bnVtYmVyc1BlclBhZ2V9PC9kaXY+XG5cbiAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm51bWJlcnMtcGVyLXBhZ2Uge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm51bWJlcnMtcGVyLXBhZ2Uge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247Il19 */\n/*@ sourceURL=components/Pagination.js */"
        })
      );
    }
  }]);

  return Pagination;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Pagination);

/***/ }),

/***/ "./components/ProductThumbnail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/ProductThumbnail.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ProductThumbnail = function (_Component) {
  _inherits(ProductThumbnail, _Component);

  function ProductThumbnail() {
    _classCallCheck(this, ProductThumbnail);

    return _possibleConstructorReturn(this, (ProductThumbnail.__proto__ || Object.getPrototypeOf(ProductThumbnail)).apply(this, arguments));
  }

  _createClass(ProductThumbnail, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // XX: coverImageId returns a URL for now. Need to obtain image using Id int from AWS once connected.
      var _props = this.props,
          id = _props.id,
          modelName = _props.modelName,
          modelYear = _props.modelYear,
          coverImageId = _props.coverImageId;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { onClick: function onClick() {
            return _this2.props.handleClick(modelName);
          }, className: 'jsx-4253705' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: coverImageId, className: 'jsx-4253705' + ' ' + 'product-img',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h2',
          {
            className: 'jsx-4253705',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          modelYear,
          ' ',
          modelName
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '4253705',
          css: '.container.jsx-4253705{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-top:40px;font:600 1em system-ui;color:rgb(69,69,69);cursor:pointer;}.product-img.jsx-4253705{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvZHVjdFRodW1ibmFpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQm9CLEFBRzBCLEFBVWhCLFdBQUMsK0RBVDBCLG9GQUNMLDZGQUNGLGlCQUNNLHVCQUNELG9CQUNQLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvUHJvZHVjdFRodW1ibmFpbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBQcm9kdWN0VGh1bWJuYWlsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICBcbiAgICAvLyBYWDogY292ZXJJbWFnZUlkIHJldHVybnMgYSBVUkwgZm9yIG5vdy4gTmVlZCB0byBvYnRhaW4gaW1hZ2UgdXNpbmcgSWQgaW50IGZyb20gQVdTIG9uY2UgY29ubmVjdGVkLlxuICAgIGxldCB7IGlkLCBtb2RlbE5hbWUsIG1vZGVsWWVhciwgY292ZXJJbWFnZUlkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5oYW5kbGVDbGljayhtb2RlbE5hbWUpfSBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgey8qIFhYOiBOZWVkIHRvIGNoYW5nZSBjb3ZlckltYWdlSWQgdmFyaWFibGUgb25jZSBjb25uZWN0ZWQgdG8gQVdTICovfVxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2R1Y3QtaW1nXCIgc3JjPXtjb3ZlckltYWdlSWR9Lz5cbiAgICAgICAgXG4gICAgICAgIDxoMj57bW9kZWxZZWFyfSB7bW9kZWxOYW1lfTwvaDI+XG4gICAgICAgIFxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICAgICAgZm9udDogNjAwIDFlbSBzeXN0ZW0tdWk7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDY5LCA2OSwgNjkpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdC1pbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5Qcm9kdWN0VGh1bWJuYWlsLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbW9kZWxOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG1vZGVsWWVhcjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBoYW5kbGVDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLy8gWFg6IENvdmVySW1hZ2VJZCB0YWtlcyBhbiBJbnQuIFVzaW5nIGEgdXJsIHN0cmluZyBhcyBwbGFjZWhvbGRlciBmb3Igbm93IH5cbiAgY292ZXJJbWFnZUlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0VGh1bWJuYWlsOyJdfQ== */\n/*@ sourceURL=components/ProductThumbnail.js */'
        })
      );
    }
  }]);

  return ProductThumbnail;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

;

ProductThumbnail.propTypes = {
  id: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  modelName: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  modelYear: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
  handleClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
  // XX: CoverImageId takes an Int. Using a url string as placeholder for now ~
  coverImageId: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (ProductThumbnail);

/***/ }),

/***/ "./components/ResultItemSmall.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/ResultItemSmall.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ResultItemSmall = function (_Component) {
  _inherits(ResultItemSmall, _Component);

  function ResultItemSmall() {
    _classCallCheck(this, ResultItemSmall);

    return _possibleConstructorReturn(this, (ResultItemSmall.__proto__ || Object.getPrototypeOf(ResultItemSmall)).apply(this, arguments));
  }

  _createClass(ResultItemSmall, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          title = _props.title,
          contentType = _props.contentType,
          updatedAt = _props.updatedAt;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { onClick: function onClick() {
            return _this2.props.handleClick(title);
          }, className: 'jsx-663580749' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-663580749' + ' ' + 'file-icon-wrapper',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2000px-Gold_Star.svg.png', className: 'jsx-663580749' + ' ' + 'favorite-star-sm star-icon',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: this.props.url, className: 'jsx-663580749' + ' ' + 'file-icon',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-663580749' + ' ' + 'text-wrapper',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h2',
            {
              className: 'jsx-663580749' + ' ' + 'content-title',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              }
            },
            title
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-663580749' + ' ' + 'inner-text-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              {
                className: 'jsx-663580749' + ' ' + 'document-type',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                }
              },
              contentType
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              {
                className: 'jsx-663580749' + ' ' + 'middle-dot',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                }
              },
              '\xB7'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              {
                className: 'jsx-663580749' + ' ' + 'updated-at',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21
                }
              },
              updatedAt
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2000px-Gold_Star.svg.png', className: 'jsx-663580749' + ' ' + 'favorite-star-lg star-icon',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '663580749',
          css: '.container.jsx-663580749{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:24px 0;font:600 1em system-ui;color:rgb(69,69,69);cursor:pointer;}.file-icon.jsx-663580749{max-width:48px;margin-right:8px;}.content-title.jsx-663580749{margin:0;}.inner-text-wrapper.jsx-663580749{display:none;}.star-icon.jsx-663580749{max-width:32px;max-height:32px;}.favorite-star-sm.jsx-663580749{display:none;}.favorite-star-lg.jsx-663580749{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media all and (min-width:376px){.container.jsx-663580749{font-size:12px;}.file-icon-wrapper.jsx-663580749{position:relative;}.favorite-star-sm.jsx-663580749{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:-16px;left:-8px;}.favorite-star-lg.jsx-663580749{display:none;}.inner-text-wrapper.jsx-663580749{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:8px;line-height:16px;}.document-type.jsx-663580749{font-size:0.813em;font-weight:600;color:rgb(45 91 142);}.middle-dot.jsx-663580749{color:rgb(171,171,171);margin:0 8px;}.updated-at.jsx-663580749{color:rgb(171,171,171);font-size:0.813em;font-weight:100;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVzdWx0SXRlbVNtYWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCb0IsQUFHMEIsQUFTRSxBQUlOLEFBSVosQUFFa0IsQUFJRixBQUdBLEFBSUksQUFHRyxBQUdMLEFBTUEsQUFHQSxBQUtLLEFBS08sQUFJQSxTQTdDN0IsSUFHQSxBQU9BLEFBbUJFLEVBakNpQixBQVVELEFBV2hCLEdBR0EsQUFpQmtCLEtBS0gsQUFJSyxRQXZDdEIsQ0FWQSxFQXlDeUIsRUFLdkIsS0FJa0IsY0FSbEIsRUFTQSxpQkE3RHFCLEFBMEJ2QixBQVVzQixBQVNGLGdCQUNDLEVBVFAsVUFDQSxLQVNaLEtBUkEscUNBdENtQiw2RkFDSixlQUNRLHVCQUNELG9CQUNQLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvUmVzdWx0SXRlbVNtYWxsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lZGRpZXlhby9EZXNrdG9wL2dwX2RyYWZ0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIFJlc3VsdEl0ZW1TbWFsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBpZCwgdGl0bGUsIGNvbnRlbnRUeXBlLCB1cGRhdGVkQXQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5oYW5kbGVDbGljayh0aXRsZSl9IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICBcbiAgICAgICAgey8qIFhYOiBUZW1wb3JhcnkgdXNlIG9mIFBERiAmIHN0YXIgaWNvbnMgfiovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtaWNvbi13cmFwcGVyXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmYXZvcml0ZS1zdGFyLXNtIHN0YXItaWNvblwiIHNyYz1cImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvMi8yOS9Hb2xkX1N0YXIuc3ZnLzIwMDBweC1Hb2xkX1N0YXIuc3ZnLnBuZ1wiIC8+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmaWxlLWljb25cIiBzcmM9e3RoaXMucHJvcHMudXJsfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNvbnRlbnQtdGl0bGVcIj57dGl0bGV9PC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLXRleHQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jdW1lbnQtdHlwZVwiPntjb250ZW50VHlwZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtaWRkbGUtZG90XCI+Jm1pZGRvdDs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1cGRhdGVkLWF0XCI+e3VwZGF0ZWRBdH08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgey8qIFhYOiBUZW1wb3JhcnkgdXNlIG9mIHN0YXIgaWNvbiB+Ki99XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmF2b3JpdGUtc3Rhci1sZyBzdGFyLWljb25cIiBzcmM9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzIvMjkvR29sZF9TdGFyLnN2Zy8yMDAwcHgtR29sZF9TdGFyLnN2Zy5wbmdcIiAvPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMjRweCAwO1xuICAgICAgICAgICAgZm9udDogNjAwIDFlbSBzeXN0ZW0tdWk7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDY5LCA2OSwgNjkpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmlsZS1pY29uIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDhweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudC10aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbm5lci10ZXh0LXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZVxuICAgICAgICAgIH1cbiAgICAgICAgICAuc3Rhci1pY29uIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMzJweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mYXZvcml0ZS1zdGFyLXNtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mYXZvcml0ZS1zdGFyLWxnIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDM3NnB4KSB7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpbGUtaWNvbi13cmFwcGVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZhdm9yaXRlLXN0YXItc20ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogLTE2cHg7XG4gICAgICAgICAgICAgIGxlZnQ6IC04cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmF2b3JpdGUtc3Rhci1sZyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW5uZXItdGV4dC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZG9jdW1lbnQtdHlwZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44MTNlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYig0NSA5MSAxNDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1pZGRsZS1kb3Qge1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDE3MSwgMTcxLCAxNzEpO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVwZGF0ZWQtYXQge1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDE3MSwgMTcxLCAxNzEpO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuODEzZW07XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5SZXN1bHRJdGVtU21hbGwucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjb250ZW50VHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB1cGRhdGVkQXQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaGFuZGxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRJdGVtU21hbGw7Il19 */\n/*@ sourceURL=components/ResultItemSmall.js */'
        })
      );
    }
  }]);

  return ResultItemSmall;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ResultItemSmall.propTypes = {
  id: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  title: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  contentType: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  updatedAt: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  handleClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (ResultItemSmall);

/***/ }),

/***/ "./components/SearchSecondary.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_search__ = __webpack_require__("./actions/search.js");
var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/SearchSecondary.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var SearchSecondary = function (_Component) {
  _inherits(SearchSecondary, _Component);

  function SearchSecondary(props) {
    _classCallCheck(this, SearchSecondary);

    return _possibleConstructorReturn(this, (SearchSecondary.__proto__ || Object.getPrototypeOf(SearchSecondary)).call(this, props));
  }

  _createClass(SearchSecondary, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ input: this.props.searchTerm });
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(e) {
      e.preventDefault();
    }
  }, {
    key: 'onHandleInputChange',
    value: function onHandleInputChange(event) {
      // this.setState({input: event.target.value})
      // this.props.dispatch(updateSearchTerm(event.target.value));
    }
  }, {
    key: 'toString',
    value: function toString(query) {
      if (query) {
        return '"' + query + '"';
      } else {
        return '';
      }
    }
  }, {
    key: 'toIsFilter',
    value: function toIsFilter(array) {
      if (array && array.length > 0) {
        return 'is: (' + array.toString().split(",").join(", ") + ')';
      } else {
        return '';
      };
    }
  }, {
    key: 'toInFilter',
    value: function toInFilter(array) {
      if (array && array.length > 0) {
        return 'in: (' + array.toString().split(",").join(", ") + ')';
      } else {
        return '';
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var compiledQuery = this.toString(this.props.searchTerm) + " " + this.toIsFilter(this.props.filteredStatus) + " " + this.toIsFilter(this.props.filteredContentType) + " " + this.toInFilter(this.props.filteredTopic);
      compiledQuery = compiledQuery.split("  ").join(" ");

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-1071005261' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'form',
          { onSubmit: function onSubmit(e) {
              return _this2.onSubmit(e);
            }, className: 'jsx-1071005261',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-1071005261' + ' ' + 'input-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-1071005261' + ' ' + 'input-inner-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863',
                className: 'jsx-1071005261' + ' ' + 'search-icon magnifying-glass',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 64
                }
              }),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
                text: 'text',
                placeholder: 'Search by vehicle, topic, keyword or content title...',
                onChange: function onChange(event) {
                  return _this2.onHandleInputChange(event);
                },

                value: compiledQuery,
                className: 'jsx-1071005261',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'p',
              { onClick: function onClick(e) {
                  return _this2.onSubmit(e);
                }, className: 'jsx-1071005261' + ' ' + 'save-search',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75
                }
              },
              'Save'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1071005261',
          css: '.container.jsx-1071005261{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:16px 0;}.magnifying-glass.jsx-1071005261{max-width:24px;max-height:14px;width:auto;height:auto;margin:0 16px;display:none;}form.jsx-1071005261{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 auto;-ms-flex:1 auto;flex:1 auto;}.input-wrapper.jsx-1071005261{-webkit-flex:1 80%;-ms-flex:1 80%;flex:1 80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:64px;max-width:600px;background:white;border-radius:4px;-webkit-box-shadow:0px 10px 20px 4px rgba(0,0,0,0.15);-moz-box-shadow:0px 10px 20px 4px rgba(0,0,0,0.15);box-shadow:0px 10px 20px 4px rgba(0,0,0,0.15);}.input-inner-wrapper.jsx-1071005261{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.search-icon.jsx-1071005261{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 12px;}input.jsx-1071005261{-webkit-flex:1;-ms-flex:1;flex:1;padding:0;border:none;outline:none;font-size:1em;color:black;}.save-search.jsx-1071005261{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:rgb(64 102 149);margin-right:24px;padding-bottom:4px;min-width:32px;border-bottom:1px solid rgb(64 102 149);font:600 0.875em system-ui;-webkit-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);-moz-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);cursor:pointer;}@media all and (min-width:376px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoU2Vjb25kYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGb0IsQUFHd0IsQUFNSSxBQVFGLEFBSUYsQUFjRSxBQUtBLEFBSU4sQUFRVyxXQWhETCxJQU1HLEdBMkNILGFBMUNGLEVBa0NELFNBakNFLENBa0NBLEVBeEJDLFNBVEMsQ0FrQ0QsYUFqQ0EsQUFrQ0MsTUE5QkYsQUFrQkwsQUFLTyxPQTFCaEIsQ0FrQ2MsR0E1Q1csR0FxQ3pCLElBWXdCLEVBSnhCLGFBYnFCLE9Ba0JELEtBaENHLEdBSnZCLFVBcUNxQixtQkFDSixlQUN5QixrQkFwRDFCLFVBa0JLLElBakJyQixFQStCQSxNQXFCNkIsMkJBQ2dDLHNEQW5DN0IsS0FvQzBCLHdEQUNMLG1EQUNsQyxHQXJDTCxZQUNJLEFBcUNsQixnQkFwQ21CLGlCQUNDLGtCQUNvQyxzREFDSCxtREFDTCw4Q0FDaEQiLCJmaWxlIjoiY29tcG9uZW50cy9TZWFyY2hTZWNvbmRhcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgdXBkYXRlU2VhcmNoVGVybSB9IGZyb20gJy4uL2FjdGlvbnMvc2VhcmNoJztcblxuY2xhc3MgU2VhcmNoU2Vjb25kYXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2lucHV0OiB0aGlzLnByb3BzLnNlYXJjaFRlcm19KTtcbiAgfVxuXG4gIG9uU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBvbkhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KXtcbiAgICAvLyB0aGlzLnNldFN0YXRlKHtpbnB1dDogZXZlbnQudGFyZ2V0LnZhbHVlfSlcbiAgICAvLyB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gIH07XG5cbiAgdG9TdHJpbmcocXVlcnkpe1xuICAgIGlmKHF1ZXJ5KXtcbiAgICAgIHJldHVybiBgXCIke3F1ZXJ5fVwiYFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9O1xuXG4gIHRvSXNGaWx0ZXIoYXJyYXkpe1xuICAgIGlmKGFycmF5ICYmIGFycmF5Lmxlbmd0aCA+IDApe1xuICAgICAgcmV0dXJuIGBpczogKCR7YXJyYXkudG9TdHJpbmcoKS5zcGxpdChcIixcIikuam9pbihcIiwgXCIpfSlgXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9O1xuICB9O1xuXG4gIHRvSW5GaWx0ZXIoYXJyYXkpe1xuICAgIGlmKGFycmF5ICYmIGFycmF5Lmxlbmd0aCA+IDApe1xuICAgICAgcmV0dXJuIGBpbjogKCR7YXJyYXkudG9TdHJpbmcoKS5zcGxpdChcIixcIikuam9pbihcIiwgXCIpfSlgXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9O1xuICB9O1xuXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBjb21waWxlZFF1ZXJ5ID0gdGhpcy50b1N0cmluZyh0aGlzLnByb3BzLnNlYXJjaFRlcm0pICsgXCIgXCIgKyB0aGlzLnRvSXNGaWx0ZXIodGhpcy5wcm9wcy5maWx0ZXJlZFN0YXR1cykgKyBcIiBcIiArIHRoaXMudG9Jc0ZpbHRlcih0aGlzLnByb3BzLmZpbHRlcmVkQ29udGVudFR5cGUpICsgXCIgXCIgKyB0aGlzLnRvSW5GaWx0ZXIodGhpcy5wcm9wcy5maWx0ZXJlZFRvcGljKTtcbiAgICBjb21waWxlZFF1ZXJ5ID0gY29tcGlsZWRRdWVyeS5zcGxpdChcIiAgXCIpLmpvaW4oXCIgXCIpO1xuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKT0+dGhpcy5vblN1Ym1pdChlKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtaW5uZXItd3JhcHBlclwiPlxuICAgICAgICAgICAgICB7LyogVGVtcG9yYXJ5IHVzZSBvZiBTZWFyY2ggSWNvbiAqL31cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5waWNwbmcuY29tL2ltYWdlcy9zbWFsbC9tYWduaWZ5aW5nLWdsYXNzLXNlYXJjaC1sb3VwZS1pbWFnZS1kb3dubG9hZC00OTg2M1wiIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1pY29uIG1hZ25pZnlpbmctZ2xhc3NcIi8+XG4gICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0ZXh0PVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgdmVoaWNsZSwgdG9waWMsIGtleXdvcmQgb3IgY29udGVudCB0aXRsZS4uLlwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCk9PnRoaXMub25IYW5kbGVJbnB1dENoYW5nZShldmVudCl9XG5cbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGlsZWRRdWVyeX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cCBvbkNsaWNrPXsoZSk9PnRoaXMub25TdWJtaXQoZSl9IGNsYXNzTmFtZT1cInNhdmUtc2VhcmNoXCI+U2F2ZTwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgey8qIFNUWUxJTkcgKi99XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tYWduaWZ5aW5nLWdsYXNzIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjRweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleDogMSBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgICBmbGV4OiAxIDgwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IDRweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IDRweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCA0cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlucHV0LWlubmVyLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLWljb24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNhdmUtc2VhcmNoIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDY0IDEwMiAxNDkpO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzJweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNjQgMTAyIDE0OSk7XG4gICAgICAgICAgICBmb250OiA2MDAgMC44NzVlbSBzeXN0ZW0tdWk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xNnB4IDBweCAxNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogLTE2cHggMHB4IDE1cHggLTNweCByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogLTE2cHggMHB4IDE1cHggLTNweCByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PiAgICAgIFxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICBsZXQgeyBzZWFyY2hUZXJtLCBmaWx0ZXJlZFN0YXR1cywgZmlsdGVyZWRDb250ZW50VHlwZSwgZmlsdGVyZWRUb3BpYyB9ID0gc3RhdGUuc2VhcmNoO1xuICByZXR1cm4gKHtcbiAgc2VhcmNoVGVybSxcbiAgZmlsdGVyZWRTdGF0dXMsXG4gIGZpbHRlcmVkQ29udGVudFR5cGUsXG4gIGZpbHRlcmVkVG9waWMsXG4gIGZpbHRlcmVkU3RhdHVzLFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNlYXJjaFNlY29uZGFyeSk7Il19 */\n/*@ sourceURL=components/SearchSecondary.js */'
        })
      );
    }
  }]);

  return SearchSecondary;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  var _state$search = state.search,
      searchTerm = _state$search.searchTerm,
      filteredStatus = _state$search.filteredStatus,
      filteredContentType = _state$search.filteredContentType,
      filteredTopic = _state$search.filteredTopic;

  return _defineProperty({
    searchTerm: searchTerm,
    filteredStatus: filteredStatus,
    filteredContentType: filteredContentType,
    filteredTopic: filteredTopic
  }, 'filteredStatus', filteredStatus);
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(SearchSecondary));

/***/ }),

/***/ "./lib/withRedux.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_store__ = __webpack_require__("./store/store.js");
var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/lib/withRedux.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var withRedux = function withRedux(Page) {
  return function (_Component) {
    _inherits(PageWrapper, _Component);

    function PageWrapper() {
      _classCallCheck(this, PageWrapper);

      return _possibleConstructorReturn(this, (PageWrapper.__proto__ || Object.getPrototypeOf(PageWrapper)).apply(this, arguments));
    }

    _createClass(PageWrapper, [{
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"],
          { store: __WEBPACK_IMPORTED_MODULE_2__store_store__["a" /* default */], __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Page, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          })
        );
      }
    }]);

    return PageWrapper;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
};

/* harmony default export */ __webpack_exports__["a"] = (withRedux);

/***/ }),

/***/ "./pages/search-results.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_shortid__ = __webpack_require__("shortid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_shortid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_shortid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_withRedux__ = __webpack_require__("./lib/withRedux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Filter__ = __webpack_require__("./components/Filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Banner__ = __webpack_require__("./components/Banner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ListBox__ = __webpack_require__("./components/ListBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Checkbox__ = __webpack_require__("./components/Checkbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_PageSection__ = __webpack_require__("./components/PageSection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_BreadCrumbs__ = __webpack_require__("./components/BreadCrumbs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_ResultItemSmall__ = __webpack_require__("./components/ResultItemSmall.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_SearchSecondary__ = __webpack_require__("./components/SearchSecondary.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_ProductThumbnail__ = __webpack_require__("./components/ProductThumbnail.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_Pagination__ = __webpack_require__("./components/Pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__actions_search__ = __webpack_require__("./actions/search.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/pages/search-results.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





















var SearchResults = function (_Component) {
  _inherits(SearchResults, _Component);

  function SearchResults() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchResults);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchResults.__proto__ || Object.getPrototypeOf(SearchResults)).call.apply(_ref, [this].concat(args))), _this), _this.filterStatus = function (input, data) {
      if (input !== undefined) {
        input ? _this.props.dispatch(__WEBPACK_IMPORTED_MODULE_16__actions_search__["b" /* addStatusFilter */](data)) : _this.props.dispatch(__WEBPACK_IMPORTED_MODULE_16__actions_search__["f" /* removeStatusFilter */](data));
      };
    }, _this.filterContentType = function (input, data) {
      if (input !== undefined) {
        input ? _this.props.dispatch(__WEBPACK_IMPORTED_MODULE_16__actions_search__["a" /* addContentTypeFilter */](data)) : _this.props.dispatch(__WEBPACK_IMPORTED_MODULE_16__actions_search__["e" /* removeContentTypeFilter */](data));
      };
    }, _this.filterTopic = function (input, data) {
      if (input !== undefined) {
        input ? _this.props.dispatch(__WEBPACK_IMPORTED_MODULE_16__actions_search__["c" /* addTopicFilter */](data)) : _this.props.dispatch(__WEBPACK_IMPORTED_MODULE_16__actions_search__["g" /* removeTopicFilter */](data));
      };
    }, _this.toggleFavoritedSearch = function (input) {
      if (input !== undefined) {
        _this.props.dispatch(__WEBPACK_IMPORTED_MODULE_16__actions_search__["i" /* toggleSavedSearch */](input));
      };
    }, _this.handleThumbnailClick = function (modelName) {
      return console.log('Vehicle Thumbnail: ' + modelName + ' clicked.');
    }, _this.handleResultClick = function (result) {
      console.log('Result: ' + result + ' clicked.');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchResults, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.dispatch(__WEBPACK_IMPORTED_MODULE_16__actions_search__["d" /* clearFilters */]());
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // Search results page: custom filters
      // XX: Make data dynamic once connected to graphQL ~
      var customFilters = [{
        title: "Status",
        options: [{
          label: "current",
          checked: false,
          fontColor: undefined
        }, {
          label: "archived",
          checked: false,
          fontColor: undefined
        }],
        clickAction: this.filterStatus
      }, {
        title: "Content Type",
        options: [{
          label: "Product",
          checked: false,
          fontColor: undefined
        }, {
          label: "Article",
          checked: false,
          fontColor: undefined
        }, {
          label: "Document",
          checked: false,
          fontColor: undefined
        }, {
          label: "Video",
          checked: false,
          fontColor: undefined
        }, {
          label: "Image",
          checked: false,
          fontColor: undefined
        }],
        clickAction: this.filterContentType
      }, {
        // XX: May need to query for an array of topics on ComponentWillMount();
        title: "Topic",
        options: [{
          label: "technology",
          checked: false,
          fontColor: undefined
        }, {
          label: "bluetooth",
          checked: false,
          fontColor: undefined
        }, {
          label: "product information",
          checked: false,
          fontColor: undefined
        }],
        clickAction: this.filterTopic
      }];

      // Favorite Checkbox Props (desktop & mobile);
      var favoritesDesktop = {
        label: "Show only favorites",
        fontColor: "rgb(64 101 149)",
        checked: false,
        clickAction: this.toggleFavoritedSearch
      };
      var favoritesMobile = {
        label: "Show Favorites",
        fontColor: "rgb(64 101 149)",
        checked: false,
        clickAction: this.toggleFavoritedSearch
      };

      var filters = customFilters.map(function (data, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Filter__["a" /* default */], _extends({ key: data.title, id: data.title }, data, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
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
          contents = _props$sampleData.contents,
          savedAndFavs = _props$sampleData.savedAndFavs;

      if (products) {
        productThumbnails = products.map(function (product) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { key: product.id, className: 'jsx-1289796989' + ' ' + 'products-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 159
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_ProductThumbnail__["a" /* default */], _extends({ handleClick: _this2.handleThumbnailClick }, product, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 160
              }
            })),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
              styleId: '1289796989',
              css: '.products-wrapper.jsx-1289796989{font-size:16px;margin-bottom:32px;}@media all and (min-width:376px){.products-wrapper.jsx-1289796989{width:220px;font-size:17px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC1yZXN1bHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdLd0IsQUFHZ0MsQUFNRCxZQUNHLEdBTkUsWUFPbkIsT0FMRiIsImZpbGUiOiJwYWdlcy9zZWFyY2gtcmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc2hvcnRpZCBmcm9tICdzaG9ydGlkJztcblxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICcuLi9saWIvd2l0aFJlZHV4JztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9GaWx0ZXInO1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0Jhbm5lcic7XG5pbXBvcnQgTGlzdEJveCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RCb3gnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hlY2tib3gnO1xuaW1wb3J0IFBhZ2VTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZVNlY3Rpb24nO1xuaW1wb3J0IEJyZWFkQ3J1bWJzIGZyb20gJy4uL2NvbXBvbmVudHMvQnJlYWRDcnVtYnMnO1xuaW1wb3J0IFJlc3VsdEl0ZW1TbWFsbCBmcm9tICcuLi9jb21wb25lbnRzL1Jlc3VsdEl0ZW1TbWFsbCc7XG5pbXBvcnQgU2VhcmNoU2Vjb25kYXJ5IGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoU2Vjb25kYXJ5JztcbmltcG9ydCBQcm9kdWN0VGh1bWJuYWlsIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdFRodW1ibmFpbCc7XG5cblxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcblxuaW1wb3J0ICogYXMgYWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvc2VhcmNoJztcblxuY2xhc3MgU2VhcmNoUmVzdWx0cyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24uY2xlYXJGaWx0ZXJzKCkpO1xuICB9XG5cbiAgZmlsdGVyU3RhdHVzID0gKGlucHV0LCBkYXRhKSA9PiB7XG4gICAgaWYoaW5wdXQgIT09IHVuZGVmaW5lZCl7XG4gICAgICBpbnB1dCA/XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5hZGRTdGF0dXNGaWx0ZXIoZGF0YSkpIDpcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLnJlbW92ZVN0YXR1c0ZpbHRlcihkYXRhKSk7XG4gICAgfTtcbiAgfTtcblxuICBmaWx0ZXJDb250ZW50VHlwZSA9IChpbnB1dCxkYXRhKSA9PiB7XG4gICAgaWYoaW5wdXQgIT09IHVuZGVmaW5lZCl7XG4gICAgICBpbnB1dCA/XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5hZGRDb250ZW50VHlwZUZpbHRlcihkYXRhKSkgOlxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24ucmVtb3ZlQ29udGVudFR5cGVGaWx0ZXIoZGF0YSkpO1xuICAgIH07XG4gIH07XG5cbiAgZmlsdGVyVG9waWMgPSAoaW5wdXQsIGRhdGEpID0+IHtcbiAgICBpZihpbnB1dCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIGlucHV0ID9cbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLmFkZFRvcGljRmlsdGVyKGRhdGEpKSA6XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5yZW1vdmVUb3BpY0ZpbHRlcihkYXRhKSk7XG4gICAgfTtcbiAgfTtcblxuICB0b2dnbGVGYXZvcml0ZWRTZWFyY2ggPSAoaW5wdXQpID0+IHtcbiAgICBpZihpbnB1dCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLnRvZ2dsZVNhdmVkU2VhcmNoKGlucHV0KSk7XG4gICAgfTtcbiAgfTtcblxuICBoYW5kbGVUaHVtYm5haWxDbGljayA9IChtb2RlbE5hbWUpID0+IChcbiAgICBjb25zb2xlLmxvZyhgVmVoaWNsZSBUaHVtYm5haWw6ICR7bW9kZWxOYW1lfSBjbGlja2VkLmApXG4gICk7XG5cbiAgaGFuZGxlUmVzdWx0Q2xpY2sgPSAocmVzdWx0KSA9PiB7XG4gICAgY29uc29sZS5sb2coYFJlc3VsdDogJHtyZXN1bHR9IGNsaWNrZWQuYClcbiAgfTtcblxuICByZW5kZXIoKSB7ICBcblxuICAgIC8vIFNlYXJjaCByZXN1bHRzIHBhZ2U6IGN1c3RvbSBmaWx0ZXJzXG4gICAgLy8gWFg6IE1ha2UgZGF0YSBkeW5hbWljIG9uY2UgY29ubmVjdGVkIHRvIGdyYXBoUUwgflxuICAgIGNvbnN0IGN1c3RvbUZpbHRlcnMgPSBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIlN0YXR1c1wiLFxuICAgICAgICBvcHRpb25zOlt7XG4gICAgICAgICAgbGFiZWw6IFwiY3VycmVudFwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sIFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiYXJjaGl2ZWRcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9XSxcbiAgICAgICAgY2xpY2tBY3Rpb246IHRoaXMuZmlsdGVyU3RhdHVzLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQ29udGVudCBUeXBlXCIsXG4gICAgICAgIG9wdGlvbnM6IFt7XG4gICAgICAgICAgbGFiZWw6IFwiUHJvZHVjdFwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJBcnRpY2xlXCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkRvY3VtZW50XCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICBsYWJlbDogXCJWaWRlb1wiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgbGFiZWw6IFwiSW1hZ2VcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZCxcbiAgICAgICAgfV0sIFxuICAgICAgICBjbGlja0FjdGlvbjogdGhpcy5maWx0ZXJDb250ZW50VHlwZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gWFg6IE1heSBuZWVkIHRvIHF1ZXJ5IGZvciBhbiBhcnJheSBvZiB0b3BpY3Mgb24gQ29tcG9uZW50V2lsbE1vdW50KCk7XG4gICAgICAgIHRpdGxlOiBcIlRvcGljXCIsXG4gICAgICAgIG9wdGlvbnM6IFt7XG4gICAgICAgICAgbGFiZWw6IFwidGVjaG5vbG9neVwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJibHVldG9vdGhcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwicHJvZHVjdCBpbmZvcm1hdGlvblwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH1dLFxuICAgICAgICBjbGlja0FjdGlvbjogdGhpcy5maWx0ZXJUb3BpY1xuICAgICAgfVxuICAgIF07XG5cbiAgICAvLyBGYXZvcml0ZSBDaGVja2JveCBQcm9wcyAoZGVza3RvcCAmIG1vYmlsZSk7XG4gICAgY29uc3QgZmF2b3JpdGVzRGVza3RvcCA9IHtcbiAgICAgIGxhYmVsOiBcIlNob3cgb25seSBmYXZvcml0ZXNcIixcbiAgICAgIGZvbnRDb2xvcjogXCJyZ2IoNjQgMTAxIDE0OSlcIixcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgY2xpY2tBY3Rpb246IHRoaXMudG9nZ2xlRmF2b3JpdGVkU2VhcmNoLFxuICAgIH1cbiAgICBjb25zdCBmYXZvcml0ZXNNb2JpbGUgPSB7XG4gICAgICBsYWJlbDogXCJTaG93IEZhdm9yaXRlc1wiLFxuICAgICAgZm9udENvbG9yOiBcInJnYig2NCAxMDEgMTQ5KVwiLFxuICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICBjbGlja0FjdGlvbjogdGhpcy50b2dnbGVGYXZvcml0ZWRTZWFyY2gsXG4gICAgfVxuXG4gICAgbGV0IGZpbHRlcnMgPSBjdXN0b21GaWx0ZXJzLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiA8RmlsdGVyIGtleT17ZGF0YS50aXRsZX0gaWQ9e2RhdGEudGl0bGV9IHsuLi5kYXRhfS8+XG4gICAgfSlcblxuICAgIGxldCBwcm9kdWN0VGh1bWJuYWlscywgcmVzdWx0SXRlbXMsIHF1ZXJ5SXRlbXMsIG1hbmFnZVNhdmVkU2VhcmNoZXMsIHNhdmVkU2VhcmNoTGlzdEJveCwgcG9wdWxhclNlYXJjaExpc3RCb3g7IFxuICAgIGNvbnN0IHsgcHJvZHVjdHMsIGZhdm9yaXRlZCwgc2F2ZWRTZWFyY2hlcywgY29udGVudHMsIHNhdmVkQW5kRmF2c30gPSB0aGlzLnByb3BzLnNhbXBsZURhdGE7XG4gICAgaWYocHJvZHVjdHMpe1xuICAgICAgcHJvZHVjdFRodW1ibmFpbHMgPSBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT1cInByb2R1Y3RzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxQcm9kdWN0VGh1bWJuYWlsIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZVRodW1ibmFpbENsaWNrfSB7Li4ucHJvZHVjdH0gLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLnByb2R1Y3RzLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICAgICAgICAgIC8vWFggT25lIGNhciBkaXNwbGF5IGhlcmVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgICAgIC5wcm9kdWN0cy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmKGNvbnRlbnRzKXtcbiAgICAgIHJlc3VsdEl0ZW1zID0gY29udGVudHMubWFwKGNvbnRlbnQgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtjb250ZW50LmlkfSBjbGFzc05hbWU9XCJjb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxSZXN1bHRJdGVtU21hbGwga2V5PXtjb250ZW50LmlkfSBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVSZXN1bHRDbGlja30gey4uLmNvbnRlbnR9IC8+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5jb250ZW50LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY29udGVudC13cmFwcGVyOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBcbiAgICAvL1hYOiBNb2NrIGRhdGEgZm9yIG5vdy4gVE9ETzogY2hhbmdlIFwiY29sbGVjdGlvblwiIGFycmF5IHRvIHF1ZXJ5IHJlc3VsdHMgb2YgdXNlcidzIFNhdmVkIFNlYXJjaGVzLlxuICAgIGlmKHNhdmVkQW5kRmF2cykge1xuICAgICAgbGV0IHNhdmVkU2VhcmNoUHJvcHMgPSB7XG4gICAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXG4gICAgICAgIHRpdGxlOiAnU2F2ZWQgU2VhcmNoZXMnLFxuICAgICAgICBjb2xsZWN0aW9uOiBzYXZlZEFuZEZhdnNcbiAgICAgIH1cbiAgICAgIHNhdmVkU2VhcmNoTGlzdEJveCA9IChcbiAgICAgICAgPExpc3RCb3gga2V5PXtzYXZlZEFuZEZhdnMuaWR9IHsuLi5zYXZlZFNlYXJjaFByb3BzfS8+XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vWFg6IE1vY2sgZGF0YSBmb3Igbm93LiBUT0RPOiBjaGFuZ2UgXCJjb2xsZWN0aW9uXCIgYXJyYXkgdG8gcXVlcnkgcmVzdWx0cyBvZiBQb3B1bGFyIFNlYXJjaGVzLlxuICAgIGlmKHNhdmVkQW5kRmF2cykge1xuICAgICAgbGV0IHBvcHVsYXJTZWFyY2hQcm9wcyA9IHtcbiAgICAgICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgdGl0bGU6ICdQZW9wbGUgYWxzbyBzZWFyY2ggZm9yLi4uJyxcbiAgICAgICAgY29sbGVjdGlvbjogc2F2ZWRBbmRGYXZzLFxuICAgICAgfVxuICAgICAgcG9wdWxhclNlYXJjaExpc3RCb3ggPSAoXG4gICAgICAgIDxMaXN0Qm94IGtleT17c2F2ZWRBbmRGYXZzLmlkfSB7Li4ucG9wdWxhclNlYXJjaFByb3BzfS8+XG4gICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvLyBDdXN0b20gcGF0aCBmb3IgYnJlYWRjcnVtYnMuIFxuICAgIGNvbnN0IHBhdGggPSBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOlwiU2VhcmNoXCIsXG4gICAgICAgIHJvdXRlOiBcIi9kYXNoYm9hcmRcIixcbiAgICAgICAgYXJyb3c6IFwiPlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBYWDogSGFyZCBjb2RlZCBkYXRhIGZvciBub3cuIENvbm5lY3Qgd2l0aCB0b3RhbCBxdWVyeSByZXN1bHQgIyBcbiAgICAgICAgLy8gYW5kIHdyaXRlIGxvZ2ljIGZvciBzaW5nbHVhciB2cyBwbHVyYWwgKHJlc3VsdCAmIHJlc3VsdHMpO1xuICAgICAgICB0aXRsZTogYDE3MiBSZXN1bHRzYCwgXG4gICAgICAgIHJvdXRlOiB1bmRlZmluZWQsXG4gICAgICAgIGFycm93OiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9ub3JtYWxpemUvNy4wLjAvbm9ybWFsaXplLmNzc1wiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPGgzPihTRUFSQ0ggUkVTVUxUIFBBR0UpPC9oMz5cbiAgICAgICAgPEJhbm5lcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1icmVhZGNydW1icy13cmFwcGVyXCI+XG4gICAgICAgICAgICA8QnJlYWRDcnVtYnMgcGF0aHM9e3BhdGh9Lz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPFNlYXJjaFNlY29uZGFyeS8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVza3RvcC12aWV3XCI+PENoZWNrYm94IGlkPXtmYXZvcml0ZXNEZXNrdG9wLmxhYmVsfSB7Li4uZmF2b3JpdGVzRGVza3RvcH0vPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS12aWV3XCI+PENoZWNrYm94IGlkPXtmYXZvcml0ZXNNb2JpbGUubGFiZWx9IHsuLi5mYXZvcml0ZXNNb2JpbGV9Lz48L2Rpdj5cbiAgICAgICAgICAgICAge2ZpbHRlcnN9XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQmFubmVyPlxuICAgICAgICBcbiAgICAgICAgPFBhZ2VTZWN0aW9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdC13cmFwcGVyXCI+XG4gICAgICAgICAgICB7LyogUHJvZHVjdHMgU2VjdGlvbiAqL31cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXNlY3Rpb24taGVhZGVyXCI+UHJvZHVjdHM8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZWhpY2xlLXRodW1ibmFpbHMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICB7cHJvZHVjdFRodW1ibmFpbHN9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIENvbnRlbnQgU2VjdGlvbiAqL31cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXNlY3Rpb24taGVhZGVyXCI+Q29udGVudDwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtaXRlbXMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIHtyZXN1bHRJdGVtc31cbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbi8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtYm94LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtYm94XCI+e3NhdmVkU2VhcmNoTGlzdEJveH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtYm94XCI+e3BvcHVsYXJTZWFyY2hMaXN0Qm94fTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICA8L1BhZ2VTZWN0aW9uPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZGVza3RvcC12aWV3IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2JpbGUtdmlldyB7XG4gICAgICAgICAgICBtYXJnaW46IDMycHggMCAtNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGFnZS1zZWN0aW9uLWhlYWRlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDhweDsvL1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYigyMzEsIDIzMSwgMjMxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbm5lci1icmVhZGNydW1icy13cmFwcGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFubmVyLWNvbnRlbnQtd3JhcHBlcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2gtcmVzdWx0LXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnZlaGljbGUtdGh1bWJuYWlscy13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZXN1bHQtaXRlbXMtd3JhcHBlciB7IC8vXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgICAgICAgZmxleDogMSAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGlzdC1ib3gtd3JhcHBlciB7XG4gICAgICAgICAgICBmbGV4OiAxIDMwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3QtYm94IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDMycHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgLmRlc2t0b3AtdmlldyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9iaWxlLXZpZXcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpbHRlci13cmFwcGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpbHRlci13cmFwcGVyID4gKiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZ2Utc2VjdGlvbi1oZWFkZXIge1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDZweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDEwcHggNnB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggNnB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250ZW50cy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlc3VsdC1pdGVtcy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDMycHggMTZweCAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBzYW1wbGVEYXRhOiBzdGF0ZS5zYW1wbGVEYXRhXG59KVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNlYXJjaFJlc3VsdHMpKTsiXX0= */\n/*@ sourceURL=pages/search-results.js */'
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
                lineNumber: 183
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_ResultItemSmall__["a" /* default */], _extends({ key: content.id, handleClick: _this2.handleResultClick }, content, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 184
              }
            })),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
              styleId: '1327913020',
              css: '.content-wrapper.jsx-1327913020{border:1px solid lightgrey;border-radius:4px;margin-bottom:16px;padding:0 16px;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;}.content-wrapper.jsx-1327913020:hover{cursor:pointer;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;-webkit-box-shadow:0px 10px 10px -6px rgba(0,0,0,0.15);-moz-box-shadow:0px 10px 10px -6px rgba(0,0,0,0.15);box-shadow:0px 10px 10px -6px rgba(0,0,0,0.15);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC1yZXN1bHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdMd0IsQUFHNEMsQUFPWixlQUNVLFlBUFAsa0JBQ0MsbUJBQ0osU0FNd0MsTUFMOUIsaURBTTJCLFNBTHRELDJDQU1pRCwrQ0FDakQiLCJmaWxlIjoicGFnZXMvc2VhcmNoLXJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHNob3J0aWQgZnJvbSAnc2hvcnRpZCc7XG5cbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnLi4vbGliL3dpdGhSZWR1eCc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRmlsdGVyJztcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9CYW5uZXInO1xuaW1wb3J0IExpc3RCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0Qm94JztcbmltcG9ydCBDaGVja2JveCBmcm9tICcuLi9jb21wb25lbnRzL0NoZWNrYm94JztcbmltcG9ydCBQYWdlU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VTZWN0aW9uJztcbmltcG9ydCBCcmVhZENydW1icyBmcm9tICcuLi9jb21wb25lbnRzL0JyZWFkQ3J1bWJzJztcbmltcG9ydCBSZXN1bHRJdGVtU21hbGwgZnJvbSAnLi4vY29tcG9uZW50cy9SZXN1bHRJdGVtU21hbGwnO1xuaW1wb3J0IFNlYXJjaFNlY29uZGFyeSBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaFNlY29uZGFyeSc7XG5pbXBvcnQgUHJvZHVjdFRodW1ibmFpbCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RUaHVtYm5haWwnO1xuXG5cbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XG5cbmltcG9ydCAqIGFzIGFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL3NlYXJjaCc7XG5cbmNsYXNzIFNlYXJjaFJlc3VsdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLmNsZWFyRmlsdGVycygpKTtcbiAgfVxuXG4gIGZpbHRlclN0YXR1cyA9IChpbnB1dCwgZGF0YSkgPT4ge1xuICAgIGlmKGlucHV0ICE9PSB1bmRlZmluZWQpe1xuICAgICAgaW5wdXQgP1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24uYWRkU3RhdHVzRmlsdGVyKGRhdGEpKSA6XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5yZW1vdmVTdGF0dXNGaWx0ZXIoZGF0YSkpO1xuICAgIH07XG4gIH07XG5cbiAgZmlsdGVyQ29udGVudFR5cGUgPSAoaW5wdXQsZGF0YSkgPT4ge1xuICAgIGlmKGlucHV0ICE9PSB1bmRlZmluZWQpe1xuICAgICAgaW5wdXQgP1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24uYWRkQ29udGVudFR5cGVGaWx0ZXIoZGF0YSkpIDpcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLnJlbW92ZUNvbnRlbnRUeXBlRmlsdGVyKGRhdGEpKTtcbiAgICB9O1xuICB9O1xuXG4gIGZpbHRlclRvcGljID0gKGlucHV0LCBkYXRhKSA9PiB7XG4gICAgaWYoaW5wdXQgIT09IHVuZGVmaW5lZCl7XG4gICAgICBpbnB1dCA/XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5hZGRUb3BpY0ZpbHRlcihkYXRhKSkgOlxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24ucmVtb3ZlVG9waWNGaWx0ZXIoZGF0YSkpO1xuICAgIH07XG4gIH07XG5cbiAgdG9nZ2xlRmF2b3JpdGVkU2VhcmNoID0gKGlucHV0KSA9PiB7XG4gICAgaWYoaW5wdXQgIT09IHVuZGVmaW5lZCl7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi50b2dnbGVTYXZlZFNlYXJjaChpbnB1dCkpO1xuICAgIH07XG4gIH07XG5cbiAgaGFuZGxlVGh1bWJuYWlsQ2xpY2sgPSAobW9kZWxOYW1lKSA9PiAoXG4gICAgY29uc29sZS5sb2coYFZlaGljbGUgVGh1bWJuYWlsOiAke21vZGVsTmFtZX0gY2xpY2tlZC5gKVxuICApO1xuXG4gIGhhbmRsZVJlc3VsdENsaWNrID0gKHJlc3VsdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBSZXN1bHQ6ICR7cmVzdWx0fSBjbGlja2VkLmApXG4gIH07XG5cbiAgcmVuZGVyKCkgeyAgXG5cbiAgICAvLyBTZWFyY2ggcmVzdWx0cyBwYWdlOiBjdXN0b20gZmlsdGVyc1xuICAgIC8vIFhYOiBNYWtlIGRhdGEgZHluYW1pYyBvbmNlIGNvbm5lY3RlZCB0byBncmFwaFFMIH5cbiAgICBjb25zdCBjdXN0b21GaWx0ZXJzID0gW1xuICAgICAge1xuICAgICAgICB0aXRsZTogXCJTdGF0dXNcIixcbiAgICAgICAgb3B0aW9uczpbe1xuICAgICAgICAgIGxhYmVsOiBcImN1cnJlbnRcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LCBcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcImFyY2hpdmVkXCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfV0sXG4gICAgICAgIGNsaWNrQWN0aW9uOiB0aGlzLmZpbHRlclN0YXR1cyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkNvbnRlbnQgVHlwZVwiLFxuICAgICAgICBvcHRpb25zOiBbe1xuICAgICAgICAgIGxhYmVsOiBcIlByb2R1Y3RcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiQXJ0aWNsZVwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJEb2N1bWVudFwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgbGFiZWw6IFwiVmlkZW9cIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgIGxhYmVsOiBcIkltYWdlXCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWQsXG4gICAgICAgIH1dLCBcbiAgICAgICAgY2xpY2tBY3Rpb246IHRoaXMuZmlsdGVyQ29udGVudFR5cGVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIFhYOiBNYXkgbmVlZCB0byBxdWVyeSBmb3IgYW4gYXJyYXkgb2YgdG9waWNzIG9uIENvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgICAgICB0aXRsZTogXCJUb3BpY1wiLFxuICAgICAgICBvcHRpb25zOiBbe1xuICAgICAgICAgIGxhYmVsOiBcInRlY2hub2xvZ3lcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiYmx1ZXRvb3RoXCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcInByb2R1Y3QgaW5mb3JtYXRpb25cIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9XSxcbiAgICAgICAgY2xpY2tBY3Rpb246IHRoaXMuZmlsdGVyVG9waWNcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgLy8gRmF2b3JpdGUgQ2hlY2tib3ggUHJvcHMgKGRlc2t0b3AgJiBtb2JpbGUpO1xuICAgIGNvbnN0IGZhdm9yaXRlc0Rlc2t0b3AgPSB7XG4gICAgICBsYWJlbDogXCJTaG93IG9ubHkgZmF2b3JpdGVzXCIsXG4gICAgICBmb250Q29sb3I6IFwicmdiKDY0IDEwMSAxNDkpXCIsXG4gICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgIGNsaWNrQWN0aW9uOiB0aGlzLnRvZ2dsZUZhdm9yaXRlZFNlYXJjaCxcbiAgICB9XG4gICAgY29uc3QgZmF2b3JpdGVzTW9iaWxlID0ge1xuICAgICAgbGFiZWw6IFwiU2hvdyBGYXZvcml0ZXNcIixcbiAgICAgIGZvbnRDb2xvcjogXCJyZ2IoNjQgMTAxIDE0OSlcIixcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgY2xpY2tBY3Rpb246IHRoaXMudG9nZ2xlRmF2b3JpdGVkU2VhcmNoLFxuICAgIH1cblxuICAgIGxldCBmaWx0ZXJzID0gY3VzdG9tRmlsdGVycy5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gPEZpbHRlciBrZXk9e2RhdGEudGl0bGV9IGlkPXtkYXRhLnRpdGxlfSB7Li4uZGF0YX0vPlxuICAgIH0pXG5cbiAgICBsZXQgcHJvZHVjdFRodW1ibmFpbHMsIHJlc3VsdEl0ZW1zLCBxdWVyeUl0ZW1zLCBtYW5hZ2VTYXZlZFNlYXJjaGVzLCBzYXZlZFNlYXJjaExpc3RCb3gsIHBvcHVsYXJTZWFyY2hMaXN0Qm94OyBcbiAgICBjb25zdCB7IHByb2R1Y3RzLCBmYXZvcml0ZWQsIHNhdmVkU2VhcmNoZXMsIGNvbnRlbnRzLCBzYXZlZEFuZEZhdnN9ID0gdGhpcy5wcm9wcy5zYW1wbGVEYXRhO1xuICAgIGlmKHByb2R1Y3RzKXtcbiAgICAgIHByb2R1Y3RUaHVtYm5haWxzID0gcHJvZHVjdHMubWFwKHByb2R1Y3QgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0LmlkfSBjbGFzc05hbWU9XCJwcm9kdWN0cy13cmFwcGVyXCI+XG4gICAgICAgICAgICA8UHJvZHVjdFRodW1ibmFpbCBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVUaHVtYm5haWxDbGlja30gey4uLnByb2R1Y3R9IC8+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5wcm9kdWN0cy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICAgICAgICAgICAgICAvL1hYIE9uZSBjYXIgZGlzcGxheSBoZXJlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgICAgICAucHJvZHVjdHMtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZihjb250ZW50cyl7XG4gICAgICByZXN1bHRJdGVtcyA9IGNvbnRlbnRzLm1hcChjb250ZW50ID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17Y29udGVudC5pZH0gY2xhc3NOYW1lPVwiY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8UmVzdWx0SXRlbVNtYWxsIGtleT17Y29udGVudC5pZH0gaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlUmVzdWx0Q2xpY2t9IHsuLi5jb250ZW50fSAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAuY29udGVudC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbnRlbnQtd3JhcHBlcjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgXG4gICAgLy9YWDogTW9jayBkYXRhIGZvciBub3cuIFRPRE86IGNoYW5nZSBcImNvbGxlY3Rpb25cIiBhcnJheSB0byBxdWVyeSByZXN1bHRzIG9mIHVzZXIncyBTYXZlZCBTZWFyY2hlcy5cbiAgICBpZihzYXZlZEFuZEZhdnMpIHtcbiAgICAgIGxldCBzYXZlZFNlYXJjaFByb3BzID0ge1xuICAgICAgICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxuICAgICAgICB0aXRsZTogJ1NhdmVkIFNlYXJjaGVzJyxcbiAgICAgICAgY29sbGVjdGlvbjogc2F2ZWRBbmRGYXZzXG4gICAgICB9XG4gICAgICBzYXZlZFNlYXJjaExpc3RCb3ggPSAoXG4gICAgICAgIDxMaXN0Qm94IGtleT17c2F2ZWRBbmRGYXZzLmlkfSB7Li4uc2F2ZWRTZWFyY2hQcm9wc30vPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvL1hYOiBNb2NrIGRhdGEgZm9yIG5vdy4gVE9ETzogY2hhbmdlIFwiY29sbGVjdGlvblwiIGFycmF5IHRvIHF1ZXJ5IHJlc3VsdHMgb2YgUG9wdWxhciBTZWFyY2hlcy5cbiAgICBpZihzYXZlZEFuZEZhdnMpIHtcbiAgICAgIGxldCBwb3B1bGFyU2VhcmNoUHJvcHMgPSB7XG4gICAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXG4gICAgICAgIHRpdGxlOiAnUGVvcGxlIGFsc28gc2VhcmNoIGZvci4uLicsXG4gICAgICAgIGNvbGxlY3Rpb246IHNhdmVkQW5kRmF2cyxcbiAgICAgIH1cbiAgICAgIHBvcHVsYXJTZWFyY2hMaXN0Qm94ID0gKFxuICAgICAgICA8TGlzdEJveCBrZXk9e3NhdmVkQW5kRmF2cy5pZH0gey4uLnBvcHVsYXJTZWFyY2hQcm9wc30vPlxuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQ3VzdG9tIHBhdGggZm9yIGJyZWFkY3J1bWJzLiBcbiAgICBjb25zdCBwYXRoID0gW1xuICAgICAge1xuICAgICAgICB0aXRsZTpcIlNlYXJjaFwiLFxuICAgICAgICByb3V0ZTogXCIvZGFzaGJvYXJkXCIsXG4gICAgICAgIGFycm93OiBcIj5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gWFg6IEhhcmQgY29kZWQgZGF0YSBmb3Igbm93LiBDb25uZWN0IHdpdGggdG90YWwgcXVlcnkgcmVzdWx0ICMgXG4gICAgICAgIC8vIGFuZCB3cml0ZSBsb2dpYyBmb3Igc2luZ2x1YXIgdnMgcGx1cmFsIChyZXN1bHQgJiByZXN1bHRzKTtcbiAgICAgICAgdGl0bGU6IGAxNzIgUmVzdWx0c2AsIFxuICAgICAgICByb3V0ZTogdW5kZWZpbmVkLFxuICAgICAgICBhcnJvdzogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgXTtcblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbm9ybWFsaXplLzcuMC4wL25vcm1hbGl6ZS5jc3NcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxoMz4oU0VBUkNIIFJFU1VMVCBQQUdFKTwvaDM+XG4gICAgICAgIDxCYW5uZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItYnJlYWRjcnVtYnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgPEJyZWFkQ3J1bWJzIHBhdGhzPXtwYXRofS8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxTZWFyY2hTZWNvbmRhcnkvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2t0b3Atdmlld1wiPjxDaGVja2JveCBpZD17ZmF2b3JpdGVzRGVza3RvcC5sYWJlbH0gey4uLmZhdm9yaXRlc0Rlc2t0b3B9Lz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtdmlld1wiPjxDaGVja2JveCBpZD17ZmF2b3JpdGVzTW9iaWxlLmxhYmVsfSB7Li4uZmF2b3JpdGVzTW9iaWxlfS8+PC9kaXY+XG4gICAgICAgICAgICAgIHtmaWx0ZXJzfVxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Jhbm5lcj5cbiAgICAgICAgXG4gICAgICAgIDxQYWdlU2VjdGlvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtd3JhcHBlclwiPlxuICAgICAgICAgICAgey8qIFByb2R1Y3RzIFNlY3Rpb24gKi99XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1zZWN0aW9uLWhlYWRlclwiPlByb2R1Y3RzPC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVoaWNsZS10aHVtYm5haWxzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAge3Byb2R1Y3RUaHVtYm5haWxzfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBDb250ZW50IFNlY3Rpb24gKi99XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1zZWN0aW9uLWhlYWRlclwiPkNvbnRlbnQ8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50cy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LWl0ZW1zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICB7cmVzdWx0SXRlbXN9XG4gICAgICAgICAgICAgICAgPFBhZ2luYXRpb24vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWJveC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWJveFwiPntzYXZlZFNlYXJjaExpc3RCb3h9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWJveFwiPntwb3B1bGFyU2VhcmNoTGlzdEJveH08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgPC9QYWdlU2VjdGlvbj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmRlc2t0b3AtdmlldyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9iaWxlLXZpZXcge1xuICAgICAgICAgICAgbWFyZ2luOiAzMnB4IDAgLTRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhZ2Utc2VjdGlvbi1oZWFkZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiA4cHg7Ly9cbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2IoMjMxLCAyMzEsIDIzMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYW5uZXItYnJlYWRjcnVtYnMtd3JhcHBlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbm5lci1jb250ZW50LXdyYXBwZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLXJlc3VsdC13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC52ZWhpY2xlLXRodW1ibmFpbHMtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVzdWx0LWl0ZW1zLXdyYXBwZXIgeyAvL1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAgICAgIGZsZXg6IDEgMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpc3QtYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgZmxleDogMSAzMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0LWJveCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAzMnB4IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgIC5kZXNrdG9wLXZpZXcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vYmlsZS12aWV3IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWx0ZXItd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWx0ZXItd3JhcHBlciA+ICoge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWdlLXNlY3Rpb24taGVhZGVyIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCA2cHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDZweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDZweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGVudHMtd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZXN1bHQtaXRlbXMtd3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAzMnB4IDE2cHggMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgc2FtcGxlRGF0YTogc3RhdGUuc2FtcGxlRGF0YVxufSlcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTZWFyY2hSZXN1bHRzKSk7Il19 */\n/*@ sourceURL=pages/search-results.js */'
            })
          );
        });
      };

      //XX: Mock data for now. TODO: change "collection" array to query results of user's Saved Searches.
      if (savedAndFavs) {
        var savedSearchProps = {
          id: __WEBPACK_IMPORTED_MODULE_4_shortid___default.a.generate(),
          title: 'Saved Searches',
          collection: savedAndFavs
        };
        savedSearchListBox = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_ListBox__["a" /* default */], _extends({ key: savedAndFavs.id }, savedSearchProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          }
        }));
      }

      //XX: Mock data for now. TODO: change "collection" array to query results of Popular Searches.
      if (savedAndFavs) {
        var popularSearchProps = {
          id: __WEBPACK_IMPORTED_MODULE_4_shortid___default.a.generate(),
          title: 'People also search for...',
          collection: savedAndFavs
        };
        popularSearchListBox = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_ListBox__["a" /* default */], _extends({ key: savedAndFavs.id }, popularSearchProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          }
        }));
      }

      // Custom path for breadcrumbs. 
      var path = [{
        title: "Search",
        route: "/dashboard",
        arrow: ">"
      }, {
        // XX: Hard coded data for now. Connect with total query result # 
        // and write logic for singluar vs plural (result & results);
        title: '172 Results',
        route: undefined,
        arrow: undefined
      }];

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-477358986' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 249
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css', className: 'jsx-477358986',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 250
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', className: 'jsx-477358986',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 251
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h3',
          {
            className: 'jsx-477358986',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 254
            }
          },
          '(SEARCH RESULT PAGE)'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7__components_Banner__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 255
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-477358986' + ' ' + 'banner-breadcrumbs-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 256
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_BreadCrumbs__["a" /* default */], { paths: path, __source: {
                fileName: _jsxFileName,
                lineNumber: 257
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-477358986' + ' ' + 'banner-content-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 260
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_SearchSecondary__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 261
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-477358986' + ' ' + 'filter-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 262
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-477358986' + ' ' + 'desktop-view',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 263
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Checkbox__["a" /* default */], _extends({ id: favoritesDesktop.label }, favoritesDesktop, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 263
                  }
                }))
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-477358986' + ' ' + 'mobile-view',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 264
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Checkbox__["a" /* default */], _extends({ id: favoritesMobile.label }, favoritesMobile, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 264
                  }
                }))
              ),
              filters
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_10__components_PageSection__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 270
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-477358986' + ' ' + 'search-result-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 271
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'h3',
              {
                className: 'jsx-477358986' + ' ' + 'page-section-header',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 273
                }
              },
              'Products'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-477358986' + ' ' + 'vehicle-thumbnails-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 274
                }
              },
              productThumbnails
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'h3',
              {
                className: 'jsx-477358986' + ' ' + 'page-section-header',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 279
                }
              },
              'Content'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-477358986' + ' ' + 'contents-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 280
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-477358986' + ' ' + 'result-items-wrapper',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 281
                  }
                },
                resultItems,
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_Pagination__["a" /* default */], {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 283
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-477358986' + ' ' + 'list-box-wrapper',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 285
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-477358986' + ' ' + 'list-box',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 286
                    }
                  },
                  savedSearchListBox
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-477358986' + ' ' + 'list-box',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 287
                    }
                  },
                  popularSearchListBox
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '477358986',
          css: '.desktop-view.jsx-477358986{display:none;}.mobile-view.jsx-477358986{margin:32px 0 -4px;}.page-section-header.jsx-477358986{font-size:1.5em;padding-bottom:32px;border-bottom:2px dashed rgb(231,231,231);}.banner-breadcrumbs-wrapper.jsx-477358986{width:100%;}.banner-content-wrapper.jsx-477358986{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;}.search-result-wrapper.jsx-477358986{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;}.vehicle-thumbnails-wrapper.jsx-477358986{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.result-items-wrapper.jsx-477358986{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-flex:1 100%;-ms-flex:1 100%;flex:1 100%;margin-bottom:16px;}list-box-wrapper.jsx-477358986{-webkit-flex:1 30%;-ms-flex:1 30%;flex:1 30%;}.list-box.jsx-477358986{margin:0 0 32px 0;}@media all and (min-width:376px){.desktop-view.jsx-477358986{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.mobile-view.jsx-477358986{display:none;}.filter-wrapper.jsx-477358986{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:100%;min-width:400px;margin-left:40px;}.filter-wrapper.jsx-477358986>*.jsx-477358986{margin:0 20px;}.page-section-header.jsx-477358986{border-bottom:none;padding-bottom:8px;-webkit-box-shadow:0px 10px 6px -6px rgba(0,0,0,0.15);-moz-box-shadow:0px 10px 6px -6px rgba(0,0,0,0.15);box-shadow:0px 10px 6px -6px rgba(0,0,0,0.15);}.contents-wrapper.jsx-477358986{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;}.result-items-wrapper.jsx-477358986{margin:0 32px 16px 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC1yZXN1bHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdTb0IsQUFHMEIsQUFHTSxBQUdILEFBTUwsQUFHRSxBQUlBLEFBSUEsQUFHQSxBQU1GLEFBR08sQUFLSCxBQUdBLEFBR0EsQUFRQyxBQUdLLEFBT04sQUFLaEIsV0F4REQsRUFaQSxBQTJDRSxDQVdBLEVBL0NvQixFQTRCdEIsQ0FoQ0EsQUFzRHVCLEVBV3JCLGVBNUQ0QyxFQWtEWSxPQTFCMUQsNkJBakJ1QixBQUlHLEFBSTFCLEFBRzBCLEFBY3hCLEFBTXFCLEFBa0JFLElBdkR6QixjQWtEdUQsbURBQ0wsTUE1Q2xELEFBaURFLFNBN0NGLEFBT2MsU0FvQmUsc0JBYzNCLGlCQWpDbUIsbUJBQ3JCLHVDQW1CZSxXQUNLLGdCQUNDLGlCQUNuQiIsImZpbGUiOiJwYWdlcy9zZWFyY2gtcmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc2hvcnRpZCBmcm9tICdzaG9ydGlkJztcblxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICcuLi9saWIvd2l0aFJlZHV4JztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9GaWx0ZXInO1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0Jhbm5lcic7XG5pbXBvcnQgTGlzdEJveCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RCb3gnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hlY2tib3gnO1xuaW1wb3J0IFBhZ2VTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZVNlY3Rpb24nO1xuaW1wb3J0IEJyZWFkQ3J1bWJzIGZyb20gJy4uL2NvbXBvbmVudHMvQnJlYWRDcnVtYnMnO1xuaW1wb3J0IFJlc3VsdEl0ZW1TbWFsbCBmcm9tICcuLi9jb21wb25lbnRzL1Jlc3VsdEl0ZW1TbWFsbCc7XG5pbXBvcnQgU2VhcmNoU2Vjb25kYXJ5IGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoU2Vjb25kYXJ5JztcbmltcG9ydCBQcm9kdWN0VGh1bWJuYWlsIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdFRodW1ibmFpbCc7XG5cblxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcblxuaW1wb3J0ICogYXMgYWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvc2VhcmNoJztcblxuY2xhc3MgU2VhcmNoUmVzdWx0cyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24uY2xlYXJGaWx0ZXJzKCkpO1xuICB9XG5cbiAgZmlsdGVyU3RhdHVzID0gKGlucHV0LCBkYXRhKSA9PiB7XG4gICAgaWYoaW5wdXQgIT09IHVuZGVmaW5lZCl7XG4gICAgICBpbnB1dCA/XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5hZGRTdGF0dXNGaWx0ZXIoZGF0YSkpIDpcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLnJlbW92ZVN0YXR1c0ZpbHRlcihkYXRhKSk7XG4gICAgfTtcbiAgfTtcblxuICBmaWx0ZXJDb250ZW50VHlwZSA9IChpbnB1dCxkYXRhKSA9PiB7XG4gICAgaWYoaW5wdXQgIT09IHVuZGVmaW5lZCl7XG4gICAgICBpbnB1dCA/XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5hZGRDb250ZW50VHlwZUZpbHRlcihkYXRhKSkgOlxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24ucmVtb3ZlQ29udGVudFR5cGVGaWx0ZXIoZGF0YSkpO1xuICAgIH07XG4gIH07XG5cbiAgZmlsdGVyVG9waWMgPSAoaW5wdXQsIGRhdGEpID0+IHtcbiAgICBpZihpbnB1dCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIGlucHV0ID9cbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLmFkZFRvcGljRmlsdGVyKGRhdGEpKSA6XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5yZW1vdmVUb3BpY0ZpbHRlcihkYXRhKSk7XG4gICAgfTtcbiAgfTtcblxuICB0b2dnbGVGYXZvcml0ZWRTZWFyY2ggPSAoaW5wdXQpID0+IHtcbiAgICBpZihpbnB1dCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLnRvZ2dsZVNhdmVkU2VhcmNoKGlucHV0KSk7XG4gICAgfTtcbiAgfTtcblxuICBoYW5kbGVUaHVtYm5haWxDbGljayA9IChtb2RlbE5hbWUpID0+IChcbiAgICBjb25zb2xlLmxvZyhgVmVoaWNsZSBUaHVtYm5haWw6ICR7bW9kZWxOYW1lfSBjbGlja2VkLmApXG4gICk7XG5cbiAgaGFuZGxlUmVzdWx0Q2xpY2sgPSAocmVzdWx0KSA9PiB7XG4gICAgY29uc29sZS5sb2coYFJlc3VsdDogJHtyZXN1bHR9IGNsaWNrZWQuYClcbiAgfTtcblxuICByZW5kZXIoKSB7ICBcblxuICAgIC8vIFNlYXJjaCByZXN1bHRzIHBhZ2U6IGN1c3RvbSBmaWx0ZXJzXG4gICAgLy8gWFg6IE1ha2UgZGF0YSBkeW5hbWljIG9uY2UgY29ubmVjdGVkIHRvIGdyYXBoUUwgflxuICAgIGNvbnN0IGN1c3RvbUZpbHRlcnMgPSBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIlN0YXR1c1wiLFxuICAgICAgICBvcHRpb25zOlt7XG4gICAgICAgICAgbGFiZWw6IFwiY3VycmVudFwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sIFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiYXJjaGl2ZWRcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9XSxcbiAgICAgICAgY2xpY2tBY3Rpb246IHRoaXMuZmlsdGVyU3RhdHVzLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQ29udGVudCBUeXBlXCIsXG4gICAgICAgIG9wdGlvbnM6IFt7XG4gICAgICAgICAgbGFiZWw6IFwiUHJvZHVjdFwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJBcnRpY2xlXCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkRvY3VtZW50XCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICBsYWJlbDogXCJWaWRlb1wiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgbGFiZWw6IFwiSW1hZ2VcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZCxcbiAgICAgICAgfV0sIFxuICAgICAgICBjbGlja0FjdGlvbjogdGhpcy5maWx0ZXJDb250ZW50VHlwZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gWFg6IE1heSBuZWVkIHRvIHF1ZXJ5IGZvciBhbiBhcnJheSBvZiB0b3BpY3Mgb24gQ29tcG9uZW50V2lsbE1vdW50KCk7XG4gICAgICAgIHRpdGxlOiBcIlRvcGljXCIsXG4gICAgICAgIG9wdGlvbnM6IFt7XG4gICAgICAgICAgbGFiZWw6IFwidGVjaG5vbG9neVwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJibHVldG9vdGhcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwicHJvZHVjdCBpbmZvcm1hdGlvblwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH1dLFxuICAgICAgICBjbGlja0FjdGlvbjogdGhpcy5maWx0ZXJUb3BpY1xuICAgICAgfVxuICAgIF07XG5cbiAgICAvLyBGYXZvcml0ZSBDaGVja2JveCBQcm9wcyAoZGVza3RvcCAmIG1vYmlsZSk7XG4gICAgY29uc3QgZmF2b3JpdGVzRGVza3RvcCA9IHtcbiAgICAgIGxhYmVsOiBcIlNob3cgb25seSBmYXZvcml0ZXNcIixcbiAgICAgIGZvbnRDb2xvcjogXCJyZ2IoNjQgMTAxIDE0OSlcIixcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgY2xpY2tBY3Rpb246IHRoaXMudG9nZ2xlRmF2b3JpdGVkU2VhcmNoLFxuICAgIH1cbiAgICBjb25zdCBmYXZvcml0ZXNNb2JpbGUgPSB7XG4gICAgICBsYWJlbDogXCJTaG93IEZhdm9yaXRlc1wiLFxuICAgICAgZm9udENvbG9yOiBcInJnYig2NCAxMDEgMTQ5KVwiLFxuICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICBjbGlja0FjdGlvbjogdGhpcy50b2dnbGVGYXZvcml0ZWRTZWFyY2gsXG4gICAgfVxuXG4gICAgbGV0IGZpbHRlcnMgPSBjdXN0b21GaWx0ZXJzLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiA8RmlsdGVyIGtleT17ZGF0YS50aXRsZX0gaWQ9e2RhdGEudGl0bGV9IHsuLi5kYXRhfS8+XG4gICAgfSlcblxuICAgIGxldCBwcm9kdWN0VGh1bWJuYWlscywgcmVzdWx0SXRlbXMsIHF1ZXJ5SXRlbXMsIG1hbmFnZVNhdmVkU2VhcmNoZXMsIHNhdmVkU2VhcmNoTGlzdEJveCwgcG9wdWxhclNlYXJjaExpc3RCb3g7IFxuICAgIGNvbnN0IHsgcHJvZHVjdHMsIGZhdm9yaXRlZCwgc2F2ZWRTZWFyY2hlcywgY29udGVudHMsIHNhdmVkQW5kRmF2c30gPSB0aGlzLnByb3BzLnNhbXBsZURhdGE7XG4gICAgaWYocHJvZHVjdHMpe1xuICAgICAgcHJvZHVjdFRodW1ibmFpbHMgPSBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT1cInByb2R1Y3RzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxQcm9kdWN0VGh1bWJuYWlsIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZVRodW1ibmFpbENsaWNrfSB7Li4ucHJvZHVjdH0gLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLnByb2R1Y3RzLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICAgICAgICAgIC8vWFggT25lIGNhciBkaXNwbGF5IGhlcmVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgICAgIC5wcm9kdWN0cy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmKGNvbnRlbnRzKXtcbiAgICAgIHJlc3VsdEl0ZW1zID0gY29udGVudHMubWFwKGNvbnRlbnQgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtjb250ZW50LmlkfSBjbGFzc05hbWU9XCJjb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxSZXN1bHRJdGVtU21hbGwga2V5PXtjb250ZW50LmlkfSBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVSZXN1bHRDbGlja30gey4uLmNvbnRlbnR9IC8+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5jb250ZW50LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY29udGVudC13cmFwcGVyOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBcbiAgICAvL1hYOiBNb2NrIGRhdGEgZm9yIG5vdy4gVE9ETzogY2hhbmdlIFwiY29sbGVjdGlvblwiIGFycmF5IHRvIHF1ZXJ5IHJlc3VsdHMgb2YgdXNlcidzIFNhdmVkIFNlYXJjaGVzLlxuICAgIGlmKHNhdmVkQW5kRmF2cykge1xuICAgICAgbGV0IHNhdmVkU2VhcmNoUHJvcHMgPSB7XG4gICAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXG4gICAgICAgIHRpdGxlOiAnU2F2ZWQgU2VhcmNoZXMnLFxuICAgICAgICBjb2xsZWN0aW9uOiBzYXZlZEFuZEZhdnNcbiAgICAgIH1cbiAgICAgIHNhdmVkU2VhcmNoTGlzdEJveCA9IChcbiAgICAgICAgPExpc3RCb3gga2V5PXtzYXZlZEFuZEZhdnMuaWR9IHsuLi5zYXZlZFNlYXJjaFByb3BzfS8+XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vWFg6IE1vY2sgZGF0YSBmb3Igbm93LiBUT0RPOiBjaGFuZ2UgXCJjb2xsZWN0aW9uXCIgYXJyYXkgdG8gcXVlcnkgcmVzdWx0cyBvZiBQb3B1bGFyIFNlYXJjaGVzLlxuICAgIGlmKHNhdmVkQW5kRmF2cykge1xuICAgICAgbGV0IHBvcHVsYXJTZWFyY2hQcm9wcyA9IHtcbiAgICAgICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgdGl0bGU6ICdQZW9wbGUgYWxzbyBzZWFyY2ggZm9yLi4uJyxcbiAgICAgICAgY29sbGVjdGlvbjogc2F2ZWRBbmRGYXZzLFxuICAgICAgfVxuICAgICAgcG9wdWxhclNlYXJjaExpc3RCb3ggPSAoXG4gICAgICAgIDxMaXN0Qm94IGtleT17c2F2ZWRBbmRGYXZzLmlkfSB7Li4ucG9wdWxhclNlYXJjaFByb3BzfS8+XG4gICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvLyBDdXN0b20gcGF0aCBmb3IgYnJlYWRjcnVtYnMuIFxuICAgIGNvbnN0IHBhdGggPSBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOlwiU2VhcmNoXCIsXG4gICAgICAgIHJvdXRlOiBcIi9kYXNoYm9hcmRcIixcbiAgICAgICAgYXJyb3c6IFwiPlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBYWDogSGFyZCBjb2RlZCBkYXRhIGZvciBub3cuIENvbm5lY3Qgd2l0aCB0b3RhbCBxdWVyeSByZXN1bHQgIyBcbiAgICAgICAgLy8gYW5kIHdyaXRlIGxvZ2ljIGZvciBzaW5nbHVhciB2cyBwbHVyYWwgKHJlc3VsdCAmIHJlc3VsdHMpO1xuICAgICAgICB0aXRsZTogYDE3MiBSZXN1bHRzYCwgXG4gICAgICAgIHJvdXRlOiB1bmRlZmluZWQsXG4gICAgICAgIGFycm93OiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9ub3JtYWxpemUvNy4wLjAvbm9ybWFsaXplLmNzc1wiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPGgzPihTRUFSQ0ggUkVTVUxUIFBBR0UpPC9oMz5cbiAgICAgICAgPEJhbm5lcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1icmVhZGNydW1icy13cmFwcGVyXCI+XG4gICAgICAgICAgICA8QnJlYWRDcnVtYnMgcGF0aHM9e3BhdGh9Lz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPFNlYXJjaFNlY29uZGFyeS8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVza3RvcC12aWV3XCI+PENoZWNrYm94IGlkPXtmYXZvcml0ZXNEZXNrdG9wLmxhYmVsfSB7Li4uZmF2b3JpdGVzRGVza3RvcH0vPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS12aWV3XCI+PENoZWNrYm94IGlkPXtmYXZvcml0ZXNNb2JpbGUubGFiZWx9IHsuLi5mYXZvcml0ZXNNb2JpbGV9Lz48L2Rpdj5cbiAgICAgICAgICAgICAge2ZpbHRlcnN9XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQmFubmVyPlxuICAgICAgICBcbiAgICAgICAgPFBhZ2VTZWN0aW9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdC13cmFwcGVyXCI+XG4gICAgICAgICAgICB7LyogUHJvZHVjdHMgU2VjdGlvbiAqL31cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXNlY3Rpb24taGVhZGVyXCI+UHJvZHVjdHM8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZWhpY2xlLXRodW1ibmFpbHMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICB7cHJvZHVjdFRodW1ibmFpbHN9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIENvbnRlbnQgU2VjdGlvbiAqL31cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXNlY3Rpb24taGVhZGVyXCI+Q29udGVudDwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtaXRlbXMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIHtyZXN1bHRJdGVtc31cbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbi8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtYm94LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtYm94XCI+e3NhdmVkU2VhcmNoTGlzdEJveH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtYm94XCI+e3BvcHVsYXJTZWFyY2hMaXN0Qm94fTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICA8L1BhZ2VTZWN0aW9uPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZGVza3RvcC12aWV3IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2JpbGUtdmlldyB7XG4gICAgICAgICAgICBtYXJnaW46IDMycHggMCAtNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGFnZS1zZWN0aW9uLWhlYWRlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDhweDsvL1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYigyMzEsIDIzMSwgMjMxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbm5lci1icmVhZGNydW1icy13cmFwcGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFubmVyLWNvbnRlbnQtd3JhcHBlcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2gtcmVzdWx0LXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnZlaGljbGUtdGh1bWJuYWlscy13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZXN1bHQtaXRlbXMtd3JhcHBlciB7IC8vXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgICAgICAgZmxleDogMSAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGlzdC1ib3gtd3JhcHBlciB7XG4gICAgICAgICAgICBmbGV4OiAxIDMwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3QtYm94IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDMycHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgLmRlc2t0b3AtdmlldyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9iaWxlLXZpZXcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpbHRlci13cmFwcGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpbHRlci13cmFwcGVyID4gKiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZ2Utc2VjdGlvbi1oZWFkZXIge1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDZweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDEwcHggNnB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggNnB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250ZW50cy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlc3VsdC1pdGVtcy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDMycHggMTZweCAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBzYW1wbGVEYXRhOiBzdGF0ZS5zYW1wbGVEYXRhXG59KVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNlYXJjaFJlc3VsdHMpKTsiXX0= */\n/*@ sourceURL=pages/search-results.js */'
        })
      );
    }
  }]);

  return SearchResults;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    sampleData: state.sampleData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_5__lib_withRedux__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(SearchResults)));

/***/ }),

/***/ "./reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search__ = __webpack_require__("./reducers/search.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sampleData__ = __webpack_require__("./reducers/sampleData.js");




var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  search: __WEBPACK_IMPORTED_MODULE_1__search__["a" /* default */],
  sampleData: __WEBPACK_IMPORTED_MODULE_2__sampleData__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = (rootReducer);

/***/ }),

/***/ "./reducers/sampleData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  //Vehicles: from PRODUCT schema
  products: [//Field: nodes
  _defineProperty({
    "id": "3", //Int
    "modelName": "Kona", //String
    "modelYear": 2018, //Int
    "heroTitle": "Kona Hero Title", //String
    "heroBody": "Kona Hero Body", //String
    "highlightsTitle": "", //String
    "highlightsBody": "", //String
    "comparisonTitle": "", //String
    "compariosonBody": "", //String
    "comparisonDocumentId": "", //Int
    "coverImageId": "", //Int
    "contentByComparisonDocumentId": "", //Content
    "contentByCoverImageId": "" }, "coverImageId", "https://www.hyundaiusa.com/redesign-upgrade/images/navigation/vehicles/2018/2018-kona-ult-lime-twist.png"), {
    "id": "4",
    "modelName": "Kona",
    "modelYear": 2017,
    "heroTitle": "Hero Title",
    "heroBody": "Hero Body",
    "coverImageId": "https://www.hyundaiusa.com/redesign-upgrade/images/navigation/vehicles/2018/2018-santa-fe-sport.png"
  }, {
    "id": "5",
    "modelName": "Tucson",
    "modelYear": 2018,
    "heroTitle": "Hero Title",
    "heroBody": "Hero Body",
    "coverImageId": "https://www.hyundaiusa.com/redesign-upgrade/images/navigation/vehicles/2018/2018-tucson.png"
  }],
  //FAVORITED: from FAVORITED schema
  favorited: [{
    "id": "1",
    "title": "2018 Elantra Competetive Advantages by Competitor",
    "subtitle": "",
    "contentType": "Document",
    "url": "http://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Adobe-PDF-Document-icon.png",
    "updatedAt": "July 28, 2017"
  }, {
    "id": "2",
    "title": "2018 Kona Competetive Advantages by Competitor",
    "subtitle": "",
    "contentType": "Document",
    "url": "http://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Adobe-PDF-Document-icon.png",
    "updatedAt": "July 28, 2017"
  }],
  // Saved Searches: from EXECUTED SEARCH schema
  savedSearches: [{
    "id": "1", //Int
    "accountID": "1", //Int
    "query": "Elantra sales materials", //String
    "isSaved": true, //Boolean
    "isFavorited": false, //Boolean
    "createdAt": "July 28, 2017", //Datetime
    "accountByAccountId": "1" //Account
  }, {
    "id": "2",
    "accountID": "2",
    "query": "2017 elantra gt sport",
    "isSaved": false,
    "isFavorited": false,
    "createdAt": "July 28, 2017",
    "accountByAccountId": "2"
  }, {
    "id": "3",
    "accountID": "3",
    "query": "2018 Elantra GT",
    "isSaved": true,
    "isFavorited": false,
    "createdAt": "July 28, 2017",
    "accountByAccountId": "3"
  }],
  //Search Result Contents
  contents: [{
    "id": "1",
    "title": "2018 Elantra Competetive Advantages by Competitor",
    "subtitle": "",
    "contentType": "Document",
    "url": "http://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Adobe-PDF-Document-icon.png",
    "updatedAt": "July 28, 2017"
  }, {
    "id": "2",
    "title": "2018 Kona Competetive Advantages by Competitor",
    "subtitle": "",
    "contentType": "Document",
    "url": "http://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Adobe-PDF-Document-icon.png",
    "updatedAt": "July 28, 2017"
  }],
  savedAndFavs: [{
    "id": "1",
    "title": "2018 Elantra Competetive Advantages by Competitor",
    "url": "http://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Adobe-PDF-Document-icon.png"
  }, {
    "id": "2",
    "title": "2018 Kona Competetive Advantages by Competitor",
    "url": "http://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Adobe-PDF-Document-icon.png"
  }]
};

var sampleDataReducer = function sampleDataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    // case :
    //   return 
    default:
      break;
  }
  return state;
};

/* harmony default export */ __webpack_exports__["a"] = (sampleDataReducer);

/***/ }),

/***/ "./reducers/search.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_actionType__ = __webpack_require__("./actions/actionType.js");
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
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionType__["k" /* UPDATE_SEARCH_TERM */]:
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
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionType__["i" /* TOGGLE_SAVED_SEARCH */]:
      return Object.assign({}, state, {
        savedSearchToggle: action.boolean
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionType__["j" /* TOGGLE_SHOW_FAVORITES */]:
      return Object.assign({}, state, {
        favoritedSearchToggle: action.boolean
      });
    case __WEBPACK_IMPORTED_MODULE_0__actions_actionType__["h" /* TOGGLE_FILTER */]:
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

/* harmony default export */ __webpack_exports__["a"] = (searchReducer);

/***/ }),

/***/ "./store/store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__("redux-devtools-extension");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__("./actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers__ = __webpack_require__("./reducers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_async__ = __webpack_require__("async");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_async__);








var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_4__reducers__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a)));

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/search-results.js");


/***/ }),

/***/ "async":
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "shortid":
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=search-results.js.map