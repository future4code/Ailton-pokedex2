import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    /* box-sizing: border-box; */
  }
`

export const DivContainer = styled.div`
  background-image: url('https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png');
  overflow: scroll;
  position: absolute;
  width: 100vw;
  height: 100vh;
`
export const Header = styled.header`
  background-color: white;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
export const LogoImage = styled.img`
  width: 240px;
  height: 80px;
  margin-top: 1vh;
`
export const DivButtonPoke = styled.div`
  position: absolute;
  right: 2rem;
`

export const ButtonPokedex = styled.button`
  background-color: lightskyblue;
  color: white;
  width: 10vw;
  border-radius: 15px;
  height: 5vh;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  &:hover {
    cursor: pointer;
  }
`

export const Main = styled.div`
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100vw;
  height: 85vh;
`
