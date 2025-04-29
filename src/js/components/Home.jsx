import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../styles/board.css';
import Game from "./Game"; // Importamos el componente Game



function Home() {

    const [turn, setTurn] = useState("");
    const [playerX, setPlayerX] = useState(""); // Estado para el jugador X
    const [playerO, setPlayerO] = useState(""); // Estado para el jugador O
    const [showGame, setShowGame] = useState(false); // Estado para mostrar el juego

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
            {showGame ? (
                <Game playerX={playerX} playerO={playerO} turn={turn} /> // Pasamos los nombres a Game
            ) : (
                <div className="alert alert-success text-center">
                    <h1>Welcome to Tic Tac Toe</h1>
                    <div className="mb-3">
                        <label htmlFor="playerX" className="form-label">
                            Player X Name:
                        </label>
                        <input
                            type="text"
                            id="playerX"
                            className="form-control"
                            value={playerX}
                            onChange={(e) => setPlayerX(e.target.value)} /*e.target es el input*/
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="playerO" className="form-label">
                            Player O Name:
                        </label>
                        <input
                            type="text"
                            id="playerO"
                            className="form-control"
                            value={playerO}
                            onChange={(e) => setPlayerO(e.target.value)}
                        />
                    </div>
                    <button
                        className="btn btn-primary me-4"
                        onClick={() => {
                            if (playerX && playerO) {
                                setShowGame(true);
                                setTurn("X")
                            } else {
                                alert("Please enter names for both players!");
                            }
                        }}
                    >
                        X
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            if (playerX && playerO) {
                                setShowGame(true);
                                setTurn("O")
                            } else {
                                alert("Please enter names for both players!");
                            }
                        }}
                    >
                        O
                    </button>
                </div>
            )}
        </div>
    );
}

export default Home;