import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
  render(){

    let icon;
    // If there is one default icon:
    if(this.props.defaultIcon){
      icon = (
        <div className="container">

          {/* XX: Temporary use of placeholder star icon */}
          <div onClick={()=>console.log('Yay')}>
            <img className="default-icon" src={this.props.defaultIcon}/>
          </div>
          
          <style jsx>{`
            .default-icon {
              max-width: ${this.props.maxWidth};
            }
          `}
          </style>
        </div>
      )
    } else {
      icon =(
        <div className="container">

          {/* XX: Temporary use of placeholder star icon */}
          <div>
            <img className="pressed" src={this.props.clickedIconUrl}/>
          </div>
          
          <div>
            <img className="not-pressed" src={this.props.notClickedIconUrl}/>
          </div>

          <style jsx>{`
            .pressed {
              display: ${this.props.clicked ? "flex" : "none"};
              max-width: ${this.props.maxWidth};
            }
            .not-pressed {
              display: ${this.props.clicked ? "none" : "flex"};
              max-width: ${this.props.maxWidth};
            }
          `}
          </style>
        </div>
      )
    };

    return(
      <div className="container">
        {icon}

        <style jsx>{`
        
        `}
        </style>
      </div>
    );
  }
}

Icon.propTypes = {
  id: PropTypes.string,
  clicked: PropTypes.bool,
  maxWidth: PropTypes.string,
  clickAction: PropTypes.func,
  defaultIcon: PropTypes.string,
  clickedIconUrl: PropTypes.string,
  notClickedIconUrl: PropTypes.string,
};

export default Icon;