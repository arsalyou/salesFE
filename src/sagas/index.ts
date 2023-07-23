import { all } from 'redux-saga/effects';

import statsSaga from './statSaga';
import visitorSaga from './visitorSaga'

export default function* rootSaga() {
    yield all([statsSaga(), visitorSaga()]);
}
