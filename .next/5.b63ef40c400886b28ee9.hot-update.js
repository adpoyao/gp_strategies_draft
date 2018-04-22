webpackHotUpdate(5,{

/***/ "./components/Filter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FilterDropdown__ = __webpack_require__("./components/FilterDropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_search__ = __webpack_require__("./actions/search.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/Filter.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Filter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Filter.__proto__ || Object.getPrototypeOf(Filter)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (id) {
      if (id === _this.props.activeFilterId) {
        id = undefined;
      }
      _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions_search__["h" /* toggleFilter */])(id));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Filter, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions_search__["h" /* toggleFilter */])(undefined));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          activeFilterId = _props.activeFilterId,
          toggleVisibility = void 0;

      if (id === activeFilterId) {
        toggleVisibility = "flex";
      } else {
        toggleVisibility = "none";
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2695826206', [toggleVisibility]]]) + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            onClick: function onClick() {
              return _this2.handleClick(_this2.props.id);
            }, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2695826206', [toggleVisibility]]]) + ' ' + 'filter-title',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          },
          this.props.label
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'span',
          {
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2695826206', [toggleVisibility]]]) + ' ' + 'drop-down',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__FilterDropdown__["a" /* default */], _extends({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }))
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2695826206',
          css: '.container.__jsx-style-dynamic-selector{font:400 1em system-ui;color:rgb(64 101 149);}.filter-title.__jsx-style-dynamic-selector{padding:20px 0 8px;border-bottom:2px solid rgb(64 101 149);}.drop-down.__jsx-style-dynamic-selector{position:relative;width:100%;margin-top:20px;display:' + toggleVisibility + ';}@media all and (min-width:376px){.container.__jsx-style-dynamic-selector{margin:0 20px;}.drop-down.__jsx-style-dynamic-selector{position:absolute;}.filter-title.__jsx-style-dynamic-selector{padding:0;width:-webkit-max-content;width:-moz-max-content;width:max-content;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmlsdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDb0IsQUFHb0MsQUFJSixBQUtELEFBT0YsQUFHSSxBQUdSLFVBQ1EsSUFOcEIsSUFQVyxBQVVYLENBZndDLElBSDNDLE1BU21CLGdCQVRsQixBQVdELGNBUEMsa0JBa0JFLEtBWEYiLCJmaWxlIjoiY29tcG9uZW50cy9GaWx0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBGaWx0ZXJEcm9wZG93biBmcm9tICcuL0ZpbHRlckRyb3Bkb3duJztcblxuaW1wb3J0IHsgdG9nZ2xlRmlsdGVyIH0gZnJvbSAnLi4vYWN0aW9ucy9zZWFyY2gnO1xuXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHRvZ2dsZUZpbHRlcih1bmRlZmluZWQpKTtcbiAgfTtcblxuICBoYW5kbGVDbGljayA9IChpZCkgPT4ge1xuICAgIGlmKGlkID09PSB0aGlzLnByb3BzLmFjdGl2ZUZpbHRlcklkKXsgaWQgPSB1bmRlZmluZWQ7fVxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godG9nZ2xlRmlsdGVyKGlkKSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGlkLCBhY3RpdmVGaWx0ZXJJZH0gPSB0aGlzLnByb3BzLCB0b2dnbGVWaXNpYmlsaXR5O1xuICAgIGlmKGlkID09PSBhY3RpdmVGaWx0ZXJJZCl7XG4gICAgICB0b2dnbGVWaXNpYmlsaXR5ID0gXCJmbGV4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZ2dsZVZpc2liaWxpdHkgPSBcIm5vbmVcIjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgICAgPGRpdiBcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXItdGl0bGVcIiBcbiAgICAgICAgICBvbkNsaWNrPXsoKT0+dGhpcy5oYW5kbGVDbGljayh0aGlzLnByb3BzLmlkKX0+XG4gICAgICAgICAge3RoaXMucHJvcHMubGFiZWx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZHJvcC1kb3duXCI+PEZpbHRlckRyb3Bkb3duIHsuLi50aGlzLnByb3BzfS8+PC9zcGFuPlxuICAgICAgICBcbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZm9udDogNDAwIDFlbSBzeXN0ZW0tdWk7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDY0IDEwMSAxNDkpXG4gICAgICAgICAgfVxuICAgICAgICAgIC5maWx0ZXItdGl0bGUge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwIDhweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoNjQgMTAxIDE0OSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kcm9wLWRvd24ge1xuICAgICAgICAgICAgLy8gWFg6IE90aGVyIG9waW9uOiBhYnNvbHV0ZVxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogJHt0b2dnbGVWaXNpYmlsaXR5fVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRyb3AtZG93biB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWx0ZXItdGl0bGUge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBhY3RpdmVGaWx0ZXJJZDogc3RhdGUuc2VhcmNoLmFjdGl2ZUZpbHRlcklkLFxufSk7XG5cbkZpbHRlckRyb3Bkb3duLnByb3BUeXBlcyA9IHtcbiAgLy8gaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xpY2tBY3Rpb246IFByb3BUeXBlcy5mdW5jLFxuICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gIC8vIG9wdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gIC8vICAgZm9udENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLCAvL2llIFwicmdiKDY0IDEwMSAxNDkpXCI7XG4gIC8vICAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wgLy8gZGVmYXVsdHMgYXMgZmFsc2U7XG4gIC8vIH0pLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRmlsdGVyKTsiXX0= */\n/*@ sourceURL=components/Filter.js */',
          dynamic: [toggleVisibility]
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Filter;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    activeFilterId: state.search.activeFilterId
  };
};

__WEBPACK_IMPORTED_MODULE_4__FilterDropdown__["a" /* default */].propTypes = {
  // id: PropTypes.string.isRequired,
  label: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired,
  clickAction: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  options: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array
  // options: PropTypes.shape({
  //   fontColor: PropTypes.string, //ie "rgb(64 101 149)";
  //   checked: PropTypes.bool // defaults as false;
  // }),
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps)(Filter);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Filter, 'Filter', '/Users/eddieyao/Desktop/gp_draft/components/Filter.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/eddieyao/Desktop/gp_draft/components/Filter.js');
  reactHotLoader.register(_default, 'default', '/Users/eddieyao/Desktop/gp_draft/components/Filter.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.b63ef40c400886b28ee9.hot-update.js.map