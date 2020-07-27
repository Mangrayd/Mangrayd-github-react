import { all, fork } from 'redux-saga/effects';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';

import skills from './Skills/sagas';
import positions from './Positions/sagas';
import person from './Person/sagas';


export default function* () {
  yield all([
    fork(routinePromiseWatcherSaga),
    fork(skills),
    fork(positions),
    fork(person),
  ]);
};
