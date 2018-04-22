import React, { Component } from 'react';

class PageSection extends Component {
  render() {
    return(
      <div className="container">
        {this.props.children}

        <style jsx>{`
          .container {
            padding: 5%;
            font: 400 1em system-ui;
            color: #454545;
          }
        `}
        </style>
      </div>
    );
  }
}

export default PageSection;