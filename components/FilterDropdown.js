import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import Checkbox from './Checkbox';

class FilterDropdown extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    let array = this.props.options.map(data => {
      return (
      <li key={shortid.generate()}>
        <Checkbox id={data.label} {...data} clickAction={this.props.clickAction}/>
      </li>)
    })
    return (
      <div className="container">
        <ul className="array-wrapper">
          {array}
        </ul>
        
        <style jsx>{`
          .container {
            background: white;
            width: 100%;

            -webkit-box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.15);
            -moz-box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.15);
            box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.15);
          }
          .container:after {
            content: '';
            position: absolute;
            top: 0;
            right: 40px;
            width: 0;
            height: 0;
            border: 1em solid transparent;
            border-bottom-color: #ffffff;
            border-top: 0;
            margin-left: -1em;
            margin-top: -1em;
          }
          .array-wrapper {
            margin: 0;
            list-style-type: none;
            padding: 16px 20px;
          }
          @media all and (min-width: 376px) {
            .container {
              width: max-content;
              
              //Temporary Styling
              position: relative;
              right: 40px;
              
            }
          }
        `}
        </style>

      </div>
    );
  }
}

FilterDropdown.propTypes = {
  id: PropTypes.string.isRequired,
  clickAction: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    fontColor: PropTypes.string
  })).isRequired
}

export default FilterDropdown;