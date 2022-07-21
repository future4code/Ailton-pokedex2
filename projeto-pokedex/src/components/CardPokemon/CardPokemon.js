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
  Button,
  ButtonCaptured,
  DivButton,
} from "./../../Style/Cards/Cards";
import { goToPageDetail } from "../../Routes/Coordinator";
import TypeOfPokemon from '../TypeOfPokemon/TypeOfPokemon';


export default function CardPokemon() {
  const { dataPokemons } = useContext(Context);
  const { pokedex, setPokedex } = useContext(Context);
  const Navigate = useNavigate();
  const [pokedexTeste, setPokedexTeste] = useState([]);

  const addPokemon = (pokemonId) => {
      // console.log(pokemonId)
      
   const mapeia = pokedexTeste?.map((pokemon)=>{

    if(pokemonId === pokemon){

      return <button>Capturado !</button>

    }else{

      return <button>Capturar Pokémon</button>

    }



   })

 
  };


  const listPokemon = () => {
    
    return dataPokemons.map((pokemon) => {

        return (
          <CardPokemonStyled key={pokemon.id}>
            <TextId>Nº#{pokemon.id}</TextId>
            <PokemonName>{pokemon.name}</PokemonName>

             

            <PokemonImage
              src={pokemon.sprites.other["official-artwork"].front_default}
            ></PokemonImage>
            <DivButton>
              <Button onClick={() => goToPageDetail(Navigate, pokemon.name)}>
                Detalhes
              </Button>
              <DivTypes>

              {TypeOfPokemon(pokemon.types)}

              </DivTypes>

             {addPokemon(pokemon.name)}
            </DivButton>
          </CardPokemonStyled>
        );
      })}


  return (
    <DivContainer>
      {dataPokemons !== 0 ? listPokemon() : <p>...Carregando</p>}
    </DivContainer>
  );
}
