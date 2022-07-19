import axios from "axios";
import React, { useEffect, useState } from "react";

export const GetPokemons = (url) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
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
  }, [url]);

  return [data, isLoading, error];
};



