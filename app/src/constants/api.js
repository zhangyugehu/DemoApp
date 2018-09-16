const BASE_URL = "https://api.github.com";
export default class Api{
    static token = "d09e2feae92981746369c91d9d195d5988362420";
    static starred = `${BASE_URL}/user/starred?access_token=${Api.token}`;
}
