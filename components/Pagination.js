import React, { Component } from 'react';

class Pagination extends Component {
  render() {

    // XX: Placeholder data for pagination. Change to dynamic once connect to GraphQL ~
    let pages = "< 1 2 3 4 5 ... 10 >"
    let numbersPerPage = "Showing 10 of 127"

    return (
      <div className="container">

         <div className="pages">{pages}</div>
         <div className="numbers-per-page">{numbersPerPage}</div>

         <style jsx>{`
            .container {
              width: auto;
              display: flex;
              flex-flow: row nowrap;
              justify-content: space-between;
              margin: 0 auto;
            }
            .numbers-per-page {
              display: none;
            }
            @media all and (min-width: 376px) {
              .container {
                width: 100%;
              }
              .numbers-per-page {
                display: flex;
              }
            }
          `}
          </style>
      </div>
    );
  }
}

export default Pagination;