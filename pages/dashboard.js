import React, {Component} from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';

import withRedux from '../lib/withRedux';
import SearchPrimary from '../components/SearchPrimary';
import PrimaryButton from '../components/PrimaryButton';

import { updateSearchTerm, toggleSavedSearch } from '../actions/search';

class Dashboard extends Component {

  handleSearchClick() {
    // XX: Insert GraphQL search query here ~
    this.props.dispatch(toggleSavedSearch(false));
    Router.push("/search-results");
  };
  
  render() {
    return(
      <div>
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        
        <div className="container">
          <SearchPrimary 
            handleSubmit={()=>{this.handleSearchClick()}}
          />

          <div className="primary-search-button">
            <PrimaryButton 
              name="Submit"
              handleSubmit={()=>{this.handleSearchClick()}}
            />
          </div>
        </div>

        <style jsx>{`
          .container {
            background: lightgrey;
            padding: 24px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            height: 100vw;
          }
          .primary-search-button {
            display: none;
          }
          @media all and (min-width: 376px) {
            .primary-search-button {
              display: flex;
              height: 64px;
              width: 183px;
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
});

export default withRedux(connect(mapStateToProps)(Dashboard));