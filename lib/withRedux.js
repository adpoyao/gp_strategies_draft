import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../store/store';

const withRedux = (Page) => {
  return (
    class PageWrapper extends Component {
      render() {
        return(
          <Provider store={store}>
            <Page />
          </Provider>
        )
      }
    }
  );
}

export default withRedux;