import { createAction } from 'redux-starter-kit'

export const addCard = createAction('addCard')
export const setCardAtIndex = createAction('setCardAtIndex')
export const swapCardsAtIndex = createAction('swapCardsAtIndex')
export const addOver = createAction('addOver')
export const removeOver = createAction('removeOver')

// export { addCard, setCardAtIndex, swapCardsAtIndex }