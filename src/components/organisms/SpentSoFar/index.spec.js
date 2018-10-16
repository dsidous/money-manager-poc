import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SpentSoFar from './index';

configure({ adapter: new Adapter() });

describe('spent so far', () => {
  const render = shallow(<SpentSoFar />);

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });
});
