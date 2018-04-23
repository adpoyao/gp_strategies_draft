webpackHotUpdate(4,{

/***/ "./reducers/sampleData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  //Vehicles: from PRODUCT schema
  products: [//Field: nodes
  _defineProperty({
    "id": "3", //Int
    "modelName": "Kona", //String
    "modelYear": 2018, //Int
    "heroTitle": "Kona Hero Title", //String
    "heroBody": "Kona Hero Body", //String
    "highlightsTitle": "", //String
    "highlightsBody": "", //String
    "comparisonTitle": "", //String
    "compariosonBody": "", //String
    "comparisonDocumentId": "", //Int
    "coverImageId": "", //Int
    "contentByComparisonDocumentId": "", //Content
    "contentByCoverImageId": "" }, "coverImageId", "https://www.hyundaiusa.com/redesign-upgrade/images/navigation/vehicles/2018/2018-kona-ult-lime-twist.png"), {
    "id": "4",
    "modelName": "Kona",
    "modelYear": 2017,
    "heroTitle": "Hero Title",
    "heroBody": "Hero Body",
    "coverImageId": "https://www.hyundaiusa.com/redesign-upgrade/images/navigation/vehicles/2018/2018-santa-fe-sport.png"
  }, {
    "id": "5",
    "modelName": "Tucson",
    "modelYear": 2018,
    "heroTitle": "Hero Title",
    "heroBody": "Hero Body",
    "coverImageId": "https://www.hyundaiusa.com/redesign-upgrade/images/navigation/vehicles/2018/2018-tucson.png"
  }],
  //FAVORITED: from FAVORITED schema
  favorited: [{
    "id": "1",
    "title": "2018 Elantra Competetive Advantages by Competitor",
    "subtitle": "",
    "contentType": "Document",
    "url": "http://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Adobe-PDF-Document-icon.png",
    "updatedAt": "July 28, 2017"
  }, {
    "id": "2",
    "title": "2018 Kona Competetive Advantages by Competitor",
    "subtitle": "",
    "contentType": "Document",
    "url": "http://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Adobe-PDF-Document-icon.png",
    "updatedAt": "July 28, 2017"
  }],
  // Saved Searches: from EXECUTED SEARCH schema
  savedSearches: [{
    "id": "1", //Int
    "accountID": "1", //Int
    "query": "Elantra sales materials", //String
    "isSaved": true, //Boolean
    "isFavorited": false, //Boolean
    "createdAt": "July 28, 2017", //Datetime
    "accountByAccountId": "1" //Account
  }, {
    "id": "2",
    "accountID": "2",
    "query": "2017 elantra gt sport",
    "isSaved": false,
    "isFavorited": false,
    "createdAt": "July 28, 2017",
    "accountByAccountId": "2"
  }, {
    "id": "3",
    "accountID": "3",
    "query": "2018 Elantra GT",
    "isSaved": true,
    "isFavorited": false,
    "createdAt": "July 28, 2017",
    "accountByAccountId": "3"
  }],
  //Search Result Contents
  contents: [{
    "id": "1",
    "title": "2018 Elantra Competetive Advantages by Competitor",
    "subtitle": "",
    "contentType": "Document",
    "url": "http://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Adobe-PDF-Document-icon.png",
    "updatedAt": "July 28, 2017",
    "topics": [{
      id: "Lorem Ipsum",
      content: "Lorem Ipsum"
    }, {
      id: "Dolor",
      content: "Dolor"
    }, {
      id: "Sit Ame",
      content: "Sit Ame"
    }]
  }, {
    "id": "2",
    "title": "2018 Kona Competetive Advantages by Competitor",
    "subtitle": "",
    "contentType": "Document",
    "url": "http://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Adobe-PDF-Document-icon.png",
    "updatedAt": "July 28, 2017",
    "topics": [{ content: "Dolor" }]
  }],
  savedAndFavs: [{
    "id": "1",
    "title": "2018 Elantra Competetive Advantages by Competitor",
    "url": "http://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Adobe-PDF-Document-icon.png"
  }, {
    "id": "2",
    "title": "2018 Kona Competetive Advantages by Competitor",
    "url": "http://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Adobe-PDF-Document-icon.png"
  }]
};

var sampleDataReducer = function sampleDataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    // case :
    //   return 
    default:
      break;
  }
  return state;
};

var _default = sampleDataReducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/Users/eddieyao/Desktop/gp_draft/reducers/sampleData.js");
  reactHotLoader.register(sampleDataReducer, "sampleDataReducer", "/Users/eddieyao/Desktop/gp_draft/reducers/sampleData.js");
  reactHotLoader.register(_default, "default", "/Users/eddieyao/Desktop/gp_draft/reducers/sampleData.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.3ab333cf564761cfbfd8.hot-update.js.map