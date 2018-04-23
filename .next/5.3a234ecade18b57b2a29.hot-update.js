webpackHotUpdate(5,{

/***/ "./components/SearchSecondary.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_autosize_input__ = __webpack_require__("./node_modules/autosize-input/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_autosize_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_autosize_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_search__ = __webpack_require__("./actions/search.js");
var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/SearchSecondary.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var SearchSecondary = function (_Component) {
  _inherits(SearchSecondary, _Component);

  function SearchSecondary() {
    _classCallCheck(this, SearchSecondary);

    return _possibleConstructorReturn(this, (SearchSecondary.__proto__ || Object.getPrototypeOf(SearchSecondary)).apply(this, arguments));
  }

  _createClass(SearchSecondary, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      __WEBPACK_IMPORTED_MODULE_6_autosize_input___default()(document.querySelector('#search-input'));
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(e) {
      e.preventDefault();
    }
  }, {
    key: 'onHandleInputChange',
    value: function onHandleInputChange(event) {
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions_search__["j" /* updateSearchTerm */])(event.target.value));
    }
  }, {
    key: 'toString',
    value: function toString(query) {
      if (query) {
        return query;
      } else {
        return '';
      }
    }
  }, {
    key: 'toIsFilter',
    value: function toIsFilter(array) {
      if (array && array.length > 0) {
        return 'is: (' + array.toString().split(",").join(", ") + ')';
      } else {
        return '';
      };
    }
  }, {
    key: 'toInFilter',
    value: function toInFilter(array) {
      if (array && array.length > 0) {
        return 'in: (' + array.toString().split(",").join(", ") + ')';
      } else {
        return '';
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var compiledQuery = this.toString(this.props.searchTerm);
      var compiledFilter = this.toIsFilter(this.props.filteredStatus) + " " + this.toIsFilter(this.props.filteredContentType) + " " + this.toInFilter(this.props.filteredTopic);
      compiledFilter = compiledFilter.split("  ").join(" ");

      var customInputWidth = void 0,
          customInputDisplay = void 0;
      if (!this.props.searchTerm.length) {
        customInputWidth = !compiledFilter.trim() ? "360px" : "0";
      } else {
        customInputWidth = (this.props.searchTerm.length + 1) * 8 + 'px';
      };

      if (!compiledFilter.trim()) {
        customInputDisplay = "none";
      }

      var placeholder = void 0,
          apostrophe = void 0;
      if (!this.props.searchTerm && !compiledFilter.trim()) {
        placeholder = "Search by vehicle, topic, keyword or content title...";
      } else if (this.props.searchTerm) {
        apostrophe = "\"";
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1218685664', [customInputWidth, customInputDisplay]]]) + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'form',
          { onSubmit: function onSubmit(e) {
              return _this2.onSubmit(e);
            }, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1218685664', [customInputWidth, customInputDisplay]]]),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { onClick: function onClick() {
                return _this2.searchInput.focus();
              }, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1218685664', [customInputWidth, customInputDisplay]]]) + ' ' + 'input-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1218685664', [customInputWidth, customInputDisplay]]]) + ' ' + 'input-inner-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 77
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863',
                className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1218685664', [customInputWidth, customInputDisplay]]]) + ' ' + 'search-icon magnifying-glass',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 79
                }
              }),
              apostrophe,
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1218685664', [customInputWidth, customInputDisplay]]]) + ' ' + 'search-input-wrapper',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
                  text: 'text',
                  id: 'search-input',
                  name: 'searchInput',
                  autoComplete: 'off',

                  ref: function ref(input) {
                    _this2.searchInput = input;
                  },
                  placeholder: placeholder,
                  onChange: function onChange(event) {
                    return _this2.onHandleInputChange(event);
                  },
                  value: compiledQuery,
                  className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1218685664', [customInputWidth, customInputDisplay]]]) + ' ' + 'search-input',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                  }
                })
              ),
              apostrophe,
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1218685664', [customInputWidth, customInputDisplay]]]) + ' ' + 'filter-input',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                  }
                },
                compiledFilter
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'p',
              { onClick: function onClick(e) {
                  return _this2.onSubmit(e);
                }, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1218685664', [customInputWidth, customInputDisplay]]]) + ' ' + 'save-search',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 103
                }
              },
              'Save'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1218685664',
          css: '.container.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:16px 0;}.magnifying-glass.__jsx-style-dynamic-selector{max-width:24px;max-height:14px;width:auto;height:auto;margin:0 16px;display:none;}form.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 auto;-ms-flex:1 auto;flex:1 auto;}.input-wrapper.__jsx-style-dynamic-selector{-webkit-flex:1 80%;-ms-flex:1 80%;flex:1 80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:64px;max-width:600px;background:white;border-radius:4px;-webkit-box-shadow:0px 10px 20px 4px rgba(0,0,0,0.15);-moz-box-shadow:0px 10px 20px 4px rgba(0,0,0,0.15);box-shadow:0px 10px 20px 4px rgba(0,0,0,0.15);}.input-inner-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.search-icon.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 12px;}.filter-input.__jsx-style-dynamic-selector{display:' + customInputDisplay + ';}input.__jsx-style-dynamic-selector{padding:0;border:none;outline:none;font-size:1em;color:black;}.save-search.__jsx-style-dynamic-selector{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:rgb(64 102 149);margin-right:24px;padding-bottom:4px;min-width:32px;border-bottom:1px solid rgb(64 102 149);font:600 0.875em system-ui;-webkit-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);-moz-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);cursor:pointer;}@media all and (min-width:376px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoU2Vjb25kYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRHb0IsQUFHd0IsQUFNSSxBQVFGLEFBSUYsQUFjRSxBQUtBLEFBU2hCLEFBR2EsQUFPUSxVQU5OLENBakRDLElBTUcsR0FrREgsSUFOQSxTQTNDRixJQTRDRyxFQU5oQixLQXJDYyxHQVVDLElBa0NELEtBM0NFLE9BNENoQixPQTNDZSxNQUlELEFBbUJPLEFBSUwsT0ExQmhCLElBVnlCLEdBcUN6QixJQW1Cd0Isc0JBQ0osS0F2Q0csR0FKdkIsVUE0Q3FCLG1CQUNKLGVBQ3lCLENBM0IxQyxpQkFoQ2dCLFVBa0JLLElBakJyQixRQTJENkIsMkJBQ2dDLHNEQTFDN0IsS0EyQzBCLHdEQUNMLG1EQUNsQyxHQTVDTCxZQUNJLEFBNENsQixnQkEzQ21CLGlCQUNDLGtCQUNvQyxzREFDSCxtREFDTCw4Q0FDaEQiLCJmaWxlIjoiY29tcG9uZW50cy9TZWFyY2hTZWNvbmRhcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBhdXRvc2l6ZUlucHV0IGZyb20gJ2F1dG9zaXplLWlucHV0JztcblxuaW1wb3J0IHsgdXBkYXRlU2VhcmNoVGVybSB9IGZyb20gJy4uL2FjdGlvbnMvc2VhcmNoJztcblxuY2xhc3MgU2VhcmNoU2Vjb25kYXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXV0b3NpemVJbnB1dChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWlucHV0JykpXG4gIH1cblxuICBvblN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgb25IYW5kbGVJbnB1dENoYW5nZShldmVudCl7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIHRvU3RyaW5nKHF1ZXJ5KXtcbiAgICBpZihxdWVyeSl7XG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfTtcblxuICB0b0lzRmlsdGVyKGFycmF5KXtcbiAgICBpZihhcnJheSAmJiBhcnJheS5sZW5ndGggPiAwKXtcbiAgICAgIHJldHVybiBgaXM6ICgke2FycmF5LnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLmpvaW4oXCIsIFwiKX0pYFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfTtcbiAgfTtcblxuICB0b0luRmlsdGVyKGFycmF5KXtcbiAgICBpZihhcnJheSAmJiBhcnJheS5sZW5ndGggPiAwKXtcbiAgICAgIHJldHVybiBgaW46ICgke2FycmF5LnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLmpvaW4oXCIsIFwiKX0pYFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgY29tcGlsZWRRdWVyeSA9IHRoaXMudG9TdHJpbmcodGhpcy5wcm9wcy5zZWFyY2hUZXJtKTtcbiAgICBsZXQgY29tcGlsZWRGaWx0ZXIgPSB0aGlzLnRvSXNGaWx0ZXIodGhpcy5wcm9wcy5maWx0ZXJlZFN0YXR1cykgKyBcIiBcIiArIHRoaXMudG9Jc0ZpbHRlcih0aGlzLnByb3BzLmZpbHRlcmVkQ29udGVudFR5cGUpICsgXCIgXCIgKyB0aGlzLnRvSW5GaWx0ZXIodGhpcy5wcm9wcy5maWx0ZXJlZFRvcGljKTtcbiAgICBjb21waWxlZEZpbHRlciA9IGNvbXBpbGVkRmlsdGVyLnNwbGl0KFwiICBcIikuam9pbihcIiBcIik7XG5cblxuICAgIGxldCBjdXN0b21JbnB1dFdpZHRoLCBjdXN0b21JbnB1dERpc3BsYXk7XG4gICAgaWYoIXRoaXMucHJvcHMuc2VhcmNoVGVybS5sZW5ndGgpIHtcbiAgICAgIGN1c3RvbUlucHV0V2lkdGggPSAhY29tcGlsZWRGaWx0ZXIudHJpbSgpID8gXCIzNjBweFwiIDogXCIwXCJcbiAgICB9IGVsc2Uge1xuICAgICAgY3VzdG9tSW5wdXRXaWR0aCA9ICgodGhpcy5wcm9wcy5zZWFyY2hUZXJtLmxlbmd0aCArIDEpICogOCkgKyAncHgnO1xuICAgIH07XG5cbiAgICBpZighY29tcGlsZWRGaWx0ZXIudHJpbSgpKXtcbiAgICAgIGN1c3RvbUlucHV0RGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIGxldCBwbGFjZWhvbGRlciwgYXBvc3Ryb3BoZTtcbiAgICBpZighdGhpcy5wcm9wcy5zZWFyY2hUZXJtICYmICFjb21waWxlZEZpbHRlci50cmltKCkpe1xuICAgICAgcGxhY2Vob2xkZXIgPSBcIlNlYXJjaCBieSB2ZWhpY2xlLCB0b3BpYywga2V5d29yZCBvciBjb250ZW50IHRpdGxlLi4uXCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnNlYXJjaFRlcm0pe1xuICAgICAgYXBvc3Ryb3BoZSA9XCJcXFwiXCI7XG4gICAgfTtcblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSk9PnRoaXMub25TdWJtaXQoZSl9PlxuICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PnRoaXMuc2VhcmNoSW5wdXQuZm9jdXMoKX0gY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWlubmVyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgey8qIFRlbXBvcmFyeSB1c2Ugb2YgU2VhcmNoIEljb24gKi99XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cucGljcG5nLmNvbS9pbWFnZXMvc21hbGwvbWFnbmlmeWluZy1nbGFzcy1zZWFyY2gtbG91cGUtaW1hZ2UtZG93bmxvYWQtNDk4NjNcIiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtaWNvbiBtYWduaWZ5aW5nLWdsYXNzXCIvPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAge2Fwb3N0cm9waGV9XG4gICAgICAgICAgICAgIHsvKiBGaXJzdCBJbnB1dCBpcyB0aGUgc3RhbmRhcmQgdGV4dCB0aGF0IHVzZXJzIGNvdWxkIHJlYWQgYW5kIHR5cGUgaW4gKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICB0ZXh0PVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBpZD1cInNlYXJjaC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICByZWY9eyhpbnB1dCkgPT4ge3RoaXMuc2VhcmNoSW5wdXQgPSBpbnB1dH19XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0ge3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCk9PnRoaXMub25IYW5kbGVJbnB1dENoYW5nZShldmVudCl9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGlsZWRRdWVyeX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge2Fwb3N0cm9waGV9XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItaW5wdXRcIj57Y29tcGlsZWRGaWx0ZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHAgb25DbGljaz17KGUpPT50aGlzLm9uU3VibWl0KGUpfSBjbGFzc05hbWU9XCJzYXZlLXNlYXJjaFwiPlNhdmU8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIHsvKiBTVFlMSU5HICovfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWFnbmlmeWluZy1nbGFzcyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW46IDAgMTZweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXg6IDEgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlucHV0LXdyYXBwZXIge1xuICAgICAgICAgICAgZmxleDogMSA4MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCA0cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCA0cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggNHB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbnB1dC1pbm5lci13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAvLyBmbGV4OiAxO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaC1pY29uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICAgICAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAke2N1c3RvbUlucHV0V2lkdGh9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5maWx0ZXItaW5wdXQge1xuICAgICAgICAgICAgZGlzcGxheTogJHtjdXN0b21JbnB1dERpc3BsYXl9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIC8vIGZsZXg6IDE7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2F2ZS1zZWFyY2gge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNjQgMTAyIDE0OSk7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig2NCAxMDIgMTQ5KTtcbiAgICAgICAgICAgIGZvbnQ6IDYwMCAwLjg3NWVtIHN5c3RlbS11aTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTE2cHggMHB4IDE1cHggLTNweCByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAtMTZweCAwcHggMTVweCAtM3B4IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAtMTZweCAwcHggMTVweCAtM3B4IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PiAgICAgIFxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICBsZXQgeyBzZWFyY2hUZXJtLCBmaWx0ZXJlZFN0YXR1cywgZmlsdGVyZWRDb250ZW50VHlwZSwgZmlsdGVyZWRUb3BpYyB9ID0gc3RhdGUuc2VhcmNoO1xuICByZXR1cm4gKHtcbiAgc2VhcmNoVGVybSxcbiAgZmlsdGVyZWRTdGF0dXMsXG4gIGZpbHRlcmVkQ29udGVudFR5cGUsXG4gIGZpbHRlcmVkVG9waWMsXG4gIGZpbHRlcmVkU3RhdHVzLFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNlYXJjaFNlY29uZGFyeSk7Il19 */\n/*@ sourceURL=components/SearchSecondary.js */',
          dynamic: [customInputWidth, customInputDisplay]
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return SearchSecondary;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  var _state$search = state.search,
      searchTerm = _state$search.searchTerm,
      filteredStatus = _state$search.filteredStatus,
      filteredContentType = _state$search.filteredContentType,
      filteredTopic = _state$search.filteredTopic;

  return _defineProperty({
    searchTerm: searchTerm,
    filteredStatus: filteredStatus,
    filteredContentType: filteredContentType,
    filteredTopic: filteredTopic
  }, 'filteredStatus', filteredStatus);
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps)(SearchSecondary);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SearchSecondary, 'SearchSecondary', '/Users/eddieyao/Desktop/gp_draft/components/SearchSecondary.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/eddieyao/Desktop/gp_draft/components/SearchSecondary.js');
  reactHotLoader.register(_default, 'default', '/Users/eddieyao/Desktop/gp_draft/components/SearchSecondary.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/autosize-input/index.js":
/***/ (function(module, exports) {

var GHOST_ELEMENT_ID = '__autosizeInputGhost'

var characterEntities = {
  ' ': 'nbsp',
  '<': 'lt',
  '>': 'gt'
}
function mapSpecialCharacterToCharacterEntity (specialCharacter) {
  return '&' + characterEntities[specialCharacter] + ';'
}
function escapeSpecialCharacters (string) {
  return string.replace(/\s|<|>/g, mapSpecialCharacterToCharacterEntity)
}

// Create `ghostElement`, with inline styles to hide it and ensure that the text is all
// on a single line.
function createGhostElement () {
  var ghostElement = document.createElement('div')
  ghostElement.id = GHOST_ELEMENT_ID
  ghostElement.style.cssText =
    'display:inline-block;height:0;overflow:hidden;position:absolute;top:0;visibility:hidden;white-space:nowrap;'
  document.body.appendChild(ghostElement)
  return ghostElement
}

module.exports = function (element, options) {
  var elementStyle = window.getComputedStyle(element)
  // prettier-ignore
  var elementCssText = 'box-sizing:' + elementStyle.boxSizing +
                      ';border-left:' + elementStyle.borderLeftWidth + ' solid red' +
                      ';border-right:' + elementStyle.borderRightWidth + ' solid red' +
                      ';font-family:' + elementStyle.fontFamily +
                      ';font-feature-settings:' + elementStyle.fontFeatureSettings +
                      ';font-kerning:' + elementStyle.fontKerning +
                      ';font-size:' + elementStyle.fontSize +
                      ';font-stretch:' + elementStyle.fontStretch +
                      ';font-style:' + elementStyle.fontStyle +
                      ';font-variant:' + elementStyle.fontVariant +
                      ';font-variant-caps:' + elementStyle.fontVariantCaps +
                      ';font-variant-ligatures:' + elementStyle.fontVariantLigatures +
                      ';font-variant-numeric:' + elementStyle.fontVariantNumeric +
                      ';font-weight:' + elementStyle.fontWeight +
                      ';letter-spacing:' + elementStyle.letterSpacing +
                      ';margin-left:' + elementStyle.marginLeft +
                      ';margin-right:' + elementStyle.marginRight +
                      ';padding-left:' + elementStyle.paddingLeft +
                      ';padding-right:' + elementStyle.paddingRight +
                      ';text-indent:' + elementStyle.textIndent +
                      ';text-transform:' + elementStyle.textTransform

  // Assigns an appropriate width to the given `element` based on its contents.
  function setWidth () {
    var string = element.value || element.getAttribute('placeholder') || ''
    // Check if the `ghostElement` exists. If no, create it.
    var ghostElement =
      document.getElementById(GHOST_ELEMENT_ID) || createGhostElement()
    // Copy all width-affecting styles to the `ghostElement`.
    ghostElement.style.cssText += elementCssText
    ghostElement.innerHTML = escapeSpecialCharacters(string)
    // Copy the width of `ghostElement` to `element`.
    var width = window.getComputedStyle(ghostElement).width
    element.style.width = width
    return width
  }

  element.addEventListener('input', setWidth)

  var width = setWidth()

  // Set `min-width` only if `options.minWidth` was set, and only if the initial
  // width is non-zero.
  if (options && options.minWidth && width !== '0px') {
    element.style.minWidth = width
  }

  // Return a function for unbinding the event listener and removing the `ghostElement`.
  return function () {
    element.removeEventListener('input', setWidth)
    var ghostElement = document.getElementById(GHOST_ELEMENT_ID)
    if (ghostElement) {
      ghostElement.parentNode.removeChild(ghostElement)
    }
  }
}


/***/ })

})
//# sourceMappingURL=5.3a234ecade18b57b2a29.hot-update.js.map