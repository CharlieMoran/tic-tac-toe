import { Component } from "react";
import Square from "./Square";
import "./Game.css";

const board = ["X", null, null, null, "O", "O", null, null, "X"];

class Game extends Component {
  render() {
    return (
      <div className="tic-tac-toe-game">
        <h1>Tic Tac Toe</h1>
        <div className="Board">
          <Square value={board[0]} />
          <Square value={board[1]} />
          <Square value={board[2]} />
          <Square value={board[3]} />
          <Square value={board[4]} />
          <Square value={board[5]} />
          <Square value={board[6]} />
          <Square value={board[7]} />
          <Square value={board[8]} />
        </div>
      </div>
    );
  }
}

export default Game;
