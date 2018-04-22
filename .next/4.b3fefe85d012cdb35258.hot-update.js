webpackHotUpdate(4,{

/***/ "./components/SearchPrimary.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
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

    _this.onSubmit = function (e) {
      e.preventDefault();
      _this.props.handleSubmit();
    };

    _this.state = {
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
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__actions_search__["j" /* updateSearchTerm */])(event.target.value));
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__actions_search__["i" /* toggleSavedSearch */])(false));

      // Predictive Search
      // XX: Insert predictive search output based on queried results ~
      var predictiveOutput = "Elantra";
      if (event.target.value === "") {
        this.setState({ predictiveInput: "" });
      } else if (predictiveOutput.toLowerCase().indexOf(event.target.value.toLowerCase()) === 0) {
        var currentLength = event.target.value.length;
        this.setState({ predictiveInput: event.target.value.toString() + predictiveOutput.substring(currentLength) });
      } else {
        // XX: Invoke another call for new query data here.
        this.setState({ predictiveInput: "" });
      }

      // Debounces every 0.5 second to prevent flooding of API request
      _.debounce(function (event) {
        _this2.setState({ debouncedSearch: _this2.props.searchTerm });
      }, 500)(event);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var searchDropdown = void 0;
      // Search Dropdown is visible when either:
      // (1) Saved Search option is toggled on, or
      // (2) There is sufficient data from both regular and debounced search inputs.
      // XX: May need additional logics here to render search results ~
      if (this.props.savedSearch || this.state.debouncedSearch && this.state.debouncedSearch.length > 1 && this.props.searchTerm.length > 0) {
        searchDropdown = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__SearchDropdown__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        });
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-902442318' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'form',
          {
            onSubmit: function onSubmit(e) {
              return _this3.onSubmit(e);
            }, htmlFor: 'search',
            className: 'jsx-902442318',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-902442318' + ' ' + 'input-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-902442318' + ' ' + 'input-inner-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863',
                className: 'jsx-902442318' + ' ' + 'search-icon magnifying-glass',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 73
                }
              }),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                { id: 'search-div', className: 'jsx-902442318',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
                  type: 'text',
                  id: 'background-input',
                  value: this.state.predictiveInput,
                  className: 'jsx-902442318',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                  }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
                  type: 'text',
                  id: 'search',
                  placeholder: 'Search by vehicle, topic, keyword or content title...',
                  onChange: function onChange(event) {
                    return _this3.onHandleInputChange(event);
                  },
                  value: this.props.searchTerm,
                  className: 'jsx-902442318',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                  }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
                  type: 'submit',
                  value: this.props.searchTerm,
                  hidden: true,
                  className: 'jsx-902442318',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-902442318' + ' ' + 'mobile-search-btn-wrapper',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863',
                  className: 'jsx-902442318' + ' ' + 'mobile-search-button magnifying-glass',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
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
                  lineNumber: 106
                }
              },
              'Saved Searches'
            )
          )
        ),
        searchDropdown,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '902442318',
          css: '.container.jsx-902442318{max-width:606px;width:100%;}.magnifying-glass.jsx-902442318{max-width:24px;max-height:14px;width:auto;height:auto;margin:0 16px;display:none;}form.jsx-902442318{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.input-wrapper.jsx-902442318{-webkit-flex:1 80%;-ms-flex:1 80%;flex:1 80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:64px;max-width:600px;background:white;border-radius:4px;}.input-inner-wrapper.jsx-902442318{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#search-div.jsx-902442318{position:relative;width:100%;}#background-input.jsx-902442318{position:absolute;width:100%;color:rgb(171,171,171);}#search.jsx-902442318{position:relative;background:transparent;width:100%;}input.jsx-902442318{-webkit-flex:1;-ms-flex:1;flex:1;border:none;outline:none;font-size:1em;color:black;padding:0 0 0 16px;}.jsx-902442318::-webkit-input-placeholder{color:rgb(171,171,171);opacity:1;}.jsx-902442318::-moz-placeholder{color:rgb(171,171,171);opacity:1;}.jsx-902442318:-ms-input-placeholder{color:rgb(171,171,171);opacity:1;}.jsx-902442318::placeholder{color:rgb(171,171,171);opacity:1;}.jsx-902442318:-ms-input-placeholder{color:rgb(171,171,171);}.jsx-902442318::-ms-input-placeholder{color:rgb(171,171,171);}.saved-searches.jsx-902442318{display:none;position:relative;}.mobile-search-button.jsx-902442318{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:8px;}.mobile-search-btn-wrapper.jsx-902442318{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:40px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);-moz-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);}@media all and (min-width:376px){.search-icon.jsx-902442318{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 12px;}input.jsx-902442318{padding:0;}.mobile-search-button.jsx-902442318{display:none;}.saved-searches.jsx-902442318{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:rgb(64 102 149);margin-right:24px;padding:5px;min-width:61px;border-bottom:1px solid rgb(64 102 149);font:600 0.938em system-ui;-webkit-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);-moz-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);cursor:pointer;}.input-wrapper.jsx-902442318{margin-right:32px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoUHJpbWFyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSG9CLEFBRzZCLEFBSUQsQUFRRixBQUdGLEFBV0UsQUFNSyxBQUlBLEFBTUEsQUFNWCxBQVNrQixBQUlFLEFBR0EsQUFHZCxBQUlBLEFBS0EsQUFTRSxBQUlILEFBR0csQUFHQSxBQWFLLFVBbEJwQixHQXRCa0IsQUF5QmxCLEVBeEZnQixDQUpMLEVBZ0NBLEFBSUEsQUFNWSxBQWtFdkIsS0FuRFUsQUFJWixBQUdBLElBL0RBLEVBZ0NBLEFBSTJCLEVBaENkLEFBK0RiLEVBcEJjLEFBVWQsUUFmYSxDQXJDQyxHQVNDLEFBa0NBLE9BVmYsQUFLQSxFQXJDZ0IsSUEyQ0EsVUExQ0QsSUEyQ0QsRUF2Q2QsQUFjUyxBQTZDVSxBQUtMLEFBU0ksQUFVUSxPQXRGMUIsR0E0Q3FCLEVBd0JBLEVBU25CLEdBYkYsS0F1QnNCLE9BMUN0QixJQTNCcUIsT0FzRUwsS0FqRk8sT0FrRkosZUFDeUIsc0NBckJpQixFQXNCOUIsYUFuRlYsTUFXckIsUUF5RStELDhCQXRCTCw2QkF1QkUsb0JBcEY1QixPQThEcUIsNkJBdUJFLHNCQXRCdkQsNkJBdUJtQixlQUNqQixhQXRGWSxZQUNJLGdCQUNDLGlCQUNDLGtCQUNwQiIsImZpbGUiOiJjb21wb25lbnRzL1NlYXJjaFByaW1hcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCBTZWFyY2hEcm9wZG93biBmcm9tICcuL1NlYXJjaERyb3Bkb3duJztcbiBcbmltcG9ydCB7IHVwZGF0ZVNlYXJjaFRlcm0sIHRvZ2dsZVNhdmVkU2VhcmNoIH0gZnJvbSAnLi4vYWN0aW9ucy9zZWFyY2gnO1xuXG5jbGFzcyBTZWFyY2hQcmltYXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIHByZWRpY3RpdmVJbnB1dDogJycsXG4gICAgICBkZWJvdW5jZWRTZWFyY2g6ICcnLFxuICAgIH07XG4gIH1cblxuICBvbkhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KXtcbiAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godG9nZ2xlU2F2ZWRTZWFyY2goZmFsc2UpKTtcblxuICAgIC8vIFByZWRpY3RpdmUgU2VhcmNoXG4gICAgLy8gWFg6IEluc2VydCBwcmVkaWN0aXZlIHNlYXJjaCBvdXRwdXQgYmFzZWQgb24gcXVlcmllZCByZXN1bHRzIH5cbiAgICBsZXQgcHJlZGljdGl2ZU91dHB1dCA9IFwiRWxhbnRyYVwiO1xuICAgIGlmKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJlZGljdGl2ZUlucHV0OiBcIlwifSk7XG4gICAgfSBlbHNlIGlmIChwcmVkaWN0aXZlT3V0cHV0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihldmVudC50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSkgPT09IDApe1xuICAgICAgbGV0IGN1cnJlbnRMZW5ndGggPSBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJlZGljdGl2ZUlucHV0OiBldmVudC50YXJnZXQudmFsdWUudG9TdHJpbmcoKSArIHByZWRpY3RpdmVPdXRwdXQuc3Vic3RyaW5nKGN1cnJlbnRMZW5ndGgpfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFhYOiBJbnZva2UgYW5vdGhlciBjYWxsIGZvciBuZXcgcXVlcnkgZGF0YSBoZXJlLlxuICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJlZGljdGl2ZUlucHV0OiBcIlwifSk7XG4gICAgfVxuXG4gICAgLy8gRGVib3VuY2VzIGV2ZXJ5IDAuNSBzZWNvbmQgdG8gcHJldmVudCBmbG9vZGluZyBvZiBBUEkgcmVxdWVzdFxuICAgIF8uZGVib3VuY2UoKGV2ZW50KT0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2RlYm91bmNlZFNlYXJjaDogdGhpcy5wcm9wcy5zZWFyY2hUZXJtfSk7XG4gICAgfSwgNTAwKShldmVudCk7XG4gIH07XG5cbiAgb25TYXZlZFNlYXJjaENsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godG9nZ2xlU2F2ZWRTZWFyY2goIXRoaXMucHJvcHMuc2F2ZWRTZWFyY2gpKTtcbiAgfVxuXG4gIG9uU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc2VhcmNoRHJvcGRvd247XG4gICAgLy8gU2VhcmNoIERyb3Bkb3duIGlzIHZpc2libGUgd2hlbiBlaXRoZXI6XG4gICAgLy8gKDEpIFNhdmVkIFNlYXJjaCBvcHRpb24gaXMgdG9nZ2xlZCBvbiwgb3JcbiAgICAvLyAoMikgVGhlcmUgaXMgc3VmZmljaWVudCBkYXRhIGZyb20gYm90aCByZWd1bGFyIGFuZCBkZWJvdW5jZWQgc2VhcmNoIGlucHV0cy5cbiAgICAvLyBYWDogTWF5IG5lZWQgYWRkaXRpb25hbCBsb2dpY3MgaGVyZSB0byByZW5kZXIgc2VhcmNoIHJlc3VsdHMgflxuICAgIGlmKHRoaXMucHJvcHMuc2F2ZWRTZWFyY2ggfHwgdGhpcy5zdGF0ZS5kZWJvdW5jZWRTZWFyY2ggJiYgdGhpcy5zdGF0ZS5kZWJvdW5jZWRTZWFyY2gubGVuZ3RoID4gMSAmJiB0aGlzLnByb3BzLnNlYXJjaFRlcm0ubGVuZ3RoID4gMCkge1xuICAgICAgc2VhcmNoRHJvcGRvd24gPSA8U2VhcmNoRHJvcGRvd24gLz5cbiAgICB9O1xuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGZvcm0gXG4gICAgICAgICAgb25TdWJtaXQ9eyhlKT0+dGhpcy5vblN1Ym1pdChlKX0gaHRtbEZvcj1cInNlYXJjaFwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1pbm5lci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIHsvKiBUZW1wb3JhcnkgdXNlIG9mIFNlYXJjaCBJY29uICovfVxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LnBpY3BuZy5jb20vaW1hZ2VzL3NtYWxsL21hZ25pZnlpbmctZ2xhc3Mtc2VhcmNoLWxvdXBlLWltYWdlLWRvd25sb2FkLTQ5ODYzXCIgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWljb24gbWFnbmlmeWluZy1nbGFzc1wiLz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJzZWFyY2gtZGl2XCI+XG4gICAgICAgICAgICAgICAgey8qIEZpcnN0IElucHV0IGlzIHRvIHJlbmRlciBncmV5LCBwcmVkaWN0aXZlIHRleHRzICovfVxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiYmFja2dyb3VuZC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcmVkaWN0aXZlSW5wdXR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7LyogU2Vjb25kIElucHV0IGlzIHRoZSBzdGFuZGFyZCB0ZXh0IHRoYXQgdXNlcnMgY291bGQgcmVhZCBhbmQgdHlwZSBpbiAqL31cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBpZD1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSB2ZWhpY2xlLCB0b3BpYywga2V5d29yZCBvciBjb250ZW50IHRpdGxlLi4uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpPT50aGlzLm9uSGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuc2VhcmNoVGVybX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHsvKiBUaGlyZCBJbnB1dCAoaGlkZGVuKSBpcyB0byBhbGxvdyBmb3JtIHN1Ym1pdHRhbCB3aXRoIEVudGVyIGtleWRvd24gICovfVxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5zZWFyY2hUZXJtfVxuICAgICAgICAgICAgICAgICAgaGlkZGVuXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIFhYOiBUZW1wb3JhcnkgbWFnbmlmeWluZyBnbGFzcyBpY29uICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1zZWFyY2gtYnRuLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LnBpY3BuZy5jb20vaW1hZ2VzL3NtYWxsL21hZ25pZnlpbmctZ2xhc3Mtc2VhcmNoLWxvdXBlLWltYWdlLWRvd25sb2FkLTQ5ODYzXCIgXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2JpbGUtc2VhcmNoLWJ1dHRvbiBtYWduaWZ5aW5nLWdsYXNzXCIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cCBvbkNsaWNrPXsoKT0+dGhpcy5vblNhdmVkU2VhcmNoQ2xpY2soKX0gY2xhc3NOYW1lPVwic2F2ZWQtc2VhcmNoZXNcIj5TYXZlZCBTZWFyY2hlczwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAge3NlYXJjaERyb3Bkb3dufVxuXG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDZweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWFnbmlmeWluZy1nbGFzcyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW46IDAgMTZweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlucHV0LXdyYXBwZXIge1xuICAgICAgICAgICAgZmxleDogMSA4MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlucHV0LWlubmVyLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICNzZWFyY2gtZGl2IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjYmFja2dyb3VuZC1pbnB1dCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTcxLCAxNzEsIDE3MSk7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgI3NlYXJjaCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAvL1hYOiB0b3RhbCBvZiA0OHB4IGZvciBsZWZ0LXBhZGRpbmdcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIDo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTcxLCAxNzEsIDE3MSk7XG4gICAgICAgICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXG4gICAgICAgICAgfVxuICAgICAgICAgIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICAgICAgICAgICAgICBjb2xvcjogcmdiKDE3MSwgMTcxLCAxNzEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICA6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoMTcxLCAxNzEsIDE3MSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zYXZlZC1zZWFyY2hlcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9iaWxlLXNlYXJjaC1idXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2JpbGUtc2VhcmNoLWJ0bi13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMTZweCAwcHggMTVweCAtM3B4IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IC0xNnB4IDBweCAxNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xNnB4IDBweCAxNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgIC5zZWFyY2gtaWNvbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vYmlsZS1zZWFyY2gtYnV0dG9uIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zYXZlZC1zZWFyY2hlcyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2IoNjQgMTAyIDE0OSk7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDYxcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNjQgMTAyIDE0OSk7XG4gICAgICAgICAgICAgIGZvbnQ6IDYwMCAwLjkzOGVtIHN5c3RlbS11aTtcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMTZweCAwcHggMTVweCAtM3B4IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogLTE2cHggMHB4IDE1cHggLTNweCByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMTZweCAwcHggMTVweCAtM3B4IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbnB1dC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PiAgICAgIFxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgc2VhcmNoVGVybTogc3RhdGUuc2VhcmNoLnNlYXJjaFRlcm0sXG4gIHNhdmVkU2VhcmNoOiBzdGF0ZS5zZWFyY2guc2F2ZWRTZWFyY2hUb2dnbGUsXG59KVxuXG5TZWFyY2hQcmltYXJ5LnByb3BUeXBlcyA9IHtcbiAgaGFuZGxlU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBGdW5jdGlvbiB0byBpbnZva2UgRW50ZXIga2V5ZG93biAoc2hvdWxkIGJlIHNhbWUgYXMgUHJpbWFyeSBCdXR0b24pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNlYXJjaFByaW1hcnkpOyJdfQ== */\n/*@ sourceURL=components/SearchPrimary.js */'
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

SearchPrimary.propTypes = {
  handleSubmit: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func.isRequired // Function to invoke Enter keydown (should be same as Primary Button);
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
//# sourceMappingURL=4.b3fefe85d012cdb35258.hot-update.js.map