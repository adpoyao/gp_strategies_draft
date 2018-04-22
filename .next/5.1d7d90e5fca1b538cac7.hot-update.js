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
      };
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
      };
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
        // XX: Temporary use of check mark image ~
        checkMark = '\n        background-size: 100%;\n        background-image: url(\'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Check_mark_23x20_04.svg/1178px-Check_mark_23x20_04.svg.png\');\n        background-repeat: no-repeat;\n        background-position: center;';
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['3236848365', [labelColor, checkMark]]]) + ' ' + 'control__group container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'label',
          { htmlFor: this.props.id, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['3236848365', [labelColor, checkMark]]]) + ' ' + 'control control__checkbox',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
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
              lineNumber: 47
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['3236848365', [labelColor, checkMark]]]) + ' ' + 'control__indicator',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          }),
          this.props.label
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3236848365',
          css: '.container.__jsx-style-dynamic-selector{font:400 1em system-ui;color:rgb(64 101 149);}.control__group.__jsx-style-dynamic-selector{margin-bottom:32px;}.control__group.__jsx-style-dynamic-selector:last-child{margin-bottom:0;}.control.__jsx-style-dynamic-selector{display:block;font-size:1em;color:' + labelColor + ';}.control.__jsx-style-dynamic-selector:hover{cursor:pointer;}input.__jsx-style-dynamic-selector{position:absolute;visibility:hidden;}.control__indicator.__jsx-style-dynamic-selector{width:20px;height:20px;display:inline-block;margin-right:8px;position:relative;border:1px solid black;border-radius:2px;box-sizing:border-box;vertical-align:middle;' + checkMark + ';}.control__checkbox.__jsx-style-dynamic-selector{margin:8px 0;}@media all and (min-width:376px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hlY2tib3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RvQixBQUdvQyxBQUlKLEFBR0gsQUFHRixBQUtBLEFBR0csQUFJUCxBQVlHLFdBWEYsRUFZYixDQXhCZ0IsQ0FLaEIsQ0FSQSxFQVdvQixDQWRwQixJQUhELEFBc0J1QixLQVplLFFBUXJDLFFBS2tCLENBdkJsQixnQkF3Qm1CLEVBYm5CLGdCQWN3Qix1QkFDTCxrQkFDSyxzQkFDQSxzQkFFekIsNkJBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9DaGVja2JveC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICB9O1xuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5jaGVja2VkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtjaGVja2VkOiB0cnVlfSlcbiAgICB9O1xuICB9O1xuXG4gIGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtjaGVja2VkOiAhdGhpcy5zdGF0ZS5jaGVja2VkfSlcbiAgICBpZiAodGhpcy5wcm9wcy5jbGlja0FjdGlvbikge1xuICAgICAgdGhpcy5wcm9wcy5jbGlja0FjdGlvbih0aGlzLnByb3BzLmNsaWNrQWN0aW9uKGUudGFyZ2V0LmNoZWNrZWQsIHRoaXMucHJvcHMubGFiZWwpKTtcbiAgICB9O1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbGFiZWxDb2xvciwgY2hlY2tNYXJrO1xuICAgIFxuICAgIGlmKHRoaXMucHJvcHMuZm9udENvbG9yKXtcbiAgICAgIGxhYmVsQ29sb3IgPSB0aGlzLnByb3BzLmZvbnRDb2xvclxuICAgIH0gZWxzZSB7XG4gICAgICBsYWJlbENvbG9yID0gdGhpcy5zdGF0ZS5jaGVja2VkID8gXCJibGFja1wiIDogXCJyZ2IoNjkgNjkgNjkpXCI7XG4gICAgfTtcblxuICAgIGlmKHRoaXMuc3RhdGUuY2hlY2tlZCkge1xuICAgICAgLy8gWFg6IFRlbXBvcmFyeSB1c2Ugb2YgY2hlY2sgbWFyayBpbWFnZSB+XG4gICAgICBjaGVja01hcmsgPSBgXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzgvODYvQ2hlY2tfbWFya18yM3gyMF8wNC5zdmcvMTE3OHB4LUNoZWNrX21hcmtfMjN4MjBfMDQuc3ZnLnBuZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7YFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sX19ncm91cCBjb250YWluZXJcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wgY29udHJvbF9fY2hlY2tib3hcIiBodG1sRm9yPXt0aGlzLnByb3BzLmlkfT5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIiBcbiAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfSBcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKT0+dGhpcy5oYW5kbGVDbGljayhlKX0gXG4gICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbF9faW5kaWNhdG9yXCI+PC9kaXY+XG4gICAgICAgICAge3RoaXMucHJvcHMubGFiZWx9XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZm9udDogNDAwIDFlbSBzeXN0ZW0tdWk7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDY0IDEwMSAxNDkpICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250cm9sX19ncm91cCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udHJvbF9fZ3JvdXA6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udHJvbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgY29sb3I6ICR7bGFiZWxDb2xvcn07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250cm9sOmhvdmVye1xuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0e1xuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250cm9sX19pbmRpY2F0b3J7XG4gICAgICAgICAgICB3aWR0aDoyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OjIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDo4cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjJweDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgJHtjaGVja01hcmt9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250cm9sX19jaGVja2JveCB7XG4gICAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn1cblxuQ2hlY2tib3gucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGlja0FjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGZvbnRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7Il19 */\n/*@ sourceURL=components/Checkbox.js */',
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
  clickAction: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
  label: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  checked: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  fontColor: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
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

/***/ })

})
//# sourceMappingURL=5.1d7d90e5fca1b538cac7.hot-update.js.map