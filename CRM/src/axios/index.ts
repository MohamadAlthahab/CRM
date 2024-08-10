import axios from 'axios'
import { Axios } from 'axios'

const axiosData: Axios = axios.create({
    baseURL:'http://localhost:5173/api',
        timeout: 30000,
});
export default axiosData;
