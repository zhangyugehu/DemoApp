import EmitterManager from "../manager/EmitterManager";
import { Log } from "../types/LogType";

export default class LoggerManager{
  static _instance;
  static getInstance(){
    if(!LoggerManager._instance){
      LoggerManager._instance = new LoggerManager();
    }
    return LoggerManager._instance;
  }

  _emmiterManager: EmitterManager;
  _logs: Array<Log>;

  constructor(){
    this._emmiterManager = EmitterManager.getInstance();
    this._logs = [];
  }

  log(message, tag, level){
    this._logs.push(new Log(level, tag, message));
    this._emmiterManager.notifyRefresh(this._logs);
  }

  clear(){
    this._logs=[];
    this._emmiterManager.notifyRefresh(this._logs);
  }

}