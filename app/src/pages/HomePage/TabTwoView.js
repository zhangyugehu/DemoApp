import React from 'react'
import { Text, View } from 'react-native'

export default class TabTwoView extends React.PureComponent {
  componentDidMount(){
    logger.log("componentDidMount", "TabTwoView")
  }
  render() {
    logger.log("render", "TabTwoView")
    return (
      <View>
        <Text> TabTwoView </Text>
      </View>
    )
  }
}