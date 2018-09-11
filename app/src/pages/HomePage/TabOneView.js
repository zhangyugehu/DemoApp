import React from "react";
import { Text, View, ScrollView, DeviceEventEmitter } from "react-native";
import { ActivityIndicator } from "antd-mobile-rn";
import ListenerType from "../../constants/ListenerType";

export default class TabOneView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      animating: false
    };
  }

  componentDidMount() {
  }
  _appendMessage(text) {
    em.appendLog(text);
    em.test()
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{ height: 200 / ratio_height }}>
          <ScrollView
            style={{ backgroundColor: "gray" }}
            horizontal={true}
            pagingEnabled={true}
            overScrollMode={"always"}
            showsHorizontalScrollIndicator={false}
            onScrollBeginDrag={function(e) {
              this._appendMessage(
                "onScrollBeginDrag" +
                  JSON.stringify(e.nativeEvent.contentOffset)
              );
            }.bind(this)}
            onScroll={function(e) {
              this._appendMessage(
                "onScroll" + JSON.stringify(e.nativeEvent.contentOffset)
              );
            }.bind(this)}
            onScrollEndDrag={function(e) {
              this._appendMessage(
                "onScrollEndDrag" + JSON.stringify(e.nativeEvent.contentOffset)
              );
            }.bind(this)}
          >
            <View style={{ backgroundColor: "yellow", width }}>
              <Text>yellow</Text>
            </View>
            <View style={{ backgroundColor: "blue", width }}>
              <Text>blue</Text>
            </View>
            <View style={{ backgroundColor: "green", width }}>
              <Text>green</Text>
            </View>
          </ScrollView>
        </View>
        <ScrollView
          ref={ref => (this._refMessageScroll = ref)}
          contentContainerStyle={{ paddingBottom: 20 / ratio_height }}
        >
          <Text>{this.state.message}</Text>
        </ScrollView>
        <ActivityIndicator
          animating={this.state.animating}
          size="large"
          text="Loading..."
        />
      </View>
    );
  }
}
