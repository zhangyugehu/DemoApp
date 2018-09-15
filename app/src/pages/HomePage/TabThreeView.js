import React from 'react'
import { Text, View } from 'react-native'

const TAG = "TabThreeView";
export default class TabThreeView extends React.PureComponent {

  constructor(props){
    super(props);
    this.counter = 0;
    this.state={};
    logger.d(++this.counter, TAG);
    setInterval(()=>{
      logger.d(++this.counter, TAG);
    }, 1000);
  }
  render() {
    return (
      <View>
        <Text> TabThreeView </Text>
      </View>
    )
  }
}