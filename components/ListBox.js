import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

class ListBox extends Component {
  
  render() {
    let list = this.props.collection.map(content => {
      return (
        <li key={content.id} className="list-item">
          
          <Link href={content.url}>
            <a>{content.title}</a>
          </Link>
          
          <style jsx>{`
            .list-item {
              padding: 8px 0;
              line-height: 28px;
              cursor: pointer;
              text-decoration: underline;
              color: rgb(64 102 149);
            }
          `}
          </style>
        </li>
      );
    });

    return (
      <div className="container">
        
        <h3>{this.props.title}</h3>

        <ul className="list-wrapper">
          {list}
        </ul>

        <style jsx>{`
          .container {
            border: 1px lightgrey solid;
            border-radius: 4px;
            padding: 16px 24px 16px;
            font-size: 14px;
          }
          h3 {
            font-size: 14px;
            font-weight: 800;
          }
          .list-wrapper {
            padding: 0;
            list-style-type: none;
          }
          @media all and (min-width: 376px) {
          
          }
        `}
        </style>
      </div>
    );
  }
}

ListBox.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  collection: PropTypes.array
  // XX: collection's array data type TBD. For now:
  //  id: PropTypes.string,
  //  title: PropTypes.array,
  //  url: PropTypes.string
};

export default ListBox;