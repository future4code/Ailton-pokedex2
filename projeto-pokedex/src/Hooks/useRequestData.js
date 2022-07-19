import axios from "axios";
import React, { useEffect, useState } from "react";

export const GetPokemons = (url) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [dadosPokemon, setDadosPokemon] = useState([]);
  const [error, setError] = useState("");
  

  useEffect(() => {
    setIsLoading(true);
    pegaPokemon(url)
  }, [url]);

  const pegaPokemon = () => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  
    useEffect(() => {
      const listaPokemons = []
      data && data.map((pokemon) => {
        axios
        .get((`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`))
        .then((res)=>{
          listaPokemons.push(res.data)
          if (listaPokemons.length === 20) {
            setDadosPokemon(listaPokemons)
          }
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
      })
      
    }, [url]);
  

  

  return [data, isLoading, error, dadosPokemon];
};
