import React from 'react';

import Nav from './../nav';
import { 
  HeaderContainer,
  NavWrapper,
} from './header-elements';

const Header = ({ colors }) => {
  return (
    <HeaderContainer color={colors.grey}>
      <NavWrapper>
        <Nav />
      </NavWrapper>
    </HeaderContainer>
  )
}

export default Header;