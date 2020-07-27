import { combineReducers } from 'redux';

import skills from './Skills/reducer';
import positions from './Positions/reducer';
import person from './Person/reducer';


export default combineReducers({
  skills,
  positions,
  person
});
