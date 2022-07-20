import React, { useContext, useEffect, useState } from "react";
import { Context } from "./createContext";
import { GetPokemons } from "../Hooks/useRequestData";
import { BASE_URL } from "../Constants/Url";
import axios from "axios";

export default function GlobalState(props) {
  const Provider = Context.Provider;
  const [listNamePokemons, setListNamePokemons] = useState([]);
  const [dataPokemons, setDataPokemons] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        setListNamePokemons(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const listaPokemons = []
    listNamePokemons &&
      listNamePokemons.map((pokemon) => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          .then((res) => {
            listaPokemons.push(res.data)
            if (listaPokemons.length === 20) {
              setDataPokemons(listaPokemons)
                }
          })
          .catch((err) => {
            console.log(err);
          });
      });
  }, [listNamePokemons]);


  const values = {
    listNamePokemons,
    dataPokemons

  };

  return <Provider value={values}>{props.children}</Provider>;
}
