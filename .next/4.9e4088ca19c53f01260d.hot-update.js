webpackHotUpdate(4,{

/***/ "./node_modules/next/router.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/router/index.js")


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
      // console.log(this.props);
      // this.props.dispatch(updateSearchTerm(input));
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
          className: 'jsx-995776654',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css', className: 'jsx-995776654',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', className: 'jsx-995776654',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-995776654' + ' ' + 'container',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_SearchPrimary__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-995776654' + ' ' + 'primary-search-button',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_PrimaryButton__["a" /* default */], { handleOnClick: function handleOnClick() {
                _this2.handleSearchClick();
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '995776654',
          css: '.container.jsx-995776654{background:lightgrey;padding:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;height:100vw;}.primary-search-button.jsx-995776654{display:none;}@media all and (min-width:376px){.primary-search-button.jsx-995776654{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ29CLEFBR2tDLEFBUVIsQUFLZCxhQUpELFFBUmUsYUFDQSx3Q0FXYixrQ0FWcUIsMkVBQ00seUdBQ2QsYUFDZiIsImZpbGUiOiJwYWdlcy9kYXNoYm9hcmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnLi4vbGliL3dpdGhSZWR1eCc7XG5pbXBvcnQgU2VhcmNoUHJpbWFyeSBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaFByaW1hcnknO1xuaW1wb3J0IFByaW1hcnlCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9QcmltYXJ5QnV0dG9uJztcblxuaW1wb3J0IHsgdXBkYXRlU2VhcmNoVGVybSwgdG9nZ2xlU2F2ZWRTZWFyY2ggfSBmcm9tICcuLi9hY3Rpb25zL3NlYXJjaCc7XG5cbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgaGFuZGxlU2VhcmNoQ2xpY2soKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcyk7XG4gICAgLy8gdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVTZWFyY2hUZXJtKGlucHV0KSk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh0b2dnbGVTYXZlZFNlYXJjaChmYWxzZSkpO1xuICAgIFJvdXRlci5wdXNoKFwiL3NlYXJjaC1yZXN1bHRzXCIpO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9ub3JtYWxpemUvNy4wLjAvbm9ybWFsaXplLmNzc1wiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxTZWFyY2hQcmltYXJ5IC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaW1hcnktc2VhcmNoLWJ1dHRvblwiPlxuICAgICAgICAgICAgPFByaW1hcnlCdXR0b24gaGFuZGxlT25DbGljaz17KCk9Pnt0aGlzLmhhbmRsZVNlYXJjaENsaWNrKCl9fS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2dztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByaW1hcnktc2VhcmNoLWJ1dHRvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgLnByaW1hcnktc2VhcmNoLWJ1dHRvbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIHNlYXJjaFRlcm06IHN0YXRlLnNlYXJjaC5zZWFyY2hUZXJtLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRGFzaGJvYXJkKSk7Il19 */\n/*@ sourceURL=pages/dashboard.js */'
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
//# sourceMappingURL=4.9e4088ca19c53f01260d.hot-update.js.map