
import { Animated, Easing } from "react-native";
import { createStackNavigator } from "react-navigation";
import Tabs from "./Tabs";
import routers from "./routers";

export default createStackNavigator({
  [Tabs.routeName]: {
    screen: Tabs,
  },
  ...routers
}, {
  // 标题导航
  headerMode: 'screen',
  // 默认先加载的页面组件
  initialRouteName: Tabs.routeName,
  // 定义跳转风格(card、modal)
  mode: 'card',
  navigationOptions: {
    gesturesEnabled: true,
    gestureDirection: 'default'
  },
  transitionConfig:()=>({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps=>{
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const height = layout.initHeight;
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      return { opacity, transform: [{ translateX }] };
    },
  })
});