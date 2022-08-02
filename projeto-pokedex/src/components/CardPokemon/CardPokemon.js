import React from "react";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Constants/createContext";
import {
  
  DivTypes,
  CardPokemonStyled,
  TextId,
  PokemonName,
  DivContainer,
  PokemonImage,
  ButtonReut,
  ButtonCaptured,
  DivButton,
  DivID,
  ContainerImage,
} from "./../../Style/Cards/Cards";
import { useToast } from '@chakra-ui/react'
import { goToPageDetail } from "../../Routes/Coordinator";
import TypeOfPokemon from "../TypeOfPokemon/TypeOfPokemon";

export default function CardPokemon() {
  const { dataPokemons } = useContext(Context);
  const { pokedex, setPokedex } = useContext(Context);
  const Navigate = useNavigate();
  const toast = useToast()


  const addPokemon = (pokemonName) => {

    const pokemonNameToast = pokemonName

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

      toast({
        title: 'Pokémon capturado !',
        description: `${capitalizeFirstLetter(pokemonNameToast)} capturado !`,
        status: 'success',
        position: 'top',
        duration: 4000,
        isClosable: true,})
    

    const pokemonPokedex = pokedex.some((pokemon) => pokemon === pokemonName);
    const newPokedex = [...pokedex, pokemonName];
    if (!pokemonPokedex) {
      setPokedex(newPokedex);
    }
  };

  const removePokedex = (onPokedex) => {
    const removeDex = pokedex.filter((remove) => {
      return remove.id !== onPokedex.id;
    });
    setPokedex(removeDex);
  };

  const listPokemon = () => {
    return dataPokemons.map((pokemon) => {
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

            {pokedex.includes(pokemon.name) && (
              <ButtonCaptured>Capturado</ButtonCaptured>
            )}

            {pokedex.includes(pokemon.name) || (
              <ButtonReut 
              color={'#02be61'}
              onClick={() => addPokemon(pokemon.name)}>
                Capturar
              </ButtonReut> 
            )}
          </DivButton>
        </CardPokemonStyled>
      );
    });
  };

  return (
    <DivContainer>
      {dataPokemons !== 0 ? listPokemon() : <p>...Carregando</p>}
    </DivContainer>
  );
}
