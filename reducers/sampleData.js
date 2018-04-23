import * as types from '../actions/actionType';

const initialState = {
  //Vehicles: from PRODUCT schema
  products: [ //Field: nodes
    {
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
      "contentByCoverImageId": "", //Content
      //Temporary manual injection of image URL:
      "coverImageId": "https://www.hyundaiusa.com/redesign-upgrade/images/navigation/vehicles/2018/2018-kona-ult-lime-twist.png"
    },
    {
      "id": "4",
      "modelName": "Kona",
      "modelYear": 2017,
      "heroTitle": "Hero Title",
      "heroBody": "Hero Body",
      "coverImageId": "https://www.hyundaiusa.com/redesign-upgrade/images/navigation/vehicles/2018/2018-santa-fe-sport.png"
    },
    {
      "id": "5",
      "modelName": "Tucson",
      "modelYear": 2018,
      "heroTitle": "Hero Title",
      "heroBody": "Hero Body",
      "coverImageId": "https://www.hyundaiusa.com/redesign-upgrade/images/navigation/vehicles/2018/2018-tucson.png"
    }
  ],
  //FAVORITED: from FAVORITED schema
  favorited: [
    {
      "id": "1",
      "title": "2018 Elantra Competetive Advantages by Competitor",
      "subtitle": "",
      "contentType": "Document",
      "url": "http://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Adobe-PDF-Document-icon.png",
      "updatedAt": "July 28, 2017"
    },
    {
      "id": "2",
      "title": "2018 Kona Competetive Advantages by Competitor",
      "subtitle": "",
      "contentType": "Document",
      "url": "http://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Adobe-PDF-Document-icon.png",
      "updatedAt": "July 28, 2017"
    }
  ],
  // Saved Searches: from EXECUTED SEARCH schema
  savedSearches: [
    {
      "id": "1", //Int
      "accountID": "1", //Int
      "query": "Elantra sales materials", //String
      "isSaved": true, //Boolean
      "isFavorited": false, //Boolean
      "createdAt": "July 28, 2017", //Datetime
      "accountByAccountId": "1" //Account
    },
    {
      "id": "2",
      "accountID": "2",
      "query": "2017 elantra gt sport",
      "isSaved": false,
      "isFavorited": false,
      "createdAt": "July 28, 2017",
      "accountByAccountId": "2" 
    },
    {
      "id": "3",
      "accountID": "3",
      "query": "2018 Elantra GT",
      "isSaved": true,
      "isFavorited": false,
      "createdAt": "July 28, 2017",
      "accountByAccountId": "3" 
    }
  ],
  //Search Result Contents
  contents: [
    {
      "id": "1",
      "title": "2018 Elantra Competetive Advantages by Competitor",
      "subtitle": "",
      "contentType": "Document",
      "url": "http://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Adobe-PDF-Document-icon.png",
      "updatedAt": "July 28, 2017",
      // Temporary use of Favorite
      "isFavorited": true,
      "topics": [
        { 
          id: "Lorem Ipsum",
          content: "Lorem Ipsum"
        },
        {
          id: "Dolor",
          content: "Dolor"
        },
        {
          id: "Sit Ame",
          content: "Sit Ame"
        }
      ]
    },
    {
      "id": "2",
      "title": "2018 Kona Competetive Advantages by Competitor",
      "subtitle": "",
      "contentType": "Document",
      "url": "http://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Adobe-PDF-Document-icon.png",
      "updatedAt": "July 28, 2017",
      // Temporary use of Favorite
      "isFavorited": false,
      "topics": [
        {
          id: "Dolor",
          content: "Dolor"
        }
      ]
    }
  ],
  savedAndFavs: [
    {
      "id": "1",
      "title": "2018 Elantra Competetive Advantages by Competitor",
      "url": "http://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Adobe-PDF-Document-icon.png",
    },
    {
      "id": "2",
      "title": "2018 Kona Competetive Advantages by Competitor",
      "url": "http://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Adobe-PDF-Document-icon.png",
    }
  ],
};

const sampleDataReducer = (state = initialState, action) => {
  switch(action.type) {
    // case :
    //   return 
    default: break;
  }
  return state;
};

export default sampleDataReducer;