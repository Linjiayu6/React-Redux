import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer, initialState } from '../biztone/reducer';

const thunk = require('redux-thunk').default;
// Add the reducer to your store on the `routing` key
import { routerReducer } from 'react-router-redux';
const rootReducer = combineReducers({
  poi: reducer,
  routing: routerReducer,
});

const storeEnhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : () => { console.log('download....'); }
);

const store = createStore(
  rootReducer,
  { poi: initialState },
  storeEnhancer
);

export default store;
