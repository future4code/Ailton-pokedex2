import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TypeOfPokemon from '../../components/TypeOfPokemon/TypeOfPokemon'

import { Context } from '../../Constants/createContext'
import axios from 'axios'
import {
  DivTypes,
  CardPokemonStyled,
  TextId,
  PokemonName,
  DivContainer,
  PokemonImage,
  Button,
  DivButton
} from './../../Style/Cards/Cards'

import {
  GlobalStyle,
  DivContainerPage,
  Header,
  LogoImage,
  Main,
  ButtonPokedex,
  DivButtonPoke,
  BoxPokemon
} from '../../Style/PokedexPageStyle'
import { goToPage } from '../../Routes/Coordinator'
// import { Button, ButtonGroup, omitThemingProps } from '@chakra-ui/react'
// import { ChakraProvider } from '@chakra-ui/react'
import Logo from '../../assets/images/Logo.png'
import Lottie from 'react-lottie'
import animationData from '../../lotties/pokebola.json'
import { GetPokemons } from './../../Hooks/useRequestData'
import { BASE_URL } from '../../Constants/Url'

function Pokedex() {
  const Navigate = useNavigate()
  const [data, isLoading, error] = GetPokemons(`${BASE_URL}`)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const { pokedex, setPokedex } = useContext(Context)
  const [listaPokedex, setListaPokedex] = useState([])




 const removePokemon = (pokemon) =>{

  const PegaPokemons = JSON.parse(localStorage.getItem("pokemons"))

  PegaPokemons.map((pokemonName)=>{
    console.log(pokemonName, pokemon)
    if(pokemonName.name === pokemon){
    
      localStorage.removeItem(pokemon);

    }

  })


 }


  const listPokedexMap = () => {

   const PegaPokemons = JSON.parse(localStorage.getItem("pokemons"))



    return PegaPokemons?.map((pokemon) => {
      return (
        <CardPokemonStyled key={pokemon.id}>
          <TextId>#{pokemon.id}</TextId>
          <PokemonName>{pokemon.name}</PokemonName>

          <PokemonImage
            src={pokemon.sprites.other['official-artwork'].front_default}
          ></PokemonImage>

          <DivTypes>{TypeOfPokemon(pokemon.types)}</DivTypes>

          <DivButton>

          <Button onClick={() => removePokemon(pokemon.name)}>Remove</Button>

          </DivButton>

        </CardPokemonStyled>
      )
    })
  }

  return (
    <DivContainerPage>

      <Header>
        <Button
          colorScheme={'twitter'}
          w={'12vw'}
          onClick={() => goToPage(Navigate, 'home')}
        >
          Voltar
        </Button>
        <LogoImage src={Logo} alt="logo"></LogoImage>
      </Header>


      <Main>
        {listPokedexMap()}
        </Main>
    </DivContainerPage>
  )
}

export default Pokedex
