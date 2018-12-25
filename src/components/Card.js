import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.card = null;
    this.state = {
      opacity : this.props.opacity,
      classStr : this.props.classStr || ""
    };
  }

  componentDidMount() {
    // When the component is mounted, add your DOM listener to the "card" elem.
    // (The "card" elem is assigned in the render function.)
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
    this.setState(prevState => ({ opacity: 0.4 }));
      // dragSrcEl = this.card;
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/html', this.innerHTML);
  }

  handleDragOver = (event) => {
    if (event.preventDefault) event.preventDefault(); // Necessary. Allows us to drop.
    event.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
    return false;
  }

  handleDragEnter = (event) => {
    const newClassStr = this.state.classStr + ' over';
    this.setState(prevState => ({ classStr: newClassStr}));
    //UNUSED this.setState(prevState => ({ classList: [...prevState, 'over']}));
  }

  handleDragLeave = (event) => {
    const newClassStr = ""; // TODO should only remove the string 'over'
    this.setState(prevState => ({ classStr: newClassStr}));
  }

  handleDrop = (event) => {
    if (event.stopPropagation) event.stopPropagation(); // stops the browser from redirecting.

    // Don't do anything if dropping the same column we're dragging.
      // if (dragSrcEl != this.card) {
      //   // Set the source column's HTML to the HTML of the column we dropped on.
      //   dragSrcEl.innerHTML = this.innerHTML;
      //   this.innerHTML = event.dataTransfer.getData('text/html');
      // }
    return false;
  }

  handleDragEnd = (event) => {
    this.setState(prevState => ({ opacity: 1 }));
    // TODO: remove 'over' from all other cards.
    // [].forEach.call(cols, function (col) {
    //   col.classList.remove('over');
    // });
  }

  render() {
    const roleImgMap = {
      "Seer" : "https://i.imgur.com/Z25oarU.png",
      "Villager" : "https://i.imgur.com/rW7lge3.png"
    }
    const role = this.props.role;
    const pos = this.props.position;
    const op = this.state.opacity || 1;
    const classStr = "role-card" + this.state.classStr;
    return (
      // Finally, render the div using a "ref" callback which assigns the mounted
      // elem to a class property "nv" used to add the DOM listener to.
      <div className={"Card " + pos}>
        {
          role in roleImgMap
          ? <img className={classStr}
                ref={elem => this.card = elem}
                src={roleImgMap[role]}
                alt={role}
                style={{opacity: op}}
                draggable="true">
            </img>
          : <div className="role-card placeholder"
                ref={elem => this.card = elem}
                draggable="false">
            </div>
        }
      </div>
    );
  }
}

export default Card;
