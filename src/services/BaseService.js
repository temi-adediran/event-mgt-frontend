import { AUTH_TOKEN_KEY, API_TOKEN_KEY } from "../constants/auth";

const API_URL = process.env.REACT_APP_API_URL;
const getHeaders = () => {
  const headers = { 'Content-Type': 'application/json' };
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  // console.log(token);
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
};

export const BaseService = {
  async get(url) {
    const headers = getHeaders();
    const request = await fetch(`${API_URL}/${url}`, { headers });
    if (request.status >= 400) throw request;
    return request.json();
  },
  async post(url, data = {}, isAuth = false) {
    const headers = getHeaders();
    const request = await fetch(`${API_URL}/${url}`, {
      headers,
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (request.status >= 400) throw request;
    if (isAuth) {
      const token = request.headers.get(API_TOKEN_KEY);
      localStorage.setItem(AUTH_TOKEN_KEY, token)
    }
    return request.json();
  },
  async put(url, data = {}) {
    const headers = getHeaders();
    const request = await fetch(`${API_URL}/${url}`, {
      headers,
      method: 'PUT',
      body: JSON.stringify(data),
    });
    if (request.status >= 400) throw request;
    return request.json();
  },
  async delete(url) {
    const headers = getHeaders();
    const request = await fetch(`${API_URL}/${url}`, {
      headers,
      method: 'DELETE',
    });
    if (request.status >= 400) throw request;
    return request.json();
  },
};
