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

    // XX: On keydown/save click, the following information prints.

  }, {
    key: 'onSubmit',
    value: function onSubmit(e) {
      var _props = this.props,
          searchTerm = _props.searchTerm,
          filteredContentType = _props.filteredContentType,
          filteredTopic = _props.filteredTopic,
          filteredStatus = _props.filteredStatus;


      e.preventDefault();
      console.log('Logged Input:, \n      searchTerm: ' + searchTerm + ',\n      filteredContentType: ' + filteredContentType + ',\n      filteredTopic: ' + filteredTopic + ',\n      filteredStatus: ' + filteredStatus);
    }
  }, {
    key: 'onHandleInputChange',
    value: function onHandleInputChange(event) {
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions_search__["j" /* updateSearchTerm */])(event.target.value));
    }
  }, {
    key: 'toIsFilter',
    value: function toIsFilter(array) {
      if (array && array.length > 0) {
        return 'is: ("' + array.toString().split(",").join(", ") + '")';
      } else {
        return '';
      };
    }
  }, {
    key: 'toInFilter',
    value: function toInFilter(array) {
      if (array && array.length > 0) {
        return 'in: ("' + array.toString().split(",").join(", ") + '")';
      } else {
        return '';
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var compiledQuery = this.props.searchTerm;
      var compiledFilter = this.toIsFilter(this.props.filteredStatus) + " " + this.toIsFilter(this.props.filteredContentType) + " " + this.toInFilter(this.props.filteredTopic);
      compiledFilter = compiledFilter.split("  ").join(" ");

      var customWidth = void 0,
          customOverflow = void 0;
      if (!compiledQuery.length) {
        customWidth = "0";
      }
      if (compiledQuery || compiledFilter.trim()) {
        customOverflow = "hidden";
      }

      var placeholder = void 0,
          apostrophe = void 0;
      if (!compiledFilter.trim()) {
        placeholder = "Search by vehicle, topic, keyword or content title...";
      }
      if (this.props.searchTerm) {
        apostrophe = "\"";
      };

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2059139412', [customOverflow, customWidth]]]) + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'form',
          { onSubmit: function onSubmit(e) {
              return _this2.onSubmit(e);
            }, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2059139412', [customOverflow, customWidth]]]),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { onClick: function onClick() {
                return _this2.searchInput.focus();
              }, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2059139412', [customOverflow, customWidth]]]) + ' ' + 'input-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 76
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2059139412', [customOverflow, customWidth]]]) + ' ' + 'input-inner-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 78
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863',
                className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2059139412', [customOverflow, customWidth]]]) + ' ' + 'search-icon magnifying-glass',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                }
              }),
              apostrophe,
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2059139412', [customOverflow, customWidth]]]) + ' ' + 'search-input-wrapper',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
                  text: 'text',
                  id: 'search-input',

                  autoComplete: 'off',
                  ref: function ref(input) {
                    _this2.searchInput = input;
                  },
                  placeholder: placeholder,
                  onChange: function onChange(event) {
                    return _this2.onHandleInputChange(event);
                  },
                  value: compiledQuery,
                  className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2059139412', [customOverflow, customWidth]]]) + ' ' + 'search-input',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                  }
                })
              ),
              apostrophe,
              '\xA0',
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'span',
                {
                  className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2059139412', [customOverflow, customWidth]]]) + ' ' + 'filter-input',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                  }
                },
                compiledFilter
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              { onClick: function onClick(e) {
                  return _this2.onSubmit(e);
                }, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2059139412', [customOverflow, customWidth]]]) + ' ' + 'save-search',
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
          styleId: '2059139412',
          css: '.container.__jsx-style-dynamic-selector{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:16px 0;}.magnifying-glass.__jsx-style-dynamic-selector{max-width:24px;max-height:14px;width:auto;height:auto;margin:0 16px;display:none;}form.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 auto;-ms-flex:1 auto;flex:1 auto;}.input-wrapper.__jsx-style-dynamic-selector{-webkit-flex:1 80%;-ms-flex:1 80%;flex:1 80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:64px;max-width:600px;background:white;border-radius:4px;-webkit-box-shadow:0px 10px 20px 4px rgba(0,0,0,0.15);-moz-box-shadow:0px 10px 20px 4px rgba(0,0,0,0.15);box-shadow:0px 10px 20px 4px rgba(0,0,0,0.15);}.input-inner-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:' + customOverflow + ';}.search-icon.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 12px;}.search-input-wrapper.__jsx-style-dynamic-selector{width:' + customWidth + ';}.filter-input.__jsx-style-dynamic-selector{font:400 1em system-ui;}input.__jsx-style-dynamic-selector{padding:0;border:none;outline:none;font-size:1em;color:black;}.save-search.__jsx-style-dynamic-selector{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:rgb(64 102 149);margin-right:24px;padding-bottom:4px;min-width:32px;border-bottom:1px solid rgb(64 102 149);font:600 0.875em system-ui;-webkit-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);-moz-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);cursor:pointer;}@media all and (min-width:376px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoU2Vjb25kYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRHb0IsQUFHd0IsQUFNSSxBQVFGLEFBSUYsQUFjRSxBQUtBLEFBS2hCLEFBRTBCLEFBSWIsQUFPUSxVQU5OLENBaERDLElBTUcsR0FpREgsSUFOQSxDQUxmLFFBckNhLElBa0NiLEFBU2dCLE9BMUNGLEdBVUMsSUFpQ0QsS0ExQ0UsT0EyQ2hCLE9BMUNlLE1BSUQsQUFrQk8sQUFLTCxPQTFCaEIsSUFWeUIsR0FxQ3pCLElBa0J3QixzQkFDSixLQXRDRyxHQUp2QixVQTJDcUIsbUJBQ0osZUFDeUIsQ0EzQkYsaUJBL0J4QixVQWtCSyxJQWpCckIsT0ErQkEsQ0EyQjZCLDJCQUNnQyxzREF6QzdCLEtBMEMwQix3REFDTCxtREFDbEMsR0EzQ0wsWUFDSSxBQTJDbEIsZ0JBMUNtQixpQkFDQyxrQkFDb0Msc0RBQ0gsbURBQ0wsOENBQ2hEIiwiZmlsZSI6ImNvbXBvbmVudHMvU2VhcmNoU2Vjb25kYXJ5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lZGRpZXlhby9EZXNrdG9wL2dwX2RyYWZ0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgYXV0b3NpemVJbnB1dCBmcm9tICdhdXRvc2l6ZS1pbnB1dCc7XG5cbmltcG9ydCB7IHVwZGF0ZVNlYXJjaFRlcm0gfSBmcm9tICcuLi9hY3Rpb25zL3NlYXJjaCc7XG5cbmNsYXNzIFNlYXJjaFNlY29uZGFyeSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGF1dG9zaXplSW5wdXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1pbnB1dCcpKVxuICB9XG5cbiAgLy8gWFg6IE9uIGtleWRvd24vc2F2ZSBjbGljaywgdGhlIGZvbGxvd2luZyBpbmZvcm1hdGlvbiBwcmludHMuXG4gIG9uU3VibWl0KGUpIHtcbiAgICBsZXQgeyBcbiAgICAgIHNlYXJjaFRlcm0sXG4gICAgICBmaWx0ZXJlZENvbnRlbnRUeXBlLFxuICAgICAgZmlsdGVyZWRUb3BpYyxcbiAgICAgIGZpbHRlcmVkU3RhdHVzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGBMb2dnZWQgSW5wdXQ6LCBcbiAgICAgIHNlYXJjaFRlcm06ICR7c2VhcmNoVGVybX0sXG4gICAgICBmaWx0ZXJlZENvbnRlbnRUeXBlOiAke2ZpbHRlcmVkQ29udGVudFR5cGV9LFxuICAgICAgZmlsdGVyZWRUb3BpYzogJHtmaWx0ZXJlZFRvcGljfSxcbiAgICAgIGZpbHRlcmVkU3RhdHVzOiAke2ZpbHRlcmVkU3RhdHVzfWBcbiAgICApO1xuICB9XG5cbiAgb25IYW5kbGVJbnB1dENoYW5nZShldmVudCl7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIHRvSXNGaWx0ZXIoYXJyYXkpe1xuICAgIGlmKGFycmF5ICYmIGFycmF5Lmxlbmd0aCA+IDApe1xuICAgICAgcmV0dXJuIGBpczogKFwiJHthcnJheS50b1N0cmluZygpLnNwbGl0KFwiLFwiKS5qb2luKFwiLCBcIil9XCIpYFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfTtcbiAgfTtcblxuICB0b0luRmlsdGVyKGFycmF5KXtcbiAgICBpZihhcnJheSAmJiBhcnJheS5sZW5ndGggPiAwKXtcbiAgICAgIHJldHVybiBgaW46IChcIiR7YXJyYXkudG9TdHJpbmcoKS5zcGxpdChcIixcIikuam9pbihcIiwgXCIpfVwiKWBcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH07XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjb21waWxlZFF1ZXJ5ID0gdGhpcy5wcm9wcy5zZWFyY2hUZXJtO1xuICAgIGxldCBjb21waWxlZEZpbHRlciA9IHRoaXMudG9Jc0ZpbHRlcih0aGlzLnByb3BzLmZpbHRlcmVkU3RhdHVzKSArIFwiIFwiICsgdGhpcy50b0lzRmlsdGVyKHRoaXMucHJvcHMuZmlsdGVyZWRDb250ZW50VHlwZSkgKyBcIiBcIiArIHRoaXMudG9JbkZpbHRlcih0aGlzLnByb3BzLmZpbHRlcmVkVG9waWMpO1xuICAgIGNvbXBpbGVkRmlsdGVyID0gY29tcGlsZWRGaWx0ZXIuc3BsaXQoXCIgIFwiKS5qb2luKFwiIFwiKTtcblxuICAgIGxldCBjdXN0b21XaWR0aCwgY3VzdG9tT3ZlcmZsb3c7XG4gICAgaWYoIWNvbXBpbGVkUXVlcnkubGVuZ3RoKXtcbiAgICAgIGN1c3RvbVdpZHRoID0gXCIwXCJcbiAgICB9IFxuICAgIGlmKGNvbXBpbGVkUXVlcnkgfHwgY29tcGlsZWRGaWx0ZXIudHJpbSgpKXtcbiAgICAgIGN1c3RvbU92ZXJmbG93ID0gXCJoaWRkZW5cIlxuICAgIH1cblxuICAgIGxldCBwbGFjZWhvbGRlciwgYXBvc3Ryb3BoZTtcbiAgICBpZighY29tcGlsZWRGaWx0ZXIudHJpbSgpKXtcbiAgICAgIHBsYWNlaG9sZGVyID0gXCJTZWFyY2ggYnkgdmVoaWNsZSwgdG9waWMsIGtleXdvcmQgb3IgY29udGVudCB0aXRsZS4uLlwiO1xuICAgIH0gXG4gICAgaWYodGhpcy5wcm9wcy5zZWFyY2hUZXJtKXtcbiAgICAgIGFwb3N0cm9waGUgPVwiXFxcIlwiO1xuICAgIH07XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpPT50aGlzLm9uU3VibWl0KGUpfT5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT50aGlzLnNlYXJjaElucHV0LmZvY3VzKCl9IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1pbm5lci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIHsvKiBUZW1wb3JhcnkgdXNlIG9mIFNlYXJjaCBJY29uICovfVxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LnBpY3BuZy5jb20vaW1hZ2VzL3NtYWxsL21hZ25pZnlpbmctZ2xhc3Mtc2VhcmNoLWxvdXBlLWltYWdlLWRvd25sb2FkLTQ5ODYzXCIgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWljb24gbWFnbmlmeWluZy1nbGFzc1wiLz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHthcG9zdHJvcGhlfVxuICAgICAgICAgICAgICB7LyogRmlyc3QgSW5wdXQgaXMgdGhlIHN0YW5kYXJkIHRleHQgdGhhdCB1c2VycyBjb3VsZCByZWFkIGFuZCB0eXBlIGluICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgdGV4dD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJzZWFyY2gtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICByZWY9eyhpbnB1dCkgPT4ge3RoaXMuc2VhcmNoSW5wdXQgPSBpbnB1dH19XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0ge3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCk9PnRoaXMub25IYW5kbGVJbnB1dENoYW5nZShldmVudCl9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGlsZWRRdWVyeX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge2Fwb3N0cm9waGV9Jm5ic3A7XG5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsdGVyLWlucHV0XCI+e2NvbXBpbGVkRmlsdGVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyhlKT0+dGhpcy5vblN1Ym1pdChlKX0gY2xhc3NOYW1lPVwic2F2ZS1zZWFyY2hcIj5TYXZlPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIHsvKiBTVFlMSU5HICovfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWFnbmlmeWluZy1nbGFzcyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW46IDAgMTZweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXg6IDEgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlucHV0LXdyYXBwZXIge1xuICAgICAgICAgICAgZmxleDogMSA4MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCA0cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCA0cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggNHB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbnB1dC1pbm5lci13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgb3ZlcmZsb3c6ICR7Y3VzdG9tT3ZlcmZsb3d9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLWljb24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLWlucHV0LXdyYXBwZXIge1xuICAgICAgICAgICAgd2lkdGg6ICR7Y3VzdG9tV2lkdGh9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5maWx0ZXItaW5wdXQge1xuICAgICAgICAgICAgZm9udDogNDAwIDFlbSBzeXN0ZW0tdWk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIC8vIGZsZXg6IDE7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2F2ZS1zZWFyY2gge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNjQgMTAyIDE0OSk7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig2NCAxMDIgMTQ5KTtcbiAgICAgICAgICAgIGZvbnQ6IDYwMCAwLjg3NWVtIHN5c3RlbS11aTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTE2cHggMHB4IDE1cHggLTNweCByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAtMTZweCAwcHggMTVweCAtM3B4IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAtMTZweCAwcHggMTVweCAtM3B4IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PiAgICAgIFxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICBsZXQgeyBzZWFyY2hUZXJtLCBmaWx0ZXJlZFN0YXR1cywgZmlsdGVyZWRDb250ZW50VHlwZSwgZmlsdGVyZWRUb3BpYyB9ID0gc3RhdGUuc2VhcmNoO1xuICByZXR1cm4gKHtcbiAgc2VhcmNoVGVybSxcbiAgZmlsdGVyZWRDb250ZW50VHlwZSxcbiAgZmlsdGVyZWRUb3BpYyxcbiAgZmlsdGVyZWRTdGF0dXMsXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2VhcmNoU2Vjb25kYXJ5KTsiXX0= */\n/*@ sourceURL=components/SearchSecondary.js */',
          dynamic: [customOverflow, customWidth]
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

  return {
    searchTerm: searchTerm,
    filteredContentType: filteredContentType,
    filteredTopic: filteredTopic,
    filteredStatus: filteredStatus
  };
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
//# sourceMappingURL=5.4f6367aedccb7008cc9d.hot-update.js.map