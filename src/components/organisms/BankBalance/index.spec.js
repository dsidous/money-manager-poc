import React from 'react';
import { shallow, configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import BankBalance from './index';

configure({ adapter: new Adapter() });

describe('bank balance', () => {
  const initialState = {
    bankBalance: {
      data: {
        balance: 2000,
        userName: 'Mr. T.'
      },
    },
    bank: {
      list: [
        { bankName: 'bank1', logoImage: 'bank1logo' },
        { bankName: 'bank2', logoImage: 'bank2logo' },
        { bankName: 'bank3', logoImage: 'bank3logo' },
      ],
      selected: {
        bankName: 'bank1',
        logoImage: 'bank1logo',
      },
    },
  };

  const mockStore = configureStore();
  const store = mockStore(initialState);
  const wrapper = shallow(<BankBalance store={store} />);

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
