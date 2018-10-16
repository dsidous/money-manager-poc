import { FETCH_BANK_DATA_FULFILLED, SELECTED_BANK_DATA } from '../constants';
import bankReducers from './reducer';

describe('Banks reducer', () => {
  it('should return the initial state', () => {
    expect(bankReducers(undefined, {})).toEqual([]);
  });

  it('should handle FETCH_BANK_DATA_FULFILLED', () => {
    const action = {
      type: FETCH_BANK_DATA_FULFILLED,
      payload: 'Natwest',
    };

    const expectedState = {
      list: 'Natwest',
    };

    expect(bankReducers({}, action)).toEqual(expectedState);
  });

  it('should handle SELECTED_BANK_DATA', () => {
    const action = {
      type: SELECTED_BANK_DATA,
      payload: {
        bankName: 'Monzo',
        logoImage: 'mongologo',
      },
    };

    const expectedState = {
      selected: {
        bankName: 'Monzo',
        logoImage: 'mongologo',
      },
    };
    expect(bankReducers({}, action)).toEqual(expectedState);
  });
});
