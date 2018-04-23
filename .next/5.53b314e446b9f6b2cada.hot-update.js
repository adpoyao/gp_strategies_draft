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
              lineNumber: 34
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h2',
            {
              className: 'jsx-1103558039' + ' ' + 'content-title',
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
              className: 'jsx-1103558039' + ' ' + 'inner-text-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            },
            this.props.children,
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
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1103558039',
          css: '.container.jsx-1103558039{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:24px 0;font:600 1em system-ui;color:rgb(69,69,69);cursor:pointer;}.file-icon.jsx-1103558039{margin-right:8px;}.content-title.jsx-1103558039{margin:0;}.inner-text-wrapper.jsx-1103558039{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:8px;line-height:16px;}.document-type.jsx-1103558039{font-size:0.813em;font-weight:600;color:rgb(45 91 142);}.middle-dot.jsx-1103558039{color:rgb(171,171,171);margin:0 8px;}.updated-at.jsx-1103558039{color:rgb(171,171,171);font-size:0.813em;font-weight:100;}.star-icon.jsx-1103558039{max-width:32px;max-height:32px;}.favorite-star-sm.jsx-1103558039{display:none;}.favorite-star-lg.jsx-1103558039{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media all and (min-width:376px){.container.jsx-1103558039{font-size:12px;}.file-icon-wrapper.jsx-1103558039{position:relative;}.favorite-star-sm.jsx-1103558039{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:-16px;left:-8px;}.favorite-star-lg.jsx-1103558039{display:none;}.inner-text-wrapper.jsx-1103558039{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:8px;line-height:16px;}.document-type.jsx-1103558039{font-size:0.813em;font-weight:600;color:rgb(45 91 142);}.middle-dot.jsx-1103558039{color:rgb(171,171,171);margin:0 8px;}.updated-at.jsx-1103558039{color:rgb(171,171,171);font-size:0.813em;font-weight:100;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVzdWx0SXRlbUxhcmdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEb0IsQUFHMEIsQUFTSSxBQUdSLEFBR0ksQUFPSyxBQUtPLEFBSUEsQUFPVixBQUlGLEFBR0EsQUFJSSxBQUdHLEFBR0wsQUFNQSxBQUlBLEFBS0ssQUFLTyxBQUlBLFNBbEU3QixJQThCQSxBQW1CRSxFQXZCZ0IsQUFXaEIsRUF4Q0YsQ0Fha0IsQUE4QmhCLEFBa0JrQixLQTNDTCxBQUlLLEFBNENILEFBSUssUUF4Q3RCLEdBaEJ1QixBQWdERSxFQTNDekIsQUFnREUsS0E1Q2dCLEFBZ0RFLGNBeERwQixBQWdERSxFQXZDRixBQWdERSxpQkFqRnFCLEFBZUwsQUE4QmxCLEFBVXNCLEFBVUYsZ0JBakRELEFBa0RFLEVBVlAsVUFDQSxLQXhDZCxBQWtERSxLQVRBLHFDQXpEbUIsNkZBQ0osZUFDUSx1QkFDRCxvQkFDUCxlQUNqQiIsImZpbGUiOiJjb21wb25lbnRzL1Jlc3VsdEl0ZW1MYXJnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0ljb24nO1xuXG5jbGFzcyBSZXN1bHRJdGVtTGFyZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCB7IGlkLCB0aXRsZSwgY29udGVudFR5cGUsIHVwZGF0ZWRBdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLmhhbmRsZUNsaWNrKHRpdGxlKX0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIFxuICAgICAgICB7LyogWFg6IFRlbXBvcmFyeSB1c2Ugb2YgUERGICYgc3RhciBpY29ucyB+Ki99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1pY29uLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdm9yaXRlLXN0YXItc20gc3Rhci1pY29uXCI+XG4gICAgICAgICAgICA8SWNvbiBcbiAgICAgICAgICAgICAgLy8gQm9vbGVhbiB3aWxsIGJlIGJhc2VkIG9uIGlmIHRoZSBkYXRhIGlzRmF2b3JpdGVkXG4gICAgICAgICAgICAgIGNsaWNrZWQ9e3RydWV9XG4gICAgICAgICAgICAgIG1heFdpZHRoPVwiMzJweFwiXG4gICAgICAgICAgICAgIGNsaWNrZWRJY29uVXJsID0gXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzIvMjkvR29sZF9TdGFyLnN2Zy8yMDAwcHgtR29sZF9TdGFyLnN2Zy5wbmdcIlxuICAgICAgICAgICAgICBub3RDbGlja2VkSWNvblVybCA9IFwiaHR0cDovL3d3dy5nYW1pbmdldm9sdXRpb24uaW5mby9zY3JlZW5zaG90cy9tYWluLnBocC9kLzE0OTg5OC0xL0dyZXlzdGFyLmdpZlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtaWNvblwiPlxuICAgICAgICAgICAgPEljb24gXG4gICAgICAgICAgICAgIG1heFdpZHRoPVwiNDhweFwiXG4gICAgICAgICAgICAgIGRlZmF1bHRJY29uID0ge3RoaXMucHJvcHMudXJsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd3JhcHBlclwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb250ZW50LXRpdGxlXCI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lci10ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jdW1lbnQtdHlwZVwiPntjb250ZW50VHlwZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtaWRkbGUtZG90XCI+Jm1pZGRvdDs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1cGRhdGVkLWF0XCI+e3VwZGF0ZWRBdH08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgey8qIFhYOiBUZW1wb3JhcnkgdXNlIG9mIHN0YXIgaWNvbiB+Ki99XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZhdm9yaXRlLXN0YXItbGcgc3Rhci1pY29uXCI+XG4gICAgICAgICAgPEljb24gXG4gICAgICAgICAgICAvLyBCb29sZWFuIHdpbGwgYmUgYmFzZWQgb24gaWYgdGhlIGRhdGEgaXNGYXZvcml0ZWRcbiAgICAgICAgICAgIGNsaWNrZWQ9e3RydWV9XG4gICAgICAgICAgICBtYXhXaWR0aD1cIjMycHhcIlxuICAgICAgICAgICAgY2xpY2tlZEljb25VcmwgPSBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvMi8yOS9Hb2xkX1N0YXIuc3ZnLzIwMDBweC1Hb2xkX1N0YXIuc3ZnLnBuZ1wiXG4gICAgICAgICAgICBub3RDbGlja2VkSWNvblVybCA9IFwiaHR0cDovL3d3dy5nYW1pbmdldm9sdXRpb24uaW5mby9zY3JlZW5zaG90cy9tYWluLnBocC9kLzE0OTg5OC0xL0dyZXlzdGFyLmdpZlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj4gKi99XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAyNHB4IDA7XG4gICAgICAgICAgICBmb250OiA2MDAgMWVtIHN5c3RlbS11aTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNjksIDY5LCA2OSk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5maWxlLWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250ZW50LXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlubmVyLXRleHQtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgIH1cblxuLy8vXG4gICAgICAgICAgLmRvY3VtZW50LXR5cGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjgxM2VtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNDUgOTEgMTQyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1pZGRsZS1kb3Qge1xuICAgICAgICAgICAgY29sb3I6IHJnYigxNzEsIDE3MSwgMTcxKTtcbiAgICAgICAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC51cGRhdGVkLWF0IHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTcxLCAxNzEsIDE3MSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODEzZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgIH1cbi8vL1xuXG4gICAgICAgICAgLnN0YXItaWNvbiB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMycHg7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmF2b3JpdGUtc3Rhci1zbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmF2b3JpdGUtc3Rhci1sZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWxlLWljb24td3JhcHBlciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mYXZvcml0ZS1zdGFyLXNtIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IC0xNnB4O1xuICAgICAgICAgICAgICBsZWZ0OiAtOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZhdm9yaXRlLXN0YXItbGcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuLy8vXG4gICAgICAgICAgICAuaW5uZXItdGV4dC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZG9jdW1lbnQtdHlwZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44MTNlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYig0NSA5MSAxNDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1pZGRsZS1kb3Qge1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDE3MSwgMTcxLCAxNzEpO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVwZGF0ZWQtYXQge1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDE3MSwgMTcxLCAxNzEpO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuODEzZW07XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5SZXN1bHRJdGVtTGFyZ2UucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjb250ZW50VHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB1cGRhdGVkQXQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaGFuZGxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRJdGVtTGFyZ2U7Il19 */\n/*@ sourceURL=components/ResultItemLarge.js */'
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
//# sourceMappingURL=5.53b314e446b9f6b2cada.hot-update.js.map