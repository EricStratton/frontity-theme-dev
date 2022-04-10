import React from 'react';
import { connect, Global, css } from 'frontity';
import gutembergStyle from './../styles/gutemberg/style.css';
import gutembergTheme from './../styles/gutemberg/theme.css';

import { fixCss } from './../helpers/css';
import globalStyle from '../styles/theme/global-styles';
import Layout from './layout';
import PostList from './post-list';

const Root = ({ state }) => {
  const colors = state.theme.colors;
  const fixedGutembergStyle = fixCss(gutembergStyle);
  const fixedGutembergTheme = fixCss(gutembergTheme);
  const data = state.source.get(state.router.link);

  return (
    <>
      <Global styles={css(fixedGutembergStyle)} />
      <Global styles={css(fixedGutembergTheme)} />
      <Global styles={globalStyle(colors)} />
      <Layout>
          <PostList data={data} />
      </Layout>
    </>
  );
};

export default connect(Root);