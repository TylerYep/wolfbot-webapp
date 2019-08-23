import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Card.css';
import store from '../store.js';
import { addCard, addOver, removeOver, swapCardsAtIndex, setFrom, setTo } from '../actions.js';

class Card extends Component {
  constructor(props) {
    super(props);
    this.card = null;
    this.state = {
      id : this.props.id,
      role: this.props.role,
      opacity : this.props.opacity || 1,
      classStr : this.props.classStr || "role-card"
    };
  }

  componentDidMount() {
    // When the component is mounted, add your DOM listener to the "card" elem.
    // (The "card" elem is assigned in the render function.)
    store.dispatch(addCard(this.state));
    this.card.addEventListener("dragstart", this.handleDragStart, false);
    this.card.addEventListener('dragenter', this.handleDragEnter, false);
    this.card.addEventListener('dragover', this.handleDragOver, false);
    this.card.addEventListener('dragleave', this.handleDragLeave, false);
    this.card.addEventListener('drop', this.handleDrop, false);
    this.card.addEventListener('dragend', this.handleDragEnd, false);
  }

  componentWillUnmount() {
    // Make sure to remove the DOM listener when the component is unmounted.
    this.card.removeEventListener("dragstart", this.handleDragStart);
    this.card.removeEventListener('dragenter', this.handleDragEnter, false);
    this.card.removeEventListener('dragover', this.handleDragOver, false);
    this.card.removeEventListener('dragleave', this.handleDragLeave, false);
    this.card.removeEventListener('drop', this.handleDrop, false);
    this.card.removeEventListener('dragend', this.handleDragEnd, false);
  }

  // Use a class arrow function (ES7) for the handler. In ES6 you could bind()
  // a handler in the constructor.
  // NOTE: prevState not necessary.
  handleDragStart = (event) => {
    store.dispatch(addOver(this.state.id));
    store.dispatch(setFrom(this.state.id));
  }

  handleDragEnter = (event) => {
    store.dispatch(setTo(this.state.id));
  }

  handleDragOver = (event) => {
    if (event.preventDefault) event.preventDefault(); // Necessary. Allows us to drop.
    return false;
  }

  handleDragLeave = (event) => {

  }

  handleDrop = (event) => {
    if (event.stopPropagation) event.stopPropagation(); // stops the browser from redirecting.
    store.dispatch(swapCardsAtIndex());
    return false;
  }

  handleDragEnd = (event) => {
    console.log(store.getState());
    store.dispatch(removeOver());
  }

  render() {
    const roleImgMap = {
      "" : require('../img/placeholder.png'),
      "Seer" : require('../img/seer.png'),
      "Villager" : require('../img/villager.png'),
      "Wolf" : require('../img/wolf.jpg'),
      "Robber" : require('../img/robber.jpg'),
      "Drunk" : require('../img/drunk.jpg'),
      "Hunter" : require('../img/hunter.png'),
      "Troublemaker" : require('../img/troublemaker.jpg'),
      "Mason" : require('../img/mason.jpg'),
      "Tanner" : require('../img/tanner.png'),
      "Minion" : require('../img/minion.jpg'),
      "Insomniac" : require('../img/insomniac.png')
    }
    const role = this.props.role;
    const pos = this.props.position;
    const id = this.props.id;

    const op = store.getState().cards[id] ? store.getState().cards[id].opacity : 1;
    const classStr = store.getState().cards[id] ? store.getState().cards[id].classStr : "role-card";
    return (
      // Finally, render the div using a "ref" callback which assigns the mounted
      // elem to a class property "card" used to add the DOM listener to.
      <div className={"Card " + pos}>
        {
          role in roleImgMap && role !== ""
          ? <img className={classStr}
                ref={elem => this.card = elem}
                src={roleImgMap[role]}
                alt={role}
                style={{opacity: op}}
                draggable="true">
            </img>
          : <img className={"role-card placeholder"}
                ref={elem => this.card = elem}
                src={roleImgMap[role]}
                alt={role}
                style={{opacity: op}}
                draggable="false">
            </img>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => (
  state.cards[ownProps.id] ? state.cards[ownProps.id] : ownProps
);

const mapDispatchToProps = dispatch => ({
  //onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
