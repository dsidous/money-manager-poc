import React from 'react';
import { shallow, configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import TestRenderer from 'react-test-renderer';
import ChooseAccount from './';

configure({ adapter: new Adapter() });

describe('choose account', () => {
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
  const wrapper = shallow(<ChooseAccount store={store} />);

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Selecting first item and navigate to next screen', () => {
    const navigation = { navigate: jest.fn() };
    const testrenderer = TestRenderer.create(<ChooseAccount navigation={navigation} store={store} />);
    const testinstance = testrenderer.root;

    testinstance.findAllByProps({ 'data-test': 'account-list-item' })[0].props.onPress();
    expect(testinstance.findByProps({ 'data-test': 'nextButton' }).props.disabled).toBe(false);

    testinstance.findByProps({ 'data-test': 'nextButton' }).props.onPress();
    expect(navigation.navigate).toHaveBeenCalledWith('Dashboard');
  });
});
