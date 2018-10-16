import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_BANK_BALANCE, FETCH_BANK_BALANCE_FULFILLED } from '../../constants';
import data from '../../../data/bankBalance.json';

export function* fetchingBankBalance(action, actionData = data) {
  try {
    yield put({ type: FETCH_BANK_BALANCE_FULFILLED, payload: actionData });
  } catch (error) {
    console.log('fetchingBankBalance ==> ', error);
  }
}

export default function* fetchBankBalanceWatcher() {
  yield takeLatest(FETCH_BANK_BALANCE, fetchingBankBalance);
}
