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
  Button,
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
  ButtonPokedex,
  DivButtonPoke,
  BoxPokemon,
  DivVazia,
  DivVaziaP,
  DivPokemonsRenderizados,
  Pkebola,
} from "../../Style/PokedexPageStyle";
import PokebolaVazia from "./../../assets/images/pokebola-vazia.png";
import { goToPage } from "../../Routes/Coordinator";
// import { Button, ButtonGroup, omitThemingProps } from '@chakra-ui/react'
// import { ChakraProvider } from '@chakra-ui/react'
import Logo from "../../assets/images/Logo.png";
import Lottie from "react-lottie";
import animationData from "../../lotties/pokebola.json";
import { GetPokemons } from "./../../Hooks/useRequestData";
import { BASE_URL } from "../../Constants/Url";
import { goToPageDetail } from "../../Routes/Coordinator";
import { Container } from "@chakra-ui/react";

function Pokedex() {
  const { pokedex, setPokedex } = useContext(Context);
  const { listaPokedex, setListaPokedex } = useContext(Context);

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
            <Button onClick={() => goToPageDetail(Navigate, pokemon.name)}>
              Detalhes
            </Button>
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
      <GlobalStyle></GlobalStyle>
      <Header>
        <Button
          colorScheme={"twitter"}
          w={"12vw"}
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
    </DivContainerPage>
  );
}

export default Pokedex;
