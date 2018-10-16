import { cloneableGenerator } from 'redux-saga/utils';
import { put, takeLatest, all } from 'redux-saga/effects';
import fetchDataWatcher, { fetchingBankData, fetchingBankAccountData } from './sagas';
import { FETCH_BANK_DATA, FETCH_BANK_DATA_FULFILLED, FETCH_BANK_ACCOUNT_DATA, FETCH_BANK_ACCOUNT_DATA_FULFILLED } from '../constants';

describe('Choose bank saga ', () => {
  it('Should fetch bank data', () => {
    const data = [{
      bankName: 'bank1',
      logoImage: 'bank1logo',
    }, {
      bankName: 'bank2',
      logoImage: 'bank2logo',
    }, {
      bankName: 'bank3',
      logoImage: 'bank3logo',
    }];
    const generator = cloneableGenerator(fetchingBankData)('bank', data);

    expect(generator.next().value).toEqual(put({ type: FETCH_BANK_DATA_FULFILLED, payload: data }));
  });

  it('Should fetch bank account data', () => {
    const data = [{
      accountType: 'account1',
      sortCode: 'sortcode1',
      accountNumber: 'accNumber1',
    }, {
      accountType: 'account2',
      sortCode: 'sortcode2',
      accountNumber: 'accNumber2',
    }, {
      accountType: 'account3',
      sortCode: 'sortcode3',
      accountNumber: 'accNumber3',
    }];
    const generator = cloneableGenerator(fetchingBankAccountData)('bankAccount', data);

    expect(generator.next().value).toEqual(put({ type: FETCH_BANK_ACCOUNT_DATA_FULFILLED, payload: data }));
  });

  it('should listen for actions', () => {
    const generator = cloneableGenerator(fetchDataWatcher)();
    const effect = generator.next().value;
    expect(effect).toEqual(all([
      takeLatest(FETCH_BANK_DATA, fetchingBankData),
      takeLatest(FETCH_BANK_ACCOUNT_DATA, fetchingBankAccountData),
    ]));
  });
});
