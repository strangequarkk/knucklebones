import React, { useState } from "react";
import Cell from "./Cell.js";

const Column = (props) => {
    //(props: columnArr, isMyTurn, handleTakeTurn, colIndex)
    let cells =[];
    for(let i=0; i < 3; i++){
        cells.push(<Cell key={i} cellVal ={props.columnArr[i] ? props.columnArr[i] : ""} />)
    }
    const handleClick = () => {
        if(props.isMyTurn){
            
            props.handleTakeTurn(props.colIndex)
        }
        else {
            console.log("not my turn!")
        }
        
    }

	return (
			<div className="column" onClick={handleClick}>
                {cells}
            </div>
	);
};

export default Column;