import { configureStore } from 'redux-starter-kit';
import cardListReducer from './reducers';

const store = configureStore({ reducer: cardListReducer });

export default store;