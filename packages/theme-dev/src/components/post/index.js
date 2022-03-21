import React from 'react';
import { connect } from 'frontity';

import {
  PostContainer,
  PostWrapper,
  PostContent,
} from './post-elements';

const Post = ({ libraries, post }) => {
  console.log('POST:', post);
  const Html2React = libraries.html2react.Component;

  return (
    <PostContainer id={post.slug}>
      <PostWrapper>
        <PostContent>
          <Html2React html={post.content.rendered} />
        </PostContent>
      </PostWrapper>
    </PostContainer>
  )
}

export default connect(Post);