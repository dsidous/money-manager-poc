import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StyledView } from '../../atoms';
import SpentDetails from './SpentDetails';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: 'flex-start',
  },
  headerContainer: {
    paddingBottom: 20,
    marginVertical: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonsView: {
    flexDirection: 'row',
    alignContent: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttons: {
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderBottomWidth: 4,
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  buttonsLabel: {
    fontSize: 20,
    color: '#000',
  },
  selectedButton: {
    backgroundColor: '#529FBE',
  },
  selectedButtonLabel: {
    color: '#fff'
  }
});
export default class SpentSoFar extends PureComponent {

  state = {
    selectedView: 'allSpending'
  }

  renderButtons = () => {
    const buttons = [
      {
        label: 'All',
        value: 'allSpending'
      },
      {
        label: 'Regular',
        value: 'regularSpending'
      },
      {
        label: 'Day to day',
        value: 'dayToDaySpending'
      },
    ]

    return buttons.map(item => {
      const selected = this.state.selectedView === item.value ? styles.selectedButton : '';
      const selectedLabel = this.state.selectedView === item.value ? styles.selectedButtonLabel : '';

      return (
        <TouchableOpacity
          key={item.label}
          style={[styles.buttons, selected]}
          onPress={() => this.setState({ selectedView: item.value })}
        >
          <Text style={[styles.buttonsLabel, selectedLabel]}>{item.label}</Text>
        </TouchableOpacity>
      )
    })

  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Spent so far</Text>
        </View>
        <StyledView style={styles.buttonsView}>
          {this.renderButtons()}
        </StyledView>
        <View style={{ flex: 6 }}>
          <SpentDetails selected={this.state.selectedView} />
        </View>
      </View>
    );
  }
}
