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
      roles: [
        "Seer",
        "Villager",
        "Wolf"
      ]
    };
  }

  render() {
    const { roles } = this.state;
    let id_counter = store.getState().id_counter;
    let rolesZip = []
    for (let i = id_counter; i < id_counter + roles.length; i++) {
      rolesZip.push([roles[i - id_counter], i]);
    }
    store.dispatch(increment_ids(roles.length));
    return (
      <div className="InventoryScroll">
      {
        rolesZip.map(role =>
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
