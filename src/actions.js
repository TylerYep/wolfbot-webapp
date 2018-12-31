import { createAction } from 'redux-starter-kit'

export const addCard = createAction('addCard')
export const setCardAtIndex = createAction('setCardAtIndex')
export const swapCardsAtIndex = createAction('swapCardsAtIndex')
export const addOver = createAction('addOver')
export const removeOver = createAction('removeOver')
export const setFrom = createAction('setFrom')
export const setTo = createAction('setTo')

// export { addCard, setCardAtIndex, swapCardsAtIndex }