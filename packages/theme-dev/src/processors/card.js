import Card from './../components/card';

const card = {
  name: 'card',
  priority: 20,
  test: ({ node }) =>
    node.type === 'element' &&
    node.props?.className?.split(' ').includes('card'),
  processor: ({ node, state }) => {
    const colors = state.theme.colors;
    return {
      component: Card,
      props: {
        colors,
      },
      children: node.children,
    }
  },
}

export default card;