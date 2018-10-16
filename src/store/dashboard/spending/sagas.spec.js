import { cloneableGenerator } from 'redux-saga/utils';
import { put, takeLatest } from 'redux-saga/effects';
import fetchingSpendingWatcher, { fetchingSpending } from './sagas';
import { FETCH_SPENDING, FETCH_SPENDING_FULFILLED } from '../../constants';

describe('Fetch spending saga ', () => {
  it('Should fetch spending', () => {
    const data = {
      allSpending: [
        {
          title: 'All',
          amount: 3000,
        },
      ],
      regularSpending: [
        {
          date: 'June 3',
          title: 'Thames Water',
          amount: 200,
        },
      ],
      dayToDaySpending: [
        {
          category: 'Groceries',
          amount: 200,
        },
      ],
    };

    const generator = cloneableGenerator(fetchingSpending)(FETCH_SPENDING, data);

    expect(generator.next().value)
      .toEqual(put({ type: FETCH_SPENDING_FULFILLED, payload: data }));
  });

  it('should listen for actions', () => {
    const generator = cloneableGenerator(fetchingSpendingWatcher)();
    expect(generator.next().value)
      .toEqual(
        takeLatest(FETCH_SPENDING, fetchingSpending),
      );
  });
});
