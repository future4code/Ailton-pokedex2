import React from "react";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Constants/createContext";
import { GetPokemons } from "../../Hooks/useRequestData";
import {
  CardRed,
  CardBlue,
  CardGreen,
  CardBrow,
  CardPoison,
  TextId,
  PokemonName,
  DivContainer,
  PokemonImage,
  TypeFire,
  TypeGrass,
  TypeWater,
  TypePoison,
  Button,
  DivButton,
} from "./../../Style/Cards/Cards";
import { goToPageDetail } from "../../Routes/Coordinator";

export default function CardPokemon() {
  const { dataPokemons } = useContext(Context);
  const { pokedex, setPokedex } = useContext(Context);
  const Navigate = useNavigate();

  const addPokemon = (pokemonId) => {
    const newPokedex = [...pokedex, pokemonId];

    setPokedex(newPokedex);
  };

  console.log(pokedex);

  const listPokemon = () => {
    return dataPokemons.map((pokemon) => {
      if (pokemon.types[0].type.name === "grass") {
        return (
          <CardGreen key={pokemon.id}>
            <TextId>#{pokemon.id}</TextId>
            <PokemonName>{pokemon.name}</PokemonName>
            <TypeGrass>Grass</TypeGrass>

            <PokemonImage
              src={pokemon.sprites.other["official-artwork"].front_default}
            ></PokemonImage>
            <DivButton>
              <Button onClick={() => goToPageDetail(Navigate, pokemon.name)}>
                Detalhes
              </Button>
              <Button onClick={() => addPokemon(pokemon.name)}>Capturar</Button>
            </DivButton>
          </CardGreen>
        );
      }

      if (pokemon.types[0].type.name === "fire") {
        return (
          <CardRed key={pokemon.id}>
            <TextId>#{pokemon.id}</TextId>
            <PokemonName>{pokemon.name}</PokemonName>
            <TypeFire>Fire</TypeFire>
            <PokemonImage
              src={pokemon.sprites.other["official-artwork"].front_default}
            ></PokemonImage>
            <button onClick={() => goToPageDetail(Navigate, pokemon.name)}>
              Detalhes
            </button>
          </CardRed>
        );
      }

      if (pokemon.types[0].type.name === "water") {
        return (
          <CardBlue key={pokemon.id}>
            <TextId>#{pokemon.id}</TextId>
            <PokemonName>{pokemon.name}</PokemonName>
            <TypeWater>Water</TypeWater>
            <PokemonImage
              src={pokemon.sprites.other["official-artwork"].front_default}
            ></PokemonImage>
            <button onClick={() => goToPageDetail(Navigate, pokemon.name)}>
              Detalhes
            </button>
          </CardBlue>
        );
      }

      if (pokemon.types[0].type.name === "bug") {
        return (
          <CardPoison key={pokemon.id}>
            <TextId>#{pokemon.id}</TextId>
            <PokemonName>{pokemon.name}</PokemonName>
            <PokemonImage
              src={pokemon.sprites.other["official-artwork"].front_default}
            ></PokemonImage>
            <button onClick={() => goToPageDetail(Navigate, pokemon.name)}>
              Detalhes
            </button>
          </CardPoison>
        );
      }

      if (pokemon.types[0].type.name === "normal") {
        return (
          <CardBrow key={pokemon.id}>
            <TextId>#{pokemon.id}</TextId>
            <PokemonName>{pokemon.name}</PokemonName>
            <PokemonImage
              src={pokemon.sprites.other["official-artwork"].front_default}
            ></PokemonImage>
            <button onClick={() => goToPageDetail(Navigate, pokemon.name)}>
              Detalhes
            </button>
          </CardBrow>
        );
      }
    });
  };

  return (
    <DivContainer>
      {/* {console.log(`${dataPokemons[0]}`)} */}
      {dataPokemons !== 0 ? listPokemon() : <p>...Carregando</p>}
    </DivContainer>
  );
}
