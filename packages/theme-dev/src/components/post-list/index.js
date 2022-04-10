import React from 'react';
import { connect } from 'frontity';

import Post from './../post';
import {
  ListContainer,
} from './list-elements';

const PostList = ({ state, data }) => {

  return (
    <ListContainer>
      <main>
        {data.items.map((item) => {
          const post = state.source[item.type][item.id];
          return (
          <Post key={item.id} post={post} />
          )
        })}
      </main>
    </ListContainer>
  )
}

export default connect(PostList);