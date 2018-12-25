import React, { Component } from 'react';
import { configureStore } from 'redux-starter-kit'
import cardListReducer from './reducers'

// import ChatRoom from './components/ChatRoom.js';
import GameBoard from './components/GameBoard.js';
import InventoryScroll from './components/InventoryScroll.js';

import './App.css';

const store = configureStore({ reducer: cardListReducer });

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
