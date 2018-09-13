import React, { Component } from "react";
import { View, StatusBar, DeviceEventEmitter } from "react-native";
import MainView from "./app/src/pages/HomePage";
// import LogView from "./app/src/components/LogView";
import ListenerType from "./app/src/constants/ListenerType";
import LogView from "./app/src/components/log-view";
import { Log } from "./app/src/types/LogType";

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
    DeviceEventEmitter.addListener(ListenerType.LOGGER_APPEND, this._appendLog.bind(this));
    DeviceEventEmitter.addListener(ListenerType.LOGGER_I, this._logI.bind(this));
    DeviceEventEmitter.addListener(ListenerType.LOGGER_D, this._logD.bind(this));
    DeviceEventEmitter.addListener(ListenerType.LOGGER_W, this._logW.bind(this));
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeListener(ListenerType.LOGGER_APPEND);
    DeviceEventEmitter.removeListener(ListenerType.LOGGER_I);
    DeviceEventEmitter.removeListener(ListenerType.LOGGER_D);
    DeviceEventEmitter.removeListener(ListenerType.LOGGER_W);
  }

  _appendLog(message, tag, level) {
    if(!this._mounted) {
      LogView._cacheLogsBeforeMount.push(new Log(level, tag, message));
      return;
    }
    if (!LOG_ON) return;
    this._logRef && this._logRef.appendLog(message, tag, level);
  }
  _logI(message, tag){
    if(!this._mounted) return;
    if (!LOG_ON) return;
    this._logRef && this._logRef.i(message, tag);
  }
  _logD(message, tag){
    if(!this._mounted) return;
    if (!LOG_ON) return;
    this._logRef && this._logRef.d(message, tag);
  }
  _logW(message, tag){
    if(!this._mounted) return;
    if (!LOG_ON) return;
    this._logRef && this._logRef.w(message, tag);
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
