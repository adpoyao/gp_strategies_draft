import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import { debounce } from 'lodash';
import autosizeInput from 'autosize-input';

import { updateSearchTerm } from '../actions/search';

class SearchSecondary extends Component {
  componentDidMount() {
    autosizeInput(document.querySelector('#search-input'))
  }

  // XX: On keydown/save click, the following information prints.
  onSubmit(e) {
    let { 
      searchTerm,
      filteredContentType,
      filteredTopic,
      filteredStatus } = this.props;

    e.preventDefault();
    console.log(`Logged Input:, 
      searchTerm: ${searchTerm},
      filteredContentType: ${filteredContentType},
      filteredTopic: ${filteredTopic},
      filteredStatus: ${filteredStatus}`
    );
  }

  onHandleInputChange(event){
    this.props.dispatch(updateSearchTerm(event.target.value));
  };

  toIsFilter(array){
    if(array && array.length > 0){
      return `is: ("${array.toString().split(",").join(", ")}")`
    } else {
      return '';
    };
  };

  toInFilter(array){
    if(array && array.length > 0){
      return `in: ("${array.toString().split(",").join(", ")}")`
    } else {
      return '';
    };
  };

  render() {
    let compiledQuery = this.props.searchTerm;
    let compiledFilter = this.toIsFilter(this.props.filteredStatus) + " " + this.toIsFilter(this.props.filteredContentType) + " " + this.toInFilter(this.props.filteredTopic);
    compiledFilter = compiledFilter.split("  ").join(" ");

    let customWidth, customOverflow;
    if(!compiledQuery.length){
      customWidth = "0"
    } 
    if(compiledQuery || compiledFilter.trim()){
      customOverflow = "hidden"
    }

    let placeholder, apostrophe;
    if(!compiledFilter.trim()){
      placeholder = "Search by vehicle, topic, keyword or content title...";
    } 
    if(this.props.searchTerm){
      apostrophe ="\"";
    };

    return(
      <div className="container">
        <form onSubmit={(e)=>this.onSubmit(e)}>
          <div onClick={()=>this.searchInput.focus()} className="input-wrapper">
            
            <div className="input-inner-wrapper">
              {/* Temporary use of Search Icon */}
              <img src="https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863" 
                className="search-icon magnifying-glass"/>
              
              {apostrophe}
              {/* First Input is the standard text that users could read and type in */}
              <div className="search-input-wrapper">
                <input 
                  text="text"
                  id="search-input"
                  className="search-input"
                  autoComplete="off"
                  ref={(input) => {this.searchInput = input}}
                  placeholder= {placeholder}
                  onChange={(event)=>this.onHandleInputChange(event)}
                  value={compiledQuery}
                />
              </div>
              {apostrophe}&nbsp;

              <span className="filter-input">{compiledFilter}</span>
                
            </div>

            <div onClick={(e)=>this.onSubmit(e)} className="save-search">Save</div>
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
            align-items: center;
            overflow: ${customOverflow};
          }
          .search-icon {
            display: flex;
            margin: 0 12px;
          }
          .search-input-wrapper {
            width: ${customWidth}
          }
          .filter-input {
            font: 400 1em system-ui;
            white-space: nowrap;
          }
          input {
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
  filteredContentType,
  filteredTopic,
  filteredStatus,
  });
}

export default connect(mapStateToProps)(SearchSecondary);