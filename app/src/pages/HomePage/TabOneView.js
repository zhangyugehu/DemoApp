import React from "react";
import { Text, View } from "react-native";
import { ActivityIndicator } from "antd-mobile-rn";

export default class TabOneView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      animating: false
    };
  }

  componentDidMount() {
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
          size="large"
          text="Loading..."
        />
      </View>
    );
  }
}
