import React from "react";
import { DeviceEventEmitter, View, Text, ScrollView } from "react-native";
import { Button } from "antd-mobile-rn";
import LogItem from "./LogItem";
import ListenerType from "../../constants/ListenerType";
import LoggerManager from "../../log/LoggerManager";

const MAX_LOG = 1000;
export default class LogView extends React.Component {
  _logerManger:LoggerManager;
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
      hide: this.props.hide
    };
    this._logerManger = LoggerManager.getInstance();
  }

  componentDidMount(){
    this._mounted = true;
  }

  componentWillMount(){
    DeviceEventEmitter.addListener(ListenerType.LOGGER, this._notifyRefreshLogs.bind(this));
  }

  componentWillUnmount() {
    clearTimeout(this._timeoutHandle_1);
    this._timeoutHandle_1 = null;
    DeviceEventEmitter.removeListener(ListenerType.LOGGER);
  }

  _notifyRefreshLogs(logs){
    if(this.state.hide) return;
    this.setState({logs}, this._scrollToEndDelay.bind(this));
  }

  _clearLogs(){
    this._logerManger.clear();
  }


  _scrollToEnd(){
    this._mainref && this._mainref.scrollToEnd && this._mainref.scrollToEnd();
  }

  _scrollToEndDelay(time=0){
    this._timeoutHandle_1 = setTimeout(() => {
      this._scrollToEnd();
    }, time);
  }
  _onStitchPress() {
    const nextState = !this.state.hide
    this.setState({ hide: nextState });
  }

  render() {
    const openView = (
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Button style={{maxWidth: 100/ratio_width}} type="ghost" size="small" onClick={this._onStitchPress.bind(this)}>{this.state.hide ? "open" : "close"}</Button>
        {this.state.hide?null:<Button style={{maxWidth: 100/ratio_width}} type="ghost" size="small" onClick={this._clearLogs.bind(this)}>clear</Button>}
      </View>
    );

    return (
      <View style={{
          position: "absolute",
          top: 300 / ratio_height,
          maxHeight: 200 / ratio_height,
          backgroundColor: "rgba(0,0,0,0.2)"
      }}>
        {openView}
        {this.state.hide ? null : (
          <ScrollView style={{marginTop: 10/ratio_height}} ref={o => (this._mainref = o)}>
            {this.state.logs && this.state.logs.map((item, idx)=><LogItem key={`log_index_${idx}`} data={item} />)}
          </ScrollView>
        )}
      </View>
    );
  }
}
