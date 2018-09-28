import React, { Component } from "react";
import { Text, View, AsyncStorage } from "react-native";
import { InputItem, List, Button } from "antd-mobile-rn";
import api from "../../api";
import { Logger } from "../../components/log-view";

export default class GitHubTokensSettingPage extends Component {
  static routeName = "natigator_me_github_tokens_setting_page";
  static navigationOptions = {
    title: "Github Token"
  };

  state = {
    cachedGithubToken: api.github.config.token
  };

  componentWillMount() {
    AsyncStorage.getItem("github_access_token").then(value => {
      this.setState({ cachedGithubToken: value });
    });
  }
  componentDidMount() {
    this._refInput.focus();
  }

  _onTokenChangeText(text){
    this._accessToken=text;
  }
  _onConfirmPress(){
    if(!this._accessToken) {
      alert("empty")
      return;
    }
    AsyncStorage.setItem("github_access_token", this._accessToken, error=>{
      if(error){
        alert("失败")
      }else{
        alert("成功")
      }
    })
    // AsyncStorage.setItem("github_access_token", this._accessToken).then(_=>{
    //   api.github.config.token = this._accessToken;
    //   alert("成功")
    // }, reason=>{
    //   alert(`失败${reason}`)
    // });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <InputItem
          ref={o => (this._refInput = o)}
          defaultValue={this.state.cachedGithubToken}
          onChangeText={this._onTokenChangeText.bind(this)}
        />
        <Button type='primary' onClick={this._onConfirmPress.bind(this)}>确认</Button>
      </View>
    );
  }
}
