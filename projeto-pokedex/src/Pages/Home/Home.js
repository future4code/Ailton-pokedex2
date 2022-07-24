import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../Constants/createContext'
import {
  DivContainer,
  GlobalStyle,
  Header,
  LogoImage,
  Main,
  ButtonPokedex,
  BoxPokemon,
  DivButtonPoke
} from '../../Style/HomePageStyle.js'
import Logo from '../../assets/images/Logo.png'
import { useNavigate } from 'react-router-dom'
import { goToPage } from '../../Routes/Coordinator'
import { Button } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import CardPokemon from '../../components/CardPokemon/CardPokemon'
import axios from 'axios'

function Home() {
  const Navigate = useNavigate()
  const { pagination, setPagination, AllPokemons, setAllPokemons } =
    useContext(Context)
  const [dataPokemonsHome, setDataPokemonsHome] = useState([])

  console.log('Pokemon da Home', dataPokemonsHome)
  const changePages = (turn) => {
    const proxPag = pagination + turn

    setPagination(proxPag)
    console.log(pagination)
  }

  console.log('confere', AllPokemons)

  useEffect(() => {
    const pokemonHomeArray = []
    AllPokemons &&
      AllPokemons?.map((pokemon) => {
        console.log('poke', pokemon.name)
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          .then((res) => {
            pokemonHomeArray.push(res.data)
            if (pokemonHomeArray.length === 20) {
              setDataPokemonsHome(pokemonHomeArray)
            }
            console.log('Deucerto:', res.data)
          })
          .catch((err) => {
            console.log(err)
          })
      })
  }, [AllPokemons])

  return (
    <ChakraProvider>
      <DivContainer>
        <GlobalStyle />
        <Header>
          <LogoImage src={Logo} alt="logo"></LogoImage>

          <DivButtonPoke>
            <Button
              colorScheme={'twitter'}
              w={'12vw'}
              onClick={() => goToPage(Navigate, 'pokedex')}
            >
              Pokédex
            </Button>
          </DivButtonPoke>
        </Header>

        <Main>
          <CardPokemon />
        </Main>

        <Button
          colorScheme={'twitter'}
          w={'12vw'}
          onClick={() => changePages(1)}
        >
          Muda Página
        </Button>
      </DivContainer>
    </ChakraProvider>
  )
}

export default Home
