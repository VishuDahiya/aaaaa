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
    default:
      return state;
  }
}
