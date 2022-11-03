import React, { useState } from "react";

const Player = (props) => {
    //(props: icon(player color), player, playerScore, currentDie, isMyTurn, setCurrentDie)

	const playerId = "player"+props.player

    const handleDiceClick = () => {
        if(props.isMyTurn) {
            const newRoll = Math.floor(Math.random() * 6) + 1;
            props.setCurrentDie(newRoll);
        }
       

      }

	return (
			<div id={playerId}>
                Player {props.player}
                <div className ="playericon" style={{background: props.icon}}></div>
                <div className ="dice" >
                    {props.isMyTurn && <button onClick={handleDiceClick}> Roll Dice</button>}
                    {props.isMyTurn ? props.currentDie : ""}
                    </div>
                <div className ="score">{props.playerScore}</div>
            </div>
	);
};

export default Player;