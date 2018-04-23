webpackHotUpdate(4,{

/***/ "./components/ResultItemSmall.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Icon__ = __webpack_require__("./components/Icon.js");
var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/ResultItemSmall.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ResultItemSmall = function (_Component) {
  _inherits(ResultItemSmall, _Component);

  function ResultItemSmall() {
    _classCallCheck(this, ResultItemSmall);

    return _possibleConstructorReturn(this, (ResultItemSmall.__proto__ || Object.getPrototypeOf(ResultItemSmall)).apply(this, arguments));
  }

  _createClass(ResultItemSmall, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          title = _props.title,
          contentType = _props.contentType,
          updatedAt = _props.updatedAt;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { onClick: function onClick() {
            return _this2.props.handleClick(title);
          }, className: 'jsx-2262099129' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-2262099129' + ' ' + 'file-icon-wrapper',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2262099129' + ' ' + 'favorite-star-sm star-icon',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Icon__["a" /* default */], {
              clicked: true,
              maxWidth: '32px',
              clickedIconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2000px-Gold_Star.svg.png',
              notClickedIconUrl: 'http://www.gamingevolution.info/screenshots/main.php/d/149898-1/Greystar.gif',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2262099129' + ' ' + 'file-icon',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Icon__["a" /* default */], {
              clicked: true,
              maxWidth: '48px',
              defaultIcon: this.props.url,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-2262099129' + ' ' + 'text-wrapper',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h2',
            {
              className: 'jsx-2262099129' + ' ' + 'content-title',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              }
            },
            title
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2262099129' + ' ' + 'inner-text-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              {
                className: 'jsx-2262099129' + ' ' + 'document-type',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                }
              },
              contentType
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              {
                className: 'jsx-2262099129' + ' ' + 'middle-dot',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                }
              },
              '\xB7'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              {
                className: 'jsx-2262099129' + ' ' + 'updated-at',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                }
              },
              updatedAt
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2000px-Gold_Star.svg.png', className: 'jsx-2262099129' + ' ' + 'favorite-star-lg star-icon',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2262099129',
          css: '.container.jsx-2262099129{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:24px 0;font:600 1em system-ui;color:rgb(69,69,69);cursor:pointer;}.file-icon.jsx-2262099129{max-width:48px;margin-right:8px;}.content-title.jsx-2262099129{margin:0;}.inner-text-wrapper.jsx-2262099129{display:none;}.favorite-star-sm.jsx-2262099129{display:none;}.favorite-star-lg.jsx-2262099129{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media all and (min-width:376px){.container.jsx-2262099129{font-size:12px;}.file-icon-wrapper.jsx-2262099129{position:relative;}.favorite-star-sm.jsx-2262099129{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:-16px;left:-8px;}.favorite-star-lg.jsx-2262099129{display:none;}.inner-text-wrapper.jsx-2262099129{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:8px;line-height:16px;}.document-type.jsx-2262099129{font-size:0.813em;font-weight:600;color:rgb(45 91 142);}.middle-dot.jsx-2262099129{color:rgb(171,171,171);margin:0 8px;}.updated-at.jsx-2262099129{color:rgb(171,171,171);font-size:0.813em;font-weight:100;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVzdWx0SXRlbVNtYWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDb0IsQUFHMEIsQUFTRSxBQUlOLEFBSVosQUFFZ0IsQUFHQSxBQUlJLEFBR0csQUFHTCxBQU1BLEFBR0EsQUFLSyxBQUtPLEFBSUEsU0F6QzdCLElBR0EsQUFHQSxBQW1CRSxFQTdCaUIsQUFpQmpCLEdBR0EsQUFpQmtCLEtBS0gsQUFJSyxTQTdDdEIsRUFxQ3lCLEVBS3ZCLEtBSWtCLGNBUmxCLEVBU0EsaUJBekRxQixBQXNCdkIsQUFVc0IsQUFTRixnQkFDQyxFQVRQLFVBQ0EsS0FTWixLQVJBLHFDQWxDbUIsNkZBQ0osZUFDUSx1QkFDRCxvQkFDUCxlQUNqQiIsImZpbGUiOiJjb21wb25lbnRzL1Jlc3VsdEl0ZW1TbWFsbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0ljb24nO1xuXG5jbGFzcyBSZXN1bHRJdGVtU21hbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgaWQsIHRpdGxlLCBjb250ZW50VHlwZSwgdXBkYXRlZEF0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgb25DbGljaz17KCk9PnRoaXMucHJvcHMuaGFuZGxlQ2xpY2sodGl0bGUpfSBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgXG4gICAgICAgIHsvKiBYWDogVGVtcG9yYXJ5IHVzZSBvZiBQREYgJiBzdGFyIGljb25zIH4qL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLWljb24td3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmF2b3JpdGUtc3Rhci1zbSBzdGFyLWljb25cIj5cbiAgICAgICAgICAgIDxJY29uIFxuICAgICAgICAgICAgICBjbGlja2VkPXt0cnVlfVxuICAgICAgICAgICAgICBtYXhXaWR0aD1cIjMycHhcIlxuICAgICAgICAgICAgICBjbGlja2VkSWNvblVybCA9IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8yLzI5L0dvbGRfU3Rhci5zdmcvMjAwMHB4LUdvbGRfU3Rhci5zdmcucG5nXCJcbiAgICAgICAgICAgICAgbm90Q2xpY2tlZEljb25VcmwgPSBcImh0dHA6Ly93d3cuZ2FtaW5nZXZvbHV0aW9uLmluZm8vc2NyZWVuc2hvdHMvbWFpbi5waHAvZC8xNDk4OTgtMS9HcmV5c3Rhci5naWZcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtaWNvblwiPlxuICAgICAgICAgICAgPEljb24gXG4gICAgICAgICAgICAgIGNsaWNrZWQ9e3RydWV9XG4gICAgICAgICAgICAgIG1heFdpZHRoPVwiNDhweFwiXG4gICAgICAgICAgICAgIGRlZmF1bHRJY29uID0ge3RoaXMucHJvcHMudXJsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd3JhcHBlclwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb250ZW50LXRpdGxlXCI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci10ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvY3VtZW50LXR5cGVcIj57Y29udGVudFR5cGV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWlkZGxlLWRvdFwiPiZtaWRkb3Q7PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXBkYXRlZC1hdFwiPnt1cGRhdGVkQXR9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIHsvKiBYWDogVGVtcG9yYXJ5IHVzZSBvZiBzdGFyIGljb24gfiovfVxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZhdm9yaXRlLXN0YXItbGcgc3Rhci1pY29uXCIgc3JjPVwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8yLzI5L0dvbGRfU3Rhci5zdmcvMjAwMHB4LUdvbGRfU3Rhci5zdmcucG5nXCIgLz5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHggMDtcbiAgICAgICAgICAgIGZvbnQ6IDYwMCAxZW0gc3lzdGVtLXVpO1xuICAgICAgICAgICAgY29sb3I6IHJnYig2OSwgNjksIDY5KTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpbGUtaWNvbiB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQ4cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRlbnQtdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5uZXItdGV4dC13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZhdm9yaXRlLXN0YXItc20ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZhdm9yaXRlLXN0YXItbGcge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmlsZS1pY29uLXdyYXBwZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmF2b3JpdGUtc3Rhci1zbSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAtMTZweDtcbiAgICAgICAgICAgICAgbGVmdDogLThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mYXZvcml0ZS1zdGFyLWxnIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbm5lci10ZXh0LXdyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kb2N1bWVudC10eXBlIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjgxM2VtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDQ1IDkxIDE0Mik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWlkZGxlLWRvdCB7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTcxLCAxNzEsIDE3MSk7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudXBkYXRlZC1hdCB7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTcxLCAxNzEsIDE3MSk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44MTNlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblJlc3VsdEl0ZW1TbWFsbC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNvbnRlbnRUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHVwZGF0ZWRBdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBoYW5kbGVDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdEl0ZW1TbWFsbDsiXX0= */\n/*@ sourceURL=components/ResultItemSmall.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return ResultItemSmall;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ResultItemSmall.propTypes = {
  id: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  title: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  contentType: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  updatedAt: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  handleClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
};

var _default = ResultItemSmall;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ResultItemSmall, 'ResultItemSmall', '/Users/eddieyao/Desktop/gp_draft/components/ResultItemSmall.js');
  reactHotLoader.register(_default, 'default', '/Users/eddieyao/Desktop/gp_draft/components/ResultItemSmall.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.2cef0c5b5d1b3ecd0894.hot-update.js.map