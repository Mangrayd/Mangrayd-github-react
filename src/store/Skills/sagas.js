import { takeEvery, put, call } from 'redux-saga/effects';

import { fetchSkillsRequest } from './../../api/requests';
import { fetchSkills } from './actions';

const delay = (ms) => new Promise(res=>setTimeout(res,ms));
const fetchSkillsSaga = function* () {
  try {
    yield put(fetchSkills.request());
    // yield delay(1000);
    const {data:skills} = yield call(fetchSkillsRequest);
    yield put(fetchSkills.success(skills));
  } catch (error) {
    yield put(fetchSkills.failure());
  }
};

export default function* () {
  yield takeEvery(fetchSkills.TRIGGER, fetchSkillsSaga);
};
