import React, { Component } from "react";
import { View, FlatList, TouchableOpacity, Text, Image, AsyncStorage } from "react-native";
import { Logger } from "../../components/log-view";
import { UIUtils } from "../../utils";
import { Net } from "../../http";
import api from "../../api";
const { fontScale, ratio_width, ratio_height } = UIUtils;

const TAG = "StarredView";
export default class StarredView extends Component {
  static routeName = "natigator_tab_starred_view";
  static navigationOptions = {
    title: '收藏'
  };

  state={
    animating: false,
    repos:[],
  };

  componentDidMount() {
    AsyncStorage.getItem("github_access_token").then(value => {
      api.github.config.token=value;
      this._loadData();
    });
  }

  _loadData(){
    this.setState({ animating: true });
    Net.github.getStarred().then(resp=>{
      this.setState({ animating: false });
      return resp.json?resp.json():Promise.resolve(resp);
    })
      .then(response=>{
        const { message } = response;
        if(!!message){
          alert(message);
          return;
        }
        this.setState({
          repos:response
        })
      }, reason=>{
        Logger.e(TAG, reason);
      });
  }

  _onItemPress(item, position){

  }

  render() {
    const {repos} = this.state;
    return (
      <View>
        <FlatList 
          keyExtractor={(item, index)=>`${item.id}_${index}`}
          data={repos}
          renderItem={this._renderItemView.bind(this)} />
      </View>
    );
  }

  _renderItemView({item, index}){
    if(!item) return null;
    const { name, owner, html_url, description, url, stargazers_count, watchers_count, language } = item;
    return (
      <TouchableOpacity 
        style={{height: 111/ratio_height, flexDirection:'row', justifyContent:'center', alignItems:'center', padding: 16/ratio_width, backgroundColor: 'white'}}
        onPress={this._onItemPress.bind(this, item, index)}>
        <View style={{flex:1, marginRight: 11/ratio_width}}>
          <Text style={{fontSize: 17/fontScale, color:'#333333', marginBottom: 15/ratio_height}}>{name}</Text>
          <Text style={{fontSize: 12/fontScale, color:'#979797'}} numberOfLines={3} >{description}</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: 8/ratio_height}}>
            <Text>{`👀 ${watchers_count}`}</Text>
            <Text>{`👍 ${stargazers_count}`}</Text>
          </View>
        </View>
        <Image 
          style={{height: 80/ratio_height, width: 110/ratio_width, borderRadius: 3/ratio_width}} 
          source={{uri: owner.avatar_url}} />
      </TouchableOpacity>
    );
  }
}
