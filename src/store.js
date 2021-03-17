import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {
	characterInfoReducer,
	chracterListReducer,
} from './reducers/characterReducers';

// Cleaner than adding one-by-one to the store
const reducer = combineReducers({
	characterList: chracterListReducer,
	characterInfo: characterInfoReducer,
});

// Cleaner than adding one by one to applyMiddleware
const middleware = [thunk, logger];

const store = createStore(
	reducer,
	// I like using the redux-devtools-extension and being able to scrub through the redux history
	composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
