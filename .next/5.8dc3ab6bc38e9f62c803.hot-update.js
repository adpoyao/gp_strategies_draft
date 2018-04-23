webpackHotUpdate(5,{

/***/ "./components/ResultItemLarge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Icon__ = __webpack_require__("./components/Icon.js");
var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/ResultItemLarge.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ResultItemLarge = function (_Component) {
  _inherits(ResultItemLarge, _Component);

  function ResultItemLarge() {
    _classCallCheck(this, ResultItemLarge);

    return _possibleConstructorReturn(this, (ResultItemLarge.__proto__ || Object.getPrototypeOf(ResultItemLarge)).apply(this, arguments));
  }

  _createClass(ResultItemLarge, [{
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
          }, className: 'jsx-3359464892' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-3359464892' + ' ' + 'file-icon-wrapper',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-3359464892' + ' ' + 'favorite-star-sm star-icon',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Icon__["a" /* default */]
            // Boolean will be based on if the data isFavorited
            , { clicked: true,
              maxWidth: '32px',
              clickedIconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2000px-Gold_Star.svg.png',
              notClickedIconUrl: 'http://www.gamingevolution.info/screenshots/main.php/d/149898-1/Greystar.gif',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-3359464892' + ' ' + 'file-icon',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Icon__["a" /* default */], {
              maxWidth: '48px',
              defaultIcon: this.props.url,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              }
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-3359464892' + ' ' + 'text-wrapper',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h2',
            {
              className: 'jsx-3359464892' + ' ' + 'content-title',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            },
            title
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-3359464892' + ' ' + 'inner-text-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-3359464892' + ' ' + 'tags-mobile-view',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                }
              },
              this.props.children
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-3359464892' + ' ' + 'document-date-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'span',
                {
                  className: 'jsx-3359464892' + ' ' + 'document-type',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                  }
                },
                contentType
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'span',
                {
                  className: 'jsx-3359464892' + ' ' + 'middle-dot',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  }
                },
                '\xB7'
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'span',
                {
                  className: 'jsx-3359464892' + ' ' + 'updated-at',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                  }
                },
                updatedAt
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3359464892',
          css: '.container.jsx-3359464892{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:24px 0;font:600 1em system-ui;color:rgb(69,69,69);cursor:pointer;}.file-icon.jsx-3359464892{margin-right:8px;}.content-title.jsx-3359464892{margin:0;}.inner-text-wrapper.jsx-3359464892{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:8px;line-height:16px;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}.document-date-wrapper.jsx-3359464892{-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;}.document-type.jsx-3359464892{font-size:0.813em;font-weight:600;color:rgb(45 91 142);}.middle-dot.jsx-3359464892{color:rgb(171,171,171);margin:0 8px;}.updated-at.jsx-3359464892{color:rgb(171,171,171);font-size:0.813em;font-weight:100;}.star-icon.jsx-3359464892{max-width:32px;max-height:32px;}.favorite-star-sm.jsx-3359464892{display:none;}.favorite-star-lg.jsx-3359464892{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media all and (min-width:376px){.container.jsx-3359464892{font-size:12px;}.file-icon-wrapper.jsx-3359464892{position:relative;}.favorite-star-sm.jsx-3359464892{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:-16px;left:-8px;}.favorite-star-lg.jsx-3359464892{display:none;}.inner-text-wrapper.jsx-3359464892{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:8px;line-height:16px;}.document-type.jsx-3359464892{font-size:0.813em;font-weight:600;color:rgb(45 91 142);}.middle-dot.jsx-3359464892{color:rgb(171,171,171);margin:0 8px;}.updated-at.jsx-3359464892{color:rgb(171,171,171);font-size:0.813em;font-weight:100;}.tags-mobile-view.jsx-3359464892{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVzdWx0SXRlbUxhcmdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEb0IsQUFHMEIsQUFTSSxBQUdSLEFBR0ksQUFNUSxBQUdILEFBS08sQUFJQSxBQUtWLEFBSUYsQUFHQSxBQUlJLEFBR0csQUFHTCxBQU1BLEFBR0EsQUFLSyxBQUtPLEFBSUEsQUFLWixTQXRFakIsSUE4QkEsQUFtQkUsQUFzQkEsRUE3Q2dCLEFBV2hCLEVBeENGLENBZWtCLEFBNEJoQixBQWlCa0IsS0F4Q0wsQUFJSyxBQXlDSCxBQUlLLFFBdkN0QixHQWR1QixBQTZDRSxFQXhDekIsQUE2Q0UsS0F6Q2dCLEFBNkNFLGNBckRwQixBQTZDRSxFQXBDRixBQTZDRSxpQkFoRnFCLEFBZUwsQUE4QmxCLEFBVXNCLEFBU0YsQ0EzQ3BCLGVBTG1CLEFBaURFLEVBVFAsVUFDQSxLQXZDZixBQWdERyxLQVJBLHFDQXpEbUIscUJBaUJyQix3RUFoQmlCLGVBQ1EsdUJBQ0Qsb0JBQ1AsZUFDakIiLCJmaWxlIjoiY29tcG9uZW50cy9SZXN1bHRJdGVtTGFyZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEljb24gZnJvbSAnLi4vY29tcG9uZW50cy9JY29uJztcblxuY2xhc3MgUmVzdWx0SXRlbUxhcmdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgeyBpZCwgdGl0bGUsIGNvbnRlbnRUeXBlLCB1cGRhdGVkQXQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5oYW5kbGVDbGljayh0aXRsZSl9IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICBcbiAgICAgICAgey8qIFhYOiBUZW1wb3JhcnkgdXNlIG9mIFBERiAmIHN0YXIgaWNvbnMgfiovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtaWNvbi13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYXZvcml0ZS1zdGFyLXNtIHN0YXItaWNvblwiPlxuICAgICAgICAgICAgPEljb24gXG4gICAgICAgICAgICAgIC8vIEJvb2xlYW4gd2lsbCBiZSBiYXNlZCBvbiBpZiB0aGUgZGF0YSBpc0Zhdm9yaXRlZFxuICAgICAgICAgICAgICBjbGlja2VkPXt0cnVlfVxuICAgICAgICAgICAgICBtYXhXaWR0aD1cIjMycHhcIlxuICAgICAgICAgICAgICBjbGlja2VkSWNvblVybCA9IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8yLzI5L0dvbGRfU3Rhci5zdmcvMjAwMHB4LUdvbGRfU3Rhci5zdmcucG5nXCJcbiAgICAgICAgICAgICAgbm90Q2xpY2tlZEljb25VcmwgPSBcImh0dHA6Ly93d3cuZ2FtaW5nZXZvbHV0aW9uLmluZm8vc2NyZWVuc2hvdHMvbWFpbi5waHAvZC8xNDk4OTgtMS9HcmV5c3Rhci5naWZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLWljb25cIj5cbiAgICAgICAgICAgIDxJY29uIFxuICAgICAgICAgICAgICBtYXhXaWR0aD1cIjQ4cHhcIlxuICAgICAgICAgICAgICBkZWZhdWx0SWNvbiA9IHt0aGlzLnByb3BzLnVybH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY29udGVudC10aXRsZVwiPnt0aXRsZX08L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItdGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtbW9iaWxlLXZpZXdcIj5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdW1lbnQtZGF0ZS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvY3VtZW50LXR5cGVcIj57Y29udGVudFR5cGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtaWRkbGUtZG90XCI+Jm1pZGRvdDs8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVwZGF0ZWQtYXRcIj57dXBkYXRlZEF0fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIHsvKiBYWDogVGVtcG9yYXJ5IHVzZSBvZiBzdGFyIGljb24gfiovfVxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmYXZvcml0ZS1zdGFyLWxnIHN0YXItaWNvblwiPlxuICAgICAgICAgIDxJY29uIFxuICAgICAgICAgICAgLy8gQm9vbGVhbiB3aWxsIGJlIGJhc2VkIG9uIGlmIHRoZSBkYXRhIGlzRmF2b3JpdGVkXG4gICAgICAgICAgICBjbGlja2VkPXt0cnVlfVxuICAgICAgICAgICAgbWF4V2lkdGg9XCIzMnB4XCJcbiAgICAgICAgICAgIGNsaWNrZWRJY29uVXJsID0gXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzIvMjkvR29sZF9TdGFyLnN2Zy8yMDAwcHgtR29sZF9TdGFyLnN2Zy5wbmdcIlxuICAgICAgICAgICAgbm90Q2xpY2tlZEljb25VcmwgPSBcImh0dHA6Ly93d3cuZ2FtaW5nZXZvbHV0aW9uLmluZm8vc2NyZWVuc2hvdHMvbWFpbi5waHAvZC8xNDk4OTgtMS9HcmV5c3Rhci5naWZcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+ICovfVxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMjRweCAwO1xuICAgICAgICAgICAgZm9udDogNjAwIDFlbSBzeXN0ZW0tdWk7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDY5LCA2OSwgNjkpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmlsZS1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudC10aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbm5lci10ZXh0LXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIC8vXG4gICAgICAgICAgfVxuICAgICAgICAgIC5kb2N1bWVudC1kYXRlLXdyYXBwZXIge1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZG9jdW1lbnQtdHlwZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODEzZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6IHJnYig0NSA5MSAxNDIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWlkZGxlLWRvdCB7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDE3MSwgMTcxLCAxNzEpO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnVwZGF0ZWQtYXQge1xuICAgICAgICAgICAgY29sb3I6IHJnYigxNzEsIDE3MSwgMTcxKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44MTNlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdGFyLWljb24ge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMzJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZhdm9yaXRlLXN0YXItc20ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZhdm9yaXRlLXN0YXItbGcge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmlsZS1pY29uLXdyYXBwZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmF2b3JpdGUtc3Rhci1zbSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAtMTZweDtcbiAgICAgICAgICAgICAgbGVmdDogLThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mYXZvcml0ZS1zdGFyLWxnIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbm5lci10ZXh0LXdyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kb2N1bWVudC10eXBlIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjgxM2VtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDQ1IDkxIDE0Mik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWlkZGxlLWRvdCB7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTcxLCAxNzEsIDE3MSk7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudXBkYXRlZC1hdCB7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTcxLCAxNzEsIDE3MSk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44MTNlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50YWdzLW1vYmlsZS12aWV3IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblJlc3VsdEl0ZW1MYXJnZS5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNvbnRlbnRUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHVwZGF0ZWRBdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBoYW5kbGVDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdEl0ZW1MYXJnZTsiXX0= */\n/*@ sourceURL=components/ResultItemLarge.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return ResultItemLarge;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ResultItemLarge.propTypes = {
  id: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  title: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  contentType: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  updatedAt: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  handleClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
};

var _default = ResultItemLarge;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ResultItemLarge, 'ResultItemLarge', '/Users/eddieyao/Desktop/gp_draft/components/ResultItemLarge.js');
  reactHotLoader.register(_default, 'default', '/Users/eddieyao/Desktop/gp_draft/components/ResultItemLarge.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.8dc3ab6bc38e9f62c803.hot-update.js.map