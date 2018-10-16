import { FETCH_INCOME_DATA_FULFILLED } from '../../constants';
import incomeReducers from './reducer';

describe('Income reducer', () => {
  it('should return the initial state', () => {
    expect(incomeReducers(undefined, {})).toEqual([]);
  });

  it('should handle FETCH_INCOME_DATA_FULFILLED', () => {
    const action = {
      type: FETCH_INCOME_DATA_FULFILLED,
      payload: 'PayPal',
    };

    const expectedState = {
      list: 'PayPal',
    };

    expect(incomeReducers({}, action)).toEqual(expectedState);
  });
});
