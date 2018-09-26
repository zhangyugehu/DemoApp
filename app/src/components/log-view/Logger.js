import LoggerManager from "../../log/LoggerManager";
import { Log } from "../../types/LogType";

const DEFAULT_TAG = "LogView";
export default class Logger{
  
  static log(tag, message){
    try{
      message = JSON.stringify(message);
    }catch(e){}
    LoggerManager.getInstance().log(message, tag, Log.Level.I);
  }

  static i(tag, message){
    try{
      message = JSON.stringify(message);
    }catch(e){}
    const loggerManager: LoggerManager = LoggerManager.getInstance();
    loggerManager.log(message, tag, Log.Level.I);
  }

  static d(tag, message){
    try{
      message = JSON.stringify(message);
    }catch(e){}
    LoggerManager.getInstance().log(message, tag, Log.Level.D);
  }

  static e(tag, message){
    // try{
    //   message = JSON.stringify(message);
    // }catch(e){}
    LoggerManager.getInstance().log(message, tag, Log.Level.E);
  }
}