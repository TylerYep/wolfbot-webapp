import React, { Component } from 'react';
import Card from './Card.js';
import './GameBoard.css';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        "Seer",
        "Villager",
        "Villager",
        "Seer",
        "Villager",
        "Villager",
        "Seer",
        "Villager",
        "Villager",
        "Seer",
        "Villager",
        "Villager",
        "Seer",
        "Villager",
        "Seer",
        "Villager"
      ]
    };
  }

  render() {
    const { players } = this.state;
    return (
      <div className="GameBoard">

        <div className="board-top">
        {
          players.slice(0, 4).map((role) => <Card position="top" role = {role} /> )
        }
        </div>
        <div className="board-left">
        {
          players.slice(4, 8).map((role) => <Card position="left" role = {role}/> )
        }
        </div>

        <div className="board-right">
        {
          players.slice(8, 12).map((role) => <Card position="right" role = {role} /> )
        }
        </div>
        <div className="board-bottom">
        {
          players.slice(12, 16).map((role) => <Card position="bottom" role = {role} /> )
        }
        </div>

      </div>
    );
  }
}

export default GameBoard;
