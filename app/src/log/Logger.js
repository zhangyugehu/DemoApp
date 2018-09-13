import EmitterManager from "../manager/EmitterManager";

export default class Logger{
  static instance;
  static getInstance(){
    if(!Logger.instance){
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  _emmiterManager: EmitterManager;
  constructor(){
    this._emmiterManager = EmitterManager.getInstance();
  }

  log(message, tag, level){
    this._emmiterManager.appendLog(message, tag, level)
  }
  i(message, tag){
    this._emmiterManager.logI(message, tag)
  }
  d(message, tag){
    this._emmiterManager.logD(message, tag)
  }
  w(message, tag){
    this._emmiterManager.logW(message, tag)
  }
}