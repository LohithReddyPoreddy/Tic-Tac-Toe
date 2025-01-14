# React Tic-Tac-Toe

A simple Tic-Tac-Toe game built with React.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [App.jsx](#appjsx)
  - [GameBoard.jsx](#gameboardjsx)
  - [Player.jsx](#playerjsx)
  - [GameOver.jsx](#gameoverjsx)
  - [Log.jsx](#logjsx)
- [Styles](#styles)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/tic-tac-toe.git
   ```
2. Navigate to the project directory:
   ```sh
   cd tic-tac-toe
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the development server:
   ```sh
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to see the game.

## Components

### App.jsx

The main component that manages the state of the game, including the game board, players, and game turns. It also handles the logic for determining the winner and restarting the game.

- **State Management**: Uses `useState` to manage `gameTurns`, `players`, and derive the `activePlayer`.
- **Game Logic**: Functions like `deriveWinner`, `deriveActivePlayer`, and `deriveGameBoard` handle the core game logic.
  - `deriveWinner`: Checks all possible winning combinations to determine if there is a winner.
  - `deriveActivePlayer`: Determines the current active player based on the game turns.
  - `deriveGameBoard`: Constructs the game board state from the game turns.
- **Event Handlers**:
  - `handleSelectedSquare`: Updates the game state when a square is selected.
  - `handleRestart`: Resets the game.

### GameBoard.jsx

A component that renders the game board and handles the selection of squares.

- **Props**: `onSelectSquare`, `gameBoard`
- **Rendering**: Maps over the `gameBoard` array to render each square as a button. Each button is disabled if the square is already occupied.

### Player.jsx

A component that displays the player's name and symbol. It also allows the player to edit their name.

- **State Management**: Uses `useState` to manage `isEditing` and `playerName`.
- **Event Handlers**:
  - `handleClick`: Toggles editing mode and saves the new name.
  - `handleChangeName`: Updates the player name state.

### GameOver.jsx

A component that displays the game over message and provides a button to restart the game.

- **Props**: `winner`, `onRestart`
- **Rendering**: Displays the winner or a draw message and a button to restart the game.

### Log.jsx

A component that displays the log of game turns.

- **Props**: `turns`
- **Rendering**: Maps over the `turns` array to display each turn.

## Styles

The styles for the game are defined in `index.css`. The game uses Google Fonts for custom fonts and includes various animations for a better user experience.

- **Fonts**: Uses 'Caprasimo' and 'Roboto Slab' from Google Fonts.
- **Layout**: Flexbox is used to center the game container and align items.
- **Components**: Styles are defined for the header, game container, players list, game board, and game over message.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
