const axios = require("axios");

const instance = (url, data, method) => {
  debugger
  const { token } = localStorage;
  return axios.create({
    baseURL: 'http://localhost:4000',
    headers: { 'Authorization': token },
  }).request({
    method,
    url,
    params: data,
    data
  });
}

module.exports = {
  axiosInstance: instance
}