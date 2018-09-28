const config={
  base_url:"https://api.github.com",
  _token: "ee50b1e593117f107d24c21e07b39556e613ca22",
  set token(token){
    this._token = token;
  },
  get token(){
    return this._token;
  }
};
const url = {
  starred: `/user/starred?access_token=`,
};

export default github={config, url}