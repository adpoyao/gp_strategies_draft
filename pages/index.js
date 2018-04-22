import React, {Component} from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';

import withRedux from '../lib/withRedux';

class Index extends Component {
  render() {
    return(
      <div>
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <h1>(HOME PAGE)</h1>
      </div>
    );
  }
}

export default withRedux(connect(state => state)(Index));