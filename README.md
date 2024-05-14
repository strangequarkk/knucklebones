# Cult of the Lamb: Knucklebones

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A student came to me with a game project, recreating the "knucklebones" mini game from Cult of the Lamb. (I have not personally played it 😅) He was running into difficulties; he had created a separate component for each game board cell, and couldn't figure out how to make the results of a player's turn affect cells on the opponent's board. He had worked hard on the game and was reluctant to scrap his existing code, so I started a fresh app to demonstrate how the game could be simplified by moving most of the functionality into the parent "Gameboard" component. (Plus one more layer of simplification- using CSS/flexbox to visually invert the bottom board without affecting its array structure, rather than coding up two separate rule sets for placing cells & affecting the inverted opponent board.)

## Knucklebones Rules

(lifted from [Game Pressure Game Guides](https://github.com/facebook/create-react-app))
Each player has 3 columns at their disposal, in each column they can place a maximum of 3 dice. The players alternately roll 1 dice and choose the column and place where they want to place it.

* A dice's point value is equal to the number appearing on it.
* Arranging several dice with the same value in a given column will trigger combos . If there are 2 identical dice in the column, the sum of the dice is multiplied by 2. 3 identical dice results in a x9 multiplier.
* If a dice with the same number as in the opponent's column is placed in the opposite column, the opponent loses all dice of that value.

Creating combos and eliminating the opponent's dice, especially the high-scoring ones, is the key to victory. Sometimes it's worth giving up creating your own combo to get rid of the enemy's points.

A match ends when one of the players has all the fields of his board occupied, but the winner is the one who has collected the most points.

## App Structure

The simplified game only needs 6 components: Gameboard, Player, Diceboard, Column, and Cell.

### Gameboard

Keeps track of both players scores, as well as whose turn it is, the dice value, whether the win state has been achieved, and also the state of both boards in the game. It holds all the functions that will be executed when a player takes their turn: calculating the player's score, clearing the opponent's columns/calculating the opponent's new score, updating the state of the game board, and checking if someone has won.

### Diceboard

Populates each player's boards with Columns according to their game state.

### Column

Populates the Cells with values and handles click events, ensuring the passed-in handler functions receive the appropriate column index, so that the opponent's column can be cleared at the same time.

### Cell

Displays the value of a cell depending on the game state.
