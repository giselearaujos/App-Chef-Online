import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://delivery.leaderaplicativos.com.br/api'
});

