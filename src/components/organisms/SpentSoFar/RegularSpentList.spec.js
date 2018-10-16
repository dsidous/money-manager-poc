import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RegularSpentList from './RegularSpentList';

configure({ adapter: new Adapter() });

describe('Regular spent list', () => {
  const data = [{
    category: 'test',
    amount: 1,
  }];
  const sliceColor = [];
  const render = shallow(<RegularSpentList data={data} sliceColor={sliceColor} />);

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });
});
