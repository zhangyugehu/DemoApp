import { DeviceEventEmitter } from 'react-native';
import ListenerType from '../constants/ListenerType';
import { Log } from '../types/LogType';
export default class EmitterManager{

  static instance;
  static getInstance(){
    if(!EmitterManager.instance){
      EmitterManager.instance = new EmitterManager();
    }
    return EmitterManager.instance;
  }

  // logger start >>>>>>>>>>>>>>>>>>>>>>>>>>>
  // appendLog(message, tag, level){
  //   if(!__DEV__) return;
  //   DeviceEventEmitter.emit(ListenerType.LOGGER_APPEND, message, tag, level);
  // }

  // logI(message, tag){
  //   if(!__DEV__) return;
  //   DeviceEventEmitter.emit(ListenerType.LOGGER_I, message, tag);
  // }
  // logD(message, tag){
  //   if(!__DEV__) return;
  //   DeviceEventEmitter.emit(ListenerType.LOGGER_D, message, tag);
  // }
  // logW(message, tag){
  //   if(!__DEV__) return;
  //   DeviceEventEmitter.emit(ListenerType.LOGGER_W, message, tag);
  // }

  notifyRefresh(logs: Array<Log>){
    if(!__DEV__) return;
    DeviceEventEmitter.emit(ListenerType.LOGGER, logs);
  }
  // logger end <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
}