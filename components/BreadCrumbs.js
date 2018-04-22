import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

class BreadCrumbs extends Component {
  render() {

    let display = this.props.paths.map((path, index) => {
      if(path.route){
        return (
          <div key={index} className="path-section">
            <p>
              <Link href={path.route}>
                <span className="route">{path.title}</span>
              </Link>  
              <span>{path.arrow}</span>
            </p>
            
            <style jsx>{`
              .path-section {
                font: 400 0.875em system-ui;
              }
              .route {
                text-decoration: underline;
                color: rgb(64 102 149);
                cursor: pointer;
              }
              span {
                padding: 4px;
                color: #939393
              }
            `}
            </style>
          </div>)
      } else {
        return (
          <div key={index} className="path-section end">
            <p>{path.title}</p>

            <style jsx>{`
              .path-section {
                font: 400 0.875em system-ui;
              }
              .end {
                color: #454545;
                font-weight: 500;
              }
            `}
            </style>
          </div>
        )
      }
    });

    return(
      <div className="container">
        {display}

        <style jsx>{`
          .container {
            display: flex;
            flex: 1 100%;
          }
          @media all and (min-width: 376px) {
            .container {
              margin-top: 59px;
            }
          }
        `}
        </style>
      </div>
    );
  }
}

BreadCrumbs.propTypes = {
  path: PropTypes.shape({
    title: PropTypes.string.isRequired,
    route: PropTypes.string,
    arrow: PropTypes.string, // (">", "<", or undefined)
  })
}

export default BreadCrumbs;