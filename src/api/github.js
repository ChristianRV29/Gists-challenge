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
<<<<<<< HEAD
        // return axios.post('http://localhost:8080/api/github/authenticate', data).then(getResponseData).catch(escalateError);
=======
        console.log(data);
>>>>>>> 81f62490cf58a1f5b282359d22b7fa4cc8d2469f
        return axios.post('http://github.com/login/oauth/access_token', data, {
            headers: {
                'Content-Type:': 'application/json'
            },
        })
        .then(getResponseData)
<<<<<<< HEAD
        .catch((err) => console.log('Puto error: ', err));
=======
        .catch(escalateError);
>>>>>>> 81f62490cf58a1f5b282359d22b7fa4cc8d2469f
    }
}