import React, { useContext, useEffect, useState } from "react";
import { Context } from "./createContext";
import { GetPokemons } from "../Hooks/useRequestData";
import { BASE_URL } from "../Constants/Url";
import axios from "axios";

export default function GlobalState(props) {
  const Provider = Context.Provider;
  const [listNamePokemons, setListNamePokemons] = useState([]);
  const [dataPokemons, setDataPokemons] = useState({});

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

  // console.log(dataPokemons)
  //   const poke = () => {
  //   const listaPokemons = []
  //   ctx.pokemons.results &&
  //   ctx.pokemons.results.map((pokemon) => {
  //         axios
  //           .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
  //           .then((res) => {
  //             listaPokemons.push(res.data)
  //             if (listaPokemons.length === 20) {
  //               setDadosPokemon(listaPokemons)
  //             }
  //             console.log(res.data)
  //           })
  //           .catch((err) => {
  //             console.log(err)
  //           })

  //     })
  //   }

  useEffect(() => {
    listNamePokemons &&
      listNamePokemons.map((pokemon) => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          .then((res) => {
            setDataPokemons(res.data);
            console.log(res)
          })
          .catch((err) => {
            console.log(err);
          });
      });
  }, []);

  const values = {
    listNamePokemons,
    dataPokemons,
  };

  return <Provider value={values}>{props.children}</Provider>;
}
