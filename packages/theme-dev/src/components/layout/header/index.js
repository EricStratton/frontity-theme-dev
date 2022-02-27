import React from 'react';

import Nav from './../nav';
import { 
  HeaderContainer,
  NavWrapper,
} from './header-elements';

const Header = () => {
  return (
    <HeaderContainer>
      <NavWrapper>
        <Nav />
      </NavWrapper>
    </HeaderContainer>
  )
}

export default Header;