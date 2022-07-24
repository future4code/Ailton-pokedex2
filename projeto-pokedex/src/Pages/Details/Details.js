import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../Routes/Coordinator";
import Logo from "../../assets/images/Logo.png";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../Constants/createContext";
import Lottie from "react-lottie";
import animationData from "../../lotties/pokebola.json";


import {
  DivContainerDetails,
  GlobalStyle,
  Header,
  LogoImage,
  Main,
  DivButtonBack,
  CardPokemonStyled,
  BoxPhotoPoke,
  BoxPhotoPoke2,
  BoxStatus,
  BoxMoves,
  PokeImage,
  P,
  PokemonImage,
  Moves,
  Titulos,
  TextId,
  PokemonName,
  PokemonsMoves,
  DivTypes

} from "../../Style/PageDetailStyled";
import { GetPokemons } from "../../Hooks/useRequestData";
import axios from "axios";
import TypeOfPokemon from "../../components/TypeOfPokemon/TypeOfPokemon"

function Details() {
  const params = useParams();
  const Navigate = useNavigate();
  const [dadosPoke, setDadosPoke] = useState();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`)
      .then((res) => {
        setDadosPoke(res.data);

      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.pokemonName]);

  const listPokemon = () => {
    return dadosPoke ? (
      <Main>
        
        <CardPokemonStyled>
          <div>
            <BoxPhotoPoke>
              <PokeImage alt="pokemon" src={dadosPoke.sprites.front_default} />
            </BoxPhotoPoke>
            <BoxPhotoPoke2>
              <PokeImage alt="pokemon" src={dadosPoke.sprites.back_default} />
            </BoxPhotoPoke2>
          </div>
          <BoxStatus>
            <P>HP:{dadosPoke.stats[0].base_stat}</P>
            <P>Attack:{dadosPoke.stats[1].base_stat}</P>
            <P>Defense:{dadosPoke.stats[2].base_stat}</P>
            <P>Sp.Atk:{dadosPoke.stats[3].base_stat}</P>
            <P>Sp.Def:{dadosPoke.stats[4].base_stat}</P>
            <P>Speed:{dadosPoke.stats[5].base_stat}</P>
            <P>Total:{}</P>
          </BoxStatus>
          <div>
          <TextId>Nº#{dadosPoke.id}</TextId>
        <PokemonName>{dadosPoke.name}</PokemonName>
        <DivTypes>{TypeOfPokemon(dadosPoke.types)}</DivTypes>
          <BoxMoves>
            <Titulos>
              <strong>Habilidades</strong>
              <Moves> {dadosPoke.moves[0].move.name}</Moves>
              <Moves> {dadosPoke.moves[1].move.name}</Moves>
              <Moves> {dadosPoke.moves[2].move.name}</Moves>
              <Moves> {dadosPoke.moves[3].move.name}</Moves>
            </Titulos>
          </BoxMoves>
          </div>
          <PokemonImage
            src={dadosPoke.sprites.other["official-artwork"].front_default}
          ></PokemonImage>
        </CardPokemonStyled>
      </Main>
    ) : (
      <div>
        <Lottie options={defaultOptions} height={100} width={100} />
      </div>
    );
  };

  return (
    <ChakraProvider>
      <DivContainerDetails>
        <GlobalStyle />
        <Header>
          <DivButtonBack>
            <Button
              onClick={() => goToPage(Navigate, "home")}
              colorScheme={"twitter"}
              w={"12vw"}
            >
              Voltar
            </Button>
          </DivButtonBack>
          <LogoImage src={Logo} alt="logo"></LogoImage>
        </Header>

        {listPokemon()}
      </DivContainerDetails>
    </ChakraProvider>
  );
}

export default Details;
