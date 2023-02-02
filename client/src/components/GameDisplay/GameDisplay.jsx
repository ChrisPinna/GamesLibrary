import React from 'react'

const GameDisplay = (props) => {
  return (
    <div>
      <img src={props.imageLink}/>
      <div>{props.gameName}</div>
      <div>Best group size: {props.bestGroupSize}</div>
      <div>Game time: {props.gameTimeInMin}Min</div>
      <div>Description: {props.description}</div>
      <a href={props.BGGLink}>BGG Link</a>
      <div>Cubible: {props.cubicle}</div>
    </div>
  )
}

export default GameDisplay