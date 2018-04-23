webpackHotUpdate(5,{

/***/ "./components/Icon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/Icon.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {

      var icon = void 0;
      // If there is one default icon:
      if (this.props.defaultIcon) {
        icon = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1486058735', [this.props.maxWidth]]]) + ' ' + 'container',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { onClick: function onClick() {
                return console.log('Yay');
              }, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1486058735', [this.props.maxWidth]]]),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: this.props.defaultIcon, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1486058735', [this.props.maxWidth]]]) + ' ' + 'default-icon',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '1486058735',
            css: '.default-icon.__jsx-style-dynamic-selector{max-width:' + this.props.maxWidth + ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSWNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQnNCLEFBR3NELHVDQUN6QyIsImZpbGUiOiJjb21wb25lbnRzL0ljb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpe1xuXG4gICAgbGV0IGljb247XG4gICAgLy8gSWYgdGhlcmUgaXMgb25lIGRlZmF1bHQgaWNvbjpcbiAgICBpZih0aGlzLnByb3BzLmRlZmF1bHRJY29uKXtcbiAgICAgIGljb24gPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgICAgICB7LyogWFg6IFRlbXBvcmFyeSB1c2Ugb2YgcGxhY2Vob2xkZXIgc3RhciBpY29uICovfVxuICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PmNvbnNvbGUubG9nKCdZYXknKX0+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImRlZmF1bHQtaWNvblwiIHNyYz17dGhpcy5wcm9wcy5kZWZhdWx0SWNvbn0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5kZWZhdWx0LWljb24ge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6ICR7dGhpcy5wcm9wcy5tYXhXaWR0aH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgaWNvbiA9KFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgey8qIFhYOiBUZW1wb3JhcnkgdXNlIG9mIHBsYWNlaG9sZGVyIHN0YXIgaWNvbiAqL31cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT5jb25zb2xlLmxvZygnWWF5Jyl9PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcmVzc2VkXCIgc3JjPXt0aGlzLnByb3BzLmNsaWNrZWRJY29uVXJsfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+Y29uc29sZS5sb2coJ1lheScpfT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibm90LXByZXNzZWRcIiBzcmM9e3RoaXMucHJvcHMubm90Q2xpY2tlZEljb25Vcmx9Lz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5wcmVzc2VkIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnByb3BzLmNsaWNrZWQgPyBcImZsZXhcIiA6IFwibm9uZVwifTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAke3RoaXMucHJvcHMubWF4V2lkdGh9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5vdC1wcmVzc2VkIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnByb3BzLmNsaWNrZWQgPyBcIm5vbmVcIiA6IFwiZmxleFwifTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAke3RoaXMucHJvcHMubWF4V2lkdGh9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfTtcblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIHtpY29ufVxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgXG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xpY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG1heFdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGlja0FjdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gIGRlZmF1bHRJY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGlja2VkSWNvblVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbm90Q2xpY2tlZEljb25Vcmw6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uOyJdfQ== */\n/*@ sourceURL=components/Icon.js */',
            dynamic: [this.props.maxWidth]
          })
        );
      } else {
        icon = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1662426632', [this.props.clicked ? "flex" : "none", this.props.maxWidth, this.props.clicked ? "none" : "flex", this.props.maxWidth]]]) + ' ' + 'container',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { onClick: function onClick() {
                return console.log('Yay');
              }, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1662426632', [this.props.clicked ? "flex" : "none", this.props.maxWidth, this.props.clicked ? "none" : "flex", this.props.maxWidth]]]),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: this.props.clickedIconUrl, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1662426632', [this.props.clicked ? "flex" : "none", this.props.maxWidth, this.props.clicked ? "none" : "flex", this.props.maxWidth]]]) + ' ' + 'pressed',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { onClick: function onClick() {
                return console.log('Yay');
              }, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1662426632', [this.props.clicked ? "flex" : "none", this.props.maxWidth, this.props.clicked ? "none" : "flex", this.props.maxWidth]]]),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: this.props.notClickedIconUrl, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1662426632', [this.props.clicked ? "flex" : "none", this.props.maxWidth, this.props.clicked ? "none" : "flex", this.props.maxWidth]]]) + ' ' + 'not-pressed',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '1662426632',
            css: '.pressed.__jsx-style-dynamic-selector{display:' + (this.props.clicked ? "flex" : "none") + ';max-width:' + this.props.maxWidth + ';}.not-pressed.__jsx-style-dynamic-selector{display:' + (this.props.clicked ? "none" : "flex") + ';max-width:' + this.props.maxWidth + ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSWNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ3NCLEFBR29ELEFBSUEscUNBSEUsQUFJQSx1Q0FIekMsQUFJQSIsImZpbGUiOiJjb21wb25lbnRzL0ljb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpe1xuXG4gICAgbGV0IGljb247XG4gICAgLy8gSWYgdGhlcmUgaXMgb25lIGRlZmF1bHQgaWNvbjpcbiAgICBpZih0aGlzLnByb3BzLmRlZmF1bHRJY29uKXtcbiAgICAgIGljb24gPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgICAgICB7LyogWFg6IFRlbXBvcmFyeSB1c2Ugb2YgcGxhY2Vob2xkZXIgc3RhciBpY29uICovfVxuICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PmNvbnNvbGUubG9nKCdZYXknKX0+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImRlZmF1bHQtaWNvblwiIHNyYz17dGhpcy5wcm9wcy5kZWZhdWx0SWNvbn0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5kZWZhdWx0LWljb24ge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6ICR7dGhpcy5wcm9wcy5tYXhXaWR0aH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgaWNvbiA9KFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgey8qIFhYOiBUZW1wb3JhcnkgdXNlIG9mIHBsYWNlaG9sZGVyIHN0YXIgaWNvbiAqL31cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT5jb25zb2xlLmxvZygnWWF5Jyl9PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcmVzc2VkXCIgc3JjPXt0aGlzLnByb3BzLmNsaWNrZWRJY29uVXJsfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+Y29uc29sZS5sb2coJ1lheScpfT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibm90LXByZXNzZWRcIiBzcmM9e3RoaXMucHJvcHMubm90Q2xpY2tlZEljb25Vcmx9Lz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5wcmVzc2VkIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnByb3BzLmNsaWNrZWQgPyBcImZsZXhcIiA6IFwibm9uZVwifTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAke3RoaXMucHJvcHMubWF4V2lkdGh9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5vdC1wcmVzc2VkIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnByb3BzLmNsaWNrZWQgPyBcIm5vbmVcIiA6IFwiZmxleFwifTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAke3RoaXMucHJvcHMubWF4V2lkdGh9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfTtcblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIHtpY29ufVxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgXG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xpY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG1heFdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGlja0FjdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gIGRlZmF1bHRJY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGlja2VkSWNvblVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbm90Q2xpY2tlZEljb25Vcmw6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uOyJdfQ== */\n/*@ sourceURL=components/Icon.js */',
            dynamic: [this.props.clicked ? "flex" : "none", this.props.maxWidth, this.props.clicked ? "none" : "flex", this.props.maxWidth]
          })
        );
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-3033268396' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        },
        icon,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3033268396',
          css: '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSWNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RG9CIiwiZmlsZSI6ImNvbXBvbmVudHMvSWNvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBJY29uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCl7XG5cbiAgICBsZXQgaWNvbjtcbiAgICAvLyBJZiB0aGVyZSBpcyBvbmUgZGVmYXVsdCBpY29uOlxuICAgIGlmKHRoaXMucHJvcHMuZGVmYXVsdEljb24pe1xuICAgICAgaWNvbiA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblxuICAgICAgICAgIHsvKiBYWDogVGVtcG9yYXJ5IHVzZSBvZiBwbGFjZWhvbGRlciBzdGFyIGljb24gKi99XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+Y29uc29sZS5sb2coJ1lheScpfT5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZGVmYXVsdC1pY29uXCIgc3JjPXt0aGlzLnByb3BzLmRlZmF1bHRJY29ufS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmRlZmF1bHQtaWNvbiB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogJHt0aGlzLnByb3BzLm1heFdpZHRofTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBpY29uID0oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgICAgICB7LyogWFg6IFRlbXBvcmFyeSB1c2Ugb2YgcGxhY2Vob2xkZXIgc3RhciBpY29uICovfVxuICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PmNvbnNvbGUubG9nKCdZYXknKX0+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByZXNzZWRcIiBzcmM9e3RoaXMucHJvcHMuY2xpY2tlZEljb25Vcmx9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT5jb25zb2xlLmxvZygnWWF5Jyl9PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJub3QtcHJlc3NlZFwiIHNyYz17dGhpcy5wcm9wcy5ub3RDbGlja2VkSWNvblVybH0vPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnByZXNzZWQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMucHJvcHMuY2xpY2tlZCA/IFwiZmxleFwiIDogXCJub25lXCJ9O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6ICR7dGhpcy5wcm9wcy5tYXhXaWR0aH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubm90LXByZXNzZWQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMucHJvcHMuY2xpY2tlZCA/IFwibm9uZVwiIDogXCJmbGV4XCJ9O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6ICR7dGhpcy5wcm9wcy5tYXhXaWR0aH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9O1xuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAge2ljb259XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBcbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGlja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgbWF4V2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsaWNrQWN0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgZGVmYXVsdEljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsaWNrZWRJY29uVXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBub3RDbGlja2VkSWNvblVybDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247Il19 */\n/*@ sourceURL=components/Icon.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Icon;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Icon.propTypes = {
  id: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  clicked: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  maxWidth: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  clickAction: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  defaultIcon: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  clickedIconUrl: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  notClickedIconUrl: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};

var _default = Icon;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Icon, 'Icon', '/Users/eddieyao/Desktop/gp_draft/components/Icon.js');
  reactHotLoader.register(_default, 'default', '/Users/eddieyao/Desktop/gp_draft/components/Icon.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.313c035db9f9733aad5f.hot-update.js.map