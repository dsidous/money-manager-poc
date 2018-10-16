import { cloneableGenerator } from 'redux-saga/utils';
import { put, takeLatest } from 'redux-saga/effects';
import fetchingBankBalanceWatcher, { fetchingBankBalance } from './sagas';
import { FETCH_BANK_BALANCE, FETCH_BANK_BALANCE_FULFILLED } from '../../constants';

describe('Fetch bank balance saga ', () => {
  it('Should fetch bank balance', () => {
    const data = {
      balance: 3000,
      userName: 'Mr T',
    };
    const generator = cloneableGenerator(fetchingBankBalance)(FETCH_BANK_BALANCE, data);

    expect(generator.next().value)
      .toEqual(put({ type: FETCH_BANK_BALANCE_FULFILLED, payload: data }));
  });

  it('should listen for actions', () => {
    const generator = cloneableGenerator(fetchingBankBalanceWatcher)();
    expect(generator.next().value)
      .toEqual(
        takeLatest(FETCH_BANK_BALANCE, fetchingBankBalance),
      );
  });
});
