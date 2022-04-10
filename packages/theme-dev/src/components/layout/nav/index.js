import React from 'react';
import { connect } from 'frontity';
import Link from '@frontity/components/link';

import {
  NavContainer,
  NavMenu,
  NavItem,
  NavItemWithChild,
  ChildMenu,
} from './nav-elements';

const Nav = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
  const currentLocation = state.router.link === '/' ? state.router.link : state.router.link.slice(0, -1);
  
  return (
    <NavContainer>
      <NavMenu>
        {items.map((item) => {
          if (!item.child_items) {
            return (
              <NavItem key={item.ID}>
                <Link link={item.url} className={currentLocation === item.url ? 'active' : ''}>
                  {item.title}
                </Link>
              </NavItem>
            );
          } else {
            const childItems = item.child_items;
            return (
              <NavItemWithChild key={item.ID}>
                <NavItem>
                  {item.title}
                </NavItem>
                <ChildMenu>
                  {childItems.map((childItem) => {
                    return (
                      <NavItem key={childItem.ID}>
                        {childItem.title}
                      </NavItem>
                    );
                  })}
                </ChildMenu>
              </NavItemWithChild>
            );
          }
        })}
      </NavMenu>
    </NavContainer>
  )
}

export default connect(Nav);