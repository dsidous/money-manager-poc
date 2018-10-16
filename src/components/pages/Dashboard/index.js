import React, { PureComponent } from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyledView, StyledText } from '../../atoms';
import BankBalance from '../../organisms/BankBalance';
import SpentSoFar from '../../organisms/SpentSoFar';
import Income from '../../organisms/Income';
import { FETCH_BANK_BALANCE, FETCH_SPENDING, FETCH_INCOME_DATA } from '../../../store/constants';

const styles = StyleSheet.create({
  fixBackground: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: -50,
    right: 0,
    left: 0,
    height: 100,
    zIndex: -1000,
  },
});

class Dashboard extends PureComponent {
  componentDidMount() {
    StatusBar.setBackgroundColor('#000000');
    this.props.dispatch({ type: FETCH_BANK_BALANCE });
    this.props.dispatch({ type: FETCH_SPENDING });
    this.props.dispatch({ type: FETCH_INCOME_DATA });
  }

  render() {
    return (
      <StyledView>
        <StatusBar
          barStyle="dark-content"
        />
        <StyledText size="large" style={{ paddingHorizontal: 25, marginVertical: 15 }}>
          My money hub
        </StyledText>
        <TabNav />
        <View style={styles.fixBackground} />
      </StyledView>
    );
  }
}

export default connect()(Dashboard);


export const TabNav = createBottomTabNavigator({
  Balance: { screen: BankBalance },
  Spent: { screen: SpentSoFar },
  Income: { screen: Income },
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Balance') {
          iconName = 'bank';
        } else if (routeName === 'Spent') {
          iconName = 'currency-usd';
        } else if (routeName === 'Income') {
          iconName = 'cash-100';
        }

        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: '#999',
      style: {
        backgroundColor: '#fff',
        borderTopColor: 'grey',
        borderTopWidth: 0.5,
        borderBottomWidth: 0,
        paddingTop: 10,
      },
      labelStyle: {
        fontSize: 14,
      },
      indicatorStyle: {
        height: 0,
      },
    },
  });
