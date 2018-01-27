import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Body,  Icon, Button, Container, Header, Content, Card, CardItem, Right} from 'native-base';
import ChartC from '../Chart';
import api from './api';



export default class OverviewTab extends React.Component {
  constructor () {
    super();
    this.state = {
      name: " "
    }
  }
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => ( 
      <Icon name="ios-paper" style  = {{ color: tintColor}} />
    )
  }
  componentDidMount () {
    api.getRovers()
    .then((res) => {
      this.setState ({
       name: api.res
      })
    })
    };
// Render Method
  render() {
    return (
      <Container style = {styles.container}>
        <Content>
        <Body>
      <Text style = {{fontSize: 25, color: "black"}}> Dashboard Overview </Text>
        </Body>
          <Card>
            <CardItem>
              <Icon active name="ios-basket" />
              <Text>Points</Text>
              <Right>
              <Text>100</Text>
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
              <Text>5 Plans</Text>
              </Right>
             </CardItem>
             <CardItem>
              <Icon  name="ios-people" />
              <Text >Refferals</Text>
              <Right>
              <Text >3 People</Text>
              </Right>
             </CardItem>
             <CardItem>
              <Right>
              <Text style = {{fontSize: 15, color: "black"}} ></Text>
              </Right>
             </CardItem>
           </Card>
        </Content>
    <Container style = {{paddingLeft: 85}}>
      <Content>
          <Button bordered dark style = {{}}>
            <Text>       My Total Scoring: 100     </Text>
          </Button>
      </Content>
      </Container>
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
