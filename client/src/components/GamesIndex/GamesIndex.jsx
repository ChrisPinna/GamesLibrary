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
        id={data.id}
        gameName={data.name}
        description={data.description}
        imageLink={data.image_link}
        bestGroupSize={data.best_group_size}
        gameTimeInMin={data.game_time_in_min}
        BGGLink={data.bgg_link}
        cubicle={data.cubicle_in_library}
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
