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


  useEffect(()=>{


  pegarDetalhes()


  },[])




  const pegarDetalhes = () =>{

    const guardaPokemon = []

        pokedex &&
      pokedex.map((pokemon) => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
          .then((res) => {
            guardaPokemon.push(res.data);
            if (listaPokemons.length === 20) {
              setListaPokedex(guardaPokemon);
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })

  }
    


  const listPokedex = () => {
    return listaPokedex?.map((pokemon) => {
      return (
        <CardPokemonStyled key={pokemon.id}>
          <TextId>NÂº#{pokemon.id}</TextId>
          <PokemonName>{pokemon.name}</PokemonName>

          <PokemonImage
            src={pokemon.sprites.other['official-artwork'].front_default}
          ></PokemonImage>
          {/* <DivButton>
            <Button onClick={() => goToPageDetail(Navigate, pokemon.name)}>
              Detalhes
            </Button>
          </DivButton> */}
          <DivTypes>{TypeOfPokemon(pokemon.types)}</DivTypes>
        </CardPokemonStyled>
      )
    })
  }

  // console.log('pagina pokedex', pokedex)

  return (
    <DivContainerPage>
      {console.log('detalhes',listaPokedex)}
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
      <Main>
        {/* {pokedex !== 0 ? { listPokedex } : 
        <p>Sem Pokemons</p>} */}

        {listaPokedex.name}

        </Main>
    </DivContainerPage>
  )
}

export default Pokedex
