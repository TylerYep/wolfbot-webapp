import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const roleImgMap = {
      "Seer" : "https://i.imgur.com/Z25oarU.png",
      "Villager" : "https://i.imgur.com/rW7lge3.png"
    }
    const role = this.props.role;
    const pos = this.props.position;
    return (
      <div className={"Card " + pos}>
        <img src={roleImgMap[role]} alt={role}></img>
      </div>
    );
  }
}

export default Card;
