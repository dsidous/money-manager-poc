import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StyledText } from './index';

configure({ adapter: new Adapter() });

describe('styled text', () => {

  it('renders as expected', () => {
    const render = shallow(<StyledText />);
    expect(render).toMatchSnapshot();
  });

  it('renders large font size as expected', () => {
    const render = shallow(<StyledText size />);
    expect(render).toMatchSnapshot();
  });

  it('renders bold font as expected', () => {
    const render = shallow(<StyledText weight />);
    expect(render).toMatchSnapshot();
  });
});
