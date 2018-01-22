import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Icon } from 'native-base';
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
          <Plans />     
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
