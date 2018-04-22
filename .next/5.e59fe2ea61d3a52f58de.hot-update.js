webpackHotUpdate(5,{

/***/ "./pages/search-results.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_shortid__ = __webpack_require__("./node_modules/shortid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_shortid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_shortid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_withRedux__ = __webpack_require__("./lib/withRedux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Filter__ = __webpack_require__("./components/Filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Banner__ = __webpack_require__("./components/Banner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ListBox__ = __webpack_require__("./components/ListBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Checkbox__ = __webpack_require__("./components/Checkbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_PageSection__ = __webpack_require__("./components/PageSection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_BreadCrumbs__ = __webpack_require__("./components/BreadCrumbs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_ResultItemSmall__ = __webpack_require__("./components/ResultItemSmall.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_SearchSecondary__ = __webpack_require__("./components/SearchSecondary.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_ProductThumbnail__ = __webpack_require__("./components/ProductThumbnail.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_Pagination__ = __webpack_require__("./components/Pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__actions_search__ = __webpack_require__("./actions/search.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/pages/search-results.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





















var SearchResults = function (_Component) {
  _inherits(SearchResults, _Component);

  function SearchResults() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchResults);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchResults.__proto__ || Object.getPrototypeOf(SearchResults)).call.apply(_ref, [this].concat(args))), _this), _this.filterStatus = function (input, data) {
      if (input !== undefined) {
        input ? _this.props.dispatch(__WEBPACK_IMPORTED_MODULE_16__actions_search__["b" /* addStatusFilter */](data)) : _this.props.dispatch(__WEBPACK_IMPORTED_MODULE_16__actions_search__["f" /* removeStatusFilter */](data));
      };
    }, _this.filterContentType = function (input, data) {
      if (input !== undefined) {
        input ? _this.props.dispatch(__WEBPACK_IMPORTED_MODULE_16__actions_search__["a" /* addContentTypeFilter */](data)) : _this.props.dispatch(__WEBPACK_IMPORTED_MODULE_16__actions_search__["e" /* removeContentTypeFilter */](data));
      };
    }, _this.filterTopic = function (input, data) {
      if (input !== undefined) {
        input ? _this.props.dispatch(__WEBPACK_IMPORTED_MODULE_16__actions_search__["c" /* addTopicFilter */](data)) : _this.props.dispatch(__WEBPACK_IMPORTED_MODULE_16__actions_search__["g" /* removeTopicFilter */](data));
      };
    }, _this.toggleFavoritedSearch = function (input) {
      if (input !== undefined) {
        _this.props.dispatch(__WEBPACK_IMPORTED_MODULE_16__actions_search__["i" /* toggleSavedSearch */](input));
      };
    }, _this.handleThumbnailClick = function (modelName) {
      return console.log('Vehicle Thumbnail: ' + modelName + ' clicked.');
    }, _this.handleResultClick = function (result) {
      console.log('Result: ' + result + ' clicked.');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchResults, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.dispatch(__WEBPACK_IMPORTED_MODULE_16__actions_search__["d" /* clearFilters */]());
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // Search results page: custom filters
      // XX: Make data dynamic once connected to graphQL ~
      var customFilters = [{
        title: "Status",
        options: [{
          label: "current",
          checked: false,
          fontColor: undefined
        }, {
          label: "archived",
          checked: false,
          fontColor: undefined
        }],
        clickAction: this.filterStatus
      }, {
        title: "Content Type",
        options: [{
          label: "Product",
          checked: false,
          fontColor: undefined
        }, {
          label: "Article",
          checked: false,
          fontColor: undefined
        }, {
          label: "Document",
          checked: false,
          fontColor: undefined
        }, {
          label: "Video",
          checked: false,
          fontColor: undefined
        }, {
          label: "Image",
          checked: false,
          fontColor: undefined
        }],
        clickAction: this.filterContentType
      }, {
        // XX: May need to query for an array of topics on ComponentWillMount();
        title: "Topic",
        options: [{
          label: "technology",
          checked: false,
          fontColor: undefined
        }, {
          label: "bluetooth",
          checked: false,
          fontColor: undefined
        }, {
          label: "product information",
          checked: false,
          fontColor: undefined
        }],
        clickAction: this.filterTopic
      }];

      // Favorite Checkbox Props (desktop & mobile);
      var favoritesDesktop = {
        label: "Show only favorites",
        fontColor: "rgb(64 101 149)",
        checked: false,
        clickAction: this.toggleFavoritedSearch
      };
      var favoritesMobile = {
        label: "Show Favorites",
        fontColor: "rgb(64 101 149)",
        checked: false,
        clickAction: this.toggleFavoritedSearch
      };

      var filters = customFilters.map(function (data, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Filter__["a" /* default */], _extends({ key: data.title, id: data.title }, data, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        }));
      });

      var productThumbnails = void 0,
          resultItems = void 0,
          queryItems = void 0,
          manageSavedSearches = void 0,
          savedSearchListBox = void 0,
          popularSearchListBox = void 0;
      var _props$sampleData = this.props.sampleData,
          products = _props$sampleData.products,
          favorited = _props$sampleData.favorited,
          savedSearches = _props$sampleData.savedSearches,
          contents = _props$sampleData.contents,
          savedAndFavs = _props$sampleData.savedAndFavs;

      if (products) {
        productThumbnails = products.map(function (product) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { key: product.id, className: 'jsx-1289796989' + ' ' + 'products-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 159
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_ProductThumbnail__["a" /* default */], _extends({ handleClick: _this2.handleThumbnailClick }, product, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 160
              }
            })),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
              styleId: '1289796989',
              css: '.products-wrapper.jsx-1289796989{font-size:16px;margin-bottom:32px;}@media all and (min-width:376px){.products-wrapper.jsx-1289796989{width:220px;font-size:17px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC1yZXN1bHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdLd0IsQUFHZ0MsQUFNRCxZQUNHLEdBTkUsWUFPbkIsT0FMRiIsImZpbGUiOiJwYWdlcy9zZWFyY2gtcmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc2hvcnRpZCBmcm9tICdzaG9ydGlkJztcblxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICcuLi9saWIvd2l0aFJlZHV4JztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9GaWx0ZXInO1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0Jhbm5lcic7XG5pbXBvcnQgTGlzdEJveCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RCb3gnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hlY2tib3gnO1xuaW1wb3J0IFBhZ2VTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZVNlY3Rpb24nO1xuaW1wb3J0IEJyZWFkQ3J1bWJzIGZyb20gJy4uL2NvbXBvbmVudHMvQnJlYWRDcnVtYnMnO1xuaW1wb3J0IFJlc3VsdEl0ZW1TbWFsbCBmcm9tICcuLi9jb21wb25lbnRzL1Jlc3VsdEl0ZW1TbWFsbCc7XG5pbXBvcnQgU2VhcmNoU2Vjb25kYXJ5IGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoU2Vjb25kYXJ5JztcbmltcG9ydCBQcm9kdWN0VGh1bWJuYWlsIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdFRodW1ibmFpbCc7XG5cblxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcblxuaW1wb3J0ICogYXMgYWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvc2VhcmNoJztcblxuY2xhc3MgU2VhcmNoUmVzdWx0cyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24uY2xlYXJGaWx0ZXJzKCkpO1xuICB9XG5cbiAgZmlsdGVyU3RhdHVzID0gKGlucHV0LCBkYXRhKSA9PiB7XG4gICAgaWYoaW5wdXQgIT09IHVuZGVmaW5lZCl7XG4gICAgICBpbnB1dCA/XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5hZGRTdGF0dXNGaWx0ZXIoZGF0YSkpIDpcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLnJlbW92ZVN0YXR1c0ZpbHRlcihkYXRhKSk7XG4gICAgfTtcbiAgfTtcblxuICBmaWx0ZXJDb250ZW50VHlwZSA9IChpbnB1dCxkYXRhKSA9PiB7XG4gICAgaWYoaW5wdXQgIT09IHVuZGVmaW5lZCl7XG4gICAgICBpbnB1dCA/XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5hZGRDb250ZW50VHlwZUZpbHRlcihkYXRhKSkgOlxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24ucmVtb3ZlQ29udGVudFR5cGVGaWx0ZXIoZGF0YSkpO1xuICAgIH07XG4gIH07XG5cbiAgZmlsdGVyVG9waWMgPSAoaW5wdXQsIGRhdGEpID0+IHtcbiAgICBpZihpbnB1dCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIGlucHV0ID9cbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLmFkZFRvcGljRmlsdGVyKGRhdGEpKSA6XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5yZW1vdmVUb3BpY0ZpbHRlcihkYXRhKSk7XG4gICAgfTtcbiAgfTtcblxuICB0b2dnbGVGYXZvcml0ZWRTZWFyY2ggPSAoaW5wdXQpID0+IHtcbiAgICBpZihpbnB1dCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLnRvZ2dsZVNhdmVkU2VhcmNoKGlucHV0KSk7XG4gICAgfTtcbiAgfTtcblxuICBoYW5kbGVUaHVtYm5haWxDbGljayA9IChtb2RlbE5hbWUpID0+IChcbiAgICBjb25zb2xlLmxvZyhgVmVoaWNsZSBUaHVtYm5haWw6ICR7bW9kZWxOYW1lfSBjbGlja2VkLmApXG4gICk7XG5cbiAgaGFuZGxlUmVzdWx0Q2xpY2sgPSAocmVzdWx0KSA9PiB7XG4gICAgY29uc29sZS5sb2coYFJlc3VsdDogJHtyZXN1bHR9IGNsaWNrZWQuYClcbiAgfTtcblxuICByZW5kZXIoKSB7ICBcblxuICAgIC8vIFNlYXJjaCByZXN1bHRzIHBhZ2U6IGN1c3RvbSBmaWx0ZXJzXG4gICAgLy8gWFg6IE1ha2UgZGF0YSBkeW5hbWljIG9uY2UgY29ubmVjdGVkIHRvIGdyYXBoUUwgflxuICAgIGNvbnN0IGN1c3RvbUZpbHRlcnMgPSBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIlN0YXR1c1wiLFxuICAgICAgICBvcHRpb25zOlt7XG4gICAgICAgICAgbGFiZWw6IFwiY3VycmVudFwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sIFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiYXJjaGl2ZWRcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9XSxcbiAgICAgICAgY2xpY2tBY3Rpb246IHRoaXMuZmlsdGVyU3RhdHVzLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQ29udGVudCBUeXBlXCIsXG4gICAgICAgIG9wdGlvbnM6IFt7XG4gICAgICAgICAgbGFiZWw6IFwiUHJvZHVjdFwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJBcnRpY2xlXCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkRvY3VtZW50XCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICBsYWJlbDogXCJWaWRlb1wiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgbGFiZWw6IFwiSW1hZ2VcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZCxcbiAgICAgICAgfV0sIFxuICAgICAgICBjbGlja0FjdGlvbjogdGhpcy5maWx0ZXJDb250ZW50VHlwZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gWFg6IE1heSBuZWVkIHRvIHF1ZXJ5IGZvciBhbiBhcnJheSBvZiB0b3BpY3Mgb24gQ29tcG9uZW50V2lsbE1vdW50KCk7XG4gICAgICAgIHRpdGxlOiBcIlRvcGljXCIsXG4gICAgICAgIG9wdGlvbnM6IFt7XG4gICAgICAgICAgbGFiZWw6IFwidGVjaG5vbG9neVwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJibHVldG9vdGhcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwicHJvZHVjdCBpbmZvcm1hdGlvblwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH1dLFxuICAgICAgICBjbGlja0FjdGlvbjogdGhpcy5maWx0ZXJUb3BpY1xuICAgICAgfVxuICAgIF07XG5cbiAgICAvLyBGYXZvcml0ZSBDaGVja2JveCBQcm9wcyAoZGVza3RvcCAmIG1vYmlsZSk7XG4gICAgY29uc3QgZmF2b3JpdGVzRGVza3RvcCA9IHtcbiAgICAgIGxhYmVsOiBcIlNob3cgb25seSBmYXZvcml0ZXNcIixcbiAgICAgIGZvbnRDb2xvcjogXCJyZ2IoNjQgMTAxIDE0OSlcIixcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgY2xpY2tBY3Rpb246IHRoaXMudG9nZ2xlRmF2b3JpdGVkU2VhcmNoLFxuICAgIH1cbiAgICBjb25zdCBmYXZvcml0ZXNNb2JpbGUgPSB7XG4gICAgICBsYWJlbDogXCJTaG93IEZhdm9yaXRlc1wiLFxuICAgICAgZm9udENvbG9yOiBcInJnYig2NCAxMDEgMTQ5KVwiLFxuICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICBjbGlja0FjdGlvbjogdGhpcy50b2dnbGVGYXZvcml0ZWRTZWFyY2gsXG4gICAgfVxuXG4gICAgbGV0IGZpbHRlcnMgPSBjdXN0b21GaWx0ZXJzLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiA8RmlsdGVyIGtleT17ZGF0YS50aXRsZX0gaWQ9e2RhdGEudGl0bGV9IHsuLi5kYXRhfS8+XG4gICAgfSlcblxuICAgIGxldCBwcm9kdWN0VGh1bWJuYWlscywgcmVzdWx0SXRlbXMsIHF1ZXJ5SXRlbXMsIG1hbmFnZVNhdmVkU2VhcmNoZXMsIHNhdmVkU2VhcmNoTGlzdEJveCwgcG9wdWxhclNlYXJjaExpc3RCb3g7IFxuICAgIGNvbnN0IHsgcHJvZHVjdHMsIGZhdm9yaXRlZCwgc2F2ZWRTZWFyY2hlcywgY29udGVudHMsIHNhdmVkQW5kRmF2c30gPSB0aGlzLnByb3BzLnNhbXBsZURhdGE7XG4gICAgaWYocHJvZHVjdHMpe1xuICAgICAgcHJvZHVjdFRodW1ibmFpbHMgPSBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT1cInByb2R1Y3RzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxQcm9kdWN0VGh1bWJuYWlsIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZVRodW1ibmFpbENsaWNrfSB7Li4ucHJvZHVjdH0gLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLnByb2R1Y3RzLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICAgICAgICAgIC8vWFggT25lIGNhciBkaXNwbGF5IGhlcmVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgICAgIC5wcm9kdWN0cy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmKGNvbnRlbnRzKXtcbiAgICAgIHJlc3VsdEl0ZW1zID0gY29udGVudHMubWFwKGNvbnRlbnQgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtjb250ZW50LmlkfSBjbGFzc05hbWU9XCJjb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxSZXN1bHRJdGVtU21hbGwga2V5PXtjb250ZW50LmlkfSBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVSZXN1bHRDbGlja30gey4uLmNvbnRlbnR9IC8+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5jb250ZW50LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY29udGVudC13cmFwcGVyOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBcbiAgICAvL1hYOiBNb2NrIGRhdGEgZm9yIG5vdy4gVE9ETzogY2hhbmdlIFwiY29sbGVjdGlvblwiIGFycmF5IHRvIHF1ZXJ5IHJlc3VsdHMgb2YgdXNlcidzIFNhdmVkIFNlYXJjaGVzLlxuICAgIGNvbnNvbGUubG9nKHNhdmVkQW5kRmF2cylcbiAgICBpZihzYXZlZEFuZEZhdnMpIHtcbiAgICAgIGxldCBzYXZlZFNlYXJjaFByb3BzID0ge1xuICAgICAgICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxuICAgICAgICB0aXRsZTogJ1NhdmVkIFNlYXJjaGVzJyxcbiAgICAgICAgY29sbGVjdGlvbjogc2F2ZWRBbmRGYXZzXG4gICAgICB9XG4gICAgICBzYXZlZFNlYXJjaExpc3RCb3ggPSAoXG4gICAgICAgIDxMaXN0Qm94IGtleT17c2F2ZWRBbmRGYXZzLmlkfSB7Li4uc2F2ZWRTZWFyY2hQcm9wc30vPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvL1hYOiBNb2NrIGRhdGEgZm9yIG5vdy4gVE9ETzogY2hhbmdlIFwiY29sbGVjdGlvblwiIGFycmF5IHRvIHF1ZXJ5IHJlc3VsdHMgb2YgUG9wdWxhciBTZWFyY2hlcy5cbiAgICBpZihzYXZlZEFuZEZhdnMpIHtcbiAgICAgIGxldCBwb3B1bGFyU2VhcmNoUHJvcHMgPSB7XG4gICAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXG4gICAgICAgIHRpdGxlOiAnUGVvcGxlIGFsc28gc2VhcmNoIGZvci4uLicsXG4gICAgICAgIGNvbGxlY3Rpb246IHNhdmVkQW5kRmF2cyxcbiAgICAgIH1cbiAgICAgIHBvcHVsYXJTZWFyY2hMaXN0Qm94ID0gKFxuICAgICAgICA8TGlzdEJveCBrZXk9e3NhdmVkQW5kRmF2cy5pZH0gey4uLnBvcHVsYXJTZWFyY2hQcm9wc30vPlxuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQ3VzdG9tIHBhdGggZm9yIGJyZWFkY3J1bWJzLiBcbiAgICBjb25zdCBwYXRoID0gW1xuICAgICAge1xuICAgICAgICB0aXRsZTpcIlNlYXJjaFwiLFxuICAgICAgICByb3V0ZTogXCIvZGFzaGJvYXJkXCIsXG4gICAgICAgIGFycm93OiBcIj5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gWFg6IEhhcmQgY29kZWQgZGF0YSBmb3Igbm93LiBDb25uZWN0IHdpdGggdG90YWwgcXVlcnkgcmVzdWx0ICMgXG4gICAgICAgIC8vIGFuZCB3cml0ZSBsb2dpYyBmb3Igc2luZ2x1YXIgdnMgcGx1cmFsIChyZXN1bHQgJiByZXN1bHRzKTtcbiAgICAgICAgdGl0bGU6IGAxNzIgUmVzdWx0c2AsIFxuICAgICAgICByb3V0ZTogdW5kZWZpbmVkLFxuICAgICAgICBhcnJvdzogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgXTtcblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbm9ybWFsaXplLzcuMC4wL25vcm1hbGl6ZS5jc3NcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxoMz4oU0VBUkNIIFJFU1VMVCBQQUdFKTwvaDM+XG4gICAgICAgIDxCYW5uZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8QnJlYWRDcnVtYnMgcGF0aHM9e3BhdGh9Lz5cblxuICAgICAgICAgICAgPFNlYXJjaFNlY29uZGFyeS8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2t0b3Atdmlld1wiPjxDaGVja2JveCBpZD17ZmF2b3JpdGVzRGVza3RvcC5sYWJlbH0gey4uLmZhdm9yaXRlc0Rlc2t0b3B9Lz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtdmlld1wiPjxDaGVja2JveCBpZD17ZmF2b3JpdGVzTW9iaWxlLmxhYmVsfSB7Li4uZmF2b3JpdGVzTW9iaWxlfS8+PC9kaXY+XG5cbiAgICAgICAgICAgICAge2ZpbHRlcnN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9CYW5uZXI+XG4gICAgICAgIFxuICAgICAgICA8UGFnZVNlY3Rpb24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIHsvKiBQcm9kdWN0cyBTZWN0aW9uICovfVxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2Utc2VjdGlvbi1oZWFkZXJcIj5Qcm9kdWN0czwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlaGljbGUtdGh1bWJuYWlscy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIHtwcm9kdWN0VGh1bWJuYWlsc31cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQ29udGVudCBTZWN0aW9uICovfVxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2Utc2VjdGlvbi1oZWFkZXJcIj5Db250ZW50PC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudHMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdC1pdGVtcy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAge3Jlc3VsdEl0ZW1zfVxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ib3gtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ib3hcIj57c2F2ZWRTZWFyY2hMaXN0Qm94fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ib3hcIj57cG9wdWxhclNlYXJjaExpc3RCb3h9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgIDwvUGFnZVNlY3Rpb24+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5kZXNrdG9wLXZpZXcge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1vYmlsZS12aWV3IHtcbiAgICAgICAgICAgIG1hcmdpbjogMzJweCAwIC00cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wYWdlLXNlY3Rpb24taGVhZGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogOHB4Oy8vXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiKDIzMSwgMjMxLCAyMzEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLy9cbiAgICAgICAgICAuc2VhcmNoLXJlc3VsdC13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC52ZWhpY2xlLXRodW1ibmFpbHMtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVzdWx0LWl0ZW1zLXdyYXBwZXIgeyAvL1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAgICAgIGZsZXg6IDEgMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpc3QtYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgZmxleDogMSAzMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0LWJveCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAzMnB4IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgIC5kZXNrdG9wLXZpZXcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vYmlsZS12aWV3IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWx0ZXItd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWx0ZXItd3JhcHBlciA+ICoge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWdlLXNlY3Rpb24taGVhZGVyIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCA2cHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDZweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDZweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGVudHMtd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZXN1bHQtaXRlbXMtd3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAzMnB4IDE2cHggMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgc2FtcGxlRGF0YTogc3RhdGUuc2FtcGxlRGF0YVxufSlcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTZWFyY2hSZXN1bHRzKSk7Il19 */\n/*@ sourceURL=pages/search-results.js */'
            })
          );
        });
      };

      if (contents) {
        resultItems = contents.map(function (content) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { key: content.id, className: 'jsx-1327913020' + ' ' + 'content-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 183
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_ResultItemSmall__["a" /* default */], _extends({ key: content.id, handleClick: _this2.handleResultClick }, content, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 184
              }
            })),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
              styleId: '1327913020',
              css: '.content-wrapper.jsx-1327913020{border:1px solid lightgrey;border-radius:4px;margin-bottom:16px;padding:0 16px;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;}.content-wrapper.jsx-1327913020:hover{cursor:pointer;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;-webkit-box-shadow:0px 10px 10px -6px rgba(0,0,0,0.15);-moz-box-shadow:0px 10px 10px -6px rgba(0,0,0,0.15);box-shadow:0px 10px 10px -6px rgba(0,0,0,0.15);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC1yZXN1bHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdMd0IsQUFHNEMsQUFPWixlQUNVLFlBUFAsa0JBQ0MsbUJBQ0osU0FNd0MsTUFMOUIsaURBTTJCLFNBTHRELDJDQU1pRCwrQ0FDakQiLCJmaWxlIjoicGFnZXMvc2VhcmNoLXJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VkZGlleWFvL0Rlc2t0b3AvZ3BfZHJhZnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHNob3J0aWQgZnJvbSAnc2hvcnRpZCc7XG5cbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnLi4vbGliL3dpdGhSZWR1eCc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRmlsdGVyJztcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9CYW5uZXInO1xuaW1wb3J0IExpc3RCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0Qm94JztcbmltcG9ydCBDaGVja2JveCBmcm9tICcuLi9jb21wb25lbnRzL0NoZWNrYm94JztcbmltcG9ydCBQYWdlU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2VTZWN0aW9uJztcbmltcG9ydCBCcmVhZENydW1icyBmcm9tICcuLi9jb21wb25lbnRzL0JyZWFkQ3J1bWJzJztcbmltcG9ydCBSZXN1bHRJdGVtU21hbGwgZnJvbSAnLi4vY29tcG9uZW50cy9SZXN1bHRJdGVtU21hbGwnO1xuaW1wb3J0IFNlYXJjaFNlY29uZGFyeSBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaFNlY29uZGFyeSc7XG5pbXBvcnQgUHJvZHVjdFRodW1ibmFpbCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RUaHVtYm5haWwnO1xuXG5cbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnaW5hdGlvbic7XG5cbmltcG9ydCAqIGFzIGFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL3NlYXJjaCc7XG5cbmNsYXNzIFNlYXJjaFJlc3VsdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLmNsZWFyRmlsdGVycygpKTtcbiAgfVxuXG4gIGZpbHRlclN0YXR1cyA9IChpbnB1dCwgZGF0YSkgPT4ge1xuICAgIGlmKGlucHV0ICE9PSB1bmRlZmluZWQpe1xuICAgICAgaW5wdXQgP1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24uYWRkU3RhdHVzRmlsdGVyKGRhdGEpKSA6XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5yZW1vdmVTdGF0dXNGaWx0ZXIoZGF0YSkpO1xuICAgIH07XG4gIH07XG5cbiAgZmlsdGVyQ29udGVudFR5cGUgPSAoaW5wdXQsZGF0YSkgPT4ge1xuICAgIGlmKGlucHV0ICE9PSB1bmRlZmluZWQpe1xuICAgICAgaW5wdXQgP1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24uYWRkQ29udGVudFR5cGVGaWx0ZXIoZGF0YSkpIDpcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLnJlbW92ZUNvbnRlbnRUeXBlRmlsdGVyKGRhdGEpKTtcbiAgICB9O1xuICB9O1xuXG4gIGZpbHRlclRvcGljID0gKGlucHV0LCBkYXRhKSA9PiB7XG4gICAgaWYoaW5wdXQgIT09IHVuZGVmaW5lZCl7XG4gICAgICBpbnB1dCA/XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5hZGRUb3BpY0ZpbHRlcihkYXRhKSkgOlxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24ucmVtb3ZlVG9waWNGaWx0ZXIoZGF0YSkpO1xuICAgIH07XG4gIH07XG5cbiAgdG9nZ2xlRmF2b3JpdGVkU2VhcmNoID0gKGlucHV0KSA9PiB7XG4gICAgaWYoaW5wdXQgIT09IHVuZGVmaW5lZCl7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi50b2dnbGVTYXZlZFNlYXJjaChpbnB1dCkpO1xuICAgIH07XG4gIH07XG5cbiAgaGFuZGxlVGh1bWJuYWlsQ2xpY2sgPSAobW9kZWxOYW1lKSA9PiAoXG4gICAgY29uc29sZS5sb2coYFZlaGljbGUgVGh1bWJuYWlsOiAke21vZGVsTmFtZX0gY2xpY2tlZC5gKVxuICApO1xuXG4gIGhhbmRsZVJlc3VsdENsaWNrID0gKHJlc3VsdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBSZXN1bHQ6ICR7cmVzdWx0fSBjbGlja2VkLmApXG4gIH07XG5cbiAgcmVuZGVyKCkgeyAgXG5cbiAgICAvLyBTZWFyY2ggcmVzdWx0cyBwYWdlOiBjdXN0b20gZmlsdGVyc1xuICAgIC8vIFhYOiBNYWtlIGRhdGEgZHluYW1pYyBvbmNlIGNvbm5lY3RlZCB0byBncmFwaFFMIH5cbiAgICBjb25zdCBjdXN0b21GaWx0ZXJzID0gW1xuICAgICAge1xuICAgICAgICB0aXRsZTogXCJTdGF0dXNcIixcbiAgICAgICAgb3B0aW9uczpbe1xuICAgICAgICAgIGxhYmVsOiBcImN1cnJlbnRcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LCBcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcImFyY2hpdmVkXCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfV0sXG4gICAgICAgIGNsaWNrQWN0aW9uOiB0aGlzLmZpbHRlclN0YXR1cyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkNvbnRlbnQgVHlwZVwiLFxuICAgICAgICBvcHRpb25zOiBbe1xuICAgICAgICAgIGxhYmVsOiBcIlByb2R1Y3RcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiQXJ0aWNsZVwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJEb2N1bWVudFwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgbGFiZWw6IFwiVmlkZW9cIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgIGxhYmVsOiBcIkltYWdlXCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWQsXG4gICAgICAgIH1dLCBcbiAgICAgICAgY2xpY2tBY3Rpb246IHRoaXMuZmlsdGVyQ29udGVudFR5cGVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIFhYOiBNYXkgbmVlZCB0byBxdWVyeSBmb3IgYW4gYXJyYXkgb2YgdG9waWNzIG9uIENvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgICAgICB0aXRsZTogXCJUb3BpY1wiLFxuICAgICAgICBvcHRpb25zOiBbe1xuICAgICAgICAgIGxhYmVsOiBcInRlY2hub2xvZ3lcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiYmx1ZXRvb3RoXCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcInByb2R1Y3QgaW5mb3JtYXRpb25cIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9XSxcbiAgICAgICAgY2xpY2tBY3Rpb246IHRoaXMuZmlsdGVyVG9waWNcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgLy8gRmF2b3JpdGUgQ2hlY2tib3ggUHJvcHMgKGRlc2t0b3AgJiBtb2JpbGUpO1xuICAgIGNvbnN0IGZhdm9yaXRlc0Rlc2t0b3AgPSB7XG4gICAgICBsYWJlbDogXCJTaG93IG9ubHkgZmF2b3JpdGVzXCIsXG4gICAgICBmb250Q29sb3I6IFwicmdiKDY0IDEwMSAxNDkpXCIsXG4gICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgIGNsaWNrQWN0aW9uOiB0aGlzLnRvZ2dsZUZhdm9yaXRlZFNlYXJjaCxcbiAgICB9XG4gICAgY29uc3QgZmF2b3JpdGVzTW9iaWxlID0ge1xuICAgICAgbGFiZWw6IFwiU2hvdyBGYXZvcml0ZXNcIixcbiAgICAgIGZvbnRDb2xvcjogXCJyZ2IoNjQgMTAxIDE0OSlcIixcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgY2xpY2tBY3Rpb246IHRoaXMudG9nZ2xlRmF2b3JpdGVkU2VhcmNoLFxuICAgIH1cblxuICAgIGxldCBmaWx0ZXJzID0gY3VzdG9tRmlsdGVycy5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gPEZpbHRlciBrZXk9e2RhdGEudGl0bGV9IGlkPXtkYXRhLnRpdGxlfSB7Li4uZGF0YX0vPlxuICAgIH0pXG5cbiAgICBsZXQgcHJvZHVjdFRodW1ibmFpbHMsIHJlc3VsdEl0ZW1zLCBxdWVyeUl0ZW1zLCBtYW5hZ2VTYXZlZFNlYXJjaGVzLCBzYXZlZFNlYXJjaExpc3RCb3gsIHBvcHVsYXJTZWFyY2hMaXN0Qm94OyBcbiAgICBjb25zdCB7IHByb2R1Y3RzLCBmYXZvcml0ZWQsIHNhdmVkU2VhcmNoZXMsIGNvbnRlbnRzLCBzYXZlZEFuZEZhdnN9ID0gdGhpcy5wcm9wcy5zYW1wbGVEYXRhO1xuICAgIGlmKHByb2R1Y3RzKXtcbiAgICAgIHByb2R1Y3RUaHVtYm5haWxzID0gcHJvZHVjdHMubWFwKHByb2R1Y3QgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0LmlkfSBjbGFzc05hbWU9XCJwcm9kdWN0cy13cmFwcGVyXCI+XG4gICAgICAgICAgICA8UHJvZHVjdFRodW1ibmFpbCBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVUaHVtYm5haWxDbGlja30gey4uLnByb2R1Y3R9IC8+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5wcm9kdWN0cy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICAgICAgICAgICAgICAvL1hYIE9uZSBjYXIgZGlzcGxheSBoZXJlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgICAgICAucHJvZHVjdHMtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZihjb250ZW50cyl7XG4gICAgICByZXN1bHRJdGVtcyA9IGNvbnRlbnRzLm1hcChjb250ZW50ID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17Y29udGVudC5pZH0gY2xhc3NOYW1lPVwiY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8UmVzdWx0SXRlbVNtYWxsIGtleT17Y29udGVudC5pZH0gaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlUmVzdWx0Q2xpY2t9IHsuLi5jb250ZW50fSAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAuY29udGVudC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbnRlbnQtd3JhcHBlcjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgXG4gICAgLy9YWDogTW9jayBkYXRhIGZvciBub3cuIFRPRE86IGNoYW5nZSBcImNvbGxlY3Rpb25cIiBhcnJheSB0byBxdWVyeSByZXN1bHRzIG9mIHVzZXIncyBTYXZlZCBTZWFyY2hlcy5cbiAgICBjb25zb2xlLmxvZyhzYXZlZEFuZEZhdnMpXG4gICAgaWYoc2F2ZWRBbmRGYXZzKSB7XG4gICAgICBsZXQgc2F2ZWRTZWFyY2hQcm9wcyA9IHtcbiAgICAgICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgdGl0bGU6ICdTYXZlZCBTZWFyY2hlcycsXG4gICAgICAgIGNvbGxlY3Rpb246IHNhdmVkQW5kRmF2c1xuICAgICAgfVxuICAgICAgc2F2ZWRTZWFyY2hMaXN0Qm94ID0gKFxuICAgICAgICA8TGlzdEJveCBrZXk9e3NhdmVkQW5kRmF2cy5pZH0gey4uLnNhdmVkU2VhcmNoUHJvcHN9Lz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy9YWDogTW9jayBkYXRhIGZvciBub3cuIFRPRE86IGNoYW5nZSBcImNvbGxlY3Rpb25cIiBhcnJheSB0byBxdWVyeSByZXN1bHRzIG9mIFBvcHVsYXIgU2VhcmNoZXMuXG4gICAgaWYoc2F2ZWRBbmRGYXZzKSB7XG4gICAgICBsZXQgcG9wdWxhclNlYXJjaFByb3BzID0ge1xuICAgICAgICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxuICAgICAgICB0aXRsZTogJ1Blb3BsZSBhbHNvIHNlYXJjaCBmb3IuLi4nLFxuICAgICAgICBjb2xsZWN0aW9uOiBzYXZlZEFuZEZhdnMsXG4gICAgICB9XG4gICAgICBwb3B1bGFyU2VhcmNoTGlzdEJveCA9IChcbiAgICAgICAgPExpc3RCb3gga2V5PXtzYXZlZEFuZEZhdnMuaWR9IHsuLi5wb3B1bGFyU2VhcmNoUHJvcHN9Lz5cbiAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8vIEN1c3RvbSBwYXRoIGZvciBicmVhZGNydW1icy4gXG4gICAgY29uc3QgcGF0aCA9IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6XCJTZWFyY2hcIixcbiAgICAgICAgcm91dGU6IFwiL2Rhc2hib2FyZFwiLFxuICAgICAgICBhcnJvdzogXCI+XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIFhYOiBIYXJkIGNvZGVkIGRhdGEgZm9yIG5vdy4gQ29ubmVjdCB3aXRoIHRvdGFsIHF1ZXJ5IHJlc3VsdCAjIFxuICAgICAgICAvLyBhbmQgd3JpdGUgbG9naWMgZm9yIHNpbmdsdWFyIHZzIHBsdXJhbCAocmVzdWx0ICYgcmVzdWx0cyk7XG4gICAgICAgIHRpdGxlOiBgMTcyIFJlc3VsdHNgLCBcbiAgICAgICAgcm91dGU6IHVuZGVmaW5lZCxcbiAgICAgICAgYXJyb3c6IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIF07XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL25vcm1hbGl6ZS83LjAuMC9ub3JtYWxpemUuY3NzXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8aDM+KFNFQVJDSCBSRVNVTFQgUEFHRSk8L2gzPlxuICAgICAgICA8QmFubmVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPEJyZWFkQ3J1bWJzIHBhdGhzPXtwYXRofS8+XG5cbiAgICAgICAgICAgIDxTZWFyY2hTZWNvbmRhcnkvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItd3JhcHBlclwiPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNrdG9wLXZpZXdcIj48Q2hlY2tib3ggaWQ9e2Zhdm9yaXRlc0Rlc2t0b3AubGFiZWx9IHsuLi5mYXZvcml0ZXNEZXNrdG9wfS8+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLXZpZXdcIj48Q2hlY2tib3ggaWQ9e2Zhdm9yaXRlc01vYmlsZS5sYWJlbH0gey4uLmZhdm9yaXRlc01vYmlsZX0vPjwvZGl2PlxuXG4gICAgICAgICAgICAgIHtmaWx0ZXJzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQmFubmVyPlxuICAgICAgICBcbiAgICAgICAgPFBhZ2VTZWN0aW9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdC13cmFwcGVyXCI+XG4gICAgICAgICAgICB7LyogUHJvZHVjdHMgU2VjdGlvbiAqL31cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXNlY3Rpb24taGVhZGVyXCI+UHJvZHVjdHM8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZWhpY2xlLXRodW1ibmFpbHMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICB7cHJvZHVjdFRodW1ibmFpbHN9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIENvbnRlbnQgU2VjdGlvbiAqL31cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXNlY3Rpb24taGVhZGVyXCI+Q29udGVudDwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtaXRlbXMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIHtyZXN1bHRJdGVtc31cbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbi8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtYm94LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtYm94XCI+e3NhdmVkU2VhcmNoTGlzdEJveH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtYm94XCI+e3BvcHVsYXJTZWFyY2hMaXN0Qm94fTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICA8L1BhZ2VTZWN0aW9uPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZGVza3RvcC12aWV3IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2JpbGUtdmlldyB7XG4gICAgICAgICAgICBtYXJnaW46IDMycHggMCAtNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGFnZS1zZWN0aW9uLWhlYWRlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDhweDsvL1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYigyMzEsIDIzMSwgMjMxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8vXG4gICAgICAgICAgLnNlYXJjaC1yZXN1bHQtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudmVoaWNsZS10aHVtYm5haWxzLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlc3VsdC1pdGVtcy13cmFwcGVyIHsgLy9cbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgICAgICAgICBmbGV4OiAxIDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaXN0LWJveC13cmFwcGVyIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMzAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGlzdC1ib3gge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMzJweCAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDM3NnB4KSB7XG4gICAgICAgICAgICAuZGVza3RvcC12aWV3IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb2JpbGUtdmlldyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmlsdGVyLXdyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmlsdGVyLXdyYXBwZXIgPiAqIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFnZS1zZWN0aW9uLWhlYWRlciB7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggNnB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMTBweCA2cHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCA2cHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnRzLXdyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmVzdWx0LWl0ZW1zLXdyYXBwZXIge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMzJweCAxNnB4IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIHNhbXBsZURhdGE6IHN0YXRlLnNhbXBsZURhdGFcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2VhcmNoUmVzdWx0cykpOyJdfQ== */\n/*@ sourceURL=pages/search-results.js */'
            })
          );
        });
      };

      //XX: Mock data for now. TODO: change "collection" array to query results of user's Saved Searches.
      console.log(savedAndFavs);
      if (savedAndFavs) {
        var savedSearchProps = {
          id: __WEBPACK_IMPORTED_MODULE_4_shortid___default.a.generate(),
          title: 'Saved Searches',
          collection: savedAndFavs
        };
        savedSearchListBox = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_ListBox__["a" /* default */], _extends({ key: savedAndFavs.id }, savedSearchProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          }
        }));
      }

      //XX: Mock data for now. TODO: change "collection" array to query results of Popular Searches.
      if (savedAndFavs) {
        var popularSearchProps = {
          id: __WEBPACK_IMPORTED_MODULE_4_shortid___default.a.generate(),
          title: 'People also search for...',
          collection: savedAndFavs
        };
        popularSearchListBox = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_ListBox__["a" /* default */], _extends({ key: savedAndFavs.id }, popularSearchProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          }
        }));
      }

      // Custom path for breadcrumbs. 
      var path = [{
        title: "Search",
        route: "/dashboard",
        arrow: ">"
      }, {
        // XX: Hard coded data for now. Connect with total query result # 
        // and write logic for singluar vs plural (result & results);
        title: '172 Results',
        route: undefined,
        arrow: undefined
      }];

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-2995113546' + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 250
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css', className: 'jsx-2995113546',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 251
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', className: 'jsx-2995113546',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 252
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h3',
          {
            className: 'jsx-2995113546',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 255
            }
          },
          '(SEARCH RESULT PAGE)'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7__components_Banner__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 256
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2995113546' + ' ' + 'banner-content-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 257
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_BreadCrumbs__["a" /* default */], { paths: path, __source: {
                fileName: _jsxFileName,
                lineNumber: 258
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_SearchSecondary__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 260
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-2995113546' + ' ' + 'filter-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 261
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-2995113546' + ' ' + 'desktop-view',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 263
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Checkbox__["a" /* default */], _extends({ id: favoritesDesktop.label }, favoritesDesktop, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 263
                  }
                }))
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-2995113546' + ' ' + 'mobile-view',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 264
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Checkbox__["a" /* default */], _extends({ id: favoritesMobile.label }, favoritesMobile, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 264
                  }
                }))
              ),
              filters
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_10__components_PageSection__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 271
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2995113546' + ' ' + 'search-result-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 272
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'h3',
              {
                className: 'jsx-2995113546' + ' ' + 'page-section-header',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 274
                }
              },
              'Products'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-2995113546' + ' ' + 'vehicle-thumbnails-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 275
                }
              },
              productThumbnails
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'h3',
              {
                className: 'jsx-2995113546' + ' ' + 'page-section-header',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 280
                }
              },
              'Content'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-2995113546' + ' ' + 'contents-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 281
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-2995113546' + ' ' + 'result-items-wrapper',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 282
                  }
                },
                resultItems,
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_Pagination__["a" /* default */], {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 284
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-2995113546' + ' ' + 'list-box-wrapper',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 286
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-2995113546' + ' ' + 'list-box',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 287
                    }
                  },
                  savedSearchListBox
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'div',
                  {
                    className: 'jsx-2995113546' + ' ' + 'list-box',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 288
                    }
                  },
                  popularSearchListBox
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2995113546',
          css: '.desktop-view.jsx-2995113546{display:none;}.mobile-view.jsx-2995113546{margin:32px 0 -4px;}.page-section-header.jsx-2995113546{font-size:1.5em;padding-bottom:32px;border-bottom:2px dashed rgb(231,231,231);}.search-result-wrapper.jsx-2995113546{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;}.vehicle-thumbnails-wrapper.jsx-2995113546{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.result-items-wrapper.jsx-2995113546{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-flex:1 100%;-ms-flex:1 100%;flex:1 100%;margin-bottom:16px;}list-box-wrapper.jsx-2995113546{-webkit-flex:1 30%;-ms-flex:1 30%;flex:1 30%;}.list-box.jsx-2995113546{margin:0 0 32px 0;}@media all and (min-width:376px){.desktop-view.jsx-2995113546{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.mobile-view.jsx-2995113546{display:none;}.filter-wrapper.jsx-2995113546{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:100%;min-width:400px;margin-left:40px;}.filter-wrapper.jsx-2995113546>*.jsx-2995113546{margin:0 20px;}.page-section-header.jsx-2995113546{border-bottom:none;padding-bottom:8px;-webkit-box-shadow:0px 10px 6px -6px rgba(0,0,0,0.15);-moz-box-shadow:0px 10px 6px -6px rgba(0,0,0,0.15);box-shadow:0px 10px 6px -6px rgba(0,0,0,0.15);}.contents-wrapper.jsx-2995113546{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;}.result-items-wrapper.jsx-2995113546{margin:0 32px 16px 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC1yZXN1bHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlTb0IsQUFHMEIsQUFHTSxBQUdILEFBT0gsQUFJQSxBQUdBLEFBTUYsQUFHTyxBQUtILEFBR0EsQUFHQSxBQVFDLEFBR0ssQUFPTixBQUtoQixhQTlERCxBQXFDRSxDQVdBLEVBekNvQixFQXNCdEIsQ0ExQkEsQUFnRHVCLEVBV3JCLGVBdEQ0QyxFQTRDWSxPQTFCMUQsNkJBYjBCLEFBSTFCLEFBRzBCLEFBY3hCLEFBTXFCLEFBa0JFLElBakR6QixjQTRDdUQsbURBQ0wsTUFLaEQsU0E3Q0YsQUFPYyxTQW9CZSxzQkFjM0IsaUJBakNtQixtQkFDckIsdUNBbUJlLFdBQ0ssZ0JBQ0MsaUJBQ25CIiwiZmlsZSI6InBhZ2VzL3NlYXJjaC1yZXN1bHRzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lZGRpZXlhby9EZXNrdG9wL2dwX2RyYWZ0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzaG9ydGlkIGZyb20gJ3Nob3J0aWQnO1xuXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJy4uL2xpYi93aXRoUmVkdXgnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi9jb21wb25lbnRzL0ZpbHRlcic7XG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQmFubmVyJztcbmltcG9ydCBMaXN0Qm94IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdEJveCc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi4vY29tcG9uZW50cy9DaGVja2JveCc7XG5pbXBvcnQgUGFnZVNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlU2VjdGlvbic7XG5pbXBvcnQgQnJlYWRDcnVtYnMgZnJvbSAnLi4vY29tcG9uZW50cy9CcmVhZENydW1icyc7XG5pbXBvcnQgUmVzdWx0SXRlbVNtYWxsIGZyb20gJy4uL2NvbXBvbmVudHMvUmVzdWx0SXRlbVNtYWxsJztcbmltcG9ydCBTZWFyY2hTZWNvbmRhcnkgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hTZWNvbmRhcnknO1xuaW1wb3J0IFByb2R1Y3RUaHVtYm5haWwgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0VGh1bWJuYWlsJztcblxuXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xuXG5pbXBvcnQgKiBhcyBhY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9zZWFyY2gnO1xuXG5jbGFzcyBTZWFyY2hSZXN1bHRzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5jbGVhckZpbHRlcnMoKSk7XG4gIH1cblxuICBmaWx0ZXJTdGF0dXMgPSAoaW5wdXQsIGRhdGEpID0+IHtcbiAgICBpZihpbnB1dCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIGlucHV0ID9cbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLmFkZFN0YXR1c0ZpbHRlcihkYXRhKSkgOlxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24ucmVtb3ZlU3RhdHVzRmlsdGVyKGRhdGEpKTtcbiAgICB9O1xuICB9O1xuXG4gIGZpbHRlckNvbnRlbnRUeXBlID0gKGlucHV0LGRhdGEpID0+IHtcbiAgICBpZihpbnB1dCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIGlucHV0ID9cbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLmFkZENvbnRlbnRUeXBlRmlsdGVyKGRhdGEpKSA6XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5yZW1vdmVDb250ZW50VHlwZUZpbHRlcihkYXRhKSk7XG4gICAgfTtcbiAgfTtcblxuICBmaWx0ZXJUb3BpYyA9IChpbnB1dCwgZGF0YSkgPT4ge1xuICAgIGlmKGlucHV0ICE9PSB1bmRlZmluZWQpe1xuICAgICAgaW5wdXQgP1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24uYWRkVG9waWNGaWx0ZXIoZGF0YSkpIDpcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLnJlbW92ZVRvcGljRmlsdGVyKGRhdGEpKTtcbiAgICB9O1xuICB9O1xuXG4gIHRvZ2dsZUZhdm9yaXRlZFNlYXJjaCA9IChpbnB1dCkgPT4ge1xuICAgIGlmKGlucHV0ICE9PSB1bmRlZmluZWQpe1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24udG9nZ2xlU2F2ZWRTZWFyY2goaW5wdXQpKTtcbiAgICB9O1xuICB9O1xuXG4gIGhhbmRsZVRodW1ibmFpbENsaWNrID0gKG1vZGVsTmFtZSkgPT4gKFxuICAgIGNvbnNvbGUubG9nKGBWZWhpY2xlIFRodW1ibmFpbDogJHttb2RlbE5hbWV9IGNsaWNrZWQuYClcbiAgKTtcblxuICBoYW5kbGVSZXN1bHRDbGljayA9IChyZXN1bHQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgUmVzdWx0OiAke3Jlc3VsdH0gY2xpY2tlZC5gKVxuICB9O1xuXG4gIHJlbmRlcigpIHsgIFxuXG4gICAgLy8gU2VhcmNoIHJlc3VsdHMgcGFnZTogY3VzdG9tIGZpbHRlcnNcbiAgICAvLyBYWDogTWFrZSBkYXRhIGR5bmFtaWMgb25jZSBjb25uZWN0ZWQgdG8gZ3JhcGhRTCB+XG4gICAgY29uc3QgY3VzdG9tRmlsdGVycyA9IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiU3RhdHVzXCIsXG4gICAgICAgIG9wdGlvbnM6W3tcbiAgICAgICAgICBsYWJlbDogXCJjdXJyZW50XCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfSwgXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJhcmNoaXZlZFwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH1dLFxuICAgICAgICBjbGlja0FjdGlvbjogdGhpcy5maWx0ZXJTdGF0dXMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJDb250ZW50IFR5cGVcIixcbiAgICAgICAgb3B0aW9uczogW3tcbiAgICAgICAgICBsYWJlbDogXCJQcm9kdWN0XCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkFydGljbGVcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiRG9jdW1lbnRcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgIGxhYmVsOiBcIlZpZGVvXCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICBsYWJlbDogXCJJbWFnZVwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkLFxuICAgICAgICB9XSwgXG4gICAgICAgIGNsaWNrQWN0aW9uOiB0aGlzLmZpbHRlckNvbnRlbnRUeXBlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBYWDogTWF5IG5lZWQgdG8gcXVlcnkgZm9yIGFuIGFycmF5IG9mIHRvcGljcyBvbiBDb21wb25lbnRXaWxsTW91bnQoKTtcbiAgICAgICAgdGl0bGU6IFwiVG9waWNcIixcbiAgICAgICAgb3B0aW9uczogW3tcbiAgICAgICAgICBsYWJlbDogXCJ0ZWNobm9sb2d5XCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcImJsdWV0b290aFwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJwcm9kdWN0IGluZm9ybWF0aW9uXCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfV0sXG4gICAgICAgIGNsaWNrQWN0aW9uOiB0aGlzLmZpbHRlclRvcGljXG4gICAgICB9XG4gICAgXTtcblxuICAgIC8vIEZhdm9yaXRlIENoZWNrYm94IFByb3BzIChkZXNrdG9wICYgbW9iaWxlKTtcbiAgICBjb25zdCBmYXZvcml0ZXNEZXNrdG9wID0ge1xuICAgICAgbGFiZWw6IFwiU2hvdyBvbmx5IGZhdm9yaXRlc1wiLFxuICAgICAgZm9udENvbG9yOiBcInJnYig2NCAxMDEgMTQ5KVwiLFxuICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICBjbGlja0FjdGlvbjogdGhpcy50b2dnbGVGYXZvcml0ZWRTZWFyY2gsXG4gICAgfVxuICAgIGNvbnN0IGZhdm9yaXRlc01vYmlsZSA9IHtcbiAgICAgIGxhYmVsOiBcIlNob3cgRmF2b3JpdGVzXCIsXG4gICAgICBmb250Q29sb3I6IFwicmdiKDY0IDEwMSAxNDkpXCIsXG4gICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgIGNsaWNrQWN0aW9uOiB0aGlzLnRvZ2dsZUZhdm9yaXRlZFNlYXJjaCxcbiAgICB9XG5cbiAgICBsZXQgZmlsdGVycyA9IGN1c3RvbUZpbHRlcnMubWFwKChkYXRhLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIDxGaWx0ZXIga2V5PXtkYXRhLnRpdGxlfSBpZD17ZGF0YS50aXRsZX0gey4uLmRhdGF9Lz5cbiAgICB9KVxuXG4gICAgbGV0IHByb2R1Y3RUaHVtYm5haWxzLCByZXN1bHRJdGVtcywgcXVlcnlJdGVtcywgbWFuYWdlU2F2ZWRTZWFyY2hlcywgc2F2ZWRTZWFyY2hMaXN0Qm94LCBwb3B1bGFyU2VhcmNoTGlzdEJveDsgXG4gICAgY29uc3QgeyBwcm9kdWN0cywgZmF2b3JpdGVkLCBzYXZlZFNlYXJjaGVzLCBjb250ZW50cywgc2F2ZWRBbmRGYXZzfSA9IHRoaXMucHJvcHMuc2FtcGxlRGF0YTtcbiAgICBpZihwcm9kdWN0cyl7XG4gICAgICBwcm9kdWN0VGh1bWJuYWlscyA9IHByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17cHJvZHVjdC5pZH0gY2xhc3NOYW1lPVwicHJvZHVjdHMtd3JhcHBlclwiPlxuICAgICAgICAgICAgPFByb2R1Y3RUaHVtYm5haWwgaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlVGh1bWJuYWlsQ2xpY2t9IHsuLi5wcm9kdWN0fSAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAucHJvZHVjdHMtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgICAgICAgICAgICAgLy9YWCBPbmUgY2FyIGRpc3BsYXkgaGVyZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDM3NnB4KSB7XG4gICAgICAgICAgICAgICAgLnByb2R1Y3RzLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYoY29udGVudHMpe1xuICAgICAgcmVzdWx0SXRlbXMgPSBjb250ZW50cy5tYXAoY29udGVudCA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2NvbnRlbnQuaWR9IGNsYXNzTmFtZT1cImNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPFJlc3VsdEl0ZW1TbWFsbCBrZXk9e2NvbnRlbnQuaWR9IGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZVJlc3VsdENsaWNrfSB7Li4uY29udGVudH0gLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jb250ZW50LXdyYXBwZXI6aG92ZXIge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIFxuICAgIC8vWFg6IE1vY2sgZGF0YSBmb3Igbm93LiBUT0RPOiBjaGFuZ2UgXCJjb2xsZWN0aW9uXCIgYXJyYXkgdG8gcXVlcnkgcmVzdWx0cyBvZiB1c2VyJ3MgU2F2ZWQgU2VhcmNoZXMuXG4gICAgY29uc29sZS5sb2coc2F2ZWRBbmRGYXZzKVxuICAgIGlmKHNhdmVkQW5kRmF2cykge1xuICAgICAgbGV0IHNhdmVkU2VhcmNoUHJvcHMgPSB7XG4gICAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXG4gICAgICAgIHRpdGxlOiAnU2F2ZWQgU2VhcmNoZXMnLFxuICAgICAgICBjb2xsZWN0aW9uOiBzYXZlZEFuZEZhdnNcbiAgICAgIH1cbiAgICAgIHNhdmVkU2VhcmNoTGlzdEJveCA9IChcbiAgICAgICAgPExpc3RCb3gga2V5PXtzYXZlZEFuZEZhdnMuaWR9IHsuLi5zYXZlZFNlYXJjaFByb3BzfS8+XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vWFg6IE1vY2sgZGF0YSBmb3Igbm93LiBUT0RPOiBjaGFuZ2UgXCJjb2xsZWN0aW9uXCIgYXJyYXkgdG8gcXVlcnkgcmVzdWx0cyBvZiBQb3B1bGFyIFNlYXJjaGVzLlxuICAgIGlmKHNhdmVkQW5kRmF2cykge1xuICAgICAgbGV0IHBvcHVsYXJTZWFyY2hQcm9wcyA9IHtcbiAgICAgICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgdGl0bGU6ICdQZW9wbGUgYWxzbyBzZWFyY2ggZm9yLi4uJyxcbiAgICAgICAgY29sbGVjdGlvbjogc2F2ZWRBbmRGYXZzLFxuICAgICAgfVxuICAgICAgcG9wdWxhclNlYXJjaExpc3RCb3ggPSAoXG4gICAgICAgIDxMaXN0Qm94IGtleT17c2F2ZWRBbmRGYXZzLmlkfSB7Li4ucG9wdWxhclNlYXJjaFByb3BzfS8+XG4gICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvLyBDdXN0b20gcGF0aCBmb3IgYnJlYWRjcnVtYnMuIFxuICAgIGNvbnN0IHBhdGggPSBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOlwiU2VhcmNoXCIsXG4gICAgICAgIHJvdXRlOiBcIi9kYXNoYm9hcmRcIixcbiAgICAgICAgYXJyb3c6IFwiPlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBYWDogSGFyZCBjb2RlZCBkYXRhIGZvciBub3cuIENvbm5lY3Qgd2l0aCB0b3RhbCBxdWVyeSByZXN1bHQgIyBcbiAgICAgICAgLy8gYW5kIHdyaXRlIGxvZ2ljIGZvciBzaW5nbHVhciB2cyBwbHVyYWwgKHJlc3VsdCAmIHJlc3VsdHMpO1xuICAgICAgICB0aXRsZTogYDE3MiBSZXN1bHRzYCwgXG4gICAgICAgIHJvdXRlOiB1bmRlZmluZWQsXG4gICAgICAgIGFycm93OiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9ub3JtYWxpemUvNy4wLjAvbm9ybWFsaXplLmNzc1wiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPGgzPihTRUFSQ0ggUkVTVUxUIFBBR0UpPC9oMz5cbiAgICAgICAgPEJhbm5lcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxCcmVhZENydW1icyBwYXRocz17cGF0aH0vPlxuXG4gICAgICAgICAgICA8U2VhcmNoU2Vjb25kYXJ5Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVza3RvcC12aWV3XCI+PENoZWNrYm94IGlkPXtmYXZvcml0ZXNEZXNrdG9wLmxhYmVsfSB7Li4uZmF2b3JpdGVzRGVza3RvcH0vPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS12aWV3XCI+PENoZWNrYm94IGlkPXtmYXZvcml0ZXNNb2JpbGUubGFiZWx9IHsuLi5mYXZvcml0ZXNNb2JpbGV9Lz48L2Rpdj5cblxuICAgICAgICAgICAgICB7ZmlsdGVyc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Jhbm5lcj5cbiAgICAgICAgXG4gICAgICAgIDxQYWdlU2VjdGlvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtd3JhcHBlclwiPlxuICAgICAgICAgICAgey8qIFByb2R1Y3RzIFNlY3Rpb24gKi99XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1zZWN0aW9uLWhlYWRlclwiPlByb2R1Y3RzPC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVoaWNsZS10aHVtYm5haWxzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAge3Byb2R1Y3RUaHVtYm5haWxzfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBDb250ZW50IFNlY3Rpb24gKi99XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1zZWN0aW9uLWhlYWRlclwiPkNvbnRlbnQ8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50cy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LWl0ZW1zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICB7cmVzdWx0SXRlbXN9XG4gICAgICAgICAgICAgICAgPFBhZ2luYXRpb24vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWJveC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWJveFwiPntzYXZlZFNlYXJjaExpc3RCb3h9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWJveFwiPntwb3B1bGFyU2VhcmNoTGlzdEJveH08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgPC9QYWdlU2VjdGlvbj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmRlc2t0b3AtdmlldyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9iaWxlLXZpZXcge1xuICAgICAgICAgICAgbWFyZ2luOiAzMnB4IDAgLTRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhZ2Utc2VjdGlvbi1oZWFkZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiA4cHg7Ly9cbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2IoMjMxLCAyMzEsIDIzMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vL1xuICAgICAgICAgIC5zZWFyY2gtcmVzdWx0LXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnZlaGljbGUtdGh1bWJuYWlscy13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZXN1bHQtaXRlbXMtd3JhcHBlciB7IC8vXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgICAgICAgZmxleDogMSAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGlzdC1ib3gtd3JhcHBlciB7XG4gICAgICAgICAgICBmbGV4OiAxIDMwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3QtYm94IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDMycHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgLmRlc2t0b3AtdmlldyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9iaWxlLXZpZXcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpbHRlci13cmFwcGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpbHRlci13cmFwcGVyID4gKiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZ2Utc2VjdGlvbi1oZWFkZXIge1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDZweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDEwcHggNnB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggNnB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250ZW50cy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlc3VsdC1pdGVtcy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDMycHggMTZweCAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBzYW1wbGVEYXRhOiBzdGF0ZS5zYW1wbGVEYXRhXG59KVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNlYXJjaFJlc3VsdHMpKTsiXX0= */\n/*@ sourceURL=pages/search-results.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return SearchResults;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    sampleData: state.sampleData
  };
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_5__lib_withRedux__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps)(SearchResults));

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SearchResults, 'SearchResults', '/Users/eddieyao/Desktop/gp_draft/pages/search-results.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/eddieyao/Desktop/gp_draft/pages/search-results.js');
  reactHotLoader.register(_default, 'default', '/Users/eddieyao/Desktop/gp_draft/pages/search-results.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/search-results")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.e59fe2ea61d3a52f58de.hot-update.js.map