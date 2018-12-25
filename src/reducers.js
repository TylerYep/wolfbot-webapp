import { createReducer } from 'redux-starter-kit'
import { increment } from './actions'

// No need to use functional programming thanks to createReducer's implementation
const cardListReducer = createReducer([], {
  [addCard]: (state, action) => state.push(action.payload), // Payload is a Card obj

  [setCardAtIndex]: (state, action) => { // Payload is {index: 1, newCard: Card_obj}
    state[action.payload.index] = action.payload.newCard;
    return state;
  },

  [swapCardsAtIndex]: (state, action) => { // Payload is {index1: 1, index2: 2}
    const temp = state[action.payload.index1];
    state[action.payload.index1] = state[action.payload.index2];
    state[action.payload.index2] = temp;
    return state;
  }
});

export default cardListReducer;

// Essentially implements:

// import { increment } from './actions'
//
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