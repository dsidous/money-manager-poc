import { all, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_SPENDING,
  FETCH_SPENDING_FULFILLED,
  FETCH_BILL_MONITOR,
  FETCH_BILL_MONITOR_FULFILLED,
} from '../../constants';
import data from '../../../data/spending.json';
import billdata from '../../../data/billMonitor.json';

export function* fetchingSpending(action, spendingData = data) {
  try {
    yield put({ type: FETCH_SPENDING_FULFILLED, payload: spendingData });
  } catch (error) {
    console.log('fetchingSpending ==> ', error);
  }
}

export function* fetchingBillMonitor(action, billData = billdata) {
  try {
    yield put({ type: FETCH_BILL_MONITOR_FULFILLED, payload: billData });
  } catch (error) {
    console.log('fetchingBillMonitor ==> ', error);
  }
}

export default function* fetchSpendingWatcher() {
  yield all([
    takeLatest(FETCH_SPENDING, fetchingSpending),
    takeLatest(FETCH_BILL_MONITOR, fetchingBillMonitor),
  ]);
}
