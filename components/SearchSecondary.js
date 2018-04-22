import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import { debounce } from 'lodash';

import { updateSearchTerm } from '../actions/search';

class SearchSecondary extends Component {
  constructor(props) {
    super(props)

  }

  componentWillMount() {
    this.setState({input: this.props.searchTerm});
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onHandleInputChange(event){
    // this.setState({input: event.target.value})
    // this.props.dispatch(updateSearchTerm(event.target.value));
  };

  toString(query){
    if(query){
      return `"${query}"`
    } else {
      return '';
    }
  };

  toIsFilter(array){
    if(array && array.length > 0){
      return `is: (${array.toString().split(",").join(", ")})`
    } else {
      return '';
    };
  };

  toInFilter(array){
    if(array && array.length > 0){
      return `in: (${array.toString().split(",").join(", ")})`
    } else {
      return '';
    };
  };

  render() {

    let compiledQuery = this.toString(this.props.searchTerm) + " " + this.toIsFilter(this.props.filteredStatus) + " " + this.toIsFilter(this.props.filteredContentType) + " " + this.toInFilter(this.props.filteredTopic);
    compiledQuery = compiledQuery.split("  ").join(" ");

    return(
      <div className="container">
        <form onSubmit={(e)=>this.onSubmit(e)}>
          <div className="input-wrapper">
            
            <div className="input-inner-wrapper">
              {/* Temporary use of Search Icon */}
              <img src="https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863" 
                className="search-icon magnifying-glass"/>
              <input 
                text="text"
                placeholder="Search by vehicle, topic, keyword or content title..."
                onChange={(event)=>this.onHandleInputChange(event)}

                value={compiledQuery}
              />
            </div>

            <p onClick={(e)=>this.onSubmit(e)} className="save-search">Save</p>
          </div>

        </form>

        {/* STYLING */}
        <style jsx>{`
          .container {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 16px 0;
          }
          .magnifying-glass {
            max-width: 24px;
            max-height: 14px;
            width: auto;
            height: auto;
            margin: 0 16px;
            display: none;
          }
          form {
            display: flex;
            flex: 1 auto;
          }
          .input-wrapper {
            flex: 1 80%;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;
            height: 64px;
            max-width: 600px;
            background: white;
            border-radius: 4px;
            -webkit-box-shadow: 0px 10px 20px 4px rgba(0,0,0,0.15);
            -moz-box-shadow: 0px 10px 20px 4px rgba(0,0,0,0.15);
            box-shadow: 0px 10px 20px 4px rgba(0,0,0,0.15);
          }
          .input-inner-wrapper {
            display: flex;
            flex: 1;
            align-items: center;
          }
          .search-icon {
            display: flex;
            margin: 0 12px;
          }
          input {
            flex: 1;
            padding: 0;
            border: none;
            outline: none;
            font-size: 1em;
            color: black;
          }
          .save-search {
            position: relative;
            display: flex;
            color: rgb(64 102 149);
            margin-right: 24px;
            padding-bottom: 4px;
            min-width: 32px;
            border-bottom: 1px solid rgb(64 102 149);
            font: 600 0.875em system-ui;
            -webkit-box-shadow: -16px 0px 15px -3px rgba(255,255,255,1);
            -moz-box-shadow: -16px 0px 15px -3px rgba(255,255,255,1);
            box-shadow: -16px 0px 15px -3px rgba(255,255,255,1);
              cursor: pointer;
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

const mapStateToProps = state => {
  let { searchTerm, filteredStatus, filteredContentType, filteredTopic } = state.search;
  return ({
  searchTerm,
  filteredStatus,
  filteredContentType,
  filteredTopic,
  filteredStatus,
  });
}

export default connect(mapStateToProps)(SearchSecondary);