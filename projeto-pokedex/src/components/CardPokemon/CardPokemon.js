import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Constants/createContext'
import {
  DivTypes,
  CardPokemonStyled,
  TextId,
  PokemonName,
  DivContainer,
  PokemonImage,
  Button,
  ButtonCaptured,
  DivButton
} from './../../Style/Cards/Cards'
import { goToPageDetail } from '../../Routes/Coordinator'
import TypeOfPokemon from '../TypeOfPokemon/TypeOfPokemon'

export default function CardPokemon() {
  const { dataPokemons } = useContext(Context)
  const { pokedex, setPokedex } = useContext(Context)
  const Navigate = useNavigate()

  const addPokemon = (pokemonDetail) => {
    const pokemonPokedex = pokedex.some((pokemon) => pokemon === pokemonDetail)
    const newPokedex = [...pokedex, pokemonDetail]
    if (!pokemonPokedex) {
      setPokedex(newPokedex)
      localStorage.setItem("pokemons", JSON.stringify(newPokedex))
      console.log(pokedex)
    }
  }

  const listPokemon = () => {

    
   const PegaPokemons = JSON.parse(localStorage.getItem("pokemons"))


    return dataPokemons.map((pokemon) => {
      return (
        <CardPokemonStyled key={pokemon.id}>
          <TextId>NÂº#{pokemon.id}</TextId>
          <PokemonName>{pokemon.name}</PokemonName>

          <PokemonImage
            src={pokemon.sprites.other['official-artwork'].front_default}
          ></PokemonImage>
          <DivButton>
            <Button onClick={() => goToPageDetail(Navigate, pokemon.name)}>
              Detalhes
            </Button>
            <DivTypes>{TypeOfPokemon(pokemon.types)}</DivTypes>

            {/* {PegaPokemons.includes(pokemon.name) && (
              <ButtonCaptured>Capturado !</ButtonCaptured>
            )}

            {PegaPokemons.includes(pokemon.name) || ( */}

              <Button onClick={() => addPokemon(pokemon)}>
                Capturar!
              </Button>
            {/* )} */}
          </DivButton>
        </CardPokemonStyled>
      )
    })
  }

  return (
    <DivContainer>
      {console.log('pokedex', pokedex)}
      {dataPokemons !== 0 ? listPokemon() : <p>...Carregando</p>}
    </DivContainer>
  )
}
