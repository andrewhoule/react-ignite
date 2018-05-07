
import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

import { colors, vars } from './';

const baseStyles = () => injectGlobal`
  ${reset}

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${vars.sansSerifFamily};
    font-size: calc(1.6rem + .1vw);
    font-weight: 400;
    line-height: 1.5;
    text-rendering: optimizeLegibility;
  }

  p,
  pre,
  address {
    margin-bottom: ${vars.gap};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    line-height: 1.4;
    margin: 0 0 ${vars.gapSm};
  }

  h1 {
    font-size: calc(2.8rem + .3vw);
  }

  h2 {
    font-size: calc(2.4rem + .3vw);
  }

  h3 {
    font-size: calc(2.1rem + .3vw);
  }

  h4 {
    font-size: calc(1.8rem + .15vw);
  }

  h5 {
    font-size: calc(1.6rem + .15vw);
  }

  h6 {
    font-size: calc(1.4rem + .15vw);
  }

  a {
    outline: none;
    text-decoration: none;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }
`;

export default baseStyles;
