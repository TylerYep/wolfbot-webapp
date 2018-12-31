import React, { Component } from 'react';
import Card from './Card.js';
import './GameBoard.css';

// Drag and Drop tutorial:
// https://www.html5rocks.com/en/tutorials/dnd/basics/
class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        "",
        "Seer",
        "Wolf",
        "Wolf",
        "Minion",
        "Tanner",
        "Drunk",
        "Troublemaker",
        "Villager",
        "Insomniac",
        "Hunter",
        "Mason",
        "Villager",
        "Robber",
        "Villager",
        "Seer",
        "Mason"
      ]
    };
  }

  render() {
    const { players } = this.state;
    let id_counter = 0;
    return (
      <div className="GameBoard">
        <div className="board-top">
        {
          players.slice(0, 4).map((role) => <Card id={id_counter++} position="top" role = {role} /> )
        }
        </div>
        <div className="board-left">
        {
          players.slice(4, 8).map((role) => <Card id={id_counter++} position="left" role = {role}/> )
        }
        </div>

        <div className="board-right">
        {
          players.slice(8, 12).map((role) => <Card id={id_counter++} position="right" role = {role} /> )
        }
        </div>
        <div className="board-bottom">
        {
          players.slice(12, 16).map((role) => <Card id={id_counter++} position="bottom" role = {role} /> )
        }
        </div>
      </div>
    );
  }
}

export default GameBoard;
