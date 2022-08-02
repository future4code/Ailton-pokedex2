import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../Routes/Coordinator";
import Logo from "../../assets/images/Logo.png";
import { ChakraProvider } from "@chakra-ui/react";
import { Progress } from '@chakra-ui/react'
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
  DivTypes,
  CardInterno,
  ContID,
  PokemonsTypes
} from "../../Style/PageDetailStyled";
import { GetPokemons } from "../../Hooks/useRequestData";
import axios from "axios";
import TypeOfPokemon from "../../components/TypeOfPokemon/TypeOfPokemon2";

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
        <CardPokemonStyled >
          <CardInterno>
            <div>
              <BoxPhotoPoke>
                <PokeImage
                  alt="pokemon"
                  src={dadosPoke.sprites.front_default}
                />
              </BoxPhotoPoke>
              <BoxPhotoPoke>
                <PokeImage alt="pokemon" src={dadosPoke.sprites.back_default} />
              </BoxPhotoPoke>
            </div>
            <BoxStatus>
              <P><strong>HP:</strong><Progress hasStripe value={dadosPoke.stats[0].base_stat} /></P>
              <P><strong>Attack:</strong><Progress hasStripe value={dadosPoke.stats[1].base_stat} /></P>
              <P><strong>Defense:</strong><Progress hasStripe value={dadosPoke.stats[2].base_stat} /></P>
              <P><strong>Sp.Atk:</strong><Progress hasStripe value={dadosPoke.stats[3].base_stat} /></P>
              <P><strong>Sp.Def:</strong><Progress hasStripe value={dadosPoke.stats[4].base_stat} /></P>
              <P><strong>Speed:</strong><Progress hasStripe value={dadosPoke.stats[5].base_stat} /></P>
              <P><strong>Total:</strong><Progress hasStripe value={dadosPoke.stats[0].base_stat+dadosPoke.stats[1].base_stat+dadosPoke.stats[2].base_stat+
            dadosPoke.stats[3].base_stat+dadosPoke.stats[4].base_stat+dadosPoke.stats[5].base_stat}/>{dadosPoke.stats[0].base_stat+dadosPoke.stats[1].base_stat+dadosPoke.stats[2].base_stat+
              dadosPoke.stats[3].base_stat+dadosPoke.stats[4].base_stat+dadosPoke.stats[5].base_stat}</P>
            </BoxStatus>
            <div>
              <ContID>
                <TextId>Nº#{dadosPoke.id}</TextId>
                <PokemonName>{dadosPoke.name}</PokemonName>
                <PokemonsTypes>{TypeOfPokemon(dadosPoke.types)}</PokemonsTypes>
              </ContID>
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
          </CardInterno>

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
