import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, CardItem, Thumbnail, 
         Body, Left, Right, Button, Icon} from 'native-base';

import apiGET from './AppTabNavigator/Services/apiGET';  


export default class Plans extends React.Component {
    constructor () {
        super();
        this.state = {
          Plans: ""
        }
    }
    componentDidMount () {
        apiGET.getRovers().then((res) => {
          this.setState ({
            Plans : res.plans[0].type
          })
        })
        }
    render() {
    return (
       <Card>
        <CardItem style = {{padding: 10}}>
                <Left>
                    <Thumbnail source = {require ('../assets/house.png')} />
                    <Body>
                        <Text>{this.state.Plans}</Text>
                        <Text>You are having a House Plan with Insurance.</Text>
                     </Body>
                </Left>
        </CardItem>
   
<CardItem style = {{padding: 10}}>
<Left>
    <Thumbnail source = {require ('../assets/life.png')} />
    <Body>
        <Text>Life</Text>
        <Text>You are having a Life Plan with Insurance.</Text>
     </Body>
</Left>
</CardItem>
    </Card>
        )
    };
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAFAFA',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });