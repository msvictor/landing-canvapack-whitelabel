import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ExpiredSessionError } from '../entities';

const { REACT_APP_BASE_PATH } = process.env;

export const request = axios.create({
  baseURL: REACT_APP_BASE_PATH,
  timeout: 30000, // 30 seconds timeout
});

const successResponse = (response: any): AxiosResponse => response;

const errorResponse = (
  error: ErrorResponse,
): ExpiredSessionError | ErrorResponse => {
  throw error;
};

const addAuthHeaders = async (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig> => {
  return {
    ...config,
    headers: {
      ...config.headers,
    },
  };
};

request.interceptors.response.use(successResponse, errorResponse);

request.interceptors.request.use(addAuthHeaders);

export default request;
