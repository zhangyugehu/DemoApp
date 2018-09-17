import React from 'react'
import { Text, View } from 'react-native'
import { Logger } from '../../components/log-view';

const TAG = "TabTwoView"
export default class TabTwoView extends React.PureComponent {
  componentWillMount(){
    Logger.i("componentWillMount", TAG);
  }
  componentDidMount(){
    Logger.i("componentDidMount", TAG);
  }
  componentWillUpdate(){
    Logger.i("componentWillUpdate", TAG);
  }
  componentWillUnmount(){
    Logger.i("componentWillUnmount", TAG);
  }
  render() {
    Logger.i("render", TAG);
    return (
      <View>
        <Text> TabTwoView </Text>
      </View>
    )
  }
}