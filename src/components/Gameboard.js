import React, { useState } from "react";
import Player from "./Player.js";
import DiceBoard from "./Diceboard";

const Gameboard = () => {
  //"game" = array of 2 diceboards, with 3 columns each (initially empty arrs)
  // game[0] = player 1 board, game[1] = player 2 board
  const [game, setGame] = useState([
    [[], [], []],
    [[], [], []],
  ]);

  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);
  const [currentDie, setCurrentDie] = useState("");
  const [isP1Turn, setPlayerTurn] = useState(true); //game starts on p1's turn
  const [winMsg, setWinMsg] = useState("");
  const [winClass, setWinClasses] = useState("hidden");

  const clearOpponentMatches = (board, colIndex, scoreSetter) => {
    if (board[colIndex].some((num) => num === currentDie)) {
      //if any values in the opponent's corrensponding
      //column match the die the current player placed,
      //clear them out >:}
      board[colIndex] = board[colIndex].filter((num) => num !== currentDie);
      const opponentNewScore = calculatePlayerScore(board, scoreSetter);
      return opponentNewScore;
    }
    const opponentScore = isP1Turn ? p2Score : p1Score;
    return opponentScore;
  };

  //checkEndGame relies on passed-in values rather than scores in state bc scores in state may not be up to date
  const checkEndGame = (curPlayerScore, opponentScore) => {
    //the game ends when either board fills all 9 slots
    if (game[0].flat(3).length >= 9 || game[1].flat(3).length >= 9) {
      const curPlayer = isP1Turn ? "Player 1" : "Player 2";
      const opponent = isP1Turn ? "Player 2" : "Player 1";

      const winner = curPlayerScore > opponentScore ? curPlayer : opponent;
      const winScore =
        curPlayerScore > opponentScore ? curPlayerScore : opponentScore;
      const tie = curPlayerScore === opponentScore ? true : false;
      setWinMsg(tie ? "Tie Game!" : winner + " wins! Score: " + winScore);
      setWinClasses("cover");
    }
  };

  const takeTurn = (colIndex) => {
    const playerIndex = isP1Turn ? 0 : 1;
    const opponentIndex = isP1Turn ? 1 : 0;
    const scoreSetter = isP1Turn ? setP1Score : setP2Score;
    const opponentSetter = isP1Turn ? setP2Score : setP1Score;

    const newGameBoard = [...game];
    newGameBoard[playerIndex][colIndex].push(currentDie);
    const newPlayerBoard = newGameBoard[playerIndex];
    const newOpponentBoard = newGameBoard[opponentIndex];

    let score1 = calculatePlayerScore(newPlayerBoard, scoreSetter);
    let score2 = clearOpponentMatches(
      newOpponentBoard,
      colIndex,
      opponentSetter
    );
    setGame(newGameBoard);
    checkEndGame(score1, score2);
    setCurrentDie(""); //empty die so current value doesn't carry over to opponent's turn
    setPlayerTurn(!isP1Turn);
  };

  const calculatePlayerScore = (board, setPlayerScore) => {
    let total = 0;
    //use reduce to find sum of all columns
    total = board.reduce((prevTotal, curCol) => {
      let colValue = calcColValue(curCol);
      return prevTotal + colValue;
    }, 0);

    setPlayerScore(total);
    return total;
  };

  const calcColValue = (column) => {
    let colTotal = 0;
    if (column.length > 0) {
      //check column for duplicate numbers
      //numberTally stores encountered number as key and # times encountered as value
      var numberTally = new Map();
      column.forEach((val) => {
        let count = (numberTally.get(val) || 0) + 1; //adds one to tally for this number
        numberTally.set(val, count); // store updated tally under number key
      });

      // "added together and multiplied by # of matches"
      //  == (val * matches) * matches
      //  == val * matches^2
      for (let [value, count] of numberTally) {
        colTotal += value * Math.pow(count, 2); // 1^2 = 1 in cases where there aren't matches :)
      }
    }
    return colTotal;
  };

  return (
    <div id="gameBoard">
      <div className="side1 side">
        <Player
          player="1"
          icon="#f33"
          playerScore={p1Score}
          currentDie={currentDie}
          setCurrentDie={setCurrentDie}
          isMyTurn={isP1Turn}
        />
        <DiceBoard
          player="1"
          boardArr={game[0]}
          isMyTurn={isP1Turn}
          handleTakeTurn={takeTurn}
        />
      </div>
      <div className={winClass}>{winMsg}</div>
      <div className="side2 side">
        <DiceBoard
          player="2"
          boardArr={game[1]}
          isMyTurn={!isP1Turn}
          handleTakeTurn={takeTurn}
        />
        <Player
          player="2"
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
