import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { Icon,  } from 'native-base';

import { SocialIcon } from 'react-native-elements'




const checkout = () => {
    
}

export default class EarningsTab extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => ( 
      <Icon name="ios-pulse" style  = {{ color: tintColor}} />
    )
  }

 
  render() {
    return (
      <View style={ styles.container }>
         <Text> AMAZING! Your Total points are 500!</Text>
         <Text> $100 in Profits </Text>

         <Icon name="ios-cart-outline" size={60}/>
          <Button  title="CHECKOUT" 
           color="#64DD17"
           onPress={checkout} style = {{borderStyle: 'solid'}} />
           <Text style = {{ fontSize: 10, fontWeight: 'bold'}}> Use checkout Button to Complete your Missing Installments. </Text>
          
          <Text> Share your Recent Achivment! </Text>
           <SocialIcon
          type='twitter'
                          />
         <SocialIcon
          type='facebook'
                          />

     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEFF1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
