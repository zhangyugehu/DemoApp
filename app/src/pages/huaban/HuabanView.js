'use strict';

import React, { Component } from 'react'
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import { Logger } from '../../components/log-view';
import { UIUtils } from '../../utils';
import {HorizontalSpliter} from '../../components/spliter';
import { NavigatorService } from '../../navigators';
import { Net } from '../../http';
import HuabanDetailsPage from './HuabanDetailsPage';
const { ratio_height, ratio_width, fontScale } = UIUtils;

const TAG = "HuabanView";
export default class HuabanView extends Component {
  static routeName = "natigator_tab_huaban_view";

  static navigationOptions = {
    title: '花瓣',
  };

  _rawBody;
  _pageNum = 1;
  constructor(props){
    super(props);
    this.state={
      refreshing: false,
      listData: [],
    }
  }

  componentDidMount(){
    this._onRefresh();
  }

  _onRefresh(){
    this._pageNum = 1;
    this._getData();
  }
  _onLoadMore(){
    this._pageNum ++;
    this._getData();
  }
  _onItemPress(item, position){
    const { navigation } = this.props;
    if(!navigation) return;
    NavigatorService.navigate(HuabanDetailsPage.routeName, {url: item.url})
  }

  _getData(){
    if(this._pageNum == 1){
      this.setState({ refreshing: true });
    }
    Net.huaban.getData(Net.huaban.Type.XQX, this._pageNum)
      .then(body=>{
        this._rawBody = body;
        const nextListData = this._pageNum>1?this.state.listData:[];
        for(const key in body){
          if(isNaN(Number(key))) continue;
          nextListData.push(body[key]);
        }
        this.setState({
          refreshing: false,
          listData: nextListData
        })
      },reason=>{
        this.setState({ refreshing: false });
        Logger.e(TAG, reason);
      });
  }

  render() {
    return (
      <View>
        <FlatList
          keyExtractor={(item,idx)=>`huaban_list_${idx}`}
          data={this.state.listData}
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh.bind(this)}
          removeClippedSubviews={true}
          onEndReachedThreshold={0.1}
          ItemSeparatorComponent={_=><HorizontalSpliter />}
          renderItem={this._renderListItem.bind(this)}
          onEndReached={this._onLoadMore.bind(this)} />
      </View>
    )
  }

  _renderListItem({item, index}){
    if(!item) return null;
    return <TouchableOpacity 
      style={{height: 111/ratio_height, flexDirection:'row', justifyContent:'center', alignItems:'center', padding: 16/ratio_width, backgroundColor: 'white'}}
      onPress={this._onItemPress.bind(this, item, index)}>
      <View style={{flex:1, marginRight: 11/ratio_width}}>
        <Text style={{fontSize: 17/fontScale, color:'#333333', marginBottom: 15/ratio_height}}>{item.title}</Text>
        <Text style={{fontSize: 12/fontScale, color:'#979797'}}>{item.url}</Text>
      </View>
      <Image 
        style={{height: 80/ratio_height, width: 110/ratio_width, borderRadius: 3/ratio_width}} 
        source={{uri: item.thumb}} />
    </TouchableOpacity>
  }
}