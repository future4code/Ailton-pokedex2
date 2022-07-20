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
import { Button, ButtonGroup, list } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { GetPokemons} from "./../../Hooks/useRequestData";
import { BASE_URL } from "../../Constants/Url";
import axios from "axios";



function Home() {
  const Navigate = useNavigate();
  const {listNamePokemons} = useContext(Context)
  const {dataPokemons} = useContext(Context)

  console.log("aqqquiiiii:", dataPokemons)
    const listPokemon = () => {
    return (
      listNamePokemons &&
      listNamePokemons.map((pokemon) => {
        return (
          <BoxPokemon key={pokemon.name}>
            <p>{pokemon.url}</p>
            <h2>
              <strong>{pokemon.name}</strong>
            </h2>
          </BoxPokemon>
        );
      })
    );
  };


 


  
  // console.log("DataHome:", dataPokemons)

  // console.log(dataPokemons)
  //   const poke = () => {
  //   const listaPokemons = []
  //   ctx.pokemons.results &&
  //   ctx.pokemons.results.map((pokemon) => {
  //         axios
  //           .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
  //           .then((res) => {
  //             listaPokemons.push(res.data)
  //             if (listaPokemons.length === 20) {
  //               setDadosPokemon(listaPokemons)
  //             }
  //             console.log(res.data)
  //           })
  //           .catch((err) => {
  //             console.log(err)
  //           })
  
  //     })
  //   }
  


  return (
    <ChakraProvider>
      {/* {console.log(pokemons.pokemons.results)} */}
      {/* {console.log(detail)}  */}
      {/* {console.log(pokemons)} */}
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
          {/* <button onClick={() => poke() }>Dados</button> */}
          {/* {isLoading && (
            <Lottie options={defaultOptions} height={100} width={100} />
          )}
          {!isLoading && error && <p>{error.message}</p>}
          {!isLoading && data && data.length >= 12 && listPokemon}
          {!isLoading && data && data.length === 0 && <p>Não há dados</p>} */}

          {/* {ctx.pokemons !== undefined ? listPokemon() : <p>Sem pokémons</p>} */}
          {listPokemon()}
        </Main>
      </DivContainer>
    </ChakraProvider>
  );
}

export default Home;
