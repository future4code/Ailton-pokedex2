import React from 'react'
import {useNavigate} from 'react-router-dom'
import {DivContainer, GlobalStyle, Header, LogoImage, Main, ButtonPokedex,
  DivButtonPoke} from '../../Style/PokedexPageStyle';
import {goToPage} from '../../Routes/Coordinator'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import Logo from '../../assets/images/Logo.png'

function Pokedex() {

  const Navigate = useNavigate()

  return (
    <ChakraProvider>
      <Header>
      <LogoImage src={Logo} alt="logo"></LogoImage>
    


    <Button colorScheme={'twitter'}
        w={'12vw'} onClick={()=> goToPage(Navigate, 'details')}>Detalhes Pokémon</Button>
 </Header>

 <Main>
        <h1>Pokémons!</h1>
    </Main>
    {/* </DivContainer> */}
    </ChakraProvider>
  )
}

export default Pokedex