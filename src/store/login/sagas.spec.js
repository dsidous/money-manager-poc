import { cloneableGenerator } from 'redux-saga/utils';
import { put, takeLatest } from 'redux-saga/effects';
import fetchLoginDataWatcher, { fetchingUserData } from './sagas';
import { FETCH_USER_DATA, FETCH_USER_DATA_FULFILLED } from '../constants';

describe('Choose user saga ', () => {
  it('Should fetch user list', () => {  
    const data = [
      {
        user: 'user1',
        userName:"username1",
        emailID:"email1",
        password:"password1",
      },
      {
        user: 'user2',
        userName:"username2",
        emailID:"email2",
        password:"password2",
      },
    ];

    const generator = cloneableGenerator(fetchingUserData)('login', data);

    expect(generator.next().value).toEqual(put({ type: FETCH_USER_DATA_FULFILLED, payload: data }));
  });

  it('should listen for actions', () => {
    const generator = cloneableGenerator(fetchLoginDataWatcher)();
    const effect = generator.next().value;
    expect(effect).toEqual(
      takeLatest(FETCH_USER_DATA, fetchingUserData),
    );
  });
});
