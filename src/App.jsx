import {useState} from 'react'
import GameBoard from "./components/GameBoard.jsx"
import Player from "./components/Player.jsx"
import Log from './components/Log.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';
import GameOver from './components/GameOver.jsx';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveWinner(gameBoard, players){
  //let winner = "";
  for( const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && secondSquareSymbol === thirdSquareSymbol){
      return players[firstSquareSymbol];
    }
  }
  return "";
}

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X'
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function deriveGameBoard(gameTurns){
  let gameBoard = [...initialGameBoard.map((internalArray)=>[...internalArray])];
    for( const turn of gameTurns){
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;

    }
    return gameBoard;
}

function App() {

  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({X:'Player 1', O:'Player 2'})
  const activePlayer = deriveActivePlayer(gameTurns)

  
 const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players)

  const isDraw = (gameTurns.length === 9 && !winner)
  function handleRestart(){
    setGameTurns([]);
  }
  
  function handleSelectedSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns)
      const updateTurns = [{square : {row: rowIndex, col:colIndex}, player: currentPlayer}, ...prevTurns];
      return updateTurns
    } )
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayers((prevPlayers)=>{
      return {
        ...prevPlayers, [symbol] : newName
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name = "Player 1" symbol="X" isActive={activePlayer === 'X'} onChangeName = {handlePlayerNameChange}/>
          <Player name = "Player 2" symbol="O" isActive={activePlayer === 'O'} onChangeName = {handlePlayerNameChange}/>
        </ol>
        {(winner || isDraw) && <GameOver winner = {winner} onRestart = {handleRestart}/>}
        <GameBoard onSelectSquare ={handleSelectedSquare} gameBoard={gameBoard} />
      </div>
      <Log turns = {gameTurns}/>
    </main>


  )
}

export default App
