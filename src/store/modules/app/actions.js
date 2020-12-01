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

export function selectDevedor(payload) {
  return {
    type: types.SELECT_DEVEDOR,
    payload,
  };
}

export function modalRegisterStatus(payload) {
  return {
    type: types.MODAL_REGISTER_STATUS,
    payload,
  };
}
export function modalUpdateStatus(payload) {
  return {
    type: types.MODAL_UPDATE_STATUS,
    payload,
  };
}

export function createDividaRequest(payload) {
  return {
    type: types.CREATE_DIVIDA_REQUEST,
    payload,
  };
}
export function createDividaSuccess(payload) {
  return {
    type: types.CREATE_DIVIDA_SUCCESS,
    payload,
  };
}

export function getPessoasRequest(payload) {
  return {
    type: types.GET_PESSOAS_REQUEST,
    payload,
  };
}
export function getPessoasSuccess(payload) {
  return {
    type: types.GET_PESSOAS_SUCCESS,
    payload,
  };
}

export function updateDividaRequest(payload) {
  return {
    type: types.UPDATE_DIVIDA_REQUEST,
    payload,
  };
}
export function updateDividaSuccess(payload) {
  return {
    type: types.UPDATE_DIVIDA_SUCCESS,
    payload,
  };
}

export function deleteDividaRequest(payload) {
  return {
    type: types.DELETE_DIVIDA_REQUEST,
    payload,
  };
}
export function deleteDividaSuccess(payload) {
  return {
    type: types.DELETE_DIVIDA_SUCCESS,
    payload,
  };
}
