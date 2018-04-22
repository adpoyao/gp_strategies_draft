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
          { key: content.id, className: 'jsx-3127786305' + ' ' + 'list-item',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
            { href: content.url, __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              {
                className: 'jsx-3127786305' + ' ' + 'list',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12
                }
              },
              content.title
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '3127786305',
            css: '.list-item.jsx-3127786305{padding:8px 0;line-height:28px;cursor:pointer;}.list.jsx-3127786305{-webkit-text-decoration:underline;text-decoration:underline;color:rgb(64 102 149);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdEJveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjc0IsQUFHNkIsQUFLWSxjQUpULGlCQUNGLGVBQ2pCLGNBR3dCLHNCQUN4QiIsImZpbGUiOiJjb21wb25lbnRzL0xpc3RCb3guanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIExpc3RCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBcbiAgcmVuZGVyKCkge1xuICAgIGxldCBsaXN0ID0gdGhpcy5wcm9wcy5jb2xsZWN0aW9uLm1hcChjb250ZW50ID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBrZXk9e2NvbnRlbnQuaWR9IGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2NvbnRlbnQudXJsfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpc3RcIj57Y29udGVudC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmxpc3QtaXRlbSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYig2NCAxMDIgMTQ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIFxuICAgICAgICA8aDM+e3RoaXMucHJvcHMudGl0bGV9PC9oMz5cblxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC13cmFwcGVyXCI+XG4gICAgICAgICAge2xpc3R9XG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggbGlnaHRncmV5IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTZweCAyNHB4IDE2cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0LXdyYXBwZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkxpc3RCb3gucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjb2xsZWN0aW9uOiBQcm9wVHlwZXMuYXJyYXlcbiAgLy8gWFg6IGNvbGxlY3Rpb24ncyBhcnJheSBkYXRhIHR5cGUgVEJELiBGb3Igbm93OlxuICAvLyAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8vICB0aXRsZTogUHJvcFR5cGVzLmFycmF5LFxuICAvLyAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0Qm94OyJdfQ== */\n/*@ sourceURL=components/ListBox.js */'
          })
        );
      });

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-3263443367' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h3',
          {
            className: 'jsx-3263443367',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
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
              lineNumber: 36
            }
          },
          list
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3263443367',
          css: '.container.jsx-3263443367{border:1px lightgrey solid;border-radius:4px;padding:16px 24px 16px;font-size:14px;}h3.jsx-3263443367{font-size:14px;font-weight:800;}.list-wrapper.jsx-3263443367{padding:0;list-style-type:none;}@media all and (min-width:376px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdEJveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q29CLEFBR3dDLEFBTVosQUFJTCxVQUNXLEtBSkwsWUFORSxJQU9wQixBQUlBLGNBVnlCLHVCQUNSLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvTGlzdEJveC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgTGlzdEJveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIFxuICByZW5kZXIoKSB7XG4gICAgbGV0IGxpc3QgPSB0aGlzLnByb3BzLmNvbGxlY3Rpb24ubWFwKGNvbnRlbnQgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGtleT17Y29udGVudC5pZH0gY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj17Y29udGVudC51cmx9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlzdFwiPntjb250ZW50LnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAubGlzdC1pdGVtIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDY0IDEwMiAxNDkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgXG4gICAgICAgIDxoMz57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxuXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXdyYXBwZXJcIj5cbiAgICAgICAgICB7bGlzdH1cbiAgICAgICAgPC91bD5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBsaWdodGdyZXkgc29saWQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDI0cHggMTZweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3Qtd3JhcHBlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTGlzdEJveC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNvbGxlY3Rpb246IFByb3BUeXBlcy5hcnJheVxuICAvLyBYWDogY29sbGVjdGlvbidzIGFycmF5IGRhdGEgdHlwZSBUQkQuIEZvciBub3c6XG4gIC8vICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLy8gIHRpdGxlOiBQcm9wVHlwZXMuYXJyYXksXG4gIC8vICB1cmw6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RCb3g7Il19 */\n/*@ sourceURL=components/ListBox.js */'
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
//# sourceMappingURL=5.c47decfb6a3efbb6b6cc.hot-update.js.map