import config from "../config";
import axios from "axios";
import AxiosAuth from "../lib/hooks/useAxiosAuth";

const createGetAxiosRequest = (
  url: string,
  requestHeaders?: any | null | undefined
) => {
  let headers = requestHeaders;

  return AxiosAuth({
    method: "get",
    url: `${config.BACKEND_API_URL}/${url}`,
    headers: { ...headers, withCredentials: true },
    cancelToken: axios.CancelToken.source().token,
  });
};

const createPostWithAuthAxiosRequest = (
  url: string,
  data?: any,
  requestHeaders?: any | null | undefined
) => {
  let headers = requestHeaders || {};

  return AxiosAuth({
    method: "post",
    url: `${config.BACKEND_API_URL}/${url}`,
    headers: { ...headers, withCredentials: true },
    data: data,
    cancelToken: axios.CancelToken.source().token,
  });
};
const createPostAxiosRequest = (
  url: string,
  data?: any,
  requestHeaders?: any | null | undefined
) => {
  let headers = requestHeaders || {};

  return axios({
    method: "post",
    url: `${config.BACKEND_API_URL}/${url}`,
    headers: headers,
    data: data,
    cancelToken: axios.CancelToken.source().token,
  });
};

const createPutAxiosRequest = (
  url: string,
  data: any,
  requestHeaders?: any | null | undefined
) => {
  let headers = requestHeaders || {};

  return AxiosAuth({
    method: "put",
    url: `${config.BACKEND_API_URL}/${url}`,
    headers: { ...headers, withCredentials: true },
    data: data,
    cancelToken: axios.CancelToken.source().token,
  });
};

const createDeleteAxiosRequest = (
  url: string,
  requestHeaders?: any | null | undefined
) => {
  let headers = requestHeaders || {};

  return AxiosAuth({
    method: "delete",
    url: `${config.BACKEND_API_URL}/${url}`,
    headers: { ...headers, withCredentials: true },
    cancelToken: axios.CancelToken.source().token,
  });
};

const requests = {
  createGetAxiosRequest: createGetAxiosRequest,
  createPostAxiosRequest: createPostAxiosRequest,
  createPutAxiosRequest: createPutAxiosRequest,
  createDeleteAxiosRequest: createDeleteAxiosRequest,
  createPostWithAuthAxiosRequest: createPostWithAuthAxiosRequest,
};

export default requests;
