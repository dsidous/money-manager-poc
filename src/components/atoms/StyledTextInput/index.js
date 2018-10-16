import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const TextInputStyling = styled.TextInput`
  border-color: gray;
  border-width: 2px;
  width: 95%;
  height: 40
  margin: 0 auto;
  paddingLeft: 45;
  fontSize: 20;
  marginHorizontal: 20;
  backgroundColor: 'rgba(255, 255, 255, 0.4)';
  borderRadius: 20;
`;

export const StyledTextInput = props => (
  <TextInputStyling
    // !!props.password
    secureTextEntry={props.secureTextEntry}
    underlineColorAndroid="rgba(0,0,0,0)"
    autoCapitalize={props.autoCapitalize}
    autoCorrect={props.autoCorrect}
    placeholder={props.placeholder}
    returnKeyType={props.returnKeyType}
    onChangeText={props.onChangeText}
  />
);
