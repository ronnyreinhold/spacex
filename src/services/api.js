import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches'
})

export default api;