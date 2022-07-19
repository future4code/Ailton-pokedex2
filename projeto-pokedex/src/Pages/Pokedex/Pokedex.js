import React from "react";
import { useNavigate } from "react-router-dom";
import {
  DivContainer,
  GlobalStyle,
  Header,
  LogoImage,
  Main,
  ButtonPokedex,
  DivButtonPoke,
  BoxPokemon,
} from "../../Style/PokedexPageStyle";
import { goToPage } from "../../Routes/Coordinator";
import { Button, ButtonGroup, omitThemingProps } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Logo from "../../assets/images/Logo.png";
import Lottie from "react-lottie";
import animationData from "../../lotties/pokebola.json";
import { GetPokemons } from "./../../Hooks/useRequestData";
import { BASE_URL } from "../../Constants/Url";

function Pokedex() {
  const Navigate = useNavigate();
  const [data, isLoading, error] = GetPokemons(`${BASE_URL}`);
  const [detailPokemon, setDetailPokemon] = GetPokemons(`${BASE_URL}`)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const listPokemon =
    data &&
    data.map((pokemon) => {
      return (
        <BoxPokemon key={pokemon.name}>
          <h2>
            <strong>{pokemon.name}</strong>
          </h2>
        </BoxPokemon>
      );
    });

  return (
    <ChakraProvider>
      <DivContainer>
        <Header>
          <Button
            colorScheme={"twitter"}
            w={"12vw"}
            onClick={() => goToPage(Navigate, "home")}
          >
            Voltar
          </Button>
          <LogoImage src={Logo} alt="logo"></LogoImage>

          <Button
            colorScheme={"twitter"}
            w={"12vw"}
            onClick={() => goToPage(Navigate, "details")}
          >
            Detalhes Pokémon
          </Button>
        </Header>
        {/* <Lottie options={defaultOptions} height={100} width={100} /> */}
        <Main>
          {isLoading && (
            <Lottie options={defaultOptions} height={100} width={100} />
          )}
          {!isLoading && error && <p>{error.message}</p>}
          {!isLoading && data && data.length >= 12 && listPokemon}
          {!isLoading && data && data.length === 0 && <p>Não há dados</p>}
        </Main>
      </DivContainer>
    </ChakraProvider>
  );
}

export default Pokedex;
