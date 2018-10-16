import { FETCH_BANK_BALANCE_FULFILLED } from '../../constants';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_BANK_BALANCE_FULFILLED:
      return Object.assign({}, state, { data: action.payload });

    default: return state;
  }
}
