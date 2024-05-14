import Cell from "./Cell.js";

const Column = ({ columnArr, isMyTurn, handleTakeTurn, colIndex }) => {
  let cells = [];
  for (let i = 0; i < 3; i++) {
    //give cells value from array if there is one, otherwise leave cell empty
    cells.push(<Cell key={i} cellVal={columnArr[i] ? columnArr[i] : ""} />);
  }

  //Column handles click rather than cell- exact cell index is not important to game logic
  const handleClick = () => {
    //don't take turn if it's not this player's turn or if column already full
    if (isMyTurn && columnArr.length < 3) {
      handleTakeTurn(colIndex);
    }
  };

  return (
    <div className="column" onClick={handleClick}>
      {cells}
    </div>
  );
};

export default Column;
