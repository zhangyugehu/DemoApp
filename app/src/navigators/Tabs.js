import React  from 'react'
import { createBottomTabNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import MinePage from '../pages/me/MinePage';
import HuabanView from '../pages/huaban/HuabanView';
import StarredView from '../pages/github/StarredView';

const IconNames={
  [HuabanView.routeName]: "ios-aperture",
  [StarredView.routeName]: "logo-github",
  [MinePage.routeName]: "ios-contact"
}

const Tabs = createBottomTabNavigator({
  [HuabanView.routeName]: HuabanView,
  [StarredView.routeName]: StarredView,
  [MinePage.routeName]: {
    screen: MinePage,
    tabBarLabel: 'Home!',
  }
}, {
  initialRouteName: HuabanView.routeName,
  backBehavior: 'none',
  lazy: true,
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    allowFontScaling: false,
    style: {
      backgroundColor: 'white',
    },
    labelStyle: {
      fontSize: 12
    },
    indicatorStyle:{
      height: 0
    }
  },
  navigationOptions: ({navigation})=>({
    tabBarIcon: ({ focused, tintColor })=>{
      const { routeName } = navigation.state;
      return <Ionicons name={IconNames[routeName]} size={25} color={tintColor} />;
    },
  }),
  lazy: true,
});
Tabs.routeName = "natigator_tab_page";
Tabs.navigationOptions = ({navigation})=>({
  title: "DemoApp",
});
export default Tabs;