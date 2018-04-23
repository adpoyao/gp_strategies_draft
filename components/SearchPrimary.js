import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Router from 'next/router';
import { debounce } from 'lodash';

import SearchDropdown from './SearchDropdown';
 
import { updateSearchTerm, toggleSavedSearch } from '../actions/search';

class SearchPrimary extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      predictiveInput: '',
      debouncedSearch: '',
    };
  }

  onHandleInputChange(event){
    event.persist();
    this.props.dispatch(updateSearchTerm(event.target.value));
    this.props.dispatch(toggleSavedSearch(false));

    // Predictive Search
    // XX: Insert predictive search output based on queried results ~
    let predictiveOutput = "Elantra";
    if(event.target.value === "") {
      this.setState({predictiveInput: ""});
    } else if (predictiveOutput.toLowerCase().indexOf(event.target.value.toLowerCase()) === 0){
      let currentLength = event.target.value.length;
      this.setState({predictiveInput: event.target.value.toString() + predictiveOutput.substring(currentLength)});
    } else {
      // XX: Invoke another call for new query data here.
      this.setState({predictiveInput: ""});
    }

    // Debounces every 0.5 second to prevent flooding of API request
    _.debounce((event)=> {
      this.setState({debouncedSearch: this.props.searchTerm});
    }, 500)(event);
  };

  onSavedSearchClick = () => {
    this.props.dispatch(toggleSavedSearch(!this.props.savedSearch));
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit();
  }

  render() {
    let searchDropdown;
    // Search Dropdown is visible when either:
    // (1) Saved Search option is toggled on, or
    // (2) There is sufficient data from both regular and debounced search inputs.
    // XX: May need additional logics here to render search results ~
    if(this.props.savedSearch || this.state.debouncedSearch && this.state.debouncedSearch.length > 1 && this.props.searchTerm.length) {
      searchDropdown = <SearchDropdown />
    };

    return(
      <div className="container">
        <form 
          onSubmit={(e)=>this.onSubmit(e)} htmlFor="search"
          >
          <div className="input-wrapper" onClick={()=>this.searchInput.focus()}>
            <div className="input-inner-wrapper">
              {/* XX: Temporary use of Search Icon ~*/}
              <img src="https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863" 
                className="search-icon magnifying-glass"/>
              
              <div id="search-div">
                {/* First Input is to render grey, predictive texts */}
                <input 
                  type="text"
                  id="background-input"
                  value={this.state.predictiveInput}
                />
                {/* Second Input is the standard text that users could read and type in */}
                <input 
                  type="text"
                  id="search"
                  autoComplete="off"
                  ref={(input) => {this.searchInput = input}}
                  placeholder="Search by vehicle, topic, keyword or content title..."
                  onChange={(event)=>this.onHandleInputChange(event)}
                  value={this.props.searchTerm}
                />
                {/* Third Input (hidden) is to allow form submittal with Enter keydown  */}
                <input
                  type="submit"
                  value={this.props.searchTerm}
                  hidden
                />
              </div>

              {/* XX: Temporary magnifying glass icon */}
              <div className="mobile-search-btn-wrapper">
                <img src="https://www.picpng.com/images/small/magnifying-glass-search-loupe-image-download-49863" 
                  className="mobile-search-button magnifying-glass"/>
              </div>
            </div>

            <p onClick={()=>this.onSavedSearchClick()} className="saved-searches">Saved Searches</p>
          </div>

        </form>

        {searchDropdown}


        <style jsx>{`
          .container {
            max-width: 606px;
            width: 100%;
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
          }
          .input-inner-wrapper {
            display: flex;
            flex: 1;
            align-items: center;
          }

          #search-div {
            position: relative;
            width: 100%;
          }
          #background-input {
            position: absolute;
            width: 100%;
            color: rgb(171, 171, 171);

          }
          #search {
            position: relative;
            background: transparent;
            width: 100%;
          }

          input {
            flex: 1;
            border: none;
            outline: none;
            font-size: 1em;
            color: black;
            //XX: total of 48px for left-padding
            padding: 0 0 0 16px;
          }
          ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: rgb(171, 171, 171);
            opacity: 1; /* Firefox */
          }
          :-ms-input-placeholder { /* Internet Explorer 10-11 */
              color: rgb(171, 171, 171);
          }
          ::-ms-input-placeholder { /* Microsoft Edge */
              color: rgb(171, 171, 171);
          }
          .saved-searches {
            display: none;
            position: relative;
          }
          .mobile-search-button {
            display: flex;
            margin-right: 8px;
            
          }
          .mobile-search-btn-wrapper {
            display: flex;
            height: 40px;
            align-items: center;
            -webkit-box-shadow: -16px 0px 15px -3px rgba(255,255,255,1);
            -moz-box-shadow: -16px 0px 15px -3px rgba(255,255,255,1);
            box-shadow: -16px 0px 15px -3px rgba(255,255,255,1);
          }
          @media all and (min-width: 376px) {
            .search-icon {
              display: flex;
              margin: 0 12px;
            }
            input {
              padding: 0;
            }
            .mobile-search-button {
              display: none;
            }
            .saved-searches {
              display: flex;
              color: rgb(64 102 149);
              margin-right: 24px;
              padding: 5px;
              min-width: 61px;
              border-bottom: 1px solid rgb(64 102 149);
              font: 600 0.938em system-ui;
              -webkit-box-shadow: -16px 0px 15px -3px rgba(255,255,255,1);
              -moz-box-shadow: -16px 0px 15px -3px rgba(255,255,255,1);
              box-shadow: -16px 0px 15px -3px rgba(255,255,255,1);
              cursor: pointer;
            }
            .input-wrapper {
              margin-right: 32px;
            }
          }
        `}
        </style>
      </div>      
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.search.searchTerm,
  savedSearch: state.search.savedSearchToggle,
})

SearchPrimary.propTypes = {
  handleSubmit: PropTypes.func.isRequired, // Function to invoke Enter keydown (should be same as Primary Button);
};

export default connect(mapStateToProps)(SearchPrimary);