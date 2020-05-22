import { takeLatest, call, put, all } from 'redux-saga/effects';
import { signInSucess, signFailure } from './actions';
import history from '~/services/history';

import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;
    if (!user.provider) {
      console.tron.error('Not provider');
      return;
    }
    yield put(signInSucess(token, user));

    history.push('/dashboard');
  } catch (err) {
    yield put(signFailure());
    console.log(`ERROOR-> ${err}`);
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);