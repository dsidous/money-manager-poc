import { FETCH_INCOME_DATA_FULFILLED } from '../../constants';

export default function incomeReducers(state = [], action) {
  switch (action.type) {
    case FETCH_INCOME_DATA_FULFILLED:
      return Object.assign({}, state, { list: action.payload });
    default: return state;
  }
}
