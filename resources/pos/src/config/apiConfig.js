import axios from 'axios';
import axiosInterceptor from './axiosInterceptor';
import {environment} from './environment';

const wampServer = environment.URL.includes('localhost') ?  environment.URL + ':8000/api/' : environment.URL + '/api/';
const axiosApi = axios.create({
    baseURL: wampServer,
});
axiosInterceptor.setupInterceptors(axiosApi, true, false);
export default axiosApi;
