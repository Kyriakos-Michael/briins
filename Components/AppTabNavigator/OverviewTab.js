import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Button } from 'native-base';
import ChartC from '../Chart';


export default class OverviewTab extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => ( 
      <Icon name="ios-paper" style  = {{ color: tintColor}} />
    )
  }

  render() {
    return (
      <View style = { styles.container}>

                             {/*  <ChartC style = {styles.container}  />  */}
        <Text>TOTAL POINTS: 300 </Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
