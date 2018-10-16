import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AllSpentList from './AllSpentList';

configure({ adapter: new Adapter() });

describe('All spent list', () => {
  const data = [{
    title: 'test',
    amount: 1,
  }];
  const render = shallow(<AllSpentList data={data} />);

  it('renders as expected', () => {
    expect(render).toMatchSnapshot();
  });
});
