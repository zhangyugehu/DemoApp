import { DeviceEventEmitter } from 'react-native';
import ListenerType from '../constants/ListenerType';
export default class EmitterManager{

  static instance;
  static getInstance(){
    if(!EmitterManager.instance){
      EmitterManager.instance = new EmitterManager();
    }
    return EmitterManager.instance;
  }
  appendLog(message, tag){
    if(!__DEV__) return;
    DeviceEventEmitter.emit(ListenerType.LOGGER_APPEND, message, tag);
  }
}