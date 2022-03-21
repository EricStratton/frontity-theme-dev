import React from 'react';
import { connect } from 'frontity';

import Header from './header';
import Footer from './footer';

const Layout = ({ state, children }) => {
  const colors = state.theme.colors;
  
  return (
    <>
      <Header colors={colors} />
        {children}
      <Footer colors={colors} />
    </>
  )
}

export default connect(Layout);