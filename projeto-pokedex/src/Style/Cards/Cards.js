import { propNames } from '@chakra-ui/react'
import styled from 'styled-components'

export const DivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 50px;
  margin: 10px;
`

export const DivTypes = styled.div`
  display: flex;
  column-gap: 4px;
`

export const CardPokemonStyled = styled.div`
  width: 440px;
  height: 210px;
  background-color: #c40233;
  border-radius: 12px;
`

export const TextId = styled.p`
  padding: 0.5rem;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: white;
`

export const PokemonName = styled.p`
  padding: 0.5rem;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: white;
`

export const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
  margin-left: 20vw;
  margin-top: -20vh;
`

export const DivButton = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  background-color: lightskyblue;
  color: white;
  width: 8vw;
  border-radius: 0.3rem;
  margin: 0.5rem;
  height: 5vh;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  &:hover {
    cursor: pointer;
  }
`

export const ButtonCaptured = styled.button`
  background-color: red;
  color: white;
  width: 8vw;
  border-radius: 0.3rem;
  margin: 0.5rem;
  height: 5vh;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  &:hover {
    cursor: pointer;
  }
`
