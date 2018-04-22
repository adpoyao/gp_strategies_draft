webpackHotUpdate(4,{

/***/ "./components/SearchDropdown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ProductThumbnail__ = __webpack_require__("./components/ProductThumbnail.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ResultItemSmall__ = __webpack_require__("./components/ResultItemSmall.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__QueryListItem__ = __webpack_require__("./components/QueryListItem.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/eddieyao/Desktop/gp_draft/components/SearchDropdown.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var SearchDropdown = function (_Component) {
  _inherits(SearchDropdown, _Component);

  function SearchDropdown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchDropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchDropdown.__proto__ || Object.getPrototypeOf(SearchDropdown)).call.apply(_ref, [this].concat(args))), _this), _this.handleThumbnailClick = function (modelName) {
      return console.log('Vehicle Thumbnail: ' + modelName + ' clicked.');
    }, _this.handleFavoritedClick = function (favorited) {
      console.log('Favorited: ' + favorited + ' clicked.');
    }, _this.handleQueryClick = function (query) {
      console.log('Query type: ' + query + ' clicked.');
    }, _this.handleManageSavedSearchesClick = function () {
      console.log('Manage Saved Searches clicked.');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchDropdown, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // Style JSX Variables:
      var speechBubble = !this.props.savedSearch ? "left:72px" : "right:72px";
      var sectionDisplay = !this.props.savedSearch ? "flex" : "none";

      var productThumbnails = void 0,
          resultItems = void 0,
          queryItems = void 0,
          manageSavedSearches = void 0;
      //XX: Using sample data. Use query results once connected to db ~
      var _props$sampleData = this.props.sampleData,
          products = _props$sampleData.products,
          favorited = _props$sampleData.favorited,
          savedSearches = _props$sampleData.savedSearches;

      //XX: Using sample data here... Revise once connected to db ~

      if (products && !this.props.savedSearch) {
        productThumbnails = products.map(function (product) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { key: product.id, className: 'jsx-3512618116' + ' ' + 'products-wrapper',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ProductThumbnail__["a" /* default */], _extends({ key: product.id, handleClick: _this2.handleThumbnailClick }, product, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            })),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
              styleId: '3512618116',
              css: '.products-wrapper.jsx-3512618116{width:190px;font-size:1.063em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoRHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEN3QixBQUc2QixZQUNNLGtCQUNwQiIsImZpbGUiOiJjb21wb25lbnRzL1NlYXJjaERyb3Bkb3duLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9lZGRpZXlhby9EZXNrdG9wL2dwX2RyYWZ0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCBQcm9kdWN0VGh1bWJuYWlsIGZyb20gJy4vUHJvZHVjdFRodW1ibmFpbCc7XG5pbXBvcnQgUmVzdWx0SXRlbVNtYWxsIGZyb20gJy4vUmVzdWx0SXRlbVNtYWxsJztcbmltcG9ydCBRdWVyeUxpc3RJdGVtIGZyb20gJy4vUXVlcnlMaXN0SXRlbSc7XG5cbmNsYXNzIFNlYXJjaERyb3Bkb3duIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgXG4gIGhhbmRsZVRodW1ibmFpbENsaWNrID0gKG1vZGVsTmFtZSkgPT4gKFxuICAgIGNvbnNvbGUubG9nKGBWZWhpY2xlIFRodW1ibmFpbDogJHttb2RlbE5hbWV9IGNsaWNrZWQuYClcbiAgKTtcblxuICBoYW5kbGVGYXZvcml0ZWRDbGljayA9IChmYXZvcml0ZWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgRmF2b3JpdGVkOiAke2Zhdm9yaXRlZH0gY2xpY2tlZC5gKVxuICB9O1xuICBcbiAgaGFuZGxlUXVlcnlDbGljayA9IChxdWVyeSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBRdWVyeSB0eXBlOiAke3F1ZXJ5fSBjbGlja2VkLmApXG4gIH07XG5cbiAgaGFuZGxlTWFuYWdlU2F2ZWRTZWFyY2hlc0NsaWNrID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBNYW5hZ2UgU2F2ZWQgU2VhcmNoZXMgY2xpY2tlZC5gKVxuICB9O1xuICBcbiAgcmVuZGVyKCkge1xuICAgIC8vIFN0eWxlIEpTWCBWYXJpYWJsZXM6XG4gICAgbGV0IHNwZWVjaEJ1YmJsZSA9ICF0aGlzLnByb3BzLnNhdmVkU2VhcmNoID8gXCJsZWZ0OjcycHhcIiA6IFwicmlnaHQ6NzJweFwiO1xuICAgIGxldCBzZWN0aW9uRGlzcGxheSA9ICF0aGlzLnByb3BzLnNhdmVkU2VhcmNoID8gXCJmbGV4XCIgOiBcIm5vbmVcIlxuICAgIFxuICAgIGxldCBwcm9kdWN0VGh1bWJuYWlscywgcmVzdWx0SXRlbXMsIHF1ZXJ5SXRlbXMsIG1hbmFnZVNhdmVkU2VhcmNoZXM7IFxuICAgIC8vWFg6IFVzaW5nIHNhbXBsZSBkYXRhLiBVc2UgcXVlcnkgcmVzdWx0cyBvbmNlIGNvbm5lY3RlZCB0byBkYiB+XG4gICAgY29uc3QgeyBwcm9kdWN0cywgZmF2b3JpdGVkLCBzYXZlZFNlYXJjaGVzfSA9IHRoaXMucHJvcHMuc2FtcGxlRGF0YTtcblxuICAgIC8vWFg6IFVzaW5nIHNhbXBsZSBkYXRhIGhlcmUuLi4gUmV2aXNlIG9uY2UgY29ubmVjdGVkIHRvIGRiIH5cbiAgICBpZihwcm9kdWN0cyAmJiAhdGhpcy5wcm9wcy5zYXZlZFNlYXJjaCl7XG4gICAgICBwcm9kdWN0VGh1bWJuYWlscyA9IHByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17cHJvZHVjdC5pZH0gY2xhc3NOYW1lPVwicHJvZHVjdHMtd3JhcHBlclwiPlxuICAgICAgICAgICAgPFByb2R1Y3RUaHVtYm5haWwga2V5PXtwcm9kdWN0LmlkfSBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVUaHVtYm5haWxDbGlja30gey4uLnByb2R1Y3R9IC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLnByb2R1Y3RzLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxOTBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMDYzZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vWFg6IFVzaW5nIHNhbXBsZSBkYXRhIGhlcmUuLi4gUmV2aXNlIG9uY2UgY29ubmVjdGVkIHRvIGRiIH5cbiAgICBpZihmYXZvcml0ZWQgJiYgIXRoaXMucHJvcHMuc2F2ZWRTZWFyY2gpe1xuICAgICAgcmVzdWx0SXRlbXMgPSBmYXZvcml0ZWQubWFwKGZhdmVkQ29udGVudCA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlc3VsdEl0ZW1TbWFsbCBrZXk9e2ZhdmVkQ29udGVudC5pZH0gaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlRmF2b3JpdGVkQ2xpY2t9IHsuLi5mYXZlZENvbnRlbnR9IC8+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIFxuICAgIC8vWFg6IFVzaW5nIHNhbXBsZSBkYXRhIGhlcmUuLi4gUmV2aXNlIG9uY2UgY29ubmVjdGVkIHRvIGRiIH5cbiAgICBpZihzYXZlZFNlYXJjaGVzKSB7XG4gICAgICBxdWVyeUl0ZW1zID0gc2F2ZWRTZWFyY2hlcy5tYXAocXVlcnkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxRdWVyeUxpc3RJdGVtIGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZVF1ZXJ5Q2xpY2t9IGtleT17cXVlcnkuaWR9IHsuLi5xdWVyeX0gLz5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmKHRoaXMucHJvcHMuc2F2ZWRTZWFyY2gpe1xuICAgICAgbWFuYWdlU2F2ZWRTZWFyY2hlcyA9IChcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YSBvbkNsaWNrPXsoKT0+dGhpcy5oYW5kbGVNYW5hZ2VTYXZlZFNlYXJjaGVzQ2xpY2soKX0+TWFuYWdlIFNhdmVkIFNlYXJjaGVzPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVoaWNsZS10aHVtYm5haWxzLXdyYXBwZXJcIj5cbiAgICAgICAgICB7cHJvZHVjdFRodW1ibmFpbHN9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LWl0ZW0td3JhcHBlclwiPlxuICAgICAgICAgIHtyZXN1bHRJdGVtc31cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVyeS1pdGVtLXdyYXBwZXJcIj5cbiAgICAgICAgICB7cXVlcnlJdGVtc31cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYW5hZ2Utc2F2ZWQtc2VhcmNoXCI+e21hbmFnZVNhdmVkU2VhcmNoZXN9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTBweCAzMXB4IC05cHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDEwcHggMzFweCAtOXB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAzMXB4IC05cHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWluZXI6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAke3NwZWVjaEJ1YmJsZX07XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIGJvcmRlcjogMWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTFlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFhYOiBPbmNlIHdlIGdldCBhY3R1YWwgdGh1bWJuYWlscywgY29uc29saWRhdGUgdGhlIDMgY2hpbGRyZW4gd3JhcHBlcnMnIENTU1xuICAgICAgICAgIC52ZWhpY2xlLXRodW1ibmFpbHMtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiAke3NlY3Rpb25EaXNwbGF5fTtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYigyMzEsIDIzMSwgMjMxKTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAyNHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZXN1bHQtaXRlbS13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICR7c2VjdGlvbkRpc3BsYXl9O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiKDIzMSwgMjMxLCAyMzEpO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDI0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyNHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tYW5hZ2Utc2F2ZWQtc2VhcmNoIHtcbiAgICAgICAgICAgIGZvbnQ6IDQwMCAwLjg3NWVtIHN5c3RlbS11aTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMzJweCAxNnB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYig2NCAxMDIgMTQ5KTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucXVlcnktaXRlbS13cmFwcGVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiKDIzMSwgMjMxLCAyMzEpO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDI0cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnF1ZXJ5LWl0ZW0td3JhcHBlciA+IGRpdjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyIGRpdjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZXN1bHQtaXRlbS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tYW5hZ2Utc2F2ZWQtc2VhcmNoIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjkzOGVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBzYXZlZFNlYXJjaDogc3RhdGUuc2VhcmNoLnNhdmVkU2VhcmNoVG9nZ2xlLFxuICBzYW1wbGVEYXRhOiBzdGF0ZS5zYW1wbGVEYXRhXG59KVxuXG4vLyBObyBSZWFjdCBQcm9wVHlwZXMuIEFsbCBpbmZvcm1hdGlvbiBhcmUgYmFzZWQgb2ZmIG9mIHJlZHV4IHN0b3JlLlxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2VhcmNoRHJvcGRvd24pOyJdfQ== */\n/*@ sourceURL=components/SearchDropdown.js */'
            })
          );
        });
      };

      //XX: Using sample data here... Revise once connected to db ~
      if (favorited && !this.props.savedSearch) {
        resultItems = favorited.map(function (favedContent) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ResultItemSmall__["a" /* default */], _extends({ key: favedContent.id, handleClick: _this2.handleFavoritedClick }, favedContent, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          }));
        });
      };

      //XX: Using sample data here... Revise once connected to db ~
      if (savedSearches) {
        queryItems = savedSearches.map(function (query) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__QueryListItem__["a" /* default */], _extends({ handleClick: _this2.handleQueryClick, key: query.id }, query, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          }));
        });
      }

      if (this.props.savedSearch) {
        manageSavedSearches = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_next_link___default.a,
          { href: '/', __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'a',
            { onClick: function onClick() {
                return _this2.handleManageSavedSearchesClick();
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 76
              }
            },
            'Manage Saved Searches'
          )
        );
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['43500743', [speechBubble, sectionDisplay, sectionDisplay]]]) + ' ' + 'container',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['43500743', [speechBubble, sectionDisplay, sectionDisplay]]]) + ' ' + 'vehicle-thumbnails-wrapper',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            }
          },
          productThumbnails
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['43500743', [speechBubble, sectionDisplay, sectionDisplay]]]) + ' ' + 'result-item-wrapper',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            }
          },
          resultItems
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['43500743', [speechBubble, sectionDisplay, sectionDisplay]]]) + ' ' + 'query-item-wrapper',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            }
          },
          queryItems,
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'span',
            {
              className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['43500743', [speechBubble, sectionDisplay, sectionDisplay]]]) + ' ' + 'manage-saved-search',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              }
            },
            manageSavedSearches
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '43500743',
          css: '.container.__jsx-style-dynamic-selector{max-width:600px;margin-top:24px;background:white;border-radius:4px;position:relative;-webkit-box-shadow:0px 10px 31px -9px rgba(0,0,0,0.75);-moz-box-shadow:0px 10px 31px -9px rgba(0,0,0,0.75);box-shadow:0px 10px 31px -9px rgba(0,0,0,0.75);padding-top:10px;}.container.__jsx-style-dynamic-selector:after{content:\'\';position:absolute;top:0;' + speechBubble + ';width:0;height:0;border:1em solid transparent;border-bottom-color:#ffffff;border-top:0;margin-left:-1em;margin-top:-1em;}.vehicle-thumbnails-wrapper.__jsx-style-dynamic-selector{display:' + sectionDisplay + ';-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;overflow:scroll;border-bottom:2px dashed rgb(231,231,231);margin:0 24px;padding-bottom:40px;}.result-item-wrapper.__jsx-style-dynamic-selector{display:' + sectionDisplay + ';-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;border-bottom:2px dashed rgb(231,231,231);margin:0 24px;padding:24px 0;}.manage-saved-search.__jsx-style-dynamic-selector{font:400 0.875em system-ui;display:inline-block;margin:32px 16px;color:rgb(64 102 149);-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}.query-item-wrapper.__jsx-style-dynamic-selector{border-bottom:2px dashed rgb(231,231,231);margin:0 24px;padding-top:10px;}.query-item-wrapper.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:not(:first-child){display:none;}.container.__jsx-style-dynamic-selector div.__jsx-style-dynamic-selector:last-child{border:none;}@media all and (min-width:376px){.container.__jsx-style-dynamic-selector{padding-bottom:16px;}.result-item-wrapper.__jsx-style-dynamic-selector{margin-bottom:10px;}.manage-saved-search.__jsx-style-dynamic-selector{font-size:0.938em;margin:16px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoRHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0ZvQixBQUc2QixBQVdMLEFBYzBCLEFBUUEsQUFPVixBQVFpQixBQUsvQixBQUdELEFBSVUsQUFHRCxBQUdELFdBdERGLENBNkNwQixDQUhBLEdBckRrQixFQWtFRixDQUhkLENBSEEsT0FwQnFCLEVBNUJmLENBdUROLEVBbEVpQixHQVlXLEVBWVAsQUFRQyxLQWVSLE1BUEcsQ0F2Q0MsT0ErQ0QsUUFuQ1QsQ0E0QmMsRUF2Q0osS0FZVCxDQW1DWCxRQWxDK0IsSUFaMEIsRUF1QzdCLHVCQTFCRSxFQVNaLEdBUTRCLGFBUEEsVUFUL0IsRUFidUMsT0F1Q3JDLElBekJFLE1BZ0JILEtBVWhCLE1BekJrQixFQVFGLENBUUMsYUFmakIsQUFRc0IsRUFRdEIsTUEvQmlELFlBd0JqRCxtQ0F0QkQsaUJBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9TZWFyY2hEcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWRkaWV5YW8vRGVza3RvcC9ncF9kcmFmdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgUHJvZHVjdFRodW1ibmFpbCBmcm9tICcuL1Byb2R1Y3RUaHVtYm5haWwnO1xuaW1wb3J0IFJlc3VsdEl0ZW1TbWFsbCBmcm9tICcuL1Jlc3VsdEl0ZW1TbWFsbCc7XG5pbXBvcnQgUXVlcnlMaXN0SXRlbSBmcm9tICcuL1F1ZXJ5TGlzdEl0ZW0nO1xuXG5jbGFzcyBTZWFyY2hEcm9wZG93biBleHRlbmRzIENvbXBvbmVudCB7XG4gIFxuICBoYW5kbGVUaHVtYm5haWxDbGljayA9IChtb2RlbE5hbWUpID0+IChcbiAgICBjb25zb2xlLmxvZyhgVmVoaWNsZSBUaHVtYm5haWw6ICR7bW9kZWxOYW1lfSBjbGlja2VkLmApXG4gICk7XG5cbiAgaGFuZGxlRmF2b3JpdGVkQ2xpY2sgPSAoZmF2b3JpdGVkKSA9PiB7XG4gICAgY29uc29sZS5sb2coYEZhdm9yaXRlZDogJHtmYXZvcml0ZWR9IGNsaWNrZWQuYClcbiAgfTtcbiAgXG4gIGhhbmRsZVF1ZXJ5Q2xpY2sgPSAocXVlcnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgUXVlcnkgdHlwZTogJHtxdWVyeX0gY2xpY2tlZC5gKVxuICB9O1xuXG4gIGhhbmRsZU1hbmFnZVNhdmVkU2VhcmNoZXNDbGljayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgTWFuYWdlIFNhdmVkIFNlYXJjaGVzIGNsaWNrZWQuYClcbiAgfTtcbiAgXG4gIHJlbmRlcigpIHtcbiAgICAvLyBTdHlsZSBKU1ggVmFyaWFibGVzOlxuICAgIGxldCBzcGVlY2hCdWJibGUgPSAhdGhpcy5wcm9wcy5zYXZlZFNlYXJjaCA/IFwibGVmdDo3MnB4XCIgOiBcInJpZ2h0OjcycHhcIjtcbiAgICBsZXQgc2VjdGlvbkRpc3BsYXkgPSAhdGhpcy5wcm9wcy5zYXZlZFNlYXJjaCA/IFwiZmxleFwiIDogXCJub25lXCJcbiAgICBcbiAgICBsZXQgcHJvZHVjdFRodW1ibmFpbHMsIHJlc3VsdEl0ZW1zLCBxdWVyeUl0ZW1zLCBtYW5hZ2VTYXZlZFNlYXJjaGVzOyBcbiAgICAvL1hYOiBVc2luZyBzYW1wbGUgZGF0YS4gVXNlIHF1ZXJ5IHJlc3VsdHMgb25jZSBjb25uZWN0ZWQgdG8gZGIgflxuICAgIGNvbnN0IHsgcHJvZHVjdHMsIGZhdm9yaXRlZCwgc2F2ZWRTZWFyY2hlc30gPSB0aGlzLnByb3BzLnNhbXBsZURhdGE7XG5cbiAgICAvL1hYOiBVc2luZyBzYW1wbGUgZGF0YSBoZXJlLi4uIFJldmlzZSBvbmNlIGNvbm5lY3RlZCB0byBkYiB+XG4gICAgaWYocHJvZHVjdHMgJiYgIXRoaXMucHJvcHMuc2F2ZWRTZWFyY2gpe1xuICAgICAgcHJvZHVjdFRodW1ibmFpbHMgPSBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT1cInByb2R1Y3RzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxQcm9kdWN0VGh1bWJuYWlsIGtleT17cHJvZHVjdC5pZH0gaGFuZGxlQ2xpY2s9e3RoaXMuaGFuZGxlVGh1bWJuYWlsQ2xpY2t9IHsuLi5wcm9kdWN0fSAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5wcm9kdWN0cy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTkwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjA2M2VtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvL1hYOiBVc2luZyBzYW1wbGUgZGF0YSBoZXJlLi4uIFJldmlzZSBvbmNlIGNvbm5lY3RlZCB0byBkYiB+XG4gICAgaWYoZmF2b3JpdGVkICYmICF0aGlzLnByb3BzLnNhdmVkU2VhcmNoKXtcbiAgICAgIHJlc3VsdEl0ZW1zID0gZmF2b3JpdGVkLm1hcChmYXZlZENvbnRlbnQgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxSZXN1bHRJdGVtU21hbGwga2V5PXtmYXZlZENvbnRlbnQuaWR9IGhhbmRsZUNsaWNrPXt0aGlzLmhhbmRsZUZhdm9yaXRlZENsaWNrfSB7Li4uZmF2ZWRDb250ZW50fSAvPlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBcbiAgICAvL1hYOiBVc2luZyBzYW1wbGUgZGF0YSBoZXJlLi4uIFJldmlzZSBvbmNlIGNvbm5lY3RlZCB0byBkYiB+XG4gICAgaWYoc2F2ZWRTZWFyY2hlcykge1xuICAgICAgcXVlcnlJdGVtcyA9IHNhdmVkU2VhcmNoZXMubWFwKHF1ZXJ5ID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UXVlcnlMaXN0SXRlbSBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVRdWVyeUNsaWNrfSBrZXk9e3F1ZXJ5LmlkfSB7Li4ucXVlcnl9IC8+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZih0aGlzLnByb3BzLnNhdmVkU2VhcmNoKXtcbiAgICAgIG1hbmFnZVNhdmVkU2VhcmNoZXMgPSAoXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGEgb25DbGljaz17KCk9PnRoaXMuaGFuZGxlTWFuYWdlU2F2ZWRTZWFyY2hlc0NsaWNrKCl9Pk1hbmFnZSBTYXZlZCBTZWFyY2hlczwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlaGljbGUtdGh1bWJuYWlscy13cmFwcGVyXCI+XG4gICAgICAgICAge3Byb2R1Y3RUaHVtYm5haWxzfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdC1pdGVtLXdyYXBwZXJcIj5cbiAgICAgICAgICB7cmVzdWx0SXRlbXN9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVlcnktaXRlbS13cmFwcGVyXCI+XG4gICAgICAgICAge3F1ZXJ5SXRlbXN9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWFuYWdlLXNhdmVkLXNlYXJjaFwiPnttYW5hZ2VTYXZlZFNlYXJjaGVzfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggMzFweCAtOXB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxMHB4IDMxcHggLTlweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMzFweCAtOXB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweFxuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgJHtzcGVlY2hCdWJibGV9O1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgICBib3JkZXI6IDFlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBYWDogT25jZSB3ZSBnZXQgYWN0dWFsIHRodW1ibmFpbHMsIGNvbnNvbGlkYXRlIHRoZSAzIGNoaWxkcmVuIHdyYXBwZXJzJyBDU1NcbiAgICAgICAgICAudmVoaWNsZS10aHVtYm5haWxzLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogJHtzZWN0aW9uRGlzcGxheX07XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2IoMjMxLCAyMzEsIDIzMSk7XG4gICAgICAgICAgICBtYXJnaW46IDAgMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVzdWx0LWl0ZW0td3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiAke3NlY3Rpb25EaXNwbGF5fTtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYigyMzEsIDIzMSwgMjMxKTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAyNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMjRweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWFuYWdlLXNhdmVkLXNlYXJjaCB7XG4gICAgICAgICAgICBmb250OiA0MDAgMC44NzVlbSBzeXN0ZW0tdWk7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDMycHggMTZweDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNjQgMTAyIDE0OSk7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnF1ZXJ5LWl0ZW0td3JhcHBlciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYigyMzEsIDIzMSwgMjMxKTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAyNHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5xdWVyeS1pdGVtLXdyYXBwZXIgPiBkaXY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lciBkaXY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDM3NnB4KSB7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmVzdWx0LWl0ZW0td3JhcHBlciB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWFuYWdlLXNhdmVkLXNlYXJjaCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45MzhlbTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgc2F2ZWRTZWFyY2g6IHN0YXRlLnNlYXJjaC5zYXZlZFNlYXJjaFRvZ2dsZSxcbiAgc2FtcGxlRGF0YTogc3RhdGUuc2FtcGxlRGF0YVxufSlcblxuLy8gTm8gUmVhY3QgUHJvcFR5cGVzLiBBbGwgaW5mb3JtYXRpb24gYXJlIGJhc2VkIG9mZiBvZiByZWR1eCBzdG9yZS5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNlYXJjaERyb3Bkb3duKTsiXX0= */\n/*@ sourceURL=components/SearchDropdown.js */',
          dynamic: [speechBubble, sectionDisplay, sectionDisplay]
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return SearchDropdown;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    savedSearch: state.search.savedSearchToggle,
    sampleData: state.sampleData
  };
};

// No React PropTypes. All information are based off of redux store.

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps)(SearchDropdown);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SearchDropdown, 'SearchDropdown', '/Users/eddieyao/Desktop/gp_draft/components/SearchDropdown.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/eddieyao/Desktop/gp_draft/components/SearchDropdown.js');
  reactHotLoader.register(_default, 'default', '/Users/eddieyao/Desktop/gp_draft/components/SearchDropdown.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.a37a8b5f118a2dcb7936.hot-update.js.map