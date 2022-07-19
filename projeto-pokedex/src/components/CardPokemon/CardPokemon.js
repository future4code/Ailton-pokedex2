import React from 'react'
import axios from 'axios'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../../Constants/createContext'
import { dadosPokemon } from '../../Hooks/useRequestData'

export default function CardPokemon() {
  const [pokemon, setPokemon] = useState({})
  const [dadosPokemon] = useRequestData(
    [],
    'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0'
  )
  const ctx = useContext(Context)

  return <div>Card Pokemon</div>
}
