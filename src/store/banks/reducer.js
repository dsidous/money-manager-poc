import {
  FETCH_BANK_DATA_FULFILLED,
  SELECTED_BANK_DATA,
  FETCH_BANK_ACCOUNT_DATA_FULFILLED,
  SELECTED_BANK_ACCOUNT_DATA,
} from '../constants';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_BANK_DATA_FULFILLED:
      return Object.assign({}, state, { list: action.payload });
    case SELECTED_BANK_DATA:
      return Object.assign({}, state, { selected: action.payload });
    case FETCH_BANK_ACCOUNT_DATA_FULFILLED:
      return Object.assign({}, state, { accountList: action.payload });
    case SELECTED_BANK_ACCOUNT_DATA:
      return Object.assign({}, state, { selectedAccount: action.payload });

    default: return state;
  }
}
