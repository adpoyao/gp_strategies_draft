webpackHotUpdate(5,{

/***/ "./components/Pagination.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/eddieyao/Desktop/gp_draft/components/Pagination.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Pagination;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = Pagination;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Pagination, "Pagination", "/Users/eddieyao/Desktop/gp_draft/components/Pagination.js");
  reactHotLoader.register(_default, "default", "/Users/eddieyao/Desktop/gp_draft/components/Pagination.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.59366596ff9dcdbf3d51.hot-update.js.map