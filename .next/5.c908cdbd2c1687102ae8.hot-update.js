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

    // this.state = {
    //   initialSearchTerm: '',
    // }
  }

  _createClass(SearchSecondary, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // this.setState({initialSearchTerm: this.props.searchTerm});
      this.setState({ input: this.props.searchTerm });
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(e) {
      e.preventDefault();
    }
  }, {
    key: 'onHandleInputChange',
    value: function onHandleInputChange(event) {
      // this.setState({input: event.target.value})
      // this.props.dispatch(updateSearchTerm(event.target.value));
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

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-1071005261' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'form',
          { onSubmit: function onSubmit(e) {
              return _this2.onSubmit(e);
            }, className: 'jsx-1071005261',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-1071005261' + ' ' + 'input-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-1071005261' + ' ' + 'input-inner-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863',
                className: 'jsx-1071005261' + ' ' + 'search-icon magnifying-glass',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                }
              }),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'p',
                {
                  className: 'jsx-1071005261',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                  }
                },
                '"'
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
                text: 'text',
                placeholder: 'Search by vehicle, topic, keyword or content title...',
                onChange: function onChange(event) {
                  return _this2.onHandleInputChange(event);
                },

                value: compiledQuery,
                className: 'jsx-1071005261',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 73
                }
              }),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'p',
                {
                  className: 'jsx-1071005261',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                  }
                },
                '"'
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
                text: 'text',
                placeholder: 'Search by vehicle, topic, keyword or content title...',
                onChange: function onChange(event) {
                  return _this2.onHandleInputChange(event);
                },

                value: compiledFilter,
                className: 'jsx-1071005261',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 83
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'p',
              { onClick: function onClick(e) {
                  return _this2.onSubmit(e);
                }, className: 'jsx-1071005261' + ' ' + 'save-search',
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
          styleId: '1071005261',
          css: '.container.jsx-1071005261{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:16px 0;}.magnifying-glass.jsx-1071005261{max-width:24px;max-height:14px;width:auto;height:auto;margin:0 16px;display:none;}form.jsx-1071005261{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 auto;-ms-flex:1 auto;flex:1 auto;}.input-wrapper.jsx-1071005261{-webkit-flex:1 80%;-ms-flex:1 80%;flex:1 80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:64px;max-width:600px;background:white;border-radius:4px;-webkit-box-shadow:0px 10px 20px 4px rgba(0,0,0,0.15);-moz-box-shadow:0px 10px 20px 4px rgba(0,0,0,0.15);box-shadow:0px 10px 20px 4px rgba(0,0,0,0.15);}.input-inner-wrapper.jsx-1071005261{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.search-icon.jsx-1071005261{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 12px;}input.jsx-1071005261{-webkit-flex:1;-ms-flex:1;flex:1;padding:0;border:none;outline:none;font-size:1em;color:black;}.save-search.jsx-1071005261{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:rgb(64 102 149);margin-right:24px;padding-bottom:4px;min-width:32px;border-bottom:1px solid rgb(64 102 149);font:600 0.875em system-ui;-webkit-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);-moz-box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);box-shadow:-16px 0px 15px -3px rgba(255,255,255,1);cursor:pointer;}@media all and (min-width:376px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoU2Vjb25kYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHb0IsQUFHd0IsQUFNSSxBQVFGLEFBSUYsQUFjRSxBQUtBLEFBSU4sQUFRVyxXQWhETCxJQU1HLEdBMkNILGFBMUNGLEVBa0NELFNBakNFLENBa0NBLEVBeEJDLFNBVEMsQ0FrQ0QsYUFqQ0EsQUFrQ0MsTUE5QkYsQUFrQkwsQUFLTyxPQTFCaEIsQ0FrQ2MsR0E1Q1csR0FxQ3pCLElBWXdCLEVBSnhCLGFBYnFCLE9Ba0JELEtBaENHLEdBSnZCLFVBcUNxQixtQkFDSixlQUN5QixrQkFwRDFCLFVBa0JLLElBakJyQixFQStCQSxNQXFCNkIsMkJBQ2dDLHNEQW5DN0IsS0FvQzBCLHdEQUNMLG1EQUNsQyxHQXJDTCxZQUNJLEFBcUNsQixnQkFwQ21CLGlCQUNDLGtCQUNvQyxzREFDSCxtREFDTCw4Q0FDaEQiLCJmaWxlIjoiY29tcG9uZW50cy9TZWFyY2hTZWNvbmRhcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgdXBkYXRlU2VhcmNoVGVybSB9IGZyb20gJy4uL2FjdGlvbnMvc2VhcmNoJztcblxuY2xhc3MgU2VhcmNoU2Vjb25kYXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIC8vIHRoaXMuc3RhdGUgPSB7XG4gICAgLy8gICBpbml0aWFsU2VhcmNoVGVybTogJycsXG4gICAgLy8gfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoe2luaXRpYWxTZWFyY2hUZXJtOiB0aGlzLnByb3BzLnNlYXJjaFRlcm19KTtcbiAgICB0aGlzLnNldFN0YXRlKHtpbnB1dDogdGhpcy5wcm9wcy5zZWFyY2hUZXJtfSk7XG4gIH1cblxuICBvblN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgb25IYW5kbGVJbnB1dENoYW5nZShldmVudCl7XG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7aW5wdXQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pXG4gICAgLy8gdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIHRvU3RyaW5nKHF1ZXJ5KXtcbiAgICBpZihxdWVyeSl7XG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfTtcblxuICB0b0lzRmlsdGVyKGFycmF5KXtcbiAgICBpZihhcnJheSAmJiBhcnJheS5sZW5ndGggPiAwKXtcbiAgICAgIHJldHVybiBgaXM6ICgke2FycmF5LnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLmpvaW4oXCIsIFwiKX0pYFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfTtcbiAgfTtcblxuICB0b0luRmlsdGVyKGFycmF5KXtcbiAgICBpZihhcnJheSAmJiBhcnJheS5sZW5ndGggPiAwKXtcbiAgICAgIHJldHVybiBgaW46ICgke2FycmF5LnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLmpvaW4oXCIsIFwiKX0pYFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgY29tcGlsZWRRdWVyeSA9IHRoaXMudG9TdHJpbmcodGhpcy5wcm9wcy5zZWFyY2hUZXJtKTtcbiAgICBsZXQgY29tcGlsZWRGaWx0ZXIgPSB0aGlzLnRvSXNGaWx0ZXIodGhpcy5wcm9wcy5maWx0ZXJlZFN0YXR1cykgKyBcIiBcIiArIHRoaXMudG9Jc0ZpbHRlcih0aGlzLnByb3BzLmZpbHRlcmVkQ29udGVudFR5cGUpICsgXCIgXCIgKyB0aGlzLnRvSW5GaWx0ZXIodGhpcy5wcm9wcy5maWx0ZXJlZFRvcGljKTtcbiAgICBjb21waWxlZEZpbHRlciA9IGNvbXBpbGVkRmlsdGVyLnNwbGl0KFwiICBcIikuam9pbihcIiBcIik7XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpPT50aGlzLm9uU3VibWl0KGUpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1pbm5lci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIHsvKiBUZW1wb3JhcnkgdXNlIG9mIFNlYXJjaCBJY29uICovfVxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LnBpY3BuZy5jb20vaW1hZ2VzL3NtYWxsL21hZ25pZnlpbmctZ2xhc3Mtc2VhcmNoLWxvdXBlLWltYWdlLWRvd25sb2FkLTQ5ODYzXCIgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWljb24gbWFnbmlmeWluZy1nbGFzc1wiLz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxwPlwiPC9wPlxuICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgdGV4dD1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IHZlaGljbGUsIHRvcGljLCBrZXl3b3JkIG9yIGNvbnRlbnQgdGl0bGUuLi5cIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpPT50aGlzLm9uSGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpfVxuXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbXBpbGVkUXVlcnl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwPlwiPC9wPlxuXG4gICAgICAgICAgICAgIHsvKiBTZWNvbmQgSW5wdXQgdG8gZGlzcGxheSBjaGVja2VkIGZpbHRlcnMgKi99XG4gICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0ZXh0PVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgdmVoaWNsZSwgdG9waWMsIGtleXdvcmQgb3IgY29udGVudCB0aXRsZS4uLlwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCk9PnRoaXMub25IYW5kbGVJbnB1dENoYW5nZShldmVudCl9XG5cbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGlsZWRGaWx0ZXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHAgb25DbGljaz17KGUpPT50aGlzLm9uU3VibWl0KGUpfSBjbGFzc05hbWU9XCJzYXZlLXNlYXJjaFwiPlNhdmU8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIHsvKiBTVFlMSU5HICovfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWFnbmlmeWluZy1nbGFzcyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW46IDAgMTZweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXg6IDEgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlucHV0LXdyYXBwZXIge1xuICAgICAgICAgICAgZmxleDogMSA4MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCA0cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCA0cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggNHB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbnB1dC1pbm5lci13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNlYXJjaC1pY29uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zYXZlLXNlYXJjaCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgY29sb3I6IHJnYig2NCAxMDIgMTQ5KTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDMycHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDY0IDEwMiAxNDkpO1xuICAgICAgICAgICAgZm9udDogNjAwIDAuODc1ZW0gc3lzdGVtLXVpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMTZweCAwcHggMTVweCAtM3B4IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IC0xNnB4IDBweCAxNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xNnB4IDBweCAxNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDM3NnB4KSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj4gICAgICBcbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgbGV0IHsgc2VhcmNoVGVybSwgZmlsdGVyZWRTdGF0dXMsIGZpbHRlcmVkQ29udGVudFR5cGUsIGZpbHRlcmVkVG9waWMgfSA9IHN0YXRlLnNlYXJjaDtcbiAgcmV0dXJuICh7XG4gIHNlYXJjaFRlcm0sXG4gIGZpbHRlcmVkU3RhdHVzLFxuICBmaWx0ZXJlZENvbnRlbnRUeXBlLFxuICBmaWx0ZXJlZFRvcGljLFxuICBmaWx0ZXJlZFN0YXR1cyxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTZWFyY2hTZWNvbmRhcnkpOyJdfQ== */\n/*@ sourceURL=components/SearchSecondary.js */'
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
//# sourceMappingURL=5.c908cdbd2c1687102ae8.hot-update.js.map