webpackHotUpdate(5,{

/***/ "./components/Checkbox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/Checkbox.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this.handleClick = function (e) {
      _this.setState({ checked: !_this.state.checked });
      if (_this.props.clickAction) {
        _this.props.clickAction(_this.props.clickAction(e.target.checked, _this.props.label));
      }
    };

    _this.state = {
      checked: false
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.checked) {
        this.setState({ checked: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var labelColor = void 0,
          checkMark = void 0;

      if (this.props.fontColor) {
        labelColor = this.props.fontColor;
      } else {
        labelColor = this.state.checked ? "black" : "rgb(69 69 69)";
      };

      if (this.state.checked) {
        checkMark = '\n        background-size: 100%;\n        background-image: url(\'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Check_mark_23x20_04.svg/1178px-Check_mark_23x20_04.svg.png\');\n        background-repeat: no-repeat;\n        background-position: center;';
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['3236848365', [labelColor, checkMark]]]) + ' ' + 'control__group container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'label',
          { htmlFor: this.props.id, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['3236848365', [labelColor, checkMark]]]) + ' ' + 'control control__checkbox',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
            type: 'checkbox',
            id: this.props.id,
            onClick: function onClick(e) {
              return _this2.handleClick(e);
            },
            checked: this.state.checked,
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['3236848365', [labelColor, checkMark]]]),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['3236848365', [labelColor, checkMark]]]) + ' ' + 'control__indicator',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }),
          this.props.label
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3236848365',
          css: '.container.__jsx-style-dynamic-selector{font:400 1em system-ui;color:rgb(64 101 149);}.control__group.__jsx-style-dynamic-selector{margin-bottom:32px;}.control__group.__jsx-style-dynamic-selector:last-child{margin-bottom:0;}.control.__jsx-style-dynamic-selector{display:block;font-size:1em;color:' + labelColor + ';}.control.__jsx-style-dynamic-selector:hover{cursor:pointer;}input.__jsx-style-dynamic-selector{position:absolute;visibility:hidden;}.control__indicator.__jsx-style-dynamic-selector{width:20px;height:20px;display:inline-block;margin-right:8px;position:relative;border:1px solid black;border-radius:2px;box-sizing:border-box;vertical-align:middle;' + checkMark + ';}.control__checkbox.__jsx-style-dynamic-selector{margin:8px 0;}@media all and (min-width:376px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hlY2tib3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURvQixBQUdvQyxBQUlKLEFBR0gsQUFHRixBQUtBLEFBR0csQUFJUCxBQVlHLFdBWEYsRUFZYixDQXhCZ0IsQ0FLaEIsQ0FSQSxFQVdvQixDQWRwQixJQUhELEFBc0J1QixLQVplLFFBUXJDLFFBS2tCLENBdkJsQixnQkF3Qm1CLEVBYm5CLGdCQWN3Qix1QkFDTCxrQkFDSyxzQkFDQSxzQkFFekIsNkJBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9DaGVja2JveC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuY2hlY2tlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2hlY2tlZDogdHJ1ZX0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe2NoZWNrZWQ6ICF0aGlzLnN0YXRlLmNoZWNrZWR9KVxuICAgIGlmICh0aGlzLnByb3BzLmNsaWNrQWN0aW9uKSB7XG4gICAgICB0aGlzLnByb3BzLmNsaWNrQWN0aW9uKHRoaXMucHJvcHMuY2xpY2tBY3Rpb24oZS50YXJnZXQuY2hlY2tlZCwgdGhpcy5wcm9wcy5sYWJlbCkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbGFiZWxDb2xvciwgY2hlY2tNYXJrO1xuICAgIFxuICAgIGlmKHRoaXMucHJvcHMuZm9udENvbG9yKXtcbiAgICAgIGxhYmVsQ29sb3IgPSB0aGlzLnByb3BzLmZvbnRDb2xvclxuICAgIH0gZWxzZSB7XG4gICAgICBsYWJlbENvbG9yID0gdGhpcy5zdGF0ZS5jaGVja2VkID8gXCJibGFja1wiIDogXCJyZ2IoNjkgNjkgNjkpXCI7XG4gICAgfTtcblxuICAgIGlmKHRoaXMuc3RhdGUuY2hlY2tlZCkge1xuICAgICAgY2hlY2tNYXJrID0gYFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi84Lzg2L0NoZWNrX21hcmtfMjN4MjBfMDQuc3ZnLzExNzhweC1DaGVja19tYXJrXzIzeDIwXzA0LnN2Zy5wbmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO2BcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbF9fZ3JvdXAgY29udGFpbmVyXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sIGNvbnRyb2xfX2NoZWNrYm94XCIgaHRtbEZvcj17dGhpcy5wcm9wcy5pZH0+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCIgXG4gICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5pZH0gXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSk9PnRoaXMuaGFuZGxlQ2xpY2soZSl9IFxuICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xfX2luZGljYXRvclwiPjwvZGl2PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmxhYmVsfVxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZvbnQ6IDQwMCAxZW0gc3lzdGVtLXVpO1xuICAgICAgICAgICAgY29sb3I6IHJnYig2NCAxMDEgMTQ5KSAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udHJvbF9fZ3JvdXAge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRyb2xfX2dyb3VwOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRyb2wge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIGNvbG9yOiAke2xhYmVsQ29sb3J9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udHJvbDpob3ZlcntcbiAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dHtcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udHJvbF9faW5kaWNhdG9ye1xuICAgICAgICAgICAgd2lkdGg6MjBweDtcbiAgICAgICAgICAgIGhlaWdodDoyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6OHB4O1xuICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoycHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICR7Y2hlY2tNYXJrfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udHJvbF9fY2hlY2tib3gge1xuICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG59XG5cbkNoZWNrYm94LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGF0YTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvLyBmb250Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8vIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICAvLyBjbGlja0FjdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94OyJdfQ== */\n/*@ sourceURL=components/Checkbox.js */',
          dynamic: [labelColor, checkMark]
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Checkbox;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Checkbox.propTypes = {
  id: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  data: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
  // fontColor: PropTypes.string,
  // checked: PropTypes.bool,
  // clickAction: PropTypes.func,
};

