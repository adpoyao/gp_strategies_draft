import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TagSmall from './TagSmall';

class QueryListItem extends Component {
  render() {
    // Conditional display of tags: Saved Search, Past Search, Popular Search;
    let { isSaved, isFavorited } = this.props, searchTag;
    
    if(isSaved){
      searchTag = <TagSmall content="isSaved" {...this.props}/>;
    } else if (isFavorited){
      searchTag = <TagSmall content="isFavorited" {...this.props}/>;
    };

    return(
      <div onClick={()=>this.props.handleClick(this.props.query)} className="container">

        {/* Temporary use of Search Icon */}
        <img src="https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863" 
          className="search-icon magnifying-glass"/>
        
        <div className="query-wrapper">
          <p className="query-item">{this.props.query}</p>
          {searchTag}
        </div>
        
        <style jsx>{`
          .container {
            display: flex;
            flex-flow: row nowrap;
            font: 400 1.125em system-ui;
            color: rgb(69, 69, 69);
            cursor: pointer;
            align-items: flex-start;
            padding-top: 32px;
          }
          .magnifying-glass {
            max-width: 25px;
            max-height: 15px;
            width: auto;
            height: auto;
            margin: 4px 16px;
          }
          .query-wrapper {
            display: flex;
            flex-flow: row wrap;
            align-items: flex-start;
            justify-content: flex-start;
            width: 100%;
          }
          .query-item {
            align-items: flex-start;
            margin-top: 0;
            flex: 1 100%;
          }
          @media all and (min-width: 376px) {
            .container {
              font-size: 0.938em;
              align-items: center;
              padding: 0 0 8px 0;
            }
            .magnifying-glass {
              margin-top: 0
            }
            .query-wrapper {
              align-items: center;
              padding-bottom: 10px;
              border-bottom: 2px dashed rgb(231, 231, 231);
            }
            .query-item {
              margin: 16px 16px 16px 0;
              flex: 0 auto
            }
          }
        `}
        </style>
      </div>
    );
  }
}

QueryListItem.propTypes = {
  id: PropTypes.string,
  isSaved: PropTypes.bool.isRequired,
  isFavorited: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default QueryListItem;