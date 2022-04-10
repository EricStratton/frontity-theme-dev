import { styled } from 'frontity';

export const CardContainer = styled.div`
  background-color: ${props => props.color}; 
  padding: 1em;
  border-radius: 1em;
  margin: 0 0.5em 1em;
  display: flex;
  flex-direction: column;
  
  & > .wp-block-image {
    align-self: center;
    margin-top: 1em;
  }

  & > .card-text {
    padding: 0.5em 1em;
  }
`;