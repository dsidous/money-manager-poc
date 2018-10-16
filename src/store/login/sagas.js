import { put, takeLatest } from 'redux-saga/effects';
import {
    FETCH_USER_DATA,
    FETCH_USER_DATA_FULFILLED,
} from '../constants';
import userData from '../../data/users.json';

export function* fetchingUserData(action, data = userData) {
    try {
        yield put({ type: FETCH_USER_DATA_FULFILLED, payload: data });
       } 
    catch (error) {
      console.log('fetchingUserData ==> ', error);
    }
  }

export default function* fetchLoginDataWatcher() {
    yield takeLatest(FETCH_USER_DATA, fetchingUserData);
}