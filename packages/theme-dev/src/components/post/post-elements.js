import { styled } from 'frontity';

export const PostContainer = styled.section`
  position: relative;
  width: 100%;
  padding: 2em 0;
  min-height: 40em;
  display: flex;
  align-items: center;
`;

export const PostWrapper = styled.div`
  margin: 0 auto;
  flex: 1;
  max-width: clamp(20em, 80vw, 67.5em);
`;

export const PostHeading = styled.h2`
  margin: 1.5em 0 1em 0;
  text-align: center;
`;

export const PostContent = styled.div`
  
`;