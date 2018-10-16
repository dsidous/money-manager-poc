import { all } from 'redux-saga/effects';
import fetchDataWatcher from './banks/sagas';
import fetchBankBalanceWatcher from './dashboard/bankBalance/sagas';
import fetchIncomeWatcher from './dashboard/income/sagas';
import fetchSpendingWatcher from './dashboard/spending/sagas';
import fetchLoginDataWatcher from './login/sagas';

export default function* rootSagas() {
    yield all([
        fetchDataWatcher(),
        fetchBankBalanceWatcher(),
        fetchIncomeWatcher(),
        fetchSpendingWatcher(),
        fetchLoginDataWatcher(),
    ]);
}
