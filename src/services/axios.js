import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://api.peka.ooo/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    window.location = "/ServerError";
    return Promise.reject(error);
  }
);

export default axiosInstance;
