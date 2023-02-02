import axios from "axios";
import React, { useState } from "react";

const AddGame = () => {
  const [formData, setFormData] = useState({
    name: "",
    cubicle: "",
    description: "",
    bestGroupSize: "",
    gameTime: "",
    imageLink: "",
    BGGLink: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendAddGamePostRequest()
    console.log("Form submitted", formData);
    // Here, you can send the form data to a backend API or perform other actions.
  };

  const sendAddGamePostRequest = () => {
    axios
      .post('http://localhost:5000/api/games/', {
        name: formData.name,
        bestGroupSize: formData.bestGroupSize,
        gameTimeInMin: formData.gameTimeInMin,
        description: formData.description,
        imageLink: formData.imageLink,
        BGGLink: formData.BGGLink,
        cubicleInLibrary: formData.cubicle
      })
      .then((response) => console.log(response))
      .catch((erros) => console.error(erros));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" type="text" name="name" value={formData.name} onChange={handleInputChange} ></input>
        <input placeholder="Cubicle" type="text" name="cubicle" value={formData.cubicle} onChange={handleInputChange} ></input>
        <input placeholder="Description" type="text" name="description" value={formData.description} onChange={handleInputChange}></input>
        <input placeholder="Best group size" type="text" name="bestGroupSize" onChange={handleInputChange}></input>
        <input placeholder="Game time" type="text" name="gameTimeInMin" value={formData.gameTimeInMin} onChange={handleInputChange}></input>
        <input placeholder="Image Link" type="text" name="imageLink" value={formData.imageLink} onChange={handleInputChange}></input>
        <input placeholder="BGG Link" type="text" name="BGGLink" value={formData.BGGLink} onChange={handleInputChange}></input>
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
}; 

export default AddGame;
