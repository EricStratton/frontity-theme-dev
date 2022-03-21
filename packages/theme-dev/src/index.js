import Root from './components';

import menuHandler from './handlers/menu-handler';
import card from './processors/card';

export default {
  name: 'theme-dev',
  roots: {
    theme: Root
  },
  state: {
    theme: {
      autoPrefetch: 'in-view',
      menu: [],
      menuUrl: 'main',
      colors: {
        bodyBg: '#eff1f3',
        tumble: '#d8b4a0',
        terra: '#d77a61',
        grey: '#dbd3d8',
        gunmetal: '#223843',
      },
    },
  },
  actions: {
    theme: {
      beforeSSR: async ({ state, actions }) => {
        await actions.source.fetch(`/menu/${state.theme.menuUrl}`);
      },
    },
  },
  libraries: {
    html2react: {
      processors: [card],
    },
    source: {
      handlers: [menuHandler],
    }
  }
};
