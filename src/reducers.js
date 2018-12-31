import { createReducer } from 'redux-starter-kit'
import { addCard, setCardAtIndex, swapCardsAtIndex, addOver, removeOver } from './actions'

// No need to use functional programming thanks to createReducer's implementation
const cardListReducer = createReducer({ cards: [] }, {
  [addCard]: (state, action) => ({cards: [...state.cards, action.payload]}), // Payload is a Card obj

  [setCardAtIndex]: (state, action) => { // Payload is {index: 1, newCard: Card_obj}
    state.cards[action.payload.index] = action.payload.newCard;
    return state;
  },

  [swapCardsAtIndex]: (state, action) => { // Payload is {index1: 1, index2: 2}
    const temp = state.cards[action.payload.index1];
    state.cards[action.payload.index1] = state.cards[action.payload.index2];
    state.cards[action.payload.index2] = temp;
    return state;
  },

  [addOver]: (state, action) => {
    cards: state.cards.map(card =>
      card.id === action.payload ? card.opacity = 0.4 : card.classStr = "role-card over"
    )
  },

  [removeOver]: (state, action) => { // Payload is {index: 1, newCard: Card_obj}
    cards: state.cards.map(card => {
      card.opacity = 1;
      card.classStr = "role-card";
    })
  }
});

export default cardListReducer;

// Essentially implements:

// import { increment } from './actions'
// function counterReducer(state = 0, action) {
//   switch (action.type) {
//     // action creator can be used directly as the type for comparisons
//     case increment: {
//       return state + action.payload
//     }
//     default:
//       return state
//   }
// }