import React, { useState } from "react";
import Player from "./Player.js";
import DiceBoard from "./Diceboard";

const Gameboard = (props) => {
    //"game" = array of 2 diceboards, with 3 columns each (initially empty arrs)
    // game[0] = player 1 board, game[1] = player 2 board
	const [game, setGame] = useState([[[],[],[]],[[],[],[]]]);

	const [p1Score, setP1Score] = useState(0);
    const [p2Score, setP2Score] = useState(0);
    const [currentDie, setCurrentDie] = useState(0);
    const [isP1Turn, setPlayerTurn] = useState(true); //game starts on p1's turn
    const takeTurn = () => {
        console.log('take turn');
    }
	return (
			<div id="gameBoard">
                <div className="side1">
                <Player player="1" 
                        icon="#f33" 
                        playerScore={p1Score} 
                        currentDie={currentDie} 
                        setCurrentDie={setCurrentDie}
                        isMyTurn={isP1Turn} 
                />
                <DiceBoard player="1" boardArr={game[0]} isMyTurn={isP1Turn} handleTakeTurn={takeTurn}/>
                </div>

                <div className="side2">
                <DiceBoard player="2" boardArr={game[1]} isMyTurn={!isP1Turn} handleTakeTurn={takeTurn}/>
                <Player player="2" 
                        icon="#33f" 
                        playerScore={p2Score} 
                        currentDie={currentDie} 
                        setCurrentDie={setCurrentDie}
                        isMyTurn={!isP1Turn} 
                />
                </div>
            </div>
	);
};

export default Gameboard;