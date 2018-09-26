'use strict';

const fetch = require("node-fetch");

function test(){
  const url = "http://route.showapi.com/819-1";
  const headers={
    "enctype": "application/x-www-form-urlencoded",
    "Accept": "*/*",
    "Content-Type": "application/json",
    "Accept-Encoding": "gzip"
  }
  const systemParams = {
    showapi_appid: 76072,
    showapi_sign: "eeee88ac42054920b3894db1e5069558",
    showapi_res_gzip: 1,
    showapi_timestamp: new Date().getTime()
  };
  const appParams = {
    type: 38,
    num: 20,
    page: 1
  };
  fetch(url, {
    method: "POST",
    headers,
    body: {...systemParams, ...appParams}
  })
  .then(response=>response.json())
  .then(response=>{
    const { showapi_res_error, showapi_res_code, showapi_res_body } = response;
    console.log(showapi_res_error, showapi_res_code, showapi_res_body);
  })
}

const ShowApi = require("showapi-sdk");

function test_sdk(){
  const url = "http://route.showapi.com/819-1";
  const appId = "76072";
  const secret = "eeee88ac42054920b3894db1e5069558";

  ShowApi.setting({
    url,
    appId,
    secret,
    timeout: 5000,
    options:{
      testParam: "test"
    }
  });

  const request = ShowApi.request();
  request.appendText('type', '34');
  request.appendText('num', '20');
  request.appendText('page', '1');

  request.post(function(data){
    const { showapi_res_error, showapi_res_code, showapi_res_body } = data;
    console.log(showapi_res_body);
  })
}

test_sdk();