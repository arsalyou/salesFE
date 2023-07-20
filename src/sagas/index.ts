import { all } from 'redux-saga/effects';

import statsSaga from './statSaga';

export default function* rootSaga() {
    yield all([statsSaga()]);
}
