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
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'li',
          { key: content.id, className: 'jsx-3640363394' + ' ' + 'list-item',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'span',
            {
              className: 'jsx-3640363394' + ' ' + 'list',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
              { href: content.url, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'a',
                {
                  className: 'jsx-3640363394',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                  }
                },
                content.title
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '3640363394',
            css: '.list-item.jsx-3640363394{padding:8px 0;line-height:28px;cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline;color:rgb(64 102 149);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdEJveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQnNCLEFBRzZCLGNBQ0csaUJBQ0YsZUFDVyw0REFDSixzQkFDeEIiLCJmaWxlIjoiY29tcG9uZW50cy9MaXN0Qm94LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lZGRpZXlhby9EZXNrdG9wL2dwX2RyYWZ0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBMaXN0Qm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbGlzdCA9IHRoaXMucHJvcHMuY29sbGVjdGlvbi5tYXAoY29udGVudCA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXtjb250ZW50LmlkfSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICBcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAgICA8TGluayBocmVmPXtjb250ZW50LnVybH0+XG4gICAgICAgICAgICAgIDxhPntjb250ZW50LnRpdGxlfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgXG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAubGlzdC1pdGVtIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDY0IDEwMiAxNDkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gLmxpc3Qge1xuICAgICAgICAgICAgLy8gICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIC8vICAgY29sb3I6IHJnYig2NCAxMDIgMTQ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIFxuICAgICAgICA8aDM+e3RoaXMucHJvcHMudGl0bGV9PC9oMz5cblxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC13cmFwcGVyXCI+XG4gICAgICAgICAge2xpc3R9XG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggbGlnaHRncmV5IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTZweCAyNHB4IDE2cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0LXdyYXBwZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkxpc3RCb3gucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjb2xsZWN0aW9uOiBQcm9wVHlwZXMuYXJyYXlcbiAgLy8gWFg6IGNvbGxlY3Rpb24ncyBhcnJheSBkYXRhIHR5cGUgVEJELiBGb3Igbm93OlxuICAvLyAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8vICB0aXRsZTogUHJvcFR5cGVzLmFycmF5LFxuICAvLyAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0Qm94OyJdfQ== */\n/*@ sourceURL=components/ListBox.js */'
          })
        );
      });

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-3263443367' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h3',
          {
            className: 'jsx-3263443367',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
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
              lineNumber: 42
            }
          },
          list
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3263443367',
          css: '.container.jsx-3263443367{border:1px lightgrey solid;border-radius:4px;padding:16px 24px 16px;font-size:14px;}h3.jsx-3263443367{font-size:14px;font-weight:800;}.list-wrapper.jsx-3263443367{padding:0;list-style-type:none;}@media all and (min-width:376px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdEJveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q29CLEFBR3dDLEFBTVosQUFJTCxVQUNXLEtBSkwsWUFORSxJQU9wQixBQUlBLGNBVnlCLHVCQUNSLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvTGlzdEJveC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgTGlzdEJveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIFxuICByZW5kZXIoKSB7XG4gICAgbGV0IGxpc3QgPSB0aGlzLnByb3BzLmNvbGxlY3Rpb24ubWFwKGNvbnRlbnQgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGtleT17Y29udGVudC5pZH0gY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17Y29udGVudC51cmx9PlxuICAgICAgICAgICAgICA8YT57Y29udGVudC50aXRsZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIFxuXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmxpc3QtaXRlbSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYig2NCAxMDIgMTQ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIC5saXN0IHtcbiAgICAgICAgICAgIC8vICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAvLyAgIGNvbG9yOiByZ2IoNjQgMTAyIDE0OSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICBcbiAgICAgICAgPGgzPnt0aGlzLnByb3BzLnRpdGxlfTwvaDM+XG5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtd3JhcHBlclwiPlxuICAgICAgICAgIHtsaXN0fVxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IGxpZ2h0Z3JleSBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMjRweCAxNnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlzdC13cmFwcGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDM3NnB4KSB7XG4gICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5MaXN0Qm94LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY29sbGVjdGlvbjogUHJvcFR5cGVzLmFycmF5XG4gIC8vIFhYOiBjb2xsZWN0aW9uJ3MgYXJyYXkgZGF0YSB0eXBlIFRCRC4gRm9yIG5vdzpcbiAgLy8gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvLyAgdGl0bGU6IFByb3BUeXBlcy5hcnJheSxcbiAgLy8gIHVybDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdEJveDsiXX0= */\n/*@ sourceURL=components/ListBox.js */'
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
//# sourceMappingURL=5.777e2b0859a536ebc8c6.hot-update.js.map