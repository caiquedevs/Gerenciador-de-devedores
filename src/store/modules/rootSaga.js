import { all } from 'redux-saga/effects';

import devedores from './devedores/sagas';

export default function* rootSaga() {
  return yield all([devedores]);
}
