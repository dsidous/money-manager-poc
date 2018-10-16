import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Login from './components/pages/Login';
import Setup from './components/pages/Setup';
import ChooseBank from './components/pages/ChooseBank';
import Consent from './components/pages/Consent';
import ChooseAccount from './components/pages/ChooseAccount';
import Dashboard from './components/pages/Dashboard';
import headerImg from './assets/images/userlogin/headerImg.png';

export const switchNav = createSwitchNavigator(
  {
    Login: { screen: Login },
    Setup: { screen: Setup },
    ChooseBank: { screen: ChooseBank },
    Consent: { screen: Consent },
    ChooseAccount: { screen: ChooseAccount },
    Dashboard: { screen: Dashboard },
  },
  {
    initialRouteName: 'Login',
  },
);

export default createStackNavigator(
  {
    switchNav,
  },
  {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#000000',
            height: 28,
        },
        headerTitle: (
          <View style={{flex: 1,
            backgroundColor:'#000', 
            justifyContent: 'center',
            alignItems:'flex-start',
            paddingLeft:5,}}> 
            <Image  style={{width: '45%', height: 45}} source={ headerImg }/>
          </View>
        ),
    },
  
  cardStyle: { shadowColor: 'transparent' },
});
