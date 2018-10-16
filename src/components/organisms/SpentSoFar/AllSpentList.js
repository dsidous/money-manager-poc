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
  label: {
    fontSize: 23,
  },
  value: {
    fontSize: 24,
  },
});

const AllSpentList = ({ data }) => data.map(item => (
  <View key={item.title} style={styles.container}>
    <StyledText style={styles.label}>{item.title}</StyledText>
    <StyledText style={styles.value}>{`£${item.amount}`}</StyledText>
  </View>
));

export default AllSpentList;
