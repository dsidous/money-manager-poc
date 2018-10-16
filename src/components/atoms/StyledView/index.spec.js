import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StyledView } from './index';

configure({ adapter: new Adapter() });

describe('styled view', () => {

    it('renders as expected', () => {
      const render = shallow(<StyledView />);
      expect(render).toMatchSnapshot();
    });
  });