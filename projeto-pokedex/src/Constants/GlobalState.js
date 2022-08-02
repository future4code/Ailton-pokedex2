import React, { useContext, useEffect, useState } from "react";
import { Context } from "./createContext";
import { GetPokemons } from "../Hooks/useRequestData";
import { BASE_URL } from "../Constants/Url";
import axios from "axios";

export default function GlobalState(props) {
  const Provider = Context.Provider;
  const [listNamePokemons, setListNamePokemons] = useState([]);
  const [dataPokemons, setDataPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [listaPokedex, setListaPokedex] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${BASE_URL}?limit=20&offset=${20 * (pagination - 1)}`)
      .then((res) => {
        setListNamePokemons(res.data.results);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
  }, [pagination]);

  useEffect(() => {
    const listaPokemons = [];
    listNamePokemons &&
      listNamePokemons.forEach((pokemon) => {
        setIsLoading(true)
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          .then((res) => {
            listaPokemons.push(res.data);
            if (listaPokemons.length === 20) {
              setDataPokemons(listaPokemons);
            }
            setIsLoading(false)
          })
          .catch((err) => {
            console.log(err);
            setIsLoading(false)
          });
      });
  }, [listNamePokemons]);

  const values = {
    listNamePokemons,
    dataPokemons,
    pokedex,
    setPokedex,
    pagination,
    setPagination,
    listaPokedex,
     setListaPokedex
  };

  return <Provider value={values}>{props.children}</Provider>;
}
