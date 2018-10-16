import React, { PureComponent } from 'react';
import { View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { StyledTextInput, StyledText, StyledButton, StyledView } from '../../atoms';
import { FETCH_USER_DATA } from "../../../store/constants";
import PropTypes from 'prop-types';

import usernameImg from '../../../assets/images/userlogin/username.png';
import passwordImg from '../../../assets/images/userlogin/password.png';
import eyeImg from '../../../assets/images/userlogin/eye_black.png';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  firstContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  centered: {
    textAlign: 'center'
  },
  small: {
    fontSize: 12
  },
  inputWrapper: {
    alignItems: 'center',
    marginBottom: 10,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 30,
    top: 9,
    tintColor: 'rgba(0,0,0,0.2)',
  },
  btnEye: {
    position: 'absolute',
    top: 10,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
  button: { marginTop: 15 },
  logoImgStyle: {
    width: '90%',
    height: '28%',
    margin: '5%',
    borderRadius: 8,
  }
};


class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      loginDisable: true,
      showPass: true,
      press: false,
      isError: false,
      errorMessage: 'User name and/or password is invalid!',
    };
    this.showPass = this.showPass.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({ type: FETCH_USER_DATA })
  }

  onChangeText = (key, val) => {
    this.setState({
      [key]: val
    })
  }

  loginAuthentication = (e) => {

    const result1 = this.props.userList;
    const result2 = {
      userName: this.state.userName,
      password: this.state.password
    };

    let result = result1.filter(
      obj => result2.userName === obj.userName
        && result2.password === obj.password
    );

    if (result.length > 0) {
      this.props.navigation.navigate('Setup');
      this.setState({
        isError: false
      });
    }
    else {
      this.setState({
        isError: true
      });
    }
    e.preventDefault();
  }
  showPass() {
    this.state.press === false
      ? this.setState({ showPass: false, press: true })
      : this.setState({ showPass: true, press: false });
  }

  render() {
    const { userName, password } = this.state;
    const isEnabled =
      (userName.length > 0 &&
        password.length > 0);

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <StyledView style={styles.firstContainer}>
          <View style={styles.inputWrapper}>
            <Image source={usernameImg} style={styles.inlineImg} />
            <StyledTextInput
              value={this.state.userName}
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={val => this.onChangeText('userName', val)}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Image source={passwordImg} style={styles.inlineImg} />
            <StyledTextInput password
              value={this.state.password}
              placeholder='Password'
              secureTextEntry={this.state.showPass}
              returnKeyType={'done'}
              autoCorrect={false}
              onChangeText={val => this.onChangeText('password', val)}
            />

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btnEye}
              onPress={this.showPass}>
              <Image source={eyeImg} style={styles.iconEye} />
            </TouchableOpacity>
          </View>
          <View>
            {
              this.state.isError ?
                <StyledText size='small' color style={styles.centered}>{this.state.errorMessage}</StyledText>
                : <StyledText />
            }
          </View>
          <View style={{ paddingHorizontal: 80 }}>
            <StyledButton
              style={styles.button} disabled={!isEnabled}
              onPress={(e) => this.loginAuthentication(e)}
            >
              LOGIN
            </StyledButton>
          </View>
        </StyledView>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => ({
  userList: state.login.userList,
  selected: state.login.selected
})

Login.propTypes = {
  userList: PropTypes.array,
  navigation: PropTypes.object,
}

export default connect(mapStateToProps)(Login);
