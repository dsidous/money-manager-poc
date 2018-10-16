import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DayToDaySpentList from './DayToDaySpentList';

configure({ adapter: new Adapter() });

describe('DayToDay spent list', () => {
  const data = [{
    category: 'test',
    amount: 1,
  }];
  const sliceColor = [];
  const render = shallow(<DayToDaySpentList data={data} sliceColor={sliceColor} />);

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });
});
