import { createStore, combineReducers } from 'redux';
import bookStoreReducer from './reducers/bookStore';

const rootReducer = combineReducers({
  bookStore: bookStoreReducer,
});

const store = createStore(rootReducer);

export default store;
