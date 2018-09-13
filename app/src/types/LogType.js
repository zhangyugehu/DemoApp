export class Log{
  static Level={
    I:"Info", D:"Debug", W:"Warning"
  }
  _time;
  _level;
  _message;
  _tag;

  constructor(level, tag, message){
    this._time = new Date();
    this._level = level;
    this._tag = tag;
    this._message = message;
  }
  set time(time){
    this._time = time;
  }
  get time(){
    return this._time;
  }
  set level(level){
    this._level = level;
  }
  get level(){
    return this._level;
  }
  set message(message){
    this._message = message;
  }
  get message(){
    return this._message;
  }
  set tag(tag){
    this._tag = tag;
  }
  get tag(){
    return this._tag;
  }
}