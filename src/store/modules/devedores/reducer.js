import * as types from '../types';

const initialState = {
  devedores: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.DEVEDORES_SUCCESS: {
      const newState = { ...state };
      return newState;
    }

    case types.DEVEDORES_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }

    default: {
      return state;
    }
  }
};
