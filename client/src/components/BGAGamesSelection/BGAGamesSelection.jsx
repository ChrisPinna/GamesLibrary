import axios from "axios";
import React, { useEffect, useState } from "react";
import GameDisplay from "../BGAGameDisplay/BGAGameDisplay";

const GamesSelection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.boardgameatlas.com/api/search?limit=100&client_id=y6xh1vMMx2"
      )
      .then((response) => setData(response.data.games))
      .catch((erros) => console.error(erros));
  }, []);

  const renderGameDisplays = (data) => {
    return data.map((data) => <GameDisplay key={data.id} data={data} />);
  };

  return (
    <div>
      <div>{data ? renderGameDisplays(data) : "Loading..."}</div>
      <div>{data ? JSON.stringify(data) : "Loading..."}</div>
    </div>
  );
};

export default GamesSelection;
