import React from 'react'
import { Text, View } from 'react-native'

export default class TabTwoView extends React.Component {

  componentDidMount(){
    console.warn("TabTwoView componentDidMount")
  }
  render() {
    return (
      <View>
        <Text> TabTwoView </Text>
      </View>
    )
  }
}