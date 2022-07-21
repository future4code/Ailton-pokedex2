import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import poke from "../assets/images/poke.svg";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const DivContainerDetails = styled.div`
  width: 100vw;
  height: 100vh;

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

export const CardPokemonStyled = styled.div`
  display: flex;
  padding-bottom: 2rem;
  background-image: url(${poke});
  background-repeat: no-repeat;
  background-position: 30rem;
  width: 80vw;
  height: 70vh;
  background-color: #c40233;
  border-radius: 12px;
  align-items: flex-end;
`;

export const BoxPhotoPoke = styled.div`
  margin: 2rem 0 0 2rem;
  background-color: white;
  width: 12rem;
  height: 12rem;
  border-radius: 12px;
`;

export const BoxPhotoPoke2 = styled.div`
  margin: 2rem 0 0 2rem;
  background-color: white;
  width: 12rem;
  height: 12rem;
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
  margin: 2rem 0 0 2rem;
  background-color: white;
  width: 16rem;
  height: 20rem;
  border-radius: 12px;
`;

export const P = styled.div`
 margin-left: 1rem;
`;
export const PokemonImage= styled.img`

width: 200px;
margin-left: 12rem;
margin-bottom: 21rem;
`