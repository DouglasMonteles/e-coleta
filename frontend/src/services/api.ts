import axois from 'axios';

const api = axois.create({
  baseURL: 'http://localhost:3333'
});

export default api;