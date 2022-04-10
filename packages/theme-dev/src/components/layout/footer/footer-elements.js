import { styled } from 'frontity';

export const FooterContainer = styled.footer`
  margin-top: auto;
  min-height: 10em;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
`;

export const FooterWrapper = styled.div`
  flex: 1;
  max-width: clamp(20em, 80vw, 67.5em);
  padding: 1em;

  > .wp-block-group.is-footer .wp-block-columns {

    > .wp-block-column {
    
      > .wp-block-group.footer__content-wrapper {
        display: block;
        margin: 0 auto;
        width: fit-content;

        & h2 {
          margin-bottom: 0.5em;
        }
      }
    }
  }
`;