import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnv';


const { VITE_API_URL } = getEnvVariables()




const taskApi = axios.create({
    baseURL: VITE_API_URL
});

// Todo: configurar interceptores
taskApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})


export default taskApi;