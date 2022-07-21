import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../Routes/Coordinator";
import Logo from "../../assets/images/Logo.png";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../Constants/createContext";

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
} from "../../Style/PageDetailStyled";
import { GetPokemons } from "../../Hooks/useRequestData";
import axios from "axios";

function Details() {
  const params = useParams();
  const Navigate = useNavigate();
  const [dadosPoke, setDadosPoke] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`)
      .then((res) => {
        setDadosPoke(res.data.data);
        console.log("efect:", res)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.pokemonName]);
  console.log("Aqui", dadosPoke)
  
  const listPokemon = () => {
    return dadosPoke && dadosPoke.map((pokemon) => {
      return (
        <Main>
          <CardPokemonStyled>
            <div>
              <BoxPhotoPoke>
                <PokeImage alt="pokemon" src={pokemon.sprites.front_default} />
              </BoxPhotoPoke>
              <BoxPhotoPoke2>
                <PokeImage alt="pokemon" src={pokemon.sprites.back_default} />
              </BoxPhotoPoke2>
            </div>
            <BoxStatus>
              <P>HP:{pokemon.stats[0].base_stat}</P>
              <P>Attack:{pokemon.stats[1].base_stat}</P>
              <P>Defense:{pokemon.stats[2].base_stat}</P>
              <P>Sp.Atk:{pokemon.stats[3].base_stat}</P>
              <P>Sp.Def:{pokemon.stats[4].base_stat}</P>
              <P>Speed:{pokemon.stats[5].base_stat}</P>
              <P>Total:{}</P>
            </BoxStatus>
            <h3>{pokemon.id} </h3>
            <BoxMoves></BoxMoves>
            <PokemonImage
              src={pokemon.sprites.other["official-artwork"].front_default}
            ></PokemonImage>
          </CardPokemonStyled>
        </Main>
      );
    });
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
