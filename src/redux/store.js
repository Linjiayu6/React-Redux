import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer, initialState } from './reducer.js';
const thunk = require('redux-thunk').default;
const rootReducer = combineReducers({ poi: reducer });

export const store = createStore(rootReducer, { poi: initialState }, applyMiddleware(thunk));
