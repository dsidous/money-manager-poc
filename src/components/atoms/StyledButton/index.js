import React from 'react';
import styled from 'styled-components/native';

const colors = {
  accent: '#2E7AF6',
  disabled: '#C9C9C9',
  contrast: '#FFF',
};
const Label = styled.Text`
  color: ${props => props.disabled
    ? '#808080'
    : props.outlined ? colors.accent : colors.contrast};
  font-weight: 700;
  font-size: 20px;  
  align-self: center;
  padding: 20px;
`;

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${props => props.disabled
    ? colors.disabled
    : props.outlined ? '#fff' : colors.accent};
  border-color: ${props => props.disabled
    ? colors.disabled
    : colors.accent};
  border-width: 2px;
  border-radius: 50;
`;

export const StyledButton = (props) => {
  return (
    <ButtonContainer
      underlayColor={colors.highlight}
      disabled={props.disabled}
      outlined={props.outlined}
      onPress={(props.disabled) ? null : props.onPress}
      style={props.style}
    >
      <Label
        disabled={props.disabled}
        outlined={props.outlined}
      >
        {props.children}
      </Label>
    </ButtonContainer>
  );
};