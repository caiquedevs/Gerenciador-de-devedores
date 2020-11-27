import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import * as actions from './actions';
import * as types from '../types';

function* auth({ payload }) {
  console.log('SAGAS');
  try {
    const response = yield call(api.post, '/', payload);
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Sucesso ', response.data.nome);
  } catch (e) {
    toast.error(e.response.data.error);
    yield put(actions.loginFailure());
  }
}

export default all([takeLatest(types.DEVEDORES_REQUEST, auth)]);
