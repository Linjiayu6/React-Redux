export const ACTION_TYPE = 'ACTION_TYPE';

export const onHandler = () => (dispatch) => {
  dispatch({
    type: ACTION_TYPE,
    payload: { poiId: 666, poiName: '不要停, 礼物走起' },
  });
};
