import axios from "axios";

const API = "http://localhost:5000/api";

export const loginUser = (data) => axios.post(`${API}/auth/login`, data);
export const registerUser = (data) => axios.post(`${API}/auth/register`, data);

export const sendMessage = (data, token) =>
  axios.post(`${API}/chat`, data, {
    headers: { Authorization: token }
  });

export const getChats = (token) =>
  axios.get(`${API}/chat`, {
    headers: { Authorization: token }
  });
