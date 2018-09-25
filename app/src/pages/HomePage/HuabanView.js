'use strict';

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { HuabanApi } from '../../api';
import { Logger } from '../../components/log-view';

export default class HuabanView extends Component {

  componentDidMount(){
    HuabanApi.getData()
      .then(body=>{
        Logger.d(body);
      },reason=>{
        Logger.e(reason);
      });
  }


  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}