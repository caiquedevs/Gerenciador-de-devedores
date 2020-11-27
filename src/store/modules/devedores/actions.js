import * as types from '../types';

export function devedoresRequest(payload) {
  return {
    type: types.DEVEDORES_REQUEST,
    payload,
  };
}

export function devedoresSuccess(payload) {
  return {
    type: types.DEVEDORES_SUCCESS,
    payload,
  };
}

export function devedoresFailure() {
  return {
    type: types.DEVEDORES_FAILURE,
  };
}
