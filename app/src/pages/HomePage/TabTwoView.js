import React from 'react'
import { Text, View } from 'react-native'

const TAG = "TabTwoView"
export default class TabTwoView extends React.PureComponent {
  componentWillMount(){
    logger.i("componentWillMount", TAG);
  }
  componentDidMount(){
    logger.i("componentDidMount", TAG);
  }
  componentWillUpdate(){
    logger.i("componentWillUpdate", TAG);
  }
  componentWillUnmount(){
    logger.i("componentWillUnmount", TAG);
  }
  render() {
    logger.i("render", TAG);
    return (
      <View>
        <Text> TabTwoView </Text>
      </View>
    )
  }
}