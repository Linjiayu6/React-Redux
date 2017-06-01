import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer, initialState } from '../biztone/reducer';

const thunk = require('redux-thunk').default;
import { routerReducer } from 'react-router-redux';
// routerReducer 将history和store绑定, 放到store里面
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
