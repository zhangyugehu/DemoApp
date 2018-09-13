import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Button } from "antd-mobile-rn";

export default class LogView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      log: "",
      hide: this.props.hide
    };
  }

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    clearTimeout(this._timeoutHandle_1);
    this._timeoutHandle_1 = null;
  }

  appendLog(log, tag) {
    if (this.state.hide) return;
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.${now.getMilliseconds()}`;
    const nextLog = this.state.log + "\r\n> " + time + "\r\n\t" + log + (<Text style={{color:'red'}}>tag</Text>);
    this.setState({ log: nextLog }, () => {
      this._timeoutHandle_1 = setTimeout(() => {
        this._mainref.scrollToEnd();
      });
    });
  }

  appendInfo(info) {
    if (this.state.hide) return;
    // TODO
  }

  appendWarning(warning) {
    if (this.state.hide) return;
    // TODO
  }

  clearLog() {
    if (this.state.hide) return;
    this.setState({ log: "" });
  }

  _onStitchPress() {
    this.setState({ hide: !this.state.hide });
  }

  render() {
    const openView = (
      <Button type="ghost" size="small" onClick={this._onStitchPress.bind(this)}>{this.state.hide ? "open" : "close"}</Button>
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
          <ScrollView ref={o => (this._mainref = o)}>
            <Button type="ghost" size="small" onClick={this.clearLog.bind(this)}>clear</Button>
            <Text style={{ color: "white", fontSize: 10 / font_scale }} selectable={true}>
              {this.state.log}
            </Text>
          </ScrollView>
        )}
      </View>
    );
  }
}
