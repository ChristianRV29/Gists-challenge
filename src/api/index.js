import axios from 'axios';

let optionTry = 0;
const apiURL = (process.env.REACT_APP_GITHUB_API || 'https://api.github.com');

const headers = {
    'Content-Type': 'application/json',
};

const api = axios.create({
    baseURL: apiURL,
    headers,
});

export const getResponseData = (resp) => resp.data;

export const escalateError = (err) => {
    let errorFromResponse;
    let errorFromResponseScheduler;
    try {
        errorFromResponse = err.response.data.error.toString();
        errorFromResponseScheduler = err.response.data.descriptionDetail.toString();
    } catch (e) {
        errorFromResponse = undefined;
    }
    if (errorFromResponse === 'You need authorization to access this API!') {
        optionTry += 1;
        if (optionTry > 1) {
            window.location.href = '/login';
        }
    } else {
        const newErr = new Error(errorFromResponse
            || errorFromResponseScheduler || (err instanceof Error
                ? err.message
                || err.toString()
                : typeof err === 'string' ? err : err.toString() || 'Error Inesperado'));
        try {
            newErr.data = err.response.data;
        } catch (e) {
        }
        throw newErr;
    }
};

export default api;
