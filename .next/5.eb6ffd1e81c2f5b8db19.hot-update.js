webpackHotUpdate(5,{

/***/ "./components/FilterDropdown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shortid__ = __webpack_require__("./node_modules/shortid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_shortid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_shortid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Checkbox__ = __webpack_require__("./components/Checkbox.js");
var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/FilterDropdown.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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

      var array = this.props.options.map(function (label) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'li',
          { key: __WEBPACK_IMPORTED_MODULE_3_shortid___default.a.generate(), __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Checkbox__["a" /* default */], { id: label, label: label, clickAction: _this2.props.clickAction, __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          })
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
          css: '.container.jsx-2893973039{background:white;width:100%;-webkit-box-shadow:0px 10px 24px 0px rgba(0,0,0,0.15);-moz-box-shadow:0px 10px 24px 0px rgba(0,0,0,0.15);box-shadow:0px 10px 24px 0px rgba(0,0,0,0.15);}.container.jsx-2893973039:after{content:\'\';position:absolute;top:0;right:40px;width:0;height:0;border:1em solid transparent;border-bottom-color:#ffffff;border-top:0;margin-left:-1em;margin-top:-1em;}.array-wrapper.jsx-2893973039{margin:0;list-style-type:none;padding:16px 20px;}@media all and (min-width:376px){.container.jsx-2893973039{width:-webkit-max-content;width:-moz-max-content;width:max-content;position:relative;right:40px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmlsdGVyRHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JvQixBQUc4QixBQVFOLEFBYUYsQUFNVyxTQUxDLEVBYkgsTUFSUCxXQUUyQyxDQU9oRCxDQWFZLEtBWlAsV0FDSCxFQVlWLE1BWFcsU0FDb0IsSUFnQlQsZUExQitCLEdBMkJ0QyxPQWhCZSxJQWtCNUIsd0JBakJhLGFBWGlDLEFBWTdCLGlCQUNELGdCQUNsQixhQWJBIiwiZmlsZSI6ImNvbXBvbmVudHMvRmlsdGVyRHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzaG9ydGlkIGZyb20gJ3Nob3J0aWQnO1xuXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi9DaGVja2JveCc7XG5cbmNsYXNzIEZpbHRlckRyb3Bkb3duIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYXJyYXkgPSB0aGlzLnByb3BzLm9wdGlvbnMubWFwKGxhYmVsID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICA8bGkga2V5PXtzaG9ydGlkLmdlbmVyYXRlKCl9PlxuICAgICAgICA8Q2hlY2tib3ggaWQ9e2xhYmVsfSBsYWJlbD17bGFiZWx9IGNsaWNrQWN0aW9uPXt0aGlzLnByb3BzLmNsaWNrQWN0aW9ufS8+XG4gICAgICA8L2xpPilcbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYXJyYXktd3JhcHBlclwiPlxuICAgICAgICAgIHthcnJheX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggMjRweCAwcHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDEwcHggMjRweCAwcHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDI0cHggMHB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWluZXI6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICByaWdodDogNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAxZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMWVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTFlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFycmF5LXdyYXBwZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vVGVtcG9yYXJ5IFN0eWxpbmdcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICByaWdodDogNDBweDtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkZpbHRlckRyb3Bkb3duLnByb3BUeXBlcyA9IHtcbiAgLy8gaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIGNsaWNrQWN0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgZm9udENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLCAvL2llIFwicmdiKDY0IDEwMSAxNDkpXCI7XG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sIC8vIGRlZmF1bHRzIGFzIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJEcm9wZG93bjsiXX0= */\n/*@ sourceURL=components/FilterDropdown.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return FilterDropdown;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

FilterDropdown.propTypes = {
  // id: PropTypes.string.isRequired,
  options: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array.isRequired,
  clickAction: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  fontColor: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, //ie "rgb(64 101 149)";
  checked: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool // defaults as false;
};

var _default = FilterDropdown;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FilterDropdown, 'FilterDropdown', '/Users/eddieyao/Desktop/gp_draft/components/FilterDropdown.js');
  reactHotLoader.register(_default, 'default', '/Users/eddieyao/Desktop/gp_draft/components/FilterDropdown.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.eb6ffd1e81c2f5b8db19.hot-update.js.map