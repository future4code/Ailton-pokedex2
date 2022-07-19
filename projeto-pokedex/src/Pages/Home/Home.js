import React from 'react';
import {DivContainer, GlobalStyle, Header, LogoImage, Main, ButtonPokedex,
    DivButtonPoke} from '../../Style/HomePageStyle.js';
import Logo from '../../assets/images/Logo.png'
import {useNavigate} from 'react-router-dom'
import {goToPage} from '../../Routes/Coordinator'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import {GetPokemons} from './../../Hooks/useRequestData'
import {BASE_URL} from '../../Constants/Url'

function Home() {

  const Navigate = useNavigate()

  


  return (

    <ChakraProvider>

 
    <DivContainer>
      <GlobalStyle/>
      <Header>

        <LogoImage src={Logo} alt="logo"></LogoImage>

        <DivButtonPoke>
        <Button 
        colorScheme={'twitter'}
        w={'12vw'}
        onClick={()=> goToPage(Navigate, 'pokedex')}>Pokédex</Button>
        </DivButtonPoke>
  
      </Header>


    <Main>
    </Main>

      </DivContainer>
      </ChakraProvider>



  )


}

export default Home