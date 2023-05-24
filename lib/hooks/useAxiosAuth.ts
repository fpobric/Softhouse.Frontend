"use client";
import { getSession } from "next-auth/react";
import axios, { AxiosRequestConfig } from "axios";
import config from "../../config";

interface AxiosRequestExtended {
  headers: any;
}

const baseURL = config.BACKEND_API_URL;

const AxiosAuth = () => {
  const defaultOptions = {
    baseURL,
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(async (request: any) => {
    const session = await getSession();

    if (session) {
      const req = request as AxiosRequestConfig & AxiosRequestExtended;
      if (!req.headers["Authorization"])
        req.headers["Authorization"] = `Bearer ${session?.user.token}`;

      return request;
    }
    return request;
  });

  instance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return error;
    }
  );

  return instance;
};

export default AxiosAuth();
