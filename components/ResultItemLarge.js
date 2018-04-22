import React, { Component } from 'react';

class ResultItemLarge extends Component {
  render() {
    let { title, contentType, updatedAt } = this.props;
    return(
      <div onClick={()=>this.props.handleClick(title)} className="container">
        <div className="file-icon-wrapper">
          <img className="favorite-star-sm star-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2000px-Gold_Star.svg.png" />
          <img className="file-icon" src={this.props.url} />
        </div>
        
        <div className="text-wrapper">
          <h2>{title}</h2>
          <div className="inner-text-wrapper">
            <span className="document-type">{contentType}</span>
            <span className="middle-dot">&middot;</span>
            <span className="updated-at">{updatedAt}</span>
          </div>
        </div>
        <img className="favorite-star-lg star-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2000px-Gold_Star.svg.png" />

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
            max-width: 48px;
            margin-right: 8px;
          }
          h2 {
            margin: 0;
          }
          .inner-text-wrapper {
            display: none
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
          @media all and (min-width: 376px) {
            .container {
              font-size: 12px;
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
          }
        `}
        </style>
      </div>
    );
  }
}

export default ResultItemLarge;