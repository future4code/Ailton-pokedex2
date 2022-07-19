import React from 'react'
import styled from 'styled-components'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const DivContainerIntro = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: url('https://cutewallpaper.org/21/desktop-background-gif/Pokemon-Gold-Desktop-Background-Animation-Album-on-Imgur.gif');
  background-size: cover;
`
