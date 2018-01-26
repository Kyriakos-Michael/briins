import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Body,  Icon, Button, Container, Header, Content, Card, CardItem, Right} from 'native-base';
import ChartC from '../Chart';



export default class OverviewTab extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => ( 
      <Icon name="ios-paper" style  = {{ color: tintColor}} />
    )
  }

  render() {
    return (
      <Container style = {styles.container}>
        <Content>
        <Body>
      <Text style = {{fontSize: 20, color: "black"}}> Dashboard Overview </Text>
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
             <Icon name="ios-trending-up" />
            
              <Right>
              <Text style = {{fontSize: 15, color: "black"}} >My Total Scoring: 100 </Text>
              </Right>
             </CardItem>
           </Card>
        </Content>
    <Container style = {{paddingLeft: 85}}>
      <Content>
          <Button bordered dark>
            <Text>             Start Recording           </Text>
          </Button>
         
      </Content>
      </Container>

      </Container>
    );
  }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
   

  }
});
