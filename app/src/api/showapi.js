const config={
  base_url: "http://route.showapi.com",
  _app_id: "76072",
  _secret: "eeee88ac42054920b3894db1e5069558",

  set app_id(app_id){
    this._app_id = app_id;
  },
  get app_id(){
    return this._app_id;
  },
  set secret(secret){
    this._secret = secret;
  },
  get secret(){
    return this._secret;
  }
};
const url={
  huaban: "/819-1",
};

export default showapi = { config, url };