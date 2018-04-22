import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PrimaryButton extends Component {
  render() {
    return(
      <div className="container">
        <button className="primary-button" onClick={this.props.handleSubmit}>{this.props.name}</button>

        
        <style jsx>{`
          .container{
            width: 100%;
            height: 100%;
          }
          .primary-button {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            background: rgb(64 102 149);
            color: white;
            font-size: 1.063em;
            font-weight: 600;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
}

PrimaryButton.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired, // Name to display on button;
  handleSubmit: PropTypes.func.isRequired, // Function to invoke on click;
};

export default PrimaryButton;