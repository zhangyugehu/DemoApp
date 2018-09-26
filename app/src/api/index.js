import http from "../../http";

export const HuabanType={
  /**大胸妹 */
  DXM: 34,
  /** 小清新 */
  XQX: 35,
  /** 文艺范 */
  WYF: 36,
  /** 性感妹 */
  XGM: 37,
  /** 大长腿 */
  DCT: 38,
  /** 黑丝袜 */
  HSW: 39,
  /** 小翘臀 */
  XQT: 40,
}
class Huaban {

  static instance = null;
  static getInstance(){
    if(!Huaban.instance){
      Huaban.instance = new Huaban();
    }
    return Huaban.instance;
  }

  _url = "http://route.showapi.com/819-1";
  _appId = "76072";
  _secret = "eeee88ac42054920b3894db1e5069558";

  _system_params={
    showapi_appid: this._appId,
    showapi_sign: this._secret,
    timeout: 5000,  
  }

  constructor() {
  }

  getData(type=HuabanType.DXM, page=1, num=20) {

    return http.get(this._url, {
      ...this._system_params,
      type,
      page,
      num
    }).then(res=>res.json())
    .then(response=>{
      const { showapi_res_code, showapi_res_error, showapi_res_body } = response;
      if(Boolean(showapi_res_code)){
        return Promise.reject(showapi_res_error);
      }else{
        return Promise.resolve(showapi_res_body);
      }
    });
  }
}
const HuabanApi:Huaban = Huaban.getInstance();

export { HuabanApi };
