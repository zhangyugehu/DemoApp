import React from "react";
import { Text, View } from "react-native";
import { ActivityIndicator } from "antd-mobile-rn";
import { Logger } from "../../components/log-view";

const TAG = "TabOneView"
export default class TabOneView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      animating: false
    };
  }

  componentWillMount(){
    Logger.i(TAG, "componentWillMount")
  }
  componentWillUpdate(){
    Logger.i(TAG, "componentWillUpdate")
  }
  componentWillUnmount(){
    Logger.i(TAG, "componentWillUnmount")
  }

  componentDidMount() {
    Logger.i(TAG, "componentDidMount")
    this.setState({animating: true});
    setTimeout(() => {
      this.setState({animating: false})
    }, 2000);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>TabOnView</Text>
        <ActivityIndicator
          animating={this.state.animating}
          size="small"
          text="Loading..."
        />
      </View>
    );
  }
}
