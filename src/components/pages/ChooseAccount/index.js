import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { StyledText, StyledButton } from '../../atoms';
import { FETCH_BANK_ACCOUNT_DATA, SELECTED_BANK_ACCOUNT_DATA } from "../../../store/constants";
import bankImages from '../../../assets/images/banklogos/index';
import PropTypes from 'prop-types';

const styles = {
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 25,
  },
  viewDefaultStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 5
  },
  accountSelectedStyle: { backgroundColor: '#ccebff', borderColor: '#0000FF' },
  imageStyle: { width: 50, height: 50, flex: 1, marginRight: 30, resizeMode: 'contain' },
  childViewStyle: { flex: 3, flexDirection: 'column' },
  textStyle: { marginBottom: 10 },
  bottomView: { padding: 10, margin: 20, alignItems: 'center' },
}
class ChooseAccount extends PureComponent {

  componentDidMount() {
    this.props.dispatch({ type: FETCH_BANK_ACCOUNT_DATA })
  }

  renderItem = ({ item }) => {
    let selected = '';

    if (this.props.selectedBankAccount && this.props.selectedBankAccount.accountNumber === item.accountNumber) {
      selected = styles.accountSelectedStyle;
    }
    return (
      <TouchableOpacity
        onPress={() => this.props.dispatch({ type: SELECTED_BANK_ACCOUNT_DATA, payload: item })}
        data-test="account-list-item"
      >
        <View style={[styles.viewDefaultStyle, selected]}>
          <Image source={bankImages[this.props.selectedBank.bankName]} style={styles.imageStyle}></Image>
          <View style={styles.childViewStyle}>
            <Text style={styles.textStyle}>
              {this.props.selectedBank.bankName}
            </Text>
            <Text style={styles.textStyle}>
              {item.accountType}
            </Text>
            <Text style={styles.textStyle}>
              {item.sortCode}  {item.accountNumber}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <StyledText size='large' style={{ marginVertical: 15 }}>
          Select your bank account
        </StyledText>
        <StyledText style={{ marginBottom: 15 }}>
          We found three accounts in your name.
          Which account do you use on a daily
          basis?
        </StyledText>
        <FlatList
          data={this.props.bankAccountList}
          extraData={this.props}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.accountNumber}
        />
        <View style={styles.bottomView}>
          <StyledButton
            disabled={!this.props.selectedBankAccount} style={styles.continueButton}
            onPress={() => this.props.navigation.navigate('Dashboard')}
            data-test="nextButton"
          >
            Select & Continue
          </StyledButton>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedBank: state.bank.selected,
  bankAccountList: state.bank.accountList,
  selectedBankAccount: state.bank.selectedAccount
})

export default connect(mapStateToProps)(ChooseAccount);

ChooseAccount.propTypes = {
  selectedBankAccount: PropTypes.object,
  bankAccountList: PropTypes.array,
}

