import React, { PureComponent } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#d6d6d6',
    marginBottom: 5,
    padding: 10,
  },
  headerText: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    padding: 20,
    backgroundColor: '#f1f1f1',
  },
  contentText: {
    fontSize: 18,
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 16,
    fontWeight: '500',
    padding: 10,
  },
});

const SECTIONS = [
  {
    title: 'Your account details',
    content: `We will have read access to :
      -  Your bank account details like account name, account number and sort code
      -  Your account balance and overdraft limits, available balance`,
  },
  {
    title: 'Your last 12 months account details',
    content: `-  Details of your incoming transactions 
    
-  Details of your outgoing transactions
    `,
  },
];

class AccordionView extends PureComponent {
  renderHeader(section) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  }

  renderContent(section) {
    return (
      <View style={styles.content}>
        <Text style={styles.contentText}>{section.content}</Text>
      </View>
    );
  }

  render() {
    return (
      <Accordion
        sections={SECTIONS}
        renderHeader={this.renderHeader}
        renderContent={this.renderContent}
      />
    );
  }
}

export default AccordionView;