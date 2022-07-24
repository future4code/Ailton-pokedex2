import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import VT323 from "../assets/fonts/VT323-Regular.ttf"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
export const DivVazia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;
export const DivVaziaP = styled.p`
  font-size: 4rem;
  @font-face {
    font-family: "VT323";
    src: url(${VT323});
  }
  font-family: VT323;
`;

export const DivPokemonsRenderizados = styled.div` 
display: flex; 
flex-wrap: wrap; 
justify-content: center; 
gap: 5vw;` 


export const DivContainerPage = styled.div`
  width: 100vw;
  height: 100%;
  background-size: cover;
  background-color: black;
  background-image: url("https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png");
`;

export const BoxPokemon = styled.div`
  padding: 1rem;
  width: 20rem;
  height: 10rem;
  border: 1px solid black;
`;

export const Header = styled.header`
  background-color: white;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogoImage = styled.img`
  width: 240px;
  height: 80px;
  margin-top: 1vh;
  margin-right: 2vw;

`;
export const DivButtonPoke = styled.div`
  position: absolute;
  right: 4vw;
  top: 4vh;
  margin-left: 1vw;
`;
export const Pkebola = styled.img`
  width: 50%;

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
`;

export const Main = styled.div`
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100vw;
  min-height: 85vh;
`;
export const ButtonCaptured = styled.button`
  background-color: red;
  color: white;
  width: 8vw;
  border-radius: 0.3rem;
  margin: 0.5rem;
  height: 5vh;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  &:hover {
    cursor: pointer;
  }
`;