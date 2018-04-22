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

      // XX: Hard coded data for pagination. Change to dynamic once connect to GraphQL ~
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
          css: ".container.jsx-1369333886{width:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:0 auto;}.numbers-per-page.jsx-1369333886{display:none;}@media all and (min-width:376px){.container.jsx-1369333886{width:100%;}.numbers-per-page.jsx-1369333886{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFnaW5hdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlcUIsQUFHMEIsQUFPRSxBQUlBLEFBR0UsV0FiRixBQVdiLEVBSkYsNkRBT0UsV0FicUIsMkVBQ1MsbUhBQ2hCLGNBQ2hCIiwiZmlsZSI6ImNvbXBvbmVudHMvUGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFBhZ2luYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG5cbiAgICAvLyBYWDogSGFyZCBjb2RlZCBkYXRhIGZvciBwYWdpbmF0aW9uLiBDaGFuZ2UgdG8gZHluYW1pYyBvbmNlIGNvbm5lY3QgdG8gR3JhcGhRTCB+XG4gICAgbGV0IHBhZ2VzID0gXCI8IDEgMiAzIDQgNSAuLi4gMTAgPlwiXG4gICAgbGV0IG51bWJlcnNQZXJQYWdlID0gXCJTaG93aW5nIDEwIG9mIDEyN1wiXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlc1wiPntwYWdlc308L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVycy1wZXItcGFnZVwiPntudW1iZXJzUGVyUGFnZX08L2Rpdj5cblxuICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubnVtYmVycy1wZXItcGFnZSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubnVtYmVycy1wZXItcGFnZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjsiXX0= */\n/*@ sourceURL=components/Pagination.js */"
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
//# sourceMappingURL=5.642b3fbdda14e12a0ddf.hot-update.js.map