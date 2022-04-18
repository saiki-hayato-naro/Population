import Vue from "vue";
import axios from "axios";
import { resas } from "@/apiConfig";

const http = axios.create({
  headers: { "X-API-KEY": resas.apiKey }
});

http.interceptors.response.use(
  response => {
    return Promise.resolve({
      data: response.data,
      statusCode: response.data.statusCode,
      message: response.data.message
    });
  },
  error => {
    Vue.toasted.clear();
    Vue.toasted.error(error);
    return Promise.reject(error.response);
  }
);

export default http;
