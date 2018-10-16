import { put, takeLatest, all } from 'redux-saga/effects';
import {
  FETCH_BANK_DATA,
  FETCH_BANK_DATA_FULFILLED,
  FETCH_BANK_ACCOUNT_DATA,
  FETCH_BANK_ACCOUNT_DATA_FULFILLED,
} from '../constants';
import bankData from '../../data/banks.json';
import bankAccountData from '../../data/bankAccounts.json';

export function* fetchingBankData(action, data = bankData) {
  try {
    yield put({ type: FETCH_BANK_DATA_FULFILLED, payload: data });
  } catch (error) {
    console.log('fetchingBankData ==> ', error);
  }
}

export function* fetchingBankAccountData(action, data = bankAccountData) {
  try {
    yield put({ type: FETCH_BANK_ACCOUNT_DATA_FULFILLED, payload: data });
  } catch (error) {
    console.log('fetchingBankAccountData ==> ', error);
  }
}

export default function* fetchDataWatcher() {
  yield all([
    takeLatest(FETCH_BANK_DATA, fetchingBankData),
    takeLatest(FETCH_BANK_ACCOUNT_DATA, fetchingBankAccountData),
  ]);
}
