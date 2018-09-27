import React, { Component } from "react";
import { View, Text } from "react-native";
import { ActivityIndicator } from "antd-mobile-rn";
import Api from "../../constants/api";
import { Logger } from "../../components/log-view";

const TAG = "StarredView";
export default class StarredView extends Component {
  static routeName = "natigator_tab_starred_view";
  static navigationOptions = {
    title: '我的赞',
  };
  constructor(props) {
    super(props);
    this.state = {
      animating: false
    };
  }

  componentDidMount() {
    this.setState({
      animating: true
    });
    fetch(Api.starred)
      .then(response => response.json())
      .then(response => {
        Logger.d(JSON.stringify(response), TAG)
        this.setState({ response, animating: false });
      })
      .catch(reason => {
        Logger.e(JSON.stringify(response), TAG)
        this.setState({
          animating: false
        });
        Logger.e(reason, TAG);
      });
  }

  render() {
    const repos = this.state.response;
    return (
      <View>
        <ActivityIndicator
          animating={this.state.animating}
          size="small"
          text="Loading..."
        />
        {repos &&
          repos.map &&
          repos.map((repo, idx) => {
            return (
              <Text key={`starred_repo_${idx}`}>{`${idx}-${repo.name}`}</Text>
            );
          })}
      </View>
    );
  }
}
