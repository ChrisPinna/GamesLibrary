import axios from "axios";
import React, { useEffect, useState } from "react";
import GameDisplay from "../BGAGameDisplay/BGAGameDisplay";

const GamesSelection = () => {
  const [name, setName] = useState("")
  const [data, setData] = useState(null);

  const handleChange = (event) => {
    setName(event.target.value)
  }
  
  const renderGameDisplays = (data) => {
    return data.map((data) => <GameDisplay key={data.id} data={data} />);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    await axios
      .get(
        `https://api.boardgameatlas.com/api/search?name=${name}&fuzzy_match=true&client_id=y6xh1vMMx2`
      )
      .then((response) => setData(response.data.games))
      .catch((erros) => console.error(erros));
      console.log(data)
      console.log(name)

  }

  return (
    <div>
    <form action="submit">
      <input onChange={handleChange} placeholder="Catan">
      </input>
      <button onClick={handleSearch}>Search</button>
    </form>
      <div>{data ? renderGameDisplays(data) : "Loading..."}</div>
      <div>{data ? JSON.stringify(data) : "Loading..."}</div>
    </div>
  );
};

export default GamesSelection;
