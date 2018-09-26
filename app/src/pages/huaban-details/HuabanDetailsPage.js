import React, { Component } from "react";
import { Text, View, WebView } from "react-native";
import { Logger } from "../../components/log-view";

const TAG = "HuabanDetailsPage"
export default class HuabanDetailsPage extends Component {
  static routeName = "natigator_huaban_details_page";

  constructor(props){
    super(props);
    Logger.d(TAG, this.props.name)
  }
  render() {
    return (
      <WebView style={{flex:1, backgroundColor: 'yellow'}} source={{uri: this.props.url}} />
    );
  }
}
