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
          {/* RENDER NINE SQUARE COMPONENTS HERE.
          PASS A PROP CALLED "value" THAT DETERMINES
          WHETHER THE SQUARE DISPLAYS NOTHING, AN X,
          OR AN O BASED ON THE VALUES IN board */}
        </div>
      </div>
    );
  }
}

export default Game;
