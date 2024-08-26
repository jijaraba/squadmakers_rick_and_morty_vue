import { api } from '../plugins/axios';
import { useNotify } from '../composables/useNotify';

interface DataRequest {
  url: string;
  payload?: any;
  errMessage?: string;
  API_TEST?: boolean;
  functionTest?: (params: any) => Promise<any>;
  params?: any;
}

const makeRequest = async (
  dataRequest: DataRequest,
  httpMethod: 'post' | 'put' | 'get' | 'delete',
) => {
  const {
    url,
    payload,
    API_TEST = false,
    errMessage = '',
    functionTest = null,
    params = null,
  } = dataRequest;

  let response = null;
  const { error } = useNotify();

  const callApi = async (urlApi: string, data: any) => {
    try {
      switch (httpMethod) {
        case 'get': {
          const resultGet = await api.get(urlApi, data);
          return resultGet.data;
        }
        case 'post': {
          const resultPost = await api.post(urlApi, data);
          return resultPost.data;
        }
        case 'put': {
          const resultPut = await api.put(urlApi, data);
          return resultPut.data;
        }
        case 'delete': {
          const resultDelete = await api.delete(urlApi, data);
          return resultDelete.data;
        }
        default:
          return [];
      }
    } catch (err) {
      if (errMessage !== '') {
        error({
          message: errMessage,
          type: 'error',
        });
      }
      throw err;
    }
  };

  if (!API_TEST) {
    response = await callApi(url, payload);
  }

  if (functionTest) {
    response = await functionTest(params);
  }

  return response;
};

export const post = (dataRequest: DataRequest) =>
  makeRequest(dataRequest, 'post');
export const put = (dataRequest: DataRequest) =>
  makeRequest(dataRequest, 'put');
export const get = (dataRequest: DataRequest) =>
  makeRequest(dataRequest, 'get');
export const remove = (dataRequest: DataRequest) =>
  makeRequest(dataRequest, 'delete');
