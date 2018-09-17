import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Button } from "antd-mobile-rn";
import LogItem from "./LogItem";
import { Log } from "../../types/LogType";

const MAX_LOG = 1000;
export default class LogView extends React.PureComponent {
  static _cacheLogsBeforeMount=[];
  constructor(props) {
    super(props);
    this.state = {
      logs: LogView._cacheLogsBeforeMount,
      hide: this.props.hide
    };
    LogView._cacheLogsBeforeMount = [];
  }

  componentWillUnmount() {
    clearTimeout(this._timeoutHandle_1);
    this._timeoutHandle_1 = null;
  }

  i(message, tag){
    this.appendLog(message, tag, Log.Level.I);
  }
  d(message, tag){
    this.appendLog(message, tag, Log.Level.D);
  }
  w(message, tag){
    this.appendLog(message, tag, Log.Level.W);
  }

  appendLog(message, tag, level=Log.Level.I) {
    if (this.state.hide) return;
    let nextLogs = this.state.logs;
    nextLogs = nextLogs.slice(-MAX_LOG);
    nextLogs.push(new Log(level, tag, message));
    this.setState({
      logs: nextLogs
    },this._scrollToEndDelay.bind(this));
  }

  clearLogs(){
    this.setState({
      logs: []
    })
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
    this.setState({ hide: nextState }, ()=>{
      if(nextState){
        this._scrollToEnd();
      }
    });
  }

  render() {
    const openView = (
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Button style={{maxWidth: 100/ratio_width}} type="ghost" size="small" onClick={this._onStitchPress.bind(this)}>{this.state.hide ? "open" : "close"}</Button>
        {this.state.hide?null:<Button style={{maxWidth: 100/ratio_width}} type="ghost" size="small" onClick={this.clearLogs.bind(this)}>clear</Button>}
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
