import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Button } from 'native-base';


export default class OverviewTab extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => ( 
      <Icon name="ios-paper" style  = {{ color: tintColor}} />
    )
  }

  render() {
    return (
     <View style={ styles.container }>
         <Text> Kyriakos Michael </Text>
         <Text> My Account Overview </Text>
         <Button rounded dark style={ styles.button } >
            <Text>Light</Text>
          </Button>
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
  button: {
 
    backgroundColor: '#fff',
   
  }
});