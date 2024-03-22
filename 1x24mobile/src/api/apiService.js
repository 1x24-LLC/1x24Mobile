import axios from "axios";
import { API_BASE_URL } from "/src/config";

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const setAuthToken = (token) => {
  apiService.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const removeAuthToken = () => {
  delete apiService.defaults.headers.common["Authorization"];
};

export const getAuthToken = () => {
  return apiService.defaults.headers.common["Authorization"];
};

export const apiGet = async (url) => {
  try {
    const response = await apiService.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiPost = async (url, body) => {
  try {
    const response = await apiService.post(url, body);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const apiDel = async (url) => {
  try {
    const response = await apiService.delete(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
