import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { Bar } from 'react-native-pathjs-charts';
import { connect } from 'react-redux';
import { FETCH_BILL_MONITOR } from '../../../store/constants';

const styles = StyleSheet.create({
  container: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const options = {
  width: 300,
  height: 200,
  margin: {
    top: 20,
    left: 25,
    bottom: 50,
    right: 20,
  },
  color: '#2980B9',
  gutter: 20,
  animate: {
    type: 'oneByOne',
    duration: 200,
    fillTransition: 3,
  },
  axisX: {
    showAxis: true,
    showLines: true,
    showLabels: true,
    showTicks: true,
    zeroAxis: false,
    orient: 'bottom',
    label: {
      fontFamily: 'Arial',
      fontSize: 8,
      fontWeight: true,
      fill: '#34495E',
      rotate: 45,
    },
  },
  axisY: {
    showAxis: true,
    showLines: true,
    showLabels: true,
    showTicks: true,
    zeroAxis: false,
    orient: 'left',
    label: {
      fontFamily: 'Arial',
      fontSize: 8,
      fontWeight: true,
      fill: '#34495E',
    },
  },
};

class BarChart extends PureComponent {
  componentDidMount() {
    this.props.dispatch({ type: FETCH_BILL_MONITOR });
  }

  render() {
    if (!this.props.billData) {
      return null;
    }
    return (
      <View style={styles.container}>
        <Bar data={this.props.billData} options={options} accessorKey="value" />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    billData: state.spending.billData,
  };
};

export default connect(mapStateToProps)(BarChart);
