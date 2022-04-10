import React from 'react';
import { connect } from 'frontity';

import Nav from './../nav';
import { 
  HeaderContainer,
  NavWrapper,
} from './header-elements';

const Header = ({ state }) => {
  const colors = state.theme.colors;

  return (
    <HeaderContainer color={colors.grey}>
      <NavWrapper>
        <Nav />
      </NavWrapper>
    </HeaderContainer>
  )
}

export default connect(Header);