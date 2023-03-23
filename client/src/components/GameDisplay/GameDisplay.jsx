import axios from "axios";
import "./GameDisplay.css";
import { Group, AccessAlarm } from '@mui/icons-material';


const GameDisplay = (props) => {
  return (
    <div className="main">
      <div className="art-container">
        <img className="art" src={props.data.image_link} />
      </div>
      <div className="name">
        <strong>{props.data.name}</strong>
      </div>
      <div className="details">
        <div><Group/>{props.data.players}</div>
        <div>
           <AccessAlarm/>{props.data.playtime}Min
        </div>
        <div>Cubicle: {props.data.cubicle_in_library}</div>
        <p>{props.data.description_preview}</p>
        <div>{props.data.cubicle ? <div>{props.data.cubicle}</div> : " "}</div>
      </div>
    </div>
  );
};

export default GameDisplay;
