import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


//component structure:
// Gameboard contains
// (state)
// - "game" array containing 2 "board" arrays, 
//    containing 3 column arrays each (initially empty [])
// - p1Score, p2Score (ints)
// - currentDie (int)
// - isP1Turn (bool, initially true)
// 
// (functions)
// - calculatePlayerScore => (board, setPlayerScore) {
//  - for col in board
//    - check for duplicate dice
//    - calculate matching dice score
//    - calculate non-matching dice score and add it to matching dice score
//    - add column score to total
//  - assign correct score to current player
//}
// - declareWinner(score1, score2)
// - takeTurn => (player, column) {
//    - const scoreSetter = isP1Turn ? setP1Score : setP2Score
//    - const opponentSetter = isP1Turn ? setP2Score : setP1Score
//    - add current die val to first available index of column in gameboard
//    - calculatePlayerScore (playerBoard, scoreSetter)
//    - check opponent board[column] for current die val
//    - if die matches, 
//      - remove all matching die from opponent board[column]
//      - calculatePlayerScore(opponentBoard, opponentSetter)
//    - check whether player's diceboard is full; if so, end game and declare winner based on current scores
//    - else setPlayerTurn(!isP1Turn)
//}
//
//  - 2 Players (props: playerScore, currentDie, isMyTurn, setCurrentDie)
//    - 1 player icon, 
//    - 1 clickable die, (click handler picks random # and uses setCurrentDie)
//    - 1 player score 
//  - 2 Diceboards (props: boardArr, isMyTurn, handleTakeTurn)
//    - 3 Columns (props: columnArr, isMyTurn, handleTakeTurn)
//      - 3 Cells (props: cellVal)