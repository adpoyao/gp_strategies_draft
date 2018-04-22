webpackHotUpdate(4,{

/***/ "./components/ProductThumbnail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/ProductThumbnail.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ProductThumbnail = function (_Component) {
  _inherits(ProductThumbnail, _Component);

  function ProductThumbnail() {
    _classCallCheck(this, ProductThumbnail);

    return _possibleConstructorReturn(this, (ProductThumbnail.__proto__ || Object.getPrototypeOf(ProductThumbnail)).apply(this, arguments));
  }

  _createClass(ProductThumbnail, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          imgUrl = _props.imgUrl,
          modelName = _props.modelName,
          modelYear = _props.modelYear;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { onClick: function onClick() {
            return _this2.props.handleClick(modelName);
          }, className: 'jsx-4253705' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: imgUrl, className: 'jsx-4253705' + ' ' + 'product-img',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h2',
          {
            className: 'jsx-4253705',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          },
          modelYear,
          ' ',
          modelName
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '4253705',
          css: '.container.jsx-4253705{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-top:40px;font:600 1em system-ui;color:rgb(69,69,69);cursor:pointer;}.product-img.jsx-4253705{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJvZHVjdFRodW1ibmFpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjb0IsQUFHMEIsQUFVaEIsV0FBQywrREFUMEIsb0ZBQ0wsNkZBQ0YsaUJBQ00sdUJBQ0Qsb0JBQ1AsZUFDakIiLCJmaWxlIjoiY29tcG9uZW50cy9Qcm9kdWN0VGh1bWJuYWlsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lZGRpZXlhby9EZXNrdG9wL2dwX2RyYWZ0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIFByb2R1Y3RUaHVtYm5haWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gIFxuICAgIGxldCB7IGltZ1VybCwgbW9kZWxOYW1lLCBtb2RlbFllYXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLmhhbmRsZUNsaWNrKG1vZGVsTmFtZSl9IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2R1Y3QtaW1nXCIgc3JjPXtpbWdVcmx9Lz5cbiAgICAgICAgXG4gICAgICAgIDxoMj57bW9kZWxZZWFyfSB7bW9kZWxOYW1lfTwvaDI+XG4gICAgICAgIFxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICAgICAgZm9udDogNjAwIDFlbSBzeXN0ZW0tdWk7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDY5LCA2OSwgNjkpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdC1pbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5Qcm9kdWN0VGh1bWJuYWlsLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1vZGVsTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbW9kZWxZZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxuICBpbWdVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICBoYW5kbGVDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RUaHVtYm5haWw7Il19 */\n/*@ sourceURL=components/ProductThumbnail.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return ProductThumbnail;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

;

ProductThumbnail.propTypes = {
  id: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  modelName: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  modelYear: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  imgUrl: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,

  handleClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
};

var _default = ProductThumbnail;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProductThumbnail, 'ProductThumbnail', '/Users/eddieyao/Desktop/gp_draft/components/ProductThumbnail.js');
  reactHotLoader.register(_default, 'default', '/Users/eddieyao/Desktop/gp_draft/components/ProductThumbnail.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.f5d308a0a355fb07ea0b.hot-update.js.map