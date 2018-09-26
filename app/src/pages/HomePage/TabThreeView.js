import React from 'react'
import { Text, View } from 'react-native'
import { Logger } from '../../components/log-view';

const TAG = "TabThreeView";
export default class TabThreeView extends React.PureComponent {

  constructor(props){
    super(props);
    // this.counter = 0;
    // this.state={};
    // Logger.d(TAG, ++this.counter);
    // setInterval(()=>{
    //   Logger.d(TAG, ++this.counter);
    // }, Math.random() * 10 * 1000);
  }

  componentWillMount(){
    Logger.i(TAG, "componentWillMount")
  }
  componentWillUpdate(){
    Logger.i(TAG, "componentWillUpdate")
  }
  componentWillUnmount(){
    Logger.i(TAG, "componentWillUnmount")
  }

  render() {
    return (
      <View>
        <Text> TabThreeView </Text>
      </View>
    )
  }
}