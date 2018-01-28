import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Body,  Icon, Button, Container, Header, Content, Card, CardItem, Right, ActionSheet} from 'native-base';
import apiGET from './Services/apiGET';
import apiGETRefferals from './Services/apiGETRefferals';  



var BUTTONS = [
  { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
  { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
import ChartC from '../Chart';
import api from './api';

export default class OverviewTab extends React.Component {
  constructor () {
    super();
    this.state = {
      name: " ",
      Points: " ",
      Email: "",
      Plan: "",
      Refferals: ""
    }
  }
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => ( 
      <Icon name="ios-paper" style  = {{ color: tintColor}} />
    )
  }

  // POST
  componentDidMount () {
    api.getRovers()
    .then((res) => {
      this.setState ({
       // name: api.res,
      
      })
    })
    };

 // GET 
    componentDidMount () {
      apiGET.getRovers().then((res) => {
        this.setState ({
          Points : res.points,
          Email: res.email,
          name: res.name,
          Plan: res.plans
        })
      }, 
    )
      apiGETRefferals.getRovers().then((res) => {
        this.setState ({
          Refferals : res
        })
      },
    )
      }

    
    
// Render Method
  render() {
    return (
      <Container style = {styles.container}>
        <Content>
        <Body>
      <Text style = {{fontSize: 25, color: "black"}}> Dashboard Overview </Text>
      <Text  style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>{this.state.name}</Text>

        </Body>
          <Card>
            <CardItem>
              <Icon active name="ios-basket" />
              <Text>Total Points</Text>
              <Right>
              <Text>{this.state.Points}</Text>
              </Right>
             </CardItem>
             <CardItem>
              <Icon  name="ios-cash-outline" />
              <Text>Profits</Text>
              <Right>
              <Text>$200</Text>
              </Right>
             </CardItem>
             <CardItem>
              <Icon  name="ios-bookmarks-outline" />
              <Text>Plans</Text>
              <Right>
              <Text>{this.state.Plan.length}</Text>
              </Right>
             </CardItem>
             <CardItem>
              <Icon  name="ios-people" />
              <Text >Refferals</Text>
              <Right>
              <Text >{this.state.Refferals.length} People</Text>
              </Right>
             </CardItem>
             <CardItem>
              <Right>
              <Text style = {{fontSize: 15, color: "black"}} ></Text>
              </Right>
             </CardItem>
           </Card>
        </Content>
   
        <View style = {{ flex: 1,flexDirection: 'row',  justifyContent: 'center', alignItems: 'center'}}>
        <Button style = {{backgroundColor: 'transparent'}}onPress={() =>alert('This button will Begin Recording')}>
<Icon  name='ios-speedometer-outline' style={{fontSize: 80 ,color: "black"}}/>  
      <Text>Start</Text>
        </Button> 
        <Button style = {{backgroundColor: 'transparent'}}onPress={() =>alert('This button will Stop Recording')}>
<Icon  name='ios-speedometer-outline' style={{fontSize: 80, color: "black"}}/>  
      <Text> Stop </Text>
        </Button> 
        </View>
  
      
      </Container>
    );
   }
  }
  // Layout Styles 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
});
