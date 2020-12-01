/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api, { apiJSON } from '../../../services/api';
import * as actions from './actions';
import * as types from '../types';

function* devedores(pessoas) {
  try {
    const { data } = yield call(api.get, `/divida${process.env.REACT_APP_KEY}`);
    yield put(
      actions.devedoresSuccess({
        pessoas,
        dividas: data.result,
      })
    );
  } catch (e) {
    toast.error('Erro ao listar dividass');
  }
}

function* createDivida({ payload }) {
  try {
    const { data } = yield call(
      api.post,
      `/divida${process.env.REACT_APP_KEY}`,
      payload.data
    );

    yield put(
      actions.createDividaSuccess({
        ...payload.data,
        _id: data.result,
      })
    );

    yield put(actions.getPessoasRequest());
    toast.success('Sucesso ao cadastrar divida');
    payload.menu('home');
  } catch (e) {
    toast.error('Erro ao cadastrar divida');
  }
}

function* getPessoas() {
  try {
    const { data } = yield call(apiJSON.get, '/users');
    yield put(actions.getPessoasSuccess(data));
    yield devedores(data);
  } catch (e) {
    toast.error('Erro ao listar pessoas');
  }
}

function* updateDivida({ payload }) {
  try {
    yield call(
      api.put,
      `/divida/${payload._id}${process.env.REACT_APP_KEY}`,
      payload
    );
    toast.success('Sucesso ao atualizar divida');
    yield put(actions.updateDividaSuccess(payload));
  } catch (e) {
    toast.error('Erro ao atualizar divida');
  }
}

function* deleteDivida({ payload }) {
  try {
    yield call(
      api.delete,
      `/divida/${payload.idDivida}${process.env.REACT_APP_KEY}`
    );
    yield put(actions.deleteDividaSuccess(payload));
    toast.success('Sucesso ao deletar divida');
  } catch (e) {
    toast.error('Erro ao deletar divida');
  }
}

export default all([
  takeLatest(types.CREATE_DIVIDA_REQUEST, createDivida),
  takeLatest(types.GET_PESSOAS_REQUEST, getPessoas),
  takeLatest(types.UPDATE_DIVIDA_REQUEST, updateDivida),
  takeLatest(types.DELETE_DIVIDA_REQUEST, deleteDivida),
]);
