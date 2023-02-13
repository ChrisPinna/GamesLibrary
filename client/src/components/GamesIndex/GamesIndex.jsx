import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import GameDisplay from "../GameDisplay/GameDisplay";

const GamesIndex = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/games/")
      .then((response) => setData(response.data.message))
      .catch((erros) => console.error(erros));
  }, []);

  const renderGameDisplays = (data) => {
    return data.map((data) => (
      <GameDisplay
        key={data.id}
        data={data}
      />
    ));
  };

  return (
    <div>
      <div>{data ? renderGameDisplays(data) : "Loading..."}</div>
      <div>{data ? JSON.stringify(data) : "Loading..."}</div>
    </div>
  );
};

export default GamesIndex;
