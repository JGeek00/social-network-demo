import axios from 'axios';
import config from '../config.json';

export const login = async (username, password) => {
    const response = await axios.post(`${config.apiUrl}/login`, {
        username, 
        password
    });
    return response;
}

export const checkLogin = async () => {
    const response = await axios.get(`${config.apiUrl}/checklogin`, {
        headers: {
            'x-access-token': localStorage.getItem('jwt')
        }
    });
    return response;
}