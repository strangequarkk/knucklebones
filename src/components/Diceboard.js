import React, { useState } from "react";
import Column from "./Column.js";

const DiceBoard = (props) => {
    //(props: player, boardArr, isMyTurn, handleTakeTurn)
    //console.log(props.boardArr.length);
    const boardId = "board"+props.player;
    const columns = props.boardArr.map((col, index) =>{
       return <Column key={index} colIndex={index} columnArr={col} isMyTurn={props.isMyTurn} handleTakeTurn={props.handleTakeTurn} />
    })
	return (
			<div className="diceBoard" id={boardId}>
                {columns}
            </div>
	);
};

export default DiceBoard;