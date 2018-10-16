import React from 'react';
import { shallow, configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import TestRenderer from 'react-test-renderer';
import ChooseBank from '.';

configure({ adapter: new Adapter() });

describe('choose bank', () => {
  const initialState = {
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
  const wrapper = shallow(<ChooseBank store={store} />);


  it('renders as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Selecting first item and navigate to next screen', () => {
    const navigation = { navigate: jest.fn() };
    const testrenderer = TestRenderer.create(<ChooseBank navigation={navigation} store={store} />);
    const testinstance = testrenderer.root;

    testinstance.findAllByProps({ 'data-test': 'bank-list-item' })[0].props.onPress();
    expect(testinstance.findByProps({ 'data-test': 'nextButton' }).props.disabled).toBe(false);

    testinstance.findByProps({ 'data-test': 'nextButton' }).props.onPress();
    expect(navigation.navigate).toHaveBeenCalledWith('Consent');
  });
});
