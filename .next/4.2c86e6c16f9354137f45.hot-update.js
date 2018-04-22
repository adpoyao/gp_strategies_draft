webpackHotUpdate(4,{

/***/ "./components/SearchPrimary.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PrimaryButton__ = __webpack_require__("./components/PrimaryButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SearchDropdown__ = __webpack_require__("./components/SearchDropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_search__ = __webpack_require__("./actions/search.js");
var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/SearchPrimary.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var SearchPrimary = function (_Component) {
  _inherits(SearchPrimary, _Component);

  function SearchPrimary(props) {
    _classCallCheck(this, SearchPrimary);

    var _this = _possibleConstructorReturn(this, (SearchPrimary.__proto__ || Object.getPrototypeOf(SearchPrimary)).call(this, props));

    _this.onSavedSearchClick = function () {
      _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__actions_search__["i" /* toggleSavedSearch */])(!_this.props.savedSearch));
    };

    _this.state = {
      name: '',
      predictiveInput: '',
      debouncedSearch: ''
    };
    return _this;
  }

  _createClass(SearchPrimary, [{
    key: 'onHandleInputChange',
    value: function onHandleInputChange(event) {
      var _this2 = this;

      event.persist();
      this.setState({ name: event.target.value });
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__actions_search__["j" /* updateSearchTerm */])(event.target.value));
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__actions_search__["i" /* toggleSavedSearch */])(false));

      // Predictive search
      // XX: Predictive Search happens here. Hard coded as Elantra for now.
      var predictiveOutput = "Elantra";
      if (event.target.value === "") {
        this.setState({ predictiveInput: "" });
      } else if (predictiveOutput.toLowerCase().indexOf(event.target.value.toLowerCase()) == 0) {
        var currentLength = event.target.value.length;
        this.setState({ predictiveInput: event.target.value.toString() + predictiveOutput.substring(currentLength) });
      } else {
        // XX: Make another call for data here.
        this.setState({ predictiveInput: "" });
      }

      // Debounces every 0.5 second to prevent flooding of API request
      _.debounce(function (event) {
        _this2.setState({ debouncedSearch: _this2.state.name });
      }, 500)(event);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var searchDropdown = void 0;
      if (this.props.savedSearch || this.state.debouncedSearch && this.state.debouncedSearch.length > 1 && this.state.name.length > 0) {
        searchDropdown = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__SearchDropdown__["a" /* default */], { searchTerm: this.state.debouncedSearch,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        });
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-1301510827' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'form',
          {
            className: 'jsx-1301510827',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-1301510827' + ' ' + 'input-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-1301510827' + ' ' + 'input-inner-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 65
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863',
                className: 'jsx-1301510827' + ' ' + 'search-icon magnifying-glass',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
                }
              }),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { id: 'search-div', className: 'jsx-1301510827',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
                  type: 'text',
                  id: 'background-input'
                  // onChange={(event)=>this.onHandleInputChange(event)}
                  , value: this.state.predictiveInput,
                  className: 'jsx-1301510827',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                  }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
                  text: 'text',
                  id: 'search',
                  placeholder: 'Search by vehicle, topic, keyword or content title...',
                  onChange: function onChange(event) {
                    return _this3.onHandleInputChange(event);
                  },
                  value: this.state.name,
                  className: 'jsx-1301510827',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-1301510827' + ' ' + 'mobile-search-btn-wrapper',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863',
                  className: 'jsx-1301510827' + ' ' + 'mobile-search-button magnifying-glass',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                  }
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'p',
              { onClick: function onClick() {
                  return _this3.onSavedSearchClick();
                }, className: 'jsx-1301510827' + ' ' + 'saved-searches',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 92
                }
              },
              'Saved Searches'
            )
          )
        ),
        searchDropdown,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1301510827',
          css: '.magnifying-glass.jsx-1301510827{max-width:24px;max-height:14px;width:auto;height:auto;margin:0 16px;display:none;}form.jsx-1301510827{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.input-wrapper.jsx-1301510827{-webkit-flex:1 80%;-ms-flex:1 80%;flex:1 80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:64px;max-width:600px;background:white;border-radius:4px;}.input-inner-wrapper.jsx-1301510827{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#search-div.jsx-1301510827{position:relative;width:100%;}#background-input.jsx-1301510827{position:absolute;width:100%;color:rgb(171,171,171);}#search.jsx-1301510827{position:relative;background:transparent;width:100%;}input.jsx-1301510827{-webkit-flex:1;-ms-flex:1;flex:1;border:none;outline:none;font-size:1em;color:black;padding:0 0 0 16px;}.jsx-1301510827::-webkit-input-placeholder{color:rgb(171,171,171);opacity:1;}.jsx-1301510827::-moz-placeholder{color:rgb(171,171,171);opacity:1;}.jsx-1301510827:-ms-input-placeholder{color:rgb(171,171,171);opacity:1;}.jsx-1301510827::placeholder{color:rgb(171,171,171);opacity:1;}.jsx-1301510827:-ms-input-placeholder{color:rgb(171,171,171);}.jsx-1301510827::-ms-input-placeholder{color:rgb(171,171,171);}.saved-searches.jsx-1301510827{display:none;position:relative;}.mobile-search-button.jsx-1301510827{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:8px;}.mobile-search-btn-wrapper.jsx-1301510827{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:40px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);-moz-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);}@media all and (min-width:376px){.search-icon.jsx-1301510827{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 12px;}input.jsx-1301510827{padding:0;}.mobile-search-button.jsx-1301510827{display:none;}.saved-searches.jsx-1301510827{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:rgb(64 102 149);margin-right:24px;padding:5px;min-width:61px;border-bottom:1px solid rgb(64 102 149);font:600 0.938em system-ui;-webkit-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);-moz-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);cursor:pointer;}.input-wrapper.jsx-1301510827{margin-right:32px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoUHJpbWFyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtR29CLEFBTTRCLEFBUUYsQUFHRixBQVdFLEFBTUssQUFJQSxBQU1BLEFBTVgsQUFTa0IsQUFJRSxBQUdBLEFBR2QsQUFJQSxBQUtBLEFBU0UsQUFJSCxBQUdHLEFBR0EsQUFhSyxVQWxCcEIsR0F0QmtCLEFBeUJsQixFQXhGZ0IsR0E0QkwsQUFJQSxBQU1ZLEFBa0V2QixLQW5EVSxBQUlaLEFBR0EsTUEvQkEsQUFJMkIsRUFoQ2QsQUErRGIsRUFwQmMsQUFVZCxRQWZhLENBckNDLEdBU0MsQUFrQ0EsT0FWZixBQUtBLEVBckNnQixJQTJDQSxVQTFDRCxJQTJDRCxFQXZDZCxBQWNTLEFBNkNVLEFBS0wsQUFTSSxBQVVRLE9BdEYxQixHQTRDcUIsRUF3QkEsRUFTbkIsR0FiRixLQXVCc0IsT0ExQ3RCLElBM0JxQixPQXNFTCxLQWpGTyxPQWtGSixlQUN5QixzQ0FyQmlCLEVBc0I5QixhQW5GVixNQVdyQixRQXlFK0QsOEJBdEJMLDZCQXVCRSxvQkFwRjVCLE9BOERxQiw2QkF1QkUsc0JBdEJ2RCw2QkF1Qm1CLGVBQ2pCLGFBdEZZLFlBQ0ksZ0JBQ0MsaUJBQ0Msa0JBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHMvU2VhcmNoUHJpbWFyeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgUHJpbWFyeUJ1dHRvbiBmcm9tICcuL1ByaW1hcnlCdXR0b24nO1xuaW1wb3J0IFNlYXJjaERyb3Bkb3duIGZyb20gJy4vU2VhcmNoRHJvcGRvd24nO1xuIFxuaW1wb3J0IHsgdXBkYXRlU2VhcmNoVGVybSwgdG9nZ2xlU2F2ZWRTZWFyY2ggfSBmcm9tICcuLi9hY3Rpb25zL3NlYXJjaCc7XG5cbmNsYXNzIFNlYXJjaFByaW1hcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7IFxuICAgICAgbmFtZTogJycsXG4gICAgICBwcmVkaWN0aXZlSW5wdXQ6ICcnLFxuICAgICAgZGVib3VuY2VkU2VhcmNoOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgb25IYW5kbGVJbnB1dENoYW5nZShldmVudCl7XG4gICAgZXZlbnQucGVyc2lzdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe25hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlU2VhcmNoVGVybShldmVudC50YXJnZXQudmFsdWUpKTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHRvZ2dsZVNhdmVkU2VhcmNoKGZhbHNlKSk7XG5cbiAgICAvLyBQcmVkaWN0aXZlIHNlYXJjaFxuICAgIC8vIFhYOiBQcmVkaWN0aXZlIFNlYXJjaCBoYXBwZW5zIGhlcmUuIEhhcmQgY29kZWQgYXMgRWxhbnRyYSBmb3Igbm93LlxuICAgIGxldCBwcmVkaWN0aXZlT3V0cHV0ID0gXCJFbGFudHJhXCI7XG4gICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtwcmVkaWN0aXZlSW5wdXQ6IFwiXCJ9KTtcbiAgICB9IGVsc2UgaWYgKHByZWRpY3RpdmVPdXRwdXQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKSA9PSAwKXtcbiAgICAgIGxldCBjdXJyZW50TGVuZ3RoID0gZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aDtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ByZWRpY3RpdmVJbnB1dDogZXZlbnQudGFyZ2V0LnZhbHVlLnRvU3RyaW5nKCkgKyBwcmVkaWN0aXZlT3V0cHV0LnN1YnN0cmluZyhjdXJyZW50TGVuZ3RoKX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBYWDogTWFrZSBhbm90aGVyIGNhbGwgZm9yIGRhdGEgaGVyZS5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ByZWRpY3RpdmVJbnB1dDogXCJcIn0pO1xuICAgIH1cblxuICAgIC8vIERlYm91bmNlcyBldmVyeSAwLjUgc2Vjb25kIHRvIHByZXZlbnQgZmxvb2Rpbmcgb2YgQVBJIHJlcXVlc3RcbiAgICBfLmRlYm91bmNlKChldmVudCk9PntcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2RlYm91bmNlZFNlYXJjaDogdGhpcy5zdGF0ZS5uYW1lfSk7XG4gICAgfSwgNTAwKShldmVudCk7XG4gIH07XG5cbiAgb25TYXZlZFNlYXJjaENsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godG9nZ2xlU2F2ZWRTZWFyY2goIXRoaXMucHJvcHMuc2F2ZWRTZWFyY2gpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc2VhcmNoRHJvcGRvd247XG4gICAgaWYodGhpcy5wcm9wcy5zYXZlZFNlYXJjaCB8fCB0aGlzLnN0YXRlLmRlYm91bmNlZFNlYXJjaCAmJiB0aGlzLnN0YXRlLmRlYm91bmNlZFNlYXJjaC5sZW5ndGggPiAxICYmIHRoaXMuc3RhdGUubmFtZS5sZW5ndGggPiAwKXtcbiAgICAgIHNlYXJjaERyb3Bkb3duID0gPFNlYXJjaERyb3Bkb3duIHNlYXJjaFRlcm09e3RoaXMuc3RhdGUuZGVib3VuY2VkU2VhcmNofSBcbiAgICAgIC8+XG4gICAgfTtcblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxmb3JtIFxuICAgICAgICAgIC8vIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0LmJpbmQodGhpcyl9XG4gICAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1pbm5lci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIHsvKiBUZW1wb3JhcnkgdXNlIG9mIFNlYXJjaCBJY29uICovfVxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LnBpY3BuZy5jb20vaW1hZ2VzL3NtYWxsL21hZ25pZnlpbmctZ2xhc3Mtc2VhcmNoLWxvdXBlLWltYWdlLWRvd25sb2FkLTQ5ODYzXCIgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWljb24gbWFnbmlmeWluZy1nbGFzc1wiLz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJzZWFyY2gtZGl2XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJiYWNrZ3JvdW5kLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZXZlbnQpPT50aGlzLm9uSGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJlZGljdGl2ZUlucHV0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgdGV4dD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgdmVoaWNsZSwgdG9waWMsIGtleXdvcmQgb3IgY29udGVudCB0aXRsZS4uLlwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KT0+dGhpcy5vbkhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtc2VhcmNoLWJ0bi13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5waWNwbmcuY29tL2ltYWdlcy9zbWFsbC9tYWduaWZ5aW5nLWdsYXNzLXNlYXJjaC1sb3VwZS1pbWFnZS1kb3dubG9hZC00OTg2M1wiIFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9iaWxlLXNlYXJjaC1idXR0b24gbWFnbmlmeWluZy1nbGFzc1wiLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHAgb25DbGljaz17KCk9PnRoaXMub25TYXZlZFNlYXJjaENsaWNrKCl9IGNsYXNzTmFtZT1cInNhdmVkLXNlYXJjaGVzXCI+U2F2ZWQgU2VhcmNoZXM8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIHtzZWFyY2hEcm9wZG93bn1cblxuICAgICAgICB7LyogU1RZTElORyAqL31cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tYWduaWZ5aW5nLWdsYXNzIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjRweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgICBmbGV4OiAxIDgwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQtaW5uZXItd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI3NlYXJjaC1kaXYge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgICNiYWNrZ3JvdW5kLWlucHV0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgY29sb3I6IHJnYigxNzEsIDE3MSwgMTcxKTtcblxuICAgICAgICAgIH1cbiAgICAgICAgICAjc2VhcmNoIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIC8vWFg6IHRvdGFsIG9mIDQ4cHggZm9yIGxlZnQtcGFkZGluZ1xuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICAgICAgICAgICAgY29sb3I6IHJnYigxNzEsIDE3MSwgMTcxKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cbiAgICAgICAgICB9XG4gICAgICAgICAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTcxLCAxNzEsIDE3MSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cbiAgICAgICAgICAgICAgY29sb3I6IHJnYigxNzEsIDE3MSwgMTcxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNhdmVkLXNlYXJjaGVzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2JpbGUtc2VhcmNoLWJ1dHRvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vYmlsZS1zZWFyY2gtYnRuLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xNnB4IDBweCAxNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogLTE2cHggMHB4IDE1cHggLTNweCByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogLTE2cHggMHB4IDE1cHggLTNweCByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgLnNlYXJjaC1pY29uIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9iaWxlLXNlYXJjaC1idXR0b24ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNhdmVkLXNlYXJjaGVzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYig2NCAxMDIgMTQ5KTtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogNjFweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig2NCAxMDIgMTQ5KTtcbiAgICAgICAgICAgICAgZm9udDogNjAwIDAuOTM4ZW0gc3lzdGVtLXVpO1xuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xNnB4IDBweCAxNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAtMTZweCAwcHggMTVweCAtM3B4IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xNnB4IDBweCAxNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmlucHV0LXdyYXBwZXIge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+ICAgICAgXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBzYXZlZFNlYXJjaDogc3RhdGUuc2VhcmNoLnNhdmVkU2VhcmNoVG9nZ2xlLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNlYXJjaFByaW1hcnkpOyJdfQ== */\n/*@ sourceURL=components/SearchPrimary.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return SearchPrimary;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    savedSearch: state.search.savedSearchToggle
  };
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps)(SearchPrimary);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SearchPrimary, 'SearchPrimary', '/Users/eddieyao/Desktop/gp_draft/components/SearchPrimary.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/eddieyao/Desktop/gp_draft/components/SearchPrimary.js');
  reactHotLoader.register(_default, 'default', '/Users/eddieyao/Desktop/gp_draft/components/SearchPrimary.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.2c86e6c16f9354137f45.hot-update.js.map