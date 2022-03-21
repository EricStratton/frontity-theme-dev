import { css } from 'frontity';

const cssReset = css`
  * {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  z-index: 1;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const documentSetup = (colors) => css`
  html {
    font-size: 62.5%;
    min-width: 20em;
  }
  body {
    background: ${colors.bodyBg};
    box-sizing: border-box;
    color: #000;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Helvetica Neue",
      Helvetica, sans-serif;
    font-size: 1.8rem;
    letter-spacing: -0.015em;
    text-align: left;
  }
  main {
    display: block;
  }
  h1 {
    font-size: clamp(3.2rem, 2.6760vw - 1.1rem, 4.8rem);
  }
  h2 {
    font-size: clamp(2.6rem, 2.6760vw - 1.1rem, 4.0rem);
  }
  h3 {
    font-size: clamp(2.0rem, 2.6760vw - 1.1rem, 3.2rem);
  }
`;

const accessibilitySettings = css`
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0s !important;
      transition-duration: 0s !important;
    }
  }
`;

const gutembergOverrides = css`
  @media screen and (min-width: 782px) {
    .wp-block-column:not(:first-of-type) {
        margin-left: 1em;
    }
  }
`;

const layoutStyles = (colors) => css`
  /*******************
  ***   General    ***
  ********************/
  .wp-block-column.is-vertically-aligned-center {
    align-self: center;
  }
  .wp-block-group > h2 {
    margin: 0 0 1em 0;
  }
  .wp-block-buttons .wp-block-button {
    display: inline-block;
  }
  .wp-block-image img {
    display: block;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  .wp-block-group .section__info {
    margin-bottom: 2em;
  }
  @media screen and (max-width: 599px) {
    .wp-block-columns .wp-block-column:not(:last-of-type) {
      margin-bottom: 1em;
    }
  }
  /*******************
  *** Hero Targets ***
  ********************/
  .wp-block-group.is-hero::before,
  .wp-block-group.is-hero::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
  .wp-block-group.is-hero::before {
    background-color: ${colors.tumble};
    z-index: 2;
    clip-path: polygon(0 100%, 0 98%, 68% 100%);
  }
  .wp-block-group.is-hero::after {
    background-color: ${colors.grey};
    z-index: -1;
    clip-path: polygon(0 100%, 100% 65%, 100% 100%);
  }
  .wp-block-group .hero-text {
    margin-bottom: 2em;
  }
  .wp-block-group .hero-text .is-hero-heading {
    margin-bottom: 0.5em;
  }
  /***********************
  *** Services Targets ***
  ************************/
  .wp-block-group.is-services::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
  .wp-block-group.is-services::before {
    background-color: ${colors.tumble};
    z-index: 2;
    clip-path: polygon(100% 0, 0 0, 100% 2%);
  }
  .wp-block-group.is-services .wp-block-columns .wp-block-column.is-services__col > p {
    max-width: 26em;
    margin: 0 auto;
  }
`;

const componentStyles = (colors) => css`
  /**************
  *** Buttons ***
  ***************/
  .wp-block-button .wp-block-button__link {
    font-weight: 600;
    transition: 100ms ease-in-out;
  }
  .wp-block-button .wp-block-button__link:hover {
    transform: translateY(-4px);
  }
  .wp-block-button.button--primary .wp-block-button__link {
    background-color: ${colors.terra};
    border: 2px solid ${colors.terra};
  }
  .wp-block-button.button--secondary .wp-block-button__link {
    border: 2px solid ${colors.gunmetal};
    background-color: transparent;
    color: ${colors.gunmetal}
  }
`;

const globalStyle = (colors) =>
  css([
    cssReset,
    documentSetup(colors),
    accessibilitySettings,
    gutembergOverrides,
    layoutStyles(colors),
    componentStyles(colors),
  ]);

export default globalStyle;