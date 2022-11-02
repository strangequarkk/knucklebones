import React, { useState } from "react";

const Gameboard = (props) => {
    //"game" = array of 2 diceboards, with 3 columns each (initially empty arrs)
    // game[0] = player 1 board, game[1] = player 2 board
	const [game, setGame] = React.useState([[[],[],[]],[[],[],[]]]);

	const [p1Score, setP1Score] = React.useState(0);
    const [p2Score, setP2Score] = React.useState(0);
    const [currentDie, setCurrentDie] = React.useState(0);
    const [isP1Turn, setPlayerTurn] = React.useState(true); //game starts on p1's turn

	return (
			<div id="gameBoard">
                Hello Gameboard
            </div>
	);
};

export default Gameboard;