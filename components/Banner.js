import React, { Component } from 'react';
import { connect } from 'react-redux';

class Banner extends Component {
  render() {

    return (
      <div className="container">

        <div className="children-wrapper">
          {this.props.children}
        </div>

        <style jsx>{`
          .container {
            background: linear-gradient(297.24deg, #EBEDEE 0%, #FBFBFB 100%);
            padding: 5% 5% 32px 5%;
          }
          @media all and (min-width: 376px) {
            .container {
              height: 200px;
              padding: 0 5%
            }
            .children-wrapper {
              display: flex;
              flex-flow: column nowrap;
              justify-content: space-between;
            }
          }
        `}
        </style>
      </div>
    );
  }
}

export default connect()(Banner);