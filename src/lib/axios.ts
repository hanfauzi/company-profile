import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://merrydime-us.backendless.app",
});
