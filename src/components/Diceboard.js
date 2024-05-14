import React from "react";
import Column from "./Column.js";

//(props: player, boardArr, isMyTurn, handleTakeTurn*) * = drilled props
const DiceBoard = ({ boardArr, handleTakeTurn, player, isMyTurn }) => {
  //board id for css
  const boardId = "board" + player;

  //distribute column arrays from this board's array
  const columns = boardArr.map((col, index) => {
    return (
      <Column
        key={index}
        colIndex={index}
        columnArr={col}
        isMyTurn={isMyTurn}
        handleTakeTurn={handleTakeTurn}
      />
    );
  });

  return (
    <div className="diceBoard" id={boardId}>
      {columns}
    </div>
  );
};

export default DiceBoard;
