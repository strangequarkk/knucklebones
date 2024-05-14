const Player = ({
  icon,
  player,
  playerScore,
  currentDie,
  isMyTurn,
  setCurrentDie,
}) => {
  const playerId = "player" + player;

  const handleDiceClick = () => {
    if (isMyTurn) {
      const newRoll = Math.floor(Math.random() * 6) + 1;
      setCurrentDie(newRoll);
    }
  };

  return (
    <div id={playerId}>
      Player {player}
      <div className="playericon" style={{ background: icon }}></div>
      <div className="dice">
        {isMyTurn && <button onClick={handleDiceClick}> Roll Dice</button>}
        {isMyTurn ? currentDie : ""}
      </div>
      <div className="score">{playerScore}</div>
    </div>
  );
};

export default Player;
