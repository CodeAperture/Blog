import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Lato", sans-serif;
  color: #1C1D20;
  background-color: #B2B3B5;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border: 0;
}

a {
  text-decoration: none;
  color: #1C1D20;
}

hr {
  border: 0;
  border-top: 1px solid #ECECED;
  margin: 50px 0 5px 0;
}

ul,
ol {
  padding-left: 2em;
  margin: 1em 0 0 0;
}

*::selection {
  background-color: #ffdc4e;
}
`
export const StyledLink = styled(Link)`
  box-shadow: 0 2px 0 0 #ffdc4e;

  &:hover {
    filter: brightness(150%);
    box-shadow: none;
  }
`

export const Text = styled.p`
  line-height: 1.6;
  margin: 1em 0 0 0;
`

export const Bull = styled.span`
  display: inline-block;
  color: #546c77;
  margin: 0 4px;
  &::before {
    content: '•';
  }
`

const ReadingTimeContainer = styled.span`
  text-transform: uppercase;
  color: #546c77;
`

export const ReadingTime = props => {
  return <ReadingTimeContainer>{props.min} min read</ReadingTimeContainer>
}
