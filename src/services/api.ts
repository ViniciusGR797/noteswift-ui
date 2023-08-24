import axios, { AxiosError, AxiosResponse } from "axios";
import { parseCookies } from "nookies";

const baseURL = 'http://localhost:8080'; // Substitua pela sua URL base

export function createAPI(ctx = undefined) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${cookies['@auth.token']}`
    }
  });

  api.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      if (error.response?.status === 401 && window.location.pathname !== "/login") {
        window.location.href = '/login';
      }
      return Promise.reject(error); 
    }
  );

  return api;
}

export const api = createAPI();
