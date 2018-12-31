import { createReducer } from 'redux-starter-kit'
import { addCard, setCardAtIndex, swapCardsAtIndex, addOver, removeOver, setFrom, setTo } from './actions'

// No need to use functional programming thanks to createReducer's implementation
const cardListReducer = createReducer({ cards: [] }, {
  [addCard]: (state, action) => ({cards: [...state.cards, action.payload]}), // Payload is a Card obj

  [setCardAtIndex]: (state, action) => { // Payload is {index: 1, newCard: Card_obj}
    state.cards[action.payload.index] = action.payload.newCard;
    return state;
  },

  [swapCardsAtIndex]: (state, action) => {
    const temp = state.cards[state.from];
    state.cards[state.from] = state.cards[state.to];
    state.cards[state.to] = temp;
    // return state;
  },

  [addOver]: (state, action) => {
    state.cards.map(card =>
      card.id === action.payload ? card.opacity = 0.4 : card.classStr = "role-card over"
    )
  },

  [removeOver]: (state, action) => { // Payload is {index: 1, newCard: Card_obj}
    state.cards.map(card => {
      card.opacity = 1;
      card.classStr = "role-card";
      return card;
    })
  },

  [setFrom]: (state, action) => ({
    ...state,
    from: action.payload
  }),

  [setTo]: (state, action) => ({
    ...state,
    to: action.payload
  })
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