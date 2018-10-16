import { FETCH_BANK_BALANCE_FULFILLED } from '../../constants';
import bankReducers from './reducer';

describe('Banks balance reducer', () => {
  it('should return the initial state', () => {
    expect(bankReducers(undefined, {})).toEqual([]);
  });

  it('should handle FETCH_BANK_BALANCE_FULFILLED', () => {
    const action = {
      type: FETCH_BANK_BALANCE_FULFILLED,
      payload: '3000',
    };

    const expectedState = {
      data: '3000',
    };

    expect(bankReducers({}, action)).toEqual(expectedState);
  });
});
