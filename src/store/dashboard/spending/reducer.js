import { FETCH_SPENDING_FULFILLED, FETCH_BILL_MONITOR_FULFILLED } from '../../constants';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_SPENDING_FULFILLED:
      return Object.assign({}, state, { data: action.payload });
    case FETCH_BILL_MONITOR_FULFILLED:
      return Object.assign({}, state, { billData: action.payload });

    default: return state;
  }
}
