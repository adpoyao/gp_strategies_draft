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
          }, className: 'jsx-1012489397' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-1012489397' + ' ' + 'file-icon-wrapper',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-1012489397' + ' ' + 'favorite-star-sm star-icon',
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
              className: 'jsx-1012489397' + ' ' + 'file-icon',
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
            className: 'jsx-1012489397' + ' ' + 'text-wrapper',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h2',
            {
              className: 'jsx-1012489397' + ' ' + 'content-title',
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
              className: 'jsx-1012489397' + ' ' + 'inner-text-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-1012489397' + ' ' + 'tags-mobile-view',
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
                className: 'jsx-1012489397' + ' ' + 'document-date-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'span',
                {
                  className: 'jsx-1012489397' + ' ' + 'document-type',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  }
                },
                contentType
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'span',
                {
                  className: 'jsx-1012489397' + ' ' + 'middle-dot',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                  }
                },
                '\xB7'
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'span',
                {
                  className: 'jsx-1012489397' + ' ' + 'updated-at',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                  }
                },
                updatedAt
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-1012489397' + ' ' + 'icons',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Icon__["a" /* default */], {
                clicked: true,
                maxWidth: '32px',
                clickedIconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2000px-Gold_Star.svg.png',
                notClickedIconUrl: 'http://www.gamingevolution.info/screenshots/main.php/d/149898-1/Greystar.gif',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48
                }
              }),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'http://chittagongit.com/images/three-vertical-dots-icon/three-vertical-dots-icon-20.jpg', className: 'jsx-1012489397',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                }
              })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1012489397',
          css: '.container.jsx-1012489397{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:24px 0;font:600 1em system-ui;color:rgb(69,69,69);cursor:pointer;}.file-icon.jsx-1012489397{margin-right:8px;}.content-title.jsx-1012489397{margin:0;}.inner-text-wrapper.jsx-1012489397{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:8px;line-height:16px;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;}.document-date-wrapper.jsx-1012489397{-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin:16px 0;}.document-type.jsx-1012489397{font-size:0.813em;font-weight:600;color:rgb(45 91 142);}.middle-dot.jsx-1012489397{color:rgb(171,171,171);margin:0 8px;}.updated-at.jsx-1012489397{color:rgb(171,171,171);font-size:0.813em;font-weight:100;}.star-icon.jsx-1012489397{max-width:32px;max-height:32px;}.favorite-star-sm.jsx-1012489397{display:none;}.favorite-star-lg.jsx-1012489397{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media all and (min-width:376px){.container.jsx-1012489397{font-size:12px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.file-icon-wrapper.jsx-1012489397{position:relative;}.favorite-star-sm.jsx-1012489397{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:-16px;left:-8px;}.favorite-star-lg.jsx-1012489397{display:none;}.inner-text-wrapper.jsx-1012489397{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:8px;line-height:16px;}.document-date-wrapper.jsx-1012489397{margin:0;}.document-type.jsx-1012489397{font-size:0.813em;font-weight:600;color:rgb(45 91 142);}.middle-dot.jsx-1012489397{color:rgb(171,171,171);margin:0 8px;}.updated-at.jsx-1012489397{color:rgb(171,171,171);font-size:0.813em;font-weight:100;}.tags-mobile-view.jsx-1012489397{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVzdWx0SXRlbUxhcmdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFb0IsQUFHMEIsQUFTSSxBQUdSLEFBR0ksQUFNUSxBQUlILEFBS08sQUFJQSxBQUtWLEFBSUYsQUFHQSxBQUlJLEFBSUcsQUFHTCxBQU1BLEFBR0EsQUFLSixBQUdTLEFBS08sQUFJQSxBQUtaLFNBM0VqQixBQTJERSxJQTVCRixBQW9CRSxBQXlCQSxFQWpEZ0IsQUFXSyxFQXpDdkIsQ0FnQmtCLEFBNkJoQixBQW9Ca0IsS0E1Q0wsQUFJSyxBQTZDSCxBQUlLLFFBM0N0QixHQWR1QixBQWlERSxFQTVDekIsQUFpREUsS0E3Q2dCLEFBaURFLGNBekRwQixBQWlERSxFQXhDRixBQWlERSxpQkFyRnFCLEFBZUwsQUErQmxCLEFBV3NCLEFBU0YsQ0E3Q0osY0FDaEIsQ0FObUIsQUFtREUsRUFUUCxVQUNBLEtBekNmLEFBa0RHLENBakJBLElBU0EscUNBM0R1QixxQkFpQnpCLHdGQWhCaUIsZUFDUSx1QkFDRCxvQkFDUCxlQUNqQiIsImZpbGUiOiJjb21wb25lbnRzL1Jlc3VsdEl0ZW1MYXJnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0ljb24nO1xuXG5jbGFzcyBSZXN1bHRJdGVtTGFyZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCB7IGlkLCB0aXRsZSwgY29udGVudFR5cGUsIHVwZGF0ZWRBdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLmhhbmRsZUNsaWNrKHRpdGxlKX0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIFxuICAgICAgICB7LyogWFg6IFRlbXBvcmFyeSB1c2Ugb2YgUERGICYgc3RhciBpY29ucyB+Ki99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1pY29uLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdm9yaXRlLXN0YXItc20gc3Rhci1pY29uXCI+XG4gICAgICAgICAgICA8SWNvbiBcbiAgICAgICAgICAgICAgLy8gQm9vbGVhbiB3aWxsIGJlIGJhc2VkIG9uIGlmIHRoZSBkYXRhIGlzRmF2b3JpdGVkXG4gICAgICAgICAgICAgIGNsaWNrZWQ9e3RydWV9XG4gICAgICAgICAgICAgIG1heFdpZHRoPVwiMzJweFwiXG4gICAgICAgICAgICAgIGNsaWNrZWRJY29uVXJsID0gXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzIvMjkvR29sZF9TdGFyLnN2Zy8yMDAwcHgtR29sZF9TdGFyLnN2Zy5wbmdcIlxuICAgICAgICAgICAgICBub3RDbGlja2VkSWNvblVybCA9IFwiaHR0cDovL3d3dy5nYW1pbmdldm9sdXRpb24uaW5mby9zY3JlZW5zaG90cy9tYWluLnBocC9kLzE0OTg5OC0xL0dyZXlzdGFyLmdpZlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtaWNvblwiPlxuICAgICAgICAgICAgPEljb24gXG4gICAgICAgICAgICAgIG1heFdpZHRoPVwiNDhweFwiXG4gICAgICAgICAgICAgIGRlZmF1bHRJY29uID0ge3RoaXMucHJvcHMudXJsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd3JhcHBlclwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb250ZW50LXRpdGxlXCI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci10ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1tb2JpbGUtdmlld1wiPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3VtZW50LWRhdGUtd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2N1bWVudC10eXBlXCI+e2NvbnRlbnRUeXBlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWlkZGxlLWRvdFwiPiZtaWRkb3Q7PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1cGRhdGVkLWF0XCI+e3VwZGF0ZWRBdH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uc1wiPlxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIGNsaWNrZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg9XCIzMnB4XCJcbiAgICAgICAgICAgICAgICBjbGlja2VkSWNvblVybCA9IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8yLzI5L0dvbGRfU3Rhci5zdmcvMjAwMHB4LUdvbGRfU3Rhci5zdmcucG5nXCJcbiAgICAgICAgICAgICAgICBub3RDbGlja2VkSWNvblVybCA9IFwiaHR0cDovL3d3dy5nYW1pbmdldm9sdXRpb24uaW5mby9zY3JlZW5zaG90cy9tYWluLnBocC9kLzE0OTg5OC0xL0dyZXlzdGFyLmdpZlwiIFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7LyogVGVtcG9yYXJ5IHVzZSBvZiB0aHJlZSBkb3RzIGljb24gKi99XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL2NoaXR0YWdvbmdpdC5jb20vaW1hZ2VzL3RocmVlLXZlcnRpY2FsLWRvdHMtaWNvbi90aHJlZS12ZXJ0aWNhbC1kb3RzLWljb24tMjAuanBnXCIvPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICB7LyogWFg6IFRlbXBvcmFyeSB1c2Ugb2Ygc3RhciBpY29uIH4qL31cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmF2b3JpdGUtc3Rhci1sZyBzdGFyLWljb25cIj5cbiAgICAgICAgICA8SWNvbiBcbiAgICAgICAgICAgIC8vIEJvb2xlYW4gd2lsbCBiZSBiYXNlZCBvbiBpZiB0aGUgZGF0YSBpc0Zhdm9yaXRlZFxuICAgICAgICAgICAgY2xpY2tlZD17dHJ1ZX1cbiAgICAgICAgICAgIG1heFdpZHRoPVwiMzJweFwiXG4gICAgICAgICAgICBjbGlja2VkSWNvblVybCA9IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8yLzI5L0dvbGRfU3Rhci5zdmcvMjAwMHB4LUdvbGRfU3Rhci5zdmcucG5nXCJcbiAgICAgICAgICAgIG5vdENsaWNrZWRJY29uVXJsID0gXCJodHRwOi8vd3d3LmdhbWluZ2V2b2x1dGlvbi5pbmZvL3NjcmVlbnNob3RzL21haW4ucGhwL2QvMTQ5ODk4LTEvR3JleXN0YXIuZ2lmXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAyNHB4IDA7XG4gICAgICAgICAgICBmb250OiA2MDAgMWVtIHN5c3RlbS11aTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNjksIDY5LCA2OSk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5maWxlLWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250ZW50LXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlubmVyLXRleHQtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gLy9cbiAgICAgICAgICB9XG4gICAgICAgICAgLmRvY3VtZW50LWRhdGUtd3JhcHBlciB7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRvY3VtZW50LXR5cGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjgxM2VtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNDUgOTEgMTQyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1pZGRsZS1kb3Qge1xuICAgICAgICAgICAgY29sb3I6IHJnYigxNzEsIDE3MSwgMTcxKTtcbiAgICAgICAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC51cGRhdGVkLWF0IHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTcxLCAxNzEsIDE3MSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODEzZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3Rhci1pY29uIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMzJweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mYXZvcml0ZS1zdGFyLXNtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mYXZvcml0ZS1zdGFyLWxnIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDM3NnB4KSB7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpbGUtaWNvbi13cmFwcGVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZhdm9yaXRlLXN0YXItc20ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogLTE2cHg7XG4gICAgICAgICAgICAgIGxlZnQ6IC04cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmF2b3JpdGUtc3Rhci1sZyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW5uZXItdGV4dC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZG9jdW1lbnQtZGF0ZS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRvY3VtZW50LXR5cGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuODEzZW07XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoNDUgOTEgMTQyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5taWRkbGUtZG90IHtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYigxNzEsIDE3MSwgMTcxKTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC51cGRhdGVkLWF0IHtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYigxNzEsIDE3MSwgMTcxKTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjgxM2VtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRhZ3MtbW9iaWxlLXZpZXcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUmVzdWx0SXRlbUxhcmdlLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY29udGVudFR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdXBkYXRlZEF0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGhhbmRsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0SXRlbUxhcmdlOyJdfQ== */\n/*@ sourceURL=components/ResultItemLarge.js */'
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
//# sourceMappingURL=5.6e90c609797eadb9a4f2.hot-update.js.map