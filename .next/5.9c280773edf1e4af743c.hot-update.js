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
            css: '.default-icon.__jsx-style-dynamic-selector{max-width:' + this.props.maxWidth + ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSWNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQnNCLEFBR3NELHVDQUN6QyIsImZpbGUiOiJjb21wb25lbnRzL0ljb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpe1xuXG4gICAgbGV0IGljb247XG4gICAgLy8gSWYgdGhlcmUgaXMgb25lIGRlZmF1bHQgaWNvbjpcbiAgICBpZih0aGlzLnByb3BzLmRlZmF1bHRJY29uKXtcbiAgICAgIGljb24gPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgICAgICB7LyogWFg6IFRlbXBvcmFyeSB1c2Ugb2YgcGxhY2Vob2xkZXIgc3RhciBpY29uICovfVxuICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PmNvbnNvbGUubG9nKCdZYXknKX0+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImRlZmF1bHQtaWNvblwiIHNyYz17dGhpcy5wcm9wcy5kZWZhdWx0SWNvbn0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5kZWZhdWx0LWljb24ge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6ICR7dGhpcy5wcm9wcy5tYXhXaWR0aH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblxuICAgICAgICB7LyogWFg6IFRlbXBvcmFyeSB1c2Ugb2YgcGxhY2Vob2xkZXIgc3RhciBpY29uICovfVxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT5jb25zb2xlLmxvZygnWWF5Jyl9PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJlc3NlZFwiIHNyYz17dGhpcy5wcm9wcy5jbGlja2VkSWNvblVybH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgb25DbGljaz17KCk9PmNvbnNvbGUubG9nKCdZYXknKX0+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJub3QtcHJlc3NlZFwiIHNyYz17dGhpcy5wcm9wcy5ub3RDbGlja2VkSWNvblVybH0vPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnByZXNzZWQge1xuICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnByb3BzLmNsaWNrZWQgPyBcImZsZXhcIiA6IFwibm9uZVwifTtcbiAgICAgICAgICAgIG1heC13aWR0aDogJHt0aGlzLnByb3BzLm1heFdpZHRofTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vdC1wcmVzc2VkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5wcm9wcy5jbGlja2VkID8gXCJub25lXCIgOiBcImZsZXhcIn07XG4gICAgICAgICAgICBtYXgtd2lkdGg6ICR7dGhpcy5wcm9wcy5tYXhXaWR0aH07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgfTtcblxuICAgIHJldHVybihcbiAgICAgIHtpY29ufVxuICAgICk7XG4gIH1cbn1cblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGlja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgbWF4V2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsaWNrQWN0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgZGVmYXVsdEljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsaWNrZWRJY29uVXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBub3RDbGlja2VkSWNvblVybDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247Il19 */\n/*@ sourceURL=components/Icon.js */',
            dynamic: [this.props.maxWidth]
          })
        );
      } else {
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2902092457', [this.props.clicked ? "flex" : "none", this.props.maxWidth, this.props.clicked ? "none" : "flex", this.props.maxWidth]]]) + ' ' + 'container',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { onClick: function onClick() {
                return console.log('Yay');
              }, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2902092457', [this.props.clicked ? "flex" : "none", this.props.maxWidth, this.props.clicked ? "none" : "flex", this.props.maxWidth]]]),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: this.props.clickedIconUrl, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2902092457', [this.props.clicked ? "flex" : "none", this.props.maxWidth, this.props.clicked ? "none" : "flex", this.props.maxWidth]]]) + ' ' + 'pressed',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { onClick: function onClick() {
                return console.log('Yay');
              }, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2902092457', [this.props.clicked ? "flex" : "none", this.props.maxWidth, this.props.clicked ? "none" : "flex", this.props.maxWidth]]]),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: this.props.notClickedIconUrl, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2902092457', [this.props.clicked ? "flex" : "none", this.props.maxWidth, this.props.clicked ? "none" : "flex", this.props.maxWidth]]]) + ' ' + 'not-pressed',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '2902092457',
            css: '.pressed.__jsx-style-dynamic-selector{display:' + (this.props.clicked ? "flex" : "none") + ';max-width:' + this.props.maxWidth + ';}.not-pressed.__jsx-style-dynamic-selector{display:' + (this.props.clicked ? "none" : "flex") + ';max-width:' + this.props.maxWidth + ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSWNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ29CLEFBR2tELEFBSUEscUNBSEUsQUFJQSx1Q0FIekMsQUFJQSIsImZpbGUiOiJjb21wb25lbnRzL0ljb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpe1xuXG4gICAgbGV0IGljb247XG4gICAgLy8gSWYgdGhlcmUgaXMgb25lIGRlZmF1bHQgaWNvbjpcbiAgICBpZih0aGlzLnByb3BzLmRlZmF1bHRJY29uKXtcbiAgICAgIGljb24gPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgICAgICB7LyogWFg6IFRlbXBvcmFyeSB1c2Ugb2YgcGxhY2Vob2xkZXIgc3RhciBpY29uICovfVxuICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PmNvbnNvbGUubG9nKCdZYXknKX0+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImRlZmF1bHQtaWNvblwiIHNyYz17dGhpcy5wcm9wcy5kZWZhdWx0SWNvbn0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5kZWZhdWx0LWljb24ge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6ICR7dGhpcy5wcm9wcy5tYXhXaWR0aH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblxuICAgICAgICB7LyogWFg6IFRlbXBvcmFyeSB1c2Ugb2YgcGxhY2Vob2xkZXIgc3RhciBpY29uICovfVxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT5jb25zb2xlLmxvZygnWWF5Jyl9PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJlc3NlZFwiIHNyYz17dGhpcy5wcm9wcy5jbGlja2VkSWNvblVybH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgb25DbGljaz17KCk9PmNvbnNvbGUubG9nKCdZYXknKX0+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJub3QtcHJlc3NlZFwiIHNyYz17dGhpcy5wcm9wcy5ub3RDbGlja2VkSWNvblVybH0vPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnByZXNzZWQge1xuICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnByb3BzLmNsaWNrZWQgPyBcImZsZXhcIiA6IFwibm9uZVwifTtcbiAgICAgICAgICAgIG1heC13aWR0aDogJHt0aGlzLnByb3BzLm1heFdpZHRofTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vdC1wcmVzc2VkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5wcm9wcy5jbGlja2VkID8gXCJub25lXCIgOiBcImZsZXhcIn07XG4gICAgICAgICAgICBtYXgtd2lkdGg6ICR7dGhpcy5wcm9wcy5tYXhXaWR0aH07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgfTtcblxuICAgIHJldHVybihcbiAgICAgIHtpY29ufVxuICAgICk7XG4gIH1cbn1cblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGlja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgbWF4V2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsaWNrQWN0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgZGVmYXVsdEljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsaWNrZWRJY29uVXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBub3RDbGlja2VkSWNvblVybDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247Il19 */\n/*@ sourceURL=components/Icon.js */',
            dynamic: [this.props.clicked ? "flex" : "none", this.props.maxWidth, this.props.clicked ? "none" : "flex", this.props.maxWidth]
          })
        );
      };

      return { icon: icon };
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
//# sourceMappingURL=5.9c280773edf1e4af743c.hot-update.js.map