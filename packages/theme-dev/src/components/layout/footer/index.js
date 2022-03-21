import React from 'react';

import {
  FooterContainer,
} from './footer-elements';

const Footer = ({ colors }) => {
  return (
    <FooterContainer color={colors.tumble}>
      This will be the footer.
    </FooterContainer>
  )
}

export default Footer;