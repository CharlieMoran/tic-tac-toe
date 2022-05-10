import { Component } from 'react';
import Square from './Square';
import './Game.css';

const board = ['X', null, null, null, 'O', 'O', null, null, 'X'];

class Game extends Component {
  constructor() {
    super();
    this.state = {
      board: ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
    };
  }
  render() {
    const squares = board.map((value, index) => (
      <Square key={index} value={value} />
    ));

    return (
      <div className='tic-tac-toe-game'>
        <h1>Tic Tac Toe</h1>
        <div className='Board'>{this.state.squares}</div>
      </div>
    );
  }
}

export default Game;

