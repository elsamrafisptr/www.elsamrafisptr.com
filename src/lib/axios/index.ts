import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("Error status", error.response.status);
      console.error("Error data", error.response.data);
    } else {
      console.error("Network error", error.message);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
