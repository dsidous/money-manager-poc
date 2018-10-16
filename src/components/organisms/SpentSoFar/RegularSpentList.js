import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { StyledText } from '../../atoms';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  containerLeft: {
    paddingVertical: 5,
  },
  date: {
    fontSize: 18,
  },
  title: {
    fontSize: 23,
  },
  amount: {
    fontSize: 24,
  }
});

const RegularSpentList = ({ data, sliceColor, showHistory }) => data.map((item, i) => (
  <TouchableOpacity
    key={i}
    onPress={() => showHistory(item)}
  >
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ alignSelf: 'center' }}>
          <Text style={{ color: sliceColor[i], marginRight: 10 }}>&#9679;</Text>
        </View>

        <View style={styles.containerLeft}>
          <StyledText style={styles.date}>{item.date}</StyledText>
          <StyledText style={styles.title}>{item.title}</StyledText>
        </View>
      </View>
      <View>
        <StyledText style={styles.amount}>{`£${item.amount}`}</StyledText>
      </View>
    </View>
  </TouchableOpacity>
));

export default RegularSpentList;
