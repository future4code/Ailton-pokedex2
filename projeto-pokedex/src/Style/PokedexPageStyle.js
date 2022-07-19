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
/* background-image: url('https://guikao.files.wordpress.com/2012/01/pokemon_wallpaper01_1680.jpg');
https://br.pinterest.com/pin/750693831619055182/ */
/* background-image: url('https://cdn.dribbble.com/users/1407587/screenshots/3014076/media/ef5ebb3df0fc3474f1a9e4f49c32ddf8.gif'); */
background-size: cover;
background-image: url('https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png');


`

export const BoxPokemon = styled.div`
padding:1rem ;
width: 20rem;
height: 10rem;
border: 1px solid black;

`


export const Header = styled.header`

background-color: white ;
height: 15vh;
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem;
`
export const LogoImage = styled.img`
width: 240px;
height: 80px;
margin-top: 1vh;
`
export const DivButtonPoke = styled.div`

position: absolute;
right: 4vw;
top: 4vh;

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
padding-top: 1rem;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap: 1rem;
width: 100vw;
height: 85vh;
`