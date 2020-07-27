import { handleActions } from 'redux-actions';

import { fetchPerson } from './actions';
import update from "immutability-helper";
update.extend('$object', (value, object) => object ? update(object, value) : update({}, value));
const initialState = {};

export default handleActions({
  [fetchPerson.REQUEST]: state => update(state, { $object: { isFetching: { $set: true } } },),
  [fetchPerson.SUCCESS]: (state, action) => update(state, { $object: { $merge: { data:action.payload, isFetching: false } } },),
  [fetchPerson.FAILURE]: state => update(state, { $object: { $merge: { isFetching: false } } },),
}, initialState);
