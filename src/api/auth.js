import api from 'utils/api';

const authApi = {
  auth: ([body]) => api.post('/auth', body),
};

export default authApi;
