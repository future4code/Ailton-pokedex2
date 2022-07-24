import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TypeOfPokemon from '../../components/TypeOfPokemon/TypeOfPokemon'
import PokebolaVazia from './../../assets/images/pokebola-vazia.png'
import { Context } from '../../Constants/createContext'
import axios from 'axios'
import {
  DivTypes,
  CardPokemonStyled,
  TextId,
  PokemonName,
  DivContainer,
  PokemonImage,
  DivButton,
  ButtonCaptured
} from './../../Style/Cards/Cards'

import {
  GlobalStyle,
  DivPokemonsRenderizados,
  DivContainerPage,
  DivVazia,
  Header,
  LogoImage,
  Main,
  DivVaziaP,
  Alert,
  ButtonPokedex,
  DivButtonPoke,
  BoxPokemon
} from '../../Style/PokedexPageStyle'
import { goToPage } from '../../Routes/Coordinator'
import { Button, ButtonGroup, omitThemingProps,
  AlertIcon,
  AlertTitle,
  AlertDescription } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import Logo from '../../assets/images/Logo.png'
import Lottie from 'react-lottie'
import animationData from '../../lotties/pokebola.json'
import { goToPageDetail } from '../../Routes/Coordinator'
function Pokedex() {

  const { pokedex, setPokedex} = useContext(Context)
  const [listaPokedex, setListaPokedex] = useState([])



  const Navigate = useNavigate()
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  useEffect(() => {
    getPokedex()
},[pokedex])

    const getPokedex = () => {
    const pokedexlistP = []
      pokedex?.forEach((pokemon) => (
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
          .then((res) => {
            pokedexlistP.push(res.data)
            setListaPokedex(pokedexlistP)

          })
          .catch((err) => {
            console.log(err)
          })
      ))  
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
          <ButtonCaptured onClick={() =>  removePokedex(pokemon.name)}>Remover !</ButtonCaptured>
        </CardPokemonStyled>
      )
    })
  }

  const removePokedex = (onPokedex) =>{

    const removeDex = pokedex.filter(remove =>{

        return  onPokedex !== remove
    })

    setPokedex(removeDex)
    getPokedex()
  }
    

  return (
    <ChakraProvider>
    <DivContainerPage>
     <GlobalStyle></GlobalStyle>
      <Header>
        <Button
          colorScheme={"twitter"}
          w={'12vw'}
          onClick={() => goToPage(Navigate, 'home')}
        >
          Voltar
        </Button>
        <LogoImage src={Logo} alt="logo"></LogoImage>
      </Header>
      {/* <Lottie options={defaultOptions} height={100} width={100} /> */}

      <Main>


        {listaPokedex.length === 0 ?
        <DivVazia>
          <img src={PokebolaVazia}
          width={'500px'}
          height={'600px'}></img>
          <DivVaziaP>Pokebola Vazia</DivVaziaP>
        </DivVazia>
        
        :

        <DivPokemonsRenderizados>
          {listPokedex()}
        </DivPokemonsRenderizados>
        
        
      }

        
        
        
        
        </Main>


   
    </DivContainerPage>
      </ChakraProvider>
  )
}

export default Pokedex
