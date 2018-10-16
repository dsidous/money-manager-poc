import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StyledButton } from '.';

configure({ adapter: new Adapter() });

describe('Styled Button', () => {
  it('renders as expected', () => {
    const render = shallow(<StyledButton />);
    expect(render).toMatchSnapshot();
  });

  it('Test press event', () => {
    const mockCallBack = jest.fn();

    const render = shallow((<StyledButton onPress={mockCallBack}>TEST</StyledButton>));
    render.find('Styled(TouchableOpacity)').simulate('press');
    expect(mockCallBack).toHaveBeenCalled();
  });

  describe('renders with disabled prop', () => {
    const mockCallBack = jest.fn();
    const render = shallow(<StyledButton disabled onPress={mockCallBack} />);

    it('renders as expected', () => {
      expect(render).toMatchSnapshot();
    });

    it('Disable press event', () => {
      render.find('Styled(TouchableOpacity)').simulate('press');
      expect(mockCallBack).not.toHaveBeenCalled();
    });
  });
});
