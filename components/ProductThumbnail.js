import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductThumbnail extends Component {
  render() {
  
    // XX: coverImageId returns a URL for now. Need to obtain image using Id int from AWS once connected.
    let { id, modelName, modelYear, coverImageId } = this.props;

    return(
      <div onClick={()=>this.props.handleClick(modelName)} className="container">
        {/* XX: Need to change coverImageId variable once connected to AWS */}
        <img className="product-img" src={coverImageId}/>
        
        <h2>{modelYear} {modelName}</h2>
        
        <style jsx>{`
          .container {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            padding-top: 40px;
            font: 600 1em system-ui;
            color: rgb(69, 69, 69);
            cursor: pointer;
          }
          .product-img {
            width: 100%
          }
        `}
        </style>
      </div>
    );
  }
};

ProductThumbnail.propTypes = {
  id: PropTypes.string.isRequired,
  modelName: PropTypes.string.isRequired,
  modelYear: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  // XX: CoverImageId takes an Int. Using a url string as placeholder for now ~
  coverImageId: PropTypes.string.isRequired,
};

export default ProductThumbnail;