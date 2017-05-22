import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer, initialState } from '../biztone/reducer';
const thunk = require('redux-thunk').default;
const rootReducer = combineReducers({ poi: reducer });

const store = createStore(rootReducer, { poi: initialState }, applyMiddleware(thunk));
export default store;
