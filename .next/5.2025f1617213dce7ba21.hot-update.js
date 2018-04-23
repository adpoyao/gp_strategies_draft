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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_TagSmall__ = __webpack_require__("./components/TagSmall.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_PageSection__ = __webpack_require__("./components/PageSection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_BreadCrumbs__ = __webpack_require__("./components/BreadCrumbs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_ResultItemLarge__ = __webpack_require__("./components/ResultItemLarge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_SearchSecondary__ = __webpack_require__("./components/SearchSecondary.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_ProductThumbnail__ = __webpack_require__("./components/ProductThumbnail.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_Pagination__ = __webpack_require__("./components/Pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__actions_search__ = __webpack_require__("./actions/search.js");
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

  function SearchResults(props) {
    _classCallCheck(this, SearchResults);

    var _this = _possibleConstructorReturn(this, (SearchResults.__proto__ || Object.getPrototypeOf(SearchResults)).call(this, props));

    _this.filterStatus = function (input, data) {
      if (input !== undefined) {
        input ? _this.props.dispatch(__WEBPACK_IMPORTED_MODULE_17__actions_search__["b" /* addStatusFilter */](data)) : _this.props.dispatch(__WEBPACK_IMPORTED_MODULE_17__actions_search__["f" /* removeStatusFilter */](data));
      };
    };

    _this.filterContentType = function (input, data) {
      if (input !== undefined) {
        input ? _this.props.dispatch(__WEBPACK_IMPORTED_MODULE_17__actions_search__["a" /* addContentTypeFilter */](data)) : _this.props.dispatch(__WEBPACK_IMPORTED_MODULE_17__actions_search__["e" /* removeContentTypeFilter */](data));
      };
    };

    _this.filterTopic = function (input, data) {
      if (input !== undefined) {
        input ? _this.props.dispatch(__WEBPACK_IMPORTED_MODULE_17__actions_search__["c" /* addTopicFilter */](data)) : _this.props.dispatch(__WEBPACK_IMPORTED_MODULE_17__actions_search__["g" /* removeTopicFilter */](data));
      };
    };

    _this.toggleFavoritedSearch = function (input) {
      if (input !== undefined) {
        _this.props.dispatch(__WEBPACK_IMPORTED_MODULE_17__actions_search__["i" /* toggleSavedSearch */](input));
      };
    };

    _this.handleThumbnailClick = function (modelName) {
      return console.log('Vehicle Thumbnail: ' + modelName + ' clicked.');
    };

    _this.handleResultClick = function (result) {
      console.log('Result: ' + result + ' clicked.');
    };

    _this.handleToggleFilter = function () {
      _this.setState({ filterToggle: !_this.state.filterToggle });
      console.log(_this.state.filterToggle);
    };

    _this.state = {
      filterToggle: false
    };
    return _this;
  }

  _createClass(SearchResults, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.dispatch(__WEBPACK_IMPORTED_MODULE_17__actions_search__["d" /* clearFilters */]());
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
            lineNumber: 163
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
                lineNumber: 171
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__components_ProductThumbnail__["a" /* default */], _extends({ handleClick: _this2.handleThumbnailClick }, product, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 172
              }
            })),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
              styleId: '1289796989',
              css: '.products-wrapper.jsx-1289796989{font-size:16px;margin-bottom:32px;}@media all and (min-width:376px){.products-wrapper.jsx-1289796989{width:220px;font-size:17px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC1yZXN1bHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRLd0IsQUFHZ0MsQUFNRCxZQUNHLEdBTkUsWUFPbkIsT0FMRiIsImZpbGUiOiJwYWdlcy9zZWFyY2gtcmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc2hvcnRpZCBmcm9tICdzaG9ydGlkJztcblxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICcuLi9saWIvd2l0aFJlZHV4JztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9GaWx0ZXInO1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0Jhbm5lcic7XG5pbXBvcnQgTGlzdEJveCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RCb3gnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hlY2tib3gnO1xuaW1wb3J0IFRhZ1NtYWxsIGZyb20gJy4uL2NvbXBvbmVudHMvVGFnU21hbGwnO1xuaW1wb3J0IFBhZ2VTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZVNlY3Rpb24nO1xuaW1wb3J0IEJyZWFkQ3J1bWJzIGZyb20gJy4uL2NvbXBvbmVudHMvQnJlYWRDcnVtYnMnO1xuaW1wb3J0IFJlc3VsdEl0ZW1MYXJnZSBmcm9tICcuLi9jb21wb25lbnRzL1Jlc3VsdEl0ZW1MYXJnZSc7XG5pbXBvcnQgU2VhcmNoU2Vjb25kYXJ5IGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoU2Vjb25kYXJ5JztcbmltcG9ydCBQcm9kdWN0VGh1bWJuYWlsIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdFRodW1ibmFpbCc7XG5cblxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcblxuaW1wb3J0ICogYXMgYWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvc2VhcmNoJztcbmNsYXNzIFNlYXJjaFJlc3VsdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpbHRlclRvZ2dsZTogZmFsc2VcbiAgICB9O1xuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLmNsZWFyRmlsdGVycygpKTtcbiAgfVxuXG4gIGZpbHRlclN0YXR1cyA9IChpbnB1dCwgZGF0YSkgPT4ge1xuICAgIGlmKGlucHV0ICE9PSB1bmRlZmluZWQpe1xuICAgICAgaW5wdXQgP1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24uYWRkU3RhdHVzRmlsdGVyKGRhdGEpKSA6XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5yZW1vdmVTdGF0dXNGaWx0ZXIoZGF0YSkpO1xuICAgIH07XG4gIH07XG5cbiAgZmlsdGVyQ29udGVudFR5cGUgPSAoaW5wdXQsZGF0YSkgPT4ge1xuICAgIGlmKGlucHV0ICE9PSB1bmRlZmluZWQpe1xuICAgICAgaW5wdXQgP1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24uYWRkQ29udGVudFR5cGVGaWx0ZXIoZGF0YSkpIDpcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLnJlbW92ZUNvbnRlbnRUeXBlRmlsdGVyKGRhdGEpKTtcbiAgICB9O1xuICB9O1xuXG4gIGZpbHRlclRvcGljID0gKGlucHV0LCBkYXRhKSA9PiB7XG4gICAgaWYoaW5wdXQgIT09IHVuZGVmaW5lZCl7XG4gICAgICBpbnB1dCA/XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5hZGRUb3BpY0ZpbHRlcihkYXRhKSkgOlxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24ucmVtb3ZlVG9waWNGaWx0ZXIoZGF0YSkpO1xuICAgIH07XG4gIH07XG5cbiAgdG9nZ2xlRmF2b3JpdGVkU2VhcmNoID0gKGlucHV0KSA9PiB7XG4gICAgaWYoaW5wdXQgIT09IHVuZGVmaW5lZCl7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi50b2dnbGVTYXZlZFNlYXJjaChpbnB1dCkpO1xuICAgIH07XG4gIH07XG5cbiAgaGFuZGxlVGh1bWJuYWlsQ2xpY2sgPSAobW9kZWxOYW1lKSA9PiAoXG4gICAgY29uc29sZS5sb2coYFZlaGljbGUgVGh1bWJuYWlsOiAke21vZGVsTmFtZX0gY2xpY2tlZC5gKVxuICApO1xuXG4gIGhhbmRsZVJlc3VsdENsaWNrID0gKHJlc3VsdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBSZXN1bHQ6ICR7cmVzdWx0fSBjbGlja2VkLmApXG4gIH07XG5cbiAgaGFuZGxlVG9nZ2xlRmlsdGVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlclRvZ2dsZTogIXRoaXMuc3RhdGUuZmlsdGVyVG9nZ2xlfSk7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5maWx0ZXJUb2dnbGUpO1xuICB9XG5cbiAgcmVuZGVyKCkgeyAgXG5cbiAgICAvLyBTZWFyY2ggcmVzdWx0cyBwYWdlOiBjdXN0b20gZmlsdGVyc1xuICAgIC8vIFhYOiBNYWtlIGRhdGEgZHluYW1pYyBvbmNlIGNvbm5lY3RlZCB0byBncmFwaFFMIH5cbiAgICBjb25zdCBjdXN0b21GaWx0ZXJzID0gW1xuICAgICAge1xuICAgICAgICB0aXRsZTogXCJTdGF0dXNcIixcbiAgICAgICAgb3B0aW9uczpbe1xuICAgICAgICAgIGxhYmVsOiBcImN1cnJlbnRcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LCBcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcImFyY2hpdmVkXCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfV0sXG4gICAgICAgIGNsaWNrQWN0aW9uOiB0aGlzLmZpbHRlclN0YXR1cyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkNvbnRlbnQgVHlwZVwiLFxuICAgICAgICBvcHRpb25zOiBbe1xuICAgICAgICAgIGxhYmVsOiBcIlByb2R1Y3RcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiQXJ0aWNsZVwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJEb2N1bWVudFwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgbGFiZWw6IFwiVmlkZW9cIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgIGxhYmVsOiBcIkltYWdlXCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWQsXG4gICAgICAgIH1dLCBcbiAgICAgICAgY2xpY2tBY3Rpb246IHRoaXMuZmlsdGVyQ29udGVudFR5cGVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIFhYOiBNYXkgbmVlZCB0byBxdWVyeSBmb3IgYW4gYXJyYXkgb2YgdG9waWNzIG9uIENvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgICAgICB0aXRsZTogXCJUb3BpY1wiLFxuICAgICAgICBvcHRpb25zOiBbe1xuICAgICAgICAgIGxhYmVsOiBcInRlY2hub2xvZ3lcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiYmx1ZXRvb3RoXCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcInByb2R1Y3QgaW5mb3JtYXRpb25cIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9XSxcbiAgICAgICAgY2xpY2tBY3Rpb246IHRoaXMuZmlsdGVyVG9waWNcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgLy8gRmF2b3JpdGUgQ2hlY2tib3ggUHJvcHMgKGRlc2t0b3AgJiBtb2JpbGUpO1xuICAgIGNvbnN0IGZhdm9yaXRlc0Rlc2t0b3AgPSB7XG4gICAgICBsYWJlbDogXCJTaG93IG9ubHkgZmF2b3JpdGVzXCIsXG4gICAgICBmb250Q29sb3I6IFwicmdiKDY0IDEwMSAxNDkpXCIsXG4gICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgIGNsaWNrQWN0aW9uOiB0aGlzLnRvZ2dsZUZhdm9yaXRlZFNlYXJjaCxcbiAgICB9XG4gICAgY29uc3QgZmF2b3JpdGVzTW9iaWxlID0ge1xuICAgICAgbGFiZWw6IFwiU2hvdyBGYXZvcml0ZXNcIixcbiAgICAgIGZvbnRDb2xvcjogXCJyZ2IoNjQgMTAxIDE0OSlcIixcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgY2xpY2tBY3Rpb246IHRoaXMudG9nZ2xlRmF2b3JpdGVkU2VhcmNoLFxuICAgIH1cblxuICAgIGxldCBmaWx0ZXJzID0gY3VzdG9tRmlsdGVycy5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gPEZpbHRlciBrZXk9e2RhdGEudGl0bGV9IGlkPXtkYXRhLnRpdGxlfSB7Li4uZGF0YX0vPlxuICAgIH0pXG5cbiAgICBsZXQgcHJvZHVjdFRodW1ibmFpbHMsIHJlc3VsdEl0ZW1zLCBxdWVyeUl0ZW1zLCBtYW5hZ2VTYXZlZFNlYXJjaGVzLCBzYXZlZFNlYXJjaExpc3RCb3gsIHBvcHVsYXJTZWFyY2hMaXN0Qm94OyBcbiAgICBjb25zdCB7IHByb2R1Y3RzLCBmYXZvcml0ZWQsIHNhdmVkU2VhcmNoZXMsIGNvbnRlbnRzLCBzYXZlZEFuZEZhdnN9ID0gdGhpcy5wcm9wcy5zYW1wbGVEYXRhO1xuICAgIGlmKHByb2R1Y3RzKXtcbiAgICAgIHByb2R1Y3RUaHVtYm5haWxzID0gcHJvZHVjdHMubWFwKHByb2R1Y3QgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0LmlkfSBjbGFzc05hbWU9XCJwcm9kdWN0cy13cmFwcGVyXCI+XG4gICAgICAgICAgICA8UHJvZHVjdFRodW1ibmFpbCBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVUaHVtYm5haWxDbGlja30gey4uLnByb2R1Y3R9IC8+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5wcm9kdWN0cy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICAgICAgICAgICAgICAvL1hYIE9uZSBjYXIgZGlzcGxheSBoZXJlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgICAgICAucHJvZHVjdHMtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZihjb250ZW50cyl7XG4gICAgICByZXN1bHRJdGVtcyA9IGNvbnRlbnRzLm1hcChjb250ZW50ID0+IHtcblxuICAgICAgICAvLyBYWDogVG9waWMgdGFncyBnZXQgZ2VuZXJhdGVkIGhlcmUuIEhhcmRjb2RlZCB3aXRoIHNhbXBsZSBkYXRhLCBuZWVkIHRvIGNvbm5lY3QgdG8gR3JhcGhRTCBxdWVyeTtcbiAgICAgICAgbGV0IHRvcGljVGFncyA9IGNvbnRlbnQudG9waWNzLm1hcCh0b3BpYyA9PiB7XG4gICAgICAgICAgcmV0dXJuICggXG4gICAgICAgICAgICA8ZGl2IGtleT17dG9waWMuaWR9IGNsYXNzTmFtZT1cInRhZy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxUYWdTbWFsbCBrZXk9e3RvcGljLmlkfSB7Li4udG9waWN9IC8+XG5cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC50YWctd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4IDAgMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtjb250ZW50LmlkfSBjbGFzc05hbWU9XCJjb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxSZXN1bHRJdGVtTGFyZ2Uga2V5PXtjb250ZW50LmlkfSBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVSZXN1bHRDbGlja30gey4uLmNvbnRlbnR9ID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLXdyYXBwZXIgbW9iaWxlLXZpZXdcIj5cbiAgICAgICAgICAgICAgICB7dG9waWNUYWdzfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVzdWx0SXRlbUxhcmdlPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy13cmFwcGVyIGRlc2t0b3Atdmlld1wiPlxuICAgICAgICAgICAgICB7dG9waWNUYWdzfVxuICAgICAgICAgICAgICB7LyogVGVtcG9yYXJ5IHVzZSBvZiB0aHJlZSBkb3RzIGljb24gKi99XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL2NoaXR0YWdvbmdpdC5jb20vaW1hZ2VzL3RocmVlLXZlcnRpY2FsLWRvdHMtaWNvbi90aHJlZS12ZXJ0aWNhbC1kb3RzLWljb24tMjAuanBnXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLmRlc2tcbiAgICAgICAgICAgICAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbnRlbnQtd3JhcHBlcjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC50YWdzLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIFhYOiBUZW1wb3JhcnkgY29uZmlndXJhdGlvbiBmb3IgcGxhY2Vob2xkIGljb24gKGRvdCBkb3QgZG90KTtcbiAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHhcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIFxuICAgIC8vWFg6IE1vY2sgZGF0YSBmb3Igbm93LiBUT0RPOiBjaGFuZ2UgXCJjb2xsZWN0aW9uXCIgYXJyYXkgdG8gcXVlcnkgcmVzdWx0cyBvZiB1c2VyJ3MgU2F2ZWQgU2VhcmNoZXMuXG4gICAgaWYoc2F2ZWRBbmRGYXZzKSB7XG4gICAgICBsZXQgc2F2ZWRTZWFyY2hQcm9wcyA9IHtcbiAgICAgICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgdGl0bGU6ICdTYXZlZCBTZWFyY2hlcycsXG4gICAgICAgIGNvbGxlY3Rpb246IHNhdmVkQW5kRmF2c1xuICAgICAgfVxuICAgICAgc2F2ZWRTZWFyY2hMaXN0Qm94ID0gKFxuICAgICAgICA8TGlzdEJveCBrZXk9e3NhdmVkQW5kRmF2cy5pZH0gey4uLnNhdmVkU2VhcmNoUHJvcHN9Lz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy9YWDogTW9jayBkYXRhIGZvciBub3cuIFRPRE86IGNoYW5nZSBcImNvbGxlY3Rpb25cIiBhcnJheSB0byBxdWVyeSByZXN1bHRzIG9mIFBvcHVsYXIgU2VhcmNoZXMuXG4gICAgaWYoc2F2ZWRBbmRGYXZzKSB7XG4gICAgICBsZXQgcG9wdWxhclNlYXJjaFByb3BzID0ge1xuICAgICAgICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxuICAgICAgICB0aXRsZTogJ1Blb3BsZSBhbHNvIHNlYXJjaCBmb3IuLi4nLFxuICAgICAgICBjb2xsZWN0aW9uOiBzYXZlZEFuZEZhdnMsXG4gICAgICB9XG4gICAgICBwb3B1bGFyU2VhcmNoTGlzdEJveCA9IChcbiAgICAgICAgPExpc3RCb3gga2V5PXtzYXZlZEFuZEZhdnMuaWR9IHsuLi5wb3B1bGFyU2VhcmNoUHJvcHN9Lz5cbiAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8vIEN1c3RvbSBwYXRoIGZvciBicmVhZGNydW1icy4gXG4gICAgY29uc3QgcGF0aCA9IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6XCJTZWFyY2hcIixcbiAgICAgICAgcm91dGU6IFwiL2Rhc2hib2FyZFwiLFxuICAgICAgICBhcnJvdzogXCI+XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIFhYOiBIYXJkIGNvZGVkIGRhdGEgZm9yIG5vdy4gQ29ubmVjdCB3aXRoIHRvdGFsIHF1ZXJ5IHJlc3VsdCAjIFxuICAgICAgICAvLyBhbmQgd3JpdGUgbG9naWMgZm9yIHNpbmdsdWFyIHZzIHBsdXJhbCAocmVzdWx0ICYgcmVzdWx0cyk7XG4gICAgICAgIHRpdGxlOiBgMTcyIFJlc3VsdHNgLCBcbiAgICAgICAgcm91dGU6IHVuZGVmaW5lZCxcbiAgICAgICAgYXJyb3c6IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIF07XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL25vcm1hbGl6ZS83LjAuMC9ub3JtYWxpemUuY3NzXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8aDM+KFNFQVJDSCBSRVNVTFQgUEFHRSk8L2gzPlxuICAgICAgICA8QmFubmVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWJyZWFkY3J1bWJzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxCcmVhZENydW1icyBwYXRocz17cGF0aH0vPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8U2VhcmNoU2Vjb25kYXJ5Lz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtdmlld1wiPjxDaGVja2JveCBpZD17ZmF2b3JpdGVzTW9iaWxlLmxhYmVsfSB7Li4uZmF2b3JpdGVzTW9iaWxlfS8+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVza3RvcC12aWV3XCI+PENoZWNrYm94IGlkPXtmYXZvcml0ZXNEZXNrdG9wLmxhYmVsfSB7Li4uZmF2b3JpdGVzRGVza3RvcH0vPjwvZGl2PlxuICAgICAgICAgICAgICB7ZmlsdGVyc31cbiAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9CYW5uZXI+XG5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+dGhpcy5oYW5kbGVUb2dnbGVGaWx0ZXIoKX0gY2xhc3NOYW1lPVwiZXhwYW5kLWZpbHRlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbHRlci1sYWJlbFwiPkZpbHRlcnM8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsdGVyLWljb24td3JhcHBlclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmaWx0ZXItaWNvblwiIHNyYz1cImh0dHBzOi8vY2RuNC5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL21lZGlhLXBsYXllci1pY29ucy84MC9NZWRpYV9wbGF5ZXJfaWNvbnMtMDQtNTEyLnBuZ1wiIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxQYWdlU2VjdGlvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtd3JhcHBlclwiPlxuICAgICAgICAgICAgey8qIFByb2R1Y3RzIFNlY3Rpb24gKi99XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1zZWN0aW9uLWhlYWRlclwiPlByb2R1Y3RzPC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVoaWNsZS10aHVtYm5haWxzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAge3Byb2R1Y3RUaHVtYm5haWxzfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBDb250ZW50IFNlY3Rpb24gKi99XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1zZWN0aW9uLWhlYWRlclwiPkNvbnRlbnQ8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50cy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LWl0ZW1zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICB7cmVzdWx0SXRlbXN9XG4gICAgICAgICAgICAgICAgPFBhZ2luYXRpb24vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWJveC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWJveFwiPntzYXZlZFNlYXJjaExpc3RCb3h9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWJveFwiPntwb3B1bGFyU2VhcmNoTGlzdEJveH08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgPC9QYWdlU2VjdGlvbj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmRlc2t0b3AtdmlldyB7XG4gICAgICAgICAgICAvLyBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9iaWxlLXZpZXcge1xuICAgICAgICAgICAgbWFyZ2luOiAzMnB4IDAgLTRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhZ2Utc2VjdGlvbi1oZWFkZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2IoMjMxLCAyMzEsIDIzMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYW5uZXItYnJlYWRjcnVtYnMtd3JhcHBlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbm5lci1jb250ZW50LXdyYXBwZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLXJlc3VsdC13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC52ZWhpY2xlLXRodW1ibmFpbHMtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVzdWx0LWl0ZW1zLXdyYXBwZXIgeyAvL1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAgICAgIGZsZXg6IDEgMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpc3QtYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgZmxleDogMSAzMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0LWJveCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAzMnB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5leHBhbmQtZmlsdGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5zdGF0ZS5maWx0ZXJUb2dnbGUgPyBcIm5vbmVcIiA6IFwiZmxleFwifTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNDQgOTEgMTQyKTtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGZvbnQ6IDcwMCAxZW0gc3lzdGVtLXVpO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmlsdGVyLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgICAgICAgICAgZmxleDogMSA3MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5maWx0ZXItaWNvbi13cmFwcGVyIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMzAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogZ3JleSAxcHggc29saWQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5maWx0ZXItaWNvbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpbHRlci13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5zdGF0ZS5maWx0ZXJUb2dnbGUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgIC5kZXNrdG9wLXZpZXcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vYmlsZS12aWV3IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5leHBhbmQtZmlsdGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWx0ZXItd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWx0ZXItd3JhcHBlciA+ICoge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWdlLXNlY3Rpb24taGVhZGVyIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCA2cHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDZweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDZweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFubmVyLWNvbnRlbnQtd3JhcHBlcntcbiAgICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnRzLXdyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmVzdWx0LWl0ZW1zLXdyYXBwZXIge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMzJweCAxNnB4IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIHNhbXBsZURhdGE6IHN0YXRlLnNhbXBsZURhdGFcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2VhcmNoUmVzdWx0cykpOyJdfQ== */\n/*@ sourceURL=pages/search-results.js */'
            })
          );
        });
      };

      if (contents) {
        resultItems = contents.map(function (content) {

          // XX: Topic tags get generated here. Hardcoded with sample data, need to connect to GraphQL query;
          var topicTags = content.topics.map(function (topic) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              { key: topic.id, className: 'jsx-1833671333' + ' ' + 'tag-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 198
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_TagSmall__["a" /* default */], _extends({ key: topic.id }, topic, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 199
                }
              })),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                styleId: '1833671333',
                css: '.tag-wrapper.jsx-1833671333{width:-webkit-max-content;width:-moz-max-content;width:max-content;margin:0 5px 0 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC1yZXN1bHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdNMEIsQUFHcUMsbUVBQ0QsaUJBQ25CIiwiZmlsZSI6InBhZ2VzL3NlYXJjaC1yZXN1bHRzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lZGRpZXlhby9EZXNrdG9wL2dwX2RyYWZ0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzaG9ydGlkIGZyb20gJ3Nob3J0aWQnO1xuXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJy4uL2xpYi93aXRoUmVkdXgnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi9jb21wb25lbnRzL0ZpbHRlcic7XG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQmFubmVyJztcbmltcG9ydCBMaXN0Qm94IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdEJveCc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi4vY29tcG9uZW50cy9DaGVja2JveCc7XG5pbXBvcnQgVGFnU21hbGwgZnJvbSAnLi4vY29tcG9uZW50cy9UYWdTbWFsbCc7XG5pbXBvcnQgUGFnZVNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlU2VjdGlvbic7XG5pbXBvcnQgQnJlYWRDcnVtYnMgZnJvbSAnLi4vY29tcG9uZW50cy9CcmVhZENydW1icyc7XG5pbXBvcnQgUmVzdWx0SXRlbUxhcmdlIGZyb20gJy4uL2NvbXBvbmVudHMvUmVzdWx0SXRlbUxhcmdlJztcbmltcG9ydCBTZWFyY2hTZWNvbmRhcnkgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hTZWNvbmRhcnknO1xuaW1wb3J0IFByb2R1Y3RUaHVtYm5haWwgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0VGh1bWJuYWlsJztcblxuXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xuXG5pbXBvcnQgKiBhcyBhY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9zZWFyY2gnO1xuY2xhc3MgU2VhcmNoUmVzdWx0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlsdGVyVG9nZ2xlOiBmYWxzZVxuICAgIH07XG4gIH07XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24uY2xlYXJGaWx0ZXJzKCkpO1xuICB9XG5cbiAgZmlsdGVyU3RhdHVzID0gKGlucHV0LCBkYXRhKSA9PiB7XG4gICAgaWYoaW5wdXQgIT09IHVuZGVmaW5lZCl7XG4gICAgICBpbnB1dCA/XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5hZGRTdGF0dXNGaWx0ZXIoZGF0YSkpIDpcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLnJlbW92ZVN0YXR1c0ZpbHRlcihkYXRhKSk7XG4gICAgfTtcbiAgfTtcblxuICBmaWx0ZXJDb250ZW50VHlwZSA9IChpbnB1dCxkYXRhKSA9PiB7XG4gICAgaWYoaW5wdXQgIT09IHVuZGVmaW5lZCl7XG4gICAgICBpbnB1dCA/XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5hZGRDb250ZW50VHlwZUZpbHRlcihkYXRhKSkgOlxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24ucmVtb3ZlQ29udGVudFR5cGVGaWx0ZXIoZGF0YSkpO1xuICAgIH07XG4gIH07XG5cbiAgZmlsdGVyVG9waWMgPSAoaW5wdXQsIGRhdGEpID0+IHtcbiAgICBpZihpbnB1dCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIGlucHV0ID9cbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLmFkZFRvcGljRmlsdGVyKGRhdGEpKSA6XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5yZW1vdmVUb3BpY0ZpbHRlcihkYXRhKSk7XG4gICAgfTtcbiAgfTtcblxuICB0b2dnbGVGYXZvcml0ZWRTZWFyY2ggPSAoaW5wdXQpID0+IHtcbiAgICBpZihpbnB1dCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLnRvZ2dsZVNhdmVkU2VhcmNoKGlucHV0KSk7XG4gICAgfTtcbiAgfTtcblxuICBoYW5kbGVUaHVtYm5haWxDbGljayA9IChtb2RlbE5hbWUpID0+IChcbiAgICBjb25zb2xlLmxvZyhgVmVoaWNsZSBUaHVtYm5haWw6ICR7bW9kZWxOYW1lfSBjbGlja2VkLmApXG4gICk7XG5cbiAgaGFuZGxlUmVzdWx0Q2xpY2sgPSAocmVzdWx0KSA9PiB7XG4gICAgY29uc29sZS5sb2coYFJlc3VsdDogJHtyZXN1bHR9IGNsaWNrZWQuYClcbiAgfTtcblxuICBoYW5kbGVUb2dnbGVGaWx0ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyVG9nZ2xlOiAhdGhpcy5zdGF0ZS5maWx0ZXJUb2dnbGV9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmZpbHRlclRvZ2dsZSk7XG4gIH1cblxuICByZW5kZXIoKSB7ICBcblxuICAgIC8vIFNlYXJjaCByZXN1bHRzIHBhZ2U6IGN1c3RvbSBmaWx0ZXJzXG4gICAgLy8gWFg6IE1ha2UgZGF0YSBkeW5hbWljIG9uY2UgY29ubmVjdGVkIHRvIGdyYXBoUUwgflxuICAgIGNvbnN0IGN1c3RvbUZpbHRlcnMgPSBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIlN0YXR1c1wiLFxuICAgICAgICBvcHRpb25zOlt7XG4gICAgICAgICAgbGFiZWw6IFwiY3VycmVudFwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sIFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiYXJjaGl2ZWRcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9XSxcbiAgICAgICAgY2xpY2tBY3Rpb246IHRoaXMuZmlsdGVyU3RhdHVzLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQ29udGVudCBUeXBlXCIsXG4gICAgICAgIG9wdGlvbnM6IFt7XG4gICAgICAgICAgbGFiZWw6IFwiUHJvZHVjdFwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJBcnRpY2xlXCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkRvY3VtZW50XCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICBsYWJlbDogXCJWaWRlb1wiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgbGFiZWw6IFwiSW1hZ2VcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZCxcbiAgICAgICAgfV0sIFxuICAgICAgICBjbGlja0FjdGlvbjogdGhpcy5maWx0ZXJDb250ZW50VHlwZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gWFg6IE1heSBuZWVkIHRvIHF1ZXJ5IGZvciBhbiBhcnJheSBvZiB0b3BpY3Mgb24gQ29tcG9uZW50V2lsbE1vdW50KCk7XG4gICAgICAgIHRpdGxlOiBcIlRvcGljXCIsXG4gICAgICAgIG9wdGlvbnM6IFt7XG4gICAgICAgICAgbGFiZWw6IFwidGVjaG5vbG9neVwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJibHVldG9vdGhcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwicHJvZHVjdCBpbmZvcm1hdGlvblwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH1dLFxuICAgICAgICBjbGlja0FjdGlvbjogdGhpcy5maWx0ZXJUb3BpY1xuICAgICAgfVxuICAgIF07XG5cbiAgICAvLyBGYXZvcml0ZSBDaGVja2JveCBQcm9wcyAoZGVza3RvcCAmIG1vYmlsZSk7XG4gICAgY29uc3QgZmF2b3JpdGVzRGVza3RvcCA9IHtcbiAgICAgIGxhYmVsOiBcIlNob3cgb25seSBmYXZvcml0ZXNcIixcbiAgICAgIGZvbnRDb2xvcjogXCJyZ2IoNjQgMTAxIDE0OSlcIixcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgY2xpY2tBY3Rpb246IHRoaXMudG9nZ2xlRmF2b3JpdGVkU2VhcmNoLFxuICAgIH1cbiAgICBjb25zdCBmYXZvcml0ZXNNb2JpbGUgPSB7XG4gICAgICBsYWJlbDogXCJTaG93IEZhdm9yaXRlc1wiLFxuICAgICAgZm9udENvbG9yOiBcInJnYig2NCAxMDEgMTQ5KVwiLFxuICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICBjbGlja0FjdGlvbjogdGhpcy50b2dnbGVGYXZvcml0ZWRTZWFyY2gsXG4gICAgfVxuXG4gICAgbGV0IGZpbHRlcnMgPSBjdXN0b21GaWx0ZXJzLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiA8RmlsdGVyIGtleT17ZGF0YS50aXRsZX0gaWQ9e2RhdGEudGl0bGV9IHsuLi5kYXRhfS8+XG4gICAgfSlcblxuICAgIGxldCBwcm9kdWN0VGh1bWJuYWlscywgcmVzdWx0SXRlbXMsIHF1ZXJ5SXRlbXMsIG1hbmFnZVNhdmVkU2VhcmNoZXMsIHNhdmVkU2VhcmNoTGlzdEJveCwgcG9wdWxhclNlYXJjaExpc3RCb3g7IFxuICAgIGNvbnN0IHsgcHJvZHVjdHMsIGZhdm9yaXRlZCwgc2F2ZWRTZWFyY2hlcywgY29udGVudHMsIHNhdmVkQW5kRmF2c30gPSB0aGlzLnByb3BzLnNhbXBsZURhdGE7XG4gICAgaWYocHJvZHVjdHMpe1xuICAgICAgcHJvZHVjdFRodW1ibmFpbHMgPSBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT1cInByb2R1Y3RzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxQcm9kdWN0VGh1bWJuYWlsIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZVRodW1ibmFpbENsaWNrfSB7Li4ucHJvZHVjdH0gLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLnByb2R1Y3RzLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICAgICAgICAgIC8vWFggT25lIGNhciBkaXNwbGF5IGhlcmVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgICAgIC5wcm9kdWN0cy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmKGNvbnRlbnRzKXtcbiAgICAgIHJlc3VsdEl0ZW1zID0gY29udGVudHMubWFwKGNvbnRlbnQgPT4ge1xuXG4gICAgICAgIC8vIFhYOiBUb3BpYyB0YWdzIGdldCBnZW5lcmF0ZWQgaGVyZS4gSGFyZGNvZGVkIHdpdGggc2FtcGxlIGRhdGEsIG5lZWQgdG8gY29ubmVjdCB0byBHcmFwaFFMIHF1ZXJ5O1xuICAgICAgICBsZXQgdG9waWNUYWdzID0gY29udGVudC50b3BpY3MubWFwKHRvcGljID0+IHtcbiAgICAgICAgICByZXR1cm4gKCBcbiAgICAgICAgICAgIDxkaXYga2V5PXt0b3BpYy5pZH0gY2xhc3NOYW1lPVwidGFnLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPFRhZ1NtYWxsIGtleT17dG9waWMuaWR9IHsuLi50b3BpY30gLz5cblxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnRhZy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1cHggMCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2NvbnRlbnQuaWR9IGNsYXNzTmFtZT1cImNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPFJlc3VsdEl0ZW1MYXJnZSBrZXk9e2NvbnRlbnQuaWR9IGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZVJlc3VsdENsaWNrfSB7Li4uY29udGVudH0gPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3Mtd3JhcHBlciBtb2JpbGUtdmlld1wiPlxuICAgICAgICAgICAgICAgIHt0b3BpY1RhZ3N9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZXN1bHRJdGVtTGFyZ2U+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLXdyYXBwZXIgZGVza3RvcC12aWV3XCI+XG4gICAgICAgICAgICAgIHt0b3BpY1RhZ3N9XG4gICAgICAgICAgICAgIHsvKiBUZW1wb3JhcnkgdXNlIG9mIHRocmVlIGRvdHMgaWNvbiAqL31cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vY2hpdHRhZ29uZ2l0LmNvbS9pbWFnZXMvdGhyZWUtdmVydGljYWwtZG90cy1pY29uL3RocmVlLXZlcnRpY2FsLWRvdHMtaWNvbi0yMC5qcGdcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAuZGVza1xuICAgICAgICAgICAgICAuY29udGVudC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY29udGVudC13cmFwcGVyOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnRhZ3Mtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gWFg6IFRlbXBvcmFyeSBjb25maWd1cmF0aW9uIGZvciBwbGFjZWhvbGQgaWNvbiAoZG90IGRvdCBkb3QpO1xuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgXG4gICAgLy9YWDogTW9jayBkYXRhIGZvciBub3cuIFRPRE86IGNoYW5nZSBcImNvbGxlY3Rpb25cIiBhcnJheSB0byBxdWVyeSByZXN1bHRzIG9mIHVzZXIncyBTYXZlZCBTZWFyY2hlcy5cbiAgICBpZihzYXZlZEFuZEZhdnMpIHtcbiAgICAgIGxldCBzYXZlZFNlYXJjaFByb3BzID0ge1xuICAgICAgICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxuICAgICAgICB0aXRsZTogJ1NhdmVkIFNlYXJjaGVzJyxcbiAgICAgICAgY29sbGVjdGlvbjogc2F2ZWRBbmRGYXZzXG4gICAgICB9XG4gICAgICBzYXZlZFNlYXJjaExpc3RCb3ggPSAoXG4gICAgICAgIDxMaXN0Qm94IGtleT17c2F2ZWRBbmRGYXZzLmlkfSB7Li4uc2F2ZWRTZWFyY2hQcm9wc30vPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvL1hYOiBNb2NrIGRhdGEgZm9yIG5vdy4gVE9ETzogY2hhbmdlIFwiY29sbGVjdGlvblwiIGFycmF5IHRvIHF1ZXJ5IHJlc3VsdHMgb2YgUG9wdWxhciBTZWFyY2hlcy5cbiAgICBpZihzYXZlZEFuZEZhdnMpIHtcbiAgICAgIGxldCBwb3B1bGFyU2VhcmNoUHJvcHMgPSB7XG4gICAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXG4gICAgICAgIHRpdGxlOiAnUGVvcGxlIGFsc28gc2VhcmNoIGZvci4uLicsXG4gICAgICAgIGNvbGxlY3Rpb246IHNhdmVkQW5kRmF2cyxcbiAgICAgIH1cbiAgICAgIHBvcHVsYXJTZWFyY2hMaXN0Qm94ID0gKFxuICAgICAgICA8TGlzdEJveCBrZXk9e3NhdmVkQW5kRmF2cy5pZH0gey4uLnBvcHVsYXJTZWFyY2hQcm9wc30vPlxuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQ3VzdG9tIHBhdGggZm9yIGJyZWFkY3J1bWJzLiBcbiAgICBjb25zdCBwYXRoID0gW1xuICAgICAge1xuICAgICAgICB0aXRsZTpcIlNlYXJjaFwiLFxuICAgICAgICByb3V0ZTogXCIvZGFzaGJvYXJkXCIsXG4gICAgICAgIGFycm93OiBcIj5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gWFg6IEhhcmQgY29kZWQgZGF0YSBmb3Igbm93LiBDb25uZWN0IHdpdGggdG90YWwgcXVlcnkgcmVzdWx0ICMgXG4gICAgICAgIC8vIGFuZCB3cml0ZSBsb2dpYyBmb3Igc2luZ2x1YXIgdnMgcGx1cmFsIChyZXN1bHQgJiByZXN1bHRzKTtcbiAgICAgICAgdGl0bGU6IGAxNzIgUmVzdWx0c2AsIFxuICAgICAgICByb3V0ZTogdW5kZWZpbmVkLFxuICAgICAgICBhcnJvdzogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgXTtcblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbm9ybWFsaXplLzcuMC4wL25vcm1hbGl6ZS5jc3NcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxoMz4oU0VBUkNIIFJFU1VMVCBQQUdFKTwvaDM+XG4gICAgICAgIDxCYW5uZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItYnJlYWRjcnVtYnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgPEJyZWFkQ3J1bWJzIHBhdGhzPXtwYXRofS8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxTZWFyY2hTZWNvbmRhcnkvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS12aWV3XCI+PENoZWNrYm94IGlkPXtmYXZvcml0ZXNNb2JpbGUubGFiZWx9IHsuLi5mYXZvcml0ZXNNb2JpbGV9Lz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNrdG9wLXZpZXdcIj48Q2hlY2tib3ggaWQ9e2Zhdm9yaXRlc0Rlc2t0b3AubGFiZWx9IHsuLi5mYXZvcml0ZXNEZXNrdG9wfS8+PC9kaXY+XG4gICAgICAgICAgICAgIHtmaWx0ZXJzfVxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Jhbm5lcj5cblxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT50aGlzLmhhbmRsZVRvZ2dsZUZpbHRlcigpfSBjbGFzc05hbWU9XCJleHBhbmQtZmlsdGVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsdGVyLWxhYmVsXCI+RmlsdGVyczwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWx0ZXItaWNvbi13cmFwcGVyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZpbHRlci1pY29uXCIgc3JjPVwiaHR0cHM6Ly9jZG40Lmljb25maW5kZXIuY29tL2RhdGEvaWNvbnMvbWVkaWEtcGxheWVyLWljb25zLzgwL01lZGlhX3BsYXllcl9pY29ucy0wNC01MTIucG5nXCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPFBhZ2VTZWN0aW9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdC13cmFwcGVyXCI+XG4gICAgICAgICAgICB7LyogUHJvZHVjdHMgU2VjdGlvbiAqL31cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXNlY3Rpb24taGVhZGVyXCI+UHJvZHVjdHM8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZWhpY2xlLXRodW1ibmFpbHMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICB7cHJvZHVjdFRodW1ibmFpbHN9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIENvbnRlbnQgU2VjdGlvbiAqL31cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXNlY3Rpb24taGVhZGVyXCI+Q29udGVudDwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtaXRlbXMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIHtyZXN1bHRJdGVtc31cbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbi8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtYm94LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtYm94XCI+e3NhdmVkU2VhcmNoTGlzdEJveH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtYm94XCI+e3BvcHVsYXJTZWFyY2hMaXN0Qm94fTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICA8L1BhZ2VTZWN0aW9uPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZGVza3RvcC12aWV3IHtcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2JpbGUtdmlldyB7XG4gICAgICAgICAgICBtYXJnaW46IDMycHggMCAtNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGFnZS1zZWN0aW9uLWhlYWRlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYigyMzEsIDIzMSwgMjMxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbm5lci1icmVhZGNydW1icy13cmFwcGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFubmVyLWNvbnRlbnQtd3JhcHBlcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2gtcmVzdWx0LXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnZlaGljbGUtdGh1bWJuYWlscy13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZXN1bHQtaXRlbXMtd3JhcHBlciB7IC8vXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgICAgICAgZmxleDogMSAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGlzdC1ib3gtd3JhcHBlciB7XG4gICAgICAgICAgICBmbGV4OiAxIDMwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3QtYm94IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDMycHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmV4cGFuZC1maWx0ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnN0YXRlLmZpbHRlclRvZ2dsZSA/IFwibm9uZVwiIDogXCJmbGV4XCJ9O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYig0NCA5MSAxNDIpO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgZm9udDogNzAwIDFlbSBzeXN0ZW0tdWk7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5maWx0ZXItbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICAgICAgICAgICBmbGV4OiAxIDcwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpbHRlci1pY29uLXdyYXBwZXIge1xuICAgICAgICAgICAgZmxleDogMSAzMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBncmV5IDFweCBzb2xpZDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpbHRlci1pY29uIHtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIG1heC13aWR0aDogMzBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmlsdGVyLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnN0YXRlLmZpbHRlclRvZ2dsZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwifTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgLmRlc2t0b3AtdmlldyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9iaWxlLXZpZXcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmV4cGFuZC1maWx0ZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpbHRlci13cmFwcGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpbHRlci13cmFwcGVyID4gKiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZ2Utc2VjdGlvbi1oZWFkZXIge1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDZweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDEwcHggNnB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggNnB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYW5uZXItY29udGVudC13cmFwcGVye1xuICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGVudHMtd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZXN1bHQtaXRlbXMtd3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAzMnB4IDE2cHggMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgc2FtcGxlRGF0YTogc3RhdGUuc2FtcGxlRGF0YVxufSlcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTZWFyY2hSZXN1bHRzKSk7Il19 */\n/*@ sourceURL=pages/search-results.js */'
              })
            );
          });

          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { key: content.id, className: 'jsx-244330667' + ' ' + 'content-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 213
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_13__components_ResultItemLarge__["a" /* default */],
              _extends({ key: content.id, handleClick: _this2.handleResultClick }, content, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 214
                }
              }),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-244330667' + ' ' + 'tags-wrapper mobile-view',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 215
                  }
                },
                topicTags
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-244330667' + ' ' + 'tags-wrapper desktop-view',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 221
                }
              },
              topicTags,
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'http://chittagongit.com/images/three-vertical-dots-icon/three-vertical-dots-icon-20.jpg', className: 'jsx-244330667',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 224
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
              styleId: '244330667',
              css: '.desk.jsx-244330667 .content-wrapper.jsx-244330667{border:1px solid lightgrey;border-radius:4px;margin-bottom:16px;padding:0 16px;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.content-wrapper.jsx-244330667:hover{cursor:pointer;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;-webkit-box-shadow:0px 10px 10px -6px rgba(0,0,0,0.15);-moz-box-shadow:0px 10px 10px -6px rgba(0,0,0,0.15);box-shadow:0px 10px 10px -6px rgba(0,0,0,0.15);}.tags-wrapper.jsx-244330667{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}img.jsx-244330667{width:50px;height:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC1yZXN1bHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtPd0IsQUFJNEMsQUFVWixBQU9GLEFBTUYsV0FFZCxJQWQ0QixRQWMzQixJQXhCb0Isa0JBQ0MsbUJBQ0osU0FTd0MsQ0FNOUIsS0FkQSxpREFTMkIsU0FSdkMsa0NBY00sU0FMNEIsK0JBUmpCLGdCQVNoQyxxQ0FLQSw4REFicUIsNkZBQ3JCIiwiZmlsZSI6InBhZ2VzL3NlYXJjaC1yZXN1bHRzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lZGRpZXlhby9EZXNrdG9wL2dwX2RyYWZ0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzaG9ydGlkIGZyb20gJ3Nob3J0aWQnO1xuXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJy4uL2xpYi93aXRoUmVkdXgnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi9jb21wb25lbnRzL0ZpbHRlcic7XG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQmFubmVyJztcbmltcG9ydCBMaXN0Qm94IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdEJveCc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi4vY29tcG9uZW50cy9DaGVja2JveCc7XG5pbXBvcnQgVGFnU21hbGwgZnJvbSAnLi4vY29tcG9uZW50cy9UYWdTbWFsbCc7XG5pbXBvcnQgUGFnZVNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlU2VjdGlvbic7XG5pbXBvcnQgQnJlYWRDcnVtYnMgZnJvbSAnLi4vY29tcG9uZW50cy9CcmVhZENydW1icyc7XG5pbXBvcnQgUmVzdWx0SXRlbUxhcmdlIGZyb20gJy4uL2NvbXBvbmVudHMvUmVzdWx0SXRlbUxhcmdlJztcbmltcG9ydCBTZWFyY2hTZWNvbmRhcnkgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hTZWNvbmRhcnknO1xuaW1wb3J0IFByb2R1Y3RUaHVtYm5haWwgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0VGh1bWJuYWlsJztcblxuXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xuXG5pbXBvcnQgKiBhcyBhY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9zZWFyY2gnO1xuY2xhc3MgU2VhcmNoUmVzdWx0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlsdGVyVG9nZ2xlOiBmYWxzZVxuICAgIH07XG4gIH07XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24uY2xlYXJGaWx0ZXJzKCkpO1xuICB9XG5cbiAgZmlsdGVyU3RhdHVzID0gKGlucHV0LCBkYXRhKSA9PiB7XG4gICAgaWYoaW5wdXQgIT09IHVuZGVmaW5lZCl7XG4gICAgICBpbnB1dCA/XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5hZGRTdGF0dXNGaWx0ZXIoZGF0YSkpIDpcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLnJlbW92ZVN0YXR1c0ZpbHRlcihkYXRhKSk7XG4gICAgfTtcbiAgfTtcblxuICBmaWx0ZXJDb250ZW50VHlwZSA9IChpbnB1dCxkYXRhKSA9PiB7XG4gICAgaWYoaW5wdXQgIT09IHVuZGVmaW5lZCl7XG4gICAgICBpbnB1dCA/XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5hZGRDb250ZW50VHlwZUZpbHRlcihkYXRhKSkgOlxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24ucmVtb3ZlQ29udGVudFR5cGVGaWx0ZXIoZGF0YSkpO1xuICAgIH07XG4gIH07XG5cbiAgZmlsdGVyVG9waWMgPSAoaW5wdXQsIGRhdGEpID0+IHtcbiAgICBpZihpbnB1dCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIGlucHV0ID9cbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLmFkZFRvcGljRmlsdGVyKGRhdGEpKSA6XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5yZW1vdmVUb3BpY0ZpbHRlcihkYXRhKSk7XG4gICAgfTtcbiAgfTtcblxuICB0b2dnbGVGYXZvcml0ZWRTZWFyY2ggPSAoaW5wdXQpID0+IHtcbiAgICBpZihpbnB1dCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLnRvZ2dsZVNhdmVkU2VhcmNoKGlucHV0KSk7XG4gICAgfTtcbiAgfTtcblxuICBoYW5kbGVUaHVtYm5haWxDbGljayA9IChtb2RlbE5hbWUpID0+IChcbiAgICBjb25zb2xlLmxvZyhgVmVoaWNsZSBUaHVtYm5haWw6ICR7bW9kZWxOYW1lfSBjbGlja2VkLmApXG4gICk7XG5cbiAgaGFuZGxlUmVzdWx0Q2xpY2sgPSAocmVzdWx0KSA9PiB7XG4gICAgY29uc29sZS5sb2coYFJlc3VsdDogJHtyZXN1bHR9IGNsaWNrZWQuYClcbiAgfTtcblxuICBoYW5kbGVUb2dnbGVGaWx0ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyVG9nZ2xlOiAhdGhpcy5zdGF0ZS5maWx0ZXJUb2dnbGV9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmZpbHRlclRvZ2dsZSk7XG4gIH1cblxuICByZW5kZXIoKSB7ICBcblxuICAgIC8vIFNlYXJjaCByZXN1bHRzIHBhZ2U6IGN1c3RvbSBmaWx0ZXJzXG4gICAgLy8gWFg6IE1ha2UgZGF0YSBkeW5hbWljIG9uY2UgY29ubmVjdGVkIHRvIGdyYXBoUUwgflxuICAgIGNvbnN0IGN1c3RvbUZpbHRlcnMgPSBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIlN0YXR1c1wiLFxuICAgICAgICBvcHRpb25zOlt7XG4gICAgICAgICAgbGFiZWw6IFwiY3VycmVudFwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sIFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiYXJjaGl2ZWRcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9XSxcbiAgICAgICAgY2xpY2tBY3Rpb246IHRoaXMuZmlsdGVyU3RhdHVzLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQ29udGVudCBUeXBlXCIsXG4gICAgICAgIG9wdGlvbnM6IFt7XG4gICAgICAgICAgbGFiZWw6IFwiUHJvZHVjdFwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJBcnRpY2xlXCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkRvY3VtZW50XCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAgeyBcbiAgICAgICAgICBsYWJlbDogXCJWaWRlb1wiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgbGFiZWw6IFwiSW1hZ2VcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZCxcbiAgICAgICAgfV0sIFxuICAgICAgICBjbGlja0FjdGlvbjogdGhpcy5maWx0ZXJDb250ZW50VHlwZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gWFg6IE1heSBuZWVkIHRvIHF1ZXJ5IGZvciBhbiBhcnJheSBvZiB0b3BpY3Mgb24gQ29tcG9uZW50V2lsbE1vdW50KCk7XG4gICAgICAgIHRpdGxlOiBcIlRvcGljXCIsXG4gICAgICAgIG9wdGlvbnM6IFt7XG4gICAgICAgICAgbGFiZWw6IFwidGVjaG5vbG9neVwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJibHVldG9vdGhcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwicHJvZHVjdCBpbmZvcm1hdGlvblwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH1dLFxuICAgICAgICBjbGlja0FjdGlvbjogdGhpcy5maWx0ZXJUb3BpY1xuICAgICAgfVxuICAgIF07XG5cbiAgICAvLyBGYXZvcml0ZSBDaGVja2JveCBQcm9wcyAoZGVza3RvcCAmIG1vYmlsZSk7XG4gICAgY29uc3QgZmF2b3JpdGVzRGVza3RvcCA9IHtcbiAgICAgIGxhYmVsOiBcIlNob3cgb25seSBmYXZvcml0ZXNcIixcbiAgICAgIGZvbnRDb2xvcjogXCJyZ2IoNjQgMTAxIDE0OSlcIixcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgY2xpY2tBY3Rpb246IHRoaXMudG9nZ2xlRmF2b3JpdGVkU2VhcmNoLFxuICAgIH1cbiAgICBjb25zdCBmYXZvcml0ZXNNb2JpbGUgPSB7XG4gICAgICBsYWJlbDogXCJTaG93IEZhdm9yaXRlc1wiLFxuICAgICAgZm9udENvbG9yOiBcInJnYig2NCAxMDEgMTQ5KVwiLFxuICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICBjbGlja0FjdGlvbjogdGhpcy50b2dnbGVGYXZvcml0ZWRTZWFyY2gsXG4gICAgfVxuXG4gICAgbGV0IGZpbHRlcnMgPSBjdXN0b21GaWx0ZXJzLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiA8RmlsdGVyIGtleT17ZGF0YS50aXRsZX0gaWQ9e2RhdGEudGl0bGV9IHsuLi5kYXRhfS8+XG4gICAgfSlcblxuICAgIGxldCBwcm9kdWN0VGh1bWJuYWlscywgcmVzdWx0SXRlbXMsIHF1ZXJ5SXRlbXMsIG1hbmFnZVNhdmVkU2VhcmNoZXMsIHNhdmVkU2VhcmNoTGlzdEJveCwgcG9wdWxhclNlYXJjaExpc3RCb3g7IFxuICAgIGNvbnN0IHsgcHJvZHVjdHMsIGZhdm9yaXRlZCwgc2F2ZWRTZWFyY2hlcywgY29udGVudHMsIHNhdmVkQW5kRmF2c30gPSB0aGlzLnByb3BzLnNhbXBsZURhdGE7XG4gICAgaWYocHJvZHVjdHMpe1xuICAgICAgcHJvZHVjdFRodW1ibmFpbHMgPSBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT1cInByb2R1Y3RzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxQcm9kdWN0VGh1bWJuYWlsIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZVRodW1ibmFpbENsaWNrfSB7Li4ucHJvZHVjdH0gLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLnByb2R1Y3RzLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAgICAgICAgICAgICAgIC8vWFggT25lIGNhciBkaXNwbGF5IGhlcmVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgICAgIC5wcm9kdWN0cy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmKGNvbnRlbnRzKXtcbiAgICAgIHJlc3VsdEl0ZW1zID0gY29udGVudHMubWFwKGNvbnRlbnQgPT4ge1xuXG4gICAgICAgIC8vIFhYOiBUb3BpYyB0YWdzIGdldCBnZW5lcmF0ZWQgaGVyZS4gSGFyZGNvZGVkIHdpdGggc2FtcGxlIGRhdGEsIG5lZWQgdG8gY29ubmVjdCB0byBHcmFwaFFMIHF1ZXJ5O1xuICAgICAgICBsZXQgdG9waWNUYWdzID0gY29udGVudC50b3BpY3MubWFwKHRvcGljID0+IHtcbiAgICAgICAgICByZXR1cm4gKCBcbiAgICAgICAgICAgIDxkaXYga2V5PXt0b3BpYy5pZH0gY2xhc3NOYW1lPVwidGFnLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPFRhZ1NtYWxsIGtleT17dG9waWMuaWR9IHsuLi50b3BpY30gLz5cblxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnRhZy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1cHggMCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2NvbnRlbnQuaWR9IGNsYXNzTmFtZT1cImNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPFJlc3VsdEl0ZW1MYXJnZSBrZXk9e2NvbnRlbnQuaWR9IGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZVJlc3VsdENsaWNrfSB7Li4uY29udGVudH0gPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3Mtd3JhcHBlciBtb2JpbGUtdmlld1wiPlxuICAgICAgICAgICAgICAgIHt0b3BpY1RhZ3N9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZXN1bHRJdGVtTGFyZ2U+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLXdyYXBwZXIgZGVza3RvcC12aWV3XCI+XG4gICAgICAgICAgICAgIHt0b3BpY1RhZ3N9XG4gICAgICAgICAgICAgIHsvKiBUZW1wb3JhcnkgdXNlIG9mIHRocmVlIGRvdHMgaWNvbiAqL31cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vY2hpdHRhZ29uZ2l0LmNvbS9pbWFnZXMvdGhyZWUtdmVydGljYWwtZG90cy1pY29uL3RocmVlLXZlcnRpY2FsLWRvdHMtaWNvbi0yMC5qcGdcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAuZGVza1xuICAgICAgICAgICAgICAuY29udGVudC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY29udGVudC13cmFwcGVyOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnRhZ3Mtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gWFg6IFRlbXBvcmFyeSBjb25maWd1cmF0aW9uIGZvciBwbGFjZWhvbGQgaWNvbiAoZG90IGRvdCBkb3QpO1xuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgXG4gICAgLy9YWDogTW9jayBkYXRhIGZvciBub3cuIFRPRE86IGNoYW5nZSBcImNvbGxlY3Rpb25cIiBhcnJheSB0byBxdWVyeSByZXN1bHRzIG9mIHVzZXIncyBTYXZlZCBTZWFyY2hlcy5cbiAgICBpZihzYXZlZEFuZEZhdnMpIHtcbiAgICAgIGxldCBzYXZlZFNlYXJjaFByb3BzID0ge1xuICAgICAgICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxuICAgICAgICB0aXRsZTogJ1NhdmVkIFNlYXJjaGVzJyxcbiAgICAgICAgY29sbGVjdGlvbjogc2F2ZWRBbmRGYXZzXG4gICAgICB9XG4gICAgICBzYXZlZFNlYXJjaExpc3RCb3ggPSAoXG4gICAgICAgIDxMaXN0Qm94IGtleT17c2F2ZWRBbmRGYXZzLmlkfSB7Li4uc2F2ZWRTZWFyY2hQcm9wc30vPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvL1hYOiBNb2NrIGRhdGEgZm9yIG5vdy4gVE9ETzogY2hhbmdlIFwiY29sbGVjdGlvblwiIGFycmF5IHRvIHF1ZXJ5IHJlc3VsdHMgb2YgUG9wdWxhciBTZWFyY2hlcy5cbiAgICBpZihzYXZlZEFuZEZhdnMpIHtcbiAgICAgIGxldCBwb3B1bGFyU2VhcmNoUHJvcHMgPSB7XG4gICAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXG4gICAgICAgIHRpdGxlOiAnUGVvcGxlIGFsc28gc2VhcmNoIGZvci4uLicsXG4gICAgICAgIGNvbGxlY3Rpb246IHNhdmVkQW5kRmF2cyxcbiAgICAgIH1cbiAgICAgIHBvcHVsYXJTZWFyY2hMaXN0Qm94ID0gKFxuICAgICAgICA8TGlzdEJveCBrZXk9e3NhdmVkQW5kRmF2cy5pZH0gey4uLnBvcHVsYXJTZWFyY2hQcm9wc30vPlxuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQ3VzdG9tIHBhdGggZm9yIGJyZWFkY3J1bWJzLiBcbiAgICBjb25zdCBwYXRoID0gW1xuICAgICAge1xuICAgICAgICB0aXRsZTpcIlNlYXJjaFwiLFxuICAgICAgICByb3V0ZTogXCIvZGFzaGJvYXJkXCIsXG4gICAgICAgIGFycm93OiBcIj5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gWFg6IEhhcmQgY29kZWQgZGF0YSBmb3Igbm93LiBDb25uZWN0IHdpdGggdG90YWwgcXVlcnkgcmVzdWx0ICMgXG4gICAgICAgIC8vIGFuZCB3cml0ZSBsb2dpYyBmb3Igc2luZ2x1YXIgdnMgcGx1cmFsIChyZXN1bHQgJiByZXN1bHRzKTtcbiAgICAgICAgdGl0bGU6IGAxNzIgUmVzdWx0c2AsIFxuICAgICAgICByb3V0ZTogdW5kZWZpbmVkLFxuICAgICAgICBhcnJvdzogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgXTtcblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbm9ybWFsaXplLzcuMC4wL25vcm1hbGl6ZS5jc3NcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxoMz4oU0VBUkNIIFJFU1VMVCBQQUdFKTwvaDM+XG4gICAgICAgIDxCYW5uZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItYnJlYWRjcnVtYnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgPEJyZWFkQ3J1bWJzIHBhdGhzPXtwYXRofS8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxTZWFyY2hTZWNvbmRhcnkvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS12aWV3XCI+PENoZWNrYm94IGlkPXtmYXZvcml0ZXNNb2JpbGUubGFiZWx9IHsuLi5mYXZvcml0ZXNNb2JpbGV9Lz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNrdG9wLXZpZXdcIj48Q2hlY2tib3ggaWQ9e2Zhdm9yaXRlc0Rlc2t0b3AubGFiZWx9IHsuLi5mYXZvcml0ZXNEZXNrdG9wfS8+PC9kaXY+XG4gICAgICAgICAgICAgIHtmaWx0ZXJzfVxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Jhbm5lcj5cblxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT50aGlzLmhhbmRsZVRvZ2dsZUZpbHRlcigpfSBjbGFzc05hbWU9XCJleHBhbmQtZmlsdGVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsdGVyLWxhYmVsXCI+RmlsdGVyczwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWx0ZXItaWNvbi13cmFwcGVyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZpbHRlci1pY29uXCIgc3JjPVwiaHR0cHM6Ly9jZG40Lmljb25maW5kZXIuY29tL2RhdGEvaWNvbnMvbWVkaWEtcGxheWVyLWljb25zLzgwL01lZGlhX3BsYXllcl9pY29ucy0wNC01MTIucG5nXCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPFBhZ2VTZWN0aW9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdC13cmFwcGVyXCI+XG4gICAgICAgICAgICB7LyogUHJvZHVjdHMgU2VjdGlvbiAqL31cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXNlY3Rpb24taGVhZGVyXCI+UHJvZHVjdHM8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZWhpY2xlLXRodW1ibmFpbHMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICB7cHJvZHVjdFRodW1ibmFpbHN9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIENvbnRlbnQgU2VjdGlvbiAqL31cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXNlY3Rpb24taGVhZGVyXCI+Q29udGVudDwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtaXRlbXMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIHtyZXN1bHRJdGVtc31cbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbi8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtYm94LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtYm94XCI+e3NhdmVkU2VhcmNoTGlzdEJveH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtYm94XCI+e3BvcHVsYXJTZWFyY2hMaXN0Qm94fTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICA8L1BhZ2VTZWN0aW9uPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZGVza3RvcC12aWV3IHtcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2JpbGUtdmlldyB7XG4gICAgICAgICAgICBtYXJnaW46IDMycHggMCAtNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGFnZS1zZWN0aW9uLWhlYWRlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYigyMzEsIDIzMSwgMjMxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbm5lci1icmVhZGNydW1icy13cmFwcGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFubmVyLWNvbnRlbnQtd3JhcHBlcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWFyY2gtcmVzdWx0LXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnZlaGljbGUtdGh1bWJuYWlscy13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZXN1bHQtaXRlbXMtd3JhcHBlciB7IC8vXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgICAgICAgZmxleDogMSAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGlzdC1ib3gtd3JhcHBlciB7XG4gICAgICAgICAgICBmbGV4OiAxIDMwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxpc3QtYm94IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDMycHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmV4cGFuZC1maWx0ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnN0YXRlLmZpbHRlclRvZ2dsZSA/IFwibm9uZVwiIDogXCJmbGV4XCJ9O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYig0NCA5MSAxNDIpO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgZm9udDogNzAwIDFlbSBzeXN0ZW0tdWk7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5maWx0ZXItbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICAgICAgICAgICBmbGV4OiAxIDcwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpbHRlci1pY29uLXdyYXBwZXIge1xuICAgICAgICAgICAgZmxleDogMSAzMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBncmV5IDFweCBzb2xpZDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpbHRlci1pY29uIHtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIG1heC13aWR0aDogMzBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmlsdGVyLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnN0YXRlLmZpbHRlclRvZ2dsZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwifTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzNzZweCkge1xuICAgICAgICAgICAgLmRlc2t0b3AtdmlldyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubW9iaWxlLXZpZXcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmV4cGFuZC1maWx0ZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpbHRlci13cmFwcGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpbHRlci13cmFwcGVyID4gKiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhZ2Utc2VjdGlvbi1oZWFkZXIge1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDZweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDEwcHggNnB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggNnB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYW5uZXItY29udGVudC13cmFwcGVye1xuICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGVudHMtd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZXN1bHQtaXRlbXMtd3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAzMnB4IDE2cHggMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgc2FtcGxlRGF0YTogc3RhdGUuc2FtcGxlRGF0YVxufSlcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTZWFyY2hSZXN1bHRzKSk7Il19 */\n/*@ sourceURL=pages/search-results.js */'
            })
          );
        });
      };

      //XX: Mock data for now. TODO: change "collection" array to query results of user's Saved Searches.
      if (savedAndFavs) {
        var savedSearchProps = {
          id: __WEBPACK_IMPORTED_MODULE_4_shortid___default.a.generate(),
          title: 'Saved Searches',
          collection: savedAndFavs
        };
        savedSearchListBox = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_ListBox__["a" /* default */], _extends({ key: savedAndFavs.id }, savedSearchProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 271
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
            lineNumber: 283
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
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1676763969', [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]]]) + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 304
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 305
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css', className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1676763969', [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]]]),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 306
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1676763969', [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]]]),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 307
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h3',
          {
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1676763969', [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]]]),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 310
            }
          },
          '(SEARCH RESULT PAGE)'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7__components_Banner__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 311
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1676763969', [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]]]) + ' ' + 'banner-breadcrumbs-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 312
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_BreadCrumbs__["a" /* default */], { paths: path, __source: {
                fileName: _jsxFileName,
                lineNumber: 313
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1676763969', [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]]]) + ' ' + 'banner-content-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 316
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_SearchSecondary__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 317
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1676763969', [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]]]) + ' ' + 'mobile-view',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 319
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Checkbox__["a" /* default */], _extends({ id: favoritesMobile.label }, favoritesMobile, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 319
                }
              }))
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1676763969', [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]]]) + ' ' + 'filter-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 320
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1676763969', [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]]]) + ' ' + 'desktop-view',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 321
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Checkbox__["a" /* default */], _extends({ id: favoritesDesktop.label }, favoritesDesktop, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 321
                  }
                }))
              ),
              filters
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { onClick: function onClick() {
              return _this2.handleToggleFilter();
            }, className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1676763969', [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]]]) + ' ' + 'expand-filter',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 327
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'span',
            {
              className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1676763969', [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]]]) + ' ' + 'filter-label',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 328
              }
            },
            'Filters'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'span',
            {
              className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1676763969', [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]]]) + ' ' + 'filter-icon-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 329
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'https://cdn4.iconfinder.com/data/icons/media-player-icons/80/Media_player_icons-04-512.png', className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1676763969', [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]]]) + ' ' + 'filter-icon',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 330
              }
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11__components_PageSection__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 334
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1676763969', [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]]]) + ' ' + 'search-result-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 335
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'h3',
              {
                className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1676763969', [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]]]) + ' ' + 'page-section-header',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 337
                }
              },
              'Products'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1676763969', [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]]]) + ' ' + 'vehicle-thumbnails-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 338
                }
              },
              productThumbnails
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'h3',
              {
                className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1676763969', [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]]]) + ' ' + 'page-section-header',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 343
                }
              },
              'Content'
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1676763969', [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]]]) + ' ' + 'contents-wrapper',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 344
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1676763969', [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]]]) + ' ' + 'result-items-wrapper',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 345
                  }
                },
                resultItems,
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__components_Pagination__["a" /* default */], {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 347
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1676763969', [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]]]) + ' ' + 'list-box-wrapper',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 349
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'div',
                  {
                    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1676763969', [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]]]) + ' ' + 'list-box',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 350
                    }
                  },
                  savedSearchListBox
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'div',
                  {
                    className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['1676763969', [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]]]) + ' ' + 'list-box',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 351
                    }
                  },
                  popularSearchListBox
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '1676763969',
          css: '.mobile-view.__jsx-style-dynamic-selector{margin:32px 0 -4px;}.page-section-header.__jsx-style-dynamic-selector{font-size:1.5em;padding-bottom:32px;border-bottom:2px dashed rgb(231,231,231);}.banner-breadcrumbs-wrapper.__jsx-style-dynamic-selector{width:100%;}.banner-content-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;}.search-result-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;}.vehicle-thumbnails-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.result-items-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-flex:1 100%;-ms-flex:1 100%;flex:1 100%;margin-bottom:16px;}list-box-wrapper.__jsx-style-dynamic-selector{-webkit-flex:1 30%;-ms-flex:1 30%;flex:1 30%;}.list-box.__jsx-style-dynamic-selector{margin:0 0 32px 0;}.expand-filter.__jsx-style-dynamic-selector{display:' + (this.state.filterToggle ? "none" : "flex") + ';-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:rgb(44 91 142);height:50px;font:700 1em system-ui;color:white;cursor:pointer;}.filter-label.__jsx-style-dynamic-selector{margin-left:32px;-webkit-flex:1 70%;-ms-flex:1 70%;flex:1 70%;}.filter-icon-wrapper.__jsx-style-dynamic-selector{-webkit-flex:1 30%;-ms-flex:1 30%;flex:1 30%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-left:grey 1px solid;height:100%;}.filter-icon.__jsx-style-dynamic-selector{height:auto;max-width:30px;margin:0 auto;}.filter-wrapper.__jsx-style-dynamic-selector{display:' + (this.state.filterToggle ? "block" : "none") + ';}@media all and (min-width:376px){.desktop-view.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.mobile-view.__jsx-style-dynamic-selector{display:none;}.expand-filter.__jsx-style-dynamic-selector{display:none;}.filter-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:100%;min-width:400px;margin-left:40px;}.filter-wrapper.__jsx-style-dynamic-selector>*.__jsx-style-dynamic-selector{margin:0 20px;}.page-section-header.__jsx-style-dynamic-selector{border-bottom:none;padding-bottom:8px;-webkit-box-shadow:0px 10px 6px -6px rgba(0,0,0,0.15);-moz-box-shadow:0px 10px 6px -6px rgba(0,0,0,0.15);box-shadow:0px 10px 6px -6px rgba(0,0,0,0.15);}.banner-content-wrapper.__jsx-style-dynamic-selector{-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;}.contents-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;}.result-items-wrapper.__jsx-style-dynamic-selector{margin:0 32px 16px 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3NlYXJjaC1yZXN1bHRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdXb0IsQUFNZ0MsQUFHSCxBQUtMLEFBR0UsQUFJQSxBQUlBLEFBR0EsQUFNRixBQUdPLEFBR21CLEFBU3BCLEFBSU4sQUFPQyxBQUt5QixBQUt0QixBQUdBLEFBR0EsQUFHQSxBQVFDLEFBR0ssQUFPRSxBQUdSLEFBS2hCLFdBMUZELENBOENpQixDQWFmLEFBR0EsQ0FXQSxFQTlFb0IsQ0F3Q1QsQ0FaYixDQS9CQSxBQW9GdUIsRUFjckIsTUEzQ2MsU0FuRDhCLENBOEJ6QixBQXlCckIsQ0EwQjBELEdBN0IxRCxJQTVCQSxBQW1CZSxpQkFIZixZQWpDMEIsQUFJQSxBQUkxQixBQUcwQixBQTBDeEIsQUFTcUIsQUFxQkUsQ0FIdkIsR0F0RkYsY0FpRnVELDJCQXRDbEMsV0FiTyxhQW9Ec0IsTUFRaEQsT0EzRFksRUF4QmQsQUFJQSxBQU9jLFNBbURlLENBckNKLHFCQW1EdkIsRUFsRFksWUFDRyxHQWZJLE1BeUJRLE1BVDdCLE9BZkEsY0F5QmMsWUFDZCxhQXdCZSxXQUNLLGdCQUNDLGlCQUNuQiIsImZpbGUiOiJwYWdlcy9zZWFyY2gtcmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc2hvcnRpZCBmcm9tICdzaG9ydGlkJztcblxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICcuLi9saWIvd2l0aFJlZHV4JztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9GaWx0ZXInO1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0Jhbm5lcic7XG5pbXBvcnQgTGlzdEJveCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RCb3gnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hlY2tib3gnO1xuaW1wb3J0IFRhZ1NtYWxsIGZyb20gJy4uL2NvbXBvbmVudHMvVGFnU21hbGwnO1xuaW1wb3J0IFBhZ2VTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZVNlY3Rpb24nO1xuaW1wb3J0IEJyZWFkQ3J1bWJzIGZyb20gJy4uL2NvbXBvbmVudHMvQnJlYWRDcnVtYnMnO1xuaW1wb3J0IFJlc3VsdEl0ZW1MYXJnZSBmcm9tICcuLi9jb21wb25lbnRzL1Jlc3VsdEl0ZW1MYXJnZSc7XG5pbXBvcnQgU2VhcmNoU2Vjb25kYXJ5IGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoU2Vjb25kYXJ5JztcbmltcG9ydCBQcm9kdWN0VGh1bWJuYWlsIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdFRodW1ibmFpbCc7XG5cblxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcblxuaW1wb3J0ICogYXMgYWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvc2VhcmNoJztcbmNsYXNzIFNlYXJjaFJlc3VsdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpbHRlclRvZ2dsZTogZmFsc2VcbiAgICB9O1xuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLmNsZWFyRmlsdGVycygpKTtcbiAgfVxuXG4gIGZpbHRlclN0YXR1cyA9IChpbnB1dCwgZGF0YSkgPT4ge1xuICAgIGlmKGlucHV0ICE9PSB1bmRlZmluZWQpe1xuICAgICAgaW5wdXQgP1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24uYWRkU3RhdHVzRmlsdGVyKGRhdGEpKSA6XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5yZW1vdmVTdGF0dXNGaWx0ZXIoZGF0YSkpO1xuICAgIH07XG4gIH07XG5cbiAgZmlsdGVyQ29udGVudFR5cGUgPSAoaW5wdXQsZGF0YSkgPT4ge1xuICAgIGlmKGlucHV0ICE9PSB1bmRlZmluZWQpe1xuICAgICAgaW5wdXQgP1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24uYWRkQ29udGVudFR5cGVGaWx0ZXIoZGF0YSkpIDpcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWN0aW9uLnJlbW92ZUNvbnRlbnRUeXBlRmlsdGVyKGRhdGEpKTtcbiAgICB9O1xuICB9O1xuXG4gIGZpbHRlclRvcGljID0gKGlucHV0LCBkYXRhKSA9PiB7XG4gICAgaWYoaW5wdXQgIT09IHVuZGVmaW5lZCl7XG4gICAgICBpbnB1dCA/XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi5hZGRUb3BpY0ZpbHRlcihkYXRhKSkgOlxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhY3Rpb24ucmVtb3ZlVG9waWNGaWx0ZXIoZGF0YSkpO1xuICAgIH07XG4gIH07XG5cbiAgdG9nZ2xlRmF2b3JpdGVkU2VhcmNoID0gKGlucHV0KSA9PiB7XG4gICAgaWYoaW5wdXQgIT09IHVuZGVmaW5lZCl7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjdGlvbi50b2dnbGVTYXZlZFNlYXJjaChpbnB1dCkpO1xuICAgIH07XG4gIH07XG5cbiAgaGFuZGxlVGh1bWJuYWlsQ2xpY2sgPSAobW9kZWxOYW1lKSA9PiAoXG4gICAgY29uc29sZS5sb2coYFZlaGljbGUgVGh1bWJuYWlsOiAke21vZGVsTmFtZX0gY2xpY2tlZC5gKVxuICApO1xuXG4gIGhhbmRsZVJlc3VsdENsaWNrID0gKHJlc3VsdCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBSZXN1bHQ6ICR7cmVzdWx0fSBjbGlja2VkLmApXG4gIH07XG5cbiAgaGFuZGxlVG9nZ2xlRmlsdGVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlclRvZ2dsZTogIXRoaXMuc3RhdGUuZmlsdGVyVG9nZ2xlfSk7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5maWx0ZXJUb2dnbGUpO1xuICB9XG5cbiAgcmVuZGVyKCkgeyAgXG5cbiAgICAvLyBTZWFyY2ggcmVzdWx0cyBwYWdlOiBjdXN0b20gZmlsdGVyc1xuICAgIC8vIFhYOiBNYWtlIGRhdGEgZHluYW1pYyBvbmNlIGNvbm5lY3RlZCB0byBncmFwaFFMIH5cbiAgICBjb25zdCBjdXN0b21GaWx0ZXJzID0gW1xuICAgICAge1xuICAgICAgICB0aXRsZTogXCJTdGF0dXNcIixcbiAgICAgICAgb3B0aW9uczpbe1xuICAgICAgICAgIGxhYmVsOiBcImN1cnJlbnRcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LCBcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcImFyY2hpdmVkXCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfV0sXG4gICAgICAgIGNsaWNrQWN0aW9uOiB0aGlzLmZpbHRlclN0YXR1cyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkNvbnRlbnQgVHlwZVwiLFxuICAgICAgICBvcHRpb25zOiBbe1xuICAgICAgICAgIGxhYmVsOiBcIlByb2R1Y3RcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiQXJ0aWNsZVwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJEb2N1bWVudFwiLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgIGZvbnRDb2xvcjogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHsgXG4gICAgICAgICAgbGFiZWw6IFwiVmlkZW9cIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICB7IFxuICAgICAgICAgIGxhYmVsOiBcIkltYWdlXCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWQsXG4gICAgICAgIH1dLCBcbiAgICAgICAgY2xpY2tBY3Rpb246IHRoaXMuZmlsdGVyQ29udGVudFR5cGVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIFhYOiBNYXkgbmVlZCB0byBxdWVyeSBmb3IgYW4gYXJyYXkgb2YgdG9waWNzIG9uIENvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgICAgICB0aXRsZTogXCJUb3BpY1wiLFxuICAgICAgICBvcHRpb25zOiBbe1xuICAgICAgICAgIGxhYmVsOiBcInRlY2hub2xvZ3lcIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiYmx1ZXRvb3RoXCIsXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgICAgZm9udENvbG9yOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcInByb2R1Y3QgaW5mb3JtYXRpb25cIixcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgICAgICBmb250Q29sb3I6IHVuZGVmaW5lZFxuICAgICAgICB9XSxcbiAgICAgICAgY2xpY2tBY3Rpb246IHRoaXMuZmlsdGVyVG9waWNcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgLy8gRmF2b3JpdGUgQ2hlY2tib3ggUHJvcHMgKGRlc2t0b3AgJiBtb2JpbGUpO1xuICAgIGNvbnN0IGZhdm9yaXRlc0Rlc2t0b3AgPSB7XG4gICAgICBsYWJlbDogXCJTaG93IG9ubHkgZmF2b3JpdGVzXCIsXG4gICAgICBmb250Q29sb3I6IFwicmdiKDY0IDEwMSAxNDkpXCIsXG4gICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgIGNsaWNrQWN0aW9uOiB0aGlzLnRvZ2dsZUZhdm9yaXRlZFNlYXJjaCxcbiAgICB9XG4gICAgY29uc3QgZmF2b3JpdGVzTW9iaWxlID0ge1xuICAgICAgbGFiZWw6IFwiU2hvdyBGYXZvcml0ZXNcIixcbiAgICAgIGZvbnRDb2xvcjogXCJyZ2IoNjQgMTAxIDE0OSlcIixcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgY2xpY2tBY3Rpb246IHRoaXMudG9nZ2xlRmF2b3JpdGVkU2VhcmNoLFxuICAgIH1cblxuICAgIGxldCBmaWx0ZXJzID0gY3VzdG9tRmlsdGVycy5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gPEZpbHRlciBrZXk9e2RhdGEudGl0bGV9IGlkPXtkYXRhLnRpdGxlfSB7Li4uZGF0YX0vPlxuICAgIH0pXG5cbiAgICBsZXQgcHJvZHVjdFRodW1ibmFpbHMsIHJlc3VsdEl0ZW1zLCBxdWVyeUl0ZW1zLCBtYW5hZ2VTYXZlZFNlYXJjaGVzLCBzYXZlZFNlYXJjaExpc3RCb3gsIHBvcHVsYXJTZWFyY2hMaXN0Qm94OyBcbiAgICBjb25zdCB7IHByb2R1Y3RzLCBmYXZvcml0ZWQsIHNhdmVkU2VhcmNoZXMsIGNvbnRlbnRzLCBzYXZlZEFuZEZhdnN9ID0gdGhpcy5wcm9wcy5zYW1wbGVEYXRhO1xuICAgIGlmKHByb2R1Y3RzKXtcbiAgICAgIHByb2R1Y3RUaHVtYm5haWxzID0gcHJvZHVjdHMubWFwKHByb2R1Y3QgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0LmlkfSBjbGFzc05hbWU9XCJwcm9kdWN0cy13cmFwcGVyXCI+XG4gICAgICAgICAgICA8UHJvZHVjdFRodW1ibmFpbCBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVUaHVtYm5haWxDbGlja30gey4uLnByb2R1Y3R9IC8+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5wcm9kdWN0cy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICAgICAgICAgICAgICAvL1hYIE9uZSBjYXIgZGlzcGxheSBoZXJlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgICAgICAucHJvZHVjdHMtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZihjb250ZW50cyl7XG4gICAgICByZXN1bHRJdGVtcyA9IGNvbnRlbnRzLm1hcChjb250ZW50ID0+IHtcblxuICAgICAgICAvLyBYWDogVG9waWMgdGFncyBnZXQgZ2VuZXJhdGVkIGhlcmUuIEhhcmRjb2RlZCB3aXRoIHNhbXBsZSBkYXRhLCBuZWVkIHRvIGNvbm5lY3QgdG8gR3JhcGhRTCBxdWVyeTtcbiAgICAgICAgbGV0IHRvcGljVGFncyA9IGNvbnRlbnQudG9waWNzLm1hcCh0b3BpYyA9PiB7XG4gICAgICAgICAgcmV0dXJuICggXG4gICAgICAgICAgICA8ZGl2IGtleT17dG9waWMuaWR9IGNsYXNzTmFtZT1cInRhZy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxUYWdTbWFsbCBrZXk9e3RvcGljLmlkfSB7Li4udG9waWN9IC8+XG5cbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC50YWctd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4IDAgMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtjb250ZW50LmlkfSBjbGFzc05hbWU9XCJjb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxSZXN1bHRJdGVtTGFyZ2Uga2V5PXtjb250ZW50LmlkfSBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVSZXN1bHRDbGlja30gey4uLmNvbnRlbnR9ID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLXdyYXBwZXIgbW9iaWxlLXZpZXdcIj5cbiAgICAgICAgICAgICAgICB7dG9waWNUYWdzfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVzdWx0SXRlbUxhcmdlPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy13cmFwcGVyIGRlc2t0b3Atdmlld1wiPlxuICAgICAgICAgICAgICB7dG9waWNUYWdzfVxuICAgICAgICAgICAgICB7LyogVGVtcG9yYXJ5IHVzZSBvZiB0aHJlZSBkb3RzIGljb24gKi99XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL2NoaXR0YWdvbmdpdC5jb20vaW1hZ2VzL3RocmVlLXZlcnRpY2FsLWRvdHMtaWNvbi90aHJlZS12ZXJ0aWNhbC1kb3RzLWljb24tMjAuanBnXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLmRlc2tcbiAgICAgICAgICAgICAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmNvbnRlbnQtd3JhcHBlcjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IC02cHggcmdiYSgwLDAsMCwwLjE1KTtcbiAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC50YWdzLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIFhYOiBUZW1wb3JhcnkgY29uZmlndXJhdGlvbiBmb3IgcGxhY2Vob2xkIGljb24gKGRvdCBkb3QgZG90KTtcbiAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHhcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIFxuICAgIC8vWFg6IE1vY2sgZGF0YSBmb3Igbm93LiBUT0RPOiBjaGFuZ2UgXCJjb2xsZWN0aW9uXCIgYXJyYXkgdG8gcXVlcnkgcmVzdWx0cyBvZiB1c2VyJ3MgU2F2ZWQgU2VhcmNoZXMuXG4gICAgaWYoc2F2ZWRBbmRGYXZzKSB7XG4gICAgICBsZXQgc2F2ZWRTZWFyY2hQcm9wcyA9IHtcbiAgICAgICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcbiAgICAgICAgdGl0bGU6ICdTYXZlZCBTZWFyY2hlcycsXG4gICAgICAgIGNvbGxlY3Rpb246IHNhdmVkQW5kRmF2c1xuICAgICAgfVxuICAgICAgc2F2ZWRTZWFyY2hMaXN0Qm94ID0gKFxuICAgICAgICA8TGlzdEJveCBrZXk9e3NhdmVkQW5kRmF2cy5pZH0gey4uLnNhdmVkU2VhcmNoUHJvcHN9Lz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy9YWDogTW9jayBkYXRhIGZvciBub3cuIFRPRE86IGNoYW5nZSBcImNvbGxlY3Rpb25cIiBhcnJheSB0byBxdWVyeSByZXN1bHRzIG9mIFBvcHVsYXIgU2VhcmNoZXMuXG4gICAgaWYoc2F2ZWRBbmRGYXZzKSB7XG4gICAgICBsZXQgcG9wdWxhclNlYXJjaFByb3BzID0ge1xuICAgICAgICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxuICAgICAgICB0aXRsZTogJ1Blb3BsZSBhbHNvIHNlYXJjaCBmb3IuLi4nLFxuICAgICAgICBjb2xsZWN0aW9uOiBzYXZlZEFuZEZhdnMsXG4gICAgICB9XG4gICAgICBwb3B1bGFyU2VhcmNoTGlzdEJveCA9IChcbiAgICAgICAgPExpc3RCb3gga2V5PXtzYXZlZEFuZEZhdnMuaWR9IHsuLi5wb3B1bGFyU2VhcmNoUHJvcHN9Lz5cbiAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8vIEN1c3RvbSBwYXRoIGZvciBicmVhZGNydW1icy4gXG4gICAgY29uc3QgcGF0aCA9IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6XCJTZWFyY2hcIixcbiAgICAgICAgcm91dGU6IFwiL2Rhc2hib2FyZFwiLFxuICAgICAgICBhcnJvdzogXCI+XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIFhYOiBIYXJkIGNvZGVkIGRhdGEgZm9yIG5vdy4gQ29ubmVjdCB3aXRoIHRvdGFsIHF1ZXJ5IHJlc3VsdCAjIFxuICAgICAgICAvLyBhbmQgd3JpdGUgbG9naWMgZm9yIHNpbmdsdWFyIHZzIHBsdXJhbCAocmVzdWx0ICYgcmVzdWx0cyk7XG4gICAgICAgIHRpdGxlOiBgMTcyIFJlc3VsdHNgLCBcbiAgICAgICAgcm91dGU6IHVuZGVmaW5lZCxcbiAgICAgICAgYXJyb3c6IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIF07XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL25vcm1hbGl6ZS83LjAuMC9ub3JtYWxpemUuY3NzXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8aDM+KFNFQVJDSCBSRVNVTFQgUEFHRSk8L2gzPlxuICAgICAgICA8QmFubmVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLWJyZWFkY3J1bWJzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxCcmVhZENydW1icyBwYXRocz17cGF0aH0vPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgICAgICA8U2VhcmNoU2Vjb25kYXJ5Lz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtdmlld1wiPjxDaGVja2JveCBpZD17ZmF2b3JpdGVzTW9iaWxlLmxhYmVsfSB7Li4uZmF2b3JpdGVzTW9iaWxlfS8+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVza3RvcC12aWV3XCI+PENoZWNrYm94IGlkPXtmYXZvcml0ZXNEZXNrdG9wLmxhYmVsfSB7Li4uZmF2b3JpdGVzRGVza3RvcH0vPjwvZGl2PlxuICAgICAgICAgICAgICB7ZmlsdGVyc31cbiAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9CYW5uZXI+XG5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+dGhpcy5oYW5kbGVUb2dnbGVGaWx0ZXIoKX0gY2xhc3NOYW1lPVwiZXhwYW5kLWZpbHRlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbHRlci1sYWJlbFwiPkZpbHRlcnM8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsdGVyLWljb24td3JhcHBlclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmaWx0ZXItaWNvblwiIHNyYz1cImh0dHBzOi8vY2RuNC5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL21lZGlhLXBsYXllci1pY29ucy84MC9NZWRpYV9wbGF5ZXJfaWNvbnMtMDQtNTEyLnBuZ1wiIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxQYWdlU2VjdGlvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtd3JhcHBlclwiPlxuICAgICAgICAgICAgey8qIFByb2R1Y3RzIFNlY3Rpb24gKi99XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1zZWN0aW9uLWhlYWRlclwiPlByb2R1Y3RzPC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVoaWNsZS10aHVtYm5haWxzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAge3Byb2R1Y3RUaHVtYm5haWxzfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBDb250ZW50IFNlY3Rpb24gKi99XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1zZWN0aW9uLWhlYWRlclwiPkNvbnRlbnQ8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50cy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LWl0ZW1zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICB7cmVzdWx0SXRlbXN9XG4gICAgICAgICAgICAgICAgPFBhZ2luYXRpb24vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWJveC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWJveFwiPntzYXZlZFNlYXJjaExpc3RCb3h9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWJveFwiPntwb3B1bGFyU2VhcmNoTGlzdEJveH08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgPC9QYWdlU2VjdGlvbj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmRlc2t0b3AtdmlldyB7XG4gICAgICAgICAgICAvLyBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9iaWxlLXZpZXcge1xuICAgICAgICAgICAgbWFyZ2luOiAzMnB4IDAgLTRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhZ2Utc2VjdGlvbi1oZWFkZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2IoMjMxLCAyMzEsIDIzMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYW5uZXItYnJlYWRjcnVtYnMtd3JhcHBlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbm5lci1jb250ZW50LXdyYXBwZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2VhcmNoLXJlc3VsdC13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC52ZWhpY2xlLXRodW1ibmFpbHMtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVzdWx0LWl0ZW1zLXdyYXBwZXIgeyAvL1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAgICAgIGZsZXg6IDEgMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpc3QtYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgZmxleDogMSAzMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0LWJveCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAzMnB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5leHBhbmQtZmlsdGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5zdGF0ZS5maWx0ZXJUb2dnbGUgPyBcIm5vbmVcIiA6IFwiZmxleFwifTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNDQgOTEgMTQyKTtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGZvbnQ6IDcwMCAxZW0gc3lzdGVtLXVpO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmlsdGVyLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgICAgICAgICAgZmxleDogMSA3MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5maWx0ZXItaWNvbi13cmFwcGVyIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMzAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogZ3JleSAxcHggc29saWQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5maWx0ZXItaWNvbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpbHRlci13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5zdGF0ZS5maWx0ZXJUb2dnbGUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgIC5kZXNrdG9wLXZpZXcge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vYmlsZS12aWV3IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5leHBhbmQtZmlsdGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWx0ZXItd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWx0ZXItd3JhcHBlciA+ICoge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWdlLXNlY3Rpb24taGVhZGVyIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCA2cHggLTZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDZweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDZweCAtNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFubmVyLWNvbnRlbnQtd3JhcHBlcntcbiAgICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnRzLXdyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmVzdWx0LWl0ZW1zLXdyYXBwZXIge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMzJweCAxNnB4IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIHNhbXBsZURhdGE6IHN0YXRlLnNhbXBsZURhdGFcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2VhcmNoUmVzdWx0cykpOyJdfQ== */\n/*@ sourceURL=pages/search-results.js */',
          dynamic: [this.state.filterToggle ? "none" : "flex", this.state.filterToggle ? "block" : "none"]
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
//# sourceMappingURL=5.2025f1617213dce7ba21.hot-update.js.map