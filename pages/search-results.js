import React, {Component} from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import shortid from 'shortid';

import withRedux from '../lib/withRedux';
import Filter from '../components/Filter';
import Banner from '../components/Banner';
import ListBox from '../components/ListBox';
import Checkbox from '../components/Checkbox';
import PageSection from '../components/PageSection';
import BreadCrumbs from '../components/BreadCrumbs';
import ResultItemSmall from '../components/ResultItemSmall';
import SearchSecondary from '../components/SearchSecondary';
import ProductThumbnail from '../components/ProductThumbnail';


import Pagination from '../components/Pagination';

import * as action from '../actions/search';

class SearchResults extends Component {

  componentWillUnmount() {
    this.props.dispatch(action.clearFilters());
  }

  filterStatus = (input, data) => {
    if(input !== undefined){
      input ?
      this.props.dispatch(action.addStatusFilter(data)) :
      this.props.dispatch(action.removeStatusFilter(data));
    };
  };

  filterContentType = (input,data) => {
    if(input !== undefined){
      input ?
      this.props.dispatch(action.addContentTypeFilter(data)) :
      this.props.dispatch(action.removeContentTypeFilter(data));
    };
  };

  filterTopic = (input, data) => {
    if(input !== undefined){
      input ?
      this.props.dispatch(action.addTopicFilter(data)) :
      this.props.dispatch(action.removeTopicFilter(data));
    };
  };

  toggleFavoritedSearch = (input) => {
    if(input !== undefined){
      this.props.dispatch(action.toggleSavedSearch(input));
    };
  };

  handleThumbnailClick = (modelName) => (
    console.log(`Vehicle Thumbnail: ${modelName} clicked.`)
  );

  handleResultClick = (result) => {
    console.log(`Result: ${result} clicked.`)
  };

