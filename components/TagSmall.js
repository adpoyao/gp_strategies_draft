import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TagSmall extends Component {
  render() {

    let tagline, backgroundColor, fontColor, border="none";

    switch(this.props.content){
      case "isSaved":
        tagline = "Saved Search";
        if(!this.props.savedSearch){
          backgroundColor = "rgb(64 102 149)";
          fontColor = "white";
        } else {
          backgroundColor = "white";
          fontColor = "rgb(64 102 149)";
          border = "1px solid rgb(231 231 231)"
        }
        break;
      case "isPopular":
        tagline = "Popular Search";
        backgroundColor = "white";
        fontColor = "rgb(64 102 149)";
        break;
      case "isPast":
        tagline = "Past Search";
        backgroundColor = "rgb(231 231 231)";
        fontColor = "rgb(64 102 149)";
        break;
      default:
        // Customized tagline
        tagline = this.props.content;
        backgroundColor = "rgb(231 231 231)";
        fontColor = "rgb(64 102 149)";
        break;
    };

    return (
      <div className="container">
        <p>{tagline}</p>

        <style jsx>{`
          .container {
            background: ${backgroundColor};
            color: ${fontColor};
            font: 100 0.813em system-ui;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 8px;
            height: 30px;
            width: max-content;
            border-radius: 4px;
            border: ${border};
          }
          @media all and (min-width: 376px) {

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
});

TagSmall.propTypes = {
  content: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(TagSmall);