import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Consent from './';

configure({ adapter: new Adapter() });

describe('consent', () => {
  const navigation = { navigate: jest.fn() };
  const render = shallow(<Consent navigation={navigation} />);

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });

  it('Test switch change event', () => {
    render.find('Switch').simulate('valueChange');
    render.find('StyledButton').at(1).simulate('press');
    expect(navigation.navigate).toHaveBeenCalledWith('ChooseAccount');
  });
});
