import showApi from "showapi-sdk";

class Huaban {

  static TYPE_DXM = 34;
  static TYPE_XQX = 35;
  static TYPE_WYF = 36;
  static TYPE_XGM = 37;
  static TYPE_DCT = 38;
  static TYPE_HSW = 39;
  static TYPE_XQT = 40;

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

  constructor() {
    showApi.setting({
      url: this._url,
      appId: this._appId,
      secret: this._secret,
      timeout: 5000,
      options: {
        testParam: "test"
      }
    });
  }

  getData(type=TYPE_DXM, page=1, num=20) {
    const request = showApi.request();
    request.appendText("type", type);
    request.appendText("page", page);
    request.appendText("num", num);

    return new Promise((resolve, reject)=>{
      request.post(function(data) {
        const { showapi_res_error, showapi_res_code, showapi_res_body } = data;
        if(Boolean(showapi_res_code)){
          reject(showapi_res_error);
          return;
        }
        resolve(showapi_res_body)
      });
    }).catch(console.error);
  }
}
const HuabanApi:Huaban = Huaban.getInstance();

export { HuabanApi };
