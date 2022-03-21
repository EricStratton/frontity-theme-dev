import { styled } from 'frontity';

export const NavContainer = styled.nav`
  display: flex;
`;

export const NavMenu = styled.ul`
  flex: 1;
`;

export const NavItem = styled.li`
  display: inline;
  margin: 0 1em;
  font-size: 2rem;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const NavItemWithChild = styled.li`

`;

export const ChildMenu = styled.div`

`;