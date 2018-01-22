import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';


export default class PlansTab extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => ( 
      <Icon name="ios-pie" style  = {{ color: tintColor}} />
    )
  }

  render() {
    return (
      <View style={ styles.container }>   
            <Text> Plans Tab </Text>
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
