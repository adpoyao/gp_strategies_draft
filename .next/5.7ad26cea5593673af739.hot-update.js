webpackHotUpdate(5,{

/***/ "./components/ListBox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/ListBox.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
        console.log(content.url);
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'li',
          { key: content.id, className: 'jsx-3127786305' + ' ' + 'list-item',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
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
              'span',
              {
                className: 'jsx-3127786305' + ' ' + 'list',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                }
              },
              content.title
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '3127786305',
            css: '.list-item.jsx-3127786305{padding:8px 0;line-height:28px;cursor:pointer;}.list.jsx-3127786305{-webkit-text-decoration:underline;text-decoration:underline;color:rgb(64 102 149);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdEJveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlc0IsQUFHNkIsQUFLWSxjQUpULGlCQUNGLGVBQ2pCLGNBR3dCLHNCQUN4QiIsImZpbGUiOiJjb21wb25lbnRzL0xpc3RCb3guanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIExpc3RCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBcbiAgcmVuZGVyKCkge1xuICAgIGxldCBsaXN0ID0gdGhpcy5wcm9wcy5jb2xsZWN0aW9uLm1hcChjb250ZW50ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnQudXJsKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGtleT17Y29udGVudC5pZH0gY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj17Y29udGVudC51cmx9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdFwiPntjb250ZW50LnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAubGlzdC1pdGVtIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDY0IDEwMiAxNDkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgXG4gICAgICAgIDxoMz57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxuXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXdyYXBwZXJcIj5cbiAgICAgICAgICB7bGlzdH1cbiAgICAgICAgPC91bD5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBsaWdodGdyZXkgc29saWQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDI0cHggMTZweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3Qtd3JhcHBlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTGlzdEJveC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNvbGxlY3Rpb246IFByb3BUeXBlcy5hcnJheVxuICAvLyBYWDogY29sbGVjdGlvbidzIGFycmF5IGRhdGEgdHlwZSBUQkQuIEZvciBub3c6XG4gIC8vICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLy8gIHRpdGxlOiBQcm9wVHlwZXMuYXJyYXksXG4gIC8vICB1cmw6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RCb3g7Il19 */\n/*@ sourceURL=components/ListBox.js */'
          })
        );
      });

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-3263443367' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h3',
          {
            className: 'jsx-3263443367',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
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
              lineNumber: 37
            }
          },
          list
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3263443367',
          css: '.container.jsx-3263443367{border:1px lightgrey solid;border-radius:4px;padding:16px 24px 16px;font-size:14px;}h3.jsx-3263443367{font-size:14px;font-weight:800;}.list-wrapper.jsx-3263443367{padding:0;list-style-type:none;}@media all and (min-width:376px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdEJveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q29CLEFBR3dDLEFBTVosQUFJTCxVQUNXLEtBSkwsWUFORSxJQU9wQixBQUlBLGNBVnlCLHVCQUNSLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvTGlzdEJveC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgTGlzdEJveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIFxuICByZW5kZXIoKSB7XG4gICAgbGV0IGxpc3QgPSB0aGlzLnByb3BzLmNvbGxlY3Rpb24ubWFwKGNvbnRlbnQgPT4ge1xuICAgICAgY29uc29sZS5sb2coY29udGVudC51cmwpXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXtjb250ZW50LmlkfSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICA8TGluayBocmVmPXtjb250ZW50LnVybH0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaXN0XCI+e2NvbnRlbnQudGl0bGV9PC9zcGFuPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5saXN0LWl0ZW0ge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saXN0IHtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoNjQgMTAyIDE0OSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICBcbiAgICAgICAgPGgzPnt0aGlzLnByb3BzLnRpdGxlfTwvaDM+XG5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtd3JhcHBlclwiPlxuICAgICAgICAgIHtsaXN0fVxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IGxpZ2h0Z3JleSBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMjRweCAxNnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlzdC13cmFwcGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDM3NnB4KSB7XG4gICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5MaXN0Qm94LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY29sbGVjdGlvbjogUHJvcFR5cGVzLmFycmF5XG4gIC8vIFhYOiBjb2xsZWN0aW9uJ3MgYXJyYXkgZGF0YSB0eXBlIFRCRC4gRm9yIG5vdzpcbiAgLy8gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvLyAgdGl0bGU6IFByb3BUeXBlcy5hcnJheSxcbiAgLy8gIHVybDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdEJveDsiXX0= */\n/*@ sourceURL=components/ListBox.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
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

var _default = ListBox;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ListBox, 'ListBox', '/Users/eddieyao/Desktop/gp_draft/components/ListBox.js');
  reactHotLoader.register(_default, 'default', '/Users/eddieyao/Desktop/gp_draft/components/ListBox.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.7ad26cea5593673af739.hot-update.js.map