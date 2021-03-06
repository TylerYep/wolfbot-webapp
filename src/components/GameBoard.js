import React, { Component } from "react";
import Card from "./Card.js";
import "../styles/GameBoard.css";
import store from "../store.js";
import { connect } from "react-redux";
import { increment_ids } from "../actions.js";

// Drag and Drop tutorial:
// https://www.html5rocks.com/en/tutorials/dnd/basics/
class GameBoard extends Component {
  constructor(props) {
    super(props);
    let blank_arr = [];
    for (let i = 0; i < 16; i++) {
      blank_arr.push("");
    }

    this.state = {
      players: blank_arr,
    };
  }
  render() {
    const { players } =
      store.getState().cards.length > 0 ? store.getState().cards : this.state;
    let id_counter = store.getState().id_counter;
    let playersZip = [];
    for (let i = 0; i < players.length; i++) {
      playersZip.push([players[i], i + id_counter]);
    }
    store.dispatch(increment_ids(players.length));
    return (
      <div className="GameBoard">
        <div className="board-top">
          {playersZip.slice(0, 4).map((role) => (
            <Card id={role[1]} position="top" role={role[0]} />
          ))}
        </div>
        <div className="board-left">
          {playersZip.slice(4, 8).map((role) => (
            <Card id={role[1]} position="left" role={role[0]} />
          ))}
        </div>

        <div className="board-right">
          {playersZip.slice(8, 12).map((role) => (
            <Card id={role[1]} position="right" role={role[0]} />
          ))}
        </div>
        <div className="board-bottom">
          {playersZip.slice(12, 16).map((role) => (
            <Card id={role[1]} position="bottom" role={role[0]} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) =>
  state.cards[ownProps.id] ? state.cards[ownProps.id] : ownProps;

export default connect(mapStateToProps)(GameBoard);
