import { FETCH_USER_DATA_FULFILLED, FETCH_USER_DATA } from '../constants';
import loginReducers from './reducer';

describe('Login reducer', () => {
  it('should return the initial state', () => {
    expect(loginReducers(undefined, {})).toEqual([]);
  });

  it('should handle FETCH_USER_DATA_FULFILLED', () => {
    const action = {
      type: FETCH_USER_DATA_FULFILLED,
      payload: 'username',
    };

    const expectedState = {
      userList: 'username',
    };

    expect(loginReducers({}, action)).toEqual(expectedState);
  });

//   it('should handle SELECTED_USER_DATA', () => {
//     const action = {
//       type: FETCH_USER_DATA,
//       payload: {
//         bankName: 'Monzo',
//         logoImage: 'mongologo',
//       },
//     };

//     const expectedState = {
//       selected: {
//         bankName: 'Monzo',
//         logoImage: 'mongologo',
//       },
//     };
//     expect(loginReducers({}, action)).toEqual(expectedState);
//   });
});
