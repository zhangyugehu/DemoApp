import React from "react";
import { Text, View } from "react-native";
import { ActivityIndicator } from "antd-mobile-rn";

const TAG = "TabOneView"
export default class TabOneView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      animating: false
    };
    logger.i("constructor", TAG);
  }

  componentWillMount(){
    logger.i("componentWillMount", TAG);
  }
  componentWillUpdate(){
    logger.i("componentWillUpdate", TAG);
  }
  componentWillUnmount(){
    logger.i("componentWillUnmount", TAG);
  }

  componentDidMount() {
    logger.d("animating show", TAG);
    this.setState({animating: true});
    setTimeout(() => {
      this.setState({animating: false})
      logger.d("animating dismiss", TAG);
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
