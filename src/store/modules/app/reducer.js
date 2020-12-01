import * as types from '../types';

const initialState = {
  pessoas: [],
  dividas: [],

  dividasPorDevedor: false,
  devedores: false,

  modalRegister: false,
  modalUpdate: { data: false, modal: false },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_DEVEDOR: {
      const newState = { ...state };

      const dividasPorDevedor = newState.dividas.filter(
        (divida) => divida.idUsuario === action.payload
      );

      newState.dividasPorDevedor = dividasPorDevedor;
      console.log('DIVIDAS DO', action.payload, newState.dividasPorDevedor);
      return newState;
    }

    case types.DEVEDORES_SUCCESS: {
      const newState = { ...state };
      const { pessoas, dividas } = action.payload;
      const ids = [];

      const devedores = dividas.filter((devedor) => {
        if (!ids.includes(devedor.idUsuario)) {
          ids.push(devedor.idUsuario);
          devedor.qtd = 0;
          return devedor;
        }
      });

      devedores.map((devedor) => {
        devedor.nome = pessoas[devedor.idUsuario - 1].name;
        dividas.map((divida) => {
          if (divida.idUsuario === devedor.idUsuario) {
            devedor.qtd += 1;
          }
        });
      });

      console.log('Dividas por devedor', newState.dividasPorDevedor.length);
      if (newState.dividasPorDevedor.length > 0) {
        console.log('ENTREI', newState.dividasPorDevedor.length > 0);
        const { idUsuario } = newState.dividasPorDevedor[0];
        const dividasPorDevedor = dividas.filter(
          (divida) => divida.idUsuario == idUsuario
        );

        newState.dividasPorDevedor = dividasPorDevedor;
      }

      newState.dividas = dividas;
      newState.devedores = devedores;

      console.log('DIVIDAS', newState.dividas);
      console.log('DEVEDORES', newState.devedores);
      return newState;
    }

    case types.MODAL_REGISTER_STATUS: {
      const newState = { ...state };
      newState.modalRegister = action.payload;
      newState.modalUpdate.modal = false;
      return newState;
    }

    case types.MODAL_UPDATE_STATUS: {
      const newState = { ...state };
      const { data, modal } = action.payload;

      if (data) {
        newState.modalUpdate.data = data;
        newState.modalUpdate.data.nome =
          newState.pessoas[newState.modalUpdate.data.idUsuario - 1].name;
      } else newState.modalUpdate.data = false;

      newState.modalUpdate.modal = modal;

      console.log('MODAL UPDATE', newState.modalUpdate);
      return newState;
    }

    case types.CREATE_DIVIDA_SUCCESS: {
      const newState = { ...state };
      newState.modalRegister = false;
      return newState;
    }

    case types.GET_PESSOAS_SUCCESS: {
      const newState = { ...state };
      newState.pessoas = action.payload;
      console.log('PESSOAS', newState.pessoas);
      return newState;
    }

    case types.UPDATE_DIVIDA_SUCCESS: {
      const newState = { ...state };
      const copyDividas = Array.from(newState.dividas);
      const copyDividaPorDevedor = Array.from(newState.dividasPorDevedor);

      const { _id, motivo, valor } = action.payload;

      copyDividaPorDevedor.map((divida) => {
        if (divida._id === _id) {
          divida.valor = valor;
          divida.motivo = motivo;
        }
      });

      newState.modalUpdate.modal = false;
      newState.dividas = copyDividas;
      newState.dividasPorDevedor = copyDividaPorDevedor;

      return newState;
    }

    case types.DELETE_DIVIDA_SUCCESS: {
      const newState = { ...state };
      const { idDivida, idUsuario } = action.payload;
      const copyDividas = Array.from(newState.dividas);
      const ids = [];

      const dividasFiltradas = copyDividas.filter(
        (divida) => divida._id !== idDivida
      );

      const dividasPorDevedor = dividasFiltradas.filter(
        (divida) => divida.idUsuario === idUsuario
      );

      const devedores = dividasFiltradas.filter((devedor) => {
        if (!ids.includes(devedor.idUsuario)) {
          ids.push(devedor.idUsuario);
          devedor.qtd = 0;
          return devedor;
        }
      });

      devedores.map((devedor) => {
        devedor.nome = newState.pessoas[devedor.idUsuario - 1].name;
        dividasFiltradas.map((divida) => {
          if (divida.idUsuario === devedor.idUsuario) {
            devedor.qtd += 1;
          }
        });
      });

      newState.modalUpdate.modal = false;
      newState.dividas = dividasFiltradas;
      newState.devedores = devedores;
      newState.dividasPorDevedor = dividasPorDevedor;
      return newState;
    }

    default: {
      return state;
    }
  }
};
