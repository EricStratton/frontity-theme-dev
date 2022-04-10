import { styled } from 'frontity';

export const NavContainer = styled.nav`
  display: flex;
  height: 100%;
`;

export const NavMenu = styled.ul`
  flex: 1;
  height: 100%;
`;

export const NavItem = styled.li`
  display: inline-flex;
  height: 100%;
  margin: 0 1em;
  font-size: 2rem;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }

  > a {
    text-decoration: none;
    color: black;
    align-self: center;
    transition: 100ms ease-in-out;
    &:hover {
      transform: translateY(-4px);
    }
    &.active {
      border-bottom: 2px solid #d77a61;
    }
  }
`;

export const NavItemWithChild = styled.li`

`;

export const ChildMenu = styled.div`

`;