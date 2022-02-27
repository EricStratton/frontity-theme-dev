import React from 'react';
import { connect, Global, css } from 'frontity';

import Layout from './layout';
import themeStyles from './../styles/theme/themeStyles.css';

const Root = ({ state }) => {
  return (
    <>
      <Global styles={css(themeStyles)} />
      <Layout>
        <p>Current URL: {state.router.link}</p>
      </Layout>
    </>
  );
};

export default connect(Root);