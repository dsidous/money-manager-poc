import { cloneableGenerator } from 'redux-saga/utils';
import { put, takeLatest } from 'redux-saga/effects';
import fetchIncomeWatcher, { fetchingIncomeData } from './sagas';
import { FETCH_INCOME_DATA, FETCH_INCOME_DATA_FULFILLED } from '../../constants';

describe('Choose income saga ', () => {
  it('should fetch income data', () => {
    const data = {
      income: [
        {
          date: 'Date 1',
          title: 'Title 1',
          amount: 101,
        },
        {
          date: 'Date 2',
          title: 'Title 2',
          amount: 102,
        },
      ],
    };
    const generator = cloneableGenerator(fetchingIncomeData)('income', data);

    expect(generator.next().value).toEqual(put({
      type: FETCH_INCOME_DATA_FULFILLED, payload: data,
    }));
  });

  it('should listen for actions', () => {
    const generator = cloneableGenerator(fetchIncomeWatcher)();
    expect(generator.next().value)
      .toEqual(
        takeLatest(FETCH_INCOME_DATA, fetchingIncomeData),
      );
  });
});
