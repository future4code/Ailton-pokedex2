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

  const addPokemon = (pokemonName) => {
    const pokemonPokedex = pokedex.some((pokemon) => pokemon === pokemonName)
    const newPokedex = [...pokedex, pokemonName]
    if (!pokemonPokedex) {
      setPokedex(newPokedex)
    }
  }

  const removePokedex = (onPokedex) => {
    const removeDex = pokedex.filter((remove) => {
      return remove.id !== onPokedex.id
    })
    setPokedex(removeDex)
  }

  // console.log('CardPokemon',pokedex)
  const listPokemon = () => {
    return dataPokemons.map((pokemon) => {
      return (
        <CardPokemonStyled key={pokemon.id}>
          <TextId>NÂº#{pokemon.id}</TextId>
          <PokemonName>{pokemon.name}</PokemonName>

          <PokemonImage
            src={pokemon.sprites.other['official-artwork'].front_default}
          ></PokemonImage>
          <DivTypes>{TypeOfPokemon(pokemon.types)}</DivTypes>
          <DivButton>
            <Button onClick={() => goToPageDetail(Navigate, pokemon.name)}>
              Detalhes
            </Button>

            {pokedex.includes(pokemon.name) && (
              <ButtonCaptured onClick={() => removePokedex(pokemon.name)}>
                Remover !
              </ButtonCaptured>
            )}

            {pokedex.includes(pokemon.name) || (
              <Button onClick={() => addPokemon(pokemon.name)}>
                Capturar!
              </Button>
            )}
          </DivButton>
        </CardPokemonStyled>
      )
    })
  }

  return (
    <DivContainer>
      {dataPokemons !== 0 ? listPokemon() : <p>...Carregando</p>}
    </DivContainer>
  )
}
