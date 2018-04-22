import React, { Component} from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

import ProductThumbnail from './ProductThumbnail';
import ResultItemSmall from './ResultItemSmall';
import QueryListItem from './QueryListItem';

class SearchDropdown extends Component {
  
  handleThumbnailClick = (modelName) => (
    console.log(`Vehicle Thumbnail: ${modelName} clicked.`)
  );

  handleFavoritedClick = (favorited) => {
    console.log(`Favorited: ${favorited} clicked.`)
  };
  
  handleQueryClick = (query) => {
    console.log(`Query type: ${query} clicked.`)
  };

  handleManageSavedSearchesClick = () => {
    console.log(`Manage Saved Searches clicked.`)
  };
  
  render() {
    // Style JSX Variables:
    let speechBubble = !this.props.savedSearch ? "left:72px" : "right:72px";
    let sectionDisplay = !this.props.savedSearch ? "flex" : "none"
    
    let productThumbnails, resultItems, queryItems, manageSavedSearches; 
    //XX: Using sample data. Use query results once connected to db ~
    const { products, favorited, savedSearches} = this.props.sampleData;

    //XX: Using sample data here... Revise once connected to db ~
    if(products && !this.props.savedSearch){
      productThumbnails = products.map(product => {
        return (
          <div key={product.id} className="products-wrapper">
            <ProductThumbnail key={product.id} handleClick={this.handleThumbnailClick} {...product} />
            
            <style jsx>{`
              .products-wrapper {
                width: 190px;
                font-size: 1.063em;
              }
            `}
            </style>
          </div>
        );
      });
    };

    //XX: Using sample data here... Revise once connected to db ~
    if(favorited && !this.props.savedSearch){
      resultItems = favorited.map(favedContent => {
        return (
          <ResultItemSmall key={favedContent.id} handleClick={this.handleFavoritedClick} {...favedContent} />
        );
      });
    };
    
    //XX: Using sample data here... Revise once connected to db ~
    if(savedSearches) {
      queryItems = savedSearches.map(query => {
        return (
          <QueryListItem handleClick={this.handleQueryClick} key={query.id} {...query} />
        );
      });
    }

    if(this.props.savedSearch){
      manageSavedSearches = (
          // XX: Temporarily console logging for now. Will need to redirect via Link (and fire off action) in future ~
          <a onClick={()=>this.handleManageSavedSearchesClick()}>Manage Saved Searches</a>
      );
    };

    return(
      <div className="container">
        <div className="vehicle-thumbnails-wrapper">
          {productThumbnails}
        </div>

        <div className="result-item-wrapper">
          {resultItems}
        </div>

        <div className="query-item-wrapper">
          {queryItems}
          <span className="manage-saved-search">{manageSavedSearches}</span>
        </div>

        <style jsx>{`
          .container {
            max-width: 600px;
            margin-top: 24px;
            background: white;
            border-radius: 4px;
            position: relative;
            -webkit-box-shadow: 0px 10px 31px -9px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 10px 31px -9px rgba(0,0,0,0.75);
            box-shadow: 0px 10px 31px -9px rgba(0,0,0,0.75);
            padding-top: 10px
          }
          .container:after {
            content: '';
            position: absolute;
            top: 0;
            ${speechBubble};
            width: 0;
            height: 0;
            border: 1em solid transparent;
            border-bottom-color: #ffffff;
            border-top: 0;
            margin-left: -1em;
            margin-top: -1em;
          }
          // XX: Once we get actual thumbnails, consolidate the 3 children wrappers' CSS
          .vehicle-thumbnails-wrapper {
            display: ${sectionDisplay};
            flex-flow: row nowrap;
            overflow: scroll;
            border-bottom: 2px dashed rgb(231, 231, 231);
            margin: 0 24px;
            padding-bottom: 40px;
          }
          .result-item-wrapper {
            display: ${sectionDisplay};
            flex-flow: column wrap;
            border-bottom: 2px dashed rgb(231, 231, 231);
            margin: 0 24px;
            padding: 24px 0;
          }
          .manage-saved-search {
            font: 400 0.875em system-ui;
            display: inline-block;
            margin: 32px 16px;
            color: rgb(64 102 149);
            text-decoration: underline;
            cursor: pointer;
          }
          .query-item-wrapper {
            border-bottom: 2px dashed rgb(231, 231, 231);
            margin: 0 24px;
            padding-top: 10px;
          }
          .query-item-wrapper > div:not(:first-child) {
            display: none;
          }
          .container div:last-child {
            border: none;
          }
          @media all and (min-width: 376px) {
            .container {
              padding-bottom: 16px;
            }
            .result-item-wrapper {
              margin-bottom: 10px;
            }
            .manage-saved-search {
              font-size: 0.938em;
              margin: 16px;
            }
          }
        `}
        </style>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  savedSearch: state.search.savedSearchToggle,
  sampleData: state.sampleData
})

// No React PropTypes. All information are based off of redux store.

export default connect(mapStateToProps)(SearchDropdown);