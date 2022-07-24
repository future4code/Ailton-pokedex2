import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Constants/createContext";
import {
DivContainerPage,
  GlobalStyle,
  TextHome,
  Header,
  LogoImage,
  Main,
  DivButtonChange,
  DivButtonPoke,
  DivPagination,
} from "../../Style/HomePageStyle.js";
import Logo from "../../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../Routes/Coordinator";
import { ChakraProvider, Button } from "@chakra-ui/react";
import CardPokemon from "../../components/CardPokemon/CardPokemon";
import HeaderImage from './../../assets/images/header.jpg'

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

        <Main>
          <TextHome>Escolha seus pokémons !</TextHome>
          <CardPokemon /></Main>
        <DivButtonChange>

        <Button
          colorScheme={"purple"}
          w={"12vw"}
          onClick={() => changePages(1)}
        >
          Próxima Página
        </Button>
          <DivPagination><Button
           colorScheme={"purple"}
           marginLeft={'4px'}>{`${pagination}`}</Button></DivPagination>
        </DivButtonChange>
      </DivContainerPage>
    </ChakraProvider>
  );
}

export default Home;
