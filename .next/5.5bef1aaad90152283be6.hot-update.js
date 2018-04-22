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
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

      var array = this.props.options.map(function (data) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'li',
          { key: __WEBPACK_IMPORTED_MODULE_3_shortid___default.a.generate(), __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Checkbox__["a" /* default */], _extends({}, data, { clickAction: _this2.props.clickAction, __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          }))
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
          css: '.container.jsx-2893973039{background:white;width:100%;-webkit-box-shadow:0px 10px 24px 0px rgba(0,0,0,0.15);-moz-box-shadow:0px 10px 24px 0px rgba(0,0,0,0.15);box-shadow:0px 10px 24px 0px rgba(0,0,0,0.15);}.container.jsx-2893973039:after{content:\'\';position:absolute;top:0;right:40px;width:0;height:0;border:1em solid transparent;border-bottom-color:#ffffff;border-top:0;margin-left:-1em;margin-top:-1em;}.array-wrapper.jsx-2893973039{margin:0;list-style-type:none;padding:16px 20px;}@media all and (min-width:376px){.container.jsx-2893973039{width:-webkit-max-content;width:-moz-max-content;width:max-content;position:relative;right:40px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmlsdGVyRHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JvQixBQUc4QixBQVFOLEFBYUYsQUFNVyxTQUxDLEVBYkgsTUFSUCxXQUUyQyxDQU9oRCxDQWFZLEtBWlAsV0FDSCxFQVlWLE1BWFcsU0FDb0IsSUFnQlQsZUExQitCLEdBMkJ0QyxPQWhCZSxJQWtCNUIsd0JBakJhLGFBWGlDLEFBWTdCLGlCQUNELGdCQUNsQixhQWJBIiwiZmlsZSI6ImNvbXBvbmVudHMvRmlsdGVyRHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzaG9ydGlkIGZyb20gJ3Nob3J0aWQnO1xuXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi9DaGVja2JveCc7XG5cbmNsYXNzIEZpbHRlckRyb3Bkb3duIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYXJyYXkgPSB0aGlzLnByb3BzLm9wdGlvbnMubWFwKGRhdGEgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgIDxsaSBrZXk9e3Nob3J0aWQuZ2VuZXJhdGUoKX0+XG4gICAgICAgIDxDaGVja2JveCB7Li4uZGF0YX0gY2xpY2tBY3Rpb249e3RoaXMucHJvcHMuY2xpY2tBY3Rpb259Lz5cbiAgICAgIDwvbGk+KVxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJhcnJheS13cmFwcGVyXCI+XG4gICAgICAgICAge2FycmF5fVxuICAgICAgICA8L3VsPlxuICAgICAgICBcbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCAyNHB4IDBweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMTBweCAyNHB4IDBweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjRweCAwcHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lcjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBib3JkZXI6IDFlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXJyYXktd3JhcHBlciB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDM3NnB4KSB7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy9UZW1wb3JhcnkgU3R5bGluZ1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHJpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRmlsdGVyRHJvcGRvd24ucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGlja0FjdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAvLyBmb250Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsIC8vaWUgXCJyZ2IoNjQgMTAxIDE0OSlcIjtcbiAgLy8gY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wgLy8gZGVmYXVsdHMgYXMgZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckRyb3Bkb3duOyJdfQ== */\n/*@ sourceURL=components/FilterDropdown.js */'
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
  id: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  clickAction: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  options: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array.isRequired
  // fontColor: PropTypes.string, //ie "rgb(64 101 149)";
  // checked: PropTypes.bool // defaults as false;
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
//# sourceMappingURL=5.5bef1aaad90152283be6.hot-update.js.map