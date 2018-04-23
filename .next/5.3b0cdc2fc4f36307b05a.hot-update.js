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
          }, className: 'jsx-1103558039' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-1103558039' + ' ' + 'file-icon-wrapper',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-1103558039' + ' ' + 'favorite-star-sm star-icon',
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
              className: 'jsx-1103558039' + ' ' + 'file-icon',
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
            className: 'jsx-1103558039' + ' ' + 'text-wrapper',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h2',
            {
              className: 'jsx-1103558039' + ' ' + 'content-title',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            },
            title
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-1103558039' + ' ' + 'inner-text-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              {
                className: 'jsx-1103558039' + ' ' + 'document-type',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              },
              contentType
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              {
                className: 'jsx-1103558039' + ' ' + 'middle-dot',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39
                }
              },
              '\xB7'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              {
                className: 'jsx-1103558039' + ' ' + 'updated-at',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40
                }
              },
              updatedAt
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-1103558039' + ' ' + 'favorite-star-lg star-icon',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
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
              lineNumber: 46
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1103558039',
          css: '.container.jsx-1103558039{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:24px 0;font:600 1em system-ui;color:rgb(69,69,69);cursor:pointer;}.file-icon.jsx-1103558039{margin-right:8px;}.content-title.jsx-1103558039{margin:0;}.inner-text-wrapper.jsx-1103558039{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:8px;line-height:16px;}.document-type.jsx-1103558039{font-size:0.813em;font-weight:600;color:rgb(45 91 142);}.middle-dot.jsx-1103558039{color:rgb(171,171,171);margin:0 8px;}.updated-at.jsx-1103558039{color:rgb(171,171,171);font-size:0.813em;font-weight:100;}.star-icon.jsx-1103558039{max-width:32px;max-height:32px;}.favorite-star-sm.jsx-1103558039{display:none;}.favorite-star-lg.jsx-1103558039{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media all and (min-width:376px){.container.jsx-1103558039{font-size:12px;}.file-icon-wrapper.jsx-1103558039{position:relative;}.favorite-star-sm.jsx-1103558039{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:-16px;left:-8px;}.favorite-star-lg.jsx-1103558039{display:none;}.inner-text-wrapper.jsx-1103558039{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:8px;line-height:16px;}.document-type.jsx-1103558039{font-size:0.813em;font-weight:600;color:rgb(45 91 142);}.middle-dot.jsx-1103558039{color:rgb(171,171,171);margin:0 8px;}.updated-at.jsx-1103558039{color:rgb(171,171,171);font-size:0.813em;font-weight:100;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVzdWx0SXRlbUxhcmdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEb0IsQUFHMEIsQUFTSSxBQUdSLEFBR0ksQUFPSyxBQUtPLEFBSUEsQUFPVixBQUlGLEFBR0EsQUFJSSxBQUdHLEFBR0wsQUFNQSxBQUlBLEFBS0ssQUFLTyxBQUlBLFNBbEU3QixJQThCQSxBQW1CRSxFQXZCZ0IsQUFXaEIsRUF4Q0YsQ0Fha0IsQUE4QmhCLEFBa0JrQixLQTNDTCxBQUlLLEFBNENILEFBSUssUUF4Q3RCLEdBaEJ1QixBQWdERSxFQTNDekIsQUFnREUsS0E1Q2dCLEFBZ0RFLGNBeERwQixBQWdERSxFQXZDRixBQWdERSxpQkFqRnFCLEFBZUwsQUE4QmxCLEFBVXNCLEFBVUYsZ0JBakRELEFBa0RFLEVBVlAsVUFDQSxLQXhDZCxBQWtERSxLQVRBLHFDQXpEbUIsNkZBQ0osZUFDUSx1QkFDRCxvQkFDUCxlQUNqQiIsImZpbGUiOiJjb21wb25lbnRzL1Jlc3VsdEl0ZW1MYXJnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0ljb24nO1xuXG5jbGFzcyBSZXN1bHRJdGVtTGFyZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCB7IGlkLCB0aXRsZSwgY29udGVudFR5cGUsIHVwZGF0ZWRBdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLmhhbmRsZUNsaWNrKHRpdGxlKX0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIFxuICAgICAgICB7LyogWFg6IFRlbXBvcmFyeSB1c2Ugb2YgUERGICYgc3RhciBpY29ucyB+Ki99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1pY29uLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdm9yaXRlLXN0YXItc20gc3Rhci1pY29uXCI+XG4gICAgICAgICAgICA8SWNvbiBcbiAgICAgICAgICAgICAgLy8gQm9vbGVhbiB3aWxsIGJlIGJhc2VkIG9uIGlmIHRoZSBkYXRhIGlzRmF2b3JpdGVkXG4gICAgICAgICAgICAgIGNsaWNrZWQ9e3RydWV9XG4gICAgICAgICAgICAgIG1heFdpZHRoPVwiMzJweFwiXG4gICAgICAgICAgICAgIGNsaWNrZWRJY29uVXJsID0gXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzIvMjkvR29sZF9TdGFyLnN2Zy8yMDAwcHgtR29sZF9TdGFyLnN2Zy5wbmdcIlxuICAgICAgICAgICAgICBub3RDbGlja2VkSWNvblVybCA9IFwiaHR0cDovL3d3dy5nYW1pbmdldm9sdXRpb24uaW5mby9zY3JlZW5zaG90cy9tYWluLnBocC9kLzE0OTg5OC0xL0dyZXlzdGFyLmdpZlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtaWNvblwiPlxuICAgICAgICAgICAgPEljb24gXG4gICAgICAgICAgICAgIG1heFdpZHRoPVwiNDhweFwiXG4gICAgICAgICAgICAgIGRlZmF1bHRJY29uID0ge3RoaXMucHJvcHMudXJsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPGltZyBjbGFzc05hbWU9XCJmaWxlLWljb25cIiBzcmM9e3RoaXMucHJvcHMudXJsfSAvPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd3JhcHBlclwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb250ZW50LXRpdGxlXCI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci10ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvY3VtZW50LXR5cGVcIj57Y29udGVudFR5cGV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWlkZGxlLWRvdFwiPiZtaWRkb3Q7PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXBkYXRlZC1hdFwiPnt1cGRhdGVkQXR9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIHsvKiBYWDogVGVtcG9yYXJ5IHVzZSBvZiBzdGFyIGljb24gfiovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdm9yaXRlLXN0YXItbGcgc3Rhci1pY29uXCI+XG4gICAgICAgICAgPEljb24gXG4gICAgICAgICAgICAvLyBCb29sZWFuIHdpbGwgYmUgYmFzZWQgb24gaWYgdGhlIGRhdGEgaXNGYXZvcml0ZWRcbiAgICAgICAgICAgIGNsaWNrZWQ9e3RydWV9XG4gICAgICAgICAgICBtYXhXaWR0aD1cIjMycHhcIlxuICAgICAgICAgICAgY2xpY2tlZEljb25VcmwgPSBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvMi8yOS9Hb2xkX1N0YXIuc3ZnLzIwMDBweC1Hb2xkX1N0YXIuc3ZnLnBuZ1wiXG4gICAgICAgICAgICBub3RDbGlja2VkSWNvblVybCA9IFwiaHR0cDovL3d3dy5nYW1pbmdldm9sdXRpb24uaW5mby9zY3JlZW5zaG90cy9tYWluLnBocC9kLzE0OTg5OC0xL0dyZXlzdGFyLmdpZlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHggMDtcbiAgICAgICAgICAgIGZvbnQ6IDYwMCAxZW0gc3lzdGVtLXVpO1xuICAgICAgICAgICAgY29sb3I6IHJnYig2OSwgNjksIDY5KTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpbGUtaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRlbnQtdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5uZXItdGV4dC13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgfVxuXG4vLy9cbiAgICAgICAgICAuZG9jdW1lbnQtdHlwZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODEzZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6IHJnYig0NSA5MSAxNDIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWlkZGxlLWRvdCB7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDE3MSwgMTcxLCAxNzEpO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnVwZGF0ZWQtYXQge1xuICAgICAgICAgICAgY29sb3I6IHJnYigxNzEsIDE3MSwgMTcxKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44MTNlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgfVxuLy8vXG5cbiAgICAgICAgICAuc3Rhci1pY29uIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMzJweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mYXZvcml0ZS1zdGFyLXNtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mYXZvcml0ZS1zdGFyLWxnIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDM3NnB4KSB7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpbGUtaWNvbi13cmFwcGVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZhdm9yaXRlLXN0YXItc20ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHRvcDogLTE2cHg7XG4gICAgICAgICAgICAgIGxlZnQ6IC04cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmF2b3JpdGUtc3Rhci1sZyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4vLy9cbiAgICAgICAgICAgIC5pbm5lci10ZXh0LXdyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kb2N1bWVudC10eXBlIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjgxM2VtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDQ1IDkxIDE0Mik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWlkZGxlLWRvdCB7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTcxLCAxNzEsIDE3MSk7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudXBkYXRlZC1hdCB7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTcxLCAxNzEsIDE3MSk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44MTNlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblJlc3VsdEl0ZW1MYXJnZS5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNvbnRlbnRUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHVwZGF0ZWRBdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBoYW5kbGVDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdEl0ZW1MYXJnZTsiXX0= */\n/*@ sourceURL=components/ResultItemLarge.js */'
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
//# sourceMappingURL=5.3b0cdc2fc4f36307b05a.hot-update.js.map