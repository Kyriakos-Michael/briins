import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Icon } from 'native-base';
import { TabNavigator } from 'react-navigation';

import OverviewTab from './AppTabNavigator/OverviewTab';
import PlansTab from './AppTabNavigator/PlansTab';
import InvitersTab from './AppTabNavigator/InvitersTab';
import EarningsTab from './AppTabNavigator/EarningsTab';




export default class MainScreen extends React.Component {

    static navigationOptions = {
        headerLeft: <Icon name="ios-person-outline" style = {{ paddingLeft: 10 }} />,
        title: "briins",
        headerRight: <Icon name="ios-grid-outline" style={{ paddingRight: 10 }} />
    }
  render() {
    return (
    <AppTabNavigator />
    );
  }
}
const AppTabNavigator = TabNavigator ({
    OverviewTab: {
        screen: OverviewTab
    },
    PlansTab: {
        screen: PlansTab
    },
    InvitersTab: {
        screen: InvitersTab
    },
    EarningsTab: {
        screen: EarningsTab
    }
}, {

animationEnabled: true,
swipeEnabled: true,
tabBarPosition: "bottom",
tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel: false,
    showIcon: true
}


}
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
