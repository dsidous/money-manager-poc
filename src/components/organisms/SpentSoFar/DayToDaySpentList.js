import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StyledText } from '../../atoms';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  title: {
    fontSize: 23,
  },
  amount: {
    fontSize: 24,
  }
});

const DayToDaySpentList = ({ data, sliceColor }) => {
  return data.map((item, i) => (
    <View key={i} style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <StyledText style={{ color: sliceColor[i], marginRight: 10 }}>&#9679;</StyledText>
        <StyledText style={styles.title}>{item.category}</StyledText>
      </View>
      <StyledText style={styles.amount}>{`£${item.amount}`}</StyledText>
    </View>
  ));
};

export default DayToDaySpentList;
