import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import AppNav from './AppNav';
import store from './store/store';

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView
          style={{
            flex: 1,
            borderBottomWidth: 0,
            backgroundColor: this.props.backgroundColor || '#e9e9ee',
          }}
          forceInset={{ bottom: 'never' }}
        >
          <AppNav />
        </SafeAreaView>
      </Provider>
    );
  }
}
