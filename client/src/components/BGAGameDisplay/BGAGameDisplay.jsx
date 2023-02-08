import React from 'react'

const GameDisplay = (props) => {
  return (
    <div>
      <div>
        <strong>{props.data.name}</strong>
      </div>
      <img src={props.data.images.medium}/>
      <div>Players: {props.data.players}</div>
      <div>Play time: {props.data.playtime}Min</div>
      <div>Age: {props.data.min_age}+</div>
      <p>{props.data.description_preview}</p>
      <div>{props.data.cubicle ? <div>{props.data.cubicle}</div> : " "}</div>
      <br />
    </div>
  )
}

export default GameDisplay