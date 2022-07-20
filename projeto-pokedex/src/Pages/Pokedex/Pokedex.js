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
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


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

        </Header>
        {/* <Lottie options={defaultOptions} height={100} width={100} /> */}
        <Main>

        </Main>
      </DivContainer>
    </ChakraProvider>
  );
}

export default Pokedex;
