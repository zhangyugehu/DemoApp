import { Logger } from "../src/components/log-view";

const TAG = "http";

function log(title, object) {
  if (!__DEV__) return;
  Logger.d(TAG, title);
  Logger.d(TAG, object);
}
function log_start() {
  if (!__DEV__) return;
  Logger.i(TAG, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
}
function log_end() {
  if (!__DEV__) return;
  Logger.i(TAG, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
}
function log_split() {
  if (!__DEV__) return;
  Logger.i(TAG, "--------------------------------------------");
}

export default class http {
  static get(url, params) {
    if (params) {
      let paramsArray = [];
      //拼接参数
      Object.keys(params).forEach(key =>
        paramsArray.push(key + "=" + params[key])
      );
      if (url.search(/\?/) === -1) {
        url += "?" + paramsArray.join("&");
      } else {
        url += "&" + paramsArray.join("&");
      }
    }
    log("> POST url", url);
    //fetch请求
    return fetch(url, {
      method: "GET"
    });
  }

  static postJSON(url, params, headers={}) {
    log_start();
    log("> POST url", url);
    const body = JSON.stringify(params);
    const system_headers = {
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip",
      Accept: "*/*",
      enctype: "application/x-www-form-urlencoded"
    };
    headers = {...system_headers, ...headers};
    log("> headers: ", headers);
    log("> body: ", params);
    log_split();
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers,
        body
      }).then(response=>response.json())
        .then(
          response => {
            resolve(response);
            log("> response: ", JSON.stringify(response));
            log_end();
          },
          reason => {
            reject(reason);
            log("> error: ", reason);
            log_end();
          }
        );
    });
  }

  static postForm(url, params) {
    //fetch请求
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        enctype: "application/x-www-form-urlencoded"
      },
      body: params
    })
      .then(response => response.json())
  }
}
