import React, { Component } from 'react';

// import ChatRoom from './ChatRoom.js';
import GameBoard from './GameBoard.js';
import InventoryScroll from './InventoryScroll.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          // <ChatRoom />
          // <InventoryScroll />

        }
        <GameBoard />
      </div>
    );
  }
}

export default App;