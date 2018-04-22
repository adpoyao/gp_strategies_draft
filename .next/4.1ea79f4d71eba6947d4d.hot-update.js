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
    key: 'onSubmit',
    value: function onSubmit(e) {
      e.preventDefault();
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__actions_search__["j" /* updateSearchTerm */])(this.state.name));
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__actions_search__["i" /* toggleSavedSearch */])(false));
      __WEBPACK_IMPORTED_MODULE_4_next_router___default.a.push("/search-results");
    }
  }, {
    key: 'onHandleInputChange',
    value: function onHandleInputChange(event) {
      var _this2 = this;

      event.persist();
      this.setState({ name: event.target.value });
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
            lineNumber: 61
          }
        });
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-317536025' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'form',
          { onSubmit: this.onSubmit.bind(this), className: 'jsx-317536025',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-317536025' + ' ' + 'input-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-317536025' + ' ' + 'input-inner-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863',
                className: 'jsx-317536025' + ' ' + 'search-icon magnifying-glass',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                }
              }),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { id: 'search-div', className: 'jsx-317536025',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
                  type: 'text',
                  id: 'background-input'
                  // onChange={(event)=>this.onHandleInputChange(event)}
                  , value: this.state.predictiveInput,
                  className: 'jsx-317536025',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
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
                  className: 'jsx-317536025',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-317536025' + ' ' + 'mobile-search-btn-wrapper',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863',
                  className: 'jsx-317536025' + ' ' + 'mobile-search-button magnifying-glass',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                  }
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'p',
              { onClick: function onClick() {
                  return _this3.onSavedSearchClick();
                }, className: 'jsx-317536025' + ' ' + 'saved-searches',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 96
                }
              },
              'Saved Searches'
            )
          )
        ),
        searchDropdown,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '317536025',
          css: '.container.jsx-317536025{width:100%;}.magnifying-glass.jsx-317536025{max-width:24px;max-height:14px;width:auto;height:auto;margin:0 16px;display:none;}form.jsx-317536025{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.input-wrapper.jsx-317536025{-webkit-flex:1 80%;-ms-flex:1 80%;flex:1 80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:64px;max-width:600px;background:white;border-radius:4px;}.input-inner-wrapper.jsx-317536025{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#search-div.jsx-317536025{position:relative;width:100%;}#background-input.jsx-317536025{position:absolute;width:100%;color:rgb(171,171,171);}#search.jsx-317536025{position:relative;background:transparent;width:100%;}input.jsx-317536025{-webkit-flex:1;-ms-flex:1;flex:1;border:none;outline:none;font-size:1em;color:black;padding:0 0 0 16px;}.jsx-317536025::-webkit-input-placeholder{color:rgb(171,171,171);opacity:1;}.jsx-317536025::-moz-placeholder{color:rgb(171,171,171);opacity:1;}.jsx-317536025:-ms-input-placeholder{color:rgb(171,171,171);opacity:1;}.jsx-317536025::placeholder{color:rgb(171,171,171);opacity:1;}.jsx-317536025:-ms-input-placeholder{color:rgb(171,171,171);}.jsx-317536025::-ms-input-placeholder{color:rgb(171,171,171);}.saved-searches.jsx-317536025{display:none;position:relative;}.primary-search-button.jsx-317536025{display:none;}.mobile-search-button.jsx-317536025{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:8px;}.mobile-search-btn-wrapper.jsx-317536025{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:40px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);-moz-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);}@media all and (min-width:376px){.search-icon.jsx-317536025{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 12px;}input.jsx-317536025{padding:0;}.primary-search-button.jsx-317536025{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.mobile-search-button.jsx-317536025{display:none;}.saved-searches.jsx-317536025{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:rgb(64 102 149);margin-right:24px;padding:5px;min-width:61px;border-bottom:1px solid rgb(64 102 149);font:600 0.938em system-ui;-webkit-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);-moz-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);cursor:pointer;}.input-wrapper.jsx-317536025{margin-right:32px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoUHJpbWFyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyR29CLEFBR3dCLEFBR0ksQUFRRixBQUdGLEFBV0UsQUFNSyxBQUlBLEFBTUEsQUFNWCxBQVNrQixBQUlFLEFBR0EsQUFHZCxBQUlBLEFBR0EsQUFLQSxBQVNFLEFBSUgsQUFHRyxBQUdBLEFBR0EsQUFhSyxVQXJCcEIsQ0EzRkYsRUFrRW9CLEFBSXBCLEFBMkJFLEVBOUZnQixHQTRCTCxBQUlBLEFBTVksQUF3RXZCLEtBekRVLEFBSVosQUFHQSxNQS9CQSxBQUkyQixFQWhDZCxBQStEYixFQXBCYyxBQVVkLFFBZmEsQ0FyQ0MsR0FTQyxBQWtDQSxPQVZmLEFBS0EsRUFyQ2dCLElBMkNBLFVBMUNELElBMkNELEVBdkNkLEFBY1MsQUFnRFUsQUFLTCxBQVNJLEFBT2hCLEFBTXdCLE9BNUYxQixHQTRDcUIsRUEyQkEsRUFTbkIsR0FiRixLQTBCc0IsT0FoRHRCLElBM0JxQixPQTRFTCxLQXZGTyxPQXdGSixlQUN5QixzQ0F4QmlCLEVBeUI5QixhQXpGVixNQVdyQixRQStFK0QsOEJBekJMLDZCQTBCRSxvQkExRjVCLE9BaUVxQiw2QkEwQkUsc0JBekJ2RCw2QkEwQm1CLGVBQ2pCLGFBNUZZLFlBQ0ksZ0JBQ0MsaUJBQ0Msa0JBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHMvU2VhcmNoUHJpbWFyeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgUHJpbWFyeUJ1dHRvbiBmcm9tICcuL1ByaW1hcnlCdXR0b24nO1xuaW1wb3J0IFNlYXJjaERyb3Bkb3duIGZyb20gJy4vU2VhcmNoRHJvcGRvd24nO1xuIFxuaW1wb3J0IHsgdXBkYXRlU2VhcmNoVGVybSwgdG9nZ2xlU2F2ZWRTZWFyY2ggfSBmcm9tICcuLi9hY3Rpb25zL3NlYXJjaCc7XG5cbmNsYXNzIFNlYXJjaFByaW1hcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7IFxuICAgICAgbmFtZTogJycsXG4gICAgICBwcmVkaWN0aXZlSW5wdXQ6ICcnLFxuICAgICAgZGVib3VuY2VkU2VhcmNoOiAnJyxcbiAgICB9O1xuICB9XG4gIFxuICBvblN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlU2VhcmNoVGVybSh0aGlzLnN0YXRlLm5hbWUpKTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHRvZ2dsZVNhdmVkU2VhcmNoKGZhbHNlKSk7XG4gICAgUm91dGVyLnB1c2goXCIvc2VhcmNoLXJlc3VsdHNcIik7XG4gIH1cblxuICBvbkhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KXtcbiAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh0b2dnbGVTYXZlZFNlYXJjaChmYWxzZSkpO1xuXG4gICAgLy8gUHJlZGljdGl2ZSBzZWFyY2hcbiAgICAvLyBYWDogUHJlZGljdGl2ZSBTZWFyY2ggaGFwcGVucyBoZXJlLiBIYXJkIGNvZGVkIGFzIEVsYW50cmEgZm9yIG5vdy5cbiAgICBsZXQgcHJlZGljdGl2ZU91dHB1dCA9IFwiRWxhbnRyYVwiO1xuICAgIGlmKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJlZGljdGl2ZUlucHV0OiBcIlwifSk7XG4gICAgfSBlbHNlIGlmIChwcmVkaWN0aXZlT3V0cHV0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSkgPT0gMCl7XG4gICAgICBsZXQgY3VycmVudExlbmd0aCA9IGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGg7XG4gICAgICB0aGlzLnNldFN0YXRlKHtwcmVkaWN0aXZlSW5wdXQ6IGV2ZW50LnRhcmdldC52YWx1ZS50b1N0cmluZygpICsgcHJlZGljdGl2ZU91dHB1dC5zdWJzdHJpbmcoY3VycmVudExlbmd0aCl9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gWFg6IE1ha2UgYW5vdGhlciBjYWxsIGZvciBkYXRhIGhlcmUuXG4gICAgICB0aGlzLnNldFN0YXRlKHtwcmVkaWN0aXZlSW5wdXQ6IFwiXCJ9KTtcbiAgICB9XG5cbiAgICAvLyBEZWJvdW5jZXMgZXZlcnkgMC41IHNlY29uZCB0byBwcmV2ZW50IGZsb29kaW5nIG9mIEFQSSByZXF1ZXN0XG4gICAgXy5kZWJvdW5jZSgoZXZlbnQpPT57XG4gICAgICB0aGlzLnNldFN0YXRlKHtkZWJvdW5jZWRTZWFyY2g6IHRoaXMuc3RhdGUubmFtZX0pO1xuICAgIH0sIDUwMCkoZXZlbnQpO1xuICB9O1xuXG4gIG9uU2F2ZWRTZWFyY2hDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHRvZ2dsZVNhdmVkU2VhcmNoKCF0aGlzLnByb3BzLnNhdmVkU2VhcmNoKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHNlYXJjaERyb3Bkb3duO1xuICAgIGlmKHRoaXMucHJvcHMuc2F2ZWRTZWFyY2ggfHwgdGhpcy5zdGF0ZS5kZWJvdW5jZWRTZWFyY2ggJiYgdGhpcy5zdGF0ZS5kZWJvdW5jZWRTZWFyY2gubGVuZ3RoID4gMSAmJiB0aGlzLnN0YXRlLm5hbWUubGVuZ3RoID4gMCl7XG4gICAgICBzZWFyY2hEcm9wZG93biA9IDxTZWFyY2hEcm9wZG93biBzZWFyY2hUZXJtPXt0aGlzLnN0YXRlLmRlYm91bmNlZFNlYXJjaH0gXG4gICAgICAvPlxuICAgIH07XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtaW5uZXItd3JhcHBlclwiPlxuICAgICAgICAgICAgICB7LyogVGVtcG9yYXJ5IHVzZSBvZiBTZWFyY2ggSWNvbiAqL31cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5waWNwbmcuY29tL2ltYWdlcy9zbWFsbC9tYWduaWZ5aW5nLWdsYXNzLXNlYXJjaC1sb3VwZS1pbWFnZS1kb3dubG9hZC00OTg2M1wiIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1pY29uIG1hZ25pZnlpbmctZ2xhc3NcIi8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGlkPVwic2VhcmNoLWRpdlwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiYmFja2dyb3VuZC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17KGV2ZW50KT0+dGhpcy5vbkhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByZWRpY3RpdmVJbnB1dH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgIHRleHQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IHZlaGljbGUsIHRvcGljLCBrZXl3b3JkIG9yIGNvbnRlbnQgdGl0bGUuLi5cIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCk9PnRoaXMub25IYW5kbGVJbnB1dENoYW5nZShldmVudCl9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLXNlYXJjaC1idG4td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cucGljcG5nLmNvbS9pbWFnZXMvc21hbGwvbWFnbmlmeWluZy1nbGFzcy1zZWFyY2gtbG91cGUtaW1hZ2UtZG93bmxvYWQtNDk4NjNcIiBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vYmlsZS1zZWFyY2gtYnV0dG9uIG1hZ25pZnlpbmctZ2xhc3NcIi8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxwIG9uQ2xpY2s9eygpPT50aGlzLm9uU2F2ZWRTZWFyY2hDbGljaygpfSBjbGFzc05hbWU9XCJzYXZlZC1zZWFyY2hlc1wiPlNhdmVkIFNlYXJjaGVzPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicHJpbWFyeS1zZWFyY2gtYnV0dG9uXCI+XG4gICAgICAgICAgICA8UHJpbWFyeUJ1dHRvbiBoYW5kbGVPblN1Ym1pdD17dGhpcy5wcm9wcy5vblN1Ym1pdH0vPlxuICAgICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAge3NlYXJjaERyb3Bkb3dufVxuXG4gICAgICAgIHsvKiBTVFlMSU5HICovfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1hZ25pZnlpbmctZ2xhc3Mge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTRweDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbnB1dC13cmFwcGVyIHtcbiAgICAgICAgICAgIGZsZXg6IDEgODAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbnB1dC1pbm5lci13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjc2VhcmNoLWRpdiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2JhY2tncm91bmQtaW5wdXQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDE3MSwgMTcxLCAxNzEpO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgICNzZWFyY2gge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgLy9YWDogdG90YWwgb2YgNDhweCBmb3IgbGVmdC1wYWRkaW5nXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMCAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICA6OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXG4gICAgICAgICAgICBjb2xvcjogcmdiKDE3MSwgMTcxLCAxNzEpO1xuICAgICAgICAgICAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xuICAgICAgICAgIH1cbiAgICAgICAgICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgICAgICAgICAgICAgY29sb3I6IHJnYigxNzEsIDE3MSwgMTcxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDE3MSwgMTcxLCAxNzEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2F2ZWQtc2VhcmNoZXMge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByaW1hcnktc2VhcmNoLWJ1dHRvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9iaWxlLXNlYXJjaC1idXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2JpbGUtc2VhcmNoLWJ0bi13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMTZweCAwcHggMTVweCAtM3B4IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IC0xNnB4IDBweCAxNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xNnB4IDBweCAxNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgIC5zZWFyY2gtaWNvbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByaW1hcnktc2VhcmNoLWJ1dHRvbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9iaWxlLXNlYXJjaC1idXR0b24ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNhdmVkLXNlYXJjaGVzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYig2NCAxMDIgMTQ5KTtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogNjFweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig2NCAxMDIgMTQ5KTtcbiAgICAgICAgICAgICAgZm9udDogNjAwIDAuOTM4ZW0gc3lzdGVtLXVpO1xuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xNnB4IDBweCAxNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAtMTZweCAwcHggMTVweCAtM3B4IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xNnB4IDBweCAxNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmlucHV0LXdyYXBwZXIge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+ICAgICAgXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBzYXZlZFNlYXJjaDogc3RhdGUuc2VhcmNoLnNhdmVkU2VhcmNoVG9nZ2xlLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNlYXJjaFByaW1hcnkpOyJdfQ== */\n/*@ sourceURL=components/SearchPrimary.js */'
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
//# sourceMappingURL=4.1ea79f4d71eba6947d4d.hot-update.js.map