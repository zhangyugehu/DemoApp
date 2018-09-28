import React, { Component } from "react";
import { Text, View, WebView } from "react-native";
import { Logger } from "../../components/log-view";

const TAG = "HuabanDetailsPage"
export default class HuabanDetailsPage extends Component {
  static routeName = "natigator_huaban_details_page";

  static navigationOptions = {
    headerTitle: '详情'
  };

  constructor(props){
    super(props);
  }

  componentDidMount(){
    Logger.d(TAG, this.props.navigation.getParam("url"))
  }

  render() {
    const { navigation } = this.props;
    const url = navigation.getParam("url");
    return (
      <WebView 
        style={{flex:1, backgroundColor: 'yellow'}} 
        source={{uri: url}} />
    );
  }
}
