import { ACTION_TYPE } from './action';

export const initialState = {
  poiId: 1,
  poiName: '吃什么呢？',
};

export const reducer = (state = initialState, action) => {
  if (action.type === ACTION_TYPE) {
    return action.payload;
  }
  return state;
};