var _default = Checkbox;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Checkbox, 'Checkbox', '/Users/eddieyao/Desktop/gp_draft/components/Checkbox.js');
  reactHotLoader.register(_default, 'default', '/Users/eddieyao/Desktop/gp_draft/components/Checkbox.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Checkbox__["a" /* default */], _extends({ id: data.name }, data, { clickAction: _this2.props.clickAction, __source: {
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
          css: '.container.jsx-2893973039{background:white;width:100%;-webkit-box-shadow:0px 10px 24px 0px rgba(0,0,0,0.15);-moz-box-shadow:0px 10px 24px 0px rgba(0,0,0,0.15);box-shadow:0px 10px 24px 0px rgba(0,0,0,0.15);}.container.jsx-2893973039:after{content:\'\';position:absolute;top:0;right:40px;width:0;height:0;border:1em solid transparent;border-bottom-color:#ffffff;border-top:0;margin-left:-1em;margin-top:-1em;}.array-wrapper.jsx-2893973039{margin:0;list-style-type:none;padding:16px 20px;}@media all and (min-width:376px){.container.jsx-2893973039{width:-webkit-max-content;width:-moz-max-content;width:max-content;position:relative;right:40px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmlsdGVyRHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JvQixBQUc4QixBQVFOLEFBYUYsQUFNVyxTQUxDLEVBYkgsTUFSUCxXQUUyQyxDQU9oRCxDQWFZLEtBWlAsV0FDSCxFQVlWLE1BWFcsU0FDb0IsSUFnQlQsZUExQitCLEdBMkJ0QyxPQWhCZSxJQWtCNUIsd0JBakJhLGFBWGlDLEFBWTdCLGlCQUNELGdCQUNsQixhQWJBIiwiZmlsZSI6ImNvbXBvbmVudHMvRmlsdGVyRHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzaG9ydGlkIGZyb20gJ3Nob3J0aWQnO1xuXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi9DaGVja2JveCc7XG5cbmNsYXNzIEZpbHRlckRyb3Bkb3duIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYXJyYXkgPSB0aGlzLnByb3BzLm9wdGlvbnMubWFwKGRhdGEgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgIDxsaSBrZXk9e3Nob3J0aWQuZ2VuZXJhdGUoKX0+XG4gICAgICAgIDxDaGVja2JveCBpZD17ZGF0YS5uYW1lfSB7Li4uZGF0YX0gY2xpY2tBY3Rpb249e3RoaXMucHJvcHMuY2xpY2tBY3Rpb259Lz5cbiAgICAgIDwvbGk+KVxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJhcnJheS13cmFwcGVyXCI+XG4gICAgICAgICAge2FycmF5fVxuICAgICAgICA8L3VsPlxuICAgICAgICBcbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCAyNHB4IDBweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMTBweCAyNHB4IDBweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjRweCAwcHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lcjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBib3JkZXI6IDFlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXJyYXktd3JhcHBlciB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDM3NnB4KSB7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy9UZW1wb3JhcnkgU3R5bGluZ1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHJpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRmlsdGVyRHJvcGRvd24ucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGlja0FjdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAvLyBmb250Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsIC8vaWUgXCJyZ2IoNjQgMTAxIDE0OSlcIjtcbiAgLy8gY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wgLy8gZGVmYXVsdHMgYXMgZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckRyb3Bkb3duOyJdfQ== */\n/*@ sourceURL=components/FilterDropdown.js */'
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
//# sourceMappingURL=5.72dfc3acb1f7360849d3.hot-update.js.map