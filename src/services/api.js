import axios from 'axios';

const api = axios.create({
  baseURL: 'https://provadev.xlab.digital/api/v1',
});

export const apiJSON = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default api;
