import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Constants/createContext";
import {
  DivContainer,
  GlobalStyle,
  Header,
  LogoImage,
  Main,
  ButtonPokedex,
  BoxPokemon,
  DivButtonPoke,
} from "../../Style/HomePageStyle.js";
import Logo from "../../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../Routes/Coordinator";
import { Button } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import CardPokemon from "../../components/CardPokemon/CardPokemon";

function Home() {
  const Navigate = useNavigate();
  const { pagination, setPagination } = useContext(Context);
  

  return (
    <ChakraProvider>
      <DivContainer>
        <GlobalStyle />
        <Header>
          <LogoImage src={Logo} alt="logo"></LogoImage>

          <DivButtonPoke>
            <Button
              colorScheme={"twitter"}
              w={"12vw"}
              onClick={() => goToPage(Navigate, "pokedex")}
            >
              Pokédex
            </Button>
          </DivButtonPoke>
        </Header>

        <Main>
          <CardPokemon />
        </Main>
      </DivContainer>
    </ChakraProvider>
  );
}

export default Home;
