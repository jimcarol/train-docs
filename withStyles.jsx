// https://styled-components.com/docs/basics

import styled, { css } from 'styled-components'

const colorVariables = `
    :root {
        --coolGray500-color: #333;
        --coolGray400-color: #444;
        
        
        
        
        --primary-color: var(--coolGray500-color)
        --seconday-color: var(--coolGray400-color)
    }
`

// default
const HeroFontStyle = `
    color: var(--primary-color);
`

const H1FontStyle = `
    color: blue
`

// indivadule setting
const withStyles = (fontType) => (Component) => {
    return styled(Component)`
        ${fontType}
    `
}


// global setting
const withGlobalStyles = (Component) => styled(Component)`
    .tbHero {
        ${HeroFontStyle}
    }

    h1, .tbH1 {
        ${H1FontStyle}
    }
`


// example 
const Link = ({ className, children }) => (
    <a className={className}>
      {children}
    </a>
  );
  
 
const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
  h1, .cc {
    ${H1FontStyle}
  }
`;
  
const StyledLink2 = withStyles(H1FontStyle)("div")

render(
  <div>
    <Link>Unstyled, boring Link</Link>
    <br />
    <StyledLink2><h2 className='cc'>Styled2</h2>, exciting Link</StyledLink2>
    <StyledLink>Styled1</StyledLink>
  </div>
);
