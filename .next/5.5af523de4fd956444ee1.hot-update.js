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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_search__ = __webpack_require__("./actions/search.js");
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

  function SearchSecondary(props) {
    _classCallCheck(this, SearchSecondary);

    return _possibleConstructorReturn(this, (SearchSecondary.__proto__ || Object.getPrototypeOf(SearchSecondary)).call(this, props));
  }

  _createClass(SearchSecondary, [{
    key: 'onSubmit',
    value: function onSubmit(e) {
      e.preventDefault();
    }
  }, {
    key: 'onHandleInputChange',
    value: function onHandleInputChange(event) {
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__actions_search__["j" /* updateSearchTerm */])(event.target.value));
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

      var placeholder = void 0,
          apostrophe = void 0;
      if (!this.props.searchTerm) {
        placeholder = "Search by vehicle, topic, keyword or content title...";
      } else {
        apostrophe = "\"";
      };

      var compiledQuery = this.toString(this.props.searchTerm);
      var compiledFilter = this.toIsFilter(this.props.filteredStatus) + " " + this.toIsFilter(this.props.filteredContentType) + " " + this.toInFilter(this.props.filteredTopic);
      compiledFilter = compiledFilter.split("  ").join(" ");

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-3787996303' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'form',
          { onSubmit: function onSubmit(e) {
              return _this2.onSubmit(e);
            }, className: 'jsx-3787996303',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-3787996303' + ' ' + 'input-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-3787996303' + ' ' + 'input-inner-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 64
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863',
                className: 'jsx-3787996303' + ' ' + 'search-icon magnifying-glass',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                }
              }),
              apostrophe,
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
                text: 'text',

                placeholder: placeholder,
                onChange: function onChange(event) {
                  return _this2.onHandleInputChange(event);
                },

                value: compiledQuery,
                className: 'jsx-3787996303' + ' ' + 'search-input',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                }
              }),
              apostrophe,
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { onClick: function onClick() {
                    return console.log('hi');
                  }, className: 'jsx-3787996303',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
                  text: 'text',

                  disabled: true,
                  value: compiledFilter,
                  className: 'jsx-3787996303' + ' ' + 'filter-input',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                  }
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'p',
              { onClick: function onClick(e) {
                  return _this2.onSubmit(e);
                }, className: 'jsx-3787996303' + ' ' + 'save-search',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 92
                }
              },
              'Save'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3787996303',
          css: '.container.jsx-3787996303{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:16px 0;}.magnifying-glass.jsx-3787996303{max-width:24px;max-height:14px;width:auto;height:auto;margin:0 16px;display:none;}form.jsx-3787996303{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 auto;-ms-flex:1 auto;flex:1 auto;}.input-wrapper.jsx-3787996303{-webkit-flex:1 80%;-ms-flex:1 80%;flex:1 80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:64px;max-width:600px;background:white;border-radius:4px;-webkit-box-shadow:0px 10px 20px 4px rgba(0,0,0,0.15);-moz-box-shadow:0px 10px 20px 4px rgba(0,0,0,0.15);box-shadow:0px 10px 20px 4px rgba(0,0,0,0.15);}.input-inner-wrapper.jsx-3787996303{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.search-icon.jsx-3787996303{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 12px;}input.jsx-3787996303{padding:0;border:none;outline:none;font-size:1em;color:black;}.save-search.jsx-3787996303{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:rgb(64 102 149);margin-right:24px;padding-bottom:4px;min-width:32px;border-bottom:1px solid rgb(64 102 149);font:600 0.875em system-ui;-webkit-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);-moz-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);cursor:pointer;}@media all and (min-width:376px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoU2Vjb25kYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHb0IsQUFHd0IsQUFNSSxBQVFGLEFBSUYsQUFjRSxBQUtBLEFBS0gsQUFPUSxVQU5OLENBMUNDLElBTUcsR0EyQ0gsSUFOQSxTQXBDRixJQXFDRyxPQXBDRixHQVVDLElBMkJELEtBcENFLE9BcUNoQixPQXBDZSxNQUlELEFBbUJPLEFBSUwsT0ExQmhCLElBVnlCLEdBcUN6QixJQVl3QixzQkFDSixLQWhDRyxHQUp2QixVQXFDcUIsbUJBQ0osZUFDeUIsQ0FwQjFDLGlCQWhDZ0IsVUFrQkssSUFqQnJCLFFBb0Q2QiwyQkFDZ0Msc0RBbkM3QixLQW9DMEIsd0RBQ0wsbURBQ2xDLEdBckNMLFlBQ0ksQUFxQ2xCLGdCQXBDbUIsaUJBQ0Msa0JBQ29DLHNEQUNILG1EQUNMLDhDQUNoRCIsImZpbGUiOiJjb21wb25lbnRzL1NlYXJjaFNlY29uZGFyeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyB1cGRhdGVTZWFyY2hUZXJtIH0gZnJvbSAnLi4vYWN0aW9ucy9zZWFyY2gnO1xuXG5jbGFzcyBTZWFyY2hTZWNvbmRhcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gIH1cblxuICBvblN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgb25IYW5kbGVJbnB1dENoYW5nZShldmVudCl7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIHRvU3RyaW5nKHF1ZXJ5KXtcbiAgICBpZihxdWVyeSl7XG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfTtcblxuICB0b0lzRmlsdGVyKGFycmF5KXtcbiAgICBpZihhcnJheSAmJiBhcnJheS5sZW5ndGggPiAwKXtcbiAgICAgIHJldHVybiBgaXM6ICgke2FycmF5LnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLmpvaW4oXCIsIFwiKX0pYFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfTtcbiAgfTtcblxuICB0b0luRmlsdGVyKGFycmF5KXtcbiAgICBpZihhcnJheSAmJiBhcnJheS5sZW5ndGggPiAwKXtcbiAgICAgIHJldHVybiBgaW46ICgke2FycmF5LnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLmpvaW4oXCIsIFwiKX0pYFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHBsYWNlaG9sZGVyLCBhcG9zdHJvcGhlO1xuICAgIGlmKCF0aGlzLnByb3BzLnNlYXJjaFRlcm0pe1xuICAgICAgcGxhY2Vob2xkZXIgPSBcIlNlYXJjaCBieSB2ZWhpY2xlLCB0b3BpYywga2V5d29yZCBvciBjb250ZW50IHRpdGxlLi4uXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwb3N0cm9waGUgPVwiXFxcIlwiO1xuICAgIH07XG5cbiAgICBsZXQgY29tcGlsZWRRdWVyeSA9IHRoaXMudG9TdHJpbmcodGhpcy5wcm9wcy5zZWFyY2hUZXJtKTtcbiAgICBsZXQgY29tcGlsZWRGaWx0ZXIgPSB0aGlzLnRvSXNGaWx0ZXIodGhpcy5wcm9wcy5maWx0ZXJlZFN0YXR1cykgKyBcIiBcIiArIHRoaXMudG9Jc0ZpbHRlcih0aGlzLnByb3BzLmZpbHRlcmVkQ29udGVudFR5cGUpICsgXCIgXCIgKyB0aGlzLnRvSW5GaWx0ZXIodGhpcy5wcm9wcy5maWx0ZXJlZFRvcGljKTtcbiAgICBjb21waWxlZEZpbHRlciA9IGNvbXBpbGVkRmlsdGVyLnNwbGl0KFwiICBcIikuam9pbihcIiBcIik7XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpPT50aGlzLm9uU3VibWl0KGUpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1pbm5lci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIHsvKiBUZW1wb3JhcnkgdXNlIG9mIFNlYXJjaCBJY29uICovfVxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LnBpY3BuZy5jb20vaW1hZ2VzL3NtYWxsL21hZ25pZnlpbmctZ2xhc3Mtc2VhcmNoLWxvdXBlLWltYWdlLWRvd25sb2FkLTQ5ODYzXCIgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWljb24gbWFnbmlmeWluZy1nbGFzc1wiLz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHthcG9zdHJvcGhlfVxuICAgICAgICAgICAgICB7LyogRmlyc3QgSW5wdXQgaXMgdGhlIHN0YW5kYXJkIHRleHQgdGhhdCB1c2VycyBjb3VsZCByZWFkIGFuZCB0eXBlIGluICovfVxuICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgdGV4dD1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9IHtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KT0+dGhpcy5vbkhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KX1cblxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb21waWxlZFF1ZXJ5fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7YXBvc3Ryb3BoZX1cblxuICAgICAgICAgICAgICB7LyogU2Vjb25kIElucHV0IGlzIHRvIGRpc3BsYXkgY2hlY2tlZCBmaWx0ZXJzICovfVxuICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT5jb25zb2xlLmxvZygnaGknKX0+XG4gICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgIHRleHQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbXBpbGVkRmlsdGVyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxwIG9uQ2xpY2s9eyhlKT0+dGhpcy5vblN1Ym1pdChlKX0gY2xhc3NOYW1lPVwic2F2ZS1zZWFyY2hcIj5TYXZlPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICB7LyogU1RZTElORyAqL31cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1hZ25pZnlpbmctZ2xhc3Mge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTRweDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4OiAxIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbnB1dC13cmFwcGVyIHtcbiAgICAgICAgICAgIGZsZXg6IDEgODAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggNHB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggNHB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IDRweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQtaW5uZXItd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgLy8gZmxleDogMTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2gtaWNvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIDEycHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIC8vIGZsZXg6IDE7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2F2ZS1zZWFyY2gge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNjQgMTAyIDE0OSk7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig2NCAxMDIgMTQ5KTtcbiAgICAgICAgICAgIGZvbnQ6IDYwMCAwLjg3NWVtIHN5c3RlbS11aTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTE2cHggMHB4IDE1cHggLTNweCByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAtMTZweCAwcHggMTVweCAtM3B4IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAtMTZweCAwcHggMTVweCAtM3B4IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PiAgICAgIFxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICBsZXQgeyBzZWFyY2hUZXJtLCBmaWx0ZXJlZFN0YXR1cywgZmlsdGVyZWRDb250ZW50VHlwZSwgZmlsdGVyZWRUb3BpYyB9ID0gc3RhdGUuc2VhcmNoO1xuICByZXR1cm4gKHtcbiAgc2VhcmNoVGVybSxcbiAgZmlsdGVyZWRTdGF0dXMsXG4gIGZpbHRlcmVkQ29udGVudFR5cGUsXG4gIGZpbHRlcmVkVG9waWMsXG4gIGZpbHRlcmVkU3RhdHVzLFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNlYXJjaFNlY29uZGFyeSk7Il19 */\n/*@ sourceURL=components/SearchSecondary.js */'
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
//# sourceMappingURL=5.5af523de4fd956444ee1.hot-update.js.map