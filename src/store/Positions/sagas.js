import { takeEvery, put, call } from 'redux-saga/effects';

import { fetchPositionsRequest } from './../../api/requests';
import { fetchPositions } from './actions';


const fetchPositionsSaga = function* () {
  try {
    yield put(fetchPositions.request());
    const {data:positions} = yield call(fetchPositionsRequest);
    yield put(fetchPositions.success(positions));
  } catch (error) {
    yield put(fetchPositions.failure());
  }
};

export default function* () {
  yield takeEvery(fetchPositions.TRIGGER, fetchPositionsSaga);
};
