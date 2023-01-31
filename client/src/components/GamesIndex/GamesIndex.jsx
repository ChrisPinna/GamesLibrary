import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const GamesIndex = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/games/")
      .then((response) => setData(response.data))
      .catch((erros) => console.error(erros));
  }, []);

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
};

export default GamesIndex;
