import React, { Component } from 'react';
// import ChatRoom from './components/ChatRoom.js';
import GameBoard from './components/GameBoard.js';
import InventoryScroll from './components/InventoryScroll.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          // <ChatRoom />
        }
        <GameBoard />
        <InventoryScroll />
      </div>
    );
  }
}

export default App;
