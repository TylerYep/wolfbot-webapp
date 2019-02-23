import React, { Component } from 'react';
import Card from './Card.js';
import './InventoryScroll.css';
import store from '../store.js';
import { connect } from 'react-redux'
import { increment_ids } from '../actions.js';

class InventoryScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
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
        "Villager",
        "Mason"
      ]
    };
  }

  render() {
    const { players } = store.getState().cards.length > 0 ? store.getState().cards : this.state;
    let id_counter = store.getState().id_counter;
    let playersZip = []
    for (let i = 0; i < players.length; i++) {
      playersZip.push([players[i], i + id_counter]);
    }
    store.dispatch(increment_ids(players.length));
    return (
      <div className="InventoryScroll">
      {
        playersZip.map(role =>
          <Card id={role[1]} position="side" role={role[0]} />
        )
      }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => (
  state.cards[ownProps.id]
  ? state.cards[ownProps.id]
  : ownProps
);

export default connect(mapStateToProps)(InventoryScroll);
