import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class HorizontalSpliter extends Component {

  static defaultProps={
    shouldUpdata: false
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  shouldComponentUpdate(){
    return this.props.shouldUpdata;
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{height: StyleSheet.hairlineWidth, flex:1, backgroundColor: '#F0F0F0'}} />
      </View>
    );
  }
}


export {
  HorizontalSpliter,
}