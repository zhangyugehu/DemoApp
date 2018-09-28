import React, { Component } from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import LogView, { Logger } from "./app/src/components/log-view";
import { Stacks, NavigatorService } from "./app/src/navigators";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogHide: false
    };
  }

  componentDidMount(){
    this._mounted = true;
  }


  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar translucent={false} backgroundColor="blue" />
        <Stacks ref={navigatorRef=>{
          NavigatorService.setRootNavigator(navigatorRef);
        }} onNavigationStateChange={(prevState, currentState)=>{
          // gets the current screen from navigation state
          function getCurrentRouteName(navigationState) {
            if (!navigationState) {
                return null;
            }
            const route = navigationState.routes[navigationState.index];
            // dive into nested navigators
            if (route.routes) {
                return getCurrentRouteName(route);
            }
            return route.routeName;
          }
          const prevScreen = getCurrentRouteName(prevState);
          const currentScreen = getCurrentRouteName(currentState);
          if(prevScreen !== currentScreen){
            Logger.i("React Navigation", currentScreen);
          }
        }} />
        {this._renderLogView()}
      </SafeAreaView>
    );
  }
  _renderLogView() {
    if(!LOG_ON) return null;
    return (
      <LogView ref={ref => (this._logRef = ref)} hide={this.state.isLogHide} />
    );
  }
}
