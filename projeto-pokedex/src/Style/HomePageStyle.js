import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;



export const DivContainer = styled.div`

width: 100vw;
height: 100vh;
background-image: url('https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png');
background-size: cover;


`

export const Header = styled.header`

background-color: white ;
height: 15vh;
display: flex;
justify-content: center;
align-items: center;
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

&:hover{

  cursor: pointer;

}

`

export const Main = styled.div`

width: 100vw;
height: 85vh;
`

export const BoxPokemon = styled.div`
padding:1rem ;
width: 20rem;
height: 10rem;
border: 1px solid black;

`