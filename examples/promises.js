import axios from "axios";

const BASE_URL = "https://httpbin.dev/status";

// Función que devuelve una promesa correcta
export function successfullRequest() {
  return axios.get(`${BASE_URL}/200`);
}

// Función que devuelve una promesa fallida
export function failedRequest() {
  return axios.get(`${BASE_URL}/403`);
}
