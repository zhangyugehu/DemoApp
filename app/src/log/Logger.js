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

  log(message, tag){
    this._emmiterManager.appendLog(message, tag)
  }
}