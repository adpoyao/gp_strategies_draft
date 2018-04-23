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
          // Customized tagline
          tagline = this.props.content;
          backgroundColor = "rgb(231 231 231)";
          fontColor = "rgb(64 102 149)";
          break;
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2484573613', [backgroundColor, fontColor, border]]]) + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'p',
          {
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2484573613', [backgroundColor, fontColor, border]]]),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          },
          tagline
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2484573613',
          css: '.container.__jsx-style-dynamic-selector{background:' + backgroundColor + ';color:' + fontColor + ';font:100 0.813em system-ui;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0 8px;height:30px;width:-webkit-max-content;width:-moz-max-content;width:max-content;border-radius:4px;border:' + border + ';}@media all and (min-width:376px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGFnU21hbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNvQixBQUdxRCx3Q0FDTCxtQ0FDUiwyQkFDZCwwRUFDTSw2RkFDSSxtR0FDVCxjQUNGLFlBQ00sbUVBQ0Esa0JBQ2tCLG9DQUN0QyIsImZpbGUiOiJjb21wb25lbnRzL1RhZ1NtYWxsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lZGRpZXlhby9EZXNrdG9wL2dwX2RyYWZ0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBUYWdTbWFsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcblxuICAgIGxldCB0YWdsaW5lLCBiYWNrZ3JvdW5kQ29sb3IsIGZvbnRDb2xvciwgYm9yZGVyPVwibm9uZVwiO1xuXG4gICAgc3dpdGNoKHRoaXMucHJvcHMuY29udGVudCl7XG4gICAgICBjYXNlIFwiaXNTYXZlZFwiOlxuICAgICAgICB0YWdsaW5lID0gXCJTYXZlZCBTZWFyY2hcIjtcbiAgICAgICAgaWYoIXRoaXMucHJvcHMuc2F2ZWRTZWFyY2gpe1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvciA9IFwicmdiKDY0IDEwMiAxNDkpXCI7XG4gICAgICAgICAgZm9udENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICBmb250Q29sb3IgPSBcInJnYig2NCAxMDIgMTQ5KVwiO1xuICAgICAgICAgIGJvcmRlciA9IFwiMXB4IHNvbGlkIHJnYigyMzEgMjMxIDIzMSlcIlxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImlzUG9wdWxhclwiOlxuICAgICAgICB0YWdsaW5lID0gXCJQb3B1bGFyIFNlYXJjaFwiO1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIGZvbnRDb2xvciA9IFwicmdiKDY0IDEwMiAxNDkpXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImlzUGFzdFwiOlxuICAgICAgICB0YWdsaW5lID0gXCJQYXN0IFNlYXJjaFwiO1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyMzEgMjMxIDIzMSlcIjtcbiAgICAgICAgZm9udENvbG9yID0gXCJyZ2IoNjQgMTAyIDE0OSlcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBDdXN0b21pemVkIHRhZ2xpbmVcbiAgICAgICAgdGFnbGluZSA9IHRoaXMucHJvcHMuY29udGVudDtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjMxIDIzMSAyMzEpXCI7XG4gICAgICAgIGZvbnRDb2xvciA9IFwicmdiKDY0IDEwMiAxNDkpXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPHA+e3RhZ2xpbmV9PC9wPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7YmFja2dyb3VuZENvbG9yfTtcbiAgICAgICAgICAgIGNvbG9yOiAke2ZvbnRDb2xvcn07XG4gICAgICAgICAgICBmb250OiAxMDAgMC44MTNlbSBzeXN0ZW0tdWk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBib3JkZXI6ICR7Ym9yZGVyfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgc2F2ZWRTZWFyY2g6IHN0YXRlLnNlYXJjaC5zYXZlZFNlYXJjaFRvZ2dsZSxcbn0pO1xuXG5UYWdTbWFsbC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFRhZ1NtYWxsKTsiXX0= */\n/*@ sourceURL=components/TagSmall.js */',
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
//# sourceMappingURL=4.2d3f4c45405fbcf31f4c.hot-update.js.map