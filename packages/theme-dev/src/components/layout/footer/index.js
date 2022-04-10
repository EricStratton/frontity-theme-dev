import React from 'react';
import { connect } from 'frontity';

import {
  FooterContainer,
  FooterWrapper,
} from './footer-elements';

const Footer = ({ state, libraries }) => {
  const colors = state.theme.colors;
  const data = state.source.get(`/footer/${state.theme.footerUrl}`);
  const footer = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  return (
    <FooterContainer color={colors.tumble}>
      <FooterWrapper>
        <Html2React html={footer.content.rendered}/>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default connect(Footer);