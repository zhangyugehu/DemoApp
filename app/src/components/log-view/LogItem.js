import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Log } from '../../types/LogType';

export default class LogItem extends Component {
  render() {
    const data: Log = this.props.data;
    if(!data) return null;
    const {level, tag, time, message} = data;
    let color = "#E8E8E8";
    switch(level){
      case Log.Level.W:
        color="#f86865";
        break;
      case Log.Level.D:
        color="#287bde";
        break;
      case Log.Level.I:
      default:
        color="#434343";
        break;
    }
    const formatTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}.${time.getMilliseconds()}`
    return (
      <View >
        {/* <Text style={{color, fontSize: 10 / font_scale}}>{formatTime}/<Text>{level}</Text>/<Text>{tag}: </Text>/<Text>{message}</Text></Text> */}
        <Text style={{color, fontSize: 10 / font_scale}}>{`[${formatTime}]  ${level?level:Log.Level.I}/${tag?tag:""}:  `}<Text style={{fontWeight:'bold'}}>{message}</Text></Text>
      </View>
    )
  }
}