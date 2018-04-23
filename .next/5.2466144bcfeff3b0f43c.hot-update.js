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
      console.log('INPUT:, \n      searchTerm: ' + searchTerm + ',\n      filteredContentType: ' + filteredContentType + ',\n      filteredTopic: ' + filteredTopic + ',\n      filteredStatus: ' + filteredStatus);
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
          className: 'jsx-2785998725' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'form',
          { onSubmit: function onSubmit(e) {
              return _this2.onSubmit(e);
            }, className: 'jsx-2785998725',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { onClick: function onClick() {
                return _this2.searchInput.focus();
              }, className: 'jsx-2785998725' + ' ' + 'input-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-2785998725' + ' ' + 'input-inner-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863',
                className: 'jsx-2785998725' + ' ' + 'search-icon magnifying-glass',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                }
              }),
              apostrophe,
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-2785998725' + ' ' + 'search-input-wrapper',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
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
                  className: 'jsx-2785998725',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                  }
                })
              ),
              apostrophe,
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'span',
                {
                  className: 'jsx-2785998725' + ' ' + 'filter-input',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                  }
                },
                compiledFilter
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'p',
              { onClick: function onClick(e) {
                  return _this2.onSubmit(e);
                }, className: 'jsx-2785998725' + ' ' + 'save-search',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 93
                }
              },
              'Save'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2785998725',
          css: '.container.jsx-2785998725{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:16px 0;}.magnifying-glass.jsx-2785998725{max-width:24px;max-height:14px;width:auto;height:auto;margin:0 16px;display:none;}form.jsx-2785998725{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 auto;-ms-flex:1 auto;flex:1 auto;}.input-wrapper.jsx-2785998725{-webkit-flex:1 80%;-ms-flex:1 80%;flex:1 80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:64px;max-width:600px;background:white;border-radius:4px;-webkit-box-shadow:0px 10px 20px 4px rgba(0,0,0,0.15);-moz-box-shadow:0px 10px 20px 4px rgba(0,0,0,0.15);box-shadow:0px 10px 20px 4px rgba(0,0,0,0.15);}.input-inner-wrapper.jsx-2785998725{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.search-icon.jsx-2785998725{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 12px;}.search-input.jsx-2785998725{width:0;}.filter-input.jsx-2785998725{font:400 1em system-ui;white-space:nowrap;}input.jsx-2785998725{padding:0;border:none;outline:none;font-size:1em;color:black;}.save-search.jsx-2785998725{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:rgb(64 102 149);margin-right:24px;padding-bottom:4px;min-width:32px;border-bottom:1px solid rgb(64 102 149);font:600 0.875em system-ui;-webkit-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);-moz-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);cursor:pointer;}@media all and (min-width:376px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoU2Vjb25kYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtHb0IsQUFHd0IsQUFNSSxBQVFGLEFBSUYsQUFjRSxBQUlBLEFBS2hCLEFBRTBCLEFBS2IsQUFPUSxRQWRwQixFQVFjLENBaERDLElBTUcsR0FpREgsSUFOQSxDQU5NLFFBcENSLElBMkNHLE9BMUNGLEFBb0NkLEdBMUJlLElBaUNELEtBMUNFLE9BMkNoQixPQTFDZSxNQUlELEFBa0JPLEFBSUwsT0F6QmhCLElBVnlCLEdBb0N6QixJQW1Cd0Isc0JBQ0osS0F0Q0csR0FKdkIsVUEyQ3FCLG1CQUNKLGVBQ3lCLENBM0IxQyxpQkEvQmdCLFVBa0JLLElBakJyQixRQTBENkIsMkJBQ2dDLHNEQXpDN0IsS0EwQzBCLHdEQUNMLG1EQUNsQyxHQTNDTCxZQUNJLEFBMkNsQixnQkExQ21CLGlCQUNDLGtCQUNvQyxzREFDSCxtREFDTCw4Q0FDaEQiLCJmaWxlIjoiY29tcG9uZW50cy9TZWFyY2hTZWNvbmRhcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBhdXRvc2l6ZUlucHV0IGZyb20gJ2F1dG9zaXplLWlucHV0JztcblxuaW1wb3J0IHsgdXBkYXRlU2VhcmNoVGVybSB9IGZyb20gJy4uL2FjdGlvbnMvc2VhcmNoJztcblxuY2xhc3MgU2VhcmNoU2Vjb25kYXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXV0b3NpemVJbnB1dChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWlucHV0JykpXG4gIH1cblxuICAvLyBYWDogT24ga2V5ZG93bi9zYXZlIGNsaWNrLCB0aGUgZm9sbG93aW5nIGluZm9ybWF0aW9uIHByaW50cy5cbiAgb25TdWJtaXQoZSkge1xuICAgIGxldCB7IFxuICAgICAgc2VhcmNoVGVybSxcbiAgICAgIGZpbHRlcmVkQ29udGVudFR5cGUsXG4gICAgICBmaWx0ZXJlZFRvcGljLFxuICAgICAgZmlsdGVyZWRTdGF0dXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coYElOUFVUOiwgXG4gICAgICBzZWFyY2hUZXJtOiAke3NlYXJjaFRlcm19LFxuICAgICAgZmlsdGVyZWRDb250ZW50VHlwZTogJHtmaWx0ZXJlZENvbnRlbnRUeXBlfSxcbiAgICAgIGZpbHRlcmVkVG9waWM6ICR7ZmlsdGVyZWRUb3BpY30sXG4gICAgICBmaWx0ZXJlZFN0YXR1czogJHtmaWx0ZXJlZFN0YXR1c31gXG4gICAgKTtcbiAgfVxuXG4gIG9uSGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpe1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2godXBkYXRlU2VhcmNoVGVybShldmVudC50YXJnZXQudmFsdWUpKTtcbiAgfTtcblxuICB0b0lzRmlsdGVyKGFycmF5KXtcbiAgICBpZihhcnJheSAmJiBhcnJheS5sZW5ndGggPiAwKXtcbiAgICAgIHJldHVybiBgaXM6IChcIiR7YXJyYXkudG9TdHJpbmcoKS5zcGxpdChcIixcIikuam9pbihcIiwgXCIpfVwiKWBcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH07XG4gIH07XG5cbiAgdG9JbkZpbHRlcihhcnJheSl7XG4gICAgaWYoYXJyYXkgJiYgYXJyYXkubGVuZ3RoID4gMCl7XG4gICAgICByZXR1cm4gYGluOiAoXCIke2FycmF5LnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLmpvaW4oXCIsIFwiKX1cIilgXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9O1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY29tcGlsZWRRdWVyeSA9IHRoaXMucHJvcHMuc2VhcmNoVGVybTtcbiAgICBsZXQgY29tcGlsZWRGaWx0ZXIgPSB0aGlzLnRvSXNGaWx0ZXIodGhpcy5wcm9wcy5maWx0ZXJlZFN0YXR1cykgKyBcIiBcIiArIHRoaXMudG9Jc0ZpbHRlcih0aGlzLnByb3BzLmZpbHRlcmVkQ29udGVudFR5cGUpICsgXCIgXCIgKyB0aGlzLnRvSW5GaWx0ZXIodGhpcy5wcm9wcy5maWx0ZXJlZFRvcGljKTtcbiAgICBjb21waWxlZEZpbHRlciA9IGNvbXBpbGVkRmlsdGVyLnNwbGl0KFwiICBcIikuam9pbihcIiBcIik7XG5cbiAgICBsZXQgcGxhY2Vob2xkZXIsIGFwb3N0cm9waGU7XG4gICAgaWYoIXRoaXMucHJvcHMuc2VhcmNoVGVybSAmJiAhY29tcGlsZWRGaWx0ZXIudHJpbSgpKXtcbiAgICAgIHBsYWNlaG9sZGVyID0gXCJTZWFyY2ggYnkgdmVoaWNsZSwgdG9waWMsIGtleXdvcmQgb3IgY29udGVudCB0aXRsZS4uLlwiO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5zZWFyY2hUZXJtKXtcbiAgICAgIGFwb3N0cm9waGUgPVwiXFxcIlwiO1xuICAgIH07XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpPT50aGlzLm9uU3VibWl0KGUpfT5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT50aGlzLnNlYXJjaElucHV0LmZvY3VzKCl9IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1pbm5lci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIHsvKiBUZW1wb3JhcnkgdXNlIG9mIFNlYXJjaCBJY29uICovfVxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LnBpY3BuZy5jb20vaW1hZ2VzL3NtYWxsL21hZ25pZnlpbmctZ2xhc3Mtc2VhcmNoLWxvdXBlLWltYWdlLWRvd25sb2FkLTQ5ODYzXCIgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWljb24gbWFnbmlmeWluZy1nbGFzc1wiLz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHthcG9zdHJvcGhlfVxuICAgICAgICAgICAgICB7LyogRmlyc3QgSW5wdXQgaXMgdGhlIHN0YW5kYXJkIHRleHQgdGhhdCB1c2VycyBjb3VsZCByZWFkIGFuZCB0eXBlIGluICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgdGV4dD1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJzZWFyY2gtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB7dGhpcy5zZWFyY2hJbnB1dCA9IGlucHV0fX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSB7cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KT0+dGhpcy5vbkhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb21waWxlZFF1ZXJ5fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7YXBvc3Ryb3BoZX1cblxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWx0ZXItaW5wdXRcIj57Y29tcGlsZWRGaWx0ZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxwIG9uQ2xpY2s9eyhlKT0+dGhpcy5vblN1Ym1pdChlKX0gY2xhc3NOYW1lPVwic2F2ZS1zZWFyY2hcIj5TYXZlPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICB7LyogU1RZTElORyAqL31cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1hZ25pZnlpbmctZ2xhc3Mge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTRweDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4OiAxIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbnB1dC13cmFwcGVyIHtcbiAgICAgICAgICAgIGZsZXg6IDEgODAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggNHB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggNHB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IDRweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQtaW5uZXItd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaC1pY29uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogMFxuICAgICAgICAgIH1cbiAgICAgICAgICAuZmlsdGVyLWlucHV0IHtcbiAgICAgICAgICAgIGZvbnQ6IDQwMCAxZW0gc3lzdGVtLXVpO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgLy8gZmxleDogMTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zYXZlLXNlYXJjaCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgY29sb3I6IHJnYig2NCAxMDIgMTQ5KTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDMycHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDY0IDEwMiAxNDkpO1xuICAgICAgICAgICAgZm9udDogNjAwIDAuODc1ZW0gc3lzdGVtLXVpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMTZweCAwcHggMTVweCAtM3B4IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IC0xNnB4IDBweCAxNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xNnB4IDBweCAxNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+ICAgICAgXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIGxldCB7IHNlYXJjaFRlcm0sIGZpbHRlcmVkU3RhdHVzLCBmaWx0ZXJlZENvbnRlbnRUeXBlLCBmaWx0ZXJlZFRvcGljIH0gPSBzdGF0ZS5zZWFyY2g7XG4gIHJldHVybiAoe1xuICBzZWFyY2hUZXJtLFxuICBmaWx0ZXJlZENvbnRlbnRUeXBlLFxuICBmaWx0ZXJlZFRvcGljLFxuICBmaWx0ZXJlZFN0YXR1cyxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTZWFyY2hTZWNvbmRhcnkpOyJdfQ== */\n/*@ sourceURL=components/SearchSecondary.js */'
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
//# sourceMappingURL=5.2466144bcfeff3b0f43c.hot-update.js.map