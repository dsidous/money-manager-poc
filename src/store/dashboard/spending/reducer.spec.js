import { FETCH_SPENDING_FULFILLED } from '../../constants';
import spending from './reducer';

describe('Spending reducer', () => {
  it('should return the initial state', () => {
    expect(spending(undefined, {})).toEqual([]);
  });

  it('should handle FETCH_SPENDING_FULFILLED', () => {
    const action = {
      type: FETCH_SPENDING_FULFILLED,
      payload: '3000',
    };

    const expectedState = {
      data: '3000',
    };

    expect(spending({}, action)).toEqual(expectedState);
  });
});
