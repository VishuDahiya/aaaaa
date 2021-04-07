import types from '../types';

const initialState = {
  email: '',
  password: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN: {
      return {...state};
    }
    case types.ADD_To_CART: {
      return {...state};
    }
    default:
      return state;
  }
}
