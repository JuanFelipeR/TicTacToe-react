import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Board.css";
import Home from "./Home"; // Importamos el componente Home



function Game({ playerX, playerO, turn}) { // Recibimos los nombres como props
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState(turn);
  const [showHome, setShowHome] = useState(false); // Estado para mostrar el juego

  function handleClick(index) {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = currentTurn;

    setBoard(newBoard);
    setCurrentTurn(currentTurn === "X"? "O" : "X");
  }




  const winner = calculateWinner(board);

  if (showHome) {
    return (<div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <Home/>
    </div>);  
  }

  // if (winner === null) {
  //   return (
  //     <button
  //       className="neon-button"
  //       onClick={() => setBoard(Array(9).fill(null))} // Reinicia el tablero
  //         // Reinicia el turno inicial}
  //     >
  //       Play Again
  //     </button>
  //   );
  // }

  if (winner) {
    return (
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <div className="text-center neon-alert">
          <h1>{`Winner: ${winner === "X" ? playerX : playerO}`}</h1> {/* Mostramos el nombre del ganador */}
          <button
            className="neon-button me-4"
            onClick={() => setBoard(Array(9).fill(null))}
          >
            Play Again
          </button>

          <button
            className="neon-button"
            onClick={() => setShowHome(true)}
          >
            Home
          </button>
        </div>
      </div>
    );
  }

  

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
      <h2 className="mb-4">{`Turn: ${currentTurn === "X" ? playerX : playerO}`}</h2> {/* Mostramos el turno del jugador */}
      <div className="row g-3 neon-board">
        {board.map((cell, index) => (
          <div key={index} className="col-4">
            <div
              className={`neon-cell d-flex justify-content-center align-items-center ${cell === "X" ? "text-X" : "text-O"}`}
              onClick={() => handleClick(index)}
            >
              {cell}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  function calculateWinner(board) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
        
      }
    }
    return null; // No hay ganador
  }
}

export default Game;