import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FilterDropdown from './FilterDropdown';

import { toggleFilter } from '../actions/search';

class Filter extends Component {
  
  componentWillUnmount(){
    this.props.dispatch(toggleFilter(undefined));
  };

  handleClick = (id) => {
    if(id === this.props.activeFilterId){ id = undefined;}
    this.props.dispatch(toggleFilter(id));
  };

  render() {
    let { id, activeFilterId} = this.props, toggleVisibility;
    if(id === activeFilterId){
      toggleVisibility = "flex";
    } else {
      toggleVisibility = "none";
    };

    return (
      <div className="container">

        <div 
          className="filter-title" 
          onClick={()=>this.handleClick(this.props.id)}>
          {this.props.title}
        </div>
        
        <span className="drop-down"><FilterDropdown {...this.props}/></span>
        
        <style jsx>{`
          .container {
            font: 400 1em system-ui;
            color: rgb(64 101 149)
          }
          .filter-title {
            padding: 20px 0 8px;
            border-bottom: 2px solid rgb(64 101 149);
          }
          .drop-down {
            // XX: Other opion: absolute
            position: relative;
            width: 100%;
            margin-top: 20px;
            display: ${toggleVisibility}
          }
          @media all and (min-width: 376px) {
            .container {
              margin: 0 20px;
            }
            .drop-down {
              position: absolute;
            }
            .filter-title {
              padding: 0;
              width: max-content;
            }
          }
        `}
        </style>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeFilterId: state.search.activeFilterId,
});

FilterDropdown.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  clickAction: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    fontColor: PropTypes.string
  })).isRequired
}

export default connect(mapStateToProps)(Filter);