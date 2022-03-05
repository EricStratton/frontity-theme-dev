import React from 'react';
import { connect } from 'frontity';

import {
  ListContainer,
} from './list-elements';

const PostList = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <ListContainer>
      {data.items.map((item) => {
        return (
          <div key={item.id}>
            {item.type} - {item.id} - {item.link}
          </div>
        );
      })}
    </ListContainer>
  )
}

export default connect(PostList);