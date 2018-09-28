import http from './http';
import api from '../api';

export default Github={
  getStarred(){
    const {base_url, token} = api.github.config
    const url = `${base_url}${api.github.url.starred}${token}`;
    return http.get(url).then(resp=>resp.json());
  }
};