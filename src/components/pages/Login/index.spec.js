import React from 'react';
import { shallow, configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import Login from './index';

configure({ adapter: new Adapter() });

describe('login', () => {

  const initialState = {
    login: {
      userList: [
        {
          user: 'user1',
          userName: 'username1',
          emailID: 'email1',
          password: 'password1',
        },
        {
          user: 'user2',
          userName: 'username2',
          emailID: 'email2',
          password: 'password2',
        },
      ],
    },
  };

  const mockStore = configureStore();
  const store = mockStore(initialState);
  const render = shallow(<Login store={store} />);

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });
});
