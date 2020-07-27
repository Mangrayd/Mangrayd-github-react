import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';

import { fetchPersonRequest } from './../../api/requests';
import { fetchPerson } from './actions';


const fetchPersonSaga = function* () {
  try {
    yield put(fetchPerson.request());
    const {data:person} = yield call(fetchPersonRequest);
    // const data = yield call(fetchPersonRequest);
    // console.log(data);
    yield put(fetchPerson.success(person));
  } catch (error) {
    yield put(fetchPerson.failure());
  }
};

export default function* () {
  yield takeLatest(fetchPerson.TRIGGER, fetchPersonSaga);
};
