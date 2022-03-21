import React from 'react';
import { connect } from 'frontity';

import {
  NavContainer,
  NavMenu,
  NavItem,
  NavItemWithChild,
  ChildMenu,
} from './nav-elements';

const Nav = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;

  return (
    <NavContainer>
      <NavMenu>
        {items.map((item) => {
          if (!item.child_items) {
            return (
              <NavItem key={item.ID}>
                {item.title} {/* need link item */}
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