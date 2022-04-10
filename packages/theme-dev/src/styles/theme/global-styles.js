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
  :root {
    /* Fluid Headings */
    --fluid-reduction: 0.5;
    --fluid-view-width: 4vw;
    --type-scale-h1-max: 4.209rem;
    --type-scale-h2-max: 3.157rem;
    --type-scale-h3-max: 2.369rem;
    --type-scale-h4-max: 1.777rem;
    --type-scale-h1-scaler: calc(var(--type-scale-h1-max) - calc(var(--type-scale-h1-max) * var(--fluid-reduction)) + var(--fluid-view-width));
    --type-scale-h2-scaler: calc(var(--type-scale-h2-max) - calc(var(--type-scale-h2-max) * var(--fluid-reduction)) + var(--fluid-view-width));
    --type-scale-h3-scaler: calc(var(--type-scale-h3-max) - calc(var(--type-scale-h3-max) * var(--fluid-reduction)) + calc(var(--fluid-view-width) / 1.5));
    --type-scale-h4-scaler: calc(var(--type-scale-h4-max) - calc(var(--type-scale-h4-max) * var(--fluid-reduction)) + calc(var(--fluid-view-width) / 1.5));
    --type-scale-h1-min: calc(var(--type-scale-h1-max) * var(--fluid-reduction));
    --type-scale-h2-min: calc(var(--type-scale-h2-max) * var(--fluid-reduction));
    --type-scale-h3-min: calc(var(--type-scale-h3-max) * var(--fluid-reduction));
    --type-scale-h4-min: calc(var(--type-scale-h4-max) * var(--fluid-reduction));
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    word-break: break-word;
    word-wrap: break-word;
  }
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
    min-height: calc(100vh - 14em);
  }
  body * {
    line-height: calc(2px + 2ex + 2px);
  }
  h1, h2, h3, h4, p, li {
  overflow-wrap: break-word;
  hyphens: auto;
  }
  h1, h2, h3, h4 {
    margin: 1em 0 0.5em 0;
  }
  h1 {
    font-size: clamp(var(--type-scale-h1-min), var(--type-scale-h1-scaler), var(--type-scale-h1-max));
  }
  h2 {
    font-size: clamp(var(--type-scale-h2-min), var(--type-scale-h2-scaler), var(--type-scale-h2-max));
  }
  h3 {
    font-size: clamp(var(--type-scale-h3-min), var(--type-scale-h3-scaler), var(--type-scale-h3-max));
  }
  h4 {
    font-size: clamp(var(--type-scale-h4-min), var(--type-scale-h4-scaler), var(--type-scale-h4-max));
  }
  P {
    margin: 0 0 0.65em 0;
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
  .wp-block-columns .wp-block-column {
    flex: 1;
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
  /**************
  *** Iframes ***
  **************/
  iframe {
    width: 100%;
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