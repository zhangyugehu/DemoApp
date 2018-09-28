import http from "./http";
import api from "../api";
// class Huaban {

//   static Type={
//     /**大胸妹 */
//     DXM: 34,
//     /** 小清新 */
//     XQX: 35,
//     /** 文艺范 */
//     WYF: 36,
//     /** 性感妹 */
//     XGM: 37,
//     /** 大长腿 */
//     DCT: 38,
//     /** 黑丝袜 */
//     HSW: 39,
//     /** 小翘臀 */
//     XQT: 40,
//   }

//   static instance = null;
//   static getInstance(){
//     if(!Huaban.instance){
//       Huaban.instance = new Huaban();
//     }
//     return Huaban.instance;
//   }

//   _system_params={
//     showapi_appid: api.showapi.config.app_id,
//     showapi_sign: api.showapi.config.secret,
//     timeout: 5000,  
//   }

//   getData(type=Huaban.Type.DXM, page=1, num=20) {

//     const url = `${api.showapi.config.base_url}${api.showapi.url.huaban}`
//     return http.get(url, {
//       ...this._system_params,
//       type,
//       page,
//       num
//     }).then(res=>res.json())
//     .then(response=>{
//       const { showapi_res_code, showapi_res_error, showapi_res_body } = response;
//       if(Boolean(showapi_res_code)){
//         return Promise.reject(showapi_res_error);
//       }else{
//         return Promise.resolve(showapi_res_body);
//       }
//     });
//   }
// }
// const HuabanApi:Huaban = Huaban.getInstance();

// export { HuabanApi };

export default huaban={

  Type:{
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
  },

  _system_params:{
    showapi_appid: api.showapi.config.app_id,
    showapi_sign: api.showapi.config.secret,
    timeout: 5000,  
  },

  getData(type=this.Type.DXM, page=1, num=20) {

    const url = `${api.showapi.config.base_url}${api.showapi.url.huaban}`
    return http.get(url, {
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
