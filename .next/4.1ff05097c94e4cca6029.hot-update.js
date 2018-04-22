webpackHotUpdate(4,{

/***/ "./components/SearchPrimary.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SearchDropdown__ = __webpack_require__("./components/SearchDropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_search__ = __webpack_require__("./actions/search.js");
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
      _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions_search__["i" /* toggleSavedSearch */])(!_this.props.savedSearch));
    };

    _this.state = {
      // name: '',
      predictiveInput: '',
      debouncedSearch: ''
    };
    return _this;
  }

  _createClass(SearchPrimary, [{
    key: 'onHandleInputChange',
    value: function onHandleInputChange(event) {
      var _this2 = this;

      console.log(this.props.searchTerm);
      event.persist();
      // this.setState({name: event.target.value});
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions_search__["j" /* updateSearchTerm */])(event.target.value));
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions_search__["i" /* toggleSavedSearch */])(false));

      // Predictive Search
      // XX: Insert predictive search output ~
      var predictiveOutput = "Elantra";
      if (event.target.value === "") {
        this.setState({ predictiveInput: "" });
      } else if (predictiveOutput.toLowerCase().indexOf(event.target.value.toLowerCase()) == 0) {
        var currentLength = event.target.value.length;
        this.setState({ predictiveInput: event.target.value.toString() + predictiveOutput.substring(currentLength) });
      } else {
        // XX: Invoke another call for new query data here.
        this.setState({ predictiveInput: "" });
      }

      // Debounces every 500ms to prevent flooding of API request
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
        searchDropdown = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__SearchDropdown__["a" /* default */], { searchTerm: this.state.debouncedSearch,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        });
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-902442318' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'form',
          {
            className: 'jsx-902442318',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-902442318' + ' ' + 'input-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-902442318' + ' ' + 'input-inner-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 65
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863',
                className: 'jsx-902442318' + ' ' + 'search-icon magnifying-glass',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
                }
              }),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { id: 'search-div', className: 'jsx-902442318',
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
                  className: 'jsx-902442318',
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
                  className: 'jsx-902442318',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-902442318' + ' ' + 'mobile-search-btn-wrapper',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863',
                  className: 'jsx-902442318' + ' ' + 'mobile-search-button magnifying-glass',
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
                }, className: 'jsx-902442318' + ' ' + 'saved-searches',
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
          styleId: '902442318',
          css: '.container.jsx-902442318{max-width:606px;width:100%;}.magnifying-glass.jsx-902442318{max-width:24px;max-height:14px;width:auto;height:auto;margin:0 16px;display:none;}form.jsx-902442318{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.input-wrapper.jsx-902442318{-webkit-flex:1 80%;-ms-flex:1 80%;flex:1 80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:64px;max-width:600px;background:white;border-radius:4px;}.input-inner-wrapper.jsx-902442318{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#search-div.jsx-902442318{position:relative;width:100%;}#background-input.jsx-902442318{position:absolute;width:100%;color:rgb(171,171,171);}#search.jsx-902442318{position:relative;background:transparent;width:100%;}input.jsx-902442318{-webkit-flex:1;-ms-flex:1;flex:1;border:none;outline:none;font-size:1em;color:black;padding:0 0 0 16px;}.jsx-902442318::-webkit-input-placeholder{color:rgb(171,171,171);opacity:1;}.jsx-902442318::-moz-placeholder{color:rgb(171,171,171);opacity:1;}.jsx-902442318:-ms-input-placeholder{color:rgb(171,171,171);opacity:1;}.jsx-902442318::placeholder{color:rgb(171,171,171);opacity:1;}.jsx-902442318:-ms-input-placeholder{color:rgb(171,171,171);}.jsx-902442318::-ms-input-placeholder{color:rgb(171,171,171);}.saved-searches.jsx-902442318{display:none;position:relative;}.mobile-search-button.jsx-902442318{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:8px;}.mobile-search-btn-wrapper.jsx-902442318{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:40px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);-moz-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);}@media all and (min-width:376px){.search-icon.jsx-902442318{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 12px;}input.jsx-902442318{padding:0;}.mobile-search-button.jsx-902442318{display:none;}.saved-searches.jsx-902442318{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:rgb(64 102 149);margin-right:24px;padding:5px;min-width:61px;border-bottom:1px solid rgb(64 102 149);font:600 0.938em system-ui;-webkit-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);-moz-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);cursor:pointer;}.input-wrapper.jsx-902442318{margin-right:32px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoUHJpbWFyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtR29CLEFBRzZCLEFBSUQsQUFRRixBQUdGLEFBV0UsQUFNSyxBQUlBLEFBTUEsQUFNWCxBQVNrQixBQUlFLEFBR0EsQUFHZCxBQUlBLEFBS0EsQUFTRSxBQUlILEFBR0csQUFHQSxBQWFLLFVBbEJwQixHQXRCa0IsQUF5QmxCLEVBeEZnQixDQUpMLEVBZ0NBLEFBSUEsQUFNWSxBQWtFdkIsS0FuRFUsQUFJWixBQUdBLElBL0RBLEVBZ0NBLEFBSTJCLEVBaENkLEFBK0RiLEVBcEJjLEFBVWQsUUFmYSxDQXJDQyxHQVNDLEFBa0NBLE9BVmYsQUFLQSxFQXJDZ0IsSUEyQ0EsVUExQ0QsSUEyQ0QsRUF2Q2QsQUFjUyxBQTZDVSxBQUtMLEFBU0ksQUFVUSxPQXRGMUIsR0E0Q3FCLEVBd0JBLEVBU25CLEdBYkYsS0F1QnNCLE9BMUN0QixJQTNCcUIsT0FzRUwsS0FqRk8sT0FrRkosZUFDeUIsc0NBckJpQixFQXNCOUIsYUFuRlYsTUFXckIsUUF5RStELDhCQXRCTCw2QkF1QkUsb0JBcEY1QixPQThEcUIsNkJBdUJFLHNCQXRCdkQsNkJBdUJtQixlQUNqQixhQXRGWSxZQUNJLGdCQUNDLGlCQUNDLGtCQUNwQiIsImZpbGUiOiJjb21wb25lbnRzL1NlYXJjaFByaW1hcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IFNlYXJjaERyb3Bkb3duIGZyb20gJy4vU2VhcmNoRHJvcGRvd24nO1xuIFxuaW1wb3J0IHsgdXBkYXRlU2VhcmNoVGVybSwgdG9nZ2xlU2F2ZWRTZWFyY2ggfSBmcm9tICcuLi9hY3Rpb25zL3NlYXJjaCc7XG5cbmNsYXNzIFNlYXJjaFByaW1hcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7IFxuICAgICAgLy8gbmFtZTogJycsXG4gICAgICBwcmVkaWN0aXZlSW5wdXQ6ICcnLFxuICAgICAgZGVib3VuY2VkU2VhcmNoOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgb25IYW5kbGVJbnB1dENoYW5nZShldmVudCl7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5zZWFyY2hUZXJtKVxuICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICAvLyB0aGlzLnNldFN0YXRlKHtuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHVwZGF0ZVNlYXJjaFRlcm0oZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh0b2dnbGVTYXZlZFNlYXJjaChmYWxzZSkpO1xuXG4gICAgLy8gUHJlZGljdGl2ZSBTZWFyY2hcbiAgICAvLyBYWDogSW5zZXJ0IHByZWRpY3RpdmUgc2VhcmNoIG91dHB1dCB+XG4gICAgbGV0IHByZWRpY3RpdmVPdXRwdXQgPSBcIkVsYW50cmFcIjtcbiAgICBpZihldmVudC50YXJnZXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ByZWRpY3RpdmVJbnB1dDogXCJcIn0pO1xuICAgIH0gZWxzZSBpZiAocHJlZGljdGl2ZU91dHB1dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpID09IDApe1xuICAgICAgbGV0IGN1cnJlbnRMZW5ndGggPSBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJlZGljdGl2ZUlucHV0OiBldmVudC50YXJnZXQudmFsdWUudG9TdHJpbmcoKSArIHByZWRpY3RpdmVPdXRwdXQuc3Vic3RyaW5nKGN1cnJlbnRMZW5ndGgpfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFhYOiBJbnZva2UgYW5vdGhlciBjYWxsIGZvciBuZXcgcXVlcnkgZGF0YSBoZXJlLlxuICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJlZGljdGl2ZUlucHV0OiBcIlwifSk7XG4gICAgfVxuXG4gICAgLy8gRGVib3VuY2VzIGV2ZXJ5IDUwMG1zIHRvIHByZXZlbnQgZmxvb2Rpbmcgb2YgQVBJIHJlcXVlc3RcbiAgICBfLmRlYm91bmNlKChldmVudCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGVib3VuY2VkU2VhcmNoOiB0aGlzLnN0YXRlLm5hbWV9KTtcbiAgICB9LCA1MDApKGV2ZW50KTtcbiAgfTtcblxuICBvblNhdmVkU2VhcmNoQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh0b2dnbGVTYXZlZFNlYXJjaCghdGhpcy5wcm9wcy5zYXZlZFNlYXJjaCkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBzZWFyY2hEcm9wZG93bjtcbiAgICBpZih0aGlzLnByb3BzLnNhdmVkU2VhcmNoIHx8IHRoaXMuc3RhdGUuZGVib3VuY2VkU2VhcmNoICYmIHRoaXMuc3RhdGUuZGVib3VuY2VkU2VhcmNoLmxlbmd0aCA+IDEgJiYgdGhpcy5zdGF0ZS5uYW1lLmxlbmd0aCA+IDApe1xuICAgICAgc2VhcmNoRHJvcGRvd24gPSA8U2VhcmNoRHJvcGRvd24gc2VhcmNoVGVybT17dGhpcy5zdGF0ZS5kZWJvdW5jZWRTZWFyY2h9IFxuICAgICAgLz5cbiAgICB9O1xuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGZvcm0gXG4gICAgICAgICAgLy8gb25TdWJtaXQ9e3RoaXMub25TdWJtaXQuYmluZCh0aGlzKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWlubmVyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgey8qIFRlbXBvcmFyeSB1c2Ugb2YgU2VhcmNoIEljb24gKi99XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cucGljcG5nLmNvbS9pbWFnZXMvc21hbGwvbWFnbmlmeWluZy1nbGFzcy1zZWFyY2gtbG91cGUtaW1hZ2UtZG93bmxvYWQtNDk4NjNcIiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtaWNvbiBtYWduaWZ5aW5nLWdsYXNzXCIvPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaC1kaXZcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBpZD1cImJhY2tncm91bmQtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9eyhldmVudCk9PnRoaXMub25IYW5kbGVJbnB1dENoYW5nZShldmVudCl9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcmVkaWN0aXZlSW5wdXR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICB0ZXh0PVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBpZD1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSB2ZWhpY2xlLCB0b3BpYywga2V5d29yZCBvciBjb250ZW50IHRpdGxlLi4uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpPT50aGlzLm9uSGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1zZWFyY2gtYnRuLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LnBpY3BuZy5jb20vaW1hZ2VzL3NtYWxsL21hZ25pZnlpbmctZ2xhc3Mtc2VhcmNoLWxvdXBlLWltYWdlLWRvd25sb2FkLTQ5ODYzXCIgXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2JpbGUtc2VhcmNoLWJ1dHRvbiBtYWduaWZ5aW5nLWdsYXNzXCIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cCBvbkNsaWNrPXsoKT0+dGhpcy5vblNhdmVkU2VhcmNoQ2xpY2soKX0gY2xhc3NOYW1lPVwic2F2ZWQtc2VhcmNoZXNcIj5TYXZlZCBTZWFyY2hlczwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAge3NlYXJjaERyb3Bkb3dufVxuXG4gICAgICAgIHsvKiBTVFlMSU5HICovfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwNnB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tYWduaWZ5aW5nLWdsYXNzIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjRweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgICBmbGV4OiAxIDgwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQtaW5uZXItd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgI3NlYXJjaC1kaXYge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgICNiYWNrZ3JvdW5kLWlucHV0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgY29sb3I6IHJnYigxNzEsIDE3MSwgMTcxKTtcblxuICAgICAgICAgIH1cbiAgICAgICAgICAjc2VhcmNoIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIC8vWFg6IHRvdGFsIG9mIDQ4cHggZm9yIGxlZnQtcGFkZGluZ1xuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICAgICAgICAgICAgY29sb3I6IHJnYigxNzEsIDE3MSwgMTcxKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cbiAgICAgICAgICB9XG4gICAgICAgICAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTcxLCAxNzEsIDE3MSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cbiAgICAgICAgICAgICAgY29sb3I6IHJnYigxNzEsIDE3MSwgMTcxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNhdmVkLXNlYXJjaGVzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2JpbGUtc2VhcmNoLWJ1dHRvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vYmlsZS1zZWFyY2gtYnRuLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xNnB4IDBweCAxNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogLTE2cHggMHB4IDE1cHggLTNweCByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogLTE2cHggMHB4IDE1cHggLTNweCByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgLnNlYXJjaC1pY29uIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9iaWxlLXNlYXJjaC1idXR0b24ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNhdmVkLXNlYXJjaGVzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYig2NCAxMDIgMTQ5KTtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogNjFweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig2NCAxMDIgMTQ5KTtcbiAgICAgICAgICAgICAgZm9udDogNjAwIDAuOTM4ZW0gc3lzdGVtLXVpO1xuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0xNnB4IDBweCAxNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAtMTZweCAwcHggMTVweCAtM3B4IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xNnB4IDBweCAxNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmlucHV0LXdyYXBwZXIge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+ICAgICAgXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBzZWFyY2hUZXJtOiBzdGF0ZS5zZWFyY2guc2VhcmNoVGVybSxcbiAgc2F2ZWRTZWFyY2g6IHN0YXRlLnNlYXJjaC5zYXZlZFNlYXJjaFRvZ2dsZSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTZWFyY2hQcmltYXJ5KTsiXX0= */\n/*@ sourceURL=components/SearchPrimary.js */'
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
    searchTerm: state.search.searchTerm,
    savedSearch: state.search.savedSearchToggle
  };
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(mapStateToProps)(SearchPrimary);

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
//# sourceMappingURL=4.1ff05097c94e4cca6029.hot-update.js.map