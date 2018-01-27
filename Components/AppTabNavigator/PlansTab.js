import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Body, Container, Content, Icon, Button } from 'native-base';
import Plans from '../Plans';


export default class PlansTab extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => ( 
      <Icon name="ios-pie" style  = {{ color: tintColor}} />
    )
  }

  render() {
    return (
      <Container style = {styles.container}>
        <Content>
          <Body>
          <Text  style = {{fontSize: 25, color: 'black'}}>
                 Plans 
             </Text>
            </Body>
          <Plans />     
        </Content>
        <Content>
        <Button block>
            <Text style = {{color: 'black'}}>Add More Plans</Text>
          </Button>
        </Content>
     </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
   
  },
});
