import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import poke from "../assets/images/poke.svg";
import VT323 from "./../../src/assets/fonts/VT323-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
      font-family: 'VT323' ;
      src: url(${VT323});
    }
`;

export const DivContainerDetails = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: url("https://i.pinimg.com/originals/df/4e/8b/df4e8ba28f912bf9cdf9fa0dfc196411.png");
  background-size: cover;
`;

export const Header = styled.header`
  background-color: white;
  height: 15vh;
  display: flex;
  justify-content: center;
`;
export const LogoImage = styled.img`
  width: 240px;
  height: 80px;
  margin-top: 1vh;
`;
export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: center;
  width: 100vw;
  height: 85vh;
`;
export const DivButtonBack = styled.div`
  position: absolute;
  left: 4vw;
  top: 4vh;
`;

export const CardInterno = styled.div`
  display: flex;
`;
export const CardPokemonStyled = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  display: flex;

  width: 80vw;
  height: 70vh;
  background-color: #0096a6;
  border-radius: 12px;
  background-image: url(${poke});
  background-repeat: no-repeat;
  background-position: 20rem;
  background-size: 80%;
`;

export const BoxPhotoPoke = styled.div`
  margin: 2rem 0 0 2rem;
  background-color: white;
  width: 10rem;
  border-radius: 12px;
`;

export const BoxStatus = styled.div`
  margin: 2rem 0 0 2rem;
  background-color: white;
  width: 16rem;
  height: 26rem;
  border-radius: 12px;
`;

export const PokeImage = styled.img`
  width: 18rem;
`;

export const BoxMoves = styled.div`
  display: flex;
  margin: 2rem 0 0 2rem;
  background-color: white;
  width: 16rem;
  height: 18rem;
  border-radius: 12px;
`;

export const P = styled.p`
  margin: 1rem;
`;
export const PokemonImage = styled.img``;

export const Titulos = styled.h3`
  margin: 1rem;
`;

export const TextId = styled.p`
  font-family: "VT323";
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #003755;
`;

export const PokemonName = styled.p`
  font-family: "VT323";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #003755;
`;

export const ContID = styled.div`
margin-left:2rem;
padding-top: 2rem;

`

export const Moves = styled.div`
  padding-left: 1rem;
  background-color: #bbbbbb;
  margin-top: 1rem;
  width: 10rem;
  height: 31px;
  border-radius: 8px;
  color: white;
  border: 1px dashed rgba(255, 255, 255, 0.47);
  &:hover{
      margin-top: 5px;
    }
`;
export const DivTypes = styled.div`
font-family: "VT323";
margin-right: 1rem;
color: #003755;
`;


export const PokemonsTypes = styled.div`
display: flex;
  background-color: ${(props) => props.color};
 
  
 
`;