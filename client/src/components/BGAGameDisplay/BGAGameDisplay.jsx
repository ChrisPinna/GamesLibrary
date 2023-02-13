import axios from "axios";
import React, { useState } from "react";

const BGAGameDisplay = (props) => {
  const [formData, setFormData] = useState({
    cubicle: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendAddGamePostRequest();
    console.log("Form submitted", {
      name: props.data.name,
      players: props.data.players,
      playtime: props.data.playtime,
      description: props.data.description_preview,
      imageLink: props.data.images.medium,
      BGGLink: "",
      cubicleInLibrary: formData.cubicle,
    });
    // Here, you can send the form data to a backend API or perform other actions.
  };

  const sendAddGamePostRequest = () => {
    axios
      .post("http://localhost:5000/api/games/", {
        name: props.data.name,
        players: props.data.players,
        playtime: props.data.playtime,
        description: props.data.description_preview,
        imageLink: props.data.images.medium,
        BGGLink: "",
        cubicleInLibrary: formData.cubicle,
      })
      .then((response) => console.log(response))
      .catch((erros) => console.error(erros));
  };

  return (
    <div>
      <div>
        <strong>{props.data.name}</strong>
      </div>
      <img src={props.data.images.medium} />
      <div>Players: {props.data.players}</div>
      <div>Play time: {props.data.playtime}Min</div>
      <div>Age: {props.data.min_age}+</div>
      <p>{props.data.description_preview}</p>
      <div>{props.data.cubicle ? <div>{props.data.cubicle}</div> : " "}</div>
      <form action="submit">
        <input
          type="text"
          placeholder="C1"
          name="cubicle"
          value={formData.cubicle}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Add Game</button>
      </form>
      <br />
    </div>
  );
};

export default BGAGameDisplay;
