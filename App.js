import React, { Component } from "react";
import { View, StatusBar, DeviceEventEmitter, SafeAreaView } from "react-native";
import MainView from "./app/src/pages/HomePage";
// import LogView from "./app/src/components/LogView";
import ListenerType from "./app/src/constants/ListenerType";
import LogView from "./app/src/components/log-view";
import { Log } from "./app/src/types/LogType";
import AppNavigators from "./app/src/navigators";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogHide: true
    };
  }

  componentDidMount(){
    this._mounted = true;
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar translucent={false} backgroundColor="blue" />
        <AppNavigators />
        {this._renderLogView()}
      </SafeAreaView>
    );
  }
  _renderLogView() {
    return (
      <LogView ref={ref => (this._logRef = ref)} hide={this.state.isLogHide} />
    );
  }
}
