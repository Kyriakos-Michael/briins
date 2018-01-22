import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';


export default class InvitersTab extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => ( 
      <Icon name="ios-glasses" style  = {{ color: tintColor}} />
    )
  }

  render() {
    return (
      <View style={ styles.container }>
         <Text> Inviters Tab </Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF9F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
