import axios from 'axios';
const BASE_URL = 'https://api.spacexdata.com/v3';
export const axiosInstance = axios.create({
	baseURL: BASE_URL,
	crossdomain: true
});