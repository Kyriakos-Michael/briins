import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content } from 'native-base';

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
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent>
            </Button>
          </Left>
          <Body>
            <Title>Profits</Title>
          </Body>
          <Right>
            <Button transparent>
            
            </Button>
          </Right>
        </Header>
        <Segment>
          <Button first>
            <Text>Profits</Text>
          </Button>
          <Button>
            <Text>Checkout</Text>
          </Button>
          <Button last active>
            <Text>Share</Text>
          </Button>
        </Segment>
        <Content padder>
          <Text>Awesome segment</Text>
        </Content>
      </Container>
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
