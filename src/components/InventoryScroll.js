import React, { Component } from 'react';
import Card from './Card.js';

import './InventoryScroll.css';

class InventoryScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [
        "Seer",
        "Villager",
      ]
    };
  }


  render() {
    // const roles = this.props.roles;
    const { roles } = this.state;
    return (
      <div className="InventoryScroll">
      {
        roles.map((role) => <Card position="side" role = {role} /> )
      }
      </div>
    )
  }
}

export default InventoryScroll;
