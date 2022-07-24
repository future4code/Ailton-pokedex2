import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TypeOfPokemon from "../../components/TypeOfPokemon/TypeOfPokemon";
import { Context } from "../../Constants/createContext";
import axios from "axios";
import {
  DivTypes,
  CardPokemonStyled,
  TextId,
  PokemonName,
  PokemonImage,
  ButtonReut,
  DivButton,
  ButtonCaptured,
  ContainerImage,
  DivID,
} from "./../../Style/Cards/Cards";

import {
  GlobalStyle,
  DivContainerPage,
  Header,
  LogoImage,
  Main,
  DivVazia,
  DivVaziaP,
  DivPokemonsRenderizados,
  Pkebola,
} from "../../Style/PokedexPageStyle";
import PokebolaVazia from "./../../assets/images/pokebola-vazia.png";
import { goToPage } from "../../Routes/Coordinator";
import { Button, ButtonGroup, omitThemingProps, useToast } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import Logo from "../../assets/images/Logo.png";
import Lottie from "react-lottie";
import animationData from "../../lotties/pokebola.json";
import { goToPageDetail } from "../../Routes/Coordinator";


function Pokedex() {
  const { pokedex, setPokedex } = useContext(Context);
  const { listaPokedex, setListaPokedex } = useContext(Context);
  const toast = useToast()


  const Navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const getPokedex = () => {
    const pokedexlistP = [];
    pokedex?.forEach((pokemon) =>
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((res) => {
          pokedexlistP.push(res.data);
          setListaPokedex(pokedexlistP);
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };
  useEffect(() => {
    getPokedex();
  }, [pokedex]);

  const removePokedex = (onPokedex) => {

    const pokemonNameToast = onPokedex

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    toast({
      title: 'Pokémon removido !',
      description: `${capitalizeFirstLetter(pokemonNameToast)} removido !`,
      status: 'error',
      position: 'top',
      duration: 4000,
      isClosable: true,})


    const newPokedex = listaPokedex.filter((pokedex) => {
      return onPokedex !== pokedex.name;
    });
    setListaPokedex(newPokedex);
    setPokedex(newPokedex);
  };

  const listPokedex = () => {
    return listaPokedex?.map((pokemon) => {
      return (
        <CardPokemonStyled key={pokemon.id}>

          <ContainerImage>
            <DivID>
              <TextId>#{pokemon.id}</TextId>
              <PokemonName>{pokemon.name}</PokemonName>
              <DivTypes>{TypeOfPokemon(pokemon.types)}</DivTypes>
            </DivID>
            <PokemonImage
              src={pokemon.sprites.other["official-artwork"].front_default}
            ></PokemonImage>
          </ContainerImage>

          <DivButton>
            <ButtonReut 
            color={'#006b76'}
            onClick={() => goToPageDetail(Navigate, pokemon.name)}>
              Detalhes
            </ButtonReut>
            <ButtonCaptured onClick={() => removePokedex(pokemon.name)}>
              Remover
            </ButtonCaptured>
          </DivButton>
        </CardPokemonStyled>
      );
    });
  };

  return (
    <DivContainerPage>         
       <ChakraProvider>
            
    
      <GlobalStyle></GlobalStyle>
      <Header>
        <Button
          colorScheme={"twitter"}
          w={"12vw"}
          marginLeft={2}
          onClick={() => goToPage(Navigate, "home")}
        >
          Voltar
        </Button>
        <LogoImage src={Logo} alt="logo"></LogoImage>
      </Header>
      {/* <Lottie options={defaultOptions} height={100} width={100} /> */}

      <Main>
        {listaPokedex.length === 0 ? (
          <DivVazia>
            <Pkebola alt="pokebola-vazia" src={PokebolaVazia}></Pkebola>
            <DivVaziaP>Pokebola Vazia</DivVaziaP>
          </DivVazia>
        ) : (
          <DivPokemonsRenderizados>{listPokedex()}</DivPokemonsRenderizados>
        )}
      </Main>
    </ChakraProvider>
    </DivContainerPage>
  );
}

export default Pokedex;