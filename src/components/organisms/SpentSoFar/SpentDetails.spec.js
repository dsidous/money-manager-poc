import React from 'react';
import { shallow, configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import SpentDetails from './SpentDetails';

configure({ adapter: new Adapter() });

describe('spent details', () => {
  const initialState = {
    spending: {
      data: {
        allSpending: [
          {
            title: 'All',
            amount: 3000,
          },
        ],
        regularSpending: [
          {
            date: 'June 1',
            title: 'Camden Council Tax',
            amount: 120,
          },
          {
            date: 'June 2',
            title: 'British Gas',
            amount: 110,
          },
        ],
        dayToDaySpending: [
          {
            category: 'Groceries',
            amount: 200,
          },
        ],
      },
    },
  };

  const selected = 'regularSpending';
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const wrapper = shallow(<SpentDetails selected={selected} store={store} />);

  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
