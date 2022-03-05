import Root from './components';
import menuHandler from './handlers/menu-handler';


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
        bodyBg: '#f1ddcf',
        elementBg: '#fbfaf5',
      }
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
      processors: [],
    },
    source: {
      handlers: [menuHandler],
    }
  }
};
