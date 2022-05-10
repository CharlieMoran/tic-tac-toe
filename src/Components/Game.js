import { Component } from "react";
import Square from "./Square";
import "./Game.css";

const board = ["X", null, null, null, "O", "O", null, null, "X"];

class Game extends Component {
  render() {
    const squares = board.map((val, ind) => <Square key={ind} value={val} />);

    return (
      <div className="tic-tac-toe-game">
        <h1>Tic Tac Toe</h1>
        <div className="Board">{squares}</div>
      </div>
    );
  }
}

export default Game;
