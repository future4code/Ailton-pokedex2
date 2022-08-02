import axios from "axios";
import React, { useEffect, useState } from "react";

export const GetPokemons = (path) => {
  const [dadosPoke, setDadosPoke] = useState([]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${path}`)
      .then((res) => {
        setDadosPoke(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [path]);

  return [dadosPoke];
};
