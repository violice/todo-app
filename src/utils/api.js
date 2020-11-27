import Axios from 'axios';

const AxiosInstance = Axios.create({
  baseURL: `${process.env.REACT_APP_BASE_API_URL}`,
  withCredentials: true,
});

const createStringParams = (params = {}) => {
  if (Object.keys(params).length === 0) {
    return '';
  }
  const stringParams = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
  return `?${stringParams}`;
};

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

const throwError = (response) => {
  if (response) {
    const { status, data: { error, message } } = response;
    const err = { code: status, message: error || message, responce: true };
    throw err;
  }
  const err = { message: 'Сервер недоступен' };
  throw err;
};

const api = {
  get: async (url, params) => {
    try {
      const { data } = await AxiosInstance.get(`${url}${createStringParams(params)}`, config);
      if (data.error) {
        throw { response: { data } };
      }
      return data;
    } catch ({ response }) {
      return throwError(response);
    }
  },
  post: async (url, body) => {
    try {
      const { data } = await AxiosInstance.post(url, body, config);
      if (data.error) {
        throw { response: { data } };
      }
      return data;
    } catch ({ response }) {
      return throwError(response);
    }
  },
  put: async (url, body) => {
    try {
      const { data } = await AxiosInstance.put(url, body, config);
      return data;
    } catch ({ response }) {
      return throwError(response);
    }
  },
  delete: async (url) => {
    try {
      const { data } = await AxiosInstance.delete(url, config);
      return data;
    } catch ({ response }) {
      return throwError(response);
    }
  },
};

export default api;
