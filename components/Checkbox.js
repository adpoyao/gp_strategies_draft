import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: false
    };
  };

  componentWillMount() {
    if (this.props.checked) {
      this.setState({checked: true})
    };
  };

  handleClick = (e) => {
    this.setState({checked: !this.state.checked})
    if (this.props.clickAction) {
      this.props.clickAction(this.props.clickAction(e.target.checked, this.props.label));
    };
  };

  render() {
    let labelColor, checkMark;
    
    if(this.props.fontColor){
      labelColor = this.props.fontColor
    } else {
      labelColor = this.state.checked ? "black" : "rgb(69 69 69)";
    };

    if(this.state.checked) {
      // XX: Temporary use of check mark image ~
      checkMark = `
        background-size: 100%;
        background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Check_mark_23x20_04.svg/1178px-Check_mark_23x20_04.svg.png');
        background-repeat: no-repeat;
        background-position: center;`
    };

    return (
      <div className="control__group container">
        <label className="control control__checkbox" htmlFor={this.props.id}>
          <input 
            type="checkbox" 
            id={this.props.id} 
            onClick={(e)=>this.handleClick(e)} 
            checked={this.state.checked}
            />
          <div className="control__indicator"></div>
          {this.props.label}
        </label>

        <style jsx>{`
          .container {
            font: 400 1em system-ui;
            color: rgb(64 101 149)            
          }
          .control__group {
            margin-bottom: 32px;
          }
          .control__group:last-child {
            margin-bottom: 0;
          }
          .control {
            display: block;
            font-size: 1em;
            color: ${labelColor};
          }
          .control:hover{
            cursor:pointer;
          }
          input{
            position:absolute;
            visibility: hidden;
          }
          .control__indicator{
            width:20px;
            height:20px;
            display:inline-block;
            margin-right:8px;
            position:relative;
            border:1px solid black;
            border-radius:2px;
            box-sizing: border-box;
            vertical-align: middle;
            ${checkMark}
          }
          .control__checkbox {
            margin: 8px 0;
          }
          @media all and (min-width: 376px) {
            
          }
        `}
        </style>
      </div>
    );
  };
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  clickAction: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  fontColor: PropTypes.string,
}

export default Checkbox;