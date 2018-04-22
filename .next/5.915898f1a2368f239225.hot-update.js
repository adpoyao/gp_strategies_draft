webpackHotUpdate(5,{

/***/ "./components/BreadCrumbs.js":
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
var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/BreadCrumbs.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
              css: '.path-section.jsx-90375880{font:400 0.875em system-ui;}.route.jsx-90375880{-webkit-text-decoration:underline;text-decoration:underline;color:rgb(64 102 149);cursor:pointer;}span.jsx-90375880{padding:4px;color:#939393;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnJlYWRDcnVtYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0J3QixBQUc0QyxBQUdELEFBS2QsWUFFZixjQUFDLENBVEEsaUNBR3dCLHNCQUNQLGVBQ2pCIiwiZmlsZSI6ImNvbXBvbmVudHMvQnJlYWRDcnVtYnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIEJyZWFkQ3J1bWJzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IGRpc3BsYXkgPSB0aGlzLnByb3BzLnBhdGhzLm1hcCgocGF0aCwgaW5kZXgpID0+IHtcbiAgICAgIGlmKHBhdGgucm91dGUpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicGF0aC1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cGF0aC5yb3V0ZX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm91dGVcIj57cGF0aC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvTGluaz4gIFxuICAgICAgICAgICAgICA8c3Bhbj57cGF0aC5hcnJvd308L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLnBhdGgtc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgZm9udDogNDAwIDAuODc1ZW0gc3lzdGVtLXVpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5yb3V0ZSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYig2NCAxMDIgMTQ5KTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTM5MzkzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJwYXRoLXNlY3Rpb24gZW5kXCI+XG4gICAgICAgICAgICA8cD57cGF0aC50aXRsZX08L3A+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLnBhdGgtc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgZm9udDogNDAwIDAuODc1ZW0gc3lzdGVtLXVpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5lbmQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDU0NTQ1O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICB7ZGlzcGxheX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1OXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQnJlYWRDcnVtYnMucHJvcFR5cGVzID0ge1xuICBwYXRoOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcm91dGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYXJyb3c6IFByb3BUeXBlcy5zdHJpbmcsIC8vIChcIj5cIiwgXCI8XCIsIG9yIHVuZGVmaW5lZClcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJlYWRDcnVtYnM7Il19 */\n/*@ sourceURL=components/BreadCrumbs.js */'
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
              css: '.path-section.jsx-2194895305{font:400 0.875em system-ui;}.end.jsx-2194895305{color:#454545;font-weight:500;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnJlYWRDcnVtYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUN3QixBQUc0QyxBQUdiLGNBQ0UsYUFIbEIsR0FJQSIsImZpbGUiOiJjb21wb25lbnRzL0JyZWFkQ3J1bWJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lZGRpZXlhby9EZXNrdG9wL2dwX2RyYWZ0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBCcmVhZENydW1icyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBkaXNwbGF5ID0gdGhpcy5wcm9wcy5wYXRocy5tYXAoKHBhdGgsIGluZGV4KSA9PiB7XG4gICAgICBpZihwYXRoLnJvdXRlKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInBhdGgtc2VjdGlvblwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3BhdGgucm91dGV9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdXRlXCI+e3BhdGgudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L0xpbms+ICBcbiAgICAgICAgICAgICAgPHNwYW4+e3BhdGguYXJyb3d9PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5wYXRoLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQ6IDQwMCAwLjg3NWVtIHN5c3RlbS11aTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucm91dGUge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoNjQgMTAyIDE0OSk7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzkzOTM5M1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj4pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicGF0aC1zZWN0aW9uIGVuZFwiPlxuICAgICAgICAgICAgPHA+e3BhdGgudGl0bGV9PC9wPlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5wYXRoLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQ6IDQwMCAwLjg3NWVtIHN5c3RlbS11aTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZW5kIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ1NDU0NTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAge2Rpc3BsYXl9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDM3NnB4KSB7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTlweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkJyZWFkQ3J1bWJzLnByb3BUeXBlcyA9IHtcbiAgcGF0aDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHJvdXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFycm93OiBQcm9wVHlwZXMuc3RyaW5nLCAvLyAoXCI+XCIsIFwiPFwiLCBvciB1bmRlZmluZWQpXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJyZWFkQ3J1bWJzOyJdfQ== */\n/*@ sourceURL=components/BreadCrumbs.js */'
            })
          );
        }
      });

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-1931657223' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        },
        display,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1931657223',
          css: '.container.jsx-1931657223{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media all and (min-width:376px){.container.jsx-1931657223{margin-top:59px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnJlYWRDcnVtYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURvQixBQUcwQixBQUlLLGdCQUNsQiwwREFKRiIsImZpbGUiOiJjb21wb25lbnRzL0JyZWFkQ3J1bWJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lZGRpZXlhby9EZXNrdG9wL2dwX2RyYWZ0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBCcmVhZENydW1icyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBkaXNwbGF5ID0gdGhpcy5wcm9wcy5wYXRocy5tYXAoKHBhdGgsIGluZGV4KSA9PiB7XG4gICAgICBpZihwYXRoLnJvdXRlKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInBhdGgtc2VjdGlvblwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3BhdGgucm91dGV9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdXRlXCI+e3BhdGgudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L0xpbms+ICBcbiAgICAgICAgICAgICAgPHNwYW4+e3BhdGguYXJyb3d9PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5wYXRoLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQ6IDQwMCAwLjg3NWVtIHN5c3RlbS11aTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucm91dGUge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoNjQgMTAyIDE0OSk7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzkzOTM5M1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj4pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicGF0aC1zZWN0aW9uIGVuZFwiPlxuICAgICAgICAgICAgPHA+e3BhdGgudGl0bGV9PC9wPlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5wYXRoLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQ6IDQwMCAwLjg3NWVtIHN5c3RlbS11aTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZW5kIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ1NDU0NTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAge2Rpc3BsYXl9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDM3NnB4KSB7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTlweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkJyZWFkQ3J1bWJzLnByb3BUeXBlcyA9IHtcbiAgcGF0aDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHJvdXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFycm93OiBQcm9wVHlwZXMuc3RyaW5nLCAvLyAoXCI+XCIsIFwiPFwiLCBvciB1bmRlZmluZWQpXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJyZWFkQ3J1bWJzOyJdfQ== */\n/*@ sourceURL=components/BreadCrumbs.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
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

var _default = BreadCrumbs;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BreadCrumbs, 'BreadCrumbs', '/Users/eddieyao/Desktop/gp_draft/components/BreadCrumbs.js');
  reactHotLoader.register(_default, 'default', '/Users/eddieyao/Desktop/gp_draft/components/BreadCrumbs.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.915898f1a2368f239225.hot-update.js.map