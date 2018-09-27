import React, { Component } from 'react'
import { createBottomTabNavigator } from "react-navigation";
import { UIUtils } from '../utils';
import { HuabanView, StarredView } from '../pages/HomePage';
import Ionicons from "react-native-vector-icons/Ionicons"

const Tabs = createBottomTabNavigator({
  // Tab0: {
  //   screen: HuabanView,
  // },
  // Tab1: {
  //   screen: StarredView
  // },
  [HuabanView.routeName]: HuabanView,
  [StarredView.routeName]: StarredView
}, {
  // 切换页面时是否有动画效果
  animationEnabled: false,
  // 显示在底端，android 默认是显示在页面顶端的
  tabBarPosition: 'bottom',
  // 是否可以左右滑动切换tab
  swipeEnabled: false,
  // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
  backBehavior: 'none',
  tabBarOptions: {
    // 文字和图片选中颜色
    activeTintColor: 'tomato',
    // 文字和图片未选中颜色
    inactiveTintColor: 'gray',
    // android 默认不显示 icon, 需要设置为 true 才会显示
    showIcon: true,
    indicatorStyle: { 
      // 如TabBar下面显示有一条线，可以设高度为0后隐藏
      height: 0,
    },
    style: {
      // TabBar 背景色
      backgroundColor: '#FFFFFF'
    },
    labelStyle: {
      // 文字大小
      fontSize: 14/UIUtils.fontScale
    },
  },
  navigationOptions: ({navigation})=>({
    tabBarIcon: ({ focused, tintColor })=>{
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === HuabanView.routeName) {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } else if (routeName === StarredView.routeName) {
        iconName = `ios-options${focused ? '' : '-outline'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  lazy: true,
});
Tabs.routeName = "natigator_tab_page";
export default Tabs;