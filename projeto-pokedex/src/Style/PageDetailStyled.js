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

export const DivContainerDetails = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: url('https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png');
  background-size: cover;
`

export const Header = styled.header`
  background-color: white;
  height: 15vh;
  display: flex;
  justify-content: center;
`
export const LogoImage = styled.img`
  width: 240px;
  height: 80px;
  margin-top: 1vh;
`
export const Main = styled.div`
  width: 100vw;
  height: 85vh;
`
export const DivButtonBack = styled.div`
  position: absolute;
  left: 4vw;
  top: 4vh;
`
