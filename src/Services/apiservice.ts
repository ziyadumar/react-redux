import axios from "axios";

const http = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/' })
http.interceptors.request.use(request => {
    // show loader if any
    return request;
});
http.interceptors.response.use(response => {
    // hide loader
    return response;
});

const httpCanel = axios.CancelToken.source();

export { http, httpCanel };