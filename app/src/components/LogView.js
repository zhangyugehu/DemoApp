import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

export default class LogView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: "",
      hide: true
    };
  }

  componentWillUnmount(){
    clearTimeout(this._timeoutHandle_1);
    this._timeoutHandle_1 = null;
  }

  appendLog(log) {
    if (this.state.hide) return;
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.${now.getMilliseconds()}`;
    const nextLog = this.state.log + "\r\n> " + time + "\r\n\t" + log;
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
    this.setState(
      this.state.hide
        ? {hide: false}
        : {hide: true, log: ""}
    );
  }

  render() {
    const openView = (
      <TouchableOpacity
        style={{
          paddingHorizontal: 5 / ratio_width,
          justifyContent: "center"
        }}
        onPress={this._onStitchPress.bind(this)}
      >
        <Text>{this.state.hide ? "open" : "x close"}</Text>
      </TouchableOpacity>
    );

    return (
      <View
        style={[
          {
            position: "absolute",
            top: 300 / ratio_height,
            maxHeight: 200 / ratio_height,
            backgroundColor: "rgba(0,0,0,0.2)"
          },
          this.props.style
        ]}
      >
        {openView}
        <ScrollView ref={o => (this._mainref = o)}>
          <Text
            style={{ color: "white", fontSize: 10 / font_scale }}
            selectable={true}
          >
            {this.state.log}
          </Text>
        </ScrollView>
      </View>
    );
  }
}
