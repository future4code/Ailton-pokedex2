import React from 'react'
import { DivContainerIntro, GlobalStyle, Button } from '../../Style/IntroStyled.js'
import { goToPage } from '../../Routes/Coordinator.js'
import { useNavigate } from 'react-router-dom'

export default function Intro() {

  const Navigate = useNavigate()

  return (


    <DivContainerIntro>
      <GlobalStyle />

      <Button onClick={()=> goToPage(Navigate, 'home')}>Start !</Button>
    </DivContainerIntro>
  )
}
