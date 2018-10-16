import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import bankImages from '../../../assets/images/banklogos/index';

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
  bankDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bankName: { fontSize: 24 },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginVertical: 20,
    backgroundColor: '#ccc',
  },
  balanceTitle: { fontSize: 28 },
  balanceAmount: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  selectedAccount: {
    fontSize: 14,
  }
});

class BankBalance extends PureComponent {

  render() {
    if (!this.props.bankBalance) {
      return null;
    }
    const {
      bankBalance: { balance },
      selectedBank: { bankName },
      selectedAccount,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Bank balance</Text>
        </View>
        <View style={styles.bankDetailsContainer}>
          <View>
            <Text style={styles.bankName}>{bankName}</Text>
            <Text style={styles.selectedAccount}>{selectedAccount.accountType}</Text>
          </View>
          <Image source={bankImages[bankName]} />
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>Balance</Text>
          <Text style={styles.balanceAmount}>{`£${balance}`}</Text>
        </View>
      </View>
    );
  }
}

const mapsStateToProps = (state) => {
  return {
    bankBalance: state.bankBalance.data,
    selectedBank: state.bank.selected,
    selectedAccount: state.bank.selectedAccount,
  };
};

export default connect(mapsStateToProps)(BankBalance);

BankBalance.propTypes = {
  selectedBankAccount: PropTypes.func,
  bankAccountList: PropTypes.func,
}
