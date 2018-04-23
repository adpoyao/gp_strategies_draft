import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../components/Icon';

class ResultItemLarge extends Component {

  render() {

    let { id, title, contentType, updatedAt } = this.props;
    return(
      <div onClick={()=>this.props.handleClick(title)} className="container">
        
        {/* XX: Temporary use of PDF & star icons ~*/}
        <div className="file-icon-wrapper">
          <div className="favorite-star-sm star-icon">
            <Icon 
              // Boolean will be based on if the data isFavorited
              clicked={true}
              maxWidth="32px"
              clickedIconUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2000px-Gold_Star.svg.png"
              notClickedIconUrl = "http://www.gamingevolution.info/screenshots/main.php/d/149898-1/Greystar.gif"
              />
          </div>

          <div className="file-icon">
            <Icon 
              maxWidth="48px"
              defaultIcon = {this.props.url}
            />
          </div>
        </div>
        
        <div className="text-wrapper">
          <h2 className="content-title">{title}</h2>
          <div className="inner-text-wrapper">
            <div className="tags-mobile-view">
              {this.props.children}
            </div>
            
            <div className="document-date-wrapper">
              <span className="document-type">{contentType}</span>
              <span className="middle-dot">&middot;</span>
              <span className="updated-at">{updatedAt}</span>
            </div>

            <div className="bottom-icons-wrapper">
              <Icon
                clicked={true}
                maxWidth="32px"
                clickedIconUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2000px-Gold_Star.svg.png"
                notClickedIconUrl = "http://www.gamingevolution.info/screenshots/main.php/d/149898-1/Greystar.gif" />
              
              {/* Temporary use of three dots icon */}
              <img src="http://chittagongit.com/images/three-vertical-dots-icon/three-vertical-dots-icon-20.jpg"/>

            </div>
          </div>
        </div>
        
        {/* XX: Temporary use of star icon ~*/}
        {/* <div className="favorite-star-lg star-icon">
          <Icon 
            // Boolean will be based on if the data isFavorited
            clicked={true}
            maxWidth="32px"
            clickedIconUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2000px-Gold_Star.svg.png"
            notClickedIconUrl = "http://www.gamingevolution.info/screenshots/main.php/d/149898-1/Greystar.gif"
            />
        </div> */}

        <style jsx>{`
          .container {
            display: flex;
            flex-flow: row nowrap;
            align-items: flex-start;
            padding: 24px 0;
            font: 600 1em system-ui;
            color: rgb(69, 69, 69);
            cursor: pointer;
          }
          .file-icon {
            margin-right: 8px;
          }
          .content-title {
            margin: 0;
          }
          .inner-text-wrapper {
            display: flex;
            padding-top: 8px;
            line-height: 16px;
            flex-flow: column //
          }
          .document-date-wrapper {
            flex-flow: row nowrap;
            margin: 16px 0;
          }
          .document-type {
            font-size: 0.813em;
            font-weight: 600;
            color: rgb(45 91 142);
          }
          .middle-dot {
            color: rgb(171, 171, 171);
            margin: 0 8px;
          }
          .updated-at {
            color: rgb(171, 171, 171);
            font-size: 0.813em;
            font-weight: 100;
          }
          .star-icon {
            max-width: 32px;
            max-height: 32px;
          }
          .favorite-star-sm {
            display: none;
          }
          .favorite-star-lg {
            display: flex;
          }
          /////
          .bottom-icons-wrapper {
            display: flex;
            justify-content: space-between;
          }
          img {
            width: 50px;
            height: 50px
          }
          @media all and (min-width: 376px) {
            .container {
              font-size: 12px;
              align-items: center;
            }
            .file-icon-wrapper {
              position: relative;
            }
            .favorite-star-sm {
              display: flex;
              position: absolute;
              top: -16px;
              left: -8px;
            }
            .favorite-star-lg {
              display: none;
            }
            .inner-text-wrapper {
              display: flex;
              padding-top: 8px;
              line-height: 16px;
            }
            .document-date-wrapper {
              margin: 0;
            }
            .document-type {
              font-size: 0.813em;
              font-weight: 600;
              color: rgb(45 91 142);
            }
            .middle-dot {
              color: rgb(171, 171, 171);
              margin: 0 8px;
            }
            .updated-at {
              color: rgb(171, 171, 171);
              font-size: 0.813em;
              font-weight: 100;
            }
            .tags-mobile-view {
              display: none;
            }
            .bottom-icons-wrapper {
              display: none;
            }
          }
        `}
        </style>
      </div>
    );
  }
}

ResultItemLarge.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  contentType: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ResultItemLarge;