import React, { PureComponent } from 'react';
import { SafeAreaView, View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { StyledText } from '../../atoms';
import BarChart from './BarChart';

class SpentHistory extends PureComponent {
  render() {
    const { hideHistory } = this.props;
    return (
      <SafeAreaView style={{ marginTop: 22, flex: 1 }}>
        <View style={{ flex: 1, marginHorizontal: 25 }}>
          <View style={{ height: 20, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 8, justifyContent: 'center', alignContent: 'flex-start' }}>
              <Text style={{ textAlign: 'center' }}>
                Bill monitor
              </Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignSelf: 'flex-end' }}>
              <TouchableHighlight
                onPress={() => { hideHistory(); }}
              >
                <Text style={{ textAlign: 'right' }}>X</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginVertical: 20, paddingBottom: 20 }}>
            <StyledText size="large">
              British Gas
            </StyledText>
          </View>
          <BarChart style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginVertical: 20, paddingBottom: 20 }} />
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginVertical: 20, paddingBottom: 20 }}>
            <StyledText>Category...</StyledText>
          </View>
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginVertical: 20, paddingBottom: 20 }}>
            <StyledText style={{ marginBottom: 15 }}>Insights</StyledText>
            <StyledText>
              You could save up to £321.26
              per year on average by switching
              to a cheaper provider in your area
            </StyledText>
          </View>
        </View>
      </SafeAreaView >
    );
  }
}

export default SpentHistory;

SpentHistory.propTypes = {
  hideHistory: PropTypes.func.isRequired,
};