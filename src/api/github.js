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
        return axios.post('http://localhost:8080', data, {
        })
        .then(getResponseData)
        .catch((err) => console.log(err));
    }
}