import { propNames } from "@chakra-ui/react";
import styled from "styled-components";
import poke from "../../assets/images/poke.svg";
import VT323 from "../../assets/fonts/VT323-Regular.ttf";
import { createGlobalStyle } from "styled-components";

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
export const DivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 50px;
  margin: 10px;
`;

export const DivTypes = styled.div`
  font-family: VT323;
  display: flex;
  margin-top: -30%;
  justify-content: space-between;
`;

export const DivID = styled.div`
  gap: 2rem;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-top: 2vh;
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CardPokemonStyled = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  width: 440px;
  height: 210px;
  background-color: #82d1fd;
  border-radius: 12px;
  background-image: url(${poke});
  background-repeat: no-repeat;
  background-position: 11rem;
  background-size: 18rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    &:hover{
      margin-top: 5px;
    }

`;

export const TextId = styled.p`
  font-family: VT323;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 19px;
  color: #003755;
`;

export const PokemonName = styled.h1`
  font-family: VT323;
  color: #003755;
  margin-top: -20%;
  text-transform: capitalize;
  font-size: 40px;
`;

export const PokemonImage = styled.img`
  margin-right: 1rem;
  width: 150px;
  height: 150px;
`;

export const DivButton = styled.div`
  font-family: VT323;
  display: flex;
  justify-content: space-between;
  /* background-color: blue; */
  margin: 0 1rem 1rem;
`;

export const ButtonReut = styled.button`
  background-color: ${(props)=> props.color};
  border: 0;
  color: white;
  min-width: 10vw;
  border-radius: 0.3rem;
  margin: 0.5rem;
  height: 5vh;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonCaptured = styled.button`
font-family: VT323;
  background-color: red;
  border: 0;
  color: white;
  min-width: 10vw;
  border-radius: 0.3rem;
  margin: 0.5rem;
  height: 5vh;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  &:hover {
    cursor: pointer;
  }
`;