  render() {  

    // Search results page: custom filters
    // XX: Make data dynamic once connected to graphQL ~
    const customFilters = [
      {
        title: "Status",
        options:[{
          label: "current",
          checked: false,
          fontColor: undefined
        }, 
        {
          label: "archived",
          checked: false,
          fontColor: undefined
        }],
        clickAction: this.filterStatus,
      },
      {
        title: "Content Type",
        options: [{
          label: "Product",
          checked: false,
          fontColor: undefined
        },
        {
          label: "Article",
          checked: false,
          fontColor: undefined
        },
        {
          label: "Document",
          checked: false,
          fontColor: undefined
        },
        { 
          label: "Video",
          checked: false,
          fontColor: undefined
        },
        { 
          label: "Image",
          checked: false,
          fontColor: undefined,
        }], 
        clickAction: this.filterContentType
      },
      {
        // XX: May need to query for an array of topics on ComponentWillMount();
        title: "Topic",
        options: [{
          label: "technology",
          checked: false,
          fontColor: undefined
        },
        {
          label: "bluetooth",
          checked: false,
          fontColor: undefined
        },
        {
          label: "product information",
          checked: false,
          fontColor: undefined
        }],
        clickAction: this.filterTopic
      }
    ];

    // Favorite Checkbox Props (desktop & mobile);
    const favoritesDesktop = {
      label: "Show only favorites",
      fontColor: "rgb(64 101 149)",
      checked: false,
      clickAction: this.toggleFavoritedSearch,
    }
    const favoritesMobile = {
      label: "Show Favorites",
      fontColor: "rgb(64 101 149)",
      checked: false,
      clickAction: this.toggleFavoritedSearch,
    }

    let filters = customFilters.map((data, index) => {
      return <Filter key={data.title} id={data.title} {...data}/>
    })

    let productThumbnails, resultItems, queryItems, manageSavedSearches, savedSearchListBox, popularSearchListBox; 
    const { products, favorited, savedSearches, contents, savedAndFavs} = this.props.sampleData;
    if(products){
      productThumbnails = products.map(product => {
        return (
          <div key={product.id} className="products-wrapper">
            <ProductThumbnail handleClick={this.handleThumbnailClick} {...product} />
            <style jsx>{`
              .products-wrapper {
                font-size: 16px;
                margin-bottom: 32px;
                //XX One car display here
              }
              @media all and (min-width: 376px) {
                .products-wrapper {
                  width: 220px;
                  font-size: 17px;
                }
              }
            `}
            </style>
          </div>
        );
      });
    };

    if(contents){
      resultItems = contents.map(content => {
        return (
          <div key={content.id} className="content-wrapper">
            <ResultItemSmall key={content.id} handleClick={this.handleResultClick} {...content} />
            <style jsx>{`
              .content-wrapper {
                border: 1px solid lightgrey;
                border-radius: 4px;
                margin-bottom: 16px;
                padding: 0 16px;
                transition: all 0.3s ease;
              }
              .content-wrapper:hover {
                cursor: pointer;
                transition: all 0.3s ease;
                -webkit-box-shadow: 0px 10px 10px -6px rgba(0,0,0,0.15);
                -moz-box-shadow: 0px 10px 10px -6px rgba(0,0,0,0.15);
                box-shadow: 0px 10px 10px -6px rgba(0,0,0,0.15);
              }
            `}
            </style>
          </div>
        );
      });
    };
    
    //XX: Mock data for now. TODO: change "collection" array to query results of user's Saved Searches.
    if(savedAndFavs) {
      let savedSearchProps = {
        id: shortid.generate(),
        title: 'Saved Searches',
        collection: savedAndFavs
      }
      savedSearchListBox = (
        <ListBox key={savedAndFavs.id} {...savedSearchProps}/>
      );
    }

    //XX: Mock data for now. TODO: change "collection" array to query results of Popular Searches.
    if(savedAndFavs) {
      let popularSearchProps = {
        id: shortid.generate(),
        title: 'People also search for...',
        collection: savedAndFavs,
      }
      popularSearchListBox = (
        <ListBox key={savedAndFavs.id} {...popularSearchProps}/>
      );
    }
    
    // Custom path for breadcrumbs. 
    const path = [
      {
        title:"Search",
        route: "/dashboard",
        arrow: ">"
      },
      {
        // XX: Hard coded data for now. Connect with total query result # 
        // and write logic for singluar vs plural (result & results);
        title: `172 Results`, 
        route: undefined,
        arrow: undefined
      }
    ];

    return(
      <div className="container">
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <h3>(SEARCH RESULT PAGE)</h3>
        <Banner>
          <div className="banner-breadcrumbs-wrapper">
            <BreadCrumbs paths={path}/>
          </div>

          <div className="banner-content-wrapper">
            <SearchSecondary/>
            <div className="filter-wrapper">
              <div className="desktop-view"><Checkbox id={favoritesDesktop.label} {...favoritesDesktop}/></div>
              <div className="mobile-view"><Checkbox id={favoritesMobile.label} {...favoritesMobile}/></div>
              {filters}
            </div> 
          </div>
        </Banner>
        
        <PageSection>
          <div className="search-result-wrapper">
            {/* Products Section */}
            <h3 className="page-section-header">Products</h3>
            <div className="vehicle-thumbnails-wrapper">
              {productThumbnails}
            </div>

            {/* Content Section */}
            <h3 className="page-section-header">Content</h3>
            <div className="contents-wrapper">
              <div className="result-items-wrapper">
                {resultItems}
                <Pagination/>
              </div>
              <div className="list-box-wrapper">
                <div className="list-box">{savedSearchListBox}</div>
                <div className="list-box">{popularSearchListBox}</div>
              </div>
            

            </div>

          </div>
          
        </PageSection>

        <style jsx>{`
          .desktop-view {
            display: none;
          }
          .mobile-view {
            margin: 32px 0 -4px;
          }
          .page-section-header {
            font-size: 1.5em;
            // padding-bottom: 8px;//
            padding-bottom: 32px;
            border-bottom: 2px dashed rgb(231, 231, 231);
          }
          .banner-breadcrumbs-wrapper {
            width: 100%;
          }
          .banner-content-wrapper{
            display: flex;
            flex-flow: row nowrap;
          }
          .search-result-wrapper {
            display: flex;
            flex-flow: column nowrap;
          }
          .vehicle-thumbnails-wrapper {
            display: flex;
          }
          .result-items-wrapper { //
            display: flex;
            flex-flow: column nowrap;
            flex: 1 100%;
            margin-bottom: 16px;
          }
          list-box-wrapper {
            flex: 1 30%;
          }
          .list-box {
            margin: 0 0 32px 0;
          }

          @media all and (min-width: 376px) {
            .desktop-view {
              display: flex;
            }
            .mobile-view {
              display: none;
            }
            .filter-wrapper {
              display: flex;
              align-items: center;
              justify-content: flex-end;
              width: 100%;
              min-width: 400px;
              margin-left: 40px;
            }
            .filter-wrapper > * {
              margin: 0 20px;
            }
            .page-section-header {
              border-bottom: none;
              padding-bottom: 8px;
              -webkit-box-shadow: 0px 10px 6px -6px rgba(0,0,0,0.15);
              -moz-box-shadow: 0px 10px 6px -6px rgba(0,0,0,0.15);
              box-shadow: 0px 10px 6px -6px rgba(0,0,0,0.15);
            }
            .contents-wrapper {
              display: flex;
              flex-flow: row nowrap;
            }
            .result-items-wrapper {
              margin: 0 32px 16px 0
            }
          }
        `}
        </style>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sampleData: state.sampleData
})

export default withRedux(connect(mapStateToProps)(SearchResults));