import axios from 'axios';
import api, { getResponseData, escalateError } from './index';

export default class GithubApi {
    static getGists() {
        return api.get('/gists?per_page=10').then(getResponseData).catch(escalateError);
    }

    static getGistsByUser(userName) {
        return api.get(`/users/${userName}/gists?per_page=10`)
        .then(getResponseData)
        .catch(escalateError);
    }

    static login(data) {
        console.log(data);
        return axios.post('http://github.com/login/oauth/access_token', data, {
            headers: {
                'Content-Type:': 'application/json'
            },
        })
        .then(getResponseData)
        .catch(escalateError);
    }
}