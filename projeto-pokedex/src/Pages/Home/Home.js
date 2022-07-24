import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Constants/createContext";
import {
DivContainerPage,
  GlobalStyle,
  Header,
  LogoImage,
  Main,

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
  const { pagination, setPagination} = useContext(Context);
  

 


  const changePages = (turn) => {
    const proxPag = pagination + turn;
  setPagination(proxPag);
   
  };



  return (
    <ChakraProvider>
      <DivContainerPage>
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

        <Main><CardPokemon /></Main>

        <Button
          colorScheme={"twitter"}
          w={"12vw"}
          onClick={() => changePages(1)}
        >
          Muda Página
        </Button>
      </DivContainerPage>
    </ChakraProvider>
  );
}

export default Home;
