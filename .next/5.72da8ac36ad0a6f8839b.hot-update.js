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

      var goldStarSmall = void 0,
          goldStarLarge = void 0,
          greyStarSmall = void 0,
          greyStarLarge = void 0;
      if (this.props.isFavorited) {
        // XX: Temporary use of PDF & star icons ~ 
        goldStarSmall = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { className: 'favorite-star-sm star-icon', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2000px-Gold_Star.svg.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        });
        goldStarLarge = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { className: 'favorite-star-sm star-icon', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2000px-Gold_Star.svg.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        });
      } else {
        greyStarSmall = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { className: 'favorite-star-sm star-icon', src: 'http://www.gamingevolution.info/screenshots/main.php/d/149898-1/Greystar.gif', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        });
        greyStarLarge = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { className: 'favorite-star-sm star-icon', src: 'http://www.gamingevolution.info/screenshots/main.php/d/149898-1/Greystar.gif', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        });
      }

      var _props = this.props,
          id = _props.id,
          title = _props.title,
          contentType = _props.contentType,
          updatedAt = _props.updatedAt;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { onClick: function onClick() {
            return _this2.props.handleClick(title);
          }, className: 'jsx-3312109480' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-3312109480' + ' ' + 'file-icon-wrapper',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-3312109480' + ' ' + 'favorite-star-sm star-icon',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            },
            goldStarSmall,
            greyStarSmall
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: this.props.url, className: 'jsx-3312109480' + ' ' + 'file-icon',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-3312109480' + ' ' + 'text-wrapper',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h2',
            {
              className: 'jsx-3312109480' + ' ' + 'content-title',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            },
            title
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-3312109480' + ' ' + 'inner-text-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              {
                className: 'jsx-3312109480' + ' ' + 'document-type',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                }
              },
              contentType
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              {
                className: 'jsx-3312109480' + ' ' + 'middle-dot',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                }
              },
              '\xB7'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'span',
              {
                className: 'jsx-3312109480' + ' ' + 'updated-at',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              },
              updatedAt
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-3312109480' + ' ' + 'favorite-star-lg star-icon',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          },
          goldStarSmall,
          greyStarSmall
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3312109480',
          css: '.container.jsx-3312109480{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:24px 0;font:600 1em system-ui;color:rgb(69,69,69);cursor:pointer;}.file-icon.jsx-3312109480{max-width:48px;margin-right:8px;}.content-title.jsx-3312109480{margin:0;}.inner-text-wrapper.jsx-3312109480{display:none;}.star-icon.jsx-3312109480{max-width:32px;max-height:32px;}.star-icon.jsx-3312109480{max-width:32px;}.favorite-star-sm.jsx-3312109480{display:none;}.favorite-star-lg.jsx-3312109480{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media all and (min-width:376px){.container.jsx-3312109480{font-size:12px;}.file-icon-wrapper.jsx-3312109480{position:relative;}.favorite-star-sm.jsx-3312109480{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:-16px;left:-8px;}.favorite-star-lg.jsx-3312109480{display:none;}.inner-text-wrapper.jsx-3312109480{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:8px;line-height:16px;}.document-type.jsx-3312109480{font-size:0.813em;font-weight:600;color:rgb(45 91 142);}.middle-dot.jsx-3312109480{color:rgb(171,171,171);margin:0 8px;}.updated-at.jsx-3312109480{color:rgb(171,171,171);font-size:0.813em;font-weight:100;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVzdWx0SXRlbUxhcmdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEb0IsQUFHMEIsQUFTRSxBQUlOLEFBSVosQUFFa0IsQUFJQSxBQUdGLEFBR0EsQUFJSSxBQUdHLEFBR0wsQUFNQSxBQUdBLEFBS0ssQUFLTyxBQUlBLFNBaEQ3QixJQUdBLEFBVUEsQUFtQkUsRUFwQ2lCLEFBVUQsQUFJbEIsQUFVRSxHQUdBLEFBaUJrQixLQUtILEFBSUssUUExQ3RCLENBVkEsRUE0Q3lCLEVBS3ZCLEtBSWtCLGNBUmxCLEVBU0EsaUJBaEVxQixBQTZCdkIsQUFVc0IsQUFTRixnQkFDQyxFQVRQLFVBQ0EsS0FTWixLQVJBLHFDQXpDbUIsNkZBQ0osZUFDUSx1QkFDRCxvQkFDUCxlQUNqQiIsImZpbGUiOiJjb21wb25lbnRzL1Jlc3VsdEl0ZW1MYXJnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBSZXN1bHRJdGVtTGFyZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZ29sZFN0YXJTbWFsbCwgZ29sZFN0YXJMYXJnZSwgZ3JleVN0YXJTbWFsbCwgZ3JleVN0YXJMYXJnZTtcbiAgICBpZih0aGlzLnByb3BzLmlzRmF2b3JpdGVkKXtcbiAgICAvLyBYWDogVGVtcG9yYXJ5IHVzZSBvZiBQREYgJiBzdGFyIGljb25zIH4gXG4gICAgICBnb2xkU3RhclNtYWxsID0gPGltZyBjbGFzc05hbWU9XCJmYXZvcml0ZS1zdGFyLXNtIHN0YXItaWNvblwiIHNyYz1cImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvMi8yOS9Hb2xkX1N0YXIuc3ZnLzIwMDBweC1Hb2xkX1N0YXIuc3ZnLnBuZ1wiIC8+O1xuICAgICAgZ29sZFN0YXJMYXJnZSA9IDxpbWcgY2xhc3NOYW1lPVwiZmF2b3JpdGUtc3Rhci1zbSBzdGFyLWljb25cIiBzcmM9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzIvMjkvR29sZF9TdGFyLnN2Zy8yMDAwcHgtR29sZF9TdGFyLnN2Zy5wbmdcIiAvPlxuICAgIH0gZWxzZSB7XG4gICAgICBncmV5U3RhclNtYWxsID0gPGltZyBjbGFzc05hbWU9XCJmYXZvcml0ZS1zdGFyLXNtIHN0YXItaWNvblwiIHNyYz1cImh0dHA6Ly93d3cuZ2FtaW5nZXZvbHV0aW9uLmluZm8vc2NyZWVuc2hvdHMvbWFpbi5waHAvZC8xNDk4OTgtMS9HcmV5c3Rhci5naWZcIiAvPlxuICAgICAgZ3JleVN0YXJMYXJnZSA9IDxpbWcgY2xhc3NOYW1lPVwiZmF2b3JpdGUtc3Rhci1zbSBzdGFyLWljb25cIiBzcmM9XCJodHRwOi8vd3d3LmdhbWluZ2V2b2x1dGlvbi5pbmZvL3NjcmVlbnNob3RzL21haW4ucGhwL2QvMTQ5ODk4LTEvR3JleXN0YXIuZ2lmXCIgLz5cbiAgICB9XG5cbiAgICBsZXQgeyBpZCwgdGl0bGUsIGNvbnRlbnRUeXBlLCB1cGRhdGVkQXQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5oYW5kbGVDbGljayh0aXRsZSl9IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICBcbiAgICAgICAgey8qIFhYOiBUZW1wb3JhcnkgdXNlIG9mIFBERiAmIHN0YXIgaWNvbnMgfiovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtaWNvbi13cmFwcGVyXCI+XG4gICAgICAgICAgey8qIDxpbWcgY2xhc3NOYW1lPVwiZmF2b3JpdGUtc3Rhci1zbSBzdGFyLWljb25cIiBzcmM9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzIvMjkvR29sZF9TdGFyLnN2Zy8yMDAwcHgtR29sZF9TdGFyLnN2Zy5wbmdcIiAvPiAqL31cbiAgICAgICAgICB7LyogPGltZyBjbGFzc05hbWU9XCJmYXZvcml0ZS1zdGFyLXNtIHN0YXItaWNvblwiIHNyYz1cImh0dHA6Ly93d3cuZ2FtaW5nZXZvbHV0aW9uLmluZm8vc2NyZWVuc2hvdHMvbWFpbi5waHAvZC8xNDk4OTgtMS9HcmV5c3Rhci5naWZcIiAvPiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdm9yaXRlLXN0YXItc20gc3Rhci1pY29uXCI+XG4gICAgICAgICAgICB7Z29sZFN0YXJTbWFsbH17Z3JleVN0YXJTbWFsbH1cbiAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmaWxlLWljb25cIiBzcmM9e3RoaXMucHJvcHMudXJsfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13cmFwcGVyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNvbnRlbnQtdGl0bGVcIj57dGl0bGV9PC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLXRleHQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jdW1lbnQtdHlwZVwiPntjb250ZW50VHlwZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtaWRkbGUtZG90XCI+Jm1pZGRvdDs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1cGRhdGVkLWF0XCI+e3VwZGF0ZWRBdH08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgey8qIFhYOiBUZW1wb3JhcnkgdXNlIG9mIHN0YXIgaWNvbiB+Ki99XG4gICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cImZhdm9yaXRlLXN0YXItbGcgc3Rhci1pY29uXCIgc3JjPVwiaHR0cDovL3d3dy5nYW1pbmdldm9sdXRpb24uaW5mby9zY3JlZW5zaG90cy9tYWluLnBocC9kLzE0OTg5OC0xL0dyZXlzdGFyLmdpZlwiIC8+ICovfVxuICAgICAgICB7LyogPGltZyBjbGFzc05hbWU9XCJmYXZvcml0ZS1zdGFyLWxnIHN0YXItaWNvblwiIHNyYz1cImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvMi8yOS9Hb2xkX1N0YXIuc3ZnLzIwMDBweC1Hb2xkX1N0YXIuc3ZnLnBuZ1wiIC8+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdm9yaXRlLXN0YXItbGcgc3Rhci1pY29uXCI+XG4gICAgICAgICAge2dvbGRTdGFyU21hbGx9e2dyZXlTdGFyU21hbGx9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMjRweCAwO1xuICAgICAgICAgICAgZm9udDogNjAwIDFlbSBzeXN0ZW0tdWk7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDY5LCA2OSwgNjkpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmlsZS1pY29uIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDhweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudC10aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbm5lci10ZXh0LXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZVxuICAgICAgICAgIH1cbiAgICAgICAgICAuc3Rhci1pY29uIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMzJweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdGFyLWljb24ge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmF2b3JpdGUtc3Rhci1zbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmF2b3JpdGUtc3Rhci1sZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWxlLWljb24td3JhcHBlciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mYXZvcml0ZS1zdGFyLXNtIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IC0xNnB4O1xuICAgICAgICAgICAgICBsZWZ0OiAtOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZhdm9yaXRlLXN0YXItbGcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmlubmVyLXRleHQtd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRvY3VtZW50LXR5cGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuODEzZW07XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoNDUgOTEgMTQyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5taWRkbGUtZG90IHtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYigxNzEsIDE3MSwgMTcxKTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC51cGRhdGVkLWF0IHtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYigxNzEsIDE3MSwgMTcxKTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjgxM2VtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUmVzdWx0SXRlbUxhcmdlLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY29udGVudFR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdXBkYXRlZEF0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGhhbmRsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0SXRlbUxhcmdlOyJdfQ== */\n/*@ sourceURL=components/ResultItemLarge.js */'
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
//# sourceMappingURL=5.72da8ac36ad0a6f8839b.hot-update.js.map