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
  DivButton,
  ButtonCaptured
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
import { goToPageDetail } from '../../Routes/Coordinator'

function Pokedex() {
  const Navigate = useNavigate()
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

  const getPokedex = () => {
    const pokedexlistP = []
    pokedex?.forEach((pokemon) =>
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((res) => {
          pokedexlistP.push(res.data)
          setListaPokedex(pokedexlistP)
        })
        .catch((err) => {
          console.log(err)
        })
    )
  }
  useEffect(() => {
    getPokedex()
  }, [pokedex])

  const removePokedex = (onPokedex) => {
    const removeDex = pokedex.filter((remove) => {
      return remove.id !== onPokedex.id
    })
    setPokedex(removeDex)
    getPokedex()
  }
  const listPokedex = () => {
    return listaPokedex?.map((pokemon) => {
      return (
        <CardPokemonStyled key={pokemon.id}>
          <TextId>#{pokemon.id}</TextId>
          <PokemonName>{pokemon.name}</PokemonName>

          <PokemonImage
            src={pokemon.sprites.other['official-artwork'].front_default}
          ></PokemonImage>
          <DivButton>
            <Button onClick={() => goToPageDetail(Navigate, pokemon.name)}>
              Detalhes
            </Button>
          </DivButton>
          <DivTypes>{TypeOfPokemon(pokemon.types)}</DivTypes>
          <ButtonCaptured onClick={() => removePokedex(pokemon.name)}>
            Remover !
          </ButtonCaptured>
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
      {/* <Lottie options={defaultOptions} height={100} width={100} /> */}

      <main>{listPokedex()}</main>
      {/* <Main>{pokedex !== 0 ? { listPokedex } : <p>Sem Pokemons</p>}</Main> */}
    </DivContainerPage>
  )
}

export default Pokedex
