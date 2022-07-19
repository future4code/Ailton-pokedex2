import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPage } from '../../Routes/Coordinator'
import Logo from '../../assets/images/Logo.png'
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

import {
  DivContainerDetails,
  GlobalStyle,
  Header,
  LogoImage,
  Main,
  DivButtonBack
} from '../../Style/PageDetailStyled'

function Details() {
  const Navigate = useNavigate()

  return (
    <ChakraProvider>
      <DivContainerDetails>
        <GlobalStyle />
        <Header>
          <DivButtonBack>
            <Button
              onClick={() => goToPage(Navigate, 'pokedex')}
              colorScheme={'twitter'}
              w={'12vw'}
            >
              Voltar
            </Button>
          </DivButtonBack>
          <LogoImage src={Logo} alt="logo"></LogoImage>
        </Header>

        <Main>
          <h1>Details</h1>
        </Main>
      </DivContainerDetails>
    </ChakraProvider>
  )
}

export default Details
