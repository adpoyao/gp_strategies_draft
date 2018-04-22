webpackHotUpdate(4,{

/***/ "./components/QueryListItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TagSmall__ = __webpack_require__("./components/TagSmall.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/QueryListItem.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var QueryListItem = function (_Component) {
  _inherits(QueryListItem, _Component);

  function QueryListItem() {
    _classCallCheck(this, QueryListItem);

    return _possibleConstructorReturn(this, (QueryListItem.__proto__ || Object.getPrototypeOf(QueryListItem)).apply(this, arguments));
  }

  _createClass(QueryListItem, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // Conditional display of tags: Saved Search, Past Search, Popular Search;
      var _props = this.props,
          isSaved = _props.isSaved,
          isFavorited = _props.isFavorited,
          searchTag = void 0;


      if (isSaved) {
        searchTag = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__TagSmall__["a" /* default */], _extends({ content: 'isSaved' }, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }));
      } else if (isFavorited) {
        searchTag = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__TagSmall__["a" /* default */], _extends({ content: 'isFavorited' }, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }));
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { onClick: function onClick() {
            return _this2.props.handleClick(_this2.props.query);
          }, className: 'jsx-1184451276' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863',
          className: 'jsx-1184451276' + ' ' + 'search-icon magnifying-glass',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-1184451276' + ' ' + 'query-wrapper',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'p',
            {
              className: 'jsx-1184451276' + ' ' + 'query-item',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            },
            this.props.query
          ),
          searchTag
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1184451276',
          css: '.container.jsx-1184451276{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;font:400 1.125em system-ui;color:rgb(69,69,69);cursor:pointer;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding-top:32px;}.magnifying-glass.jsx-1184451276{max-width:25px;max-height:15px;width:auto;height:auto;margin:4px 16px;}.query-wrapper.jsx-1184451276{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;width:100%;}.query-item.jsx-1184451276{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;margin-top:0;-webkit-flex:1 100%;-ms-flex:1 100%;flex:1 100%;}@media all and (min-width:376px){.container.jsx-1184451276{font-size:0.938em;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 0 8px 0;}.magnifying-glass.jsx-1184451276{margin-top:0;}.query-wrapper.jsx-1184451276{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:10px;border-bottom:2px dashed rgb(231,231,231);}.query-item.jsx-1184451276{margin:16px 16px 16px 0;-webkit-flex:0 auto;-ms-flex:0 auto;flex:0 auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUXVlcnlMaXN0SXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Qm9CLEFBRzBCLEFBU0UsQUFPRixBQU9VLEFBTUgsQUFNckIsQUFFc0IsQUFLSyxhQVAxQixFQXpCZ0IsR0FvQkssTUFjdEIsT0FqQ1ksV0FDQyxZQUNJLGdCQUNsQixFQThCRSxFQTNDcUIsQUFnQkYsbUJBcUJHLGdCQWRULEVBT08sRUFRMEIsU0FkbEMsT0FPWixjQWR1QixNQWhCSSxNQXNDM0IsZUFkRixNQXZCd0Isb0JBQ1AsZUFDUSx5Q0FjSSxvRUFiVixpQkFDbkIsb0JBYWEsV0FDYiIsImZpbGUiOiJjb21wb25lbnRzL1F1ZXJ5TGlzdEl0ZW0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFRhZ1NtYWxsIGZyb20gJy4vVGFnU21hbGwnO1xuXG5jbGFzcyBRdWVyeUxpc3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIC8vIENvbmRpdGlvbmFsIGRpc3BsYXkgb2YgdGFnczogU2F2ZWQgU2VhcmNoLCBQYXN0IFNlYXJjaCwgUG9wdWxhciBTZWFyY2g7XG4gICAgbGV0IHsgaXNTYXZlZCwgaXNGYXZvcml0ZWQgfSA9IHRoaXMucHJvcHMsIHNlYXJjaFRhZztcbiAgICBcbiAgICBpZihpc1NhdmVkKXtcbiAgICAgIHNlYXJjaFRhZyA9IDxUYWdTbWFsbCBjb250ZW50PVwiaXNTYXZlZFwiIHsuLi50aGlzLnByb3BzfS8+O1xuICAgIH0gZWxzZSBpZiAoaXNGYXZvcml0ZWQpe1xuICAgICAgc2VhcmNoVGFnID0gPFRhZ1NtYWxsIGNvbnRlbnQ9XCJpc0Zhdm9yaXRlZFwiIHsuLi50aGlzLnByb3BzfS8+O1xuICAgIH07XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLmhhbmRsZUNsaWNrKHRoaXMucHJvcHMucXVlcnkpfSBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblxuICAgICAgICB7LyogVGVtcG9yYXJ5IHVzZSBvZiBTZWFyY2ggSWNvbiAqL31cbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5waWNwbmcuY29tL2ltYWdlcy9zbWFsbC9tYWduaWZ5aW5nLWdsYXNzLXNlYXJjaC1sb3VwZS1pbWFnZS1kb3dubG9hZC00OTg2M1wiIFxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1pY29uIG1hZ25pZnlpbmctZ2xhc3NcIi8+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXJ5LXdyYXBwZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJxdWVyeS1pdGVtXCI+e3RoaXMucHJvcHMucXVlcnl9PC9wPlxuICAgICAgICAgIHtzZWFyY2hUYWd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAgICAgIGZvbnQ6IDQwMCAxLjEyNWVtIHN5c3RlbS11aTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNjksIDY5LCA2OSk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWFnbmlmeWluZy1nbGFzcyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW46IDRweCAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucXVlcnktd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5xdWVyeS1pdGVtIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgIGZsZXg6IDEgMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTM4ZW07XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCA4cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tYWduaWZ5aW5nLWdsYXNzIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnF1ZXJ5LXdyYXBwZXIge1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2IoMjMxLCAyMzEsIDIzMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucXVlcnktaXRlbSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTZweCAxNnB4IDE2cHggMDtcbiAgICAgICAgICAgICAgZmxleDogMCBhdXRvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5RdWVyeUxpc3RJdGVtLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlzU2F2ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGlzRmF2b3JpdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBoYW5kbGVDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXJ5TGlzdEl0ZW07Il19 */\n/*@ sourceURL=components/QueryListItem.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return QueryListItem;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

QueryListItem.propTypes = {
  id: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  isSaved: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool.isRequired,
  isFavorited: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool.isRequired,
  handleClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
};

var _default = QueryListItem;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(QueryListItem, 'QueryListItem', '/Users/eddieyao/Desktop/gp_draft/components/QueryListItem.js');
  reactHotLoader.register(_default, 'default', '/Users/eddieyao/Desktop/gp_draft/components/QueryListItem.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.a714f5830b9c748fa0c9.hot-update.js.map