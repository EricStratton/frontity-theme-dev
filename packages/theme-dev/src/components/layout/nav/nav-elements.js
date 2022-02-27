import { styled } from 'frontity';

export const NavContainer = styled.nav`
  display: flex;
`;

export const NavItem = styled.div`
  margin: 0 1em;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const NavItemWithChild = styled.div`

`;

export const ChildMenu = styled.div`

`;