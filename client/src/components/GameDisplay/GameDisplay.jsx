import axios from "axios";
import './GameDisplay.css'

const GameDisplay = (props) => {

  return (
    <div className="main" >
    <div className="art-container">
      <img className="art" src={props.data.image_link} />
    </div>
        <div className="name">
          <strong >{props.data.name}</strong>
        </div>
        <div className="details">
          <div>Players: {props.data.players}</div>
          <div>Play time: {props.data.playtime}Min</div>
          <div>Age: {props.data.min_age}+</div>
          <p>{props.data.description_preview}</p>
          <div>{props.data.cubicle ? <div>{props.data.cubicle}</div> : " "}</div>
        </div>
    </div>
  );
};

export default GameDisplay;
