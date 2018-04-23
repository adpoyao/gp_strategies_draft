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
      // autosizeInput(document.querySelector('#search-input'))
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(e) {
      e.preventDefault();
      console.log('Keydown: Saved Search.');
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
        return '"' + query + '"';
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
            lineNumber: 74
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'form',
          { onSubmit: function onSubmit(e) {
              return _this2.onSubmit(e);
            }, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1218685664', [customInputWidth, customInputDisplay]]]),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { onClick: function onClick() {
                return _this2.searchInput.focus();
              }, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1218685664', [customInputWidth, customInputDisplay]]]) + ' ' + 'input-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 76
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1218685664', [customInputWidth, customInputDisplay]]]) + ' ' + 'input-inner-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 78
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863',
                className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1218685664', [customInputWidth, customInputDisplay]]]) + ' ' + 'search-icon magnifying-glass',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                }
              }),
              apostrophe,
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1218685664', [customInputWidth, customInputDisplay]]]) + ' ' + 'search-input-wrapper',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
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
                    lineNumber: 86
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
                    lineNumber: 100
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
                  lineNumber: 104
                }
              },
              'Save'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1218685664',
          css: '.container.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:16px 0;}.magnifying-glass.__jsx-style-dynamic-selector{max-width:24px;max-height:14px;width:auto;height:auto;margin:0 16px;display:none;}form.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 auto;-ms-flex:1 auto;flex:1 auto;}.input-wrapper.__jsx-style-dynamic-selector{-webkit-flex:1 80%;-ms-flex:1 80%;flex:1 80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:64px;max-width:600px;background:white;border-radius:4px;-webkit-box-shadow:0px 10px 20px 4px rgba(0,0,0,0.15);-moz-box-shadow:0px 10px 20px 4px rgba(0,0,0,0.15);box-shadow:0px 10px 20px 4px rgba(0,0,0,0.15);}.input-inner-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.search-icon.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 12px;}.filter-input.__jsx-style-dynamic-selector{display:' + customInputDisplay + ';}input.__jsx-style-dynamic-selector{padding:0;border:none;outline:none;font-size:1em;color:black;}.save-search.__jsx-style-dynamic-selector{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:rgb(64 102 149);margin-right:24px;padding-bottom:4px;min-width:32px;border-bottom:1px solid rgb(64 102 149);font:600 0.875em system-ui;-webkit-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);-moz-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);cursor:pointer;}@media all and (min-width:376px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoU2Vjb25kYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZHb0IsQUFHd0IsQUFNSSxBQVFGLEFBSUYsQUFjRSxBQUtBLEFBU2hCLEFBR2EsQUFPUSxVQU5OLENBakRDLElBTUcsR0FrREgsSUFOQSxTQTNDRixJQTRDRyxFQU5oQixLQXJDYyxHQVVDLElBa0NELEtBM0NFLE9BNENoQixPQTNDZSxNQUlELEFBbUJPLEFBSUwsT0ExQmhCLElBVnlCLEdBcUN6QixJQW1Cd0Isc0JBQ0osS0F2Q0csR0FKdkIsVUE0Q3FCLG1CQUNKLGVBQ3lCLENBM0IxQyxpQkFoQ2dCLFVBa0JLLElBakJyQixRQTJENkIsMkJBQ2dDLHNEQTFDN0IsS0EyQzBCLHdEQUNMLG1EQUNsQyxHQTVDTCxZQUNJLEFBNENsQixnQkEzQ21CLGlCQUNDLGtCQUNvQyxzREFDSCxtREFDTCw4Q0FDaEQiLCJmaWxlIjoiY29tcG9uZW50cy9TZWFyY2hTZWNvbmRhcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBhdXRvc2l6ZUlucHV0IGZyb20gJ2F1dG9zaXplLWlucHV0JztcblxuaW1wb3J0IHsgdXBkYXRlU2VhcmNoVGVybSB9IGZyb20gJy4uL2FjdGlvbnMvc2VhcmNoJztcblxuY2xhc3MgU2VhcmNoU2Vjb25kYXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gYXV0b3NpemVJbnB1dChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWlucHV0JykpXG4gIH1cblxuICBvblN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKCdLZXlkb3duOiBTYXZlZCBTZWFyY2guJyk7XG4gIH1cblxuICBvbkhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KXtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gIH07XG5cbiAgdG9TdHJpbmcocXVlcnkpe1xuICAgIGlmKHF1ZXJ5KXtcbiAgICAgIHJldHVybiBgXCIke3F1ZXJ5fVwiYFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9O1xuXG4gIHRvSXNGaWx0ZXIoYXJyYXkpe1xuICAgIGlmKGFycmF5ICYmIGFycmF5Lmxlbmd0aCA+IDApe1xuICAgICAgcmV0dXJuIGBpczogKCR7YXJyYXkudG9TdHJpbmcoKS5zcGxpdChcIixcIikuam9pbihcIiwgXCIpfSlgXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9O1xuICB9O1xuXG4gIHRvSW5GaWx0ZXIoYXJyYXkpe1xuICAgIGlmKGFycmF5ICYmIGFycmF5Lmxlbmd0aCA+IDApe1xuICAgICAgcmV0dXJuIGBpbjogKCR7YXJyYXkudG9TdHJpbmcoKS5zcGxpdChcIixcIikuam9pbihcIiwgXCIpfSlgXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9O1xuICB9O1xuXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBjb21waWxlZFF1ZXJ5ID0gdGhpcy50b1N0cmluZyh0aGlzLnByb3BzLnNlYXJjaFRlcm0pO1xuICAgIGxldCBjb21waWxlZEZpbHRlciA9IHRoaXMudG9Jc0ZpbHRlcih0aGlzLnByb3BzLmZpbHRlcmVkU3RhdHVzKSArIFwiIFwiICsgdGhpcy50b0lzRmlsdGVyKHRoaXMucHJvcHMuZmlsdGVyZWRDb250ZW50VHlwZSkgKyBcIiBcIiArIHRoaXMudG9JbkZpbHRlcih0aGlzLnByb3BzLmZpbHRlcmVkVG9waWMpO1xuICAgIGNvbXBpbGVkRmlsdGVyID0gY29tcGlsZWRGaWx0ZXIuc3BsaXQoXCIgIFwiKS5qb2luKFwiIFwiKTtcblxuXG4gICAgbGV0IGN1c3RvbUlucHV0V2lkdGgsIGN1c3RvbUlucHV0RGlzcGxheTtcbiAgICBpZighdGhpcy5wcm9wcy5zZWFyY2hUZXJtLmxlbmd0aCkge1xuICAgICAgY3VzdG9tSW5wdXRXaWR0aCA9ICFjb21waWxlZEZpbHRlci50cmltKCkgPyBcIjM2MHB4XCIgOiBcIjBcIlxuICAgIH0gZWxzZSB7XG4gICAgICBjdXN0b21JbnB1dFdpZHRoID0gKCh0aGlzLnByb3BzLnNlYXJjaFRlcm0ubGVuZ3RoICsgMSkgKiA4KSArICdweCc7XG4gICAgfTtcblxuICAgIGlmKCFjb21waWxlZEZpbHRlci50cmltKCkpe1xuICAgICAgY3VzdG9tSW5wdXREaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgbGV0IHBsYWNlaG9sZGVyLCBhcG9zdHJvcGhlO1xuICAgIGlmKCF0aGlzLnByb3BzLnNlYXJjaFRlcm0gJiYgIWNvbXBpbGVkRmlsdGVyLnRyaW0oKSl7XG4gICAgICBwbGFjZWhvbGRlciA9IFwiU2VhcmNoIGJ5IHZlaGljbGUsIHRvcGljLCBrZXl3b3JkIG9yIGNvbnRlbnQgdGl0bGUuLi5cIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuc2VhcmNoVGVybSl7XG4gICAgICBhcG9zdHJvcGhlID1cIlxcXCJcIjtcbiAgICB9O1xuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKT0+dGhpcy5vblN1Ym1pdChlKX0+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+dGhpcy5zZWFyY2hJbnB1dC5mb2N1cygpfSBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtaW5uZXItd3JhcHBlclwiPlxuICAgICAgICAgICAgICB7LyogVGVtcG9yYXJ5IHVzZSBvZiBTZWFyY2ggSWNvbiAqL31cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5waWNwbmcuY29tL2ltYWdlcy9zbWFsbC9tYWduaWZ5aW5nLWdsYXNzLXNlYXJjaC1sb3VwZS1pbWFnZS1kb3dubG9hZC00OTg2M1wiIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1pY29uIG1hZ25pZnlpbmctZ2xhc3NcIi8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB7YXBvc3Ryb3BoZX1cbiAgICAgICAgICAgICAgey8qIEZpcnN0IElucHV0IGlzIHRoZSBzdGFuZGFyZCB0ZXh0IHRoYXQgdXNlcnMgY291bGQgcmVhZCBhbmQgdHlwZSBpbiAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgIHRleHQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hJbnB1dFwiXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB7dGhpcy5zZWFyY2hJbnB1dCA9IGlucHV0fX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSB7cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KT0+dGhpcy5vbkhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb21waWxlZFF1ZXJ5fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7YXBvc3Ryb3BoZX1cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1pbnB1dFwiPntjb21waWxlZEZpbHRlcn08L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cCBvbkNsaWNrPXsoZSk9PnRoaXMub25TdWJtaXQoZSl9IGNsYXNzTmFtZT1cInNhdmUtc2VhcmNoXCI+U2F2ZTwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgey8qIFNUWUxJTkcgKi99XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tYWduaWZ5aW5nLWdsYXNzIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjRweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleDogMSBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgICBmbGV4OiAxIDgwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IDRweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IDRweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCA0cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlucHV0LWlubmVyLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIC8vIGZsZXg6IDE7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLWljb24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLWlucHV0IHtcbiAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgLy8gd2lkdGg6ICR7Y3VzdG9tSW5wdXRXaWR0aH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpbHRlci1pbnB1dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiAke2N1c3RvbUlucHV0RGlzcGxheX1cbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgLy8gZmxleDogMTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zYXZlLXNlYXJjaCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgY29sb3I6IHJnYig2NCAxMDIgMTQ5KTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDMycHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDY0IDEwMiAxNDkpO1xuICAgICAgICAgICAgZm9udDogNjAwIDAuODc1ZW0gc3lzdGVtLXVpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMTZweCAwcHggMTVweCAtM3B4IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IC0xNnB4IDBweCAxNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xNnB4IDBweCAxNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+ICAgICAgXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIGxldCB7IHNlYXJjaFRlcm0sIGZpbHRlcmVkU3RhdHVzLCBmaWx0ZXJlZENvbnRlbnRUeXBlLCBmaWx0ZXJlZFRvcGljIH0gPSBzdGF0ZS5zZWFyY2g7XG4gIHJldHVybiAoe1xuICBzZWFyY2hUZXJtLFxuICBmaWx0ZXJlZFN0YXR1cyxcbiAgZmlsdGVyZWRDb250ZW50VHlwZSxcbiAgZmlsdGVyZWRUb3BpYyxcbiAgZmlsdGVyZWRTdGF0dXMsXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2VhcmNoU2Vjb25kYXJ5KTsiXX0= */\n/*@ sourceURL=components/SearchSecondary.js */',
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

/***/ })

})
//# sourceMappingURL=5.4a216076286578a8660e.hot-update.js.map