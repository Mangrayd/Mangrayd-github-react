import { handleActions } from 'redux-actions';

import { fetchPositions } from './actions';

const initialState = {
  isFetching: false,
  list: [],
};

export default handleActions({
  [fetchPositions.REQUEST]: state => ({ ...state, isFetching: true }),
  [fetchPositions.SUCCESS]: (state, action) => ({ ...state, list: action.payload, isFetching: false }),
  [fetchPositions.FAILURE]: state => ({ ...state, isFetching: false }),
}, initialState);
