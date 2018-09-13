import React, { Component } from "react";
import { View, StatusBar, DeviceEventEmitter } from "react-native";
import MainView from "./app/src/pages/HomePage";
import LogView from "./app/src/components/LogView";
import ListenerType from "./app/src/constants/ListenerType";

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

  componentWillMount() {
    DeviceEventEmitter.addListener(
      ListenerType.LOGGER_APPEND,
      this._appendLog.bind(this)
    );
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeListener(ListenerType.LOGGER_APPEND);
  }

  _appendLog(text) {
    if(!this._mounted) return;
    if (!LOG_ON) return;
    this._logRef && this._logRef.appendLog(text);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} backgroundColor="blue" />
        <MainView />
        {this._renderLogView()}
      </View>
    );
  }
  _renderLogView() {
    if (!LOG_ON) return null;
    return (
      <LogView ref={ref => (this._logRef = ref)} hide={this.state.isLogHide} />
    );
  }
}
