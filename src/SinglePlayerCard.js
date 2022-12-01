import React from "react";

const SinglePlayerCard = (props) => {
  const player = props.player;
  return (
    <div 
      className="single-player-card">
      Pup goes here
      <div className="header-info">
        <p className="pup-title">{player.name}</p>
        <p className="pup-number">{player.id}</p>
      </div>
      <img src={player.imageUrl} alt={`photo of ${player.name} the puppy`} />
      <button className="detail-button" data-id={player.id}>
        See Details
      </button>
      <button className="remove-player-button" data-id={player.id}>
        Remove from roster
      </button>
    </div>
  )
}

export default SinglePlayerCard