import React, { Component } from "react";
import { Text, View } from "react-native";
import { List } from "antd-mobile-rn";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { UIUtils } from "../../utils";
import { NavigatorService } from "../../navigators";
import GitHubTokensSettingPage from "./GitHubTokensSettingPage";
const {fontScale, ratio_width, ratio_height} = UIUtils;

export default class MinePage extends Component {
  static navigationOptions = {
    title: "我",
  };
  static routeName = "natigator_tab_mine_page";



  _onAccessClick(){
    NavigatorService.navigate(GitHubTokensSettingPage.routeName);
  }

  render() {
    return (
      <View>
        <List renderHeader={_=>"GitHub"}>
          <List.Item 
            thumb={<Ionicons style={{marginRight: 12/ratio_width}} name="logo-github" size={25} color='gray' />}
            onClick={this._onAccessClick.bind(this)}
            arrow='horizontal'>
            Personal access tokens
          </List.Item>
        </List>
      </View>
    );
  }

}
