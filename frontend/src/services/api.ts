import axois from 'axios';

const api = axois.create({
  baseURL: 'http://localhsot:3333'
});

export default api;