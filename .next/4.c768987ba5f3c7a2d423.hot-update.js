webpackHotUpdate(4,{

/***/ "./components/TagSmall.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/TagSmall.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var TagSmall = function (_Component) {
  _inherits(TagSmall, _Component);

  function TagSmall() {
    _classCallCheck(this, TagSmall);

    return _possibleConstructorReturn(this, (TagSmall.__proto__ || Object.getPrototypeOf(TagSmall)).apply(this, arguments));
  }

  _createClass(TagSmall, [{
    key: 'render',
    value: function render() {

      var tagline = void 0,
          backgroundColor = void 0,
          fontColor = void 0,
          border = "none";

      switch (this.props.content) {
        case "isSaved":
          tagline = "Saved Search";
          if (!this.props.savedSearch) {
            backgroundColor = "rgb(64 102 149)";
            fontColor = "white";
          } else {
            backgroundColor = "white";
            fontColor = "rgb(64 102 149)";
            border = "1px solid rgb(231 231 231)";
          }
          break;
        case "isPopular":
          tagline = "Popular Search";
          backgroundColor = "white";
          fontColor = "rgb(64 102 149)";
          break;
        case "isPast":
          tagline = "Past Search";
          backgroundColor = "rgb(231 231 231)";
          fontColor = "rgb(64 102 149)";
          break;
        default:
          // Customized tagline content
          tagline = this.props.content;
          break;
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['3770603589', [backgroundColor, fontColor, border]]]) + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          {
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['3770603589', [backgroundColor, fontColor, border]]]),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          },
          tagline
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3770603589',
          css: '.container.__jsx-style-dynamic-selector{background:' + backgroundColor + ';color:' + fontColor + ';font:100 0.813em system-ui;padding:0 8px;height:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:4px;border:' + border + ';margin:0 16px 0 0;}@media all and (min-width:376px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGFnU21hbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNvQixBQUdxRCx3Q0FDTCxtQ0FDUiwyQkFDYixjQUNGLFlBQ0MsMEVBQ00sNkZBQ0Qsa0JBQ2tCLG9DQUNsQixrQkFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy9UYWdTbWFsbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgVGFnU21hbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgdGFnbGluZSwgYmFja2dyb3VuZENvbG9yLCBmb250Q29sb3IsIGJvcmRlcj1cIm5vbmVcIjtcblxuICAgIHN3aXRjaCh0aGlzLnByb3BzLmNvbnRlbnQpe1xuICAgICAgY2FzZSBcImlzU2F2ZWRcIjpcbiAgICAgICAgdGFnbGluZSA9IFwiU2F2ZWQgU2VhcmNoXCI7XG4gICAgICAgIGlmKCF0aGlzLnByb3BzLnNhdmVkU2VhcmNoKXtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBcInJnYig2NCAxMDIgMTQ5KVwiO1xuICAgICAgICAgIGZvbnRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgZm9udENvbG9yID0gXCJyZ2IoNjQgMTAyIDE0OSlcIjtcbiAgICAgICAgICBib3JkZXIgPSBcIjFweCBzb2xpZCByZ2IoMjMxIDIzMSAyMzEpXCJcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJpc1BvcHVsYXJcIjpcbiAgICAgICAgdGFnbGluZSA9IFwiUG9wdWxhciBTZWFyY2hcIjtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICBmb250Q29sb3IgPSBcInJnYig2NCAxMDIgMTQ5KVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJpc1Bhc3RcIjpcbiAgICAgICAgdGFnbGluZSA9IFwiUGFzdCBTZWFyY2hcIjtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjMxIDIzMSAyMzEpXCI7XG4gICAgICAgIGZvbnRDb2xvciA9IFwicmdiKDY0IDEwMiAxNDkpXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gQ3VzdG9taXplZCB0YWdsaW5lIGNvbnRlbnRcbiAgICAgICAgdGFnbGluZSA9IHRoaXMucHJvcHMuY29udGVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8cD57dGFnbGluZX08L3A+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtiYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgICAgY29sb3I6ICR7Zm9udENvbG9yfTtcbiAgICAgICAgICAgIGZvbnQ6IDEwMCAwLjgxM2VtIHN5c3RlbS11aTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBib3JkZXI6ICR7Ym9yZGVyfTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNnB4IDAgMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAvLyBtYXJnaW46IDAgMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIHNhdmVkU2VhcmNoOiBzdGF0ZS5zZWFyY2guc2F2ZWRTZWFyY2hUb2dnbGUsXG59KTtcblxuVGFnU21hbGwucHJvcFR5cGVzID0ge1xuICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShUYWdTbWFsbCk7Il19 */\n/*@ sourceURL=components/TagSmall.js */',
          dynamic: [backgroundColor, fontColor, border]
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return TagSmall;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    savedSearch: state.search.savedSearchToggle
  };
};

TagSmall.propTypes = {
  content: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps)(TagSmall);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TagSmall, 'TagSmall', '/Users/eddieyao/Desktop/gp_draft/components/TagSmall.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/eddieyao/Desktop/gp_draft/components/TagSmall.js');
  reactHotLoader.register(_default, 'default', '/Users/eddieyao/Desktop/gp_draft/components/TagSmall.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.c768987ba5f3c7a2d423.hot-update.js.map