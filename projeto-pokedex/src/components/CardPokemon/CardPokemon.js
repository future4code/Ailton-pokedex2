import React from 'react'
import axios from "axios"
import { useContext, useState, useEffect } from 'react'
import { Context } from '../../Constants/createContext'
import {dadosPokemon} from '../../Hooks/useRequestData'



export default function CardPokemon() {
  const [pokemon, setPokemon] = useState({})
  const ctx = useContext(Context);



  // const dadosCard = dadosPokemon.filter((pokemon) => {
  //   for
  // })
  



  return (
    <div>Card Pokemon</div>
  )
}
