import Tabs from "./Tabs";
import { createStackNavigator } from "react-navigation";
import HuabanDetailsPage from "../pages/huaban-details/HuabanDetailsPage";

export default createStackNavigator({
  // [Tabs.routeName]: {
  //   screen: Tabs,
  // },
  // [HuabanDetailsPage.routeName]:{
  //   screen: HuabanDetailsPage
  // }
  [Tabs.routeName]: Tabs,
  [HuabanDetailsPage.routeName]: HuabanDetailsPage
}, {
  // 标题导航
  headerMode: 'screen',
  // 默认先加载的页面组件
  initialRouteName: Tabs.routeName,
  // 定义跳转风格(card、modal)
  mode: 'modal',
});