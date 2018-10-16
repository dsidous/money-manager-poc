import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StyledTextInput } from './index';

configure({ adapter: new Adapter() });

describe('styled text input', () => {

  it('renders as expected', () => {
    const render = shallow(<StyledTextInput />);
    expect(render).toMatchSnapshot();
  });

  it('renders as expected obfuscated password', () => {
    const render = shallow(<StyledTextInput password />);
    expect(render).toMatchSnapshot();
  });

});
