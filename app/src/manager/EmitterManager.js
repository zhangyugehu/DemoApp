import { DeviceEventEmitter } from 'react-native';
import ListenerType from '../constants/ListenerType';
export default class EmitterManager{

  static instance;
  static newInstance(){
    if(!EmitterManager.instance){
      EmitterManager.instance = new EmitterManager();
    }
    return EmitterManager.instance;
  }
  test(){
    console.warn("test")
  }

  appendLog(message){
    if(!__DEV__) return;
    DeviceEventEmitter.emit(ListenerType.LOGGER_APPEND, message);
  }
}