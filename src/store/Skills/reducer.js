import { handleActions } from 'redux-actions';

import { fetchSkills } from './actions';

const initialState = {
  isFetching: false,
  list: [],
};

export default handleActions({
  [fetchSkills.REQUEST]: state => ({ ...state, isFetching: true }),
  [fetchSkills.SUCCESS]: (state, action) => ({ ...state, list: action.payload, isFetching: false }),
  [fetchSkills.FAILURE]: state => ({ ...state, isFetching: false }),
}, initialState);
