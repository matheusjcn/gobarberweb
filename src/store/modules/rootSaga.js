import { all } from 'redux-saga/effects';

import auth from './auth/sagas';

import user from './auth/sagas';

export default function* rootSaga() {
  return yield all([auth, user]);
}
