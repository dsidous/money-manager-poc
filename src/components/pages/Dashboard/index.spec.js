import React from 'react';
import { shallow, configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import TestRenderer from 'react-test-renderer';
import Dashboard from './index';

configure({ adapter: new Adapter() });

describe('dashboard', () => {
  const initialState = {
    bank: {
      selected: {
        bankName: 'bank1',
        logoImage: 'bank1logo',
      },
      accountList: [
        {
          accountType: 'account1',
          sortCode: 'sortcode1',
          accountNumber: 'accNumber1',
        },
        {
          accountType: 'account2',
          sortCode: 'sortcode2',
          accountNumber: 'accNumber2',
        },
        {
          accountType: 'account3',
          sortCode: 'sortcode3',
          accountNumber: 'accNumber3',
        },
      ],
      selectedAccount: {
        accountType: 'account1',
        sortCode: 'sortcode1',
        accountNumber: 'accNumber1',
      },
    },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const render = shallow(<Dashboard store={store} />);

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });
});
