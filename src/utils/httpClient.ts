import axios from "axios";
import { TOKEN_KEY } from "../contexts/AuthContext";

export const httpClient = axios.create({
  baseURL: "https://musicbrainz.org/ws/2",
});

httpClient.interceptors.request.use(
  (config) => {
    config.headers = config.headers || {};
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error en la solicitud HTTP:", error);
    return Promise.reject(error);
  }
);
